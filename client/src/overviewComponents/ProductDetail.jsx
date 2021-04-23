import React from 'react';
import ReviewStars from './ReviewStars';
import SelectStyle from './SelectStyle';
import AddToCart from './AddToCart';
// import sampleData from './sampleData';

const ProductDetail = ({
  category, title, price, styles,
}) => (
  // dynamically render title and price
  <div>
    <ReviewStars />
    <h3>{category}</h3>
    <section className="name-price">
      <h1>{title}</h1>
      <span>{price}</span>
    </section>
    <SelectStyle styles={styles} />
    <AddToCart />
  </div>
);

export default ProductDetail;
