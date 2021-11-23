import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },

    view1: {
        marginTop: 30,       
        width: '100%',  
        padding: 5,          
    },

    view2: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
        padding: 20,     
    },

    view3: {
        paddingRight: '10%',
        maxWidth: '50%',
    },

    imgLogoRestaurant: {
        height: 50,
        width: 50,
        borderRadius: 200,        
    },

    lblNameRestaurant: {
        fontSize: 20,
    },
    
    lblCategory: {
        fontSize: 15,
    },

    viewStatus: {
        width: '100%',
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
    },
    
    lblStatus: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
    },

    viewDescricao: {
        paddingHorizontal: 20,                
    },
    
    viewContent: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%', 
        height: '50%',
        
    },

    lblInfoTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5,
    },

    lblAdress: {
        fontSize: 14,        
        paddingHorizontal: 20, 
    },
    
    lblInfo: {
        fontSize: 16,
        marginVertical: 5,
    },

    viewButtonReservar: {
        width: '100%',
        padding: 10,
    },

    buttonReservar: {
        backgroundColor: 'red',
        alignItems: 'center',
        height: 60,   
        justifyContent: 'center',     
    },

    modalView: {
        borderRadius: 20,
        backgroundColor: "white",
        padding: 20,    
    },

    buttonModalReservar: {
        backgroundColor: 'red',
        alignItems: 'center',
        height: 60,   
        justifyContent: 'center',  

    },

    lblModal: {
        fontSize: 18,
    },
});

export default styles;