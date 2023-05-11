import React from 'react';
import {Text, TouchableOpacityProps, Pressable, View} from 'react-native';
import {styles} from './styles';
import {colors} from '@assets/colors';

interface IButton {
  onPress: () => void;
  label: string;
}

export type ButtonProps = IButton & TouchableOpacityProps;

/**
 * Common button component
 */
const Button: ButtonProps = ({onPress, label}) => {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <View
          style={[
            styles.Button,
            {
              backgroundColor: pressed ? colors.primaryActive : colors.primary,
            },
          ]}>
          <Text style={[{color: pressed ? colors.primary : colors.white}]}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
