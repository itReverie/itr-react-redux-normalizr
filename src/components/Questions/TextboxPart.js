import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';

export default class TextboxPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
 getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : this.props.part.filter(suggestion =>
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

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    console.log(this.props)
    const inputProps = {
      placeholder:'hello world' ,
      value: this.state.value,
      onChange: this.onChange

  }

    return <Autosuggest
        suggestions={this.props.part.suggestions}
        onSuggestionsFetchRequested={this.props.onSuggestionsFetchRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />

  }
}


TextboxPart.propTypes={
    part: PropTypes.object.isRequired,
};
