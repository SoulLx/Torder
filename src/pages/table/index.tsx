import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import Modal from "react-native-modal";
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Table ({navigation}:{navigation:any}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const getTable = async () => {
     try {
      const response = await fetch('https://torder-api.vercel.app/api/mesa', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWNmOThhNzcyOWQ1NDFmNmNlM2I4MSIsImlhdCI6MTYzNzcwNTE4MCwiZXhwIjoxNjM3NzkxNTgwfQ.fmXV1A0D71O-SrSjFYDde9rGgkB70JZm0ZGxR_X0P3A'
        },
    })
      const json = await response.json();
      setData(json.mesas);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTable();
  }, []);



  const deleteTable = async () => {
    const response = await fetch("https://torder-api.vercel.app/api/mesa", {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWNmOThhNzcyOWQ1NDFmNmNlM2I4MSIsImlhdCI6MTYzNzcwNTE4MCwiZXhwIjoxNjM3NzkxNTgwfQ.fmXV1A0D71O-SrSjFYDde9rGgkB70JZm0ZGxR_X0P3A'
        },
        body: null,
    });

    const json = await response.json();    
    console.log(json)
};



  return (
    <SafeAreaView style={styles.container}>

      <Modal           
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={visibleDelete}
      >
        <View style={styles.modalViewConfirm}>
          <Text style={{fontSize: 20}}>Deseja excluir a mesa?</Text>
          <View style={styles.modalViewButtonConfirm}>
            <TouchableOpacity 
              onPress={() => {deleteTable();{setVisibleDelete(false)}}}
              style={styles.buttonYes}
            >
              <Text style={{color: 'white', fontSize: 17}}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setVisibleDelete(false)}
              style={styles.buttonNo}
            >
              <Text style={{color: 'white', fontSize: 17}}>Não</Text>
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
       
      
      {isLoading ? <ActivityIndicator/> : (
        
          <FlatList
          style={{width: '95%', marginBottom: 20, alignSelf: 'center'}}
          data={data}
          keyExtractor={({_id }, index) => _id}
          renderItem={({ item }) => (
            <View style={styles.viewItemListTable}>
              <View style={styles.viewInfoTable}>
                <Text style={{fontSize: 26, fontWeight:'bold'}}>{item.nome}</Text>
                <Text>Cadeiras: {item.quantidadeCadeiras}</Text>
              </View>            
              <TouchableOpacity 
                style={styles.buttonDelete} 
                onPress={() => setVisibleDelete(true)}
              >
                  <Image style={{height: '100%' , width: '100%'}} source={require('../../assets/delete-icon.png')}/>
              </TouchableOpacity>
            </View>
            
          )}
        />
      
        
      )}


      <View style={styles.viewButtonAddTable}>
        <TouchableOpacity style={styles.buttonAddTable} onPress={() => navigation.navigate('addTable')}>
          <Text style={{fontWeight:'bold',fontSize: 18, color: 'black'}}>Adicionar Mesa</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};