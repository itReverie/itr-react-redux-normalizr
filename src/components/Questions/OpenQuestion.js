import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Textbox from "./TextboxPart";
import Label from "./LabelPart";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as partActions from '../../actions/questionActions';
import {getPartsResult} from './selectors'

const StyledOpenQuestion = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: left;
  justify-content: flex-start;
  padding: 15px;
`;

class OpenQuestion extends PureComponent {
  getComponent(part)
  {
    let component=null;
    if(part !== undefined)
    {
         if(part.isReadOnly)
         {
           component= <Label text={part.text} questionId={this.props.question.id} key={part.id}/>
          }
         else{
            component= <Textbox part={part} questionId={this.props.question.id} key={part.id}/>;
         }
    }
    return component;
  }
  render() {
      console.log('OPEN Question props:',this.props);
      let questionParts=this.props.parts.byQuestionId[this.props.questionId].byPartId;

    return (
      <StyledOpenQuestion>
        {this.props.parts.map(part => {
          return this.getComponent(part)})}
        <Label text={'?'} />
      </StyledOpenQuestion>
    );

  }
}

OpenQuestion.propTypes = {
  questionId: PropTypes.number.isRequired,
  parts: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};



//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state, questionId) {
  return {parts: getPartsResult(state, questionId)};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(partActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenQuestion);
