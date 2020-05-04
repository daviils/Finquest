import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        resizeMode: "cover"
    },

    header: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 10,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    },

    HeaderButton:{
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#78C055',
        paddingVertical: 7,
        width: 90,
    },

    headerText:{
        textAlign: 'center',
        color: '#78C055',
    },

    body:{
        paddingHorizontal: 24,
    },

    titleLogin:{
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },

    description:{
        fontSize: 15,
        marginTop: 10,
        color: '#8E8E8E',
    },

    Featured:{
        color: '#78C055',
    },
})