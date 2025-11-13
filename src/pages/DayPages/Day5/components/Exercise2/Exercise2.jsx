import ExerciseCard from "../../../../../components/ExerciseCard";
import RegistrationForm from "./components/RegistrationForm";
import "./styles.css";
export default function Exercise2() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={2}
        title=" Form with Validation (Class Component)"
      />

      <ExerciseCard.Description>
        {`
Tạo form với validation using class component (để practice):
// TODO: Implement class component
class RegistrationForm extends Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {},
    touched: {},
    isSubmitting: false
  };

  // TODO:
  // 1. Validate field on blur
  // 2. Validate entire form on submit
  // 3. Show errors only for touched fields
  // 4. Disable submit if form invalid
  // 5. Handle async submission

  validateField = (name, value) => {
    // TODO: Return error message or null
    // - username: min 3 chars
    // - email: valid email
    // - password: min 6 chars
    // - confirmPassword: must match password
  };

  handleChange = (e) => {
    // TODO: Update formData
  };

  handleBlur = (e) => {
    // TODO: Mark field as touched, validate
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate all, submit if valid
  };

  render() {
    // TODO: Render form with error messages
  }
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <RegistrationForm />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Component } from "react";
import { Card, Input, Button } from "@ui";

class RegistrationForm extends Component {
  state = {
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
    touched: {},
    isSubmitting: false,
  };

  validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim().length < 3
          ? "Username must be at least 3 characters"
          : null;
      case "email":
        return !/^\\S+@\\S+\\.\\S+$/.test(value)
          ? "Please enter a valid email"
          : null;
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : null;
      case "confirmPassword":
        return value !== this.state.formData.password
          ? "Passwords do not match"
          : null;
      default:
        return null;
    }
  };

  validateAll = () => {
    const { formData } = this.state;
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = this.validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    return errors;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      // Clear error on change
      errors: {
        ...prevState.errors,
        [name]: null,
      },
    }));
  };

  handleBlur = (e) => {
    const { name, value } = e.target;
    const error = this.validateField(name, value);
    this.setState((prevState) => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateAll();
    const hasErrors = Object.values(errors).some((err) => err !== null);

    // Mark all fields as touched
    this.setState({
      touched: {
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      },
      errors,
    });

    if (hasErrors) return;

    this.setState({ isSubmitting: true });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", this.state.formData);
    alert("Registration successful!");
    this.setState({ isSubmitting: false });
  };

  isFormValid = () => {
    const { errors } = this.state;
    return !Object.values(errors).some((err) => err !== null);
  };

  render() {
    const { formData, errors, touched, isSubmitting } = this.state;

    return (
      <div className="registration-container">
        <Card className="registration-card">
          <h2 className="form-title">Create Account</h2>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.username && errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.email && errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.password && errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting || !this.isFormValid()}
              className="submit-btn"
            >
              {isSubmitting ? "Creating Account..." : "Register"}
            </Button>
          </form>

          <div className="form-footer">
            <p>
              Already have an account? <span className="login-link">Login</span>
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default RegistrationForm;
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
