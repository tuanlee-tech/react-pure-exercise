import { useState } from "react";
import ExerciseCard from "../../../../../components/ExerciseCard.jsx";
import DynamicFieldsForm from "./components/DynamicFieldsForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import "./styles.css";
export default function Exercise3() {
  const [activeDemo, setActiveDemo] = useState("registration");
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Custom Hooks cho Form Management" />

      <ExerciseCard.Description>
        {`
// TODO: useForm hook với validation

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: handleChange
  // - Update value
  // - Mark as touched
  // - Clear error for field

  // TODO: handleBlur
  // - Mark as touched
  // - Validate field

  // TODO: handleSubmit
  // - Validate all fields
  // - If valid, call onSubmit
  // - Handle async submission

  // TODO: Reset form

  // TODO: Set field value programmatically

  const handleChange = (name) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleBlur = (name) => () => {
    setTouched(prev => ({ ...prev, [name]: true }));
    if (validate) {
      const fieldErrors = validate({ ...values });
      if (fieldErrors[name]) {
        setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
      }
    }
  };

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    
    // Validate all
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset
  };
}

// TODO: useField hook cho individual fields
function useField(name, formContext) {
  // TODO: Return field props và meta
  // - value, onChange, onBlur
  // - error, touched
}

// Usage
function RegistrationForm() {
  const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Email là bắt buộc';
    } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!values.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    } else if (values.password.length < 6) {
      errors.password = 'Mật khẩu phải ≥ 6 ký tự';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }

    return errors;
  };

  const form = useForm(
    { email: '', password: '', confirmPassword: '' },
    validate
  );

  const onSubmit = async (values) => {
    console.log('Submitting:', values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Đăng ký thành công!');
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={form.values.email}
          onChange={form.handleChange('email')}
          onBlur={form.handleBlur('email')}
        />
        {form.touched.email && form.errors.email && (
          <span className="error">{form.errors.email}</span>
        )}
      </div>

      <div>
        <label>Mật khẩu:</label>
        <input
          type="password"
          value={form.values.password}
          onChange={form.handleChange('password')}
          onBlur={form.handleBlur('password')}
        />
        {form.touched.password && form.errors.password && (
          <span className="error">{form.errors.password}</span>
        )}
      </div>

      <div>
        <label>Xác nhận mật khẩu:</label>
        <input
          type="password"
          value={form.values.confirmPassword}
          onChange={form.handleChange('confirmPassword')}
          onBlur={form.handleBlur('confirmPassword')}
        />
        {form.touched.confirmPassword && form.errors.confirmPassword && (
          <span className="error">{form.errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" disabled={form.isSubmitting}>
        {form.isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
      </button>
    </form>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="app">
          <h1>🎨 Custom Form Hooks</h1>
          <p className="subtitle">Powerful form management with custom hooks</p>

          <div className="tabs">
            <button
              className={activeDemo === "registration" ? "active" : ""}
              onClick={() => setActiveDemo("registration")}
            >
              Registration Form
            </button>
            <button
              className={activeDemo === "dynamic" ? "active" : ""}
              onClick={() => setActiveDemo("dynamic")}
            >
              Dynamic Fields
            </button>
          </div>

          <div className="demo-content">
            {activeDemo === "registration" && <RegistrationForm />}
            {activeDemo === "dynamic" && <DynamicFieldsForm />}
          </div>
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// ✅ 1. useForm Hook - Main form management
export function useForm(initialValues = {}, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  // Handle field change
  const handleChange = useCallback((name) => (event) => {
    const value = event.target.type === 'checkbox' 
      ? event.target.checked 
      : event.target.value;

    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  // Handle field blur
  const handleBlur = useCallback((name) => () => {
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate single field
    if (validate) {
      const allErrors = validate(values);
      if (allErrors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: allErrors[name]
        }));
      }
    }
  }, [values, validate]);

  // Set field value programmatically
  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Set field error
  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  // Set field touched
  const setFieldTouched = useCallback((name, isTouched = true) => {
    setTouched(prev => ({
      ...prev,
      [name]: isTouched
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
  const handleSubmit = useCallback((onSubmit) => async (event) => {
    event?.preventDefault();
    
    setSubmitCount(prev => prev + 1);
    
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
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validateForm]);

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitCount(0);
  }, [initialValues]);

  // Reset specific field
  const resetField = useCallback((name) => {
    setValues(prev => ({
      ...prev,
      [name]: initialValues[name]
    }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    setTouched(prev => ({
      ...prev,
      [name]: false
    }));
  }, [initialValues]);

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
    resetField
  };
}


// ✅ 2. useFieldArray Hook - Dynamic field arrays
export function useFieldArray(name, formContext) {
  const { values, setFieldValue } = formContext;
  const fields = useMemo(() => {
    return values[name] || [];
  }, [values, name]);

  const placeHolderTitle = s => s.slice(0, -1)[0].toUpperCase() + s.slice(1);

  const push = useCallback(
    (item) => {
      const newTitle = item || \`\${placeHolderTitle(name)} \${fields.length + 1}\`
      setFieldValue(name, [...fields, newTitle]);
    },
    [fields, name, setFieldValue]
  );

  const remove = useCallback((index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFieldValue(name, newFields);
  }, [fields, name, setFieldValue]);

  const insert = useCallback((index, item) => {
    const newFields = [...fields];
    newFields.splice(index, 0, item);
    setFieldValue(name, newFields);
  }, [fields, name, setFieldValue]);

  const swap = useCallback((indexA, indexB) => {
    const newFields = [...fields];
    [newFields[indexA], newFields[indexB]] = [newFields[indexB], newFields[indexA]];
    setFieldValue(name, newFields);
  }, [fields, name, setFieldValue]);

  const move = useCallback((from, to) => {
    const newFields = [...fields];
    const [item] = newFields.splice(from, 1);
    newFields.splice(to, 0, item);
    setFieldValue(name, newFields);
  }, [fields, name, setFieldValue]);

  return {
    fields,
    push,
    remove,
    insert,
    swap,
    move
  };
}


// ==========================================
// DEMO COMPONENTS
// ==========================================

// Demo 1: Simple Registration Form
export function RegistrationForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email là bắt buộc';
    } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!values.username) {
      errors.username = 'Username là bắt buộc';
    } else if (values.username.length < 3) {
      errors.username = 'Username phải ≥ 3 ký tự';
    }

    if (!values.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    } else if (values.password.length < 6) {
      errors.password = 'Mật khẩu phải ≥ 6 ký tự';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }

    if (!values.terms) {
      errors.terms = 'Bạn phải đồng ý với điều khoản';
    }

    return errors;
  };

  const form = useForm(
    {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      terms: false
    },
    validate
  );

  const onSubmit = async (values) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', values);
    alert('✅ Đăng ký thành công!');
    form.reset();
  };

  return (
    <div className="form-container">
      <h2>📝 Registration Form</h2>
      
      <div className="form-wrapper">
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={form.values.email}
            onChange={form.handleChange('email')}
            onBlur={form.handleBlur('email')}
            className={form.touched.email && form.errors.email ? 'error' : ''}
          />
          {form.touched.email && form.errors.email && (
            <span className="error-message">{form.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            value={form.values.username}
            onChange={form.handleChange('username')}
            onBlur={form.handleBlur('username')}
            className={form.touched.username && form.errors.username ? 'error' : ''}
          />
          {form.touched.username && form.errors.username && (
            <span className="error-message">{form.errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <label>Mật khẩu *</label>
          <input
            type="password"
            value={form.values.password}
            onChange={form.handleChange('password')}
            onBlur={form.handleBlur('password')}
            className={form.touched.password && form.errors.password ? 'error' : ''}
          />
          {form.touched.password && form.errors.password && (
            <span className="error-message">{form.errors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label>Xác nhận mật khẩu *</label>
          <input
            type="password"
            value={form.values.confirmPassword}
            onChange={form.handleChange('confirmPassword')}
            onBlur={form.handleBlur('confirmPassword')}
            className={form.touched.confirmPassword && form.errors.confirmPassword ? 'error' : ''}
          />
          {form.touched.confirmPassword && form.errors.confirmPassword && (
            <span className="error-message">{form.errors.confirmPassword}</span>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={form.values.terms}
              onChange={form.handleChange('terms')}
            />
            <span>Tôi đồng ý với điều khoản và điều kiện *</span>
          </label>
          {form.touched.terms && form.errors.terms && (
            <span className="error-message">{form.errors.terms}</span>
          )}
        </div>

        <div className="form-actions">
          <button type="button" onClick={form.reset} disabled={form.isSubmitting}>
            Reset
          </button>
          <button 
            type="button" 
            onClick={form.handleSubmit(onSubmit)} 
            disabled={form.isSubmitting || !form.isValid}
          >
            {form.isSubmitting ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </div>

        <div className="form-info">
          <p>Form Status: {form.isDirty ? '🔴 Modified' : '🟢 Clean'}</p>
          <p>Valid: {form.isValid ? '✅' : '❌'}</p>
          <p>Submit Count: {form.submitCount}</p>
        </div>
      </div>
    </div>
  );
}

// Demo 2: Dynamic Field Array Form
export function DynamicFieldsForm() {
  const form = useForm({
    name: '',
    skills: []
  });

  const skillsArray = useFieldArray('skills', form);

  const onSubmit = async (values) => {
    console.log('Skills submitted:', values);
    alert(\`✅ Submitted \${values.skills.length} skills!\`);
  };

  return (
    <div className="form-container">
      <h2>🎯 Dynamic Fields (Skills)</h2>

      <div className="form-wrapper">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={form.values.name}
            onChange={form.handleChange('name')}
          />
        </div>

        <div className="field-array-section">
          <h3>Skills ({skillsArray.fields.length})</h3>

          {skillsArray.fields.map((skill, index) => (
            <div key={index} className="field-array-item">
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skillsArray.fields];
                  newSkills[index] = e.target.value;
                  form.setFieldValue('skills', newSkills);
                }}
                placeholder={\`Skill \${index + 1}\`}
              />
              <button
                type="button"
                onClick={() => skillsArray.remove(index)}
                className="btn-remove"
              >
                🗑️
              </button>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => skillsArray.swap(index, index - 1)}
                  className="btn-move"
                >
                  ⬆️
                </button>
              )}
              {index < skillsArray.fields.length - 1 && (
                <button
                  type="button"
                  onClick={() => skillsArray.swap(index, index + 1)}
                  className="btn-move"
                >
                  ⬇️
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => skillsArray.push('')}
            className="btn-add"
          >
            ➕ Add Skill
          </button>
        </div>

        <div className="form-actions">
          <button type="button" onClick={form.handleSubmit(onSubmit)}>Submit</button>
        </div>
      </div>
    </div>
  );
}
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
