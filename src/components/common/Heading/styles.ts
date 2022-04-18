import { ScaledSheet } from 'react-native-size-matters';
import colors from 'src/utils/colors';

export default ScaledSheet.create({
  text: {
    color: colors.primaryDark,
    fontSize: '18@s',
    fontWeight: '700',
    marginBottom: '3@s',
  },
});
