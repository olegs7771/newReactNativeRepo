import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import HTML from "react-native-render-html";

export default class BlogDetail extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    postLoaded: false
  };

  componentDidMount() {
    let blgId = this.props.navigation.getParam("blogId", "NO BLOG");
    console.log("blgId", blgId);

    return fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/reactnativeblog.travel.blog/posts/${blgId}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          postLoaded: true,
          postTitle: responseJson.title,
          postImage: responseJson.featured_image,
          postContent: responseJson.content,
          postID: responseJson.ID
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  goBack = () => {
    this.props.navigation.navigate("BlogRT");
  };

  render() {
    const blogTagStyles = {
      img: { display: "none" }
    };

    const blogClassStyles = {
      blTitle: { marginLeft: "auto", marginRight: "auto" },
      blContent: { marginLeft: 10, marginRight: 10 },
      blBack: { marginLeft: "auto", marginRight: "auto", paddingBottom: 20 }
    };
    let postDetails = `
    <div class="blTitle">
    <h1>${this.state.postTitle}</h1>
    </div>

    <div class="blContent">
    <h1>${this.state.postContent}</h1>
    </div>
   
    <div class="blBack">
   <a href=${this.state.postID} style="textDecorationLine: none;
   color:#000000"><h2>GO BACK</h2>
   </a>
    </div>
   

   
    

    `;

    return (
      <View style={{ paddingTop: 30 }}>
        {this.state.postLoaded && (
          <ScrollView>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: this.state.postImage }}
            />
            <HTML
              html={postDetails}
              tagsStyles={blogTagStyles}
              onLinkPress={() => this.goBack()}
            />
          </ScrollView>
        )}
        {this.state.postLoaded && (
          <View style={{ paddingTop: 20, alignItems: "center" }}>
            <Text>LOADING..</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
