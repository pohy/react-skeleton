/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';
import {connect} from 'react-redux';
import * as counterActions from '../../common/counter/actions';

class Page extends Component {
    static propTypes = {
        clickCount: PropTypes.number.isRequired,
        increaseClickCount: PropTypes.func.isRequired,
        resetClickCount: PropTypes.func.isRequired
    };

    render() {
        const {clickCount, increaseClickCount, resetClickCount} = this.props;

        return (
            <div>
                <p>Click count: {clickCount}</p>
                <button onClick={increaseClickCount}>Click me!</button>
                <button onClick={resetClickCount}>Reset</button>
            </div>
        );
    }
}

export default connect(state => ({
    clickCount: state.counter.clickCount
}), counterActions)(Page);
