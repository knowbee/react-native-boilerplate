import { ScaledSheet } from 'react-native-size-matters';
import colors from 'src/utils/colors';

export default ScaledSheet.create({
  text: {
    color: colors.primaryGrey,
    fontSize: '16@s',
    fontWeight: '400',
    marginBottom: '3@s',
  },
});
