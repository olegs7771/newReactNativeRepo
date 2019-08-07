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
    username: "",
    password1: "",
    password2: ""
  };

  clearUsername = () => {
    console.log("cleared");
  };

  onPressRegister = () => {
    const { username, password1, password2 } = this.state;
    if (!username) {
      return Alert.alert("No Username");
    } else if (passport1 !== passport2) {
      return Alert.alert("passwords not match");
    }
    Alert.alert("Register");
  };

  render() {
    const { username, password1, password2 } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.text}
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.text}
            value={password1}
            onChangeText={text => this.setState({ password1: text })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.labelConfirm}>Confirm </Text>
          <TextInput
            style={styles.text}
            value={password2}
            onChangeText={text => this.setState({ password2: text })}
          />
        </View>

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
  formGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  labelConfirm: {
    marginRight: 9
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    marginLeft: 5,
    backgroundColor: "#e4f7df",
    width: "40%"
  },
  buttons: {
    alignItems: "center",

    marginTop: 10,
    backgroundColor: "white",
    padding: 3,
    width: "30%"
  }
});
