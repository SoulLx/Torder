import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground, FlatList, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import { ArrowLeft } from "react-native-feather";
import styles from './styles'
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import KeyboardAvoidingWapper from '../../components/KeyboardAvoidingWapper/KeyboardAvoidingWapper';


export function LaddingPageClient({ navigation }: { navigation: any }) {

  const [visibleRegister, setVisibleRegister] = useState(false)
  const [visibleLogin, setVisibleLogin] = useState(false)
  const [loginError, setLoginError] = useState(true);

  const [value, setValue] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    ehAdminRestaurante: false
  });

  const [loginValue, setLoginValue] = useState({
    email: "",
    senha: ""
  });

  let token = '';
  const postRegister = async () => {
    await fetch('https://torder-api.vercel.app/api/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }).then(response => response.json())
      .then((data) => { token = data.token;});

    if (token != null && token != undefined) {
      const decoded = jwt_decode(token);
      AsyncStorage.setItem("token", token);
      AsyncStorage.setItem("clienteId", decoded.idCliente);
      navigation.replace('UserProfile')

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
        if (data.token != null && data.token != undefined) {

          const decoded = jwt_decode(data.token);
          if (decoded.idCliente != null && decoded.idCliente != undefined) {
            AsyncStorage.setItem("token", data.token);
            AsyncStorage.setItem("usuarioId", decoded.idUsuario);
            AsyncStorage.setItem("clienteId", decoded.idCliente);
            navigation.replace('UserProfile');
          }
        } else {
          setLoginError(false);
        }
      } catch (err) {
        console.log(err)
      }
    })
  }


  const campo1 = useRef();
  const campo2 = useRef();
  const campo3 = useRef();
  const campo4 = useRef();
  const campo5 = useRef();
  const campo6 = useRef();
  const campo7 = useRef();

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/client.jpeg')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      >


        <Modal
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleRegister}
        >
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

                  >Registrar</Text>
                </View>
                <View >

                  <TextInput
                    style={styles.box}
                    placeholder="Nome"
                    onChangeText={(text) => setValue({ ...value, nome: text })}
                    value={value.nome}
                    returnKeyType='next'
                    ref={campo1}
                    onSubmitEditing={() => { campo2.current.focus(); }}
                    blurOnSubmit={false}
                  ></TextInput>


                </View>
                <View>

                  <TextInput
                    style={styles.box}
                    placeholder="Email"
                    onChangeText={(text) => setValue({ ...value, email: text })}
                    value={value.email}
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    ref={campo2}
                    onSubmitEditing={() => { campo3.current.focus(); }}
                    blurOnSubmit={false}
                  ></TextInput>


                </View>
                <View >

                  <TextInput
                    style={styles.box}
                    placeholder="CPF"
                    onChangeText={(text) => setValue({ ...value, cpf: text })}
                    value={value.cpf}
                    returnKeyType='next'
                    ref={campo3}
                    onSubmitEditing={() => { campo4.current.focus(); }}
                    blurOnSubmit={false}
                  ></TextInput>

                </View>
                <View >
                  <TextInput
                    style={styles.box}
                    placeholder="Celular"
                    onChangeText={(text) => setValue({ ...value, telefone: text })}
                    value={value.telefone}
                    returnKeyType='next'
                    ref={campo4}
                    onSubmitEditing={() => { campo5.current.focus(); }}
                    blurOnSubmit={false}
                  ></TextInput>

                </View>

                <View >
                  <TextInput
                    style={styles.box}
                    placeholder="Senha"
                    onChangeText={(text) => setValue({ ...value, senha: text })}
                    secureTextEntry={true}
                    value={value.senha}
                    returnKeyType='done'
                    ref={campo5}
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

        </Modal>

        <Modal
          animationIn="slideInUp"
          animationOutTiming={1000}
          animationInTiming={600}
          backdropTransitionOutTiming={800}
          animationOut="slideOutDown"
          isVisible={visibleLogin}
        >
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
                  {loginError ? <Text></Text> : <Text style={{ color: 'red', marginBottom: 15 }}>Usuário ou senha incorreta</Text>}
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
                    keyboardType={'email-address'}
                    returnKeyType='next'
                    ref={campo6}
                    onSubmitEditing={() => { campo7.current.focus(); }}
                    blurOnSubmit={false}
                  ></TextInput>
                  <TextInput
                    style={styles.box}
                    onChangeText={(text) => setLoginValue({ ...loginValue, senha: text })}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={loginValue.senha}
                    returnKeyType='done'
                    ref={campo7}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                  ></TextInput>
                </View>

                <TouchableOpacity
                  style={styles.entrarEntra}
                  onPress={() => { { postLogin() } }}
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
            style={styles.parceiroTouch}
            onPress={() => { navigation.replace('LaddingPageRestaurant') }}
          >
            <Text style={{
              fontSize: 16, color: 'black',
              elevation: 20,
              shadowColor: '#52006A',
            }}>
              Parceiro?
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>


  )
}