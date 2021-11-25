import React, {useState, useEffect} from 'react';
import { Text, View, Image, SafeAreaView,TouchableOpacity, ActivityIndicator,FlatList} from 'react-native';
import { BottomBar } from '../../components/BottomBar/BottomBar';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserProfile() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

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

{isLoading ? <ActivityIndicator/> : (
          <FlatList
          data={Object.keys(data)}
          renderItem={({ item }) => 
            <Text>{data[item].nome}</Text>
        }
        />
          )}
    <TouchableOpacity 
    style={styles.config}
    onPress={() => navigation.navigate('UserSettings')}
    >
        <Text style={styles.perfiltexto}>
            Configuração
        </Text>
    </TouchableOpacity>
    <BottomBar/>
    </SafeAreaView>
  )
}

