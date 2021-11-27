import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    img:{
      width:100,
      height:100,
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
    name:{
    marginTop:"1%",
    marginLeft:"0%",
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    },
    config1:{
    alignSelf: "flex-start",
    marginTop:"0%",
    marginBottom:'-20%',
    paddingVertical:'5%',
    paddingRight:'70%',
    marginLeft:'5%',
    
    },
    config2:{
        alignSelf: "flex-start",
        marginTop:"-50%",
        marginBottom:'0%',
        paddingTop:'0%',
        marginLeft:'5%',
        paddingVertical:'5%',
    paddingRight:'70%',
        
        },
    perfiltexto:{
    fontSize:16,
    fontWeight:'bold',
    },
    foto:{
    marginLeft:"5%",
    alignSelf: "flex-start",
    marginTop:"20%",
    justifyContent:'space-between',
    flexWrap: "wrap",
    flexDirection: "row",

    },
    linha1:{
        backgroundColor:'black',
        paddingHorizontal:'50%',
        opacity:0.2,
        paddingTop:'0.5%',
        marginTop:'-50%',
        marginBottom:'-30%',
    },
    linha2:{
        backgroundColor:'black',
        paddingHorizontal:'50%',
        opacity:0.2,
        paddingTop:'0.5%',
        marginTop:'-35%',
        marginBottom:'0%',
    },
    linha3:{
        backgroundColor:'black',
        paddingHorizontal:'50%',
        opacity:0.2,
        paddingTop:'0.5%',
        marginTop:'-55%',
        marginBottom:'0%',
    },
    

});

export default styles;