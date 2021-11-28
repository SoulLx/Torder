import React, { useState, useRef } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground, Keyboard } from 'react-native';
import { ArrowLeft } from "react-native-feather";
import styles from './styles'
import Modal from "react-native-modal";
const image = '..'
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import KeyboardAvoidingWapper from '../../components/KeyboardAvoidingWapper/KeyboardAvoidingWapper';


export function LaddingPageRestaurant({ navigation }: { navigation: any }) {
  const [visibleRegister, setVisibleRegister] = useState(false)
  const [visibleLogin, setVisibleLogin] = useState(false)
  const [selectedFood, setSelectedFood] = useState('');
  const [loginError, setLoginError] = useState(true);

  const [value, setValue] = useState({
    nomeFantasia: "",
    razaoSocial: "",
    email: "",
    cnpj: "",
    especialidade: "",
    endereco: {
      endereco: "",
      numero: "",
      complemento: ""
    },
    telefones: {
      telefone1: "",
    },
    senha: "",
    ehAdminRestaurante: true,
    estaAberto: false
  })

  const [loginValue, setLoginValue] = useState({
    email: "",
    senha: ""
  });

  let token = '';
  const postRegister = async () => {

    const response = await fetch('https://torder-api.vercel.app/api/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
    const json = response.json()
    if (token != null && token != undefined) {
      const decoded = jwt_decode(token);

      AsyncStorage.setItem("token", token);
      AsyncStorage.setItem("restauranteId", decoded.idRestaurante);
      navigation.push('RestaurantIn');
    }
  };

  const postLogin = async () => {
    await fetch('https://torder-api.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginValue)
    }).then(response => response.json()).then(data => {
      try {
        console.log(data);
        if (data.token != null && data.token != undefined) {
          const decoded = jwt_decode(data.token);
          if (decoded.idRestaurante != null && decoded.idRestaurante != undefined) {
            AsyncStorage.setItem("token", data.token);
            AsyncStorage.setItem("restauranteId", decoded.idRestaurante);
            navigation.push('RestaurantIn');
          }
        } else {
          setLoginError(false);
        }
      } catch (err) {
        console.log(err)
      }
    })
  }

  //Refencias dos campos

  const campo1 = useRef();
  const campo2 = useRef();
  const campo3 = useRef();
  const campo4 = useRef();
  const campo5 = useRef();
  const campo6 = useRef();
  const campo7 = useRef();
  const campo8 = useRef();
  const campo9 = useRef();

  const campo11 = useRef();
  const campo12 = useRef();

  return (


    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/restaurant.jpg')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>

        {/*Modal de Registro*/}
        <Modal
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleRegister}
        >
          <View style={styles.modalView2}>
            <KeyboardAvoidingWapper>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity style={styles.backtouch} onPress={() => { setVisibleRegister(false) }}>
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

                  <View style={styles.registerBox}>

                    <Text style={styles.registertext}>
                      CNPJ
                    </Text>

                    <TextInput style={styles.box}
                      onChangeText={(text) => setValue({ ...value, cnpj: text })}
                      value={value.cnpj}
                      returnKeyType='next'
                      ref={campo1}
                      onSubmitEditing={() => { campo2.current.focus(); }}
                      blurOnSubmit={false}
                    ></TextInput >

                    <Text style={styles.registertext}>
                      Razão social
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, razaoSocial: text })}
                      value={value.razaoSocial}
                      ref={campo2}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo3.current.focus() }}
                      blurOnSubmit={false}
                    ></TextInput >

                    <Text style={styles.registertext}>
                      Nome Fantasia
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, nomeFantasia: text })}
                      value={value.nomeFantasia}
                      ref={campo3}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo4.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >
                    <Text style={styles.registertext}>
                      Telefone da Loja
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, telefones: { telefone1: text } })}
                      value={value.telefones.telefone1}
                      ref={campo4}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo5.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >
                    <Text style={styles.registertext}>
                      Complemento
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, endereco: { complemento: text, endereco: value.endereco.endereco, numero: value.endereco.numero } })}
                      value={value.endereco.complemento}
                      ref={campo5}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo6.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >
                    <Text style={styles.registertext}>
                      Endereço
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, endereco: { complemento: value.endereco.complemento, endereco: text, numero: value.endereco.numero } })}
                      value={value.endereco.endereco}
                      ref={campo6}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo7.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >
                    <Text style={styles.registertext}>
                      Número do prédio
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, endereco: { complemento: value.endereco.complemento, endereco: value.endereco.endereco, numero: text } })}
                      value={value.endereco.numero}
                      ref={campo7}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo8.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >
                    <Text style={styles.registertext}>
                      Especialidade da Loja
                    </Text>
                    <View style={styles.box}>
                      <Picker
                        style={styles.picker}
                        selectedValue={selectedFood}
                        onValueChange={(itemValue, itemIndex) => setValue({ ...value, especialidade: itemValue })
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
                      onChangeText={(text) => setValue({ ...value, email: text })}
                      value={value.email}
                      ref={campo8}
                      returnKeyType='next'
                      onSubmitEditing={() => { campo9.current.focus() }}
                      blurOnSubmit={false}
                    >
                    </TextInput >

                    <Text style={styles.registertext}>
                      Senha
                    </Text>

                    <TextInput
                      style={styles.box}
                      onChangeText={(text) => setValue({ ...value, senha: text })}
                      secureTextEntry={true}
                      value={value.senha}
                      ref={campo9}
                      returnKeyType='done'
                      onSubmitEditing={Keyboard.dismiss}
                      blurOnSubmit={false}
                    ></TextInput>


                  </View>



                  <TouchableOpacity
                    style={styles.registrar}
                    onPress={() => { setVisibleRegister(false); { postRegister() } }}>

                    <Text style={styles.registrarText}>
                      Registrar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingWapper>
          </View>
        </Modal>

        {/*Modal de Login*/}
        <Modal
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleLogin}
        >
          <View style={styles.modalView2}>
            <KeyboardAvoidingWapper>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={styles.backtouch}
                    onPress={() => { setVisibleLogin(false) }}
                  >
                    <ArrowLeft stroke="black" />
                  </TouchableOpacity>
                  <View style={styles.modalTitle}>
                  {loginError ? <Text></Text> : <Text style={{color:'red', marginBottom: 15}}>Usuário ou senha incorreta</Text>}
                    <Text
                      style={styles.registerModalName}

                    >Entrar</Text>
                  </View>
                  <View >
                    <TextInput
                      style={styles.box}
                      placeholder="Email"
                      onChangeText={(text) => setLoginValue({ ...loginValue, email: text })}
                      value={loginValue.email}
                      returnKeyType='next'
                      ref={campo11}
                      onSubmitEditing={() => { campo12.current.focus(); }}
                      blurOnSubmit={false}
                    ></TextInput>
                    <TextInput
                      style={styles.box}
                      placeholder="Senha"
                      onChangeText={(text) => setLoginValue({ ...loginValue, senha: text })}
                      secureTextEntry={true}
                      value={loginValue.senha}
                      returnKeyType='done'
                      ref={campo12}
                      onSubmitEditing={Keyboard.dismiss}
                      blurOnSubmit={false}
                    ></TextInput>
                  </View>

                  

                  <TouchableOpacity
                    style={styles.entrarEntra}
                    onPress={() => { postLogin() }}
                  >

                    <Text
                      style={styles.registrarText}
                    >
                      Entrar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingWapper>
          </View>
        </Modal>


        <View
          style={styles.loginButton}>
          <TouchableOpacity
            style={styles.entrarButton}
            onPress={() => { setVisibleLogin(true) }}
          >
            <Text style={styles.entrar}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registrarButtonLadding}
            onPress={() => { setVisibleRegister(true) }}
          >
            <Text style={styles.registrarLadding}>
              Registrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clienteTouch}
            onPress={() => { navigation.replace('LaddingPageClient') }}
          >
            <Text style={{
              fontSize: 16, color: 'black',
              elevation: 20,
              shadowColor: '#52006A',
            }}>
              Cliente?
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}