//@flow

import React from 'react';
import {
	TouchableOpacity,
	Text
} from 'react-native';
import { texts_data } from '../../navigation/constants';
import styles from './styles';

type IProps = {
	onPress?: Function,
	text: string
};

export const Button = (props: IProps): React.Node => {
	const { onPress, text } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
