import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, FlatList, ActivityIndicator,TouchableOpacity} from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import Modal from "react-native-modal";
import styles from './styles'
import {Picker} from '@react-native-picker/picker';


export function Restaurant({navigation}:{navigation:any}) {

  const [visibleBooking,setVisibleBooking]=useState(false)
  const [visibleConfirm,setVisibleConfirm]=useState(false)
  const [date, setDate] = useState(['15:00','15:15','15:30','15:45','16:00']);
  const [selectedDate, setSelectedDate] = useState([]);
  const [chair, setChair] = useState(['1','2','3','4','5','6','7','8','9','10']);
  const [selectedChair, setSelectedChair] = useState([]);
  const [restaurant, setRestaurant] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [valueBook, setValueBook] = useState([]);

  const postBook = async () => {
    const response = await fetch("https://torder-api.vercel.app/api/reserva", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWNmOThhNzcyOWQ1NDFmNmNlM2I4MSIsImlhdCI6MTYzNzcwNTE4MCwiZXhwIjoxNjM3NzkxNTgwfQ.fmXV1A0D71O-SrSjFYDde9rGgkB70JZm0ZGxR_X0P3A'
        },
        body: JSON.stringify(valueBook)
    });

    const json = await response.json();
    console.log(json);

};

  

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
            <ArrowLeft 
                style={{marginBottom: 20} }
                stroke="black" 
                width="30"
                height="30"
            />
          </TouchableOpacity> 
          <Text style={{fontSize: 25, 
                        fontWeight: 'bold', 
                        marginBottom: 20,}}>
            Reserva
          </Text>                            
          
          <Text style={styles.lblModal}>Hora</Text>
          <Picker
            style={{
              width: '100%',
              height: 70,
            }}  
            selectedValue={selectedDate}
            onValueChange={(itemValue) =>
              setSelectedDate(itemValue)
            }>
            {
              date.map(cr => {
                return <Picker.Item label={cr} value={cr}/>
                })
              }
          </Picker>
          <Text style={styles.lblModal}>Mesa</Text>
          <Picker     
            style={{

              width: '100%',
              height: 70,
            }}               
            selectedValue={selectedChair}
            onValueChange={(itemValue) => setSelectedChair(itemValue)}
          >
            {
              chair.map(cr => {
                return <Picker.Item label={cr} value={cr}/>
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
              <TouchableOpacity style={styles.buttonYes} onPress={() => postBook()}>
                <Text style={{color: 'white', fontSize: 17}}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNo} onPress={() => setVisibleConfirm(false)}>
                <Text style={{color: 'white', fontSize: 17}}>Não</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>

      
      

      <View style={styles.view1}>
        <TouchableOpacity>
          <ArrowLeft
              stroke="black" 
              width="30"
              height="30" 
            />
        </TouchableOpacity>

        
        
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.lblNameRestaurant}>McDonald's</Text>
              {isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={restaurant}
                
                renderItem={({ item }) => (
                  <View style={{backgroundColor:'black'}}>
                    <Text>{item.nomeFantasia}</Text>
                  </View>
                  
                )}
                keyExtractor={item => item.id}
              />
              )}
              <Text style={styles.lblCategory}>Lanches</Text>
            </View>                              
          </View>          
          <View style={styles.lblAdress}>            
            <Text>{}</Text>         
          </View>

          <View style={styles.viewStatus}>
            <Text style={styles.lblStatus}>Aberto</Text>
          </View>                               
      </View>          

      <View style={styles.viewContent}>
        
          <Text style={styles.lblInfoTitle}>Horário de Funcionamento</Text>
          <Text style={styles.lblInfo}>7:00 - 22:00</Text>
                   
          <Text style={styles.lblInfoTitle}>Total de Mesas da Casa</Text>
          <Text style={styles.lblInfo}>25</Text>
                
          <Text style={styles.lblInfoTitle}>Mesas Disponíveis</Text>
          <Text style={styles.lblInfo}>10</Text>
        
      </View>          
      
      <View style={styles.viewButtonReservar}>
        <TouchableOpacity style={styles.buttonReservar} onPress={() => {setVisibleBooking(true)}}>
          <Text style={{fontSize: 20, color: 'white'}}>Reservar Mesa</Text>
        </TouchableOpacity>
      </View>
    

      
      
    </SafeAreaView>
  )
}