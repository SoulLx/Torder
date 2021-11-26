import { StyleSheet,StatusBar,Platform } from 'react-native';


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
    image:{
        flex: 1,
        justifyContent: "center"
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
        marginTop:"80%",
        
    },
    entrarButton:{
        borderWidth: 1,
        borderColor:'black',
        paddingVertical:"3%",
        paddingHorizontal:'26%',
        borderRadius:8,
        marginBottom:"10%",
        backgroundColor:'white',
        marginRight:'20%',
        marginLeft:'15%',
    },
    registrarButtonLadding:{
        backgroundColor:'black',
        paddingVertical:"3%",
        paddingHorizontal:'25%',
        borderRadius:8,
        marginRight:'20%',
        marginLeft:'15%',
    },
    entrar:{
        color:'black',
        fontSize:14,
        fontWeight:'bold',
    },
    clienteTouch:{
        backgroundColor:'#ededed', 
        marginTop:"10%", 
        alignItems:'center',
        marginHorizontal:'25%', 
        paddingVertical:'1%',
        borderRadius:20,
        marginRight:'30%',
        marginLeft:'25%',
    },
    registrarLadding:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
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