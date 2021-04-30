import React from 'react';
import ImageList from './ImageList';

const ImageGallery = ({ images, styleId }) => (
  <div>
    <ImageList id="images-list" images={images} styleId={styleId} />
    <img id="product-images-main" src={images[0].url} alt="" />
  </div>
);

export default ImageGallery;
