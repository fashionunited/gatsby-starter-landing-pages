import React, { Component } from "react";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import styled, { css } from "react-emotion";
// @media (max-width: 640px - 1px) {
//   .notice-container {
//       justify-content: space-around;
//   }
// }

const StyledFooter = styled.footer`
  justify-content: center;
  align-content: center;
  /* padding: 10px 5px 5px; */
  color: white;
`;

const NoticeContainerH1 = styled.h1`
  color: white;
`;

const NoticeContainerH4 = styled.h4`
  text-align: center;
  margin: 0;
  color: white;
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

const ulStyle = css`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1.45rem;
  text-transform: uppercase;
  padding: 0;
  & a {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    transition: color 0.15s ease-in;
    &:hover {
      text-decoration: none;
      box-shadow: none;
      opacity: 1;
      transition: opacity 0.15s ease-in;
    }
  }
  & li {
    margin: 0;
  }
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
            <NoticeContainerH1>Footer</NoticeContainerH1>
            <ul className={ulStyle}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <NoticeContainerH4>{copyright}</NoticeContainerH4>
            <NoticeContainerH4>
              Based on{" "}
              <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
                Gatsby Advanced Starter
              </a>{" "}
              &{" "}
              <a href="https://github.com/saschajullmann/gatsby-starter-gatsbythemes">
                Gatsby Starter Gatsbythemes
              </a>.
            </NoticeContainerH4>
          </div>
        </Wrapper>
      </StyledFooter>
    );
  }
}

export default Footer;
