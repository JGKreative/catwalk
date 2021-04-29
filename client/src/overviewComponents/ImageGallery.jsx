import React, { useState } from 'react';
import ImageList from './ImageList';
// import ProductDetailWrapper from './productDetailWrapper.jsx';

const ImageGallery = ({ images, styleId }) => {

  return (
    <div>
      <ImageList id="images-list" images={images} styleId={styleId} />
      <img id="product-images-main" src={images[0].url} alt="" />
    </div>
  );
};

export default ImageGallery;
