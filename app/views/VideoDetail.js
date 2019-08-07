import React, { Component } from "react";
import { Text, View, StyleSheet, WebView } from "react-native";

export default class VideoDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    let videoId = this.props.navigation.getParam("videoID", "NO VIDEO");
    let videoURL = `https://youtube.com/embed/${videoId}`;
    console.log("videoURL", videoURL);

    return (
      <WebView
        style={{ marginTop: 30 }}
        javaScriptEnabled={true}
        source={{ uri: videoURL }}
      />
    );
  }
}
