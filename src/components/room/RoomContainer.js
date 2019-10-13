import React, { Component } from 'react'
import * as request from "superagent";
import { connect } from 'react-redux'
//import addquestions from acccctio
import { addQuestion } from '../../actions/game'
import CorrectAnswer from '../game/CorrectAnswer'
import WrongAnswer from '../game/WrongAnswer'


class RoomContainer extends Component {

  state = {
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null
  }

  //component did mount
  // superagent fetch data /game get 
  //result-> action creator is addQuestions
  componentDidMount() {
    request
    .get('http://localhost:4050/questions')
    .then(response => {
        console.log("response.body is", response.body)
        console.log("response.body[0] is", response.body[0])
        console.log("response.body[0].question is", response.body[0].question)
        this.props.addQuestion(response.body)   
     })
      .catch(console.error)
 }

 onClick1 = (event) => {
  // event.preventDefault()
  console.log(event.target.value)
    switch (event.target.value) {
      case 'correct':
          return this.setState({answer1: true});
      default:
          return this.setState({answer1: false});
  }
}

onClick2 = (event) => {
  // event.preventDefault()
  console.log(event.target.value)
    switch (event.target.value) {
      case 'correct':
          return this.setState({answer2: true});
      default:
          return this.setState({answer2: false});
  }
}

onClick3 = (event) => {
  // event.preventDefault()
  console.log(event.target.value)
    switch (event.target.value) {
      case 'correct':
          return this.setState({answer3: true});
      default:
          return this.setState({answer3: false});
  }
}

onClick4 = (event) => {
  // event.preventDefault()
  console.log(event.target.value)
    switch (event.target.value) {
      case 'correct':
          return this.setState({answer4: true});
      default:
          return this.setState({answer4: false});
  }
}

  render() {
    console.log('render', this.props)
    if(!this.props.questions) return 'wait for questions'
    if(!this.props.questions.length > 0) return 'wait for questions 0'
    return (
    <div>
      <h1>Welcome in room {this.props.match.params.id}</h1>
      <h2>Question 1: { this.props.questions[0].question} </h2>
      <button className="button" onClick={this.onClick1} value='correct'>A: { this.props.questions[0].right_answer}</button>
      <button className="button" onClick={this.onClick1} >B: {this.props.questions[0].wrong_answer1} </button>
      <button className="button" onClick={this.onClick1} >C: {this.props.questions[0].wrong_answer2} </button>
      {this.state.answer1 !== null ?  this.state.answer1 ? <CorrectAnswer/> : <WrongAnswer /> : <div/>}
      <br />
      <h2>Question 2: { this.props.questions[1].question} </h2>
      <button className="button" onClick={this.onClick2} value='correct'>A: { this.props.questions[1].right_answer}</button>
      <button className="button" onClick={this.onClick2} >B: {this.props.questions[1].wrong_answer1} </button>
      <button className="button" onClick={this.onClick2} >C: {this.props.questions[1].wrong_answer2} </button>
      {this.state.answer2 !== null ?  this.state.answer2 ? <CorrectAnswer/> : <WrongAnswer /> : <div/>}
      <br />
      <h2>Question 3: { this.props.questions[2].question} </h2>
      <button className="button" onClick={this.onClick3} value='correct'>A: { this.props.questions[2].right_answer}</button>
      <button className="button" onClick={this.onClick3} >B: {this.props.questions[2].wrong_answer1} </button>
      <button className="button" onClick={this.onClick3} >C: {this.props.questions[2].wrong_answer2} </button>
      {this.state.answer3 !== null ?  this.state.answer3 ? <CorrectAnswer/> : <WrongAnswer /> : <div/>}
      <br />
      <h2>Question 4: { this.props.questions[3].question} </h2>
      <button className="button" onClick={this.onClick4} value='correct'>A: { this.props.questions[3].right_answer}</button>
      <button className="button" onClick={this.onClick4} >B: {this.props.questions[3].wrong_answer1} </button>
      <button className="button" onClick={this.onClick4} >C: {this.props.questions[3].wrong_answer2} </button>
      {this.state.answer4 !== null ?  this.state.answer4 ? <CorrectAnswer/> : <WrongAnswer /> : <div/>}
    </div>
    )}
}

//const mapdispatchproppies = { addQuestions}
const mapDispatchToProps = {addQuestion}

const mapStateToProps = (state) => {
  console.log("mstp q", state)
  return {
    questions: state.game
  }
}

//make coennect function
export default connect(mapStateToProps, mapDispatchToProps )(RoomContainer)
