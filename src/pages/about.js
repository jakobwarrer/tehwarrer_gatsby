import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { setImage } from '../state/app';
import ReactMarkdown from 'react-markdown';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data.contentfulPage };
  }
  componentDidMount() {
    this.props.setImage({
      image: this.state.data.background.resolutions.src,
    });
    //console.log(this.state.data.background.resolutions.srcSet);
  }
  render() {
    const data = this.state.data;
    return (
      <div>
        <h1>{data.title}</h1>
        <ReactMarkdown source={data.content.content} />
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  image: state.data,
});

const mapDispatchToProps = {
  setImage,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AboutPage);

export default AppContainer;

export const aboutQuery = graphql`
  query AboutQuery {
    contentfulPage(slug: { eq: "about" }) {
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
