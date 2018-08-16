import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {

  render() {
    return <RootStack />;
  }
}


