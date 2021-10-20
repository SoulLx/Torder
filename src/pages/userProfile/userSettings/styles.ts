import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:'black',
        paddingHorizontal:'42%',
        paddingVertical:'5%',
    },
    confirm:{
        color:'white',
    },
    textInput:{
            textAlign: 'justify',
            borderWidth: 1,
            borderRadius:3,
            paddingHorizontal:"60%",
            paddingVertical:"5%",
            margin:"5%",
            marginLeft:'5%',
    },
    fields:{
        padding:'20%',
        marginTop:'-80%',
        marginLeft:'-2%',
    },
    fieldName:{
        fontWeight:'bold',
        fontSize:16,
    },
    back:{
      marginLeft:'-80%',
      marginTop:'10%',
    },

});

export default styles;