import React from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import { css } from 'react-emotion';

const gridStyle = css`
  /* Repeat 6 1fr rows named "row" and 6 1fr columns named "col" */

  display: grid;
  grid-template: repeat(6, [row] 1fr) / repeat(6, [col] 1fr);
  grid-gap: 20px;

  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6 {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 24px;
    border: 10px solid rgba(0, 0, 0, 0.25);
    color: #000;
    line-height: 1;
    padding: 10px;
  }

  .item-1 {
    background-image: -webkit-repeating-linear-gradient(
      -45deg,
      rgba(150, 150, 150, 0.35),
      rgba(150, 150, 150, 0.35) 15px,
      rgba(150, 150, 150, 0.25) 15px,
      rgba(150, 150, 150, 0.25) 30px
    );
    background-image: repeating-linear-gradient(
      -45deg,
      rgba(150, 150, 150, 0.35),
      rgba(150, 150, 150, 0.35) 15px,
      rgba(150, 150, 150, 0.25) 15px,
      rgba(150, 150, 150, 0.25) 30px
    );
    border-color: #b4b4b4;
    grid-column: col 1 / span 3;
    grid-row: row 1 / span 2;
    z-index: 3;
  }

  .item-2 {
    background-color: rgba(145, 223, 0, 0.75);
    border-color: transparent;
    grid-column: col 3 / span 4;
    grid-row: row 2 / span 3;
    z-index: 3;
  }

  .item-3 {
    background-color: transparent;
    border-color: rgba(169, 100, 234, 0.75);
    grid-column: col 5 / span 2;
    grid-row: row 1 / span 5;
    z-index: 3;
  }

  .item-4 {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: transparent;
    grid-column: col 2;
    grid-row: row 2 / span 4;
    z-index: 2;
  }

  .item-5 {
    background-color: rgba(169, 100, 234, 0.75);
    border-color: transparent;
    grid-column: col 1 / span 3;
    grid-row: row 4 / span 3;
    z-index: 1;
  }

  .item-6 {
    background-color: transparent;
    border-color: rgba(145, 223, 0, 0.75);
    grid-column: col 4 / span 3;
    grid-row: row 5 / span 2;
    z-index: 4;
  }
`;

const CssGrid = () => (
  <div>
    <Grid tag="section">
      <GridCell span="3" />
      <GridCell span="6">
        <h2>CSS Grid</h2>
        <div className={gridStyle}>
          <div className="item-1">1</div>
          <div className="item-2">2</div>
          <div className="item-3">3</div>
          <div className="item-4">4</div>
          <div className="item-5">5</div>
          <div className="item-6">6</div>
        </div>
      </GridCell>
      <GridCell span="3" />
    </Grid>
  </div>
);

export default CssGrid;

export const query = graphql`
  query CssGridQuery {
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
