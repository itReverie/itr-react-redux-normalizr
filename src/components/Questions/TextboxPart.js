import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/partActions';


class TextboxPart extends Component {

  constructor(props){
    super(props);
    this.state={
        part:Object.assign({}, this.props.part)
    }
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
 getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : this.props.part.suggestions.filter(suggestion =>
    suggestion.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
renderSuggestion = suggestion => (<div>{suggestion}</div>);


  onChange = (event, { newValue }) => {
    //Updating the redux state
    let newPart = Object.assign({},this.props.part);
     newPart.text = newValue;
    // console.log('onChange:', newPart);
    this.props.actions.updateTextSuccess(newPart);
    this.setState({
        part:newPart
     });


     if(newValue.length === 3){
       this.props.actions.loadSuggestions( this.props.parts ,this.props.part.id)
     }
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
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
      value: this.state.part.text,
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
    part: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    parts:PropTypes.object.isRequired,
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state, part) {
  //console.log('MAP STATE TO PROPS: ',state);
  return { part: part.part};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(partActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextboxPart);
