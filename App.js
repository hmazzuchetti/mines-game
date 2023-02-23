import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from './src/params';
import Field from './src/Components/Field';
import Flag from './src/Components/Flag';

const App = () => {



  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}> Mines start! </Text>
      <Text style={styles.highlight}> 
        {params.getRowsAmount()} X {params.getColumnsAmount()}
      </Text>

      <Field />
      <Field opened />
      <Field opened mined />
      <Field flagged />
      <Field opened mined exploded/>
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={4} />
      <Field opened nearMines={5} />
      <Field opened nearMines={6} />
      <Field opened nearMines={7} />
      <Field opened nearMines={8} />
      {/* <Flag />
      <Flag bigger/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
