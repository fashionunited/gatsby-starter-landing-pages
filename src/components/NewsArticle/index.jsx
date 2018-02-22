import React from "react";
import PropTypes from "prop-types";
import moment from "moment"; // SLOW?
import { GridCell } from "rmwc/Grid";
import {
  Card,
  CardMedia,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardSupportingText
} from "rmwc/Card";
import { Elevation } from "rmwc/Elevation";
// import { Button } from "rmwc/Button";
// import "./style.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProgressiveImage from "react-progressive-image";

// const StyledCard = styled.C`
//   text-decoration: none;
// `;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCategory = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  color: #02cecc;
  text-decoration: none;
`;

// Needed?
// const StyledGridCell = styled(GridCell)`
//   display: flex;
//   justify-content: center;
// `;

const ROOT_URL = "https://fashionunited.com/";

class Post extends React.Component {
  state = { height: 4 };
  render() {
    const data = this.props.data;
    const post = {
      title: data.title,
      slug: data.url,
      description: data.description,
      date: data.createdAt,
      category: data.category.title,
      categoryPath: `${ROOT_URL}${data.category.path}`,
      imageUrl: data.imageUrl,
      id: data.id
    };

    return (
      <GridCell span="4" style={{ width: "320px" }}>
        <Elevation
          z={this.state.elevation || 0}
          transition
          onMouseOver={() => this.setState({ elevation: 24 })}
          onMouseOut={() => this.setState({ elevation: 0 })}
        >
          <StyledLink to={`/post/${post.id}`}>
            <Card
              style={{ width: "320px" }}
              // tag="a"
              // href={post.slug}
              className="post"
              // className="ma3 box post flex flex-column no-underline br2"
            >
              <ProgressiveImage
                src={post.imageUrl}
                placeholder="data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBQCdASoqABwAP/3+/3+/urWyMBVYA/A/iWIAAR7p/Y3etgh4KD8QqXEZj6waibITSIAA/cndnUz4/z4LEgByYUql75Cq/12W33KFIKQpc8L0Dt19C7NFXin0tKlxd70dzSF978msbuqLjDgAAA=="
              >
                {src => (
                  <CardMedia
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      height: "12.313rem"
                    }}
                  />
                )}
              </ProgressiveImage>
              <CardPrimary>
                <StyledCategory>{post.category}</StyledCategory>
                <CardTitle large>{post.title}</CardTitle>
                <CardSubtitle>
                  <time dateTime={moment(post.date).format("MMMM D, YYYY")}>
                    {moment(post.date).format("DD MMMM YYYY")}
                  </time>
                </CardSubtitle>
              </CardPrimary>
              <CardSupportingText>{post.description}</CardSupportingText>
            </Card>
          </StyledLink>
        </Elevation>
      </GridCell>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
