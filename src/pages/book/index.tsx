import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles'
import BottomBarRestaurant from '../../components/BottomBarRestaurant/BottomBarRestaurant';

export function Book() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Cardápio </Text>
      <BottomBarRestaurant/>
    </SafeAreaView>
  )
}