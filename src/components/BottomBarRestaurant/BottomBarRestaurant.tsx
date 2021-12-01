import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';



export function BottomBarRestaurant() {

    const navigation = useNavigation();
    return (
        <View style={styles.barra}>
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate('AddItem')}
            >
                <Text style={styles.textbutton}>
                    Adicionar Produto
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate('addTable')}
            >
                <Text style={styles.textbutton}>
                    Adicionar Mesa
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export default BottomBarRestaurant;