import React from 'react';
import Chart from 'react-chartjs';
import Pie from '../partials/overview/pie';


export default class Overview extends React.Component {
    componentWillMount () {
        this.props.changeTitle('Overview');
    }
    render () {
        return (
            <div>
                <h1>Overview</h1>
                <Pie />
            </div>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};
