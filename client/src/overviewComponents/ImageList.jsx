import React from 'react';
// import { setNewMainImage } from './EventHandlers';

const ImageList = ({
  images, styleId, mainImage, updateMainImage,
}) => {
  const setSelectedImage = (event) => {
    updateMainImage(event);
  };

  const thumbnailBorder = (image) => {
    if (image.url === mainImage) {
      return '2px solid blue';
    }
    return 'none';
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
            width="15%"
            height="auto"
            onClick={(event) => setSelectedImage(event)}
            aria-hidden="true"
            style={{
              border: thumbnailBorder(image),
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
