import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import Header from "../sections/Header";
import Main from "../sections/Main";
import Menu from "../sections/Menu";
import { createStackNavigator, createAppContainer } from "react-navigation";

export class Home extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    AsyncStorage.getItem("userLoggedIn").then(result => {
      console.log("result", result);
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} message="press login" />
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
