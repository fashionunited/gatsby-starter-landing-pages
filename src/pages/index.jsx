/* eslint-disable no-undef, react/prop-types */
import React from "react";
import Link from "gatsby-link";
import colors from "../utils/colors";

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <h1>{myData.title}</h1>
      <h3>{myData.subtitle}</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/images">Images - Blur-Up & Prefer WebP</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <h1>This could be another section</h1>
      <p>With another text object</p>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
