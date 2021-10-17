
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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

const styles=StyleSheet.create({
        box:{
            textAlign: 'justify',
            borderWidth: 1,
            borderRadius:3,
            padding:"5%",
            margin:"5%",
        },
});

export default TextField;