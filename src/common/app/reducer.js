/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import {combineReducers} from 'redux';

import counter from './../counter/reducer';

const reducers = combineReducers({
    counter
});

export default reducers;
