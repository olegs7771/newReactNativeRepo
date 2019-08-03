import React, { Component } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
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
    this.props.navigation.goBack("HomeRT");
  };
  render() {
    console.log("this.props", this.props);
    const { name, msg, text } = this.state;
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={styles.heading}> Contact us</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
