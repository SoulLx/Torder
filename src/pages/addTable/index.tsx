import React, {useState} from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function AddTable() {
    const navigation = useNavigation();    

    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState({
        nome: "",
        quantidadeCadeiras: "",
        restaurante:"619d6649450c1c091db6a597"        
    });

    const postTable = async () => {       
         const response = await fetch('https://torder-api.vercel.app/api/mesa', {
           method: 'POST', 
           headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWNmOThhNzcyOWQ1NDFmNmNlM2I4MSIsImlhdCI6MTYzNzcwNTE4MCwiZXhwIjoxNjM3NzkxNTgwfQ.fmXV1A0D71O-SrSjFYDde9rGgkB70JZm0ZGxR_X0P3A'
           },
            body:JSON.stringify(value)
       })
            const json = await response.json();
            console.log(json)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity style={styles.backtouch} onPress={() => navigation.goBack()}>
                    <ArrowLeft           
                        stroke="black" 
                        width="30"
                        height="30"           
                    /> 
                </TouchableOpacity>
                <Text style={styles.title}>Adicionar Mesa</Text>
                <Text style={styles.labelName}>Nome da Mesa</Text>
                <TextInput 
                    style={styles.nameTable}
                    
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
                <TouchableOpacity style={styles.addButton} onPress={() => postTable()}>
                    <Text style={{fontWeight: 'bold', padding: 10, fontSize: 18}}>Adicionar</Text>
                </TouchableOpacity>
            </View>      
        </SafeAreaView>
    );
}
