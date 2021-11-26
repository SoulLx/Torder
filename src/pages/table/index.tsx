import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, Image, ToastAndroid,TouchableOpacity } from 'react-native';

import { ArrowLeft } from 'react-native-feather';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";

export function Table ({navigation}:{navigation:any}) {
  const [isLoading, setLoading] = useState(true);
  const [table, setTable] = useState([]);  
  const [idMesa, setIdMesa] = useState([]);
  const [visibleConfirmDelete,setVisibleConfirmDelete] = useState(false);
  const [mesaSelecionada, setMesaSelecionada] = useState([]);
  
  const getTable = async () => {
     try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId');
      

      const response = await fetch('https://torder-api.vercel.app/api/mesa/obterMesas/'+ idRestaurante, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
    })
      const json = await response.json();
        
      setTable(json.mesa); 

      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const deleteTable = async (mesaId) => {
    try {
      const token = await AsyncStorage.getItem('token');            

      const response = await fetch("https://torder-api.vercel.app/api/mesa/"+ mesaId, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token
        },
        body: JSON.stringify(table)
      });
      const json = await response.json(); 
      /*json.mesa.map(data => console.log(data));      */
      
      replace()
      console.log(mesaId);
      

      ToastAndroid.show("Mesa excluida com sucesso", ToastAndroid.SHORT);
      

      
      
    } catch (error) {
      console.log("error" + error)

      ToastAndroid.show("Erro, mesa não deletada", ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    getTable();
  }, []);

  function replace() {
    navigation.replace(
      "Table",
      null,
      null,
      Math.random().toString() 
    )
  }

  

  return (
    <SafeAreaView style={styles.container}>

    <Modal
      animationIn="slideInUp"
      animationOutTiming={1000}
      animationInTiming={600}
      backdropTransitionOutTiming={800}
      animationOut="slideOutDown"
      isVisible={visibleConfirmDelete}
    >
      <View style={styles.modalViewConfirm}>
        <Text style={{fontSize:19}}>Deseja excluir essa mesa?</Text>
        <View style={styles.modalViewButtonConfirm}>
          <TouchableOpacity style={styles.buttonYes} onPress={() => {deleteTable(mesaSelecionada);setVisibleConfirmDelete(false)}}>
            <Text style={{fontSize:17, color:'white'}}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNo} onPress={() => setVisibleConfirmDelete(false)}>
            <Text style={{fontSize:17, color:'white'}}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

      <View style={{width: "100%", padding: 5}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft 
            style={{alignSelf: "flex-start",
                    paddingBottom:"5%",
                    marginTop: '10%',}}
            stroke="black" 
            width="30"
            height="30"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Mesas</Text>
      </View>
       
          <FlatList
          style={{width: '95%', marginBottom: 20, alignSelf: 'center'}}
          data={table}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View style={styles.viewItemListTable}>
              <View style={styles.viewInfoTable}>
                <Text style={{fontSize: 26, fontWeight:'bold'}}>{item.nome}</Text>
                <Text>Cadeiras: {item.quantidadeCadeiras}</Text>
              </View>            
              <TouchableOpacity 
                onPress={() => {setMesaSelecionada(item._id);setVisibleConfirmDelete(true)}} 
                style={styles.buttonDelete}
              >
                <Image style={{height: '100%' , width: '100%'}} source={require('../../assets/delete-icon.png')}/>
              </TouchableOpacity>
            </View>
            
          )}
        />            

      <View style={styles.viewButtonAddTable}>
        <TouchableOpacity style={styles.buttonAddTable} onPress={() => navigation.replace('addTable')}>
          <Text style={{fontWeight:'bold',fontSize: 18, color: 'black'}}>Adicionar Mesa</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};