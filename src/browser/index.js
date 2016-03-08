/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import reducers from '../common/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(reducers);

import {Router, browserHistory, hashHistory} from 'react-router';
import routes from '../common/routes';

import App from './App.react.js';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
