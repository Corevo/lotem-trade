import React from 'react';

export default class Shop extends React.Component {
    componentWillMount () {
        this.props.changeTitle('Shop');
    }
    render () {
        return (
            <h1>Shop</h1>
        );
    }
}
