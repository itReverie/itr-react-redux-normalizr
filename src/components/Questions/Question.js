import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "../../utils/Text"
import ShortQuestion from "../Questions/ShortQuestion"
import CloseQuestion from "../Questions/CloseQuestion";
import OpenQuestion from "../Questions/OpenQuestion";



const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 10px;
`;


export default class Question extends PureComponent {

          constructor(props){
                   super(props);
                    this.state = { showLongQuestion: this.props.showLongQuestion };
                    this.onClick = this.onClick.bind(this);
                 }

                //Shows or hides the question box
          onClick() {
                   const { showLongQuestion } = this.state;
                   this.setState({
                     showLongQuestion: !showLongQuestion
                   });
                 }

               //Gets the first n words out of the long question
          getWords(sentence, numberOfWords)
                 {
                   if(!Text.validString(sentence)){
                     return;
                   }
                 let shortQuestion;
                 shortQuestion= sentence.split(/\s+/).slice(0,numberOfWords).join(" ");
								 return  shortQuestion+"...?";
                 }


                 /** Renders a list of questions */
          render() {
                    //Decides if it's a short or long question
                    let longQuestion=null;
                    if (this.state.showLongQuestion) {
                      if(this.props.question.openQuestion){
                        longQuestion= <OpenQuestion questionId={this.props.question.id}/>
                      }
                      else{
                         longQuestion= <CloseQuestion question={this.props.question.longQuestion} />
                      }
                    }


                   return <StyledQuestion>
                       <ShortQuestion onClick={this.onClick}
                                      id={this.props.question.id}
                                      question={this.getWords(this.props.question.longQuestion, 2)} />
                       {longQuestion}
                     </StyledQuestion>;
                 }
               }

            Question.propTypes={
              question:PropTypes.object.isRequired,
              showLongQuestion: PropTypes.bool.isRequired
            };
