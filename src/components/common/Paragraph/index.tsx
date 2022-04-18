import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type ParagraphProps = {
  children: string;
  style?: Record<string, any>;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Paragraph;
