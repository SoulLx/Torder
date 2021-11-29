import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor:'rgba(217, 217, 217,0.5)',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },

    viewList: {       
        backgroundColor: 'white',
        paddingTop:'5%',
        
        paddingLeft:'10%',
    },
});

export default styles;