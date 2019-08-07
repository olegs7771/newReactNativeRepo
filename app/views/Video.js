import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import TubeItem from "../sections/TubeItem";

export class Video extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      listLoaded: false
    };
  }

  componentDidMount() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=olegs77&type=video&key=AIzaSyBgcr3wy6zEl-3E2WtYjxyKol5yuPbxDS4"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    const { listLoaded, videoList } = this.state;

    return (
      <View>
        {listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={videoList}
              keyExtractor={item => item.id.videoId}
              renderItem={({ item }) => (
                <TubeItem
                  navigate={navigate}
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              )}
            />
          </View>
        )}

        {!listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text>Loading</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Video;
