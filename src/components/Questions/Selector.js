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
     this.dispatchTheActions = this.dispatchTheActions.bind(this);
   }

  onChange(something){
    //console.log('onChange', something);
    let newValue='';
    if(something !== null){
      newValue=something.name;
    }
    this.props.actions.updateTextSuccess(newValue.toLowerCase(),
                                    this.props.questionId, this.props.partId)
}

dispatchTheActions(newTextValue)
{
  return this.props.actions.updateTextSuccess(newTextValue.toLowerCase(),
                                       this.props.questionId,
                                       this.props.partId)
                    .then(data => {
                      return this.props.actions.loadSuggestions(
                                            this.props.parts.get('byPartId'),
                                            this.props.questionId,
                                            this.props.partId).then(a=>{console.log('osea si :',a)
                                                                       return a;
                                                                       })
                                          })

}


 async onInputChange (newTextValue)
 {
     if(newTextValue.length===3 && newTextValue.trim() !=="")
     {
      //console.log('osea si onInputChange:',x);
       await Promise.resolve( this.dispatchTheActions(newTextValue))
     }
    console.log('onInputChange:',newTextValue);
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
        value={this.props.part.toJS().text}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
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
  //console.log(state);
  return { part: getPartResult(state, props)};
}

function mapDispatchToProps (dispatch)
{
  return {actions: bindActionCreators(partActions,dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
