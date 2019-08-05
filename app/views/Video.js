import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBgcr3wy6zEl-3E2WtYjxyKol5yuPbxDS4"
    ).then(res => {
      console.log("res from api", res);
    });
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
