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

import { GridCell } from "rmwc/Grid";
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
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <GridCell span="4" key={post.title}>
            <Link to={post.path}>
              {/* <Card style={{ width: "21rem" }}> */}
              <Card style={{ width: "21rem" }}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage:
                        "url(https://material-components-web.appspot.com/images/16-9.jpg)"
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
                      by Kurt Wagner
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
                <CardActions>
                  <CardActionButtons>
                    <CardAction>Read</CardAction>
                    <CardAction>Bookmark</CardAction>
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
                    <CardAction icon use="more_vert" />
                  </CardActionIcons>
                </CardActions>
              </Card>
            </Link>
          </GridCell>
        ))}
      </div>
    );
  }
}

export default PostListing;
