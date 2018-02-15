import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Textbox from "./TextboxPart";
import Label from "./LabelPart";

const StyledOpenQuestion = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: left;
  justify-content: flex-start;
  padding: 15px;
`;

export default class OpenQuestion extends PureComponent {

  getComponent(part)
  {
    let component=null;
    if(part !== undefined)
    {
         if(part.isReadOnly)
         {
           component= <Label text={part.text} key={part.id}/>
          }
         else{
            component= <Textbox part={part} key={part.id}/>;
         }
    }
    return component;
  }
  render() {
    return (
      <StyledOpenQuestion>
             {this.props.question.parts.map((part) => {return this.getComponent(part)})}
        <Label text={'?'} />
      </StyledOpenQuestion>
    );

  }
}

OpenQuestion.propTypes = {
  question: PropTypes.object.isRequired,
};
