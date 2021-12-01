import React, { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
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
      const response = await fetch('https://torder-api.vercel.app/api/cliente/' + idUser, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });
      const json = await response.json();
      setData(json.cliente);


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
      <View style={styles.foto}>
        <Text >Seja Bem Vindo: </Text>
        <FlatList
          style={{ marginTop: '-0.9%', marginLeft: '5%' }}
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Text style={styles.name}>{item.nome}</Text>
          )}
        />
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          style={styles.config1}
          onPress={() => navigation.push('UserSettings')}
        >
          <Text style={styles.perfiltexto}>
            Configuração
          </Text>
        </TouchableOpacity>
        
        <View style={{height: 1.2, backgroundColor: 'rgba(217, 217, 217,0.5)'}}>

        </View>
        
        <TouchableOpacity
          style={styles.config1}
          onPress={() => navigation.replace('LaddingPageClient')}
        >
          <Text style={styles.perfiltexto}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linha3}>

      </View>
      <BottomBar />
    </SafeAreaView>
  )
}

