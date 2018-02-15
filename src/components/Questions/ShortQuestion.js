import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import expandIcon from "../../icons/expand.svg";

const StyledShortQuestion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledExpandtIcon = styled.img`
  display: inline-block;
  width: 25px;
  margin-top: -15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export default class ShortQuestion extends PureComponent {
                 /** Renders a list of questions */
                 render() {
                   return <StyledShortQuestion>
                       <div>{this.props.question}</div>
                       <StyledExpandtIcon src={expandIcon} alt="Expand" title="Expand" onClick={this.props.onClick.bind(this, this.props.id)} />
                     </StyledShortQuestion>;
                 }
               }

ShortQuestion.propTypes = {
  id: PropTypes.number.isRequired, //The id is being used to determine which question is shown or hidden
  question:PropTypes.string
};

ShortQuestion.defaultProps={
  question:'Create your own'
}


