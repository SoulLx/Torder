import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        alignItems: "center",
        
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        padding: 30,
    },

    view2: {                
        justifyContent:'space-between',
        
    },

    viewNameCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between'        ,
    },
    viewImageCategory: {
        width: '25%',
    },

    list: {
        width: "99%",
    },

    imageLogo: {
        height: 70,
        width: 70, 
        marginRight: 20,
        borderRadius: 100,       
    },

    itemMenu: {
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 2,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    imageItem: {
        height: 60,
        width: 60,
        borderRadius: 100,        
    }
})

export default styles