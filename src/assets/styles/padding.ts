import { StyleSheet } from 'react-native';

import { dimensions } from 'src/utils/dimensions';

export interface AllPaddings {
  xsPadding: { padding: number };
  smPadding: { padding: number };
  mdPadding: { padding: number };
  lgPadding: { padding: number };
  xlgPadding: { padding: number };
  xxlgPadding: { padding: number };
}
export interface PaddingsTop {
  xsPaddingTop: { paddingTop: number };
  smPaddingTop: { paddingTop: number };
  mdPaddingTop: { paddingTop: number };
  lgPaddingTop: { paddingTop: number };
  xlgPaddingTop: { paddingTop: number };
  xxlgPaddingTop: { paddingTop: number };
}
export interface PaddingsBottom {
  xsPaddingBottom: { paddingBottom: number };
  smPaddingBottom: { paddingBottom: number };
  mdPaddingBottom: { paddingBottom: number };
  lgPaddingBottom: { paddingBottom: number };
  xlgPaddingBottom: { paddingBottom: number };
  xxlgPaddingBottom: { paddingBottom: number };
}
export interface PaddingsLeft {
  xsPaddingLeft: { paddingLeft: number };
  smPaddingLeft: { paddingLeft: number };
  mdPaddingLeft: { paddingLeft: number };
  lgPaddingLeft: { paddingLeft: number };
  xlgPaddingLeft: { paddingLeft: number };
  xxlgPaddingLeft: { paddingLeft: number };
}
export interface PaddingsRight {
  xsPaddingRight: { paddingRight: number };
  smPaddingRight: { paddingRight: number };
  mdPaddingRight: { paddingRight: number };
  lgPaddingRight: { paddingRight: number };
  xlgPaddingRight: { paddingRight: number };
  xxlgPaddingRight: { paddingRight: number };
}
export interface PaddingsType extends AllPaddings, PaddingsTop, PaddingsBottom, PaddingsLeft, PaddingsRight {
  noPadding: { padding: number };
}

export const allPaddings = Object.keys(dimensions).map((key: string) => ({
  [`${key}Padding`]: { padding: dimensions[key] },
}));
allPaddings.push({ xsPadding: { padding: dimensions.sm / 2 } });

export const topPaddings = Object.keys(dimensions).map((key: string) => ({
  [`${key}PaddingTop`]: { paddingTop: dimensions[key] },
}));
topPaddings.push({ xsPaddingTop: { paddingTop: dimensions.sm / 2 } });

export const bottomPaddings = Object.keys(dimensions).map((key: string) => ({
  [`${key}PaddingBottom`]: { paddingBottom: dimensions[key] },
}));
bottomPaddings.push({ xsPaddingBottom: { paddingBottom: dimensions.sm / 2 } });

export const leftPaddings = Object.keys(dimensions).map((key: string) => ({
  [`${key}PaddingLeft`]: { paddingLeft: dimensions[key] },
}));
leftPaddings.push({ xsPaddingLeft: { paddingLeft: dimensions.sm / 2 } });

export const rightPaddings = Object.keys(dimensions).map((key: string) => ({
  [`${key}PaddingRight`]: { paddingRight: dimensions[key] },
}));
rightPaddings.push({ xsPaddingRight: { paddingRight: dimensions.sm / 2 } });

let styles = {} as PaddingsType;

[...allPaddings, ...topPaddings, ...bottomPaddings, ...leftPaddings, ...rightPaddings].forEach((style) => {
  styles = { ...styles, ...style };
});

styles = { ...styles, noPadding: { padding: 0 } };

export default StyleSheet.create(styles);
