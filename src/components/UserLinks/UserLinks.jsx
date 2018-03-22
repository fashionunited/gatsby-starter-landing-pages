import React, { Component } from 'react';
import styled from 'react-emotion';
import { Button } from 'rmwc/Button';

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
      <Button key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </Button>
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
