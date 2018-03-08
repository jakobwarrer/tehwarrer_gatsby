import React from 'react';
import classes from './content.module.scss';
import ReactMarkdown from 'react-markdown';

const Content = ({ children, markdown }) => (
  <div className={classes.page__content}>
    {markdown ? (
      <ReactMarkdown className={classes.page__text} source={markdown} />
    ) : (
      ''
    )}
    {children}
  </div>
);

export default Content;
