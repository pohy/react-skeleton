/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import {Record} from 'immutable';
import * as counterActions from './actions';

const InitialState = new Record({
    clickCount: 0
});
const initialState = new InitialState;

const CLICK_COUNT = 'clickCount';

export default function(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    switch (action.type) {
        case counterActions.INCREASE_CLICK_COUNT: {
            return state.update(CLICK_COUNT, count => count + 1);
        }
        case counterActions.RESET_CLICK_COUNT: {
            return state.set(CLICK_COUNT, 0);
        }
        default:
            return state;
    }
}
