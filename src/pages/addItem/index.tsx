import React , { useState }from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function AddItem() {
    const navigation = useNavigation();
    const [category, setCategory] = useState(['Entrada','Lanches','Sobremesas','Especiais']);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const [valueItem,setValueItem] = useState({
        nome:"",        
        valor: "",
        restaurante: "619d6649450c1c091db6a597"
    });

    const postItem = async () => {
        const response = await fetch("https://torder-api.vercel.app/api/produto", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWNmOThhNzcyOWQ1NDFmNmNlM2I4MSIsImlhdCI6MTYzNzcwNTE4MCwiZXhwIjoxNjM3NzkxNTgwfQ.fmXV1A0D71O-SrSjFYDde9rGgkB70JZm0ZGxR_X0P3A'
            },
            body: JSON.stringify(valueItem)
        });

        const json = await response.json();
        console.log(json);

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
                            
                        />
                        <TextInput style={styles.txtItem} 
                            placeholder="Descrição"
                            />                

                        <Text style={styles.lblPrice}>Valor</Text> 
                        <TextInput style={styles.txtPrice} 
                        placeholder="0.00" 
                        keyboardType="numeric"
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

