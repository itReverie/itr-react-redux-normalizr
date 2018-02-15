import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel=styled.label`
    margin: 2px 2px auto 2px;
`;

export default class LabelPart extends Component {
  render() {
    return  <StyledLabel> {this.props.text+' '} </StyledLabel>;
  }
}

LabelPart.propTypes={
    text:PropTypes.string.isRequired
};

LabelPart.defaultProps={
   text:''
}
