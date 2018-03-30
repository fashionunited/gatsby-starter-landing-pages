import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default function CategoryTemplate(props) {
  const category = props.pathContext.category;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="category-container">
      <Helmet
        title={`Posts in category "${category}" | ${config.siteTitle}`}
      />
      <PostListing postEdges={postEdges} />
    </div>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_withWebp
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
