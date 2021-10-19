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
    },
    body:{
        marginTop:"-50%",
        borderWidth: 1,
        paddingHorizontal:"25%",
        paddingVertical:"5%",
    },
    booking:{
        paddingVertical:"5%",
    },
    bookingAction:{
        flexWrap: "wrap",
        flexDirection: "row",
        
        
        
    },
});

export default styles;