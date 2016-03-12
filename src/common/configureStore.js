/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
import {createStore} from 'redux';
import reducers from '../common/app/reducer';

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState);

    if (module.hot) {
        module.hot.accept('./app/reducer', () => {
            const nextReducer = require('./app/reducer');
            store.replaceReducer(nextReducer.default);
        });
    }

    return store;
}
