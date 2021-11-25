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
        paddingHorizontal:'42.4%',
        paddingVertical:'5%',
        marginBottom:'0%',
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
        marginBottom:"30%",
        maxWidth:'200%',
        paddingLeft:'2%',    
    },
    fields:{
        paddingLeft:'20%',
        paddingRight:'20%',
        paddingTop:'10%',
        marginTop:'0%',
        marginRight:'30%',
        marginLeft:'0%',
    },
    scrollView:{
        paddingHorizontal:'0%',
        
        },
    fieldName:{
        marginLeft:'-30%',
        fontWeight:'bold',
        fontSize:16,
    },
    back:{
      marginLeft:'-86%',
      marginTop:'10%',
    },

});

export default styles;