import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import SampleData from './SampleData';
// import api from './ApiController'; // for using api data

const { product, productStyles } = SampleData;
// const allProducts = api.fetchAllProducts(() => console.log(response.data)); // for using api data

const OverviewContainer = () => {
  const [styles] = useState(productStyles.results);
  const [currentStyle, setStyle] = useState(styles[0]);

  const updateImageGallery = (newStyle) => {
    setStyle(newStyle);
  };

  const getTruePrice = () => {
    if (currentStyle.sale_price) {
      return currentStyle.sale_price;
    }
    return currentStyle.original_price;
  };

  const [currentPrice] = useState(() => getTruePrice());

  return (
    <div className="module product-description" style={{ display: 'flex' }}>
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
        styles={styles}
        setStyle={setStyle}
        updateImageGallery={updateImageGallery}
      />
    </div>
  );
};

export default OverviewContainer;
