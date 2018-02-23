import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

const IndexPage = props => {
  const data = props.data.contentfulPage;
  return (
    <div>
      <div>
        <ReactMarkdown source={data.content.content} />
      </div>
    </div>
  );
};

export default IndexPage;

export const homeQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "home" }) {
      id
      title
      slug
      content {
        content
      }
    }
  }
`;
