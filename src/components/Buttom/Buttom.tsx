import React, {useState} from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from './styles'

interface TextFieldProps{
    ButtonName:string;
}


export function CustomButton({ButtonName,}:TextFieldProps) {
    const[action,setaction]=useState(false)
    
    return (
            <TouchableOpacity 
            style={styles.Button}
            onPress={()=>{setaction(true)}}
            
            >
              <Text>
                {ButtonName}
              </Text>
            </TouchableOpacity>
    )}