import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { Theme } from 'rmwc/Theme';
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarMenuIcon,
  ToolbarTitle,
  ToolbarIcon,
  // ToolbarFixedAdjust,
} from 'rmwc/Toolbar';

export default class Navbar extends Component {
  render() {
    return (
      <Theme tag="header" use="background text-primary-on-primary">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon use="menu" onClick={this.props.toggle} />
              <Link to="/">
                <ToolbarTitle>Toolbar</ToolbarTitle>
              </Link>
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
