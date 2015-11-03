import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, ReduxRouter, pushState } from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { createHistory } from 'history';
import { AppBar, Paper } from 'material-ui';
import coinApp from './redux/reducers';
import { changeTitle } from './redux/actions';
import SideMenu from './partials/global/side-menu';
import Overview from './views/overview';
import Shop from './views/shop';

let store = compose(
    reduxReactRouter({ createHistory })
)(createStore)(coinApp);
const dispatch = store.dispatch;

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
        let changeInnerTitle = function(text) {
            dispatch(changeTitle(text));
        };
        return (
            <div>
                <AppBar title={`Lotem Coin ${this.props.title}`}
                    iconElementLeft={null} />
                <div style={{
                        clear: 'both'
                    }}>
                <SideMenu history={this.props.history} />
                <Paper className='col-md-9' style={{
                        borderRadius: '0px',
                        height: '100%'
                    }}>
                    {React.cloneElement(this.props.children, {changeTitle: changeInnerTitle})}
                </Paper>
                </div>
            </div>
        );
    }
}

//

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
        <Route path="/shop" component={Shop} />
    </Route>
);

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
