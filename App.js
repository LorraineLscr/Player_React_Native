/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Player from './components/Player'


const App = () => {

  return (
    <SafeAreaView>
      <StatusBar />
      <Player/>
    </SafeAreaView >
  );
};


export default App;
