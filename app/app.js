import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter, ReduxRouter, pushState } from 'redux-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import coinApp from './redux/reducers';
import Overview from './views/overview';
import { createHistory } from 'history';

@connect((state) => ({}))
class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node
    }
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h1>HI</h1>
                {this.props.children}
            </div>
        );
    }
}

let Appx = connect(
    // Use a selector to subscribe to state
    state => ({ q: state.router.location.query.q }),
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
