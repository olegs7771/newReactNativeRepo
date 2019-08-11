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

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  goBackToHome = () => {
    this.props.navigate("HomeRT");
  };
  loginUser = () => {
    const { username, password } = this.state;

    if (!username) {
      Alert.alert("username!");
    } else if (!password) {
      Alert.alert("password!");
    } else {
      AsyncStorage.getItem("userLoggedIn", (err, res) => {
        if (res !== "none") {
          Alert.alert("Some already logged on");
          this.props.navigation.navigate("HomeRT");
        } else {
          AsyncStorage.getItem(username, (err, result) => {
            if (result !== null) {
              if (result !== password) {
                return Alert.alert("Password incorrect");
              } else {
                AsyncStorage.setItem("userLoggedIn", username).then(() => {
                  Alert.alert(`${username} logged in`);
                  this.props.navigation.navigate("HomeRT", {
                    name: username
                  });
                });
              }
            } else {
              Alert.alert(`No Account for ${username}`);
            }
          });
        }
      });
    }
  };

  render() {
    const { username, password } = this.state;
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
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableHighlight onPress={this.loginUser} style={styles.buttons}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goBackToHome} style={styles.buttons}>
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
