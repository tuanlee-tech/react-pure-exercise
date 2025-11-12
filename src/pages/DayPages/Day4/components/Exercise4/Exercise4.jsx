import ExerciseCard from "../../../../../components/ExerciseCard";
import Form from "./components/Form";
import { countries } from "./data/countries";
import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={4}
        title="Form Builder (Mixed Patterns - Challenge)"
      />

      <ExerciseCard.Description>
        {`
// TODO: Flexible form builder với compound components + render props

// Hàm validate một field
// Cấu trúc các rules
// {
//   required: <true | string>,               // Bắt buộc nhập hay không (có thể là chuỗi thông báo lỗi)
//   minLength: <số>,                         // Độ dài tối thiểu
//   maxLength: <số>,                         // Độ dài tối đa
//   pattern: <RegExp | { value: <RegExp>, message: <string> }> // Kiểm tra định dạng (pattern là một RegExp hoặc object với value và message),
//   validate: <hàm tùy chỉnh(value, formData) => string | null>  // Hàm kiểm tra tuỳ chỉnh
// }

function Form({ onSubmit, children }) {
  // TODO:
  // - Form state management
  // - Validation
  // - Error handling
  // - Submit handling
}

Form.Field = function FormField({ name, label, rules, children }) {
  // TODO:
  // - Register field
  // - Validation
  // - Error display
  // Use render props pattern
}

Form.Input = function FormInput({ name, ...props }) {
  // TODO: Controlled input
}

Form.Select = function FormSelect({ name, options, ...props }) {
  // TODO: Controlled select
}

Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  // TODO: Controlled checkbox
}

Form.Submit = function FormSubmit({ children, loading }) {
  // TODO: Submit button với loading state
}

Form.Reset = function FormReset({ children }) {
  // TODO: Reset form
}

// Usage
<Form onSubmit={handleSubmit}>
  <Form.Field 
    name="email" 
    label="Email"
    rules={{ required: true, pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ }}
  >
    {({ value, onChange, error }) => (
      <>
        <Form.Input
          name="email"
          type="email"
          value={value}
          onChange={onChange}
        />
        {error && <span className="error">{error}</span>}
      </>
    )}
  </Form.Field>

  <Form.Field name="country" label="Country">
    {({ value, onChange }) => (
      <Form.Select
        name="country"
        value={value}
        onChange={onChange}
        options={countries}
      />
    )}
  </Form.Field>

  <Form.Field name="terms">
    {({ value, onChange }) => (
      <Form.Checkbox
        name="terms"
        checked={value}
        onChange={onChange}
        label="I agree to terms"
      />
    )}
  </Form.Field>

  <Form.Submit>Submit</Form.Submit>
  <Form.Reset>Reset</Form.Reset>
</Form>


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <Form
          onSubmit={(data) => {
            console.log("Form submitted:", data);
            alert("Gửi thành công! Xem console để xem dữ liệu.");
          }}
        >
          <Form.Field
            name="email"
            label="Email"
            rules={{
              required: "Email là bắt buộc",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ",
              },
            }}
          >
            {({ value, onChange, error }) => (
              <>
                <Form.Input
                  name="email"
                  type="email"
                  value={value}
                  onChange={onChange}
                />
                {error && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {error}
                  </span>
                )}
              </>
            )}
          </Form.Field>

          <Form.Field
            name="country"
            label="Quốc gia"
            rules={{ required: true }}
          >
            {({ value, onChange }) => (
              <Form.Select
                name="country"
                value={value}
                onChange={onChange}
                options={countries}
              />
            )}
          </Form.Field>

          <Form.Field
            name="terms"
            rules={{ required: "Bạn phải đồng ý điều khoản" }}
          >
            {({ value, onChange }) => (
              <Form.Checkbox
                name="terms"
                checked={value}
                onChange={onChange}
                label="Tôi đồng ý với điều khoản sử dụng"
              />
            )}
          </Form.Field>

          <div style={{ marginTop: "1rem" }}>
            <Form.Submit>Gửi</Form.Submit>
            <Form.Reset>Xóa</Form.Reset>
          </div>
        </Form>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
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
    return \`Tối thiểu \${rules.minLength} ký tự\`;
  }

  if (rules.maxLength && value && value.length > rules.maxLength) {
    return \`Tối đa \${rules.maxLength} ký tự\`;
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
      <form onSubmit={handleSubmit} noValidate className="form-wrapper">
        {children}
      </form>
    </FormContext.Provider>
  );
}

// === Form.Field (Render Props)  ===
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
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      {children(fieldProps)}
    </div>
  );
};

// === Form.Input  ===
Form.Input = function FormInput({ name, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <input
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-input"
    />
  );
};

// === Form.Select  ===
Form.Select = function FormSelect({ name, options, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <select
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-select"
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

// === Form.Checkbox  ===
Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <label className="form-checkbox-wrapper">
      <input
        {...props}
        type="checkbox"
        name={name}
        checked={!!values[name]}
        onChange={(e) => setFieldValue(name, e.target.checked)}
        className="form-checkbox"
      />
      <span className="form-checkbox-label">{label}</span>
    </label>
  );
};

// === Form.Submit  ===
Form.Submit = function FormSubmit({ children, loading: loadingProp }) {
  const { isSubmitting } = useContext(FormContext);
  const loading = loadingProp !== undefined ? loadingProp : isSubmitting;

  return (
    <button
      type="submit"
      disabled={loading}
      className={\`form-submit \${loading ? "form-submit-loading" : ""}\`}
    >
      {loading ? "Đang gửi..." : children}
    </button>
  );
};

// === Form.Reset  ===
Form.Reset = function FormReset({ children }) {
  const { resetForm } = useContext(FormContext);

  return (
    <button type="button" onClick={resetForm} className="form-reset">
      {children}
    </button>
  );
};
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
