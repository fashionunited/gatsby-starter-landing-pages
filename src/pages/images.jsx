import React from 'react';
import Img from 'gatsby-image';
import { Grid, GridCell } from 'rmwc/Grid';

const BlurUp = ({ data }) => (
  <div>
    <Grid tag="section">
      <GridCell span="3" />
      <GridCell span="6">
        <h2>Blur Up</h2>
        <div>
          <Img
            style={{ display: 'inherit' }}
            css={{
              // float: `right`,
              '&': {
                '@media (min-width: 500px)': {
                  display: 'none',
                },
              },
            }}
            title={'Photo by Redd Angelo on Unsplash'}
            resolutions={data.reddImageMobile.resolutions}
          />
        </div>
        <div>
          <Img
            style={{ display: 'inherit' }}
            css={{
              // float: `right`,
              display: 'none',
              '@media (min-width: 500px)': {
                display: 'inline-block',
              },
            }}
            title={'Photo by Redd Angelo on Unsplash'}
            resolutions={data.reddImage.resolutions}
          />
        </div>
        <div>
          <Img
            sizes={data.kenImage.sizes}
            title={'Photo by Ken Treloar on Unsplash'}
          />
        </div>
      </GridCell>
      <GridCell span="3" />
    </Grid>
  </div>
);

export default BlurUp;

export const query = graphql`
  query BlurUpQuery {
    reddImageMobile: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 125) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    reddImage: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    kenImage: imageSharp(id: { regex: "/ken-treloar/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
