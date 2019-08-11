import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export class Questions extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    selected: false,
    correct: false
  };

  chooseAnswer = ans => {
    let worth = 25;
    //quastion answered correctly
    if (ans === this.props.correctAnswer) {
      this.setState({
        selected: true,
        correct: true
      });
      this.props.scoreUpdate(0);
    } else {
      //aswered incorrectly
      this.setState({
        selected: true
      });
      this.props.scoreUpdate(worth);
    }
  };
  render() {
    const { selected, correct } = this.state;
    const { question, answer1, answer2, answer3, answer4 } = this.props;
    return (
      //conditional render
      <View style={styles.container}>
        {!selected && (
          <View style={styles.container}>
            <Text style={styles.questionText}>{question}</Text>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={this.chooseAnswer("answer1")}
            >
              <Text style={styles.answerText}>{answer1}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={this.chooseAnswer("answer2")}
            >
              <Text style={styles.answerText}>{answer2}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={this.chooseAnswer("answer3")}
            >
              <Text style={styles.answerText}>{answer3}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={this.chooseAnswer("answer4")}
            >
              <Text style={styles.answerText}>{answer4}</Text>
            </TouchableHighlight>
          </View>
        )}
        {selected && correct && (
          <View style={styles.correctContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <Text style={styles.answerText}>{answer1}</Text>
            <Text style={styles.answerText}>{answer2}</Text>
            <Text style={styles.answerText}>{answer3}</Text>
            <Text style={styles.answerText}>{answer4}</Text>
            <Text style={styles.answerText}>CORRECT</Text>
          </View>
        )}
        {selected && !correct && (
          <View style={styles.wrongContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <Text style={styles.answerText}>{answer1}</Text>
            <Text style={styles.answerText}>{answer2}</Text>
            <Text style={styles.answerText}>{answer3}</Text>
            <Text style={styles.answerText}>{answer4}</Text>
            <Text style={styles.answerText}>INCORRECT</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  correctContainer: {
    paddingTop: 20,
    backgroundColor: "#008000"
  },
  wrongContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#ff0000"
  },
  questionText: {
    flex: 2,
    padding: 15,
    fontSize: 20
  },
  answerText: {
    flex: 2,
    padding: 15,
    fontSize: 20,
    textAlign: "center"
  }
});
