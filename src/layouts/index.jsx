import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import DrawerNav from '../components/DrawerNav';
import Login from '../components/Login';

import Header from '../components/Header';

import Footer from '../components/Footer';
import colors from '../utils/colors';

/* eslint-disable */
import normalize from 'normalize.css';
// import "material-components-web/dist/material-components-web.min.css";
// require("material-components-web/dist/material-components-web.min.css");
import './index.scss';
import 'typeface-roboto';
import 'material-design-icons/iconfont/material-icons.css';

injectGlobal`
  * {
      box-sizing: border-box;
  };
  html {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.accent}
  }
`;
/* eslint-enable */

export default class MainLayout extends React.Component {
  state = { drawer: false, login: false };

  drawerToggle = () => {
    this.setState({ ...this.state, drawer: !this.state.drawer });
  };
  loginToggle = () => {
    this.setState({ ...this.state, login: !this.state.login });
  };

  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '');
    let title = '';
    if (currentPath === '') {
      title = 'Home';
    } else if (currentPath === 'tags/') {
      title = 'Tags';
    } else if (currentPath === 'categories/') {
      title = 'Categories';
    } else if (currentPath === 'about/') {
      title = 'About';
    } else if (currentPath.indexOf('posts')) {
      title = 'Article';
    } else if (currentPath.indexOf('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header toggle={this.drawerToggle} login={this.loginToggle} />
        <Login opened={this.state.login} toggle={this.loginToggle} />
        <DrawerNav opened={this.state.drawer} />

        {children()}
        <Footer />
      </div>
    );
  }
}
