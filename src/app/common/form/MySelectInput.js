import { useField } from 'formik';
import React from 'react';
import { FormField, Label, Select } from 'semantic-ui-react';

function MySelectInput({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
      // error itself is string, by !! we make it a boolean, so if there is text, it will be true
      <FormField error={meta.touched && !!meta.error}>
        <label>{label}</label>
        <Select 
            clearable
            value={field.value || null}
            onChange={(event, data) => helpers.setValue(data.value)}
            onBlur={() => helpers.setTouched(true)}
            {...props}
        />
        {meta.touched && meta.error ? (
          <Label basic color='red'>
            {meta.error}
          </Label>
        ) : null}
      </FormField>
    );
}

export default MySelectInput