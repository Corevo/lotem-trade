import React from 'react';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui';

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
                    <TableRowColumn style={{
                        textAlign: 'center'
                    }}>Network Security</TableRowColumn>
                    <TableRowColumn style={{
                        textAlign: 'center'
                    }}>Open ports for production</TableRowColumn>
                    <TableRowColumn style={{
                        textAlign: 'center'
                    }}>100§</TableRowColumn>
                </TableBody>
            </Table>
        );
    }
}
