import React, { Component } from 'react';
import { Drawer, DrawerHeader, DrawerContent } from 'rmwc/Drawer';

import { ListItem, ListItemText } from 'rmwc/List';

import Link from 'gatsby-link';

export default class DrawerFU extends Component {
  render() {
    return (
      <Drawer temporary open={this.props.opened}>
        <DrawerHeader style={{ backgroundColor: '#f6f6f6' }}>
          DrawerHeader
        </DrawerHeader>
        <DrawerContent>
          <Link to="/">
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/blog">
            <ListItem>
              <ListItemText>Blog</ListItemText>
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem>
              <ListItemText>About</ListItemText>
            </ListItem>
          </Link>
        </DrawerContent>
      </Drawer>
    );
  }
}
