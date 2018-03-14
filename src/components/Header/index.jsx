import React from "react";
import Link from "gatsby-link";
import styled, { css } from "react-emotion";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarFixedAdjust
} from "rmwc/Toolbar";

const StyledToolbar = styled(Toolbar)`
  background-color: #fff;
  color: #000;
`;

const Header = () => (
  // <Toolbar theme="primary-light-bg text-primary-on-secondary">
  <div>
    <StyledToolbar fixed theme="background text-primary-on-background">
      <ToolbarRow>
        <ToolbarTitle tag="a" href="/">
          Toolbar
        </ToolbarTitle>
      </ToolbarRow>
    </StyledToolbar>
    <ToolbarFixedAdjust />
  </div>
);

export default Header;
