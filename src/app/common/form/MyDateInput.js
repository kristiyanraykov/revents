import 'react-datepicker/dist/react-datepicker.css'
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker'

function MyDateInput({ label, ...props }) {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(props);
    return (
      // error itself is string, by !! we make it a boolean, so if there is text, it will be true
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null} 
            onChange={value => setFieldValue(field.name, value)}
        />
        {meta.touched && meta.error ? (
          <Label basic color='red'>
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    );
}

export default MyDateInput