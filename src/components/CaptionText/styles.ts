import {colors} from '@assets/colors';
import {fs, hp, wp} from '@helpers/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  captionText: {
    fontSize: fs(3.5),
    paddingLeft: wp(0.533), // 2
    marginTop: hp(0.616), // 5
    color: colors.danger,
  },
});

export {styles};
