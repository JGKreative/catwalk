import React, { useState } from 'react';

const Styles = ({ styles }) => {
  const [currentStyle, setStyle] = useState(styles[0]);

  return (
    <div id="product-styles">
      <h3 id="product-style-name" data-value="">{currentStyle.name}</h3>
      <ul>
        {styles.map((style) => (
          <li>
            <button onClick={() => { setStyle(style); }} type="button">
              Set New Style
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
