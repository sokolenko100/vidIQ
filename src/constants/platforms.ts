import {Platform} from 'react-native';

const NODE_ENV = process.env.NODE_ENV;
const IS_TESTS = NODE_ENV === 'test';
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export {NODE_ENV, IS_TESTS, isAndroid, isIOS};
