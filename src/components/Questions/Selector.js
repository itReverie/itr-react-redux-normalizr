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
//import Select from 'react-select';
//import {Async} from 'react-select';

class Selector extends Component {

  componentWillMount()
   {
     this.onChange = this.onChange.bind(this);
     this.onInputChange = this.onInputChange.bind(this);
     //this.loadOptions = this.loadOptions.bind(this)
     //this.onInputKeyDown = this.onInputKeyDown.bind(this);
   }

  loadSuggestions(newTextValue) {

      this.props.actions.loadSuggestions(
                            this.props.parts.get('byPartId'),
                            this.props.questionId,
                            this.props.partId)

  }

  onChange(something){
    //console.log('onChange', something);
    let newValue='';
    if(something !== null){
      newValue=something.name;
    }

    //Update text
    this.props.actions.updateTextSuccess(newValue.toLowerCase(),
                                    this.props.questionId, this.props.partId)

}

 // onInputKeyDown(event) {
 //     let characterPressed=String.fromCharCode(event.keyCode);
 //
 //      console.log('key pressed: ',event.keyCode +" - "+ characterPressed);
 //      switch (event.keyCode) {
 //          case 9:   // TAB
 //              // Extend default TAB behaviour by doing something here
 //              break;
 //          case 13: // ENTER
 //              // Override default ENTER behaviour by doing stuff here and then preventing default
 //              event.preventDefault();
 //              break;
 //          default:
 //          {
 //            let currentText=this.props.part.get('text')+characterPressed.toLowerCase();
 //            this.props.actions.updateTextSuccess(currentText,
 //                                               this.props.questionId, this.props.partId)
 //                              //.then(data => this.loadSuggestions(newTextValue, data))
 //          }
 //      }
 //  }





 onInputChange (newTextValue)
 {
     console.log('onInputChange:',newTextValue);

     if(newTextValue.length===3 && newTextValue.trim() !=="")
     {
       this.props.actions.updateTextSuccess(newTextValue.toLowerCase(),
                                            this.props.questionId,
                                            this.props.partId)
                         .then(data => {
                           //console.log('is data updating:',data);
                           this.loadSuggestions(newTextValue, data)
                                              })

     }
     //data=>console.log('dataLoadSuggess:'+data)
     // this.props.actions.updateTextSuccess(newTextValue.toLowerCase(),
     //                                   this.props.questionId, this.props.partId)
     //                  .then(data => this.loadSuggestions(newTextValue, data))
     //                  //
    //console.log(newTextValue);
    return newTextValue;
 }

  render () {
    //console.log('RENDER: state- ',this.state);
    let suggestions=[];
    if(this.props.part.get('suggestions').size === undefined)
    {
      suggestions=this.props.part.get('suggestions');
    }
    else {
      suggestions=this.props.part.get('suggestions').toJS();
    }

//         loadOptions={this.props.part.get('suggestions')}
//loadOptions={this.props.part.get('suggestions')}
//onChange={(selectValue) => console.log('onChange:',selectValue)}
// onInputChange={this.onInputChange}
//onChange={this.onChange}
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
