import React, {memo} from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './styles';

interface ICaptionTextProps {
  formik: any;
  field: string;
}

const CaptionText: React.FC<TextProps & ICaptionTextProps> = ({
  formik,
  field,
}) => {
  return (
    <Text style={[styles.captionText]}>
      {formik.touched[field] && formik.errors[field]}
    </Text>
  );
};

export default memo(CaptionText);
