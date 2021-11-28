import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    containerView: {
        alignItems: "flex-start",
        justifyContent: "center",    
        width: '100%',
        height: '100%',
        padding: 10,
        marginTop: 30,
      },

    view1: {       
        height: "10%",        
        width: '100%',        
        justifyContent:'space-between',
        marginBottom: 90,
    },

    

    view2: {
        width: "100%",
        marginBottom: 70,        
    },

    view3: {
        width: '100%',
        height: 60,          
    },

    viewPicker: {       
        borderWidth: 1,        
        borderRadius: 10,
        borderColor: '#ababab',
        width: '100%',
        marginTop: 30,
    },

    txtItem: {
        padding: 15,
        borderWidth: 1,        
        borderRadius: 10,
        marginVertical:10,
        borderColor: '#ababab',
        width: '100%',
    },

    txtPrice: {
        padding: 15,
        borderWidth: 1,        
        borderRadius: 10,
        marginVertical:10,
        borderColor: '#ababab',
        width: '50%',
        
    },

    lblAddButton: {
        color: 'white',
        fontSize: 16,        
        
    },

    lblPrice: {
        fontSize: 16,
    },

    lblTitle: {
        fontSize: 18,
        marginBottom: 50,  
        width: '100%',
        textAlign: 'center',
    },

    btnAddImage: {
        marginTop: 10,
    },

    imgAdd: {
        height: 200,
        width: 200,
        borderRadius: 20,
    },

    categoryPicker: {             
        marginVertical: 22,        
    },

    addButton: {
        backgroundColor: '#DB2525',
        width: '100%',
        height: 60,
        alignItems: 'center',        
        justifyContent: 'center',
        marginTop: 90,
    },

})

export default styles;
