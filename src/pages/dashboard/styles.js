import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    // flex:1,
    // paddingTop:100,
    // backgroundColor:'#fff',

    container: {
        flex:1,
        resizeMode: "cover"
    },

    header: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    logo:{
        width:80,
        height:80,
        borderRadius:60,
        borderColor:'#fff',
        backgroundColor: '#000'
    },

    avatar:{
        width:60,
        height:60,
        borderRadius:100,
        borderColor:'#fff',
    },

    body:{
        paddingHorizontal: 24,
    },

    Title:{
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
    },

    description:{
        fontSize: 15,
        marginTop: 10,
        color: '#8E8E8E',
    },

    level:{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 19,
    },

    levelTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    count:{
        alignSelf:'flex-end',
        fontSize: 15,
        marginTop: 10,
        color: '#8E8E8E',
    },


    Button:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#78C055',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#78C055',
        marginVertical: 15,
    },

    textButton:{
        alignSelf: 'center',
        color: '#fff',
    },

})