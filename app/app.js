import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Overview from './views/overview';

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
ReactDOM.render(<Router routes={routes} history={history} />, document.getElementById('app'));
