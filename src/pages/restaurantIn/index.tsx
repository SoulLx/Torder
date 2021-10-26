import React, {useState} from 'react';
import {SafeAreaView, Text,TouchableOpacity, Image,View} from 'react-native';
import styles from './styles'
import BottomBarRestaurant from '../../components/BottomBarRestaurant/BottomBarRestaurant';
import { useNavigation } from '@react-navigation/core';



export function RestaurantIn() {
    const navigation = useNavigation();
    const[openClosed,setOpenClosed]=useState(false)
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
    <Image style={styles.img} source={require('../../assets/mcdonalds-logo.jpg')}/>
    <Text style={styles.name}>MC Donald's</Text>
    <TouchableOpacity style={styles.profileRestaurant}>
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