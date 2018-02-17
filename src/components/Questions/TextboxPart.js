import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/partActions';


class TextboxPart extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //       part:Object.assign({}, this.props.part),
  //       suggestions:Object.assign({}, this.props.part.suggestions)
  //   }
  // }

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
    console.log(newPart);
    this.props.actions.updateTextSuccess(newPart);

    // this.setState({
    //     part:newPart
    //  });
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
function mapStateToProps(state, part){
  console.log(state);
  return { part: part.part};
}

function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(partActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextboxPart);
