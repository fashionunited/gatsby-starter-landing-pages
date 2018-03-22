import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Grid, GridCell } from 'rmwc/Grid';
import config from '../../data/SiteConfig';

class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
        <Grid tag="section">
          <GridCell span="3" />
          <GridCell span="6">
            <h1>Privacy Policy</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </GridCell>
          <GridCell span="3" />
        </Grid>
      </div>
    );
  }
}

export default PrivacyPolicy;
