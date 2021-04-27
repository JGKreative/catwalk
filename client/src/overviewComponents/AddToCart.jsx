import React, { useState } from 'react';
// import

// import ProductDetailWrapper from './productDetailWrapper.jsx';

const AddToCart = ({ sizes }) => {
  const [quantity, setQuantity] = useState(Object.values(sizes)[0].quantity);

  const getSizeQuantity = (event) => {
    Object.values(sizes).forEach((item) => {
      if (item.size === event.target.value) {
        setQuantity(item.quantity);
      }
    });
  };

  return (
    <div>
      <select id="size-select" onChange={() => { getSizeQuantity(); }}>
        <option>SELECT SIZE</option>
        {Object.values(sizes).map((item) => (
          <option
            // id={find item key name}
            value={item.size}
          >
            {item.size}
          </option>
        ))}
      </select>
      <select id="quantity-select">
        {[...Array(quantity)].map((item, index) => (
          <option>{index + 1}</option>
        ))}
      </select>
      <button
        type="button"
      >
        <span className="icon icon-shopping-bag">ADD TO BAG</span>
      </button>
    </div>
  );
};

export default AddToCart;
