import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    head:{
        paddingTop: "5%",
        borderBottomWidth: 1,
    },
    bottom:{
        paddingTop: "10%",
        borderBottomWidth: 1,
    },
    body:{
        
        marginTop:"-10%",
        borderWidth: 1,
        
        paddingHorizontal:"25%",
        paddingBottom:"10%",
        
    },
    bodyBottom:{
        
        marginTop:"-10%",
        borderWidth: 1,
        
        paddingHorizontal:"25%",
        paddingBottom:"5%",
        
    },
    midBooking:{
        alignItems:'center',
    },
    nameBooking:{
        marginVertical:"10%",
        
    },
    bookingAction:{
        marginTop:"10%",
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row",
        marginHorizontal:"-30%",
    },
    bookingButtonConfirm:{
        paddingHorizontal:"5%",
        backgroundColor:"#45cc33",
        borderRadius:20,
        
    },
    bookingButtonCancel:{
        paddingHorizontal:"5%",
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