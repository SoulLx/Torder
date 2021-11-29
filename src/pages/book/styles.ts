import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding:0,  
        alignItems: 'flex-start',      
        justifyContent:'space-between',
        backgroundColor: 'white' ,
        flex:1,
    },

    viewItemListTable: {                      
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',      
        alignItems: 'center',  
        marginBottom: 20,
        borderTopWidth: 3,
        paddingHorizontal: 25,
        borderColor: '#e8e8e8'
    },

    viewInfoTable: {
        
    },

    listTable: {
        width: '98%',
    },

    buttonAddCategory: {       
        height: 70,
        width: "100%",        
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:5,
        borderColor: '#e8e8e8',        
        flexDirection: 'row',
    },

    buttonAddTable: {       
        height: 70,
        width: "100%",        
        alignItems: 'center',
        justifyContent: 'center',       
       
        flexDirection: 'row',
        borderTopWidth: 5,
        borderColor: '#e8e8e8',
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
        width:'100%',
        textAlign: 'center',       
    },

    buttonDelete: {
        height: 35,
        width: 35,
    },

    viewButtonAddTable: {
        width: '100%',
        alignItems: 'center',       
    },

    viewModalCategory: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        height: 260,
        justifyContent: 'space-between',
    },

    buttonCategory: {
        backgroundColor: 'red',
        width: 80,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
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

    categorias: {
        fontSize: 25 ,
        fontWeight: 'bold',
        marginVertical: 20,
    },

    viewCategorias: {
        borderColor: 'rgba(200, 200, 200, 0.4)',                                
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: '6%',
    }
    
});

export default styles;