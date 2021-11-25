import React, {useState,useEffect} from 'react';
import { Text,TextInput, View, Image,ScrollView, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

export function UserSettings() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [value,setValue] = useState({
      nome: '',
      cpf:'',
      telefone:'',
      email:'',
    }) 
 
    const getUser = async () => {      
      const token = await AsyncStorage.getItem('token');
      const idUser = await AsyncStorage.getItem('clienteId');

       const response = await fetch('https://torder-api.vercel.app/api/cliente/'+idUser, {
         method: 'PUT', 
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+ token
         },
          body:JSON.stringify(value)
     });
          const json = await response.json();
          console.log(json)
  };
  
  const [item,setItem] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
  })
  console.log(item)
  const getCliente = async () => {
    try {
      
      const token = await AsyncStorage.getItem('token');
      const idUser = await AsyncStorage.getItem('clienteId');
      const response = await fetch('https://torder-api.vercel.app/api/cliente/'+ idUser,{
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
        email:json.cliente.email,
        
      }
      )
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
            onChangeText={(text) => setValue({ ...value, nome: text })}
            value={value.nome}
            placeholder={item.nome}
            ></TextInput >
           
            
            <Text style={styles.fieldName}>
                Número de celular
            </Text>
            
            <TextInput 
               style={styles.textInput}
               onChangeText={(text) => setValue({ ...value, telefone: text })}
            value={value.telefone}
            placeholder={item.telefone}
            ></TextInput >
            
            
            <Text style={styles.fieldName}>
                CPF
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setValue({ ...value, cpf: text })}
            value={value.cpf}
            placeholder={item.cpf}
            >
            </TextInput >

            <Text style={styles.fieldName}>
                Email
            </Text>
            
            <TextInput 
             style={styles.textInput}
             onChangeText={(text) => setValue({ ...value, email: text })}
            value={value.email}
            placeholder={item.email}
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
            onPress={() => {navigation.goBack();getUser()}}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

