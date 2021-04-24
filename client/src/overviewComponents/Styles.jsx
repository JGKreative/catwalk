import React from 'react';

const Styles = ({ styles }) => (
  <div id="product-styles">
    <h3 id="product-style-name" data-value="">{styles[0].name}</h3>
    <ul>
      {styles.map((item) => (
        <li>
          <img src={item.photos[0].thumbnail_url} alt={item.name} title={item.name} width="5%" height="5%" />
        </li>
      ))}
    </ul>
  </div>

);

export default Styles;
