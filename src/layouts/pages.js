import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { setImage } from '../state/app';
import Gallery from '../components/Gallery';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Wrapper from '../components/Wrapper';
import './index.scss';

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data.contentfulPage };
  }
  componentDidMount() {
    this.props.setImage({
      image: this.state.data.background.resolutions.src
    });
    //console.log(this.state.data.background.resolutions.srcSet);
  }
  render() {
    const post = this.props.data.contentfulPage;
    return (
      <Wrapper>
        <Sidebar>
          <h1>{post.title}</h1>
        </Sidebar>
        <Content markdown={post.content.content} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  image: state.data
});

const mapDispatchToProps = {
  setImage
};

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(
  PageTemplate
);

export default PageContainer;

export const pageQuery = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(contentful_id: { eq: $slug }) {
      id
      title
      slug
      background {
        id
        resolutions(width: 1920) {
          src
        }
      }
      content {
        content
      }
    }
  }
`;
