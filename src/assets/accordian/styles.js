import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#fff',
    },
    row:{
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 10,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        marginBottom:5,
    },
    parentHr:{
        height:1,
        color: '#fff',
        width:'100%'
    },
    child:{
        borderRadius: 10,
        marginVertical:10,
        backgroundColor: "#78C055",
        padding:16,
    },

    childtext:{
        color:'#fff',
    },
    
});