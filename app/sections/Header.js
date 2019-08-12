import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from "react-native";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedUser: false
    };
  }

  toggleUser = () => {
    if (this.state.isLoggedIn) {
      AsyncStorage.setItem("userLoggedIn", "none", (err, rusult) => {
        this.setState({
          isLoggedIn: false,
          loggedUser: false
        });
        Alert.alert("User Logged out");
      });
    } else {
      this.props.navigation.navigate("LoginRT");
    }
  };

  componentDidMount() {
    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      if (result === "none") {
        console.log("NONE");
      } else if (result === null) {
        AsyncStorage.setItem("userLoggedIn", "none", (err, result) => {
          console.log("Set user to NONE");
        });
      } else {
        this.setState({
          isLoggedIn: true,
          loggedUser: result
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.navigation.state.params !== this.props.navigation.state.params
    ) {
      console.log("new params", this.props.navigation.state.params);
      this.setState({
        isLoggedIn: true,
        loggedUser: this.props.navigation.state.params.name
      });
    }
  }

  render() {
    let display = this.state.isLoggedIn
      ? this.state.loggedUser
      : this.props.message;

    return (
      <View style={styles.headStyle}>
        {/* {Adding image for logo} */}

        <Image
          style={styles.logoStyle}
          source={require("./img/Untitled-1.png")}
        />

        <Text style={styles.headText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    paddingTop: 50,
    paddingRight: 10,
    backgroundColor: "#35605a",
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  logoStyle: {
    width: 15,
    height: 20,
    marginLeft: 20,
    marginTop: 10
  }
});

export default Header;
