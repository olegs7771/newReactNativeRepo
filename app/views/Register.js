import React, { Component } from "react";
import Header from "../sections/Header";
import RegisterForm from "../sections/RegisterForm";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password1: "",
    password2: ""
  };
  render() {
    const { username, password1, password2 } = this.state;
    return (
      <View style={styles.container}>
        <Header message="Press To Login" />
        <Text style={styles.title}>Register</Text>
        <RegisterForm />
      </View>
    );
  }
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "45%"
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5
  }
});
