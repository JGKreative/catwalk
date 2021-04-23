import React from 'react';

const ImageGallery = ({ images, styleId }) => (
  <div>
    <ul>
      {images.map((item, index) => (
        <li key={styleId + index}>
          <img src={item.thumbnail_url} alt="" />
        </li>
      ))}
    </ul>
  </div>
);

export default ImageGallery;
