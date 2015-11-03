import React from 'react';
import {AppBar, IconMenu, LeftNav, FlatButton, IconButton, FontIcon, Paper} from 'material-ui';
let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');

export default class SideMenu extends React.Component {
    constructor (props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
    }
    navigateTo (link) {
        this.props.history.pushState(null, link);
    }
    render () {
        return (
            <Paper className='col-md-3' zDepth={2} style={{
                    borderRadius: '0px'
                }}>
            <Menu ref="menu" zDepth={0} style={{
                position: 'relative',
                height: '100%',
                width: '280px'
            }}>
                <MenuItem onClick={this.navigateTo.bind(this, '/')} primaryText="Overview" leftIcon=<FontIcon className="material-icons">payment</FontIcon>
                />
            <MenuItem onClick={this.navigateTo.bind(this, '/shop')} primaryText="Shop" leftIcon=<FontIcon className="material-icons">shopping cart</FontIcon>
                />
            </Menu>
            </Paper>
        );
    }
}
