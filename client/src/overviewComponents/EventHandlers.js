const setNewMainImage = (event) => {
  // console.log(event);
  // console.log('main image', document.getElementById('product-images-main'));
  document.getElementById('product-images-main').src = event.target.alt;
};

module.exports = {
  setNewMainImage,
};
