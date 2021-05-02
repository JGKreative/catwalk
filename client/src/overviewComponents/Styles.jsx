import React from 'react';

const Styles = ({ styles, currentStyle, updateImageGallery }) => {
  const thumbnailBorder = (style) => {
    if (style === currentStyle) {
      return '2px solid blue';
    }
    return 'none';
  };

  return (
    <div
      id="product-styles"
    >
      <h3 id="product-style-name" data-value="">{currentStyle.name}</h3>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'row',
        }}
      >
        {styles.map((style) => (
          <li
            key={style.style_id}
            style={{
              listStyleType: 'none',
              height: '100%',
              width: 'auto',
            }}
          >
            <img
              src={style.photos[0].thumbnail_url}
              alt={style.name}
              title={style.name}
              onClick={() => {
                updateImageGallery(style);
              }}
              style={{
                border: thumbnailBorder(style),
                borderRadius: '50%',
              }}
              width="60px"
              height="auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Styles;
