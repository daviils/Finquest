import React from 'react';
import { Feather,  FontAwesome5} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { FlatList, ImageBackground, Text, View, TouchableOpacity, Image } from 'react-native';

import Accordian from '../../Components/accordianList';
import styles from './styles';

import Background from '../../assets/image/backgroundHome.png'
import User from '../../assets/image/user.jpg';


state = {
  data: [
          { 
            id: "00",
            confirmEmail: "mega@hack.com", 
            confirmPassword: "123",
            email: "mega@hack.com" ,
            name: "Mega Hack",
            password: "123",
            phone: "11987654321",
            year: "1996",
          },
          { 
            id: "01",
            confirmEmail: "david@david.com", 
            confirmPassword: "123",
            email: "david@david.com" ,
            name: "David",
            password: "123",
            phone: "11987654321",
            year: "1996",
          },
          { 
            id: "02",
            confirmEmail: "christian@christian.com", 
            confirmPassword: "123",
            email: "christian@christian.com" ,
            name: "Christian",
            password: "123",
            phone: "11987654321",
            year: "1998",
          },
          { 
            id: "03",
            confirmEmail: "fulano@fulano.com", 
            confirmPassword: "123",
            email: "mega@hack.com" ,
            name: "Mega Hack",
            password: "123",
            phone: "11987654321",
            year: "1996",
          }
  ]
};

var validation = true;

export default function Dashboard() {

  const navigation = useNavigation();

  function navigationToPerfil(){
    navigation.navigate('Perfil');
  }

  function navigationToConquest(){
    navigation.navigate('Conquest');
  }

  function navigationToReacord(){
    navigation.navigate('Record');
  }

  function renderDashboard() {
    

    if(validation === false){
      return (
        <View>

          <Text style={styles.Title}><Feather name="calendar" size={35} color="#000" /> Seus desafios</Text>

          <Text style={styles.description}>
            Parece que você ainda não completou seu cadastro. Ele nos ajuda a mapear todos os nossos 
            usuários e facilita nosso algoritmo a escolher os melhores desafios para cada um. 
            Mas fique tranquilo, leva menos de 5 minutos e não mostraremos essas informações em lugar nenhum!
          </Text>
          <TouchableOpacity 
            style={styles.Button}
            onPress={navigationToReacord}
          >
            <Text style={styles.textButton}>Completar cadastro agora</Text>
            <Feather name="edit" size={25} color="#fff" />
          </TouchableOpacity>

      </View>
      )
    }else{
      return(
        <Accordian/>
      )
    }

}

  return (
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity style={{top: 10}} onPress={navigationToConquest}>
          <FontAwesome5 name="trophy" size={35} color="#78C055" />
        </TouchableOpacity>


          {/* <Image 
          style={styles.logo}
            source={logo}
          /> */}
    


        <TouchableOpacity onPress={navigationToPerfil}>
          <Image style={styles.avatar} source={User} />
        </TouchableOpacity>
      </View>
      <FlatList
          data={[1]}
          keyExtractor={register => String(register)}
          renderItem={() => (
        <View style={styles.body}>

          <Text style={styles.Title}>Dashboard</Text>
          <Text style={styles.description}>Confira seus desafios pendentes e concluídos do seu ciclo atual!</Text>

          <View>
          { renderDashboard() }  
          </View>
    
        </View>
      )} />
    </ImageBackground>
  );
}