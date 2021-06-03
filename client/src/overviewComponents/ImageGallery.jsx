import React, { useState } from 'react';
// import ReactModal from 'react-modal';
import ImageList from './ImageList';

const ImageGallery = ({
  mainImage, setMainImage, images, styleId,
}) => {
  const updateMainImage = (event) => {
    setMainImage(event.target.alt);
  };
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '50%',
        maxWidth: '50%',
        margin: '2%',
        objectFit: 'scale-down',
      }}
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
        // onClick={() => setModalIsOpen(true)}
      />
      {/* <ReactModal isOpen={modalIsOpen} onClick={() => setModalIsOpen(false)}>HEllo</ReactModal> */}
    </div>
  );
};

export default ImageGallery;
