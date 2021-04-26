import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import SampleData from './SampleData';

// const data = SampleData;
const { product, productStyles } = SampleData;

const OverviewContainer = () => {
  const [currentStyle] = useState(productStyles.results[0]);
  console.log('current style', currentStyle);

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
        price={product.default_price}
        styles={productStyles.results}
      />
    </div>
  );
};

export default OverviewContainer;
