/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './../common/configureStore';

import {Provider} from 'react-redux';
const store = configureStore();

import {Router, browserHistory} from 'react-router';
import routes from '../common/app/routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
