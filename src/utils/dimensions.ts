import { Dimensions } from 'react-native';
import { s } from 'react-native-size-matters';

export const dimensions = {
  sm: s(7),
  md: s(14),
  lg: s(28),
  xlg: s(56),
  xxlg: s(90),
} as { [key: string]: number };

export const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const screenWidth = (percentage: number): number => (percentage * screen.width) / 100;
export const screenHeight = (percentage: number): number => (percentage * screen.height) / 100;

export default {
  ...screen,
  ...dimensions,
};
