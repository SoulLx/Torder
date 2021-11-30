import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text'

export function RestaurantProfileSettings() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const putRestaurant = async () => {
    const token = await AsyncStorage.getItem('token');
    const idRestaurante = await AsyncStorage.getItem('restauranteId')

    await fetch('https://torder-api.vercel.app/api/restaurante/' + idRestaurante, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(item)
    });
    await fetch('https://torder-api.vercel.app/api/usuario/' + idRestaurante, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(value)
    })

    navigation.replace('RestaurantIn')
  };

  const [item, setItem] = useState({
    nomeFantasia: '',
    telefones:{
      telefone1: '',
    },
    email: '',
  });

  const [value, setValue] = useState({
    email: '',
    senha: undefined,
  });

  const getRestaurant = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId')
      const response = await fetch('https://torder-api.vercel.app/api/restaurante/' + idRestaurante, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
      const json = await response.json();

      json.restaurante.map(restaurante => {
        setData(restaurante);

        setItem({
          nomeFantasia: restaurante.nomeFantasia,
          telefones:{
            telefone1:restaurante.telefones.telefone1
          },
          email:restaurante.email
          });

        setValue({
          email: restaurante.email,
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
      <ScrollView >
        <View style={styles.fields}>

          <Text style={styles.fieldName}>
            Nome Fantasia
          </Text>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setItem({ ...item, nomeFantasia: text })}

            value={item.nomeFantasia}

          ></TextInput >


          <Text style={styles.fieldName}>
            Telefone
          </Text>

          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            style={styles.textInput}
            onChangeText={(text) => setItem({ ...item, telefones:{telefone1:text} })}
            value={item.telefones.telefone1}

          ></TextInputMask >

            <Text style={styles.fieldName}>
            Email
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              setValue({ ...value, email: text });
              setItem({ ...item, email: text })
            }}
            value={value.email}

          >
          </TextInput >

          <Text style={styles.fieldName}>
            Senha
          </Text>

          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => setValue({ ...value, senha: text })}
            value={value.senha}
          >
          </TextInput >

        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { putRestaurant() }}
      >
        <Text style={styles.confirm}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
