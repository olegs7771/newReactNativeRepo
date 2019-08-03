import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

class Main extends Component {
  render() {
    return (
      <Image
        style={styles.mainImage}
        source={require("./img/20190726_112606.jpg")}
      />
    );
  }
}

const styles = {
  mainImage: {
    width: undefined,
    height: undefined,
    flex: 8
  }
};

export default Main;
