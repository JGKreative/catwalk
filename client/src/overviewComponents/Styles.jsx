import React, { useState } from 'react';

const Styles = ({ styles, updateImageGallery }) => {
  const [availStyles, setAvailStyles] = useState(styles);
  const [currentStyle, setCurrentStyle] = useState(availStyles[0]);

  return (
    <div id="product-styles">
      <h3 id="product-style-name" data-value="">{currentStyle.name}</h3>
      <ul>
        {availStyles.map((style) => (
          <li>
            <button onClick={() => { updateImageGallery(style); console.log('new styles ->', style); }} type="button">
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
