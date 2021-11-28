import React, {useState} from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { ArrowLeft, ChevronLeft } from 'react-native-feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';






export default function EditTable({navigation}:{navigation:any}) {

    const [value, setValue] = useState({
        nome: "",
        quantidadeCadeiras: "",
        restaurante: ""        
    });

    

    const putTable = async () => {
        try {
            const idMesa = await AsyncStorage.getItem('mesaId');
            const token = await AsyncStorage.getItem('token');            

            const item = {
                nome: value.nome,
                quantidadeCadeiras: value.quantidadeCadeiras
            }

            const response = await fetch("https://torder-api.vercel.app/api/mesa/" + idMesa, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(item)
            });

            console.log(idMesa)
            navigation.replace('Table');
            const json = await response.json();
            console.log(json)
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

    return (
        <SafeAreaView style={styles.container}>
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
                    onChangeText={(text) => setValue({...value, nome: text})}
                    value={value.nome}
                    ></TextInput>
                <Text style={styles.labelChair}>Quantidade de Cadeiras</Text>

                <TextInput 
                    style={styles.nameTable}
                    keyboardType="numeric"
                    onChangeText={(text) => setValue({...value, quantidadeCadeiras: text})}
                    value={value.quantidadeCadeiras}
                    ></TextInput>
            </View>
            
            <View style={styles.addButtonView}>
                <TouchableOpacity style={styles.addButton} onPress={() => putTable()}>
                    <Text style={{fontWeight: 'bold', padding: 10, fontSize: 18, color: 'white'}}>Editar</Text>
                </TouchableOpacity>
            </View>      
        </SafeAreaView>
    );
}
