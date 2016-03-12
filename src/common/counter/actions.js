/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/9/2016.
 */
export const INCREASE_CLICK_COUNT = 'counter/increaseClickCount';
export const RESET_CLICK_COUNT = 'counter/resetClickCount';

export function increaseClickCount() {
    return {
        type: INCREASE_CLICK_COUNT
    };
}

export function resetClickCount() {
    return {
        type: RESET_CLICK_COUNT
    };
}
