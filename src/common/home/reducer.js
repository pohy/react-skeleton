/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/8/2016.
 */
import {Record} from 'immutable';

const InitialState = new Record({
    title: 'Ahoy'
});
const initialState = new InitialState;

export default function(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    return state;
}
