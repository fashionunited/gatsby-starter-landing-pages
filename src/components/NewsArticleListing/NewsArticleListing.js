import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
// import PostFast from "../components/PostFast";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { Grid, GridCell } from "rmwc/Grid";

import Navbar from "./Navbar";
import DrawerFU from "./DrawerFU";
import Login from "./Login";

import styled from "styled-components";

const StyledGrid = styled(Grid)`
  max-width: 1150px;
`;

class ListPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allPostsQuery.refetch();
    }
  }

  state = { drawer: false, login: false };

  drawerToggle = () => {
    this.setState({ ...this.state, drawer: !this.state.drawer });
  };
  loginToggle = () => {
    this.setState({ ...this.state, login: !this.state.login });
  };

  render() {
    if (this.props.allPostsQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      );
    }

    return (
      <div>
        <Navbar toggle={this.drawerToggle} login={this.loginToggle} />
        <Login opened={this.state.login} toggle={this.loginToggle} />
        <DrawerFU opened={this.state.drawer} />
        <StyledGrid>
          <GridCell span="4">
            <Link
              to="/create"
              className="ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline"
            >
              <img
                src={require("../assets/plus.svg")}
                alt=""
                className="plus mb3"
              />
              <div>New Post</div>
            </Link>
          </GridCell>
          {this.props.allPostsQuery.fashionunitedComNewsArticles &&
            this.props.allPostsQuery.fashionunitedComNewsArticles.map(post => (
              <Post
                key={post.id}
                data={post}
                refresh={() => this.props.allPostsQuery.refetch()}
              />
            ))}
          {this.props.children}
        </StyledGrid>
      </div>
    );
  }
}

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    fashionunitedComNewsArticles(limit: 100, featured: true) {
      id
      title
      description
      url
      imageUrl
      creator {
        email
        name
      }
      category {
        path
        title
      }
      # keywords
      featured
      createdAt
    }
  }
`;

const ListPageWithQuery = graphql(ALL_POSTS_QUERY, {
  name: "allPostsQuery",
  options: {
    fetchPolicy: "network-only"
  }
})(ListPage);

export default ListPageWithQuery;
