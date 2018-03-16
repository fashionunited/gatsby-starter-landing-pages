/* eslint-disable no-undef, react/prop-types */
import React from "react";
import Link from "gatsby-link";
import colors from "../utils/colors";

import { Grid, GridCell } from "rmwc/Grid";

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <Grid tag="section">
        <GridCell span="3" />
        <GridCell span="6">
          {" "}
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
          </div>
        </GridCell>
        <GridCell span="3" />
      </Grid>
      <Grid tag="section" maxwidth="900px">
        <GridCell span="3" />
        <GridCell span="6">
          <h1>This could be another section</h1>
          <p>
            Work it girl On fleek fierce million, catwalk work it girl luxury
            her make his mouth water would us is. Leggings him blouse work it
            girl after, models designer fierce heels would creative do you after
            shoes. Are fierce luxury bertelli fierce girl bye make his mouth
            water. Work it girl them all eyes on you opening you we all eyes on
            you, do you are fashion fierce strut she. Blouse do you make his
            mouth water, leggings you them gucci gucci lovely trending.
          </p>
        </GridCell>
      </Grid>
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
