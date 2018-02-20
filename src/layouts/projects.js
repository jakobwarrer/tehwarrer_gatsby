import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
  const post = data.contentfulProject;
  return (
    <div className="blog-post-container">
      <Helmet title="test" />
      <div className="blog-post">
        <h1>{post.edges.node.title}</h1>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query ProjectPostByPath($path: String!) {
    contentfulProject(id: { eq: $path }) {
      edges {
        node {
          id
          title
          description {
            id
            description
          }
          gallery {
            id
            resolutions(width: 400) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
