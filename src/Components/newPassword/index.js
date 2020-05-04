import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import stylesform from '../../assets/styles/form'



export default function newPassword() {

    return (

        <View >
            <TouchableOpacity style={styles.ButtonRed}>
                <Text style={stylesform.textButton}>
                Cancelar
                </Text>
            </TouchableOpacity>
            <TextInput
                style={stylesform.input}
                placeholder="Senha antiga"
                placeholderTextColor="#6D6D6D"
                autoCapitalize="words"
                autoCorrect={false}
                // value={}
                // onChangeText={ }
            />
            <TextInput
                style={stylesform.input}
                placeholder="Nova senha"
                placeholderTextColor="#6D6D6D"
                autoCapitalize="words"
                autoCorrect={false}
                // value={}
                // onChangeText={ }
            />
            <TextInput
                style={stylesform.input}
                placeholder="Confirmar senha"
                placeholderTextColor="#6D6D6D"
                autoCapitalize="words"
                autoCorrect={false}
                // value={}
                // onChangeText={ }
            />
            <TouchableOpacity style={stylesform.Button}>
                <Text style={stylesform.textButton}>
                Salvar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
