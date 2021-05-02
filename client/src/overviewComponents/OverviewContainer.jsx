import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import SampleData from './SampleData';
import appContextDefault from '../appContext';
import api from './ApiController'; // for using api data

// const { product, productStyles } = SampleData;
// const allProducts = api.fetchAllProducts(() => console.log(response.data)); // for using api data

const OverviewContainer = () => {
  const { productId } = appContextDefault();
  const [product, setProduct] = useState();
  const [productStyles, setProductStyles] = useState();
  const [currentStyle, setStyle] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const updateImageGallery = (newStyle) => {
    console.log('setting new style');
    setStyle(newStyle);
  };

  const getTruePrice = () => {
    if (currentStyle.sale_price) {
      setCurrentPrice(currentStyle.sale_price);
    }
    setCurrentPrice(currentStyle.original_price);
  };

  useEffect(() => {
    console.log('in use effect');
    api.fetchProductById(productId, setProduct);
    api.fetchProductStyles(productId, setProductStyles);
  }, [productId]);

  useEffect(() => {
    if (productStyles) {
      console.log('setting current style...', productStyles);
      setStyle(productStyles[0]);
    }
  }, [productStyles]);

  useEffect(() => {
    if (currentStyle) {
      getTruePrice();
    }
  }, [currentStyle]);

  if (product && productStyles && currentStyle) {
    console.log('successful');

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
