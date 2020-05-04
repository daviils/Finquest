import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import stylesform from '../../assets/styles/form'

import styles from './styles';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity style={[styles.row, {backgroundColor: this.props.color}]} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>
                  <Text style={styles.number}>{this.props.id}   </Text>
                   {this.props.title}
                </Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#fff'} />
            </TouchableOpacity>
            
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={[styles.child,{backgroundColor: this.props.color} ]}>
                    <Text style={styles.childtext}>{this.props.data}</Text> 
                    <TouchableOpacity 
                      style={[stylesform.Button,{backgroundColor:"#fff"}]}
                      // onPress={() => formRef.current.submitForm()}
                    >
                      <Text style={[stylesform.textButton,{color:this.props.color}]}
                      >
                        click aqui para acessar a dica!
                      </Text>
                    </TouchableOpacity>   
                </View>
            }
            
            
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }


}

