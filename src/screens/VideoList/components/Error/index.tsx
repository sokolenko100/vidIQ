import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const ERROR_TEXT = 'An isError occurred while fetching the videos. Please try again later.';

/**
 * Common error component
 */
const Error = () => {

  return (
    <View style={styles.wrapper}>
      <Text>
        {ERROR_TEXT}
      </Text>
    </View>
  );
};

export default Error;
