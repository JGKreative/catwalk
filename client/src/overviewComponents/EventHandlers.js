const setNewMainImage = (event) => {
  // console.log(event);
  // console.log('main image', document.getElementById('product-images-main'));
  document.getElementById('product-images-main').src = event.target.alt;
};

const setNewStyle = (event) => {
  // set new price
  // set new images (main and gallery)
  // set new inventory (size and quantity)
};

module.exports = {
  setNewMainImage,
  setNewStyle,
};
