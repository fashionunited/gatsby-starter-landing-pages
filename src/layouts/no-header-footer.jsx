import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';

import normalize from 'normalize.css';
// import "material-components-web/dist/material-components-web.min.css";
// import "typeface-roboto";
// import "material-design-icons/iconfont/material-icons.css";

export default class NoHeaderNoFooter extends React.Component {
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
        {children()}
      </div>
    );
  }
}
