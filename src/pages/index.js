import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import Sidebar from '../components/Sidebar';
import Wrapper from '../components/Wrapper';
import Content from '../components/Content';
import { connect } from 'react-redux';
import { setImage } from '../state/app';

class IndexPage extends React.Component {
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
    const data = this.state.data;
    return (
      <Wrapper>
        <Sidebar>
          <h1>{data.title}</h1>
        </Sidebar>
        <Content markdown={data.content.content} />
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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(IndexPage);

export default AppContainer;

export const homeQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "home" }) {
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
