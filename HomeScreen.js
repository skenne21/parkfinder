import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import { 
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

type Props = {};

export default class HomeScreen extends Component<Props> {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Search For National Parks!
        </Text>
        <Text style={styles.description}>
        Search For Information on National Parks!
        </Text>
        <SearchBar />
        <Image
          source={require('./resources/christian-vasile.jpg')}
          style={styles.image}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B3648',
  },
  welcome: {
    fontSize: 30,
    color: 'gray',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 4,
  },
  image: {
    width: 420, 
    height: 200,
  }
});