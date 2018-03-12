const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "domain")
    ) {
      slug = `${_.kebabCase(node.frontmatter.domain)}/${node.frontmatter.slug}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#choosing-the-page-layout
    // if (page.path.match(/^\/landing-page/)) {
    //   // It's assumed that `landingPage.js` exists in the `/layouts/` directory
    //   page.layout = "workingAtLayout";

    //   // Update the page.
    //   createPage(page);
    // }

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    tags
                    category
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (_.get(edge, "node.frontmatter.layout") === "no-header-footer") {
            createPage({
              path: edge.node.fields.slug,
              // https://github.com/movementkitchen/website/blob/master/gatsby-node.js#L52-L54
              component: path.resolve(
                edge.node.frontmatter.template
                  ? `./src/templates/${edge.node.frontmatter.template}.jsx`
                  : "./src/templates/page.jsx"
              ),
              layout: `no-header-footer`,
              context: { slug: edge.node.fields.slug }
            });
          } else {
            // this is the Default
            createPage({
              path: edge.node.fields.slug,
              component: path.resolve(
                edge.node.frontmatter.template
                  ? `./src/templates/${edge.node.frontmatter.template}.jsx`
                  : "./src/templates/post.jsx"
              ),
              context: {
                slug: edge.node.fields.slug
              }
            });
          }

          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
