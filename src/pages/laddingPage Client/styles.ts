import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    logoView:{
    marginTop:150,
    },
    logo:{
        width:200,
        height:200,
    },
    loginButton:{
        marginTop:"50%",
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        paddingVertical:'15%',
        borderRadius:20,
        marginHorizontal:"15%",
        
    },
    parceiroTouch:{
        backgroundColor:'#ededed', 
        marginTop:"10%", 
        alignItems:'center',
        marginHorizontal:'25%', 
        paddingVertical:'1%',
        borderRadius:20,
        marginRight:'30%',
        marginLeft:'26%',
    },
    entrarButton:{
        paddingVertical:"3%",
        paddingLeft:'25%',
        borderRadius:8,
        marginBottom:"10%",
        backgroundColor:'white',
        marginRight:'20%',
        marginLeft:'15%',
        elevation: 20,
        shadowColor: '#52006A',
        
    },
    registrarButtonLadding:{
        backgroundColor:'black',
        paddingVertical:"3%",
        paddingLeft:'23%',
        borderRadius:8,
        marginRight:'20%',
        marginLeft:'15%',
        elevation: 20,
        shadowColor: '#52006A',
    },
    entrar:{
        color:'black',
        fontSize:14,
        fontWeight:'bold',
    },
    registrarLadding:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
    },
    modalView: {
        backgroundColor:"white",
        padding:20,
        borderRadius:20,
        elevation:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    
    box:{
        textAlign: 'justify',
        borderWidth: 1,
        borderRadius:3,
        padding:"5%",
        margin:"5%",
        
        
    },
    registerModalName:{
        fontWeight:'bold',
        fontSize:16,
        textDecorationLine: 'underline',
    },
    modalTitle:{
        alignItems:'center',
    },
    backtouch:{
        alignSelf: "flex-start",
        paddingBottom:"5%",
        marginTop: '5%',
        
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