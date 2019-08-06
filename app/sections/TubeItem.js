import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";

export default class TubeItem extends Component {
  onPress = () => {
    console.log("id", this.props.id);
  };
  render() {
    console.log("this.props", this.props);

    const { id, imageSrc, title } = this.props;

    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: imageSrc }}
          />
          <Text>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
