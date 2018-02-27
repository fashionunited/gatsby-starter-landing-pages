import React, { Component } from "react";
import { css } from "react-emotion";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const imgStyle = css`
  border-radius: 5px;
`;
class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default AboutPage;
