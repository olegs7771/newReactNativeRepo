import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import HTML from "react-native-render-html";

export default class BlogItem extends Component {
  blogChoice = () => {
    this.props.choosenPost(this.props.id);
  };
  render() {
    let blogItems = `
    <a href=${
      this.props.id
    } style="textDecorationLine:none;color:#000000;textAlign:center">
    <img src=${this.props.imageSrc}/>
    <h1>${this.props.title}</h1>
    ${this.props.excerpt}
    </a>
    
    `;

    return (
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#000000",
          borderStyle: "solid"
        }}
      >
        <HTML html={blogItems} onLinkPress={() => this.blogChoice()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
