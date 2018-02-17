import React from 'react';
import Link from 'gatsby-link';

class ProjectPage extends React.Component {
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
                <p>{node.description.description}</p>
                {node.gallery.map((image, key) => {
                  return <img src={image.file.url} key={key} />;
                })}
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
            file {
              url
            }
          }
        }
      }
    }
  }
`;
export default ProjectPage;
