import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'react-emotion';
import { Button } from 'rmwc/Button';

export const StyledLink = styled.li`
  display: inline-block;
  margin: 10px 5px;
`;

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <StyledLink
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Button unelevated>{tag}</Button>
            </StyledLink>
          ))}
      </div>
    );
  }
}

export default PostTags;
