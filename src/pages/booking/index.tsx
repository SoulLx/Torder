import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';

export function Booking() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> RESERVAS </Text>
      <BottomBar/>
    </SafeAreaView>
  )
}