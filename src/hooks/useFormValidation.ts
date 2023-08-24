import { useEffect, useState } from "react";

export const useFormValidation = <T>(
    initialState: T,
    validate: (values: T) => Record<keyof T, string>,
    onSubmit: () => void
  ) => {
    const [values, setValues] = useState<T>(initialState);
    const [errors, setErrors] = useState<Record<keyof T, string>|any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        onSubmit();
      }
    }, [errors]);
  
    return {
      values,
      errors,
      handleChange,
      handleSubmit,
    };
  };
  