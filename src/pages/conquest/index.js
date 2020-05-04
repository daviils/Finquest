import React from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, ImageBackground, FlatList, SafeAreaView, Text, View } from "react-native";
import ProgressCircle from 'react-native-progress-circle'

import Background from '../../assets/image/backgroundHome.png'

import styles from './styles';

state = {
  data: [
          { 
            id: "00", 
            name: "Relâmpago McQueen",
            color: "#50B0BB" 
          },
          { 
            id: "01", 
            name: "Agente Tom Mate",
            color: "#C4C4C4"
          },
          { 
            id: "02", 
            name: "Doc Hudson",
            color: "#50B0BB"
          },
          { 
            id: "03", 
            name: "Cruz Ramirez",
            color: "#C4C4C4" 
          },
          { 
            id: "04", 
            name: "Cruz Ramirez",
            color: "#50B0BB" 
          }
  ]
};

export default function Conquest() {

  const navigation = useNavigation();

  function navigateBack(){
    navigation.goBack();
    }


  const columns = 3;

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { // [C]
      data.push({ // [D]
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }
  
  return (
    <ImageBackground source={Background} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} color="#78C055" />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Text style={styles.Title}>Metas &amp; Conquistas</Text>
                <Text style={styles.description}>Confira suas metas e conquistas por período!</Text>
                <View style={styles.level}>
                    <View style={{width:"50%",}}>
                      
                      <ProgressCircle
                        percent={60}
                        radius={50}
                        borderWidth={8}
                        color="#50B0BB"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'3/5'}</Text>
                    </ProgressCircle>
                    </View>
                    <View style={{width:"50%",}}>
                        <Text style={styles.levelTitle}>Parabéns!</Text>
                        <Text style={styles.description}>Continue assim e logo você terá atingindo todas as conquistas!</Text>
                    </View>   
                </View>

                <SafeAreaView>
                    <FlatList
                    style={{marginTop:20}}
                    data={createRows(state.data, columns)}
                    keyExtractor={item => item.id}
                    numColumns={columns}
                    renderItem={({ item }) => {
                        if (item.empty) {
                            return <View style={[styles.item, styles.itemEmpty]} />;
                        }
                        return (
                        <View style={styles.award}>
                            <Feather name="award" size={45} color= {item.color} />
                        </View>
                        );
                    }}
                    />
                </SafeAreaView>                    
            </View>                 
        </ImageBackground>
  );
}