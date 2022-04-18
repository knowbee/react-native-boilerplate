import React, { ForwardedRef, useState } from 'react';
import { View, TextInput, Text, KeyboardTypeOptions, SafeAreaView, ActivityIndicator } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { s } from 'react-native-size-matters';

import colors from 'src/utils/colors';
import styles from './styles';
import EyeOpenIcon from 'src/assets/icons/eye-open.svg';
import EyeCloseIcon from 'src/assets/icons/eye-close.svg';

type IconPosition = 'right' | 'left';

type InputProps = {
  label?: string;
  labelStyle?: Record<string, any> | any;
  placeholder?: string;
  testID?: string;
  value?: string | null;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  inputStyles?: { [key: string]: any } | [];
  errorWrapperStyle?: { [key: string]: any } | [];
  iconStyles?: { [key: string]: any | [] };
  mainContainerStyle?: { [key: string]: any } | [];
  inputWrapperStyles?: { [key: string]: any } | [];
  iconStyle?: { [key: string]: any } | [];
  icon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconPosition?: IconPosition;
  error?: string | null | boolean;
  maxLength?: number;
  disabled?: boolean;
  loading?: boolean;
  multiline?: true | undefined;
  onSubmitEditing?: () => void;
  onKeyPress?: () => void;
  onChange?: () => void;
  blurOnSubmit?: boolean;
  returnKeyLabel?: string;
  returnKeyType?:
    | 'default'
    | 'none'
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'previous'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call'
    | undefined;
};

const Input = React.forwardRef(
  (
    {
      label,
      placeholder,
      testID,
      value,
      onChangeText,
      onFocus,
      disabled,

      onBlur,
      keyboardType,
      secureTextEntry,
      inputStyles,
      inputWrapperStyles,
      icon,
      iconPosition,
      error,
      maxLength,
      labelStyle,
      mainContainerStyle,
      errorWrapperStyle,
      iconStyle,
      onSubmitEditing,
      onKeyPress,
      multiline,
      returnKeyLabel,
      returnKeyType,
      blurOnSubmit,
      onChange,
      loading,
    }: InputProps,
    ref: ForwardedRef<TextInput>,
  ): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [inputHeight, setInputHeight] = useState<number | undefined>();
    const [passwordVisible, setPasswordVisibility] = useState<boolean | false>(secureTextEntry || false);

    return (
      <SafeAreaView style={[styles.wrapper, mainContainerStyle]}>
        {label ? <Text style={[[styles.label, labelStyle]]}>{label}</Text> : null}
        <View
          style={[
            styles.inputWrapper,
            error ? [styles.inputError, errorWrapperStyle] : null,
            ...(inputWrapperStyles
              ? (Array.isArray(inputWrapperStyles) && inputWrapperStyles) || [inputWrapperStyles]
              : []),
          ]}
        >
          {icon && iconPosition !== 'right' && <View style={(styles.icon, iconStyle)}>{icon}</View>}

          <TextInput
            returnKeyType={returnKeyType || 'done'}
            returnKeyLabel={returnKeyLabel}
            maxLength={maxLength}
            multiline={multiline}
            onKeyPress={onKeyPress}
            ref={ref}
            style={[
              styles.textInput,
              multiline ? styles.multilineInput : null,
              focused ? styles.focusedInput : null,
              icon && iconPosition !== 'right' ? styles.iconLeft : styles.iconRight,
              !icon && !secureTextEntry ? styles.plainInput : styles.iconInput,
              ...(inputStyles ? (Array.isArray(inputStyles) && inputStyles) || [inputStyles] : []),
              multiline && inputHeight
                ? {
                    height: s(Math.max(42, Math.min(100, inputHeight))),
                    paddingVertical: s(10),
                  }
                : {},
            ]}
            placeholderTextColor={colors.primaryGrey}
            placeholder={placeholder}
            onFocus={(): void => {
              setFocused(false);
              if (typeof onFocus === 'function') {
                onFocus();
              }
            }}
            value={value}
            autoCapitalize="none"
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            editable={!disabled}
            secureTextEntry={passwordVisible}
            onBlur={onBlur}
            onSubmitEditing={onSubmitEditing}
            onContentSizeChange={(e) =>
              e.nativeEvent?.contentSize?.height && setInputHeight(e.nativeEvent?.contentSize?.height)
            }
            onChange={onChange}
            blurOnSubmit={blurOnSubmit}
            testID={testID}
          />

          {!loading && icon && iconPosition === 'right' && <View style={styles.icon}>{icon}</View>}

          {loading && (
            <View style={styles.icon}>
              <ActivityIndicator color={colors.secondary} size={25} />
            </View>
          )}

          {!loading && secureTextEntry && (
            <TouchableOpacity
              containerStyle={[styles.eyeButton]}
              onPress={(): void => setPasswordVisibility(!passwordVisible)}
            >
              {passwordVisible && <EyeOpenIcon width={s(20)} height={s(20)} />}
              {!passwordVisible && <EyeCloseIcon width={s(20)} height={s(20)} />}
            </TouchableOpacity>
          )}
        </View>
        {error && typeof error === 'string' ? <Text style={styles.errorMessage}>{error}</Text> : null}
      </SafeAreaView>
    );
  },
);

export default Input;
