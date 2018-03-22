import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Grid, GridCell } from 'rmwc/Grid';
import About from '../components/About/About';
import config from '../../data/SiteConfig';

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
