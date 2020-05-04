import { StyleSheet } from 'react-native';

export default StyleSheet.create({

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

    AccordianList:{
        marginTop: 40,
    },

    Accordian:{
        backgroundColor:'#fff',
    }



})