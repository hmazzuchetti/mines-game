import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import params from './src/params';

const App = () => {



  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}> Mines start! </Text>
      <Text style={styles.highlight}> 
        {params.getRowsAmount()} X {params.getColumnsAmount()}
        </Text>
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
