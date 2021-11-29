import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding:10,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'rgba(217, 217, 217,0.5)', 
    },

    view1: {
        marginTop: 30,       
        width: '100%',  
        padding: 5,          
    },

    view2: {
        width: '100%',         
        padding: '5%',   
        backgroundColor:'rgba(255, 255, 255,0.5)',  
        marginBottom:'-8%',
        borderRadius:8,
        marginTop:'5%',
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
        alignItems: 'center',
        padding: '10%',
        width: '97.6%', 
        height: '47%',
        backgroundColor:'rgba(255, 255, 255,0.5)',
        borderRadius:8,
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
        width: '110%',                        
        height: "10%", 
        marginBottom:'-3%',       
    },

    buttonReservar: {
        backgroundColor: '#DB2525',
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
    modalView2: {
        borderRadius: 20,
        backgroundColor: "white",
        padding: '5%',   
        height: '50%',
        justifyContent: 'space-between' ,
        
    },

    buttonModalReservar: {
        backgroundColor: '#DB2525',
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