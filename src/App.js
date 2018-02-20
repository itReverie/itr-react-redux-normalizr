import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import * as questionActions from './actions/questionActions';
import { loadQuestions } from './actions/questionActions';
import ListQuestions from './components/Questions/ListQuestions';
import {getQuestionsResult} from './selectors'

class App extends Component {

  componentDidMount() {
    console.log('Component Did Mount');
    this.props.loadQuestions();
  }

  render() {
  console.log('App render: ',this.props);
   const { questions } = this.props;

   if (!questions) return null;

   if (questions.size === 0) return <h1>No Result</h1>;

    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Redux and Normalizr</h1>
        </header>

        <ListQuestions
           listQuestions={questions}
           width={800}
           showLongQuestion={true}
           height={800}/>

      </div>;
  }
}


// App.propTypes={
//   //questions: PropTypes.object.isRequired,
//   actions : PropTypes.object.isRequired
// };


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
 function mapStateToProps(state) {
   return {questions: getQuestionsResult(state) };
}


// function mapDispatchToProps (dispatch)
// {
//   return {
//     actions: bindActionCreators(questionActions,dispatch)
//   };
// }

export default connect(mapStateToProps, {loadQuestions})(App);
