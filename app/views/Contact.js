import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Alert,
  TextInput,
  TouchableHighlight
} from "react-native";
import Header from "../sections/Header";

export default class Contact extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      msg: "Enter Message",
      name: "Enter Name",
      email: "Enter Your Email Address"
    };
  }

  clearFields = () => this.setState({ name: "", msg: "", email: "" });
  sendMessage = () => {
    const { msg, name } = this.state;
    Alert.alert(name, msg);
    this.props.navigation.goBack();
  };
  render() {
    const { name, msg, email } = this.state;
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={styles.heading}> Contact us</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />
        <TextInput
          style={styles.multiInput}
          onChangeText={text => this.setState({ msg: text })}
          value={msg}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableHighlight onPress={this.sendMessage} underlayColor="#31e981">
          <Text style={styles.buttons}>Send Message</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearFields} underlayColor="#31e981">
          <Text style={styles.buttons}>Clear Form</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "50%",
    alignItems: "center"
  },
  heading: {
    fontSize: 20,

    flex: 1
  },
  input: {
    fontSize: 16,
    padding: 5,
    width: "60%",
    flex: 1,
    borderBottomWidth: 1
  },
  multiInput: {
    width: "60%",
    fontSize: 16,
    padding: 5,
    flex: 1
  },
  buttons: {
    padding: 5
  }
});
