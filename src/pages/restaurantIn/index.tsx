import React, {useState,useEffect} from 'react';
import {SafeAreaView, Text,TouchableOpacity, Image,View,ActivityIndicator,FlatList} from 'react-native';
import styles from './styles'
import BottomBarRestaurant from '../../components/BottomBarRestaurant/BottomBarRestaurant';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function RestaurantIn({navigation}:{navigation:any}) {
    const[openClosed,setOpenClosed]=useState(false)
    const restaurantId = AsyncStorage.getItem("restaurantId");
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://torder-api.vercel.app/api/restaurante/'+{restaurantId}+'',);
      const json = await response.json();
      setData(json.restaurante);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  
    
    let state = ''

    if(openClosed==false){
        state='Loja fechada'
    } else
    state='Loja Aberta'

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
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <Text style={styles.name}>{item.nomeFantasia}</Text>
            
          )}
          />
          )}
    <TouchableOpacity 
    style={styles.profileRestaurant}
    onPress={()=>navigation.push('RestaurantProfileSettings')}
    >
    <Text style={styles.profileButtom}>Alterar</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.openClosed}>
        <Text {...restaurantStatus}>
            {state}
        </Text>
        <TouchableOpacity 
        style={styles.config}
        onPress={()=>{if(openClosed==false){
            setOpenClosed(true)}
            else
            setOpenClosed(false)
            
        }}
        >
        <Text {...restaurantClosedOpen} >
            Abrir/Fechar
        </Text>
        </TouchableOpacity>
    </View>
    <View {...restaurantBarClosedOpen} >      
    </View>
    
    <Text style={{fontWeight:'bold',fontSize:18,marginTop:'-70%'}}>
        Gestão
    </Text>
    <View style={{marginTop:'-70%',paddingHorizontal:'60%', backgroundColor:'grey', paddingTop:'1%'}}>      
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
    <View style={{marginTop:'-65%',paddingHorizontal:'50%', backgroundColor:'grey', paddingTop:'1%'}}>      
    </View>
    <BottomBarRestaurant/>
    </SafeAreaView>
  )
}