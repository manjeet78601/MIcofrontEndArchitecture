import React, { useState, Suspense } from 'react';

// Diagnostic wrapper that extracts valid functional components regardless of nesting level
const safeLoad = (importFn, mfeName) =>
  React.lazy(async () => {
    const mod = await importFn();
    console.log(`[MF Debug] ${mfeName} raw module:`, mod);

    let Component = mod.default || mod;
    // Unwrap nested default export if Vite plugin double-wrapped it
    if (Component && typeof Component !== 'function' && Component.default) {
      Component = Component.default;
    }

    if (typeof Component !== 'function') {
      console.error(`[MF Debug] ${mfeName} did not resolve to a valid component:`, Component);
      // Return a fallback dummy component so React doesn't crash with Error #525
      return { default: () => <div style={{ color: 'red' }}>Failed to load {mfeName} component</div> };
    }

    return { default: Component };
  });

const ProductList = safeLoad(() => import('product_catalog/ProductList'), 'ProductList');
const CartWidget = safeLoad(() => import('cart_checkout/CartWidget'), 'CartWidget');

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🏬 Main Container Shell (Host)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductList onAddToCart={(p) => setCartItems([...cartItems, p])} />
        </Suspense>

        <Suspense fallback={<div>Loading Cart...</div>}>
          <CartWidget items={cartItems} />
        </Suspense>
      </div>
    </div>
  );
}