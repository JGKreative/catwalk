import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ProductInformation from './ProductInformation';
import SampleData from './SampleData';
// import api from './ApiController';

// const data = SampleData;
const { product, productStyles } = SampleData;
// const allProducts = api.fetchAllProducts(() => console.log(response.data));

const OverviewContainer = () => {
  const [styles, setStyles] = useState(productStyles.results);
  const [currentStyle, setStyle] = useState(styles[0]);
  // const [imageGallery, setImageGallery] = useState(currentStyle);

  const updateImageGallery = (newStyle) => {
    setStyle(newStyle);
    console.log('new current style ->', currentStyle);
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
