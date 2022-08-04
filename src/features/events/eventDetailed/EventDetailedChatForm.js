import { Field, Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'semantic-ui-react';
import { addEventChatComment } from '../../../app/firestore/firebaseService';
import * as Yup from 'yup';

function EventDetailedChatForm({ eventId, parentId, closeForm }) {
  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={Yup.object({
        comment: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await addEventChatComment(eventId, {...values, parentId});
          resetForm();
        } catch (e) {
          toast.error(e.message);
        } finally {
          setSubmitting(false);
          closeForm({
              open: false,
              commentId: null
          })
        }
      }}
    >
      {({ isSubmitting, handleSubmit, isValid }) => (
        <Form className='ui form'>
          <Field name='comment'>
            {({ field }) => (
              <div style={{ position: 'relative' }}>
                <Loader active={isSubmitting} />
                <textarea
                  rows='2'
                  {...field}
                  placeholder='Enter your comment (Enter to submit, SHIT + Enter for new line)'
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.shiftKey) {
                      return;
                    }
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      isValid && handleSubmit();
                    }
                  }}
                ></textarea>
              </div>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
}

export default EventDetailedChatForm;
