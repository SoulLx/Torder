import React from 'react';
import { Text,TextInput, View, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import { ArrowLeft} from "react-native-feather";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export function UserSettings() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.back}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
        <ArrowLeft 
        stroke="black"
        width="30"
        height="30"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.fields}>
            <Text style={styles.fieldName}>
                Nome
            </Text>
            <TextInput 
            style={styles.textInput} 
            ></TextInput >
            <Text style={styles.fieldName}>
                Número de celular
            </Text>
            <TextInput 
              style={styles.textInput} 
            ></TextInput >
            <Text style={styles.fieldName}>
                CPF
            </Text>
            <TextInput 
            style={styles.textInput} 
            >
            </TextInput >
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
              <Text style={styles.confirm}>
                Confirmar
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

