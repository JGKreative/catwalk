import React from 'react';
import ProductImages from './ProductImages';
import ProductDetail from './ProductDetail';
import SampleData from './SampleData';

// const data = SampleData;
const { product, productStyles } = SampleData;

const OverviewContainer = () => (

  <div className="module product-description">
    <ProductImages
      className="product-description-images"
      images={productStyles.results[0].photos}
      styleId={productStyles.results[0].style_id}
      // images={SampleData.productStyles.results}
    />
    <ProductDetail
      className="product-description-detail"
      category={product.category}
      title={product.name}
      price={product.default_price}
      styles={productStyles.results}
    />
  </div>

);

export default OverviewContainer;
