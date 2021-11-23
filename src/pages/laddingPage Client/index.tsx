import React, {useState,useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,TextInput,ActivityIndicator, FlatList} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import Modal from "react-native-modal";


export function LaddingPageClient({navigation}:{navigation:any}) {
    const[visibleRegister,setVisibleRegister]=useState(false)
    const[visibleLogin,setVisibleLogin]=useState(false)
    
      const [value,setValue] = useState({
        nome: '',
        cpf:'',
        email:'', 
        telefone:'',
        senha: '',
      });

      const[loginValue, setLoginValue] = useState({
        email: "",
        senha: ""
      });

      let token = 'Bearer ';

    const postRegister = async ( ) =>{
      await fetch('https://torder-api.vercel.app/api/usuario', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
      }).then(response => response.json())
        .then((data) => {
          token += data.token;

          const client = fetch('https://torder-api.vercel.app/api/cliente', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            },
            body: JSON.stringify(value)
          });
          
          let usuario = {
            _id: data.usuario._id,
            email: data.usuario.email,
            senha: value.senha,
            ehAdminRestuarante: data.usuario.ehAdminRestuarante,
            cliente: null,
          };
          
          client.then(response => response.json()).then((data) => { 
            usuario.cliente = data.cliente._id ;

            fetch('https://torder-api.vercel.app/api/usuario/'+ usuario._id, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            },
            body: JSON.stringify(usuario)
            }).then(response => {
              return response.json( )
              })
              .then(data => console.log(data));

          });
          
      });
    };
     
    const postLogin = async () => {
      await fetch('https://torder-api.vercel.app/api/login', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginValue)
      }).then(response => response.json()).then(data => {

      if(data.token != undefined && data.token != null ){
        navigation.push('UserProfile')
      }

    })
    }
    
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
            onChangeText={(text) => setValue({ ...value, nome: text })}
            value={value.nome}
            ></TextInput>
    
    
          </View>
            <View >
    
              <TextInput 
              style={styles.box}
              placeholder="Email"
              onChangeText={(text) => setValue({ ...value, email: text })}
              value={value.email}
              ></TextInput>
              
              
           </View>
           <View >
              
              <TextInput 
              style={styles.box}
              placeholder="CPF"
              onChangeText={(text) => setValue({ ...value, cpf: text })}
            value={value.cpf}
              ></TextInput>
             
           </View>
           <View >
              <TextInput
              style={styles.box} 
              placeholder="Celular"
              onChangeText={(text) => setValue({ ...value, telefone: text })}
            value={value.telefone}
              ></TextInput>
              
           </View>

           <View >
              <TextInput
              style={styles.box} 
              placeholder="Senha"
              onChangeText={(text) => setValue({ ...value, senha: text })}
            value={value.senha}
              ></TextInput>
              
           </View>
          
          
          <TouchableOpacity 
          style={styles.registrar} 
          onPress={()=>{setVisibleRegister(false);{postRegister()}}}>
              
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
              onChangeText = {(text) => setLoginValue({...loginValue, email: text})}
              value={loginValue.email}
              ></TextInput>
               <TextInput 
              style={styles.box}
              onChangeText = {(text) => setLoginValue({...loginValue, senha: text})}
              placeholder="Senha"
              value={loginValue.senha}
              ></TextInput>
           </View>
          
          <TouchableOpacity 
          style={styles.registrar} 
          onPress={() => {setVisibleLogin(false);;{postLogin()}}}
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