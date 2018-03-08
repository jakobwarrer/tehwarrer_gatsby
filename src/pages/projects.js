import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Gallery from '../components/Gallery';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Wrapper from '../components/Wrapper';

const ProjectPage = props => {
  const projects = props.data.allContentfulProject.edges;

  return (
    <Wrapper>
      <Sidebar>
        <h1>Projects</h1>
      </Sidebar>
      <Content>
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
      </Content>
    </Wrapper>
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
