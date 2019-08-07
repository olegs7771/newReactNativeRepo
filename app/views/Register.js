import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from "react-native";

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    paswordConfirmed: ""
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
export default Register;
