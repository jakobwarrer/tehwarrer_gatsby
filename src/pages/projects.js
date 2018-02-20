import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Gallery from '../components/Gallery';

const ProjectPage = props => {
  const projects = props.data.allContentfulProject.edges;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project, key) => {
          const node = project.node;
          return (
            <li key={key.toString()}>
              <Link to={`/projects/${node.slug}`}>{node.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProjectPage;

export const projectQuery = graphql`
  query ProjectQuery {
    allContentfulProject {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
