import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';

export function SearchRestaurant() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> PROCURAR RESTAURANTE </Text>
      <BottomBar/>
    </SafeAreaView>
  )
}