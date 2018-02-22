import React from 'react';
import Link from 'gatsby-link';

const Gallery = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {props.images.map((image, key) => {
        return (
          <div key={key} style={{ width: '33%', height: 'auto' }}>
            <img srcSet={image.resolutions.srcSet} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
