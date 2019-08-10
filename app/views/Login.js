import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";
import LoginForm from "../sections/LoginForm";
import Header from "../sections/Header";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    console.log("login");

    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Login</Text>
        <LoginForm navigation={this.props.navigation} />
      </View>
    );
  }
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "45%"
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5
  }
});
