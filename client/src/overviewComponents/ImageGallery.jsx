import React, { useState } from 'react';
import ImageList from './ImageList';

const ImageGallery = ({
  mainImage, setMainImage, images, styleId,
}) => {
  const updateMainImage = (event) => {
    setMainImage(event.target.alt);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '50%',
        maxWidth: '50%',
        margin: '5%',
      }}
      // object-fit="contain"
    >
      <ImageList
        id="images-list"
        images={images}
        styleId={styleId}
        mainImage={mainImage}
        updateMainImage={updateMainImage}
      />
      <img
        src={mainImage}
        alt=""
        // object-fit="contain"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ImageGallery;
