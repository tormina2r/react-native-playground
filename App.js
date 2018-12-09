import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ShiftList from './components/ShiftList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#B8DFDF', flex: 1, alignItems: 'stretch' }}>
        <Header backgroundColor='#0E547F' textColor='white'></Header>
        <ShiftList></ShiftList>
      </View>
    );
  }
};