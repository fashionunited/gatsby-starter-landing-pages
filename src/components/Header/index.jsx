import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: #666;
`;

const Header = () => (
  <Wrapper>
    <Title>
      <a href="/">FashionUnited Header / Toolbar</a>
    </Title>
  </Wrapper>
);

export default Header;
