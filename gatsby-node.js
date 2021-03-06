/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const storeProjectTemplate = path.resolve('src/layouts/projects.js');
    const storePageTemplate = path.resolve('src/layouts/pages.js');
    resolve(
      graphql(`
        {
          allContentfulProject(limit: 100) {
            edges {
              node {
                id
                title
                slug
                contentful_id
              }
            }
          }
          allContentfulPage(limit: 100) {
            edges {
              node {
                id
                title
                slug
                contentful_id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProject.edges.forEach(edge => {
          createPage({
            path: 'projects/' + edge.node.slug,
            component: storeProjectTemplate,
            context: {
              slug: edge.node.contentful_id
            }
          });
        });
        result.data.allContentfulPage.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: storePageTemplate,
            context: {
              slug: edge.node.contentful_id
            }
          });
        });
        return;
      })
    );
  });
};
