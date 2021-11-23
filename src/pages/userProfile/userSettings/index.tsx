import React, {useState} from 'react';
import { Text,TextInput, View, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export function UserSettings() {
    const navigation = useNavigation();
    const userId = ''

    const [value,setValue] = useState({
      nome: '',
      cpf:'',
      telefone:''
    }) 
  const postData = async ( ) =>{
    const response = await fetch('http://192.168.0.39:3000/api/'+{userId}+'', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    });
    const data = await response.json( );
    console.log(data)
  };
  
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.back}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
        <ArrowLeft 
        stroke="black"
        width="30"
        height="30"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.fields}>
            
            <Text style={styles.fieldName}>
                Nome
            </Text>
            
            <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setValue({ ...value, nome: text })}
            value={value.nome}
            ></TextInput >
           
            
            <Text style={styles.fieldName}>
                Número de celular
            </Text>
            
            <TextInput 
               style={styles.textInput}
               onChangeText={(text) => setValue({ ...value, telefone: text })}
            value={value.telefone}
            ></TextInput >
            
            
            <Text style={styles.fieldName}>
                CPF
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setValue({ ...value, cpf: text })}
            value={value.cpf}
            >
            </TextInput >
            
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

