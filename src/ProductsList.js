import React from 'react';
import ProductsListItem from './ProductsListItem';
import UpdateProductForm from './UpdateProductForm';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  async updateProduct(id, data) {
    console.log('updateProduct method PL')
    const response = await fetch(`http://localhost:8082/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    this.setState({ clicked: null });
    this.props.get();
  }
  
  async handleDelete(id) {
    const response = await fetch(`http://localhost:8082/api/products/${id}`, {method: 'DELETE'});
    this.props.get();
  }

  handleEdit(id) {
    this.setState({ clicked: id });
  }

  render() {
    return (
      <ul>
        {this.props.products.map(product => (
          <li key={product.id}>
            <ProductsListItem
              product={product}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
              {(this.state.clicked === product.id) &&
                <UpdateProductForm
                  product={product}
                  updateProduct={this.updateProduct}
                />
              }
          </li>
        ))}
      </ul>
    )
  }
}

export default ProductsList;
