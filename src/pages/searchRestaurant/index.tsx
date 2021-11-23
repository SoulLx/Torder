import React, { useState } from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles'
import BottomBar from '../../components/BottomBar/BottomBar';
import SearchBarTorder from '../../components/SearchBarTorder/SearchBarTorder';


export function SearchRestaurant() {

  return (
    <SafeAreaView style={styles.container}>
      <SearchBarTorder/>            
      <BottomBar/>
    </SafeAreaView>
  )
}