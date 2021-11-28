import React, {useState,useEffect} from 'react';
import { Text,TextInput,Button, View, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function RestaurantProfileSettings() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const [value, setValue] = useState({
      nomeFantasia: "",
      razaoSocial: "",
      email: "",
      cnpj: "",
      especialidade: "",
      endereco: {
        endereco: "",
        numero: "",
        complemento: ""
      },
      telefones: {
        telefone1: "",
      },
    });

    const [valueUser,setValueUser] = useState({
      email:'',
      senha: undefined,
    });

  const putRestaurant = async ( ) =>{
    const token = await AsyncStorage.getItem('token');
    const restaurantId = await AsyncStorage.getItem('restauranteId');
    const idUsuario = await AsyncStorage.getItem('usuarioId');

    await fetch('https://torder-api.vercel.app/api/restaurante/'+ restaurantId, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        },
        body: JSON.stringify(value)
    });

    await fetch('https://torder-api.vercel.app/api/usuario/'+ idUsuario, {
         method: 'PUT', 
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+ token
         },
          body:JSON.stringify(valueUser)
      });

    navigation.replace('RestaurantIn');
  };

  const getRestaurant = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const restaurantId = await AsyncStorage.getItem('restauranteId');

      const response = await fetch('https://torder-api.vercel.app/api/restaurante/'+ restaurantId,{
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        },
      });  
      const json = await response.json();
  
      json.restaurante.map(data => {        
        setValue({
          nomeFantasia: data.nomeFantasia,
          razaoSocial: data.razaoSocial,
          email: data.email,
          cnpj: data.cnpj,
          especialidade: data.especialidade,
          endereco: {
            endereco: data.endereco.endereco,
            numero: data.endereco.numero,
            complemento: data.endereco.complemento
          },
          telefones: {
            telefone1: data.telefones.telefone1,
          },
        });
    
        setValueUser({
          email: data.email,
          senha: undefined
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getRestaurant();
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
        <View style={styles.fields}>
            <Text style={styles.fieldName}>
                Nome do Restaurante
            </Text>
            <TextInput 
            style={styles.textInput} 
            onChangeText={(text) => setValue({ ...value, nomeFantasia: text })}
            value={value.nomeFantasia}
            ></TextInput >

            <TextInput 
            style={styles.textInput} 
            onChangeText={(text) => {setValue({ ...value, email: text }); setValueUser({ ...valueUser, email: text })}}
            value={value.email}
            ></TextInput >
           
           
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => {{putRestaurant()}}}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

