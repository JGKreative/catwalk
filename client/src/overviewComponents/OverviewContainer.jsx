import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import appContextDefault from '../appContext';
import api from './ApiController';

const OverviewContainer = () => {
  const { productId } = appContextDefault();
  const [product, setProduct] = useState();
  const [productStyles, setProductStyles] = useState();
  const [currentStyle, setStyle] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const updateImageGallery = (newStyle) => {
    setStyle(newStyle);
  };

  const getTruePrice = () => {
    if (currentStyle.sale_price) {
      setCurrentPrice(currentStyle.sale_price);
    }
    setCurrentPrice(currentStyle.original_price);
  };

  useEffect(() => {
    api.fetchProductById(productId, setProduct);
    api.fetchProductStyles(productId, setProductStyles);
  }, [productId]);

  useEffect(() => {
    if (productStyles) {
      setStyle(productStyles[0]);
    }
  }, [productStyles]);

  useEffect(() => {
    if (currentStyle) {
      getTruePrice();
    }
  }, [currentStyle]);

  if (product && productStyles && currentStyle) {
    return (
      <div
        className="module product-description"
        style={{ display: 'flex' }}
      >
        <ImageGallery
          className="product-description-images"
          images={currentStyle.photos}
          styleId={currentStyle.style_id}
        />
        <ProductInformation
          className="product-description-detail"
          category={product.category}
          title={product.name}
          price={currentPrice}
          productStyles={productStyles}
          setStyle={setStyle}
          updateImageGallery={updateImageGallery}
        />
      </div>
    );
  }
  return null;
};

export default OverviewContainer;
