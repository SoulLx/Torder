import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    barra:{
        borderTopColor:'#d1d1d1',
        justifyContent:'space-between',
        flexWrap: "wrap",
        flexDirection: "row",
        borderTopWidth: 1,
        
    },
    buttons:{
    paddingHorizontal:'19%',
    paddingVertical: 10,
    borderRadius: 0,
    alignSelf: "flex-start",
    marginHorizontal: "0.2%",
    marginBottom: "2%",
    marginTop:"2%",
    minWidth: "32%",
    textAlign: "center",
    },
    textbutton:{
        
       fontSize:14,
       alignSelf:"center"
    },
});

export default styles;