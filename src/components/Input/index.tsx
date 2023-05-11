import React, {useCallback, useMemo, useState, FC} from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {InputStatuses} from './constants';
import {colors} from '@assets/colors';

interface IInput {
  label?: string;
  status?: string;
  caption?: JSX.Element;
  disabled?: boolean;
  isPassword?: boolean;
  showError?: boolean;
  trimStart?: boolean;
  trimEnd?: boolean;
  forbiddenСharacters?: false | RegExp;
}

type Props = TextInputProps & IInput;

/**
 * Common custom text input
 */
const Input: FC<Props> = ({
  label,
  status,
  onBlur,
  caption,
  disabled,
  secureTextEntry = false,
  isPassword,
  showError = true,
  returnKeyType,
  trimStart = true,
  trimEnd = false,
  onChangeText,
  forbiddenСharacters = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  /**
   * Handle on focus input event
   */
  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  /**
   * Handle on blur input event
   */
  const handleOnBlur = useCallback(
    (e) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  /**
   * Toggle secure text input
   */
  const toggleSecureEntry = useCallback(() => {
    setIsSecureTextEntry((prevSecureTextEntry) => !prevSecureTextEntry);
  }, []);

  /**
   * Trim text input
   */
  const onChangeTextInput = useCallback(
    (text) => {
      let value = forbiddenСharacters
        ? text.replace(forbiddenСharacters, '')
        : text;
      value = trimEnd ? value.trimEnd() : value;
      onChangeText(trimStart ? value.trimStart() : value);
    },
    [onChangeText, trimStart, trimEnd, forbiddenСharacters],
  );

  const statusDanger = useMemo(
    () => status === InputStatuses.DANGER && showError,
    [status, showError],
  );

  const borderColor = useMemo(() => {
    if (statusDanger) {
      return colors.danger;
    }

    if (isFocused) {
      return colors.primary;
    }

    return colors.defaultColor;
  }, [isFocused, statusDanger]);

  const inputStyles = useMemo(
    () => [styles.input, disabled && styles.inputDisabled],
    [disabled],
  );

  return (
    <>
      {label && <Text style={styles.label}> {label}</Text>}
      <View style={[styles.textInputContainer, {borderColor}]}>
        <TextInput
          {...props}
          secureTextEntry={isSecureTextEntry}
          editable={!disabled}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          style={inputStyles}
          returnKeyType={returnKeyType}
          placeholderTextColor={colors.textHint}
          onChangeText={onChangeTextInput}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.passwordView}
            onPress={toggleSecureEntry}
          />
        )}
        {statusDanger && <View>{caption}</View>}
      </View>
    </>
  );
};

export default Input;
