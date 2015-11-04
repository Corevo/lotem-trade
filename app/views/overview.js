import React from 'react';
import { Paper, Tabs, Tab, FontIcon } from 'material-ui';
import Pie from '../partials/overview/pie';
import Line from '../partials/overview/line-chart';
import Table from '../partials/overview/table';

export default class Overview extends React.Component {
    componentWillMount () {
        this.props.changeTitle('Overview');
    }
    render () {
        return (
            <div>
                <h2>Overview {this.props.account.name}</h2>
                <Paper>
                    <Tabs>
                        <Tab label=<span>
                            <FontIcon className="material-icons" style={{
                                    color: 'inherit'
                                }}>adjust</FontIcon>
                            <span style={{
                                    verticalAlign: 'super',
                                    paddingLeft: '7px'
                                }}>Current Balance</span>
                            </span>>
                            <Pie />
                        </Tab>
                        <Tab label=<span>
                            <FontIcon className="material-icons" style={{
                                    color: 'inherit'
                                }}>trending_up</FontIcon>
                            <span style={{
                                    verticalAlign: 'super',
                                    paddingLeft: '7px'
                                }}>Trending Balance</span>
                            </span>>
                            <Line />
                        </Tab>
                    </Tabs>
                    <hr style={{
                        display: 'block',
                        height: '1px',
                        border: '0',
                        borderTop: '1px solid #ccc',
                        margin: '1em 0',
                        padding: 0
                    }}/>
                <Table transactions={this.props.transactions} />
                </Paper>
            </div>
        );
    }
}

Overview.contextTypes = {
    router: React.PropTypes.func
};
