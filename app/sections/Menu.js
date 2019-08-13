import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";

class Menu extends Component {
  onPress = () => {
    Alert.alert("You tapped the button!");
  };
  render() {
    const { navigate } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigate("BlogRT")}
          >
            <Text style={styles.buttonText}> Blog </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigate("RegisterRT")}
          >
            <Text style={styles.buttonText}> Register </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigate("LessonsRT")}
          >
            <Text style={styles.buttonText}> Lessons </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigate("ContactRT")}
          >
            <Text style={styles.buttonText}> Contact </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigate("QuizRT")}
          >
            <Text style={styles.buttonText}> Quiz </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}> About </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#35605a"
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffffff",
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: "#35605a",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18
  }
});

export default Menu;
