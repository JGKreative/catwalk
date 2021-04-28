import React, { useState } from 'react';
// import

// import ProductDetailWrapper from './productDetailWrapper.jsx';

const AddToCart = ({ skus }) => {
  const [selectedSku, setSelectedSku] = useState(Object.values(skus)[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [availQuantity, setAvailQuantity] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const generateQuantityOption = () => {
    Object.values(skus).forEach((sku) => {
      if (sku.size === selectedSize) {
        setAvailQuantity(sku.quantity);
      }
    });
  };

  return (
    <div>
      <select id="size-select" onChange={(event) => { setSelectedSize(event.target.value); generateQuantityOption(); }}>
        <option>SELECT SIZE</option>
        {Object.values(skus).map((sku) => (
          <option value={sku.size}>{sku.size}</option>
        ))}
      </select>
      <select id="quantity-select">
        {[...Array(availQuantity)].slice(0, 15).map((item, index) => (
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
