import React, { Component }  from 'react';
import PropTypes from "prop-types";

import '../../../node_modules/react-select/dist/react-select.css'
import '../../../node_modules/react-virtualized/styles.css'
import '../../../node_modules/react-virtualized-select/styles.css'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/partActions';
import {getPartResult} from '../../selectors/part'
import VirtualizedSelect from 'react-virtualized-select';


class Selector extends Component {

  componentWillMount()
   {
     this.onChange = this.onChange.bind(this);
     this.onInputChange = this.onInputChange.bind(this);
     this.dispatchSuggestions = this.dispatchSuggestions.bind(this);
   }

  onChange(selectedOption){
      //console.log('onChange selectedOption: ',selectedOption);
    let newValue='';
    if(selectedOption !== null){
      newValue=selectedOption.name;
    }
    this.props.actions.updateTextSuccess(newValue,
                                    this.props.questionId, this.props.partId)
}

dispatchSuggestions(newTextValue)
{
  return this.props.actions.updateTextSuccess(newTextValue,
                                       this.props.questionId,
                                       this.props.partId)
         .then(data => {
          return this.props.actions.loadSuggestions(
                this.props.parts.get('byPartId'),
                this.props.questionId,
                this.props.partId)
                .then(textUpdated=>{return textUpdated;})})

}


onInputChange (newTextValue)
 {
     if(newTextValue.length===3 && newTextValue.trim() !=="")
     {
       return Promise.resolve( this.dispatchSuggestions(newTextValue))
     }
    return newTextValue;
 }
  render () {
    let suggestions=[];
    if(this.props.part.get('suggestions').size === undefined){
      suggestions=this.props.part.get('suggestions');
    }
    else {
      suggestions=this.props.part.get('suggestions').toJS();
    }
    return (
      <VirtualizedSelect style={{width:'180px'}}
        options={suggestions}
        labelKey='name'
        valueKey='name'
        placeholder={this.props.part.toJS().type}
        value={this.props.part.toJS().text}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
        onSelectResetsInput={false}
        onBlurResetsInput={false}
        closeOnSelect={true}
        tabSelectsValue={true}
        searchable={true}
      />
    )
  }
}


Selector.propTypes={
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
  return { part: getPartResult(state, props)};
}

function mapDispatchToProps (dispatch)
{
  return {actions: bindActionCreators(partActions,dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
