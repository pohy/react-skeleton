/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import React, {Component} from 'react';

import reducers from '../common/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducers);

import Home from './home/Page.react';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}
