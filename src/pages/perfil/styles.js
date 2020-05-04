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
    body:{
        paddingHorizontal: 24,
    },

    avatar:{
        marginVertical: 25,
        alignSelf:'center',
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'#fff',
    },

    Title:{
        fontSize: 30,
        marginTop: 15,
        fontWeight: 'bold',
    },

    description:{
        fontSize: 15,
        marginTop: 10,
        color: '#8E8E8E',
    },

    Name:{
        alignSelf:'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },

    descriptionUser:{
        marginVertical:5,
        alignSelf:'center',
    },

    ButtonRed:{
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#BB5050',
        paddingVertical: 10,
        marginHorizontal:20,
        backgroundColor: '#BB5050',
        marginVertical: 15,
    },
})