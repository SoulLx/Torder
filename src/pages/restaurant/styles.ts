import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding:10,
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
    
    lblStatusOpen: {
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold',
    },

    lblStatusClosed: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
    },

    viewDescricao: {
        paddingHorizontal: 20,                
    },
    
    viewContent: {
        justifyContent: 'flex-start',
        //alignItems: 'center',
        padding: 20,
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
        marginBottom: 0,
        height: 60,        
    },

    buttonReservar: {
        backgroundColor: 'red',
        alignItems: 'center',           
        justifyContent: 'center',   
        height: '100%'  ,
    },

    modalView: {
        borderRadius: 20,
        backgroundColor: "white",
        padding: 20,   
        height: '70%',
        justifyContent: 'space-between' ,
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

    modalViewConfirm: {
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
    },

    modalViewButtonConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
    },

    buttonYes: {
        backgroundColor: 'green',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',        
    },

    buttonNo: {
        backgroundColor: 'red',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;