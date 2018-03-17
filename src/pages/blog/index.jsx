import React from "react";
import Helmet from "react-helmet";
import PostListing from "../../components/PostListing/PostListing";
import SEO from "../../components/SEO/SEO";
import config from "../../../data/SiteConfig";
import { Grid, GridCell } from "rmwc/Grid";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Grid tag="section">
          <GridCell span="3" />
          <GridCell span="6">
            <PostListing postEdges={postEdges} />
          </GridCell>
          <GridCell span="3" />
        </Grid>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            author {
              id
            }
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
