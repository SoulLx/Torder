import React, {useState,useEffect} from 'react';
import {SafeAreaView, Text,View,TouchableOpacity, ActivityIndicator,FlatList} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { DateTime } = require("luxon");

export function Booking({navigation}:{navigation:any}) {
  const[confirm,setconfirm]=useState(false)
  const[details,setdetails]=useState(false)
  const[cancel,setcancel]=useState(false)
  const userId = AsyncStorage.getItem("clienteId");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataBooking, setDataBooking] = useState([]);

  const getBookings = async () => {
     try {
      const token = await AsyncStorage.getItem('token');
      const clientId = await AsyncStorage.getItem('clienteId');
      
      const response = await fetch('https://torder-api.vercel.app/api/reserva/obterReservas/'+ clientId, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
      }})

      const json = await response.json();     
      setData(json.reserva);  
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getCurrentBooking = async () => {
    try {
     const token = await AsyncStorage.getItem('token');
     const clientId = await AsyncStorage.getItem('clienteId');
     
     const response = await fetch('https://torder-api.vercel.app/api/reserva/obterReservaAtual/?idCliente='+ clientId, {
       method: 'GET', 
       headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token
     }})

     const json = await response.json();     
     setDataBooking(json.reserva);  
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
  
  useEffect(() => {
    
    getCurrentBooking();
  }, []);



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
     
      <FlatList
        style={styles.body}
        data={dataBooking}
        keyExtractor={({_id }, index) => _id}
        renderItem={({ item }) => (
          <View style={styles.midBooking}>

            <View style={styles.nameBooking}>
              <Text>{item.mesa.restaurante.nomeFantasia}</Text>
            </View>

            <View >
              <Text>{item.status}</Text>
            </View>

            <View >
              < Text>{item.horarioReserva}</Text>
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
        )}
        />
      
 

      <View style={styles.bottom}> 
        <Text> 
          Histórico de reservas
        </Text>
        </View>
      
        <FlatList
        style={styles.bodyBottom}
        data={data}
        keyExtractor={({_id }, index) => _id}
        renderItem={({ item }) => (
          <View style={styles.nameBooking}>
            <Text style={{fontSize:18, fontWeight: 'bold'}}>{item.mesa.restaurante.nomeFantasia}</Text>
            <View style={styles.midBooking}>
              <Text> {item.status} </Text>
              <Text> Reserva criada em: { item.horarioCriacao} </Text>
              <Text> Reserva reservada em: { item.horarioCriacao} </Text>
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
        )}
        /> 
      
      
      <BottomBar/>
      
    </SafeAreaView>
  )
}