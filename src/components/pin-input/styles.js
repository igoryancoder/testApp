import { StyleSheet, Dimensions } from 'react-native';
import { styles } from '../../navigation/constants';
const WINDOW = Dimensions.get('window');

export default StyleSheet.create({
  container: {
		marginTop: 30,
		height: 150,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	header: {
		fontSize: 22,
		fontWeight: '600'
	},
	error: {
		...styles.error
	},
	pinContainer: {
		width: WINDOW.width - 100,
		alignSelf: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	numberContainer: {
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		width: (WINDOW.width - 140) / 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	errorContainer: {
		height: 20
	}
});
