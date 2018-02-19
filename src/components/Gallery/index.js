import React from 'react';
import Link from 'gatsby-link';

const Gallery = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}
  >
    {props.images.map((image, key) => {
      return (
        <div style={{ width: '33%', height: 'auto' }}>
          <img srcSet={image.resolutions.srcSet} key={key} />
        </div>
      );
    })}
  </div>
);

export default Gallery;
