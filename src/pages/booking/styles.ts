import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor:'rgba(217, 217, 217,0.5)', 
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
        
    },
    head:{
        padding: "5%",
        marginTop:'5%',
        paddingHorizontal:'36%',
        backgroundColor: 'white',
        marginBottom:'-4%',
    },
    body:{

        marginTop:"8%",
        borderRadius:20,
        backgroundColor: 'white',
        paddingHorizontal:"25%",
        marginBottom:"85%",
        
        
        
    },
    nameBooking:{
        paddingHorizontal:'0%',
        marginTop:'5%',
        
    },
    bottom:{
        paddingVertical: "5%",
        marginTop:'-162%',
        marginBottom:'2%',
        backgroundColor: 'white',
        paddingHorizontal:'33%',
    },

    bodyBottom:{
        alignItems:'center',
        marginTop:"0%",
        borderBottomWidth:1,
        borderRadius:20,
        paddingHorizontal:"5%",
        paddingBottom:"10%",
        marginBottom:'10%',
        backgroundColor: 'white',
        borderBottomColor:'grey',
    },
    midBooking:{
        alignItems:'center',
    },
    
    bookingAction:{
        marginTop:"10%",
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row",
        marginHorizontal:"0%",
        marginBottom:"5%",
    },
    bookingButtonConfirm:{
        paddingHorizontal:"10%",
        backgroundColor:"#45cc33",
        borderRadius:20,
        
    },
    bookingButtonCancel:{
        paddingHorizontal:"10%",
        backgroundColor:"#de423a",
        borderRadius:20,
        
    },
    textCancel:{
        color:"black",
        fontSize:24,
    },
    textCode:{
        color:"white",
        fontSize:36,
    },
    textDetails:{
        color:"black",
        fontSize:24,
    },
    textConfirm:{
        color:"white",
        fontSize:24,
    },
    modalViewDetails:{
        alignItems:'center',
        backgroundColor:"white",
        paddingHorizontal:"30%",
        paddingVertical:"80%",
        borderRadius:20,
        elevation:10,
    },
    modalViewCancel: {
        alignItems:'center',
        backgroundColor:"white",
        margin:5,
        paddingHorizontal:"10%",
        paddingVertical:"20%",
        borderRadius:20,
        elevation:10,
    },
    modalView: {
        alignItems:'center',
        backgroundColor:"black",
        margin:5,
        paddingHorizontal:"10%",
        paddingVertical:"20%",
        borderRadius:20,
        elevation:10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      },
      confirmTouch:{
        alignSelf: "flex-start",
        paddingBottom:"5%",
        marginTop: '10%',
        
    },bookingDetails:{
        alignItems: "center",
            backgroundColor:"#45cc33",
            borderRadius:20,
            marginTop:"15%",
    },
    cancelButtom:{
        alignItems: "center",
            backgroundColor:"#de423a",
            borderRadius:20,
            marginTop:"15%",
            padding:"10%"
    },

});

export default styles;