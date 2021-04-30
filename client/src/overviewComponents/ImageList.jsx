import React from 'react';
import { setNewMainImage } from './EventHandlers';

const ImageList = ({ images, styleId }) => (
  <div>
    <ul>
      {images.map((image, index) => (
        <li key={styleId + index}>
          {/* // consider wrapping in button */}
          <img src={image.thumbnail_url} alt={image.url} width="5%" height="5%" onClick={setNewMainImage} aria-hidden="true" />
        </li>
      ))}
    </ul>
  </div>
);

export default ImageList;
