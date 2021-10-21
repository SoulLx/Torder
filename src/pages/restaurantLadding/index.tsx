import React from 'react';
import {SafeAreaView, Text,ImageBackground,TouchableOpacity} from 'react-native';
import styles from './styles'


export function RestaurantLadding() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/mc.jpg')} style={styles.image} resizeMode="stretch">
      <TouchableOpacity style={styles.continue}>
      <Text style={styles.continueText}> Toque para começar </Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  )
}