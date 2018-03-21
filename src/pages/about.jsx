import React, { Component } from 'react';
import { css } from 'react-emotion';
import Helmet from 'react-helmet';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import { Grid, GridCell } from 'rmwc/Grid';

const imgStyle = css`
  border-radius: 5px;
`;
class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Grid tag="section">
          <GridCell span="3" />
          <GridCell span="6">
            <About />
          </GridCell>
          <GridCell span="3" />
        </Grid>
      </div>
    );
  }
}

export default AboutPage;
