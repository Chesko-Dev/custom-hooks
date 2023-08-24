// useFormValidationExample.tsx
import React from 'react';
import {useFormValidation} from '../hooks/useFormValidation';

interface FormValues {
  username: string;
  email: string;
}

const validateForm = (values: FormValues) => {
  const errors: Record<keyof FormValues, string> = {username: '', email:''};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  return errors;
};

const UseFormValidationExample: React.FC = () => {
  const onSubmit = () => {
    alert('Form submitted successfully!');
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useFormValidation<FormValues>({ username: '', email: '' }, validateForm, onSubmit);

  return (
    <div>
      <h2>useFormValidation Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseFormValidationExample;
