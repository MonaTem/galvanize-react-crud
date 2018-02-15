import React, { Component } from 'react';
import './App.css';
import ProductsList from './ProductsList';
import NewProductForm from './NewProductForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts() {
    const response = await fetch('http://localhost:8082/api/products');
    const json = await response.json();
    console.log(json);
    this.setState({ products: json._embedded.products })
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="App">
        <h2>Products List</h2>
        <NewProductForm getProducts={this.getProducts}/>
        <ProductsList products={this.state.products} get={this.getProducts} />
      </div>
    );
  }
}

export default App;
