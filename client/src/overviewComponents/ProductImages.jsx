import React from 'react';
import ImageGallery from './ImageGallery';
// import ProductDetailWrapper from './productDetailWrapper.jsx';

const ProductImages = ({ images, styleId }) => (
  <div>
    <ImageGallery images={images} styleId={styleId} />
    <img id="product-images-main" src={images[0].url} alt="" />
  </div>
);

export default ProductImages;
