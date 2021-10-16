import React from 'react';
import { Text, View, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import { BottomBar } from '../../components/BottomBar';
import styles from './styles'


export function UserProfile() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.foto}>
    <Image style={styles.img} source={require('../../assets/imgProfile.jpg')}/>
    <Text style={styles.name}>João Vitor Alves da Silva</Text>
    </View>
    <TouchableOpacity style={styles.config}>
        <Text style={styles.perfiltexto}>
            Configuração
        </Text>
    </TouchableOpacity>
    <BottomBar/>
    </SafeAreaView>
  )
}

