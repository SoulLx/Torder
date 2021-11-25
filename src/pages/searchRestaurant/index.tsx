import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function SearchRestaurant() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [state, setState]= useState({
      search: ''
    });

  const getRestaurantes = async () => {
     try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId');

      const response = await fetch('https://torder-api.vercel.app/api/restaurante/pesquisar/?pesquisa='+state.search, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ token
        },
    })    
    
    const json = await response.json();
    setData(json.restaurante);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const setSelectedRestaurant = async (idRestaurant) => {
    AsyncStorage.setItem("selectedRestaurantId", idRestaurant);
  }

  const openClosed = (bool) => {
    if(bool)
      return <Text>Aberto</Text>
    else
      return <Text>Fechado</Text>
  }
  
  useEffect(() => {
    getRestaurantes();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar                
          placeholder="Pesquisar Restaurante"
          value={state.search}
          platform={'android'}
          showLoading={true}   
          lightTheme={false} 
          round={false} 
          onChangeText={(search) => {setState({ ...state, search: search });getRestaurantes()}}  
      />

      <FlatList
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity onPress={() => {navigation.navigate('Restaurant');setSelectedRestaurant(item._id)}}>
              <Text>{item.nomeFantasia}</Text>
              <Text>
                {openClosed(item.estaAberto)}
              </Text>
              <Text>
                {item.especialidade}
              </Text>

              <Text>
                {item.endereco.endereco}, 
                {item.endereco.complemento},
                {item.endereco.numero},
              </Text>
            </TouchableOpacity>
              <Text>
              </Text>
              
            </View>
            
          )}
          />            
      <BottomBar/>
    </SafeAreaView>
  )
}
