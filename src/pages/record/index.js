import React ,{ useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather,  FontAwesome5} from '@expo/vector-icons'
import { StatusBar, Platform, KeyboardAvoidingView, ImageBackground, Text, FlatList, View, TextInput, TouchableOpacity } from 'react-native';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';

import * as Yup from 'yup';

import RadioGroup,{Radio} from "react-native-radio-input";

import Input from '../../Components/form/input';

import stylesform from '../../assets/styles/form';
import styles from './styles';



import Background from '../../assets/image/backgroundHome.png';

export default function Record(validation) {
  const navigation = useNavigation();
  

  function getChecked(value){
    value
  }
  
  function navigateBack(){
    navigation.goBack();
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
                <Text style={styles.Title}>Finalizar Cadastro</Text>
              <Text style={styles.description}>Preencha com sinceridade! Usaremos esse formulário para definir seus objetivos e desafios.</Text>
              
                  <View>
                    <StatusBar barStyle="dark-content" />

                    <Form>



                    <Text style={styles.titleLogin}>1) Pessoais</Text>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Mora sozinho?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                        </RadioGroup>
                      </View>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Você paga as contas de casa ou recebe ajuda de outras pessoas?</Text>
                        <RadioGroup
                        getChecked={getChecked} 
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Pago sozinho"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"recebo ajuda"} value={"Não"}/>
                        </RadioGroup>
                      </View>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Possui cartão de crédito?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                        </RadioGroup>
                      </View>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Qual a frequência que você usa ?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Todo dia"} value={"Todo dia"}/>
                            <Radio iconName={"lens"} label={"Fim de semana"} value={"Fim de semana"}/>
                            <Radio iconName={"lens"} label={"Somente em emergência/necessário"} value={"Somente em emergência/necessário"}/>
                        </RadioGroup>
                      </View>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Com que frequência você chega perto ou atinge o limite do seu cartão?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Todo mês"} value={"Todo mês"}/>
                            <Radio iconName={"lens"} label={"1x a cada 3 meses"} value={"1x a cada 3 meses"}/>
                            <Radio  iconName={"lens"} label={"1 por ano"} value={"1 por ano"}/>
                            <Radio iconName={"lens"} label={"Nunca"} value={"Nunca"}/>

                        </RadioGroup>
                      </View>




                      <Text style={styles.titleLogin}>2) Saúde</Text>


                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Possui plano de saúde?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                        </RadioGroup>
                      </View>

                      <View style={stylesform.radioGroup}>
                        <Text style={stylesform.textForm}>Com que frequência você vai ao dentista?</Text>
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Todo mês"} value={"Todo mês"}/>
                            <Radio iconName={"lens"} label={"1x a cada 3 meses"} value={"1x a cada 3 meses"}/>
                            <Radio  iconName={"lens"} label={"1 por ano"} value={"1 por ano"}/>
                            <Radio iconName={"lens"} label={"Nunca"} value={"Nunca"}/>
                        </RadioGroup>
                      </View>




                    <Text style={styles.titleLogin}>3) Alimentação</Text>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Pede comida por aplicativo com que frequência?</Text> 
                      <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Todo dia"} value={"Todo dia"}/>
                            <Radio iconName={"lens"} label={"Fim de semana"} value={"Fim de semana"}/>
                            <Radio iconName={"lens"} label={"Somente em emergência/necessário"} value={"Somente em emergência/necessário"}/>
                        </RadioGroup>
                    </View>




                    <Text style={styles.titleLogin}>4) Entretenimento</Text>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Possui TV a cabo?</Text>               
                      <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                      </RadioGroup>
                    </View>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Possui serviços de streaming?(Ex: Netflix, Amazon prime...)</Text> 
                      <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                      </RadioGroup>
                    </View>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Possui celular pós - pago / Controle?</Text>                     
                      <RadioGroup 
                          getChecked={getChecked}
                          labelStyle = {stylesform.label}
                          coreStyle = {stylesform.core}
                          >
                              <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                              <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                      </RadioGroup>
                    </View>



                    <Text style={styles.titleLogin}>5) Transporte</Text>
                      

                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Possui carro Próprio?</Text>                     
                      <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>
                      </RadioGroup>
                    </View>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Este veículo foi comprado à vista ou financiado?</Text>  
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"À vista"} value={"À vista"}/>
                            <Radio iconName={"lens"} label={"Financiado"} value={"Financiado"}/>                        

                        </RadioGroup>
                    </View>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Possui seguro?</Text>   
                        <RadioGroup 
                        getChecked={getChecked}
                        labelStyle = {stylesform.label}
                        coreStyle = {stylesform.core}
                        >
                            <Radio  iconName={"lens"} label={"Sim"} value={"Sim"}/>
                            <Radio iconName={"lens"} label={"Não"} value={"Não"}/>                        

                        </RadioGroup>
                    </View>


                    <View style={stylesform.radioGroup}>
                      <Text style={stylesform.textForm}>Usa carro por aplicativo com que frequência?</Text> 
                      <RadioGroup 
                      getChecked={getChecked}
                      labelStyle = {stylesform.label}
                      coreStyle = {stylesform.core}
                      >
                          <Radio  iconName={"lens"} label={"Todo dia"} value={"Todo dia"}/>
                          <Radio iconName={"lens"} label={"Fim de semana"} value={"Fim de semana"}/>
                          <Radio iconName={"lens"} label={"Somente em emergência/necessário"} value={"Somente em emergência/necessário"}/>                        

                      </RadioGroup>
                    </View>


                      <TouchableOpacity 
                        style={stylesform.Button}
                        onPress={navigateBack}
                      >
                        <Text style={stylesform.textButton}>
                         Salvar
                        </Text>
                      </TouchableOpacity>
                    </Form>
                  </View>
            </View>
          )}
        />



      </ImageBackground>
  
  );
}