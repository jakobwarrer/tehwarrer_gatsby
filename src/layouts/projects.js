import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Gallery from '../components/Gallery';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import './index.scss';

class ProjectTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const post = this.props.data.contentfulProject;
    return (
      <Wrapper>
        <Sidebar>
          <h1>{post.title}</h1>
        </Sidebar>
        <Content markdown={post.description.description}>
          <Gallery images={post.gallery} />
          <Link to="/">Go back to the homepage</Link>
        </Content>
      </Wrapper>
    );
  }
}

export default ProjectTemplate;

export const projectQuery = graphql`
  query projectQuery($slug: String!) {
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
        resolutions(width: 400, height: 400) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
