import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          TehWarrer
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/projects"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: '2rem'
          }}
        >
          Projects
        </Link>
      </h2>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: '2rem'
          }}
        >
          About
        </Link>
      </h2>
    </div>
  </div>
);

export default Header;
