import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { colors } from '@assets/colors';

/**
 * Common Loading component
 */
const Loading = () => {
  
  return (
      <View
        style={styles.wrapper}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
  );
};

export default Loading;
