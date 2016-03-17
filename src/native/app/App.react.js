import Component from 'react-pure-render/component';
import React, {View, Text, PropTypes, TouchableHighlight} from 'react-native';

import styles from './styles';

import {connect} from 'react-redux';
import * as counterActions from '../../common/counter/actions';

import Button from '../components/Button.react';

class App extends Component {
    static propTypes = {
        clickCount: PropTypes.number,
        increaseClickCount: PropTypes.func,
        resetClickCount: PropTypes.func
    };

    render() {
        const {increaseClickCount, resetClickCount, clickCount} = this.props;

        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.center]}>Clicks:</Text>
                <View style={styles.spacer} />
                <Text style={[styles.center, styles.countText]}>{clickCount}</Text>
                <View style={styles.spacer} />
                <View style={styles.buttonContainer}>
                    <Button onPress={increaseClickCount} text="Click me!" />
                    <Button onPress={resetClickCount} text="Reset" />
                    {/*
                    <TouchableHighlight
                      underlayColor={styles.buttonActive}
                      onPress={increaseClickCount}
                      style={[styles.button, styles.center]}
                    >
                        <Text style={styles.buttonText}>Click me!</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={styles.buttonActive}
                      onPress={resetClickCount}
                      style={[styles.button, styles.center]}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableHighlight>
                    */}
                </View>
            </View>
        );
    }
}

export default connect(state => ({
    clickCount: state.counter.clickCount
}), counterActions)(App);
