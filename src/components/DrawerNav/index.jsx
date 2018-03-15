import React, { Component } from "react";
import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";

import { ListItem, ListItemText } from "rmwc/List";

export default class DrawerFU extends Component {
  render() {
    return (
      <Drawer temporary open={this.props.opened}>
        <DrawerHeader style={{ backgroundColor: "#f6f6f6" }}>
          DrawerHeader
        </DrawerHeader>
        <DrawerContent>
          <ListItem>
            <ListItemText>Cookies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pizza</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Icecream</ListItemText>
          </ListItem>
        </DrawerContent>
      </Drawer>
    );
  }
}
