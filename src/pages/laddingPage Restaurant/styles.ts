import { StyleSheet,StatusBar,Platform } from 'react-native';
import { AlignJustify } from 'react-native-feather';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    registerModalName:{
        fontWeight:'bold',
        fontSize:16,
        textDecorationLine: 'underline',
    },
    registerBox:{
        marginTop:'10%',
        
    },
    registertext:{
        marginLeft:'5%',
        fontWeight:'bold',
    },
    modalTitle:{
        alignItems:'center',
    },
    logoView:{
    marginTop:150,
    },
    logo:{
        width:200,
        height:200,
    },
    loginButton:{
        
        marginBottom:100,
    },
    entrarButton:{
        borderWidth: 1,
        borderColor:'black',
        paddingVertical:10,
        paddingHorizontal:'30%',
        borderRadius:8,
        marginBottom:30,
    },
    registrarButtonLadding:{
        backgroundColor:'black',
        paddingVertical:10,
        paddingHorizontal:'30%',
        borderRadius:8,
    },
    entrar:{
        color:'black',
    },
    registrarLadding:{
        color:'white',
    },
    modalView: {
        backgroundColor:"white",
        margin:5,
        padding:20,
        borderRadius:20,
        elevation:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin:"-5%"
      },
      picker:{
        marginHorizontal:'-4%',
      },
    box:{
        textAlign: 'justify',
        borderWidth: 1,
        borderRadius:3,
        padding:"5%",
        margin:"5%",
        marginBottom:"10%",
        
    },
    backtouch:{
        alignSelf: "flex-start",
        paddingBottom:"5%",
        marginTop: '10%',
        
    },
    
    registrar:{
        alignSelf: "center",
        borderRadius:3,
        backgroundColor:"black",
        marginTop: '10%',
        paddingTop:"5%",
        paddingHorizontal:"40%",
    },
    registrarText:{
        paddingBottom:"20%",
        color:'white',
        fontWeight:'bold',

    },
});

export default styles;