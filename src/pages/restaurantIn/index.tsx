import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View, ActivityIndicator, FlatList, VirtualizedList } from 'react-native';
import styles from './styles'
import BottomBarRestaurant from '../../components/BottomBarRestaurant/BottomBarRestaurant';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function RestaurantIn({ navigation }: { navigation: any }) {
  const [openClosed, setOpenClosed] = useState(false)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getRestaurant = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId');

      const response = await fetch('https://torder-api.vercel.app/api/restaurante/' + idRestaurante, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      })
      const json = await response.json();

      setData(json.restaurante);
      json.restaurante.map(data => { setOpenClosed(data.estaAberto) })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const setStatusAbertura = async (status) => {
    const idRestaurante = await AsyncStorage.getItem('restauranteId');
    const token = await AsyncStorage.getItem('token');

    await fetch('https://torder-api.vercel.app/api/restaurante/statusAberto/' + idRestaurante + '?estaAberto=' + status, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
  }

  useEffect(() => {
    getRestaurant();
  }, []);


  let state = ''

  if (openClosed == false) {
    state = 'Loja fechada'
  } else
    state = 'Loja Aberta'

  var restaurantStatus = {
    style: openClosed ? styles.open : styles.closed,
  };
  var restaurantClosedOpen = {
    style: openClosed ? styles.textClosed : styles.textOpen,

  };
  var restaurantBarClosedOpen = {
    style: openClosed ? styles.barOpen : styles.barClosed,

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.foto}>

        <View style={styles.flat}>
          <FlatList
            data={data}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) => (
              <View >
                <Text style={styles.name}>{item.nomeFantasia}</Text>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.profileRestaurant}
          onPress={() => navigation.push('RestaurantProfileSettings')}
        >
          <Text style={styles.profileButtom}>Alterar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.openClosed}>
        <Text {...restaurantStatus}>
          {state}
        </Text>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            if (openClosed == false) {
              setOpenClosed(true);
              setStatusAbertura(true);
            }
            else {
              setOpenClosed(false)
              setStatusAbertura(false);
            }
          }}
        >
          <Text {...restaurantClosedOpen} >
            Abrir/Fechar
          </Text>
        </TouchableOpacity>
      </View>
      <View {...restaurantBarClosedOpen} >
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: '-70%' }}>
        Gestão
      </Text>
      <View style={{ marginTop: '-70%', paddingHorizontal: '60%', backgroundColor: 'grey', paddingTop: '1%' }}>
      </View>
      <View style={styles.manager}>
        <TouchableOpacity
          style={styles.config}
          onPress={() => navigation.navigate('Book')}
        >
          <Text style={styles.perfiltexto}>
            Cardápio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.config}
          onPress={() => navigation.navigate('Table')}
        >
          <Text style={styles.perfiltexto}>
            Mesas
          </Text>
        </TouchableOpacity>


      </View>

      <View style={{ marginTop: '-65%', paddingHorizontal: '50%', backgroundColor: 'grey', paddingTop: '1%' }}>
      </View>
      <TouchableOpacity
        style={styles.sair}
        onPress={() => navigation.replace('LaddingPageRestaurant')}
      >
        <Text style={styles.sairTexto}>
          Sair
        </Text>
      </TouchableOpacity>
      <BottomBarRestaurant />
    </SafeAreaView>
  )
}