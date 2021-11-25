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
    fontWeight:'bold',
    },
    config:{
    alignSelf: "flex-start",
    marginTop:"-70%",
    marginLeft:'5%',
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

    }
});

export default styles;