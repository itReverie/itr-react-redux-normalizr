import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Question from "./Question";
import Subtitle from "../Title/Subtitle";

const StyledListQuestions = styled.div.attrs({
  width: props => props.width || "auto",
  height: props => props.height || "auto"
})`
  align-items: left;
  padding: 10px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  overflow-y: auto;
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
`;


export default class ListQuestions extends PureComponent {

                 /** Renders a list of questions */
                 render() {

                   return <StyledListQuestions width={this.props.width} height={this.props.height}>
                       <Subtitle subtitle="Questions" />
                       {this.props.listQuestions.getIn(['entities','questions']).map(
                         (question) => (
                           <Question
                             key={question.get('id')}
                             question={question}
                             showLongQuestion={true}
                           />
                         )
                       )}
                     </StyledListQuestions>;
                 }
               }


               ListQuestions.propTypes = {
                listQuestions: PropTypes.object.isRequired,
                width: PropTypes.number.isRequired,
                showLongQuestion: PropTypes.bool.isRequired,
                height: PropTypes.number.isRequired
              };
