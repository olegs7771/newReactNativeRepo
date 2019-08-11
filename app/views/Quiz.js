import React, { Component } from "react";
import { Text, View, FlatList, TouchableHighlight } from "react-native";
import Questions from "../sections/Questions";
import QuizData from "../data/QuizQuestions";

class Quiz extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    questLoaded: false,
    totalScore: 100,
    completeQuiz: false
  };
  componentDidMount() {
    let numQuestions = Array.from(QuizData.questions).length;
    this.setState({
      questList: Array.from(QuizData.questions),
      questLoaded: true,
      numberOfQuestions: numQuestions,
      incorrect: 0,
      questionAnswered: 0
    });
  }
  updateScore = penalty => {
    let tempScore = this.state.totalScore;
    let missed = this.state.incorrect;
    let questionsTotal = this.state.numberOfQuestions;
    let questionsDone = this.state.questionAnswered;
    let newScore = tempScore - penalty;
    let totalAnswered = questionsDone + 1;
    let totalMissed = penalty ? missed + 1 : missed;

    this.state({
      totalScore: newScore,
      incorrect: totalMissed,
      questionAnswered: totalAnswered
    });
    //check if quiz is finished
    if (totalAnswered === questionsTotal) {
      this.setState({
        completeQuiz: true
      });
    }
  };
  finishQuiz = () => {
    this.props.navigate.navigate("FinishRT", {
      score: this.state.totalScore,
      missed: this.state.incorrect,
      questions: this.state.numberOfQuestions
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.questLoaded && (
          <FlatList
            data={this.state.questList}
            renderItem={({ item }) => {
              <Question
                question={item.question}
                answer1={item.answer1}
                answer2={item.answer2}
                answer3={item.answer3}
                answer4={item.answer4}
                correctAnswer={item.correctAnswer}
                scoreUpdate={this.updateScore}
              />;
            }}
          />
        )}
      </View>
    );
  }
}
export default Quiz;
