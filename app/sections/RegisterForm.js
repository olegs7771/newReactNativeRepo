import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from "react-native";

class RegisterForm extends Component {
  state = {
    username: "Username",
    password1: "username",
    password2: "confirm password"
  };

  onPressRegister = () => {
    Alert.alert("Register");
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== this.props.username) {
      this.setState({
        username: this.props.username
      });
    }
  }

  render() {
    const { username, password1, password2 } = this.state;

    return (
      <View style={styles.container}>
        <TextInput style={styles.text} value={username} />
        <TextInput style={styles.text} value={username} />
        <TextInput style={styles.text} value={username} />
        <TouchableHighlight
          style={styles.buttons}
          onPress={this.onPressRegister}
          underlayColor="#edbbca"
        >
          <Text>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#bbeddf",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    textAlign: "center"
  },
  buttons: {
    alignItems: "center",

    marginTop: 10,
    backgroundColor: "white",
    padding: 3,
    width: "30%"
  }
});
