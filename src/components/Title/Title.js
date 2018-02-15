import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


// Create a Title component that'll render an <h1> tag with some styles
//styled.h1 is a function that when call return a react component that renders and H1
// You can now call functions with `` and pass those arguments
const StyledTitle = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;


export default class Title extends PureComponent{
 render(){
     return <StyledTitle>{this.props.title}</StyledTitle>;
 }
}

Title.propTypes = {
  /** Title of the current dashboard */
  title: PropTypes.string.isRequired
};

Title.defaultProps = {
  title: 'Untitled'
};