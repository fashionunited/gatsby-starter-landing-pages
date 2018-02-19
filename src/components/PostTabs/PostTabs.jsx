import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTabs extends Component {
  render() {
    const { tabs } = this.props;
    return (
      <div className="post-tab-container">
        {tabs &&
          tabs.map(tab => (
            <Link
              key={tab}
              style={{ textDecoration: "none" }}
              to={`/tabs/${_.kebabCase(tab)}`}
            >
              <button>{tab}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTabs;
