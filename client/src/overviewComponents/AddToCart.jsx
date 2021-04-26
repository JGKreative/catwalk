import React, { useState } from 'react';

// import ProductDetailWrapper from './productDetailWrapper.jsx';

const AddToCart = ({ sizes }) => {
  const [quantity, setQuantity] = useState(Object.values(sizes)[0].quantity);

  return (
    <div>
      <select id="size-select">
        {Object.values(sizes).map((item) => (
          <option value={item.size}>{item.size}</option>
        ))}
      </select>
      <select>
        {[...Array(quantity)].map((item, index) => (
          <option>{index + 1}</option>
        ))}
      </select>
      <button
        type="button"
        className="item button fluid button-big button-buy"
        // data-not-added-text="You need to select an available size"
        // data-added-text="Item added"
        // data-shopping-bag-text="Shopping bag"
        // data-shopping-bag-failed-text="Oops, something went wrong when adding this item to your shopping bag"
        // data-quantity-text="Quantity"
        // data-color-text="Color"
        // data-size-text="Size"
        // data-default-quantity="1"
        // data-sold-out-text="Out of stock"
        // data-not-added-sold-out-text="All sizes for this color are sold out"
      >
        <span className="icon icon-shopping-bag">ADD TO BAG</span>
      </button>
    </div>
  )
}

console.log('quantity', document.getElementById('size-select'));
export default AddToCart;
