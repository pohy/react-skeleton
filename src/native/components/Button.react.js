import Component from 'react-pure-render/component';
import React, {Text, TouchableHighlight, PropTypes, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#99f',
        padding: 5,
        height: 70,
        borderWidth: 1,
        borderColor: '#aaf',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: '#ddd'
    }
});
const underlayColor = '#aaf';

class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        const {text} = this.props;

        const props = {
            ...this.props,
            style: styles.button,
            underlayColor
        };

        return (
            <TouchableHighlight {...props}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableHighlight>
        );
    }
}

export default Button;
