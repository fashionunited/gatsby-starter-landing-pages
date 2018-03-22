import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import UserInfo from '../components/UserInfo/UserInfo';
import Disqus from '../components/Disqus/Disqus';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Hero = styled.header.attrs({
  image: props => props.image || 'https://unsplash.it/400/300/?random?BoldMage',
})`
  padding: 4em;
  background: papayawhip;
  border-bottom: 5px solid #3b454a;
  background-image: url(${props => props.image});
  background-position: 40% 50%;
`;
export default class wideHeaderTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
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
        <div>
          <DFPSlotsProvider
            dfpNetworkId={'5347124'}
            adUnit={'TEST/JobLanding_Top'}
          >
            <AdSlot sizes={[[320, 50], [320, 100], [970, 90], [970, 250]]} />
          </DFPSlotsProvider>
          <Hero image={post.cover} />
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <DFPSlotsProvider
            dfpNetworkId={'5347124'}
            adUnit={'TEST/JobLanding_Left'}
          >
            <AdSlot sizes={[[300, 600]]} />
          </DFPSlotsProvider>
          <DFPSlotsProvider
            dfpNetworkId={'5347124'}
            adUnit={'TEST/JobLanding_Right'}
          >
            <AdSlot sizes={[[300, 600]]} />
          </DFPSlotsProvider>

          <Meta>
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </Meta>
          <UserInfo config={config} />
          <Disqus postNode={postNode} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WideHeaderPageBySlug($slug: String!) {
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
