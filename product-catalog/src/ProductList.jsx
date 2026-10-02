import React from 'react';

function ProductList({ onAddToCart }) {
  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'TV', price: 30000 },
    { id: 3, name: 'Refrigerator', price: 40000 }
  ];
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>📦 Product Catalog MFE</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <span>{p.name} - ₹{p.price}</span>
          <button 
            onClick={() => onAddToCart && onAddToCart(p)}
            style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;