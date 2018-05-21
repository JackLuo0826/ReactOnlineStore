import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // for async operations
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'; // 
import {Provider} from 'react-redux';

import Homepage from 'containers/homepage';
import Products from 'containers/products';
import Product from 'containers/product';
import Basket from 'containers/basket';

import reducers from 'reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Homepage}>
                <Route path='/' component={Products} />
                <Route path="/categories/:id" component={Products} />
            </Route>
            <Route path='/Products/:id' component={Product} />
            <Route path='/basket' component={Basket} />
        </Router>
    </Provider>,
    document.getElementById('root')
)