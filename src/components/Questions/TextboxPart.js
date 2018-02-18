import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/partActions';


class TextboxPart extends Component {

getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : this.props.part.suggestions.filter(suggestion =>
    suggestion.toLowerCase().slice(0, inputLength) === inputValue
  );};
getSuggestionValue = suggestion => suggestion;
renderSuggestion = suggestion => (<div>{suggestion}</div>);


  onChange = (event, { newValue }) => {
    let newPart = Object.assign({},this.props.part);
    newPart.text = newValue;
    this.props.actions.updateTextSuccess(newPart, this.props.questionId);
    if(newValue.length === 3){
       this.props.actions.loadSuggestions( this.props.parts ,this.props.part.id)
     }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    // this.setState({
    //       suggestions: getSuggestions(value)
    //     });
    this.getSuggestions(value);
  };
  onSuggestionsClearRequested = () => {
    //TODO: Maybe trigger another action dispatch to clean the suggestions
    // this.setState({
    //   suggestionsLocal: []
    // });
  };

  render() {
    console.log('Render: ',this.props)
    const inputProps = {
      placeholder:this.props.part.type ,
      value: this.props.part.text,
      onChange: this.onChange

  }
    return <Autosuggest
        suggestions={this.props.part.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />

  }
}


TextboxPart.propTypes={
    questionId: PropTypes.number.isRequired,
    part: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state, props){
  //console.log(state.parts.byQuestionId[props.questionId].byPartId[props.part.id]);
  //Instead of using props.part It seems that using the state is the correct

  let selector = state.toJS().parts.byQuestionId[props.questionId].byPartId[props.part.id];
  console.log(' TEXTBOXPART: ', selector);
  return { part: selector};
}

function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(partActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextboxPart);
