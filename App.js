import { React, Component } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import params from './src/params';
import Field from './src/Components/Field';
import MineField from './src/Components/MineField';
import { createMinedBoard } from './src/functions';
import Mine from './src/Components/Mine';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState();
  }

  cols = params.getColumnsAmount();
  rows = params.getRowsAmount();

  minesAmount = () =>{

    return Math.ceil(this.cols * this.rows * params.difficultLevel);
  }

  createState = () =>{
    return {
      board: createMinedBoard(this.rows, this.cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  render () {return (
    <SafeAreaView style={styles.container}>
      <Text> Mines start! </Text>
      <Text> 
        {params.getRowsAmount()} X {params.getColumnsAmount()}
      </Text>

      <View style ={styles.board}>
        <MineField board={this.state.board}/>
      </View>
    </SafeAreaView>
  )};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

