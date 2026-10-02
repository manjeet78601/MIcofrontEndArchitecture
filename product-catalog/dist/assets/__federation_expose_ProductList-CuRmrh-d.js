import { importShared } from './__federation_fn_import-D5iOZzBg.js';
import { r as reactExports } from './index-Dm_EQZZA.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

await importShared('react');

function ProductList({ onAddToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 5e4 },
    { id: 2, name: "Phone", price: 2e4 },
    { id: 3, name: "TV", price: 3e4 },
    { id: 3, name: "Refrigerator", price: 4e4 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📦 Product Catalog MFE" }),
    products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "10px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        p.name,
        " - ₹",
        p.price
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => onAddToCart && onAddToCart(p),
          style: { marginLeft: "10px", padding: "5px 10px", cursor: "pointer" },
          children: "Add to Cart"
        }
      )
    ] }, p.id))
  ] });
}

export { ProductList as default, jsxRuntimeExports as j };
