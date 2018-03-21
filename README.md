[![Codacy Badge](https://api.codacy.com/project/badge/Grade/990fb54ea8094f2aa0ed77f14e859820)](https://www.codacy.com/app/fashionunited/gatsby-starter-landing-pages?utm_source=github.com&utm_medium=referral&utm_content=fashionunited/gatsby-starter-landing-pages&utm_campaign=Badge_Grade)

[![pipeline status](https://gitlab.com/fuww/gatsby-starter-landing-pages/badges/master/pipeline.svg)](https://gitlab.com/fuww/gatsby-starter-landing-pages/commits/master)

[![coverage report](https://gitlab.com/fuww/gatsby-starter-landing-pages/badges/master/coverage.svg)](https://gitlab.com/fuww/gatsby-starter-landing-pages/commits/master)

# Gatsby Starter Landing Pages

A blog starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

* [Demo website on GitHub Pages.](https://fashionunited.github.io/gatsby-starter-landing-pages/)

For performance comparisons the demo is also hosted on:

* [Firebase Hosting](https://gatsby-starter-landing-pages.firebaseapp.com/)
* [Netlify](https://gatsby-landing-pages.netlify.com/)

Compare latency with Apex.sh, this is far from a scientific method though.

* [GitHub Pages vs Firebase](https://latency.apex.sh/?url=https%3A%2F%2Ffashionunited.github.io/gatsby-starter-landing-pages/&compare=https%3A%2F%2Fgatsby-starter-landing-pages.firebaseapp.com/)
* [GitHub Pages vs Netlify](https://latency.apex.sh/?url=https%3A%2F%2Ffashionunited.github.io/gatsby-starter-landing-pages/&compare=https%3A%2F%2Fgatsby-landing-pages.netlify.com/)
* [Firebase vs Netlify](https://latency.apex.sh/?url=https%3A%2F%2Fgatsby-starter-landing-pages.firebaseapp.com/&compare=https%3A%2F%2Fgatsby-landing-pages.netlify.com/)

Inspired by both [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter) & [Gatsby Starter Gatsbythemes](https://github.com/saschajullmann/gatsby-starter-gatsbythemes).

## Deploy to Firebase Hosting

    firebase init
    firebase login:ci

Store the token you get as variable FIREBASE_DEPLOY_KEY in GitLab. This is used in .gitlab-ci.yml to deploy to Firebase Hosting.

## Why?

This project aims to provide a minimal for building GatsbyJS powered blogs.

It provides basic components for SEO/Social Media/UI. Since we believe in the power of CSS-in-JS, Emotion is included for styling.

NOTE: This project serves as a base for [Gatsby Starter Landing Pages Material Web Components](https://github.com/fashionunited/gatsby-starter-landing-pages-material-web-components). That project uses React Material Web Components to implement Material Design as close to what Google intended as possible.

## How can I use this?

If you are interested in building websites that are highly optimized, for SEO and performance, you can use this an unstyled, "minimal" starter.

## Features

* Images with Blur-Up technique

* CSS-in-JS via [Emotion](https://github.com/emotion-js/emotion).
  <!-- * Jest and Enzyme for testing.
* Eslint in dev mode with the airbnb config and prettier formatting rules.
* React 16. -->
  <!-- * A basic blog, with posts under src/pages/blog. There's also a script which creates a new Blog entry (post.sh). -->
* Data per JSON files.
  <!-- * A few basic components (Navigation, Footer, Layout).
* Layout components make use of [Styled-System](https://github.com/jxnblk/styled-system).
* Google Analytics (you just have to enter your tracking-id).
* Gatsby-Plugin-Offline which includes Service Workers.
* [Prettier](https://github.com/prettier/prettier) for a uniform codebase.
* [Normalize](https://github.com/necolas/normalize.css/) css (7.0).
* [Feather](https://feather.netlify.com/) icons.
* Font styles taken from [Tachyons](http://tachyons.io/). -->

- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Separate components for everything
- High configurability:
  * User information
  * User social profiles
  * Copyright information
  * More!
- Author segment
  * Name
  * Location
  * Description
  * Links
  * Follow Me button
- Posts in Markdown
  * Code syntax highlighting
  * Embed YouTube videos
  * Embed Tweets
- Tags
  * Separate page for posts under each tag
- Categories
  * Separate page for posts under each category
- Disqus support
  * Notifications about new disqus comments
- Google Analytics support
- NPM scripts for GitHub Pages deployment
- Social features
  * Twitter tweet button
  * Facebook share/share count
  * Reddit share/share count
  * Google+ share button
  * LinkedIn share button
  * Telegram share button
- SEO
  * Sitemap generation
  * robots.txt
  * General description tags
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Google+/Pinterest)
  * Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Offline support
- Web App Manifest support
- Development tools
  * ESLint for linting
  * Prettier for code style
  * Remark-Lint for linting Markdown
  * write-good for linting English prose
  * gh-pages for deploying to GitHub pages
  * CodeClimate configuration file and badge

NOTE: Feel free to check out [Gatsby Starter Landing Pages Material Web Components](https://github.com/fashionunited/gatsby-starter-landing-pages-material-web-components) if you are interested in a more opinionated starter with Material Design in mind.

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/fashionunited/gatsby-starter-landing-pages
npm install # or yarn install
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/fashionunited/gatsby-starter-landing-pages YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  employerBrandingPagesDir: 'employer-branding-pages',
  brandingPagesDir: 'branding-pages',
  workingAtPagesDir: 'working-at-pages',
  jobLandingPagesDir: 'job-landing-pages',
  siteTitle: 'Gatsby Starter Landing Pages', // Site title.
  siteTitleAlt: 'GatsbyJS Starter Landing Pages', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://fashionunited.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/blog', // Prefixes all links. For cases when deployed to example.github.io/blog/.
  siteDescription: 'If you do what you did, you get what you got.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: 'XXXXXXXXXXXXXXXX', // FB Application ID for using app insights
  googleTagManagerID: 'GTM-XXXXXXX',
  disqusShortname: 'https-fashionunited-github-io-gatsby-starter-landing-pages', // Disqus shortname.
  postDefaultCategoryID: 'Fashion', // Default category for posts.
  userName: 'Fashionista', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Catwalk, Paris', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "I didn't consider myself a fashion designer at all at the time of punk. I was just using fashion as a way to express my resistance and to be rebellious. I came from the country, and by the time I got to London, I considered myself to be very stupid. It was my ambition to understand the world I live in.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/fashionunited/gatsby-starter-landing-pages',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/fashionunited',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:info@fashionunited.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright ©2018. ', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/gatsby-starter-landing-pages', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-landing-pages/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
