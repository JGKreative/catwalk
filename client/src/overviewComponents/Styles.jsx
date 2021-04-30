import React, { useState } from 'react';

const Styles = ({ styles, updateImageGallery }) => {
  const [currentStyle] = useState(styles[0]);

  return (
    <div id="product-styles">
      <h3 id="product-style-name" data-value="">{currentStyle.name}</h3>
      <ul>
        {styles.map((style) => (
          <li key={style.style_id}>
            <button type="button" onClick={() => { updateImageGallery(style); }}>
              <img
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                title={style.name}
                width="20%"
                height="20%"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Styles;
