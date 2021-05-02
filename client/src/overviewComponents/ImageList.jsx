import React, { useState } from 'react';
// import { setNewMainImage } from './EventHandlers';

const ImageList = ({
  images, styleId, mainImage, updateMainImage,
}) => {
  // when we click on thumbail, set border
  // when we click on diff thumbnail, remove border from old thumbnail, set border to new thumbnail
  // const [selectedThumbnailBorder, setSelectedThumbailBorder] = useState('');

  const setSelectedImage = (event) => {
    console.log('setting selected image');
    updateMainImage(event);
  };

  const thumbnailBorder = (image) => {
    if (image.url === mainImage) {
      return { border: '2px solid blue' };
    }
    return { border: 'none' };
  };

  return (
    <ul
      style={{
        marginTop: '5%',
        position: 'absolute',
        transition: 'all .2s ease-out',
        listStyleType: 'none',
      }}
    >
      {images.map((image, index) => (
        <li key={styleId + index}>
          {/* // consider wrapping in button */}
          <img
            src={image.thumbnail_url}
            alt={image.url}
            width="5%"
            height="5%"
            onClick={(event) => setSelectedImage(event)}
            aria-hidden="true"
            style={thumbnailBorder(image)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
