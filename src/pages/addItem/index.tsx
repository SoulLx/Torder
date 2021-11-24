import React , { useState }from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function AddItem() {
    const navigation = useNavigation();
    const [category, setCategory] = useState(['Entrada','Lanches','Sobremesas','Especiais']);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const [valueItem,setValueItem] = useState({
        nome:"",        
        preco: "",
        descricao: ""
    });

    const postItem = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const idRestaurante = await AsyncStorage.getItem('restauranteId');

            const item = {
                nome: valueItem.nome,
                preco: valueItem.preco,
                descricao: valueItem.descricao,
                restaurante: idRestaurante
            }

            const response = await fetch("https://torder-api.vercel.app/api/produto", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': 'Bearer '+ token
                },
                body: JSON.stringify(item)
            });
            const json = await response.json();
        } catch (error) {
            console.log("error "+ error)
        }
        
    };

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft 
                            stroke="black" 
                            width="30"
                            height="30"
                        />
                    </TouchableOpacity> 
                    <Text style={styles.lblTitle}>Adicionar prato</Text>           
                </View>

                <View style={styles.view3}>
                    
                    <View style={styles.viewPicker}> 
                        <Picker
                            style={styles.categoryPicker}
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue) =>
                                setSelectedCategory(itemValue)
                            }>
                            {
                                category.map(cr => {
                                    return <Picker.Item label={cr} value={cr}/>
                                })
                            }
                            </Picker>
                    </View>
                    

                        <TextInput 
                            style={styles.txtItem} 
                            placeholder="Nome"
                            onChangeText={(text) => setValueItem({...valueItem, nome: text})}
                            value={valueItem.nome}
                        />
                        <TextInput style={styles.txtItem} 
                            placeholder="Descrição"
                            onChangeText={(text) => setValueItem({...valueItem, descricao: text})}
                            value={valueItem.descricao}
                            />                

                        <Text style={styles.lblPrice}>Valor</Text> 
                        <TextInput style={styles.txtPrice} 
                        placeholder="0.00" 
                        keyboardType="numeric"
                        onChangeText={(text) => setValueItem({...valueItem, preco: text})}
                        value={valueItem.preco}
                        />

                </View>
                <View style={styles.view4}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.lblAddButton} onPress={() => postItem()}>Adicionar Item</Text>
                    </TouchableOpacity>
                </View>      
            </SafeAreaView>
        );
}

