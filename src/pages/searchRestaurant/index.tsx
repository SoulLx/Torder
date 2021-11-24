import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import SearchBarTorder from '../../components/SearchBarTorder/SearchBarTorder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';


export function SearchRestaurant() {
    const[openClosed,setOpenClosed]=useState(false)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
  const getMovies = async () => {
     try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId');

      const response = await fetch('https://torder-api.vercel.app/api/restaurante/', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        },
    })    
    const json = await response.json();
     
    setData(json.restaurantes);
    console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarTorder/>

      <FlatList
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View>
            <View >
            <Text>{item.nomeFantasia}</Text>
            </View>
            <View >
            <Text>
            {item.especialidade}
            </Text>
            <Text>
            {item.endereco.endereco}, 
            {item.endereco.complemento},
            {item.endereco.numero} 
            </Text>
            <Text>
            </Text>
            </View>
            </View>
            
          )}
          />            
      <BottomBar/>
    </SafeAreaView>
  )
}