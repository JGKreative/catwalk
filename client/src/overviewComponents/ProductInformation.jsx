import React from 'react';
// import ReviewStars from './Rev';
import StarRating from '../RatingAndReviews/StarRating';
import Styles from './Styles';
import AddToCart from './AddToCart';

const ProductInformation = ({
  category, title, price, productStyles, updateImageGallery,
}) => (
  <div
    style={{
      margin: '5%',
    }}
  >
    <StarRating />
    <h3>{category}</h3>
    <section className="name-price">
      <h1>{title}</h1>
      <span>{price}</span>
    </section>
    <Styles styles={productStyles} updateImageGallery={updateImageGallery} />
    <AddToCart skus={Object.values(productStyles[0].skus)} />
  </div>
);

export default ProductInformation;
