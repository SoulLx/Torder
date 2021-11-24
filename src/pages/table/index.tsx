import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeft } from 'react-native-feather';
import styles from './styles';

export function Table ({navigation}:{navigation:any}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  return (
    <SafeAreaView style={styles.container}>
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
              <TouchableOpacity style={styles.buttonDelete}><Image style={{height: '100%' , width: '100%'}} source={require('../../assets/delete-icon.png')}/></TouchableOpacity>
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