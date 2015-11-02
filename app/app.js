import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, ReduxRouter, pushState } from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { createHistory } from 'history';
import { AppBar, IconMenu, LeftNav, FlatButton, IconButton, FontIcon, Paper } from 'material-ui';
let Menu = require('material-ui/lib/menus/menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let MenuDivider = require('material-ui/lib/menus/menu-divider');
import coinApp from './redux/reducers';
import SideMenu from './partials/global/side-menu';
import Overview from './views/overview';

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node
    }
    constructor(props) {
        super(props);
    }
    render () {
        var menuItems = [
            { route: 'home', text: 'Home' },
            { route: 'about', text: 'About' }
        ];
        return (
            <div>
                <AppBar title={`Lotem Coin ${this.props.title}`}
                    iconElementLeft={null} />
                <div style={{
                        clear: 'both'
                    }}>
                <SideMenu />
                <Paper className='col-md-9' style={{
                        borderRadius: '0px',
                        height: '100%'
                    }}>
                    {this.props.children}
                </Paper>
                </div>
            </div>
        );
    }
}

let Appx = connect(
    // Use a selector to subscribe to state
    state => ({
        q: state.router.location.query.q,
        title: state.title
    }),
    // Use an action creator for navigation
    { pushState }
)(App);

let routes = (
    <Route path="/" component={Appx}>
        <IndexRoute component={Overview} />
    </Route>
);

let store = compose(
    reduxReactRouter({ createHistory })
)(createStore)(coinApp);

class Root extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter>
                        {routes}
                    </ReduxRouter>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));
