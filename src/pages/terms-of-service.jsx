import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About';
import config from '../../data/SiteConfig';
import { Grid, GridCell } from 'rmwc/Grid';

function TermsOfService(props) {
  return (
    <div className="about-container">
      <Helmet title={`Terms of Service | ${config.siteTitle}`} />
      <Grid tag="section">
        <GridCell span="3" />
        <GridCell span="6">
          <h1>Terms of Service</h1>
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

export default TermsOfService;
