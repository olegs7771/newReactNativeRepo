import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class VideoDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.log(
      "this.props.navigation.state.params.videoID",
      this.props.navigation.state.params.videoID
    );
    console.log(
      "getParams",
      this.props.navigation.getParam("videoID", "NO VIDEO")
    );
    let videoId = this.props.navigation.getParam("videoID", "NO VIDEO");

    return (
      <View style={styles.container}>
        <Text style={styles.text}> {videoId} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
  text: {
    textAlign: "center"
  }
});
