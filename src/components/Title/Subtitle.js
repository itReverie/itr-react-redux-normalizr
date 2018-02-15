import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
//styled.h1 is a function that when call return a react component that renders and H1
// You can now call functions with `` and pass those arguments
const StyledSubtitle = styled.h3`
  font-size: 1em;
  color: palevioletred;
`;

export default class Subtitle extends PureComponent {
  render() {
    return <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>;
  }
}

Subtitle.propTypes = {
  /** Title of the current dashboard */
  subtitle: PropTypes.string.isRequired
};

Subtitle.defaultProps = {
  subtitle: "Untitled"
};
