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

    topView: {
        width: "100%",
        padding: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },

    labelName: {
        fontSize: 16,
        marginTop: "10%"
    },
    
    labelChair: {
        fontSize: 16,
        marginTop: "10%"
    },

    pickerTable: {
        width: 100,
        alignItems: 'center',
        marginTop: "5%"
    },

    backtouch:{
        alignSelf: "flex-start",
        paddingBottom:"5%",
        marginTop: '10%',        
    },

    nameTable: {
        borderColor: "#dcdcdc",
        borderWidth: 2,
        borderRadius: 10,        
        padding: 10,
        width: "95%" ,
        marginTop: "5%"
    },

    addButton: {
        backgroundColor: '#DB2525',                        
        height: 50,
        width: 350,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',                
    },

    addButtonView: {
        width: '100%',
        alignItems: 'center',
    },

    

})

export default styles;
