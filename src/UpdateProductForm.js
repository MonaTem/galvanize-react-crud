import React from 'react';

class UpdateProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product.name,
      priceInCents: props.product.priceInCents
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( event ) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Updating');
    this.props.updateProduct(this.props.product.id, this.state);
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
        <input type="submit" value="Update product" />
      </form>
    );
  }
}

export default UpdateProductForm;
