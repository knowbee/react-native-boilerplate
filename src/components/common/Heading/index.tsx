import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type HeadingProps = {
  children: string;
  style?: Record<string, any>;
};

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Heading;
