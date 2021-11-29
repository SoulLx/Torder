import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';;
import styles from './styles';
import { List } from 'react-native-paper';
import { Edit,Trash2 } from 'react-native-feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


export function RestaurantMenu({navigation}:{navigation:any}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(false);
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [visibleConfirmDelete, setVisibleConfirmDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [valueCategory, setValueCategory] = useState({
    nome: "",
  })
  
  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteId');

      const response = await fetch('https://torder-api.vercel.app/api/categoria/ObterCategoria/' + idRestaurante, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      })
      const json = await response.json();
      console.log(json.categoria)
      setCategory(json.categoria);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getCategory();
  }, []);

  function GetItensPerCategory(param) {
    try {
      const [dataItem, setDataItem] = useState();
      const fun = async (param) => {
        const token = await AsyncStorage.getItem('token');
        const idRestaurante = await AsyncStorage.getItem("restauranteReservadoId")
        const response = await fetch('https://torder-api.vercel.app/api/produto/obterProdutos/' + idRestaurante + '?categoria=' + param.value, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        })
        const json = await response.json();
        setDataItem(json.produto);
      }
      fun(param)
      return (
        <FlatList
          style={{ width: '100%', marginBottom: 20, alignSelf: 'center' }}
          data={dataItem}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <List.Item 
              title={item.nome}
              description={item.descricao}
              right={props => <Text {...props}>R$ {String(item.preco.toFixed(2))}</Text>}/>
          )}
        />
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (          
    <SafeAreaView style={styles.container}>
      
      <View style={styles.view2}>
        <View style={styles.view1}>
          <Image style={styles.imageLogo}source={require("../../assets/mc-logo.png")}/>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>McDonald's</Text>
        </View>
      </View>
      
      
      <Text style={{fontSize:17}}>Cardápio</Text>
      <FlatList 
        style={styles.list}
        data={category}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return(
            
            <List.Section title="">
              
              <List.Accordion
                title={item.nome}>
                <GetItensPerCategory value={item._id}/>
              </List.Accordion>
            </List.Section>
          )        
        }}
      />
      
      

      <TouchableOpacity style={styles.buttonVoltar} onPress={() => {navigation.replace('Booking')}}>
        <Text style={{color: 'white', fontSize: 18}}>Estou indo embora</Text>
      </TouchableOpacity>
      
    </SafeAreaView>    
  );
}