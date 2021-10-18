import React, {useState} from 'react';
import { TouchableOpacity,Text, View} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';



export function BottomBar(){
    
    const navigation = useNavigation();
    return(
        <View style={styles.barra}>
    <TouchableOpacity 
    style={styles.buttons}
    onPress={() => navigation.navigate('SearchRestaurant')}
    >
        <Text style={styles.textbutton}>
            Restaurantes
        </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => navigation.navigate('Booking')}
        >
        <Text style={styles.textbutton}>
            Reservas
        </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => navigation.navigate('UserProfile')}
        >
        <Text style={styles.textbutton}>
            Perfil
        </Text>
    </TouchableOpacity>
    </View>
    )
}



export default BottomBar;