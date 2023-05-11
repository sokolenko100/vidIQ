import {StyleSheet} from 'react-native';
import {wp, hp} from '@helpers/responsive';
import {isIOS} from '@constants/platforms';

const styles = StyleSheet.create({
  Button: {
    borderRadius: 33,
    margin: wp(3.4),
    padding: isIOS ? wp(3.4) : wp(2.667),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    height: hp(6.419),
    width: wp(53.333),
  },
});

export {styles};
