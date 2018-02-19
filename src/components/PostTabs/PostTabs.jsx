import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

import { TabBar, Tab, TabIcon, TabIconText, TabBarScroller } from "rmwc/Tabs";

class PostTabs extends Component {
  state = {
    activeTabIndex: 0
  };

  onChange(evt) {
    this.setState({ activeTabIndex: evt.target.value });
    ("activeTabIndex: " + evt.target.value)();
  }

  render() {
    // const { tabs } = this.props;
    return (
      <div>
        <TabBarScroller>
          <TabBar
            activeTabIndex={("activeTabIndex", this.state.activeTabIndex)}
            onChange={evt => this.onChange(evt)}
          >
            <Tab>Cookies</Tab>
            <Tab>Pizza</Tab>
            <Tab>Icecream</Tab>
            <Tab>Chocolate</Tab>
            <Tab>Fishsticks</Tab>
            <Tab>Ratatouille</Tab>
            <Tab>Bread</Tab>
            <Tab>Rolls</Tab>
            <Tab>Sushi</Tab>
            <Tab>Cupcake</Tab>

            {/* {tabs &&
              tabs.map(tab => (
                <Tab
                  key={tab}
                  style={{ textDecoration: "none" }}
                  to={`/tabs/${_.kebabCase(tab)}`}
                >
                  <button>{tab}</button>
                </Tab>
              ))} */}
          </TabBar>
        </TabBarScroller>
      </div>
    );
  }
}

export default PostTabs;
