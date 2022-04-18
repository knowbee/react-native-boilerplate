import { StyleSheet } from 'react-native';

import colors from 'src/utils/colors';
import { dimensions } from 'src/utils/dimensions';
import capitalize from 'src/utils/capitalize';

export interface FontSize {
  xsText: { fontSize: number };
  smText: { fontSize: number };
  mdText: { fontSize: number };
  lgText: { fontSize: number };
  xlgText: { fontSize: number };
  xxlgText: { fontSize: number };
}
export interface TextColors {
  textColorBlack: { color: string };
  textColorLightBlack: { color: string };
  textColorLight: { color: string };
  textColorGrey: { color: string };
  textColorWhite: { color: string };
  textColorPrimary: { color: string };
  textColorDarkPrimary: { color: string };
  textColorLightSecondary: { color: string };
  textColorDanger: { color: string };
  textColorLightDanger: { color: string };
  textColorSuccess: { color: string };
  textColorInfo: { color: string };
  textColorLightGrey: { color: string };
  textColorLighterGrey: { color: string };
  textColorLightRed: { color: string };
  textColorYellow: { color: string };
  textColorBlue: { color: string };
  textColorSecondary: { color: string };
}

export interface TextType extends FontSize, TextColors {}

export const fontSizes = Object.keys(dimensions).map((key: string) => ({
  [`${key}Text`]: { fontSize: dimensions[key] * 1.5 },
}));

fontSizes.push({ xsText: { fontSize: fontSizes[0].smText.fontSize + 2 } });
fontSizes.push({ smText: { fontSize: fontSizes[0].smText.fontSize + 5 } });

const textColors = Object.keys(colors).map((key: string) => ({
  [`textColor${capitalize(key)}`]: { color: colors[key] },
}));

let styles = {} as TextType;

[...fontSizes, ...textColors].forEach((style) => {
  styles = { ...styles, ...style };
});

export default StyleSheet.create(styles);
