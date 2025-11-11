import ExerciseCard from "../../../../../components/ExerciseCard";
import RegistrationForm from "./components/RegistrationForm";
import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Form Components (Challenge)" />

      <ExerciseCard.Description>
        {`
// Form.jsx
function Form({ onSubmit, children }) {
  // TODO:
  // - Handle form submission
  // - Prevent default
  // - Pass handleSubmit down via children composition
  
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

// FormField.jsx
function FormField({ label, error, required, children }) {
  // TODO:
  // - Label với required indicator
  // - Children (input component)
  // - Error message
  
  return (
    <div className="form-field">
      {/* Your code */}
    </div>
  );
}

// Input.jsx
function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props 
}) {
  // TODO:
  // - Input với all native props
  // - Icon (left/right)
  // - Error state styling
  
  return (
    <div className="input-wrapper">
      {/* Your code */}
    </div>
  );
}

// Select.jsx
function Select({ options, value, onChange, placeholder, ...props }) {
  // TODO:
  // - Select với options
  // - Placeholder option
  // - Custom styling
  
  return (
    <select value={value} onChange={onChange} {...props}>
      {/* Your code */}
    </select>
  );
}

// Checkbox.jsx
function Checkbox({ label, checked, onChange, ...props }) {
  // TODO:
  // - Custom styled checkbox
  // - Label
  
  return (
    <label className="checkbox">
      {/* Your code */}
    </label>
  );
}

// Usage Example
function RegistrationForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Email" required error={errors.email}>
        <Input
          type="email"
          placeholder="Enter your email"
          icon="📧"
          value={email}
          onChange={handleEmailChange}
        />
      </FormField>
      
      <FormField label="Password" required>
        <Input
          type="password"
          placeholder="Enter password"
          icon="🔒"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormField>
      
      <FormField label="Country">
        <Select
          options={countries}
          value={country}
          onChange={handleCountryChange}
          placeholder="Select country"
        />
      </FormField>
      
      <Checkbox
        label="I agree to terms and conditions"
        checked={agreedToTerms}
        onChange={handleTermsChange}
      />
      
      <Button type="submit" variant="primary">
        Register
      </Button>
    </Form>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <RegistrationForm />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useState } from "react";
import { countries } from "../data/countries";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      country: "",
      agreedToTerms: false,
    });
    setErrors({});
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreedToTerms) newErrors.terms = "You must agree to terms";
    return newErrors;
  };

  const handleSubmit = (formDataObj) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    resetForm();
    alert("🎉 Registration successful!");
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Register Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            icon="📧"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Password" required error={errors.password}>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            icon="🔒"
            value={formData.password}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Country" error={errors.country}>
          <Select
            name="country"
            options={countries}
            value={formData.country}
            onChange={handleChange}
            placeholder="Select country"
          />
        </FormField>

        <Checkbox
          label="I agree to terms and conditions"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
        />
        {errors.terms && <div className="form-error">{errors.terms}</div>}

        <button className="submit-btn" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}

export default RegistrationForm;

//Form
function Form({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

//FormField
function FormField({ label, error, required, children }) {
  return (
    <div className={\`form-field \${error ? "has-error" : ""}\`}>
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-indicator">*</span>}
        </label>
      )}
      <div className="form-input">{children}</div>
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
//Input
function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props
}) {
  return (
    <div className={\`input-wrapper \${error ? "error" : ""}\`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className="input-element"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
//Select
function Select({ options = [], value, onChange, placeholder, ...props }) {
  return (
    <select
      className="select-element"
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="">{placeholder || "Select an option"}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt.code}>
          {opt.label || opt.name}
        </option>
      ))}
    </select>
  );
}

//Checkbox
function Checkbox({ label, checked, onChange, ...props }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      <span className="checkbox-custom" />
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
