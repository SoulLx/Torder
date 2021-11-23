import { StyleSheet,StatusBar,Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        alignItems: "center",        
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    listItem: {
        width: '99%',
    },

    viewHeader: {
        padding: 10,
        justifyContent: 'flex-start',
        height: 90,   
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
    },

    viewArrowBack: {
        alignItems: 'center',        
        width: '10%',        
        justifyContent: 'flex-start',
    },

    viewCategory: {        
        width: '80%',
        alignItems: 'center',
    },

    lblCategoty: {
        fontSize: 22,
    },

    itemMenu: {        
        borderBottomWidth: 1,                                        
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: 30,
        paddingHorizontal: 5,
        marginHorizontal: 40,
    },

    imgItem: {
        height: 60,
        width: 60,
        borderRadius: 150,
    },

    itemPrice: {
        fontSize:22, 
        textAlign: 'right',
    },

    itemDesc: {
        fontSize:12, 
        textAlign: 'right',
    },

    itemName: {
        fontSize:26, 
        textAlign: 'right',
    },

    viewImageItem: {
        width: '30%',        
    },

    viewInfoItem: {
        width: '70%'
    },
})

export default styles;
