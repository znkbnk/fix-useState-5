//incorrect

import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  function addToCart(product) {
    // Mistake 2: Incorrect usage of the spread operator
    setItems(...items, product);
  }

  // Mistake 3: Missing parentheses in the map function
  const renderedItems = items.map(item => {
    return <li>[item]</li>;
  });

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>{renderedItems}</ul>
      <button onClick={addToCart('Product 1')}>Add to Cart</button>
      <button onClick={() => addToCart('Product 2')}>Add to Cart</button>
    <div>
  );
}

