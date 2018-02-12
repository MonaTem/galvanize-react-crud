import React from 'react';
import ProductsListItem from './ProductsListItem';

const ProductsList = ({products}) => (
  <ul>
    {products.map(product => (
      <li key={product.id}><ProductsListItem product={product} /></li>
    ))}
  </ul>
);

export default ProductsList;
