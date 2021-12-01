import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(217, 217, 217,0.5)',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    modalViewCancel: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 150,
        width: "90%",
        justifyContent: "space-between"
    },

    modalViewCancelAction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    confirmButton: {
        backgroundColor: 'green',
        height: 40,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    cancelButton: {
        backgroundColor: 'red',
        height: 40,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textButtonCancel: {
        color: 'white', 
        fontSize: 16,
    },
    







    title: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: 'white',

    },

    bookingView: {
        backgroundColor: 'white',
        height: 120,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
    },

    midBooking: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    bookingAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        width: 250,
    },

    bookingButtonConfirm: {
        height: 30,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookingButtonCancel: {
        height: 30,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },

    historyView: {
        alignItems: 'center',
        marginVertical: 1,
        paddingVertical: 30,
    }
});

export default styles;