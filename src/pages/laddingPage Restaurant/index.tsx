import React, {useState} from 'react';
import { Text, View, Image,ScrollView, TouchableOpacity,TextInput} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import Modal from "react-native-modal";

import {Picker} from '@react-native-picker/picker';


export function LaddingPageRestaurant({navigation}:{navigation:any}) {
    const[visibleRegister,setVisibleRegister]=useState(false)
    const[visibleLogin,setVisibleLogin]=useState(false)
    const [selectedFood, setSelectedFood] = useState();
    
    
    return (
      
    <View style={styles.container}>
     
   
      <Modal 
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleRegister}
          >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
          <TouchableOpacity style={styles.backtouch} onPress={()=>{setVisibleRegister(false)}}>
          <ArrowLeft
           stroke="black" 
           width="30"
        height="30"
           />
          </TouchableOpacity>
          <View style={styles.modalTitle}>
          <Text
              style={styles.registerModalName}
              
              >Registro</Text>
            </View> 
          <ScrollView>
          <View style={styles.registerBox}>
            
            <Text style={styles.registertext}>
                CNPJ
            </Text>
            
            <TextInput style={styles.box} ></TextInput >
            
            <Text style={styles.registertext}>
                Razão social
            </Text>
            
            <TextInput 
              style={styles.box} 
            ></TextInput >
            
            <Text style={styles.registertext}>
                Nome da Loja
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Telefone da Loja
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                CEP
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Cidade
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Estado
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Bairro
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Endereço
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Número
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Complemento(Opcional)
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >
            <Text style={styles.registertext}>
                Especialidade da Loja
            </Text>
            <View style={styles.box}>
            <Picker
            style={styles.picker}
            selectedValue={selectedFood}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedFood(itemValue)
            }>
            <Picker.Item label="Hamburguer" value="Hamburguer" />
            <Picker.Item label="Sopa" value="Sopa" />
            <Picker.Item label="Suco" value="Suco" />
            <Picker.Item label="Pizza" value="Pizza" />
            </Picker>
            </View>
            <Text style={styles.registertext}>
                Email
            </Text>
            
            <TextInput 
            style={styles.box} 
            >
            </TextInput >

        </View>
           </ScrollView>
           
          
          <TouchableOpacity 
          style={styles.registrar} 
          onPress={()=>{setVisibleRegister(false)}}>
              
              <Text style={styles.registrarText}>
                  Registrar
              </Text>
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
          isVisible={visibleLogin}
          >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
          <TouchableOpacity 
          style={styles.backtouch} 
          onPress={()=>{setVisibleLogin(false)}}
          >
          <ArrowLeft stroke="black"/>
          </TouchableOpacity>
          <View style={styles.modalTitle}>
          <Text
              style={styles.registerModalName}
              
              >Entrar</Text>
            </View> 
          <View >
              <TextInput 
              style={styles.box}
              placeholder="Email"
              ></TextInput>
              <TextInput 
              style={styles.box}
              placeholder="Senha"
              ></TextInput>
           </View>
          
          <TouchableOpacity 
          style={styles.registrar} 
          onPress={() => {navigation.push('RestaurantIn');setVisibleLogin(false)}}
          >
              
              <Text 
              style={styles.registrarText}
              >
                  Entrar
              </Text>
          </TouchableOpacity>
          </View>
          </View>
          </Modal>
          
      <View 
      style={styles.logoView}
      >
      <Image 
      style={styles.logo} 
      source={require('../../assets/logo.png')}
      >
      </Image>
      </View>

      <View 
      style={styles.loginButton}>
      <TouchableOpacity 
      style={styles.entrarButton}
      onPress={()=>{setVisibleLogin(true)}}
      >
      <Text style={styles.entrar}>
      Entrar
      </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles. registrarButtonLadding}
      onPress={()=>{setVisibleRegister(true)}}
      >
      <Text style={styles.registrarLadding}>
      Registrar
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{backgroundColor:'#ededed', marginTop:"10%", alignItems:'center',marginHorizontal:'25%', paddingVertical:'1%',borderRadius:20}}
      onPress={()=>{navigation.push('LaddingPageClient')}}
      >
      <Text style={{fontSize:16,color:'black'}}>
      Cliente?
      </Text>
      </TouchableOpacity>
      </View>
      </View>
    
    )
  }