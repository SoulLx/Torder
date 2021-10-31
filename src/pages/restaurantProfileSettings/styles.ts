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
          
        
        borderWidth: 1,
        borderRadius:3,
        paddingTop:"2%",
        paddingBottom:'2%',
        marginHorizontal:'-30%',
        marginBottom:"10%",
        maxWidth:'70%',
            
    },
    fields:{
        
        paddingTop:'20%',
        marginTop:'-70%',
        marginLeft:'-2%',
    },
    fieldName:{
        marginLeft:'-30%',
        fontWeight:'bold',
        fontSize:16,
    },
    back:{
      marginLeft:'-80%',
      marginTop:'10%',
    },

});

export default styles;