import React from 'react';
import {SafeAreaView, Text,View,TouchableOpacity} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';

export function Booking() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}> 
      <Text> 
      Minhas Reservas 
      </Text>
      </View>
      <View style={styles.body}>
      
      <View style={styles.booking}>
      <Text>
      MC Donalds
      </Text>
      <Text>
      Status da Reserva
      </Text>
      <Text>
      Resumo da Reserva
      </Text>
      </View>
      <View style={styles.bookingAction}>
      <TouchableOpacity >
      <Text>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity >
      <Text>Confirmar</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.head}> 
      <Text> Histórico de Pedidos </Text>
      </View>
      <BottomBar/>
    </SafeAreaView>
  )
}