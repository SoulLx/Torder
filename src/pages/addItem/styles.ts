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

    view1: {
        marginTop: 30,
        height: "10%",        
        width: '100%',
    },

    view2: {
        alignItems: 'center',
        width: "100%",
    },

    view3: {
        width: "100%",        
    },

    view4: {
        width: '100%',
        height: 60,
    },

    viewPicker: {       
        borderWidth: 1,        
        borderRadius: 10,
        borderColor: '#ababab',
    },

    txtItem: {
        padding: 15,
        borderWidth: 1,        
        borderRadius: 10,
        marginVertical:10,
        borderColor: '#ababab',
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
        marginTop: 25,
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
        marginVertical: 30,        
    },

    addButton: {
        backgroundColor: '#DB2525',
        width: '100%',
        height: '100%',
        alignItems: 'center',        
        justifyContent: 'center',
    },

})

export default styles;
