import React, { useRef, useEffect }  from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { useField } from '@unform/core';

import stylesform from '../../assets/styles/form'

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      }
    })
  }, [fieldName, registerField]);

  return (
    <>
    <View>
      <TextInput
          placeholder= {label}
          style={stylesform.input}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
      />

  {error && <Text style={ {color: '#f00'} } >{ error }</Text>}
    </View>

    </>
  );
}

export default Input;