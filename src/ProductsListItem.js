import React from 'react';

const ProductsListItem = ({product, handleDelete, handleEdit}) => {
  // let editClicked = false;

  return (
    <React.Fragment>
      {product.name}: {product.priceInCents}
      <button className='editItem' onClick={() => {handleEdit(product.id)}}>edit</button>
      <button className='deleteItem' onClick={() => {handleDelete(product.id)}}>delete</button>
    </React.Fragment>
  )
};

export default ProductsListItem;
