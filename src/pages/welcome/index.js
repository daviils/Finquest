import React ,{ useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, Platform, KeyboardAvoidingView, ImageBackground, Text, FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';

import * as Yup from 'yup';

import Input from '../../Components/form/input';

import stylesform from '../../assets/styles/form';
import styles from './styles';



import Background from '../../assets/image/backgroundHome.png';

export default function Welcome() {
  const formRef = useRef(null);
  const navigation = useNavigation();


  async function handleSubmit(data, { reset }) {
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O email é obrigatório'),
        confirmEmail: Yup.string()
          .email('Digite um e-mail válido')
          .required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatório'),
        confirmPassword: Yup.string().required('A senha é obrigatório'),
        phone: Yup.string().required('O numero de celular é obrigatório'),
        year: Yup.string().required('ano de nascimento é obrigatório'),
        
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data);

      formRef.current.setErrors({});

      

      if(data.email !== data.confirmEmail || data.password !== data.confirmPassword){
        alert('informações diferententes da confirmação, corrija para prosseguir')
      }
      else{
        reset();
        navigationToDashboard();
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
  
  function navigationToLogin(){
    navigation.navigate('Login');
  }

  function navigationToDashboard(){
    navigation.navigate('Dashboard');
  }
  return (
   
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.HeaderButton} 
            onPress={navigationToLogin}
          >
            <Text style={styles.headerText}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={[1]}
          keyExtractor={register => String(register)}
          renderItem={() => (
            <View style={styles.body}>
              <Text style={styles.Title}>
                <Text style={styles.Featured}>Economize</Text> dinheiro atingindo objetivos
              </Text>
              <Text style={styles.description}>Comece hoje mesmo seus desafios e termine os ciclo sempre no positivo</Text>
      
              <Text style={styles.titleLogin}><Text style={styles.Featured}>Registre</Text> uma nova conta</Text>
              <TouchableOpacity onPress={navigationToLogin}>
                <Text style={styles.description}>Já possui uma conta? Clique em
                  <Text style={styles.Featured}> Entrar</Text>
                </Text>
              </TouchableOpacity>
              <View style={stylesform.form}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                  <View>
                    <StatusBar barStyle="dark-content" />

                    <Form ref={formRef} onSubmit={handleSubmit}>

                      <Input name="name" label="Nome" />
                      <Input name="email" label="E-mail" />
                      <Input name="confirmEmail" label="Confirmar E-mail" />
                      <Input secureTextEntry={true} name="password" label="Senha" />
                      <Input secureTextEntry={true} name="confirmPassword" label="Confirmar Senha" />
                      <Input name="phone" label="Celular" />
                      <Input name="year" label="Ano de nascimento" />

                      <TouchableOpacity 
                        style={stylesform.Button}
                        onPress={() => formRef.current.submitForm()}
                      >
                        <Text style={stylesform.textButton}>
                          Registrar-me
                        </Text>
                      </TouchableOpacity>
                    </Form>
                  </View>
                </KeyboardAvoidingView>
              </View>
            </View>
          )}
        />



      </ImageBackground>
  
  );
}