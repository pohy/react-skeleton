import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    title: {
        fontSize: 48,
        marginTop: 12
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    countText: {
        fontSize: 112
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    spacer: {
        flex: 1
    }
});
