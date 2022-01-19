import { StyleSheet, Dimensions } from 'react-native';
const WINDOW = Dimensions.get('window');

export default StyleSheet.create({
    wrapperStyle: {
			backgroundColor: 'gray',
			paddingVertical: 30,
			borderTopRightRadius: 12,
			borderTopLeftRadius: 12,
			position: 'absolute',
			bottom: 50,
			flexWrap: 'wrap',
			flexDirection: 'row',
			justifyContent: 'center'
    },
    buttonStyle: {
			width: WINDOW.width / 3,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center'
    },
    labelStyle: {
			color: 'black',
			fontSize: 23
		},
		close: {
			height: WINDOW.height - 260,
			justifyContent: 'center',
			alignItems: 'center'
		},
		modal: {
			justifyContent: 'center',
			alignItems: 'center'
	},
});
