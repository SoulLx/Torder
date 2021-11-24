import React, {useState, useEffect} from 'react';
import { Text, View, Image, SafeAreaView,TouchableOpacity, ActivityIndicator,FlatList} from 'react-native';
import { BottomBar } from '../../components/BottomBar/BottomBar';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


export function UserProfile() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const userId = ''

  const getMovies = async () => {
     try {
      const response = await fetch('http://192.168.0.39:3000/api/reserva/'+{userId}+'',);
      const json = await response.json();
      setData(json.data);
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

{isLoading ? <ActivityIndicator/> : (
          <FlatList
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View style={styles.foto}>
            <Text style={styles.name}>{item.nome}</Text>
            </View>
          )}
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

