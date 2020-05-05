import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import NewPassword from '../../Components/newPassword';

import styles from './styles';
import stylesform from '../../assets/styles/form'

import Background from '../../assets/image/backgroundHome.png'
import User from '../../assets/image/user.jpg'

export default function Perfil() {
    const navigation = useNavigation();

    function navigateBack(){
    navigation.goBack();
    }

    function callPassword(){
        

            return(
                <NewPassword/>
            )
       

    }

    return (
        <ImageBackground source={Background} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={25} color="#78C055" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={[1]}
                keyExtractor={register => String(register)}
                renderItem={() => (
                    <View style={styles.body}>
                        <Text style={styles.Title}>Perfil</Text>
                        <Text style={styles.description}>Visualize as informações da sua conta</Text>
                        <Image 
                            style={styles.avatar} 
                            source={User}
                        />
                        <Text style={styles.Name}>Mega hack</Text>
                        <Text style={styles.descriptionUser}>Mega@hack.com</Text>
                        <Text style={styles.descriptionUser}>Entrou em: 03/05/2020</Text>
                        <Text style={styles.descriptionUser}>2 missões completas</Text>
                        <View >
                            <TouchableOpacity style={stylesform.Button}
                            onPress={callPassword}>
                                <Text style={stylesform.textButton} 
                                >
                                Alterar senha
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* { callPassword() } */}
                       
                    </View>
                )}
            />
            
        </ImageBackground>
    );
}