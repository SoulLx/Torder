import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flat: {
        marginLeft: '5%',
        marginTop: '5%',
        alignItems: 'center',
    },
    barOpen: {
        backgroundColor: 'green',
        marginTop: '-70%',
        paddingHorizontal: '50%',
        paddingTop: '1%'
    },
    barClosed: {
        backgroundColor: 'red',
        marginTop: '-70%',
        paddingHorizontal: '50%',
        paddingTop: '1%'
    },
    open: {
        color: 'green',
        fontSize: 18,

    },
    closed: {
        color: 'red',
        fontSize: 18
    },
    textOpen: {
        color: 'green',
        fontSize: 12,

    },
    textClosed: {
        color: 'red',
        fontSize: 12,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    barra: {
        justifyContent: 'space-between',
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttons: {
        paddingHorizontal: 1,
        paddingVertical: 10,
        borderRadius: 0,
        alignSelf: "flex-start",
        marginHorizontal: "0.6%",
        marginBottom: 5,
        minWidth: "32%",
        textAlign: "center",
    },
    textbutton: {
        fontSize: 14,
        alignSelf: "center"

    },
    profileButtom: {
        color: 'red',
    },
    profileRestaurant: {        
        fontSize: 14,
        fontWeight: 'bold',
    },
    name: {
        marginTop: '0%',
        marginLeft: '5%',
        paddingHorizontal: '0%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    sair: {
        marginTop: '-40%',
        marginBottom: '-70%',
    },
    config: {
        alignSelf: "center",
        marginLeft: '16%',
        marginHorizontal: '15%',
        justifyContent: 'space-between',

    },

    openClosed: {        
        justifyContent: 'space-between',
        paddingRight: 30,
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexDirection: "row",
        marginTop: "-70%",        
        width: '63%',
    },
    manager: {
        marginTop: "-65%",
        justifyContent: 'space-between',
        flexWrap: "wrap",
        flexDirection: "row"
    },
    perfiltexto: {
        fontSize: 16,
        marginBottom: '5%',
    },
    sairTexto: {
        fontSize: 16,
        color: 'red',
        marginBottom: '5%',
    },
    foto: {       
        alignSelf: "flex-start",
        marginTop: 60,
        justifyContent: 'space-between',
        flexWrap: "wrap",
        flexDirection: "row",
        width: '100%',        
        alignItems: 'center',
        paddingRight: 30,
    }
});

export default styles;