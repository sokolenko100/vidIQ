import {colors} from '@assets/colors';
import {isIOS} from '@constants/platforms';
import {fs, hp, wp} from '@helpers/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
  },
  passwordView: {
    backgroundColor: colors.lightGray,
    position: 'absolute',
    right: wp(4.0),
  },
  label: {
    marginBottom: fs(1.6),
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: wp(3.2),
    paddingTop: isIOS ? hp(1.478) : hp(1.478),
    paddingBottom: isIOS ? hp(1.478) : hp(0.985),
    width: '100%',
  },

  inputDisabled: {
    backgroundColor: colors.inputBackgroundDisabled,
  },
});

export {styles};
