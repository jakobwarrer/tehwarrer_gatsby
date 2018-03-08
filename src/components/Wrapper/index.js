import React from 'react';
import classes from './wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={classes.page}>{children}</div>
);

export default Wrapper;
