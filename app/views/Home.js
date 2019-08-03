import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../sections/Header";
import Main from "../sections/Main";
import Menu from "../sections/Menu";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header message="Press to login" />
        <Main />
        <Menu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
