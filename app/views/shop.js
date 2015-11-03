import React from 'react';
import PayForm from '../partials/shop/payform';

export default class Shop extends React.Component {
  componentWillMount () {
    this.props.changeTitle('Shop');
  }
  render () {
    return (
      <div>
        <h1>Shop</h1>
        <PayForm />
      </div>
    );
  }
}
