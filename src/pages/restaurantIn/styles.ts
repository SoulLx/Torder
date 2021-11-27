import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    barOpen:{
        backgroundColor:'green',
        marginTop:'-70%',
        paddingHorizontal:'50%', 
        paddingTop:'1%'
    },
    barClosed:{
        backgroundColor:'red', 
        marginTop:'-70%',
        paddingHorizontal:'50%', 
        paddingTop:'1%'
    },
    open:{
        color:'green',
        fontSize:18,
        
    },
    closed:{
       color:'red',
        fontSize:18
    },
    textOpen:{
        color:'green',
        fontSize:12,
        
    },
    textClosed:{
       color:'red',
        fontSize:12,
    },
    img:{
      width:50,
      height:50,
      borderRadius: 50,
    },
    barra:{
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttons:{
    paddingHorizontal: 1,
    paddingVertical: 10,
    borderRadius: 0,
    alignSelf: "flex-start",
    marginHorizontal: "0.6%",
    marginBottom: 5,
    minWidth: "32%",
    textAlign: "center",
    },
    textbutton:{
    fontSize:14,
    alignSelf:"center"

    },
    profileButtom:{
     color:'red',
    },
    profileRestaurant:{
    marginTop:'5%',
    marginLeft:'45%',
    fontSize:14,
    fontWeight:'bold',
    },
    name:{
    marginTop:'5%',
    marginLeft:'2%',
    fontSize:14,
    fontWeight:'bold',
    },
    sair:{
        marginTop:'-40%',
        marginBottom:'-70%',
    },
    config:{
    alignSelf:"center",
    
    marginHorizontal:'15%',
    justifyContent:'space-between',

    },openClosed:{
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop:"-70%",
        marginLeft:'37%',
        
    },
    manager:{
        marginTop:"-65%",
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row"
    },
    perfiltexto:{
    fontSize:16,
    
    marginBottom:'5%',
    },
    sairTexto:{
        fontSize:16,
        color:'red',
        marginBottom:'5%',
        },
    foto:{
    marginLeft:20,
    alignSelf: "flex-start",
    marginTop:60,
    justifyContent:'space-between',
    flexWrap: "wrap",
    flexDirection: "row",

    }
});

export default styles;