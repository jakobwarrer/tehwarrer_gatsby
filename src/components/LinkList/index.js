import React from 'react';
import Link from 'gatsby-link';
import classes from './menu.module.scss';

const LinkList = props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" exact activeClassName={classes.active}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.active} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.active} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link activeClassName={classes.active} to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
