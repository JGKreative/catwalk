import React from 'react';
import ReviewStars from './ReviewStars';
import SelectStyle from './SelectStyle';
import AddToCart from './AddToCart';

const ProductDetailWrapper = () => (
  // dynamically render title and price
  <div>
    <ReviewStars />
    <h3>Product Category</h3>
    <section className="name-price">
      <h1>Product Title</h1>
      <span>$7.99</span>
    </section>
    <SelectStyle />
    <AddToCart />
  </div>
);

export default ProductDetailWrapper;
