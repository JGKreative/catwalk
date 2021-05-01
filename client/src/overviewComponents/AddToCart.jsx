import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const AddToCart = ({ skus }) => {
  const [selectedSize, setSelectedSize] = useState('SELECT SIZE');
  const [quantityOptions, setQuantityOptions] = useState([]);

  useEffect(() => {
    skus.forEach((sku) => {
      if (sku.size === selectedSize) {
        if (!sku.quantity) {
          setQuantityOptions([{ label: 'OUT OF STOCK', value: 'OUT OF STOCK' }]);
        } else {
          setQuantityOptions([...Array(sku.quantity)]
            .slice(0, 15)
            .map((item, index) => ({ label: index + 1, value: index + 1 })));
        }
      }
    });
  }, [selectedSize]);

  const sizeOptions = skus.map((sku) => ({ label: sku.size, value: sku.size }));

  return (
    <div>
      <Select options={sizeOptions} placeholder="SELECT SIZE" onChange={(event) => setSelectedSize(event.value)} />
      <Select options={quantityOptions} placeholder="-" />
      <button
        type="button"
      >
        <span className="icon icon-shopping-bag">ADD TO BAG</span>
      </button>
    </div>
  );
};

export default AddToCart;
