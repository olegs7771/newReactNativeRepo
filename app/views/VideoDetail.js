import React, { Component } from "react";
import { Text, View } from "react-native";

export default class VideoDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.log("this.props.videoID", this.props.videoID);

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
