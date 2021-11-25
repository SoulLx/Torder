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
    console.log(state.search)
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
  
  useEffect(() => {
    getRestaurantes();
  }, []);

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#bdbdbd',
        height: 1,
      }}
    />
  );
  
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
          ItemSeparatorComponent={renderSeparator}
          
          style={{width: '100%'}}
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View style={styles.viewList}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('Restaurant');setSelectedRestaurant(item._id)}}
                style={{marginLeft: 50}}  
              >
                <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.nomeFantasia}</Text>
                <Text
                  style={{fontSize:16}}
                >
                  {item.especialidade}
                </Text>

                <Text>
                  {item.endereco.endereco}, {item.endereco.complemento}, {item.endereco.numero} 
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
