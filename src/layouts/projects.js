import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Gallery from '../components/Gallery';

import './index.scss';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const post = this.props.data.contentfulProject;
    return (
      <div>
        <h1>{post.title}</h1>
        <ReactMarkdown source={post.description.description} />
        <Gallery images={post.gallery} />
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulProject(contentful_id: { eq: $slug }) {
      id
      contentful_id
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
`;
