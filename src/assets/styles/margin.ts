import { StyleSheet } from 'react-native';

import { dimensions } from 'src/utils/dimensions';

export interface AllMargins {
  xsMargin: { margin: number };
  smMargin: { margin: number };
  mdMargin: { margin: number };
  lgMargin: { margin: number };
  xlgMargin: { margin: number };
  xxlgMargin: { margin: number };
}
export interface MarginsTop {
  xsMarginTop: { marginTop: number };
  smMarginTop: { marginTop: number };
  mdMarginTop: { marginTop: number };
  lgMarginTop: { marginTop: number };
  xlgMarginTop: { marginTop: number };
  xxlgMarginTop: { marginTop: number };
}
export interface MarginsBottom {
  xsMarginBottom: { marginBottom: number };
  smMarginBottom: { marginBottom: number };
  mdMarginBottom: { marginBottom: number };
  lgMarginBottom: { marginBottom: number };
  xlgMarginBottom: { marginBottom: number };
  xxlgMarginBottom: { marginBottom: number };
}
export interface MarginsLeft {
  xsMarginLeft: { marginLeft: number };
  smMarginLeft: { marginLeft: number };
  mdMarginLeft: { marginLeft: number };
  lgMarginLeft: { marginLeft: number };
  xlgMarginLeft: { marginLeft: number };
  xxlgMarginLeft: { marginLeft: number };
}
export interface MarginsRight {
  xsMarginRight: { marginRight: number };
  smMarginRight: { marginRight: number };
  mdMarginRight: { marginRight: number };
  lgMarginRight: { marginRight: number };
  xlgMarginRight: { marginRight: number };
  xxlgMarginRight: { marginRight: number };
}
export interface MarginsType extends AllMargins, MarginsTop, MarginsBottom, MarginsLeft, MarginsRight {
  noMargin: { margin: number };
}

export const allMargins = Object.keys(dimensions).map((key: string) => ({
  [`${key}Margin`]: { margin: dimensions[key] },
}));
allMargins.push({ xsMargin: { margin: dimensions.sm / 2 } });

export const topMargins = Object.keys(dimensions).map((key: string) => ({
  [`${key}MarginTop`]: { marginTop: dimensions[key] },
}));
topMargins.push({ xsMarginTop: { marginTop: dimensions.sm / 2 } });

export const bottomMargins = Object.keys(dimensions).map((key: string) => ({
  [`${key}MarginBottom`]: { marginBottom: dimensions[key] },
}));
bottomMargins.push({ xsMarginBottom: { marginBottom: dimensions.sm / 2 } });

export const leftMargins = Object.keys(dimensions).map((key: string) => ({
  [`${key}MarginLeft`]: { marginLeft: dimensions[key] },
}));
leftMargins.push({ xsMarginLeft: { marginLeft: dimensions.sm / 2 } });

export const rightMargins = Object.keys(dimensions).map((key: string) => ({
  [`${key}MarginRight`]: { marginRight: dimensions[key] },
}));
rightMargins.push({ xsMarginRight: { marginRight: dimensions.sm / 2 } });

let styles = {} as MarginsType;

[...allMargins, ...topMargins, ...bottomMargins, ...leftMargins, ...rightMargins].forEach((style) => {
  styles = { ...styles, ...style };
});
styles = { ...styles, noMargin: { margin: 0 } };

export default StyleSheet.create(styles);
