import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Gallery from '../components/Gallery';

export default class ProjectPage extends React.Component {
  render() {
    const projects = this.props.data.allContentfulProject.edges;
    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {projects.map((project, key) => {
            const node = project.node;
            return (
              <li key={key.toString()}>
                <h4>{node.title}</h4>
                <ReactMarkdown source={node.description.description} />
                <Gallery images={node.gallery} />
              </li>
            );
          })}
        </ul>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export const projectQuery = graphql`
  query ProjectQuery {
    allContentfulProject {
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
