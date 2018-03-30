import React from 'react';
import Helmet from 'react-helmet';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import styled, { css } from 'react-emotion';

import { Grid, GridCell } from 'rmwc/Grid';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function PageTemplate(props) {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }
  return (
    <div>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Grid tag="section">
        <GridCell span="3" />
        <GridCell span="6">
          <div>
            <h1>{post.title}</h1>
            This is the page template
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <Meta>
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </Meta>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
          </div>
        </GridCell>
        <GridCell span="3" />
      </Grid>
    </div>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
