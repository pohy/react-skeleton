import Component from 'react-pure-render/component';
import React, {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './../common/configureStore';
const store = configureStore();

import App from './app/App.react';

export default function index() {
    class Root extends Component {
        render() {
            return (
                <Provider store={store}>
                    <App />
                </Provider>
            );
        }
    }

    AppRegistry.registerComponent('Root', () => Root);
}
