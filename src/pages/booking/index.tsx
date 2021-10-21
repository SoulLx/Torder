import React, {useState} from 'react';
import {SafeAreaView, Text,View,TouchableOpacity} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import Modal from "react-native-modal";

export function Booking({navigation}:{navigation:any}) {
  const[confirm,setconfirm]=useState(false)
  const[details,setdetails]=useState(false)
  const[cancel,setcancel]=useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Modal 
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={confirm}
          >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.textCode}>
              22246665578
            </Text>
            <View style={styles.modalView}>
            <Text style={styles.textConfirm}>
              Informe seu código
            </Text>
            <Text style={styles.textConfirm}>
              ao Garçom
            </Text>
            <TouchableOpacity 
            style={{marginTop:20,backgroundColor:'white',width:40,height:40}}
            onPress={()=>{setconfirm(false)}}
            >
            </TouchableOpacity>
            <TouchableOpacity 
            style={{marginTop:20,backgroundColor:'white',width:40,height:40}}
            onPress={()=>{navigation.navigate('RestaurantLadding')}}
            >
            </TouchableOpacity>
            </View>
           </View>
          </View>
          </Modal>
          <Modal 
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={details}
          >
        <View style={styles.centeredView}>
            <View style={styles.modalViewDetails}>
            <Text style={styles.textDetails}>
              Detalhes
            </Text>
            <TouchableOpacity 
            style={{marginTop:20,backgroundColor:'black',width:40,height:40}}
            onPress={()=>{setdetails(false)}}
            >
            </TouchableOpacity>
            </View>
          </View>
          </Modal>
          <Modal 
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={cancel}
          >
        <View style={styles.centeredView}>
            <View style={styles.modalViewCancel}>
            <Text style={styles.textCancel}>
              Deseja mesmo cancelar?
            </Text>

            <TouchableOpacity 
            style={styles.cancelButtom}
            onPress={()=>{setcancel(false)}}
            >
              <Text>
                Cancelar
              </Text>
            </TouchableOpacity>
            
           </View>
          </View>
          </Modal>
      <View style={styles.head}> 
          <Text> 
          Minhas Reservas 
          </Text>
      </View>
      <View style={styles.body}>
      
          <View style={styles.nameBooking}>
          <Text>
          Nome do Restaurante
          </Text>
          </View>
          <View style={styles.midBooking}>
          <Text>
          Status da Reserva
          </Text>
          <Text>
          Horário
          </Text>
          <Text>
          Resumo da Reserva
          </Text>
          </View>
          <View style={styles.bookingAction}>
          <TouchableOpacity 
          style={styles.bookingButtonCancel} 
          onPress={()=>{setcancel(true)}}
          >
          <Text>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.bookingButtonConfirm}
          onPress={()=>{setconfirm(true)}}
          >
          <Text>confirmar</Text>
          </TouchableOpacity>
          </View>
      </View>
      <View style={styles.bottom}> 
          <Text> 
          Histórico de reservas
          </Text>
      </View>
      <View style={styles.bodyBottom}>
      
          <View style={styles.nameBooking}>
          <Text>
          Nome do Restaurante
          </Text>
          </View>
          <View style={styles.midBooking}>
          <Text>
          Status da Reserva
          </Text>
          <Text>
          Resumo da Reserva
          </Text>
          </View>
          <View >
          <TouchableOpacity 
          style={styles.bookingDetails}
          onPress={()=>{setdetails(true)}}
          >
          <Text>Ver mais detalhes</Text>
          </TouchableOpacity>
          </View>
      </View>
      
      <BottomBar/>
    </SafeAreaView>
  )
}