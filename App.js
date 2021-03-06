import React, { Component } from "react";

import Home from "./app/views/Home";
import Contact from "./app/views/Contact";
import Video from "./app/views/Video";
import VideoDetail from "./app/views/VideoDetail";
import Register from "./app/views/Register";
import Login from "./app/views/Login";
import Quiz from "./app/views/Quiz";
import QuizFinish from "./app/views/QuizFinish";
import Blog from "./app/views/Blog";
import BlogDetail from "./app/views/BlogDetail";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },

    ContactRT: {
      screen: Contact
    },
    LessonsRT: {
      screen: Video
    },
    VideoDetailRT: {
      screen: VideoDetail
    },
    RegisterRT: {
      screen: Register
    },
    LoginRT: {
      screen: Login
    },
    FinishRT: {
      screen: QuizFinish
    },
    QuizRT: {
      screen: Quiz
    },
    BlogRT: {
      screen: Blog
    },
    BlogDetailRT: {
      screen: BlogDetail
    }
  },
  {
    initialRouteName: "HomeRT"
  }
);
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;
