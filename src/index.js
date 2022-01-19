/**
 * @format
 * @flow
 */

import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Navigation } from './navigation/navigator';

console.disableYellowBox = true;

export const Application = (): React.Node => (
  <>
    <StatusBar barStyle="dark-content" />
    <Navigation/>
  </>
);
