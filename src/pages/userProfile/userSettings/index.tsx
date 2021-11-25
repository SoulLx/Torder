import React, {useState,useEffect} from 'react';
import { Text,TextInput, View, Image,ScrollView, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserSettings() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value,setValue] = useState({
      nome: '',
      cpf:'',
      telefone:'',
      email:'',
      senha:''
    }) 
 
    const putUser = async () => {      
      const token = await AsyncStorage.getItem('token');
      const idCliente = await AsyncStorage.getItem('clienteId');
      const idUsuario = await AsyncStorage.getItem('usuarioId');

       const responseClient = await fetch('https://torder-api.vercel.app/api/cliente/'+ idCliente, {
         method: 'PUT', 
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+ token
         },
          body:JSON.stringify(value)
      });
      const responseUser = await fetch('https://torder-api.vercel.app/api/usuario/'+ idUsuario, {
         method: 'PUT', 
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+ token
         },
          body:JSON.stringify(value)
      })
          const jsonClient = await responseClient.json();
          console.log(jsonClient)
          const jsonUser = await responseUser.json();
          console.log(jsonUser)
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
        <ScrollView >
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

            <Text style={styles.fieldName}>
                Email
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setValue({ ...value, email: text })}
            value={value.email}
            >
            </TextInput >

            <Text style={styles.fieldName}>
                Senha
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setValue({ ...value, senha: text })}
            value={value.senha}
            >
            </TextInput >
            
        </View>
        </ScrollView>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {navigation.goBack();putUser()}}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

