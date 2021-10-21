import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        width:"100%",
        height:"80%",
        flex: 1,
        justifyContent: "center"
    },
    continue:{
        paddingVertical:"18%",
        backgroundColor:'#114116',
        marginTop:"170%",
        alignItems:"center",
    },
    continueText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
});

export default styles;