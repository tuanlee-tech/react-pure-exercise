import { useState } from "react";
import { countries } from "../../sample";
import Button from "./ui/Button";
import Checkbox from "./ui/Checkbox";
import Form from "./ui/Form";
import FormField from "./ui/FormField";
import Input from "./ui/Input";
import Select from "./ui/Select";

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

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreedToTerms) newErrors.terms = "You must agree to terms";
    return newErrors;
  };

  const handleSubmit = (formDataObj) => {
    const data = Object.fromEntries(formDataObj);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert(`Registered!\nEmail: ${data.email}\nCountry: ${data.country}`);
    console.log("Form submitted:", data);
  };

  return (
    <div className="registration-form-container">
      <h2>Register Account</h2>

      <Form onSubmit={handleSubmit}>
        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            icon="✉️"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
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
            error={!!errors.password}
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
          checked={formData.agreedToTerms}
          onChange={handleChange}
          name="agreedToTerms"
        />
        {errors.terms && <span className="error-message">{errors.terms}</span>}

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegistrationForm;
