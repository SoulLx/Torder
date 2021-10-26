import React from 'react';
import { TouchableOpacity,Text, View} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';



export function BottomBarRestaurant(){
    
    const navigation = useNavigation();
    return(
        <View style={styles.barra}>
    <TouchableOpacity 
    style={styles.buttons}
    onPress={() => navigation.navigate('RestaurantIn')}
    >
        <Text style={styles.textbutton}>
            Geral
        </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttons}
        onPress={() => navigation.navigate('Book')}
        >
        <Text style={styles.textbutton}>
            Cardápio
        </Text>
    </TouchableOpacity>
    </View>
    )
}



export default BottomBarRestaurant;