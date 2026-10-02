import React from 'react';

function CartWidget({ items = [] }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>🛒 Cart MFE</h2>
      <p>Total Items: {items.length}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartWidget;