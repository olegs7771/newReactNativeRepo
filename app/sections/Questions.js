import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export class Questions extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selected: false,
    correct: false
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Questions;
