import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import HTML from "react-native-render-html";

export default class BlogDetail extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    postLoaded: false
  };

  componentDidMount() {
    let blgId = this.props.navigation.getParams("blogId", "NO BLOG");
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
