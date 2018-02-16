import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as textActions from '../../actions/textActions';
import * as suggestionActions from '../../actions/suggestionActions';


class TextboxPart extends Component {


  state ={
        textLocal: this.props.part.text,
        //suggestionsLocal: this.props.part.suggestions,
      };

  // Teach Autosuggest how to calculate suggestions for any given input value.
 getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  console.log(this.props.suggestions);

  return inputLength === 0 ? [] : this.props.suggestions.filter(suggestion =>
    suggestion.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
 renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

 //TODO: Is there a better way to do this?
  onChange = (event, { newValue }) => {
    //Updating the redux state
     this.props.actions.updateTextSuccess(newValue);
     //Updating the local state
     this.setState({
       textLocal: newValue
     });

     if(newValue.length === 3)
     {
       //Call the api with suggestions
       this.props.actions
       .loadSuggestions( this.props.parts ,this.props.part.id)
       // .then(result=>{
       //   //console.log(result);
       //   //console.log(this.props.suggestions);
       //   this.setState({
       //     suggestionslocal: result
       //   });
       // });

     }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value);
    // this.setState({
    //   suggestionsLocal: this.getSuggestions(value)
    // });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestionsLocal: []
    });
  };


  render() {
    //console.log(this.props)
    const inputProps = {
      placeholder:this.props.part.type ,
      value: this.state.textLocal,
      onChange: this.onChange

  }

    return <Autosuggest
        suggestions={this.props.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />

  }
}


TextboxPart.propTypes={
    part: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    suggestions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    parts:PropTypes.object.isRequired,
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    text: state.text,
    suggestions: state.suggestions};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators({...textActions,
                                 ...suggestionActions},dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextboxPart);
