import React from 'react';
import ImageGallery from './ImageGallery';
// import ProductDetailWrapper from './productDetailWrapper.jsx';

const ProductImages = ({ images }) => (
  <div>
    <ImageGallery />
    <img src={images[0].url} alt="" />
  </div>
);

export default ProductImages;
