import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View,TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, ChevronLeft } from 'react-native-feather';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text'
import Modal from "react-native-modal";

export default function EditTable({ navigation }: { navigation: any }) {

    const [selectedStatus, setSelectedStatus] = useState("")
    const [bookedTable,setBookedTable] = useState(false);
    const [visibleConfirm,setVisibleConfirm] = useState(false);

    const [value, setValue] = useState({
        nome: "",
        quantidadeCadeiras: "",
        status: "",
    });


    const isTableBooked = async () =>{
        const idMesa = await AsyncStorage.getItem('mesaId');
        const token = await AsyncStorage.getItem('token');
        const response = await fetch('https://torder-api.vercel.app/api/reserva/mesaReservada?idMesa='+ idMesa, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }})
            
            const json = await response.json();     
            if(json.length != 0)
                setBookedTable(true)
            else
                setBookedTable(false)
    }


    const putTable = async () => {
        try {
            const idMesa = await AsyncStorage.getItem('mesaId');
            const token = await AsyncStorage.getItem('token');

            const item = {
                nome: value.nome,
                quantidadeCadeiras: value.quantidadeCadeiras,
                status: selectedStatus,
            }

            await fetch("https://torder-api.vercel.app/api/mesa/" + idMesa, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(item)
            });

            const response = await fetch('https://torder-api.vercel.app/api/reserva/mesaReservada?idMesa='+ idMesa, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }})
            
            const json = await response.json();     
            if(json.length != 0){
                json.reserva.map(data => {
                    fetch('https://torder-api.vercel.app/api/reserva/'+ data._id, {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                        body: JSON.stringify({status: "Concluido"})
                    })
                    navigation.replace('Booking')
                })
            }
            navigation.replace('Table');
        } catch (error) {
            console.log("error " + error)
        }

    };

    const getTable = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const idMesa = await AsyncStorage.getItem('mesaId');
            const response = await fetch("https://torder-api.vercel.app/api/mesa/" + idMesa, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            });

            const json = await response.json();
            json.mesa.map(data => {
                setValue({
                    nome: data.nome,
                    quantidadeCadeiras: data.quantidadeCadeiras
                })
            })

        } catch (error) {
            console.log("error " + error)
        }

    };

    function replace() {
        navigation.replace(
            "Table",
            null,
            null,
            Math.random().toString()
        )
    }


    useEffect(() => {
        getTable();
        isTableBooked();
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            <Modal 
                animationIn="slideInUp"
                animationOutTiming={1000}
                animationInTiming={600}
                backdropTransitionOutTiming={800}
                animationOut="slideOutDown"
                isVisible={visibleConfirm}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        
                        <View >
                        <Text style={{fontSize:18,color:'red'}}>
                            Esta mesa está reservada ou 
                        </Text>
                        <Text style={{fontSize:18,color:'red'}}>
                            o cliente está presente na mesa.
                        </Text>
                        <Text style={{fontSize:18,paddingTop:'5%'}}>
                            Deseja Alterar o Status da mesa?
                        </Text>
                        <View style={{
                            padding:"2%",
                            marginTop:'10%',
                            justifyContent:'space-evenly',
                            flexWrap: "wrap",
                            flexDirection: "row",
                        }}>
                        <TouchableOpacity 
                        style={{}}
                        onPress={()=>{setVisibleConfirm(false)}}
                        >
                            <Text style={{fontSize:20,color:'red',fontWeight:'bold'}}>
                            Não
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{}}
                        onPress={()=>{putTable();navigation.replace('Table')}}
                        >
                            <Text style={{fontSize:20,color:'green',fontWeight:'bold'}}>
                            Sim
                        </Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                    </View>
                </Modal>

            <View style={styles.topView}>
                <TouchableOpacity style={styles.backtouch} onPress={() => navigation.replace("Table")}>
                    <ChevronLeft
                        stroke="#DB2525"
                        width="30"
                        height="30"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Editar Mesa</Text>
                <Text style={styles.labelName}>Nome da Mesa</Text>
                <TextInput
                    style={styles.nameTable}
                    maxLength={20}
                    onChangeText={(text) => setValue({ ...value, nome: text })}
                    value={value.nome}
                ></TextInput>
                <Text style={styles.labelChair}>Quantidade de Cadeiras</Text>

                <TextInputMask
                    type={'only-numbers'}
                    style={styles.nameTable}
                    keyboardType="numeric"
                    onChangeText={(text) => setValue({ ...value, quantidadeCadeiras: text })}
                    value={String(value.quantidadeCadeiras)}
                ></TextInputMask>


                <Text style={styles.labelName}>Status da Mesa</Text>
                <View style={styles.viewPicker}>
                    <Picker
                        style={styles.statusPicker}
                        selectedValue={selectedStatus}
                        onValueChange={(itemValue) => { setSelectedStatus(itemValue) }}
                    >
                        <Picker.Item label={"-- Selecione o status da mesa --"} value={""} />
                        <Picker.Item label={"Disponivel"} value={"Disponivel"} />
                        <Picker.Item label={"Ocupada"} value={"Ocupada"} />
                    </Picker>
                </View>
            </View>

            <View style={styles.addButtonView}>
                <TouchableOpacity style={styles.addButton} onPress={() => {if(bookedTable){setVisibleConfirm(true)}}}>
                    <Text style={{ fontWeight: 'bold', padding: 10, fontSize: 18, color: 'white' }}>Editar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
