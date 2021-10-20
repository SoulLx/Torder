import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import styles from './styles'

interface TextFieldProps extends StyleSheet{
    fieldName: string;
}

export function TextField({fieldName,} : TextFieldProps){
    return(
        <View >
    
        <TextInput 
        style={styles.box}
        placeholder={fieldName}
        ></TextInput>
        
     </View>  
    )
}



export default TextField;