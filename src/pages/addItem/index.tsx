import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { ArrowLeft, ChevronLeft } from 'react-native-feather';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'



export default function AddItem() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const [valueItem, setValueItem] = useState({
        nome: "",
        preco: "",
        descricao: "",
    });

    const postItem = async () => {
        try {
            console.log('item édi')
            const token = await AsyncStorage.getItem('token');
            const idRestaurante = await AsyncStorage.getItem('restauranteId');

            const item = {
                nome: valueItem.nome,
                preco: valueItem.preco,
                descricao: valueItem.descricao,
                categoria: selectedCategory,
                restaurante: idRestaurante
            }

            const response = await fetch("https://torder-api.vercel.app/api/produto", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(item)
            });
            const json = await response.json();

            navigation.replace('Book');
        } catch (error) {
            console.log("error " + error)
        }

    };

    const getCategory = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const idRestaurante = await AsyncStorage.getItem('restauranteId');

            const response = await fetch('https://torder-api.vercel.app/api/categoria/ObterCategoria/' + idRestaurante, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            })
            const json = await response.json();
            setCategory(json.categoria);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >

            <View style={styles.containerView}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ marginBottom: 50 }}
                >
                    <ChevronLeft
                        stroke="#DB2525"
                        width="30"
                        height="30"
                    />
                </TouchableOpacity>
                <Text style={styles.lblTitle}>Adicionar Produto</Text>





                <View style={styles.viewPicker}>
                    <Picker
                        style={styles.categoryPicker}
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) => { setSelectedCategory(itemValue); console.log(itemValue) }}
                    >
                        <Picker.Item label={"Selecione uma categoria"} value={""} />
                        {
                            category.map((item, index) => {
                                return (
                                    <Picker.Item label={item.nome} value={item._id} key={index} />
                                )
                            })
                        }
                    </Picker>
                </View>

                <TextInput
                    style={styles.txtItem}
                    placeholder="Nome"
                    onChangeText={(text) => setValueItem({ ...valueItem, nome: text })}
                    maxLength={20}
                    value={valueItem.nome}
                />
                <TextInput style={styles.txtItem}
                    placeholder="Descrição"
                    onChangeText={(text) => setValueItem({ ...valueItem, descricao: text })}
                    value={valueItem.descricao}
                />

                <Text style={styles.lblPrice}>Valor</Text>
                <TextInputMask style={styles.txtPrice}
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: '.',
                        delimiter: ',',
                        unit: '',
                        suffixUnit: ''
                      }}
                    placeholder="0.00"
                    keyboardType="numeric"
                    onChangeText={(text) => setValueItem({ ...valueItem, preco: text })}
                    value={valueItem.preco}
                ></TextInputMask>





                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.lblAddButton} onPress={() => { postItem() }}>Adicionar Item</Text>
                </TouchableOpacity>


            </View>
        </KeyboardAvoidingView>
    );
}

