import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextMask } from 'react-native-masked-text'
const { DateTime } = require("luxon");

export function Booking({ navigation }: { navigation: any }) {
  const [confirm, setconfirm] = useState(false)
  const [details, setdetails] = useState(false)
  const [cancel, setcancel] = useState(false)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataConfirm, setDataConfirm] = useState([]);
  const [dataBooking, setDataBooking] = useState([]);

  const getBookings = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const clientId = await AsyncStorage.getItem('clienteId');

      const response = await fetch('https://torder-api.vercel.app/api/reserva/obterReservas/' + clientId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })

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

      const response = await fetch('https://torder-api.vercel.app/api/reserva/obterReservaAtual/?idCliente=' + clientId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })

      const json = await response.json();
      setDataBooking(json.reserva);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function NoBooking() {
    if (dataBooking.length == 0) {
      return <Text style={{fontSize: 15, marginTop: 35}}>Você não possui reservas no momento</Text>
    } else {
      return null
    }
  }
  


  const goBooking = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const clientId = await AsyncStorage.getItem('clienteId');
      AsyncStorage.setItem("restauranteReservadoId", dataConfirm.mesa.restaurante._id)

      fetch('https://torder-api.vercel.app/api/reserva/' + dataConfirm._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ status: "Presente" })
      });
      fetch('https://torder-api.vercel.app/api/mesa/' + data.mesa._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ status: "Ocupada" })
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  const cancelBooking = async () => {
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
          body: JSON.stringify({ status: "Cancelada" })
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
    getBookings();
    getCurrentBooking();
  }, []);

  function listSeparator() {
    return (
      <View style={{ backgroundColor: 'rgba(217, 217, 217,0.5)', height: 2 }}></View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <Modal
        style={{ alignItems: 'center' }}
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={confirm}
      >
        <View style={styles.modalViewCancel}>

          <Text style={{ fontSize: 20 }}>
            Confirmar presença?
          </Text>
          <View style={styles.modalViewCancelAction}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => { goBooking(); navigation.replace('RestaurantMenu') }}
            >
              <Text style={styles.textButtonCancel}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => { setconfirm(false) }}
            >
              <Text style={styles.textButtonCancel}>
                Não
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>


      <Modal
        style={{ alignItems: 'center' }}
        animationIn="slideInUp"
        animationOutTiming={1000}
        animationInTiming={600}
        backdropTransitionOutTiming={800}
        animationOut="slideOutDown"
        isVisible={cancel}
      >
        <View style={styles.modalViewCancel}>
          <Text style={{ fontSize: 20 }}>
            Deseja mesmo cancelar?
          </Text>
          <View style={styles.modalViewCancelAction}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => { setcancel(false); cancelBooking() }}
            >
              <Text style={styles.textButtonCancel}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => { setcancel(false) }}
            >
              <Text style={styles.textButtonCancel}>
                Não
              </Text>
            </TouchableOpacity>

          </View>


        </View>
      </Modal>

      <View style={styles.title}>
        <Text>
          Minhas Reservas
        </Text>
      </View>
      <View style={styles.bookingView}>
      <NoBooking/>
        <FlatList
          style={styles.booking1}
          data={dataBooking}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (

            <View style={styles.midBooking}>
              
              <Text style={{ fontWeight: 'bold', }}>{item.mesa.restaurante.nomeFantasia}</Text>
              <Text>{item.status}</Text>
              <TextMask
                value={item.horarioReserva}
                type={'datetime'}
                options={{
                  format: 'YYYY/MM/DD  HH:mm'
                }}
              />


              <View style={styles.bookingAction}>

                <TouchableOpacity
                  style={styles.bookingButtonConfirm}
                  onPress={() => { setconfirm(true); setDataConfirm(item) }}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bookingButtonCancel}
                  onPress={() => { setcancel(true) }}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>Cancelar</Text>
                </TouchableOpacity>


              </View>
            </View>

          )}
        />
      </View>


      <View style={styles.title}>
        <Text>
          Histórico de reservas
        </Text>
      </View>

      <FlatList
        style={{
          borderRadius: 20,
          backgroundColor: 'white',
          width: '95%'
        }}
        initialNumToRender={10}
        data={data}
        ItemSeparatorComponent={listSeparator}
        keyExtractor={({ _id }, index) => _id}
        renderItem={({ item }) => (
          <View style={styles.historyView}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.mesa.restaurante.nomeFantasia}</Text>
            <Text> {item.status} </Text>
            <Text>Reserva criada em: <TextMask
              value={item.horarioCriacao}

              type={'datetime'}
              options={{
                format: 'YYYY/MM/DD  HH:mm'
              }}
            />
            </Text>
            <Text> Reserva reservada em: <TextMask
              value={item.horarioCriacao}
              type={'datetime'}
              options={{
                format: 'YYYY/MM/DD  HH:mm'
              }}
            />
            </Text>
          </View>
        )}
      />


      <BottomBar />

    </SafeAreaView>
  )
}