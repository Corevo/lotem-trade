import React from 'react';
import PayForm from '../partials/shop/payform';

export default class Shop extends React.Component {
  componentWillMount () {
    this.props.changeTitle('Shop');
  }
  render () {
    return (
      <div>
        <h2>Shop</h2>
        <PayForm addTransaction={this.props.addTransaction} />
      </div>
    );
  }
}
