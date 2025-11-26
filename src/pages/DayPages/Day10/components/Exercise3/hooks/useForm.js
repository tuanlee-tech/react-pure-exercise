import { useCallback, useState } from "react";

// ✅ 1. useForm Hook - Main form management
export function useForm(initialValues = {}, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  // Handle field change
  const handleChange = useCallback(
    (name) => (event) => {
      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;

      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    },
    []
  );

  // Handle field blur
  const handleBlur = useCallback(
    (name) => () => {
      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));

      // Validate single field
      if (validate) {
        const allErrors = validate(values);
        if (allErrors[name]) {
          setErrors((prev) => ({
            ...prev,
            [name]: allErrors[name],
          }));
        }
      }
    },
    [values, validate]
  );

  // Set field value programmatically
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Set field error
  const setFieldError = useCallback((name, error) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  // Set field touched
  const setFieldTouched = useCallback((name, isTouched = true) => {
    setTouched((prev) => ({
      ...prev,
      [name]: isTouched,
    }));
  }, []);

  // Validate all fields
  const validateForm = useCallback(() => {
    if (!validate) return {};

    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return validationErrors;
  }, [values, validate]);

  // Handle submit
  const handleSubmit = useCallback(
    (onSubmit) => async (event) => {
      event?.preventDefault();

      setSubmitCount((prev) => prev + 1);

      // Validate
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      // Submit
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Submit error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateForm]
  );

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitCount(0);
  }, [initialValues]);

  // Reset specific field
  const resetField = useCallback(
    (name) => {
      setValues((prev) => ({
        ...prev,
        [name]: initialValues[name],
      }));
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
      setTouched((prev) => ({
        ...prev,
        [name]: false,
      }));
    },
    [initialValues]
  );

  // Check if form is valid
  const isValid = Object.keys(errors).length === 0;

  // Check if form is dirty
  const isDirty = JSON.stringify(values) !== JSON.stringify(initialValues);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    isDirty,
    submitCount,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    validateForm,
    reset,
    resetField,
  };
}