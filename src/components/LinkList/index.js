import React from 'react';
import Link from 'gatsby-link';

const LinkList = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkList;
