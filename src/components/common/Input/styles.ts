import { ScaledSheet, s } from 'react-native-size-matters';
import colors from 'src/utils/colors';

export default ScaledSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: '15@s',
  },
  multilineInput: {
    paddingTop: s(13),
  },
  label: {
    color: colors.primaryDark,
    fontWeight: '400',
    fontSize: '12@s',
    paddingTop: '10@s',
    marginBottom: '8@s',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.lightGrey,
  },
  textInput: {
    color: colors.primaryDark,
    height: '48@s',
    fontSize: '14@s',
    fontWeight: '500',
  },
  plainInput: {
    width: '100%',
    paddingHorizontal: '15@s',
  },
  iconInput: {
    width: '85%',
  },
  iconLeft: {
    paddingRight: '15@s',
  },
  iconRight: {
    paddingLeft: '15@s',
  },
  focusedInput: {
    borderColor: colors.secondary,
  },
  inputError: {
    borderColor: colors.danger,
    borderWidth: 1,
  },
  eyeButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15%',
    minWidth: '15%',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '15%',
    minWidth: '15%',
  },
  errorMessage: {
    fontSize: '10@s',
    color: colors.danger,
    marginTop: '5@s',
  },
});
