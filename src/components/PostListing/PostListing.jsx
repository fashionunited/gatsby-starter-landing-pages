import React from "react";
import Link from "gatsby-link";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "rmwc/Card";

import { Typography } from "rmwc/Typography";

import { Grid, GridCell } from "rmwc/Grid";
import { Elevation } from "rmwc/Elevation";
import styled from "react-emotion";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        // cover: postEdge.node.frontmatter.cover.childImageSharp.sizes,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
        // author: postEdge.node.frontmatter.author.id
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <Grid>
        {/* Your post list here. */
        postList.map(post => (
          <GridCell span="4" key={post.title}>
            {/* <Card style={{ width: "21rem" }}> */}
            {/* <Card style={{ width: "21rem", margin: "3rem" }}> */}
            <Card>
              <Link to={post.path}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage: `url(${post.cover})`
                    }}
                  />
                  <div style={{ padding: "0 1rem 1rem 1rem" }}>
                    <Typography use="title" tag="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      use="subheading1"
                      tag="h3"
                      theme="text-secondary-on-background"
                      style={{ marginTop: "-1rem" }}
                    >
                      by {post.author}
                    </Typography>
                    <Typography
                      use="body1"
                      tag="div"
                      theme="text-secondary-on-background"
                    >
                      Visit ten places on our planet that are undergoing the
                      biggest changes today.
                    </Typography>
                  </div>
                </CardPrimaryAction>
              </Link>
              <CardActions>
                <CardActionButtons>
                  <CardAction>Read</CardAction>
                  {/* <CardAction>Bookmark</CardAction> */}
                </CardActionButtons>
                <CardActionIcons>
                  <CardAction
                    iconToggle
                    on={{
                      label: "Remove from favorites",
                      content: "favorite"
                    }}
                    off={{
                      label: "Add to favorites",
                      content: "favorite_border"
                    }}
                  />
                  <CardAction icon use="share" />
                  {/* <CardAction icon use="more_vert" /> */}
                </CardActionIcons>
              </CardActions>
            </Card>
          </GridCell>
        ))}
      </Grid>
    );
  }
}

export default PostListing;
