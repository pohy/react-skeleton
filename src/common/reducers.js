/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import {combineReducers} from 'redux';

import homeReducer from './home/reducer';

const reducers = {
    homeReducer
};

export default combineReducers(reducers);
