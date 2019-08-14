import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import BlogItem from "../sections/BlogItem";

export default class Blog extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    blogLoaded: false
  };

  componentDidMount() {
    return fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/reactnativeblog.travel.blog/posts"
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("responseJson", Array.from(responseJson.posts).length);
        this.setState({
          blogLoaded: true,
          blogList: Array.from(responseJson.posts)
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  chooseBlog = blogID => {
    console.log("Blog ID chosen :" + blogID);
    this.props.navigation.navigate("BlogDetailRT", { blogId: blogID });
  };

  render() {
    console.log("blogList", this.state.blogList);

    return (
      <View>
        {this.state.blogLoaded && (
          <View style={{ paddingTop: 40 }}>
            <FlatList
              data={this.state.blogList}
              keyExtractor={(item, index) => item.ID.toString()}
              renderItem={({ item }) => (
                <BlogItem
                  id={item.ID}
                  title={item.title}
                  imageSrc={item.featured_image}
                  excerpt={item.excerpt}
                  choosenPost={this.chooseBlog}
                />
              )}
            />
          </View>
        )}
        {this.state.blogLoaded && <Text>LOADING..</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
