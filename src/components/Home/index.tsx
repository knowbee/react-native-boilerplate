import React from 'react';
import { View } from 'react-native';
import Button from 'src/components/common/Button';
import commonStyles from 'src/assets/styles';
import Input from 'src/components/common/Input';
import colors from 'src/utils/colors';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

function Home() {
  return (
    <View style={[commonStyles.lgPadding, commonStyles.lgMarginTop]}>
      <Heading>Common header</Heading>
      <Paragraph>The common paragraph component </Paragraph>
      <Input label="Name" placeholder="Write your name" />
      <Button full title="Click me" onPress={() => null} />
      <Input secureTextEntry error="You have an error" label="Password" placeholder="Write your name" />
      <Button title="Click me" onPress={() => null} />
      <Button outline title="Click me" onPress={() => null} />
      <Button plain title="Click me" onPress={() => null} />
      <Button plain color={colors.primary} title="Click me" onPress={() => null} />
    </View>
  );
}

export default Home;
