import React, { useState, useEffect } from 'react';

const AddToCart = ({ skus }) => {
  const [selectedSize, setSelectedSize] = useState('SELECT SIZE');
  const [availQuantity, setAvailQuantity] = useState(null);

  useEffect(() => {
    skus.forEach((sku) => {
      if (sku.size === selectedSize) {
        setAvailQuantity(sku.quantity);
      }
    });
  });

  const generateSizeOptions = () => skus.map((sku, index) => (
    // update key names
    <option key={sku.size + index} value={sku.size}>{sku.size}</option>
  ));

  const generateQuantityOptions = () => {
    if (selectedSize === 'SELECT SIZE') {
      return <option>-</option>;
    }
    if (!availQuantity) {
      return <option>OUT OF STOCK</option>;
    }
    return [...Array(availQuantity)].slice(0, 15).map((item, index) => (
      // update key names
      <option key={item + '-' + index} value={index + 1}>{index + 1}</option>
    ));
  };

  return (
    <div>
      <select id="sizeSelect" onChange={(event) => { setSelectedSize(event.target.value); }}>
        <option>SELECT SIZE</option>
        {generateSizeOptions()}
      </select>
      <select id="quantitySelect">
        {generateQuantityOptions()}
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
