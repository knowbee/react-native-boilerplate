import { StyleSheet } from 'react-native';

import colors from 'src/utils/colors';
import capitalize from 'src/utils/capitalize';

type Borders = {
  borderWidth1: { borderWidth: number };
  borderTopWidth1: { borderTopWidth: number };
  borderLeftWidth1: { borderLeftWidth: number };
  borderRightWidth1: { borderRightWidth: number };
  borderBottomWidth1: { borderBottomWidth: number };
  borderWidth2: { borderWidth: number };
  borderTopWidth2: { borderTopWidth: number };
  borderLeftWidth2: { borderLeftWidth: number };
  borderRightWidth2: { borderRightWidth: number };
  borderBottomWidth2: { borderBottomWidth: number };
  borderWidth3: { borderWidth: number };
  borderTopWidth3: { borderTopWidth: number };
  borderLeftWidth3: { borderLeftWidth: number };
  borderRightWidth3: { borderRightWidth: number };
  borderBottomWidth3: { borderBottomWidth: number };
  borderWidth4: { borderWidth: number };
  borderTopWidth4: { borderTopWidth: number };
  borderLeftWidth4: { borderLeftWidth: number };
  borderRightWidth4: { borderRightWidth: number };
  borderBottomWidth4: { borderBottomWidth: number };
  borderColorBlack: { borderColor: string };
  borderColorLightBlack: { borderColor: string };
  borderColorLight: { borderColor: string };
  borderColorGrey: { borderColor: string };
  borderColorWhite: { borderColor: string };
  borderColorTransparent: { borderColor: string };
  borderColorPrimary: { borderColor: string };
  borderColorDarkPrimary: { borderColor: string };
  borderColorSecondary: { borderColor: string };
  borderColorLightSecondary: { borderColor: string };
  borderColorDanger: { borderColor: string };
  borderColorLightDanger: { borderColor: string };
  borderColorSuccess: { borderColor: string };
  borderColorInfo: { borderColor: string };
  borderColorLightGrey: { borderColor: string };
  borderColorLighterGrey: { borderColor: string };
  borderColorLightRed: { borderColor: string };
  borderColorYellow: { borderColor: string };
  borderColorBlue: { borderColor: string };
};

const borders = [...Array(4).keys()].map((val) => ({
  [`borderWidth${val + 1}`]: { borderWidth: val + 1 },
  [`borderTopWidth${val + 1}`]: { borderTopWidth: val + 1 },
  [`borderLeftWidth${val + 1}`]: { borderLeftWidth: val + 1 },
  [`borderRightWidth${val + 1}`]: { borderRightWidth: val + 1 },
  [`borderBottomWidth${val + 1}`]: { borderBottomWidth: val + 1 },
}));

const borderColors = Object.keys(colors).map((key: string) => ({
  [`borderColor${capitalize(key)}`]: { borderColor: colors[key] },
}));

let styles = {} as Borders;

borders.forEach((style) => {
  styles = { ...styles, ...style };
});
borderColors.forEach((style) => {
  styles = { ...styles, ...style };
});

export default StyleSheet.create(styles);
