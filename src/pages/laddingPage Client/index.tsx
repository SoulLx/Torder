import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity,TextInput} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import Modal from "react-native-modal";




export function LaddingPageClient({navigation}:{navigation:any}) {
    const[visibleRegister,setVisibleRegister]=useState(false)
    const[visibleLogin,setVisibleLogin]=useState(false)
    
    
    
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
              
              >Registrar</Text>
            </View> 
            <View >
    
    <TextInput 
    style={styles.box}
    placeholder="Nome"
    ></TextInput>
    
    
 </View>
          <View >
    
              <TextInput 
              style={styles.box}
              placeholder="Email"
              ></TextInput>
              
              
           </View>
           <View >
              
              <TextInput 
              style={styles.box}
              placeholder="CPF"
              ></TextInput>
             
           </View>
           <View >
              <TextInput
              style={styles.box} 
              placeholder="Celular"
              ></TextInput>
              
           </View>
          
          
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
          onPress={() => {navigation.push('UserProfile');setVisibleLogin(false)}}
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
      onPress={()=>{navigation.push('LaddingPageRestaurant')}}
      >
      <Text style={{fontSize:16,color:'black'}}>
      Parceiro?
      </Text>
      </TouchableOpacity>
      </View>
      </View>
    
    )
  }