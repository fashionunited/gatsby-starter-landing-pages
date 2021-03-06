import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarMenuIcon,
  ToolbarTitle,
  ToolbarIcon,
  ToolbarFixedAdjust,
} from 'rmwc/Toolbar';

import { Theme } from 'rmwc/Theme';

const StyledToolbar = styled(Toolbar)`
  background-color: #fff;
  color: #000;
`;
export default class Navbar extends Component {
  render() {
    return (
      <Theme tag="header" use="background text-primary-on-primary">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon use="menu" onClick={this.props.toggle} />
              <ToolbarTitle tag="a" href="/">
                Toolbar
              </ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection alignEnd>
              <ToolbarIcon use="account_circle" onClick={this.props.login} />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
      </Theme>
    );
  }
}
