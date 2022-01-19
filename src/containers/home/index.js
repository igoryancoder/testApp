// @flow

import React from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';
import { PHONE_NUMBER } from '../../navigation/constants';
import { type INavigation } from '../../navigation/constants';

type IProps = {
	navigation: INavigation<>,
};

export const MainScreen = (props: IProps): React.Node => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Button
        title="Press me to start"
        onPress={() => navigation.navigate(PHONE_NUMBER)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})