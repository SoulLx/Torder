import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles'

interface TextFieldProps{
    fieldName: string;
}

export function TextField({fieldName} : TextFieldProps){
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