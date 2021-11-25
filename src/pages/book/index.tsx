import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ArrowLeft } from 'react-native-feather';
import Modal from "react-native-modal";
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Book ({navigation}:{navigation:any}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [valueCategory, setValueCategory] = useState({
    nome: "",
  })

  const getItem = async () => {
     try {
      const token = AsyncStorage.getItem('token');
      const response = await fetch('https://torder-api.vercel.app/api/produto', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
    })
      const json = await response.json();
      setData(json.produtos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItem();
  }, []);


  const postCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem("restauranteId");
      

      const item = {
        nome: valueCategory.nome,
        restaurante: idRestaurante,
      }

      const response = await fetch("https://torder-api.vercel.app/api/categoria", {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token
        },
        body: JSON.stringify(item)
      });
      const json = await response.json();

      
    } catch (error) {
      console.log("error" + error)
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>

    <Modal
      animationIn="slideInUp"
      animationOutTiming={1000}
      animationInTiming={600}
      backdropTransitionOutTiming={800}
      animationOut="slideOutDown"
      isVisible={visibleSuccess}
    >
      <View style={{backgroundColor:'white'}}>
        <Text>Categoria Criada</Text>
        <TouchableOpacity onPress={() => setVisibleSuccess(false)}>
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>

      <Modal           
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={visibleCategory}
      >
        <View style={styles.viewModalCategory}>
          <TouchableOpacity onPress={() => {setVisibleCategory(false)}}>
            <ArrowLeft              
                stroke="black" 
                width="30"
                height="30"
            />
          </TouchableOpacity> 
          <Text style={{fontWeight: 'bold', fontSize: 21}}>Criar Categoria</Text>          
          <TextInput 
            style={{padding: 7, borderWidth: 1, borderRadius: 10, borderColor: "#bdbdbd"}}
            placeholder="Nome da categoria"
            onChangeText={(text) => setValueCategory({...valueCategory, nome: text})}
            value={valueCategory.nome}
            
          />
          <TouchableOpacity style={styles.buttonCategory} onPress={() => postCategory()}>
            <Text style={{color: 'white'}}>Criar</Text>
          </TouchableOpacity>
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
        <Text style={styles.title}>Produtos</Text>
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
                <Text>Preço: R${item.preco.toFixed(2)}</Text>
              </View>            
              <TouchableOpacity style={styles.buttonDelete}><Image style={{height: '100%' , width: '100%'}} source={require('../../assets/delete-icon.png')}/></TouchableOpacity>
            </View>
            
          )}
        />
      
        
      )}


      <View style={styles.viewButtonAddTable}>
        <TouchableOpacity style={styles.buttonAddTable} onPress={() => setVisibleCategory(true)}>
          <Text style={{fontWeight:'bold',fontSize: 18, color: 'black'}}>Criar Categoria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAddTable} onPress={() => navigation.navigate('AddItem')}>
          <Text style={{fontWeight:'bold',fontSize: 18, color: 'black'}}>Adicionar Produto</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};