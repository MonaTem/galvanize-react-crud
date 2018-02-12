import React from 'react';

const ProductsListItem = ({product}) =>
  <React.Fragment>{product.name}: {product.priceInCents}</React.Fragment>;

export default ProductsListItem;
