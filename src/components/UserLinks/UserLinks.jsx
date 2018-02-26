import React, { Component } from "react";
import styled, { css } from "react-emotion";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ""}
      </button>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <StyledDiv>{this.getLinkElements()}</StyledDiv>;
  }
}

export default UserLinks;
