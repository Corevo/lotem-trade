import React from 'react';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn, FontIcon} from 'material-ui';

export default class OverviewTable extends React.Component {
    render () {
        return (
            <Table selectable={false}>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan="3" style={{
                            textAlign: 'center'
                        }}>
                            Last Billings
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn style={{
                            textAlign: 'center'
                        }}>Account</TableHeaderColumn>
                        <TableHeaderColumn style={{
                            textAlign: 'center'
                        }}>Service</TableHeaderColumn>
                        <TableHeaderColumn style={{
                            textAlign: 'center'
                        }}>Amount</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.transactions.map((transaction) =>(
                    <TableRow>
                        <TableRowColumn style={{
                            textAlign: 'center'
                        }}>{transaction.account}</TableRowColumn>
                        <TableRowColumn style={{
                            textAlign: 'center'
                        }}>{transaction.desc}</TableRowColumn>
                        <TableRowColumn style={{
                            textAlign: 'center'
                        }}>{transaction.amount}§</TableRowColumn>
                </TableRow>))
                }
                </TableBody>
            </Table>
        );
    }
}
