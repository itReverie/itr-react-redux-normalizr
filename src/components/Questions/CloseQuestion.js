import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLongQuestion = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: darkgrey;
  padding: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export default class CloseQuestion extends PureComponent {
  /** Renders a list of questions */
  render() {
    return <StyledLongQuestion>
        <div>{this.props.question}</div>
      </StyledLongQuestion>;
  }
}

CloseQuestion.propTypes = {
  question: PropTypes.string.isRequired
};