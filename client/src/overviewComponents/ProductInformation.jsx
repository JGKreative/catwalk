import React from 'react';
import ReviewStars from './ReviewStars';
import Styles from './Styles';
import AddToCart from './AddToCart';
// import sampleData from './sampleData';

const ProductInformation = ({
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
    <Styles styles={styles} />
    <AddToCart sizes={styles[0].skus} />
  </div>
);

export default ProductInformation;
