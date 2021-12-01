import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(217, 217, 217,0.5)',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        width: 100,
        height: 100,
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
    name: {
        marginTop: "1%",
        marginLeft: "0%",
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    config1: {
        width: '100%',
        height: 80,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    config2: {
        alignSelf: "flex-start",
        marginTop: "-40%",
        marginBottom: '0%',
        paddingTop: '5%',
        paddingLeft: '5%',
        marginLeft: '0%',
        paddingVertical: '5%',
        paddingRight: '88%',
        backgroundColor: 'white',
    },
    perfiltexto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    foto: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 30,
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',        
    },
    linha1: {
        backgroundColor: 'black',
        paddingHorizontal: '50%',
        opacity: 0.2,
        paddingTop: '0.5%',
        marginTop: '-50%',
        marginBottom: '-30%',
    },
    linha2: {
        backgroundColor: 'black',
        paddingHorizontal: '50%',
        opacity: 0.0,
        paddingTop: '0.5%',
        marginTop: '-35%',
        marginBottom: '0%',
    },
    linha3: {
        backgroundColor: 'black',
        paddingHorizontal: '50%',
        opacity: 0.0,
        paddingTop: '0.5%',
        marginTop: '-55%',
        marginBottom: '0%',
    },

    viewButtons: {
        height: 190, 
        borderRadius: 20,       
        width:'95%',       
        justifyContent: 'center',
        marginBottom: 400,
        backgroundColor: 'white',
    },


});

export default styles;