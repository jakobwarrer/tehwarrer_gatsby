import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="TehWarrer - Home of all things TehWarrer"
      meta={[
        { name: 'description', content: 'personal website' },
        { name: 'keywords', content: 'tehwarrer, blog' }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
