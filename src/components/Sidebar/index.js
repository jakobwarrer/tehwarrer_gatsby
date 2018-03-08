import React from 'react';
import classes from './sidebar.module.scss';

const Sidebar = ({ children }, props) => (
  <div className={classes.page__info}>{children}</div>
);

export default Sidebar;
