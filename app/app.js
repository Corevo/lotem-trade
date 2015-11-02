import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import coinApp from './redux/reducers';
import Overview from './views/overview';

let store = createStore(coinApp);

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>HI</h1>
                {this.props.children}
            </div>
        );
    }
}

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Overview} />
    </Route>
);


let history = createBrowserHistory();
ReactDOM.render(<Provider store={store}>
    <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('app'));
