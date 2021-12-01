import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';;
import styles from './styles';
import { List } from 'react-native-paper';
import { Edit, Trash2 } from 'react-native-feather';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


export function RestaurantMenu({ navigation }: { navigation: any }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [visibleConfirm, setVisibleConfirm] = useState(false)
  const [valueCategory, setValueCategory] = useState({
    nome: "",
  })

  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteReservadoId');

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

  const getRestaurant = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const idRestaurante = await AsyncStorage.getItem('restauranteReservadoId');

      const response = await fetch('https://torder-api.vercel.app/api/restaurante/' + idRestaurante, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      })
      const json = await response.json();
      setData(json.restaurante);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const endBooking = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const clientId = await AsyncStorage.getItem('clienteId');

      const response = await fetch('https://torder-api.vercel.app/api/reserva/obterReservaAtual/?idCliente=' + clientId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })

      const json = await response.json();
      json.reserva.map(data => {
        fetch('https://torder-api.vercel.app/api/mesa/' + data.mesa._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({ status: "Disponivel" })
        })
        fetch('https://torder-api.vercel.app/api/reserva/' + data._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({ status: "Concluido" })
        })
        navigation.replace('Booking')
      })

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategory();
    getRestaurant();
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
              right={props => <Text {...props}>R$ {String(item.preco.toFixed(2))}</Text>} />
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

      <Modal
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={visibleConfirm}
      >
        <View style={styles.modalViewConfirm}>
          <Text style={{ fontSize: 19 }}>Confirma que deseja ir embora?</Text>
          <View style={styles.modalViewButtonConfirm}>
            <TouchableOpacity style={styles.buttonYes} onPress={() => { endBooking(); setVisibleConfirm(false) }}>
              <Text style={{ fontSize: 17, color: 'white' }}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNo} onPress={() => setVisibleConfirm(false)}>
              <Text style={{ fontSize: 17, color: 'white' }}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     

        <FlatList
          style={{width: '100%'}}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.restaurantName}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{item.nomeFantasia}</Text>
              </View>
            )
          }}
        />

        <Text style={{ fontSize: 17 }}>Cardápio</Text>


        <FlatList
          style={styles.list}
          data={category}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View>
                <List.Section title="">

                  <List.Accordion
                    title={item.nome}>
                    <GetItensPerCategory value={item._id} />
                  </List.Accordion>
                </List.Section>
              </View>
            )
          }}
        />
   


      <TouchableOpacity style={styles.buttonVoltar} onPress={() => { setVisibleConfirm(true) }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Estou indo embora</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}