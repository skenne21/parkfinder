import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

type Props = {};

export default class SearchBar extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }

  }

  _inputChange = (event) => {
    this.setState({searchValue: event.nativeEvent.text});

  }

  render() {
    return(
      <View stlye={styles.searchInput}>
        <TextInput 
          style={styles.searchBar}
          placeholder='Search For Parks With Zipcode or State'
          onChange={this._inputChange}
        />
        <Button
          stlye={styles.searchButton}
          onPress={() => {}}
          color='#C4A34E'
          title='Find Park'
        />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchBar: {
    fontSize: 17,
    color: 'gray',
    width: 320,
    height: 36,
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
    borderRadius: 8,
  },
})