import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});

export default styles;