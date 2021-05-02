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
        margin: '2%',
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
        height="100%"
        width="auto"
        style={{
          display: 'block',
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default ImageGallery;
