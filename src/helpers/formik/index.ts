import {useFormik} from 'formik';
import {ChangeEvent} from 'react';

export type InputStatusProp = {
  status: string;
};

/**
 * Get text input status prop by field
 */
export const getInputStatusProp = (
  formik: ReturnType<typeof useFormik>,
  fieldName: string,
): InputStatusProp => ({
  status: formik.touched[fieldName] && formik.errors[fieldName] && 'danger',
});

export type InputProps = {
  value: string;
  label: string;
  status: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  setFieldValue: (fieldName: string, value?: any) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean,
  ) => void;
};

/**
 * Get text input props by field
 */
export const getInputProps = (
  formik: ReturnType<typeof useFormik>,
  fieldName: string,
): InputProps => ({
  label: fieldName,
  value: formik.values[fieldName],
  onChangeText: formik.handleChange(fieldName),
  onBlur: formik.handleBlur(fieldName),
  setFieldValue: formik.setFieldValue,
  setFieldTouched: formik.setFieldTouched,
  ...getInputStatusProp(formik, fieldName),
});
