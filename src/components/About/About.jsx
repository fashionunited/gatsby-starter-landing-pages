import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 300px;
`;

function About(props) {
  return (
    <StyledDiv>
      <h1>
        Edit About component or pages/about.jsx to include your information.
      </h1>
    </StyledDiv>
  );
}

export default About;
