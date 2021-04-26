import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import SampleData from './SampleData';

// const data = SampleData;
const { product, productStyles } = SampleData;

const OverviewContainer = () => {
  const [currentStyle] = useState(productStyles.results[0]);

  const getTruePrice = () => {
    if (currentStyle.sale_price) {
      return currentStyle.sale_price;
    }
    return currentStyle.original_price;
  };

  const [currentPrice] = useState(() => getTruePrice());

  return (
    <div className="module product-description">
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
        styles={productStyles.results}
      />
    </div>
  );
};

export default OverviewContainer;
