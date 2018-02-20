import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/partActions';
import {getPartResult} from '../../selectors/part'


class TextboxPart extends Component {

getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : this.props.part.get('suggestions').filter(suggestion =>
    suggestion.toLowerCase().slice(0, inputLength) === inputValue);};
getSuggestionValue = suggestion => suggestion;
renderSuggestion = suggestion => (<div>{suggestion}</div>);

  onChange = (event, { newValue }) => {
    //let newPart = Object.assign({},this.props.part);
    //newPart.text = newValue;

    this.props.actions.updateTextSuccess(newValue.toLowerCase(), this.props.questionId, this.props.partId);
    if(newValue.length === 3){
      //TODO: This call might need to be a premise from the previous so I can pass the whole text 
       this.props.actions.loadSuggestions( this.props.parts.get('byPartId'), this.props.questionId, this.props.partId)
     }
    //  if (event.key === 'Enter') {
    //   console.log('do validate');
    // }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    //console.log('SuggestionsFetchRequested:', value);
    this.getSuggestions(value);
  };
  onSuggestionsClearRequested = () => {
    //TODO: Maybe trigger another action dispatch to clean the suggestions
    // this.setState({
    //   suggestionsLocal: []
    // });
  };

  render() {
    //console.log('TEXTBOXPART:  render props ',this.props)
    const inputProps = {
      placeholder:this.props.part.get('type') ,
      value: this.props.part.get('text'),
      onChange: this.onChange
    }

    let suggestions=this.props.part.get('suggestions');
    //console.log(suggestions.length);
    if(suggestions.length === undefined){
       suggestions=[];
       //console.log('enteredd: ',suggestions);
    };

    return <Autosuggest
        suggestions={suggestions}
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
    partId: PropTypes.number.isRequired,
    part: PropTypes.object.isRequired,
    parts: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state, props){
  //console.log(' TEXTBOXPART: state', state);
  return { part: getPartResult(state, props)};
}

function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(partActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextboxPart);
