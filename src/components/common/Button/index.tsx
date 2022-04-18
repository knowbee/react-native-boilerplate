import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { s } from 'react-native-size-matters';
import commonStyles from 'src/assets/styles';
import colors from 'src/utils/colors';
import styles from './styles';

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
  icon?: Element;
  full?: boolean;
  outline?: boolean;
  plain?: boolean;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ onPress, disabled, title, loading, icon, full, outline, plain, color }) => {
  const bgStyles = () => {
    if (disabled) {
      return commonStyles.bgColorLightPrimary;
    }
    if (outline || plain) {
      return commonStyles.bgColorTransparent;
    }
    return commonStyles.bgColorPrimary;
  };

  const borderStyles = [
    commonStyles.borderWidth1,
    !plain ? commonStyles.borderColorPrimary : commonStyles.borderColorTransparent,
  ];

  const pdStyles = commonStyles.mdPadding;
  const wStyles = { width: full ? '100%' : s(152) };
  const colorStyles = {
    color: outline || plain ? colors.primaryDark : colors.white,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        commonStyles.flexRow,
        commonStyles.justifyContentCenter,
        commonStyles.alignItemsCenter,
        commonStyles.smMarginBottom,
        commonStyles.borderRadius6,
        pdStyles,
        wStyles,
        bgStyles(),
        ...borderStyles,
      ]}
    >
      {!loading && icon && <View style={styles.iconStyle}>{icon}</View>}
      {!loading && (
        <Text style={[styles.textStyle, colorStyles, color ? { color } : {}, { fontSize: s(14) }]}>{title}</Text>
      )}
      {loading && <ActivityIndicator size="small" color={colors.white} />}
    </TouchableOpacity>
  );
};

export default Button;
