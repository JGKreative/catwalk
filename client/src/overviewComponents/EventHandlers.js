const setNewMainImage = (event) => {
  document.getElementById('product-images-main').src = event.target.alt;
};

module.exports = {
  setNewMainImage,
};
