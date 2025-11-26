// ==========================================
// DEMO COMPONENTS
// ==========================================

import { useForm } from "../hooks/useForm";

// Demo 1: Simple Registration Form
export default function RegistrationForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email là bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!values.username) {
      errors.username = "Username là bắt buộc";
    } else if (values.username.length < 3) {
      errors.username = "Username phải ≥ 3 ký tự";
    }

    if (!values.password) {
      errors.password = "Mật khẩu là bắt buộc";
    } else if (values.password.length < 6) {
      errors.password = "Mật khẩu phải ≥ 6 ký tự";
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp";
    }

    if (!values.terms) {
      errors.terms = "Bạn phải đồng ý với điều khoản";
    }

    return errors;
  };

  const form = useForm(
    {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validate
  );

  const onSubmit = async (values) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", values);
    alert("✅ Đăng ký thành công!");
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
            onChange={form.handleChange("email")}
            onBlur={form.handleBlur("email")}
            className={form.touched.email && form.errors.email ? "error" : ""}
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
            onChange={form.handleChange("username")}
            onBlur={form.handleBlur("username")}
            className={
              form.touched.username && form.errors.username ? "error" : ""
            }
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
            onChange={form.handleChange("password")}
            onBlur={form.handleBlur("password")}
            className={
              form.touched.password && form.errors.password ? "error" : ""
            }
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
            onChange={form.handleChange("confirmPassword")}
            onBlur={form.handleBlur("confirmPassword")}
            className={
              form.touched.confirmPassword && form.errors.confirmPassword
                ? "error"
                : ""
            }
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
              onChange={form.handleChange("terms")}
            />
            <span>Tôi đồng ý với điều khoản và điều kiện *</span>
          </label>
          {form.touched.terms && form.errors.terms && (
            <span className="error-message">{form.errors.terms}</span>
          )}
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={form.reset}
            disabled={form.isSubmitting}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.isSubmitting || !form.isValid}
          >
            {form.isSubmitting ? "Đang xử lý..." : "Đăng ký"}
          </button>
        </div>

        <div className="form-info">
          <p>Form Status: {form.isDirty ? "🔴 Modified" : "🟢 Clean"}</p>
          <p>Valid: {form.isValid ? "✅" : "❌"}</p>
          <p>Submit Count: {form.submitCount}</p>
        </div>
      </div>
    </div>
  );
}
