import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export function BottomBar(){
    return(
        <View style={styles.barra}>
    <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textbutton}>
            Inicio
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textbutton}>
            Reservas
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textbutton}>
            Perfil
        </Text>
    </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    barra:{
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttons:{
    paddingHorizontal: 1,
    paddingVertical: 10,
    borderRadius: 0,
    alignSelf: "flex-start",
    marginHorizontal: "0.6%",
    marginBottom: 5,
    minWidth: "32%",
    textAlign: "center",
    },
    textbutton:{
       fontSize:14,
       alignSelf:"center"
    },
});

export default BottomBar;