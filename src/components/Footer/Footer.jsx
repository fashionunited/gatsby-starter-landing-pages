import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import styled from "styled-components";

// @media (max-width: 640px - 1px) {
//   .notice-container {
//       justify-content: space-around;
//   }
// }

const StyledFooter = styled.footer`
  justify-content: center;
  align-content: center;
  padding: 10px 5px 5px;
`;

const NoticeContainerH4 = styled.h4`
  text-align: center;
  margin: 0;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 25px;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #666;
`;
class Footer extends Component {
  render() {
    // const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <StyledFooter>
        <UserLinks config={config} labeled />
        <Wrapper>
          <div className="notice-container">
            <h1>FOOTER Advanced Jelle Footer</h1>
            <NoticeContainerH4>{copyright}</NoticeContainerH4>
            <NoticeContainerH4>
              Based on{" "}
              <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                Gatsby Advanced Starter
              </a>.
            </NoticeContainerH4>
          </div>
        </Wrapper>
      </StyledFooter>
    );
  }
}

export default Footer;
