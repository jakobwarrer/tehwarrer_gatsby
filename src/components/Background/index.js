import React from 'react';
import classes from './background.module.scss';

const Background = ({ bg }) => (
  <div
    style={{ backgroundImage: `url(${bg})` }}
    className={classes.background}
  />
);

export default Background;
