import React from 'react';
import Link from 'gatsby-link';
import LinkList from '../LinkList';
import classes from './header.module.scss';
console.log(classes);

const Header = () => (
  <div className={classes.header}>
    <div className={classes.header__container}>
      <LinkList />
    </div>
  </div>
);

export default Header;
