import Component from 'react-pure-render/component';
import React, {View, Text, PropTypes, TouchableHighlight} from 'react-native';

import {connect} from 'react-redux';
import * as counterActions from '../../common/counter/actions';

class App extends Component {
    static propTypes = {
        clickCount: PropTypes.number,
        increaseClickCount: PropTypes.func,
        resetClickCount: PropTypes.func
    };

    render() {
        const {increaseClickCount, resetClickCount, clickCount} = this.props;

        return (
            <View>
                <Text>Click count: {clickCount}</Text>
                <TouchableHighlight onPress={increaseClickCount}>
                    <Text>Click me!</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={resetClickCount}>
                    <Text>Reset</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default connect(state => ({
    clickCount: state.counter.clickCount
}), counterActions)(App);
