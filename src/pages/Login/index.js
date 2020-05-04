import React ,{ useRef } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Platform, KeyboardAvoidingView, ImageBackground, Text, FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';

import { data } from '../welcome'

import * as Yup from 'yup';

import Input from '../../Components/form/input';

import styles from './styles';
import stylesform from '../../assets/styles/form'

import Background from '../../assets/image/backgroundHome.png';

state = {
  user: [
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

export default function Login() {
  const formRef = useRef(null);
  const navigation = useNavigation();

  async function handleSubmit(data, { reset }) {
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatório'),
        
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      formRef.current.setErrors({});

      

      if(data.email === 'Mega@hack.com' & data.password === '123'){
        reset();
        navigationToDashboard();
      }
      else{
        alert('login não encontrato, tente novamente Mega@hack.com senha 123 hehehe');
      }

      
    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errorMenssages = {};

        err.inner.forEach(error =>{
          errorMenssages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMenssages)
      }
    }
  }
  
  function navigateBack(){
    navigation.goBack();
  }

  function navigationToDashboard(){
    navigation.navigate('Dashboard');
  }
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={25} color="#78C055" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.titleLogin}><Text style={styles.Featured}>Entre</Text> com sua conta</Text>
        <Text style={styles.description}>Não possui uma conta? Clique na seta para <Text style={styles.Featured}>Voltar</Text></Text>
        <View style={stylesform.form}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View>
              <StatusBar barStyle="dark-content" />

              <Form ref={formRef} onSubmit={handleSubmit}>

                <Input name="email" label="E-mail" />
                <Input secureTextEntry={true} name="password" label="Senha" />
                
              

                <TouchableOpacity 
                  style={stylesform.Button}
                  onPress={() => formRef.current.submitForm()}
                >
                  <Text style={stylesform.textButton}>
                    Entrar
                  </Text>
                </TouchableOpacity>
              </Form>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ImageBackground>
  );
}