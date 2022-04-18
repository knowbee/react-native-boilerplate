import { StyleSheet } from 'react-native';

import flex from './flex';
import align from './align';
import shadow from './shadow';
import margin from './margin';
import padding from './padding';
import border from './border';
import text from './text';
import radius from './radius';
import background from './background';
import size from './size';
import misc from './misc';
import font from './font';
import headerStyles from './headerStyles';

const commonStyles = StyleSheet.create({
  ...flex,
  ...align,
  ...shadow,
  ...margin,
  ...padding,
  ...border,
  ...text,
  ...radius,
  ...background,
  ...size,
  ...misc,
  ...font,
  ...headerStyles,
});

export default commonStyles;
