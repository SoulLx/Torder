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
          body:JSON.stringify(item)
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
  
  const [item,setItem] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email:'',
  });

  const [value,setValue] = useState({
    email:'',
    senha: undefined,
  });

  const getCliente = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idCliente = await AsyncStorage.getItem('clienteId');
      const idUsuario = await AsyncStorage.getItem('usuarioId');
      const response = await fetch('https://torder-api.vercel.app/api/cliente/'+ idCliente,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        },
      });
      const json = await response.json();
      setData(json);
      setItem({
        nome:json.cliente.nome,
        cpf:json.cliente.cpf,
        telefone:json.cliente.telefone,
        email:json.cliente.email
      });

      setValue({
        email: json.cliente.email,
        senha: undefined
      })

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    getCliente();
  }, []);

  
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
            onChangeText={(text) => setItem({ ...item, nome: text })}
            
            value={item.nome}
            
            ></TextInput >
           
            
            <Text style={styles.fieldName}>
                Número de celular
            </Text>
            
            <TextInput 
               style={styles.textInput}
               onChangeText={(text) => setItem({ ...item, telefone: text })}
            value={item.telefone}
            
            ></TextInput >
            
            
            <Text style={styles.fieldName}>
                CPF
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setItem({ ...item, cpf: text })}
            value={item.cpf}
            
            >
            </TextInput >

            <Text style={styles.fieldName}>
                Email
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => {setValue({ ...value, email: text });
                                      setItem({ ...item, email: text })}}
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

