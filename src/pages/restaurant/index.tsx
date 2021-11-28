import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, FlatList, ActivityIndicator,TouchableOpacity} from 'react-native';
import { ArrowLeft, ChevronLeft } from 'react-native-feather';
import Modal from "react-native-modal";
import styles from './styles'
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Restaurant({navigation}:{navigation:any}) {

  const [visibleBooking,setVisibleBooking]=useState(false)
  const [visibleConfirm,setVisibleConfirm]=useState(false)
  const [table, setTable] = useState([]);
  const [avalibleTables, setAvalibleTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState([]);
  const [dataTotalTable, setDataTotalTable] = useState([])
  const [dataAvailableTable, setDataAvailableTable] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [valueBook, setValueBook] = useState([]);
  const [dataRestaurant,setDataRestaurant] = useState([]);
 
  const postBook = async () => {
    const clientId = await AsyncStorage.getItem('clienteId');
    const token = await AsyncStorage.getItem('token');
    const booking = { cliente: clientId, mesa: selectedTable};
    const response = await fetch("https://torder-api.vercel.app/api/reserva", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(booking)
    });
    
    const json = await response.json();
    const statusMesa = {status:'Reservada'};
    await fetch("https://torder-api.vercel.app/api/mesa/"+json.reserva.mesa, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(statusMesa)
    });
};

const getTotalTable = async () => {
  try {
    const restaurantId = await AsyncStorage.getItem('selectedRestaurantId');
    const token = await AsyncStorage.getItem('token');

   const response = await fetch('https://torder-api.vercel.app/api/mesa/totalMesas?restauranteId='+restaurantId, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     },
 })    

 const json = await response.json();
 setDataTotalTable(json.totalMesas);
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}

const getAvailableTableData = async () => {
  try {
    const restaurantId = await AsyncStorage.getItem('selectedRestaurantId');
    const token = await AsyncStorage.getItem('token');

    const response = await fetch('https://torder-api.vercel.app/api/mesa/mesasDisponiveis?restauranteId='+ restaurantId, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     }
    })    

    const json = await response.json();
    setAvalibleTables(json.mesas);
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}

const getAvailableTable = async () => {
  try {
    const restaurantId = await AsyncStorage.getItem('selectedRestaurantId');
    const token = await AsyncStorage.getItem('token');

   const response = await fetch('https://torder-api.vercel.app/api/mesa/totalMesasDisponiveis?restauranteId='+ restaurantId, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     },
 })    

 const json = await response.json();
 setDataAvailableTable(json.totalMesas);
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}

const getRestaurant = async () => {
  try {
    const restaurantId = await AsyncStorage.getItem('selectedRestaurantId');
    const token = await AsyncStorage.getItem('token');

   const response = await fetch('https://torder-api.vercel.app/api/restaurante/'+ restaurantId, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     },
 })    

 const json = await response.json();
 setDataRestaurant(json.restaurante);
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}

const getTable = async () => {
  try {
   const token = await AsyncStorage.getItem('token');
   const idRestaurante = await AsyncStorage.getItem('selectedRestaurantId');
   

   const response = await fetch('https://torder-api.vercel.app/api/mesa/obterMesas/'+ idRestaurante, {
     method: 'GET', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+token
     },
 })
   const json = await response.json();
     
   setTable(json.mesa); 
 } catch (error) {
   console.error(error);
 } finally {
   setLoading(false);
 }
}

const openClosed = (bool) => {
  if(bool)
    return <Text style={styles.lblStatusOpen}>Aberto</Text>
  else
    return <Text style={styles.lblStatusClosed}>Fechado</Text>
}

useEffect(() => {
  getRestaurant();
  getTotalTable();
  getAvailableTable();
}, []);

  return (
    <SafeAreaView style={styles.container}>

      <Modal           
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleBooking}
      >
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => {setVisibleBooking(false)}}>
            <ChevronLeft 
                style={{marginBottom: 20} }
                stroke="#DB2525" 
                width="30"
                height="30"
            />
          </TouchableOpacity> 
          <Text style={{fontSize: 25, 
                        fontWeight: 'bold', 
                        marginBottom: 20,}}>
            Reserva
          </Text>   

          <Text style={styles.lblModal}>Horário</Text>
          <Picker
            style={{

              width: '100%',
              height: 70,
            }}
            enabled={false}
            selectedValue={selectedTable}
            onValueChange={(itemValue) => {setSelectedTable(itemValue);console.log(itemValue)}}
          >
            <Picker.Item label={"16:00"} value={""}/>
            
          </Picker>                         
          
          <Text style={styles.lblModal}>Mesa</Text>
          
          <Picker
            style={{              
              width: '100%',
              height: 70,
            }}
            selectedValue={selectedTable}
            onValueChange={(itemValue) => {setSelectedTable(itemValue);console.log(itemValue)}}
          >
            <Picker.Item label={"Selecione uma mesa"} value={""}/>
            {
                avalibleTables.map((item, index) => {
                    return(
                        <Picker.Item label={item.nome} value={item._id} key={index}/>
                    )
                })
            }
          </Picker>                     

          <TouchableOpacity style={styles.buttonModalReservar} onPress={() => {setVisibleConfirm(true)}}>
            <Text style={{fontSize: 20, color: 'white'}}>Confirmar Reserva</Text>
          </TouchableOpacity>

        </View>
      </Modal>

      <Modal
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={visibleConfirm}
      >
        <View style={styles.modalViewConfirm}>
            <Text style={{fontSize: 20}}>Deseja confirmar a reserva?</Text>
            <View style={styles.modalViewButtonConfirm}>
              <TouchableOpacity style={styles.buttonYes} onPress={() => {postBook();navigation.replace('Restaurant')}}>
                <Text style={{color: 'white', fontSize: 17}}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNo} onPress={() => setVisibleConfirm(false)}>
                <Text style={{color: 'white', fontSize: 17}}>Não</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>

      
      

      <View style={styles.view1}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <ChevronLeft
              stroke="#DB2525" 
              width="30"
              height="30" 
            />
        </TouchableOpacity>

            
        <View style={styles.view2}>
          <FlatList
            data={dataRestaurant}
            keyExtractor={({_id }, index) => _id}
            renderItem={({ item }) => (
              <View>
                <Text style={{fontSize: 22}}>{item.nomeFantasia}</Text>
                
                <Text style={{fontSize: 19}}>
                  {item.especialidade}
                </Text>

                <Text>
                  {item.endereco.endereco}, {item.endereco.complemento}, {item.endereco.numero}
                </Text>
                <Text style={{marginTop: 20,
                              width:'100%',
                              textAlign: 'center',
                }}>
                  {openClosed(item.estaAberto)}
                </Text>
              </View>
            )}
          />
                                        
        </View>          
          
                           
      </View>          

      <View style={styles.viewContent}>                  
                   
          <Text style={styles.lblInfoTitle}>Total de Mesas da Casa</Text>
          <Text style={styles.lblInfo}>{dataTotalTable}</Text>
                
          <Text style={styles.lblInfoTitle}>Mesas Disponíveis</Text>
          <Text style={styles.lblInfo}>{dataAvailableTable}</Text>
        
      </View>          
      
      <View style={styles.viewButtonReservar}>
        <TouchableOpacity style={styles.buttonReservar} onPress={() => {setVisibleBooking(true);getAvailableTableData()}}>
          <Text style={{fontSize: 20, color: 'white'}}>Reservar Mesa</Text>
        </TouchableOpacity>
      </View>
    

      
      
    </SafeAreaView>
  )
}