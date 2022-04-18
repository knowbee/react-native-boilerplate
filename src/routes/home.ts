import { HOME_SCREEN } from 'src/constants/screens';
import component from 'src/screens/Home';
import HeaderTypes from 'src/types/header';

export default {
  name: HOME_SCREEN,
  title: 'Home',
  headerShown: false,
  component,
} as HeaderTypes;
