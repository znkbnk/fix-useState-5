//correct

import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  function addItemToCart(product) {
    setItems([...items, product]);
  }

  const renderedItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>{renderedItems}</ul>
      <button onClick={() => addItemToCart('Product 1')}>Add Product 1 to Cart</button>
      <button onClick={() => addItemToCart('Product 2')}>Add Product 2 to Cart</button>
    </div>
  );
}

export default ShoppingCart;
