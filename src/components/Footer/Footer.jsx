import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    // const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h1>FOOTER Advanced Jelle Footer</h1>
          <h4>{copyright}</h4>
          <h4>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>.
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
