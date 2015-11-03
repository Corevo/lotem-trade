import React from 'react';

export default class Overview extends React.Component {
    componentWillMount () {
    }
    render () {
        return (
            <h1>Overview</h1>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};
