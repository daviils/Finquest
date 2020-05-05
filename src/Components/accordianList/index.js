import React, {Component} from 'react';
import Accordian from '../../assets/accordian';

import { View,Text,Dimensions } from 'react-native';
import { Feather} from '@expo/vector-icons';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import styles from './styles';


export default class AccordianList extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
          complete :[
            { 
              id: '01',
              color: '#78C055',
              title: 'Organize-se - 80xp', 
              data: 'Organize os vencimentos de suas contas em um local único.',
            },
            { 
              id: '02',
              color: '#78C055',
              title: 'Compras no Supermercado - 80xp',
              data: ' Agora que você já planejou o vencimento de suas faturas, está na hora de planejar as compras de mercado. Veja o que está faltando na sua casa e faça uma listinha com apenas os produtos de que está faltando e que precisará. Para o próximo desafio, se você é daquelas pessoas que compram o almoço/lanche na rua do trabalho ou faculdade, a dica de hoje é fazer esses lanches em casa. Veja o que você prefere comer, seja um pão com presunto ou um lanche mais elaborado e faça a lista dos itens necessários. Não vá ao mercado com fome! É engraçado mas é verdade. Se você for com fome as compras, comprará mais do que o necessário.'
            },
            { 
              id: '03',
              color: '#50B0BB',
             title: 'Cuide da sua saúde - 80xp',
             data: 'Ter saúde é o essencial para ir atrás de todos os outros objetivos. Quando você não faz um exercício físico por muito tempo ou não cuida da sua saúde, chega um momento em que você terá muitos gastos com remédios e exames. Cuide da sua saúde hoje para que ela não te traga grandes gastos futuramente!.'
            },
            { 
              id: '05',
              color: '#C4C4C4',
              title: 'bloqueado',
              data: 'Termine a missão anterior para desbloquear'
            },
            { 
              id: '05',
              color: '#C4C4C4',
              title: 'bloqueado',
              data: 'Termine a missão anterior para desbloquear'
            },
            { 
              id: '06',
              color: '#C4C4C4',
             title: 'bloqueado',
             data: 'Termine a missão anterior para desbloquear'
            },
            { 
              id: '07',
              color: '#C4C4C4',
             title: 'bloqueado',
             data: 'Termine a missão anterior para desbloquear'
            },
            { 
              id: '08',
              color: '#C4C4C4',
             title: 'bloqueado',
             data: 'Termine a missão anterior para desbloquear'
            },

          ]
         }
      }

      render() {
        const barWidth = Dimensions.get('screen').width - 80;
        return (

          <View>
            
          <View style={styles.level}>
            <Text style={styles.levelTitle}>Nível 8</Text>
            
            <ProgressBarAnimated
                width={barWidth}
                value={50}
                backgroundColor="#50B0BB"
                backgroundColorOnComplete="#78C055"
              />

            <Text style={styles.count}>500/1000</Text>
          </View>

          <Text style={styles.Title}><Feather name="calendar" size={35} color="#000" /> Seus desafios</Text>

          <View style={styles.AccordianList}>
              { this.renderAccordians() }
          </View>

        </View>

        );
      }

    renderAccordians=()=> {
        const feitos = [];
        for (item of this.state.complete) {
          feitos.push(
                <Accordian 
                    id={item.id}
                    color={item.color}
                    title = {item.title}
                    data = {item.data}
                />
            );
        }
        return feitos;
    }
};