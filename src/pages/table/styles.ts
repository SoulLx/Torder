import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding:10,  
        alignItems: 'flex-start',      
        justifyContent:'space-between',
        backgroundColor: 'white' ,
        flex:1,
    },

    viewItemListTable: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#bdbdbd",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',      
        alignItems: 'center',  
        marginBottom: 20,
    },

    viewInfoTable: {

    },

    listTable: {
        width: '98%',
    },

    buttonAddTable: {
        backgroundColor: '#dcdcdc',
        height: 50,
        width: 350,        
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },

    buttonDelete: {
        height: 35,
        width: 35,
    },

    viewButtonAddTable: {
        width: '100%',
        alignItems: 'center',
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