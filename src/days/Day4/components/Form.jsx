import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

// Context để chia sẻ state form
const FormContext = createContext(null);

// Hàm validate một field
// Cấu trúc các rules
// {
//   required: <true | string>,               // Bắt buộc nhập hay không (có thể là chuỗi thông báo lỗi)
//   minLength: <số>,                         // Độ dài tối thiểu
//   maxLength: <số>,                         // Độ dài tối đa
//   pattern: <RegExp | { value: <RegExp>, message: <string> }> // Kiểm tra định dạng (pattern là một RegExp hoặc object với value và message),
//   validate: <hàm tùy chỉnh(value, formData) => string | null>  // Hàm kiểm tra tuỳ chỉnh
// }

const validateField = (value, rules) => {
  if (!rules) return null;

  if (rules.required && (!value || value === "")) {
    return typeof rules.required === "string"
      ? rules.required
      : "Trường này là bắt buộc";
  }

  if (rules.pattern && value) {
    const regex =
      rules.pattern instanceof RegExp ? rules.pattern : rules.pattern.value;
    if (!regex.test(value)) {
      return rules.pattern.message || "Định dạng không hợp lệ";
    }
  }

  if (rules.minLength && value && value.length < rules.minLength) {
    return `Tối thiểu ${rules.minLength} ký tự`;
  }

  if (rules.maxLength && value && value.length > rules.maxLength) {
    return `Tối đa ${rules.maxLength} ký tự`;
  }

  if (rules.validate && typeof rules.validate === "function") {
    return rules.validate(value);
  }

  return null;
};

// === Form chính ===
export default function Form({ onSubmit, children }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rulesRef = useRef({});

  // Đăng ký field
  const registerField = useCallback(
    (name, rules = {}) => {
      rulesRef.current[name] = rules;

      if (!(name in values)) {
        const initialValue =
          rules.initialValue ?? (rules.type === "checkbox" ? false : "");
        setValues((prev) => ({ ...prev, [name]: initialValue }));
        setErrors((prev) => ({ ...prev, [name]: null }));
        setTouched((prev) => ({ ...prev, [name]: false }));
      }
    },
    [values]
  );

  // Cập nhật giá trị
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate ngay khi thay đổi (tùy chọn)
    const error = validateField(value, rulesRef.current[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // Validate toàn bộ form
  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(rulesRef.current).forEach((name) => {
      const value = values[name];
      const error = validateField(value, rulesRef.current[name]);
      newErrors[name] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  // Xử lý submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (!validateAll()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    const initial = {};
    Object.keys(rulesRef.current).forEach((name) => {
      const rules = rulesRef.current[name];
      initial[name] =
        rules.initialValue ?? (rules.type === "checkbox" ? false : "");
    });
    setValues(initial);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const contextValue = {
    values,
    errors,
    touched,
    isSubmitting,
    registerField,
    setFieldValue,
    resetForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} noValidate>
        {children}
      </form>
    </FormContext.Provider>
  );
}

// === Form.Field (Render Props) ===
Form.Field = function FormField({ name, label, rules, children }) {
  const { values, errors, touched, registerField, setFieldValue } =
    useContext(FormContext);

  React.useEffect(() => {
    registerField(name, rules);
  }, [name, registerField, rules]);

  const value = values[name] ?? "";
  const error = touched[name] && errors[name];
  const fieldProps = {
    value,
    error,
    onChange: (e) => {
      const val =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFieldValue(name, val);
    },
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          {label}
        </label>
      )}
      {children(fieldProps)}
    </div>
  );
};

// === Form.Input ===
Form.Input = function FormInput({ name, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <input
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      style={{
        width: "100%",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
  );
};

// === Form.Select ===
Form.Select = function FormSelect({ name, options, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <select
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      style={{
        width: "100%",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <option value="">Chọn...</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

// === Form.Checkbox ===
Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <input
        {...props}
        type="checkbox"
        name={name}
        checked={!!values[name]}
        onChange={(e) => setFieldValue(name, e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
};

// === Form.Submit ===
Form.Submit = function FormSubmit({ children, loading: loadingProp }) {
  const { isSubmitting } = useContext(FormContext);
  const loading = loadingProp !== undefined ? loadingProp : isSubmitting;

  return (
    <button
      type="submit"
      disabled={loading}
      style={{
        padding: "0.5rem 1rem",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Đang gửi..." : children}
    </button>
  );
};

// === Form.Reset ===
Form.Reset = function FormReset({ children }) {
  const { resetForm } = useContext(FormContext);

  return (
    <button
      type="button"
      onClick={resetForm}
      style={{
        marginLeft: "0.5rem",
        padding: "0.5rem 1rem",
        background: "#6c757d",
        color: "white",
        border: "none",
        borderRadius: "4px",
      }}
    >
      {children}
    </button>
  );
};
