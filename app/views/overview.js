import React from 'react';

class Overview extends React.Component {
    render () {
        return (
            <h1>Overview</h1>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};

module.exports = Overview;
