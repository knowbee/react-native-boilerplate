import { StyleSheet } from 'react-native';

import colors from 'src/utils/colors';

const shadows = [...Array(10).keys()].map((val) => ({
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 2.5 * val },
  shadowOpacity: 0.1,
  shadowRadius: 2.62,
  elevation: val * 1.5,
}));

export default StyleSheet.create({
  shadow1: shadows[0],
  shadow2: shadows[1],
  shadow3: shadows[2],
  shadow4: shadows[3],
  shadow5: shadows[4],
  shadow6: shadows[5],
  shadow7: shadows[6],
  shadow8: shadows[7],
  shadow9: shadows[8],
  shadow10: shadows[9],
});
