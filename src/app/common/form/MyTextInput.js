import { useField } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    // error itself is string, by !! we make it a boolean, so if there is text, it will be true
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}

export default MyTextInput;
