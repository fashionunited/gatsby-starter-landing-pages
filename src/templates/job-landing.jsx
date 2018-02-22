import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { DFPSlotsProvider, AdSlot } from "react-dfp";
import styled from "styled-components";

const WallpaperContainer = styled.div`
  height: 1200px;
  margin-bottom: -1200px;
  z-index: -1000;
`;

const WallpaperLeft = styled.div`
  overflow: hidden;
  max-width: 300px;
  height: 1050px;
  margin-bottom: inherit;

  float: left;
  /* margin-left: -315px; */
`;

const WallpaperRight = styled.div`
  overflow: hidden;
  max-width: 300px;
  height: 1050px;
  margin-bottom: inherit;

  float: right;
  /* margin-right: -315px; */
`;

const Hero = styled.header.attrs({
  image: props => props.image || "https://unsplash.it/400/300/?random?BoldMage"
})`
  padding: 4em;
  background: papayawhip;
  border-bottom: 5px solid #3b454a;
  background-image: url(${props => props.image});
  background-position: 40% 50%;
`;
export default class jobLandingTemplate extends React.Component {
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

        <div>
          <DFPSlotsProvider
            dfpNetworkId={"5347124"}
            adUnit={"TEST/JobLanding_Top"}
          >
            <AdSlot sizes={[[320, 50], [320, 100], [970, 90], [970, 250]]} />
          </DFPSlotsProvider>
        </div>
        <WallpaperContainer>
          <WallpaperLeft>
            <DFPSlotsProvider
              dfpNetworkId={"5347124"}
              adUnit={"TEST/JobLanding_Left"}
            >
              <AdSlot sizes={[[300, 600]]} />
            </DFPSlotsProvider>
          </WallpaperLeft>
          <WallpaperRight>
            <DFPSlotsProvider
              dfpNetworkId={"5347124"}
              adUnit={"TEST/JobLanding_Right"}
            >
              <AdSlot sizes={[[300, 600]]} />
            </DFPSlotsProvider>
          </WallpaperRight>
        </WallpaperContainer>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
          <Disqus postNode={postNode} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query JobLandingPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
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
