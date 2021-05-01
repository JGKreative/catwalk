import React, { useState } from 'react';
import ImageList from './ImageList';

const ImageGallery = ({ images, styleId }) => {
  const [mainImage, setMainImage] = useState(images[0].url);

  const updateMainImage = (event) => {
    setMainImage(event.target.alt);
  };

  return (
    <div>
      <ImageList id="images-list" images={images} styleId={styleId} mainImage={mainImage} updateMainImage={updateMainImage} />
      <img
        src={mainImage}
        alt=""
        width="50%"
        height="50%"
      />
    </div>
  );
};

export default ImageGallery;
