import React from 'react';
// import ReviewStars from './Rev';
import StarRating from '../RatingAndReviews/StarRating';
import Styles from './Styles';
import AddToCart from './AddToCart';
// import sampleData from './sampleData';

const ProductInformation = ({
  category, title, price, styles, updateImageGallery
}) => (
  // dynamically render title and price
  <div>
    {/* <ReviewStars /> */}
    <StarRating />
    <h3>{category}</h3>
    <section className="name-price">
      <h1>{title}</h1>
      <span>{price}</span>
    </section>
    <Styles styles={styles} updateImageGallery={updateImageGallery} />
    <AddToCart skus={styles[0].skus} />
  </div>
);

export default ProductInformation;
