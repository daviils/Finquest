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

    level:{
        flexDirection:'row',
        justifyContent:'space-between',
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

    award:{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom:20,
        marginHorizontal: 5,
        paddingVertical: 20,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },

    //flastList teste
    item: {
        alignItems: "center",
        backgroundColor: "#fff",
        flexBasis: 0,
        flexGrow: 1,
        margin: 4,
        padding: 20
      },
      text: {
        color: "#333333"
      },
    
      itemEmpty: {
        backgroundColor: "transparent"
      },
})