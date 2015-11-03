import React from 'react';
import { Paper } from 'material-ui';
import Pie from '../partials/overview/pie';
import Table from '../partials/overview/table';

export default class Overview extends React.Component {
    componentWillMount () {
        this.props.changeTitle('Overview');
    }
    render () {
        return (
            <div>
                <h1>Overview</h1>
                <Paper>
                    <Pie />
                    <hr style={{
                        display: 'block',
                        height: '1px',
                        border: '0',
                        borderTop: '1px solid #ccc',
                        margin: '1em 0',
                        padding: 0
                    }}/>
                    <Table />
                </Paper>
            </div>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};
