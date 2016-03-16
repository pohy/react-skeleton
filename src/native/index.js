import Component from 'react-pure-render/component';
import React, {AppRegistry, View, Text} from 'react-native';

export default function index() {
    class Root extends Component {
        render() {
            return (
                <View>
                    <Text>React skeleton w3rks!</Text>
                </View>
            );
        }
    }

    AppRegistry.registerComponent('Root', () => Root);
}
