/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const storeTemplate = path.resolve('src/layouts/projects.js');
    resolve(
      graphql(`
        {
          allContentfulProject(limit: 100) {
            edges {
              node {
                id
                title
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
            path: edge.node.id,
            component: storeTemplate,
            context: {
              slug: edge.node.id,
            },
          });
        });
        return;
      })
    );
  });
};
