import React from 'react';
import Link from 'gatsby-link';

class AboutPage extends React.Component {
  render() {
    const data = this.props.data.contentfulPage;
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.content.content}</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export const aboutQuery = graphql`
  query AboutQuery {
    contentfulPage(slug: { eq: "about" }) {
      id
      title
      slug
      content {
        content
      }
    }
  }
`;

export default AboutPage;
