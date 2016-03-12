/**
 * Created by David Pohan <david.pohan@keyup.eu> on 3/12/2016.
 */
import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as counterActions from '../../common/counter/actions';

class Page extends Component {
    static propTypes = {
        clickCount: PropTypes.number.isRequired,
        increaseClickCount: PropTypes.func.isRequired
    };

    render() {
        const {clickCount, increaseClickCount} = this.props;

        return (
            <div>
                <p>Click count: {clickCount}</p>
                <button onClick={increaseClickCount}>Click me!</button>
            </div>
        );
    }
}

export default connect(state => ({
    clickCount: state.counter.clickCount
}), counterActions)(Page)
