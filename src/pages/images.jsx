import React from "react";
import Img from "gatsby-image";

const BlurUp = ({ data }) => (
  <div>
    <h2>Blur Up</h2>
    <Img
      style={{ display: `inherit` }}
      css={{
        float: `right`,
        "&": {
          "@media (min-width: 500px)": {
            display: `none`
          }
        }
      }}
      title={`Photo by Redd Angelo on Unsplash`}
      resolutions={data.reddImageMobile.resolutions}
    />
    <Img
      style={{ display: `inherit` }}
      css={{
        float: `right`,
        display: `none`,
        "@media (min-width: 500px)": {
          display: `inline-block`
        }
      }}
      title={`Photo by Redd Angelo on Unsplash`}
      resolutions={data.reddImage.resolutions}
    />
    <Img
      sizes={data.kenImage.sizes}
      title={`Photo by Ken Treloar on Unsplash`}
    />
  </div>
);

export default BlurUp;

export const query = graphql`
  query BlurUpQuery {
    reddImageMobile: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 125) {
        ...GatsbyImageSharpResolutions
      }
    }
    reddImage: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    kenImage: imageSharp(id: { regex: "/ken-treloar/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
