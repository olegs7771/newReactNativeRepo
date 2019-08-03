import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };
  render() {
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;

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
