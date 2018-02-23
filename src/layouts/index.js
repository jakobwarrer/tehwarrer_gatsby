import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';
import classes from './main.module.scss';

const TemplateWrapper = ({ children }) => (
  <div className={classes.template}>
    <Helmet
      title="TehWarrer - Home of all things TehWarrer"
      meta={[
        { name: 'description', content: 'personal website' },
        { name: 'keywords', content: 'tehwarrer, blog' }
      ]}
    />
    <Header />
    <div className={classes.template__content}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
