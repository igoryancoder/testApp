import { StyleSheet } from 'react-native';
import { styles } from '../../navigation/constants';

export default StyleSheet.create({
  container: {
		width: '100%',
		height: 150,
		marginTop: 10,
		padding: 10,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	numberContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		height: 40,
		borderBottomColor: '#ccc',
		borderBottomWidth: StyleSheet.hairlineWidth,
		paddingLeft: 15,
		alignItems: 'center'
	},
	input: {
		width: 100,
		paddingLeft: 8,
		fontSize: 18
	},
	codeText: {
		color: 'blue',
		fontSize: 18
	},
	error: {
		...styles.error
	}
});
