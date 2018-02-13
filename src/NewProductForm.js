import React from 'react';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      priceInCents: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async createProduct( product ) {
    const options = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    const response = await fetch('http://localhost:8082/api/products', options);
    console.log(response);
    this.setState({ name: '', priceInCents: 0 });
    console.log('Created product and reset state');
    this.props.getProducts();
  }

  handleChange( event ) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting');
    this.createProduct({
      name: this.state.name,
      priceInCents: this.state.priceInCents
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Product name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
          <label>Price (in cents):</label>
          <input type="text" name="priceInCents" value={this.state.priceInCents} onChange={this.handleChange} />
        </div>
        <input type="submit" value="Add product" />
      </form>
    );
  }
}

export default NewProductForm;
