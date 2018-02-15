import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as questionActions from './actions/questionActions';
import ListQuestions from './components/Questions/ListQuestions';


class App extends Component {

  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Redux and Normalizr</h1>
        </header>

        <ListQuestions
          listQuestions={this.props.questions}
          width={1000}
          showLongQuestion={true}
          height={1000}/>
      </div>;
  }
}


App.propTypes={
  questions: PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {questions: state.questions};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(questionActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
