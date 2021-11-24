import React, {useState} from 'react';
import { Text,TextInput,Button, View, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


export function RestaurantProfileSettings() {
    const navigation = useNavigation();
   const restaurantId = ''
    const [value,setValue] = useState({
      nome: '',
      cpf:'',
      email:'', 
      telefone:''
    }) 
  const postData = async ( ) =>{
    const response = await fetch('http://192.168.0.39:3000/api/cliente'+{restaurantId}+'', {
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
                Nome do Restaurante
            </Text>
            <TextInput 
            style={styles.textInput} 
            onChangeText={(text) => setValue({ ...value, nome: text })}
            value={value.nome}
            ></TextInput >
            <Text style={styles.fieldName}>
                Número de Contato
            </Text>
            <TextInput 
              style={styles.textInput} 
              onChangeText={(text) => setValue({ ...value, telefone: text })}
            value={value.telefone}
            ></TextInput >
           
           
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {navigation.goBack();{postData()}}}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

