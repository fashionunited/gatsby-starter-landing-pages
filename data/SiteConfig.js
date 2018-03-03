module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  employerBrandingPagesDir: "employer-branding-pages",
  brandingPagesDir: "branding-pages",
  workingAtPagesDir: "working-at-pages",
  jobLandingPagesDir: "job-landing-pages",
  siteTitle: "Gatsby Starter Landing Pages", // Site title.
  siteTitleAlt: "GatsbyJS Starter Landing Pages", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://fashionunited.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-starter-landing-pages", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-landing-pages/.
  siteDescription: "If you do what you did, you get what you got.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "XXXXXXXXXXXXXXXX", // FB Application ID for using app insights
  googleTagManagerID: "GTM-XXXXXXX",
  disqusShortname: "https-fashionunited-github-io-gatsby-starter-landing-pages", // Disqus shortname.
  postDefaultCategoryID: "Fashion", // Default category for posts.
  userName: "Fashionista", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Catwalk, Paris", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I didn't consider myself a fashion designer at all at the time of punk. I was just using fashion as a way to express my resistance and to be rebellious. I came from the country, and by the time I got to London, I considered myself to be very stupid. It was my ambition to understand the world I live in.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/fashionunited/gatsby-starter-landing-pages",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/fashionunited",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:info@fashionunited.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright ©2018. ", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
