import React from 'react';
import { setNewMainImage } from './EventHandlers';

const ImageGallery = ({ images, styleId }) => (
  <div>
    <ul>
      {images.map((item, index) => (
        <li key={styleId + index}>
          <img src={item.thumbnail_url} alt={item.url} width="5%" height="5%" onClick={setNewMainImage} aria-hidden="true" />
        </li>
      ))}
    </ul>
  </div>
);

export default ImageGallery;
