import { useCallback, useMemo, useState } from "react";

/**
 * FORM WIZARD với COMPLEX STATE MANAGEMENT
 * Demonstrates:
 * - Multi-step form với validation
 * - Complex nested state structure
 * - Derived state (completion, validation)
 * - Field-level validation
 * - Step navigation với guards
 */

// Form steps configuration
const STEPS = ["account", "profile", "preferences", "review"];

const STEP_LABELS = {
  account: "1. Tài khoản",
  profile: "2. Thông tin",
  preferences: "3. Tùy chọn",
  review: "4. Xác nhận",
};

// Gender options
const GENDER_OPTIONS = [
  { value: "", label: "Chọn giới tính" },
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
  { value: "other", label: "Khác" },
];

// Language options
const LANGUAGE_OPTIONS = [
  { value: "vi", label: "🇻🇳 Tiếng Việt" },
  { value: "en", label: "🇺🇸 English" },
  { value: "ja", label: "🇯🇵 日本語" },
  { value: "ko", label: "🇰🇷 한국어" },
];

/**
 * FormWizard Component - Main Container
 */
function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  // ✅ COMPLEX NESTED STATE
  const [formData, setFormData] = useState({
    account: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    profile: {
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    preferences: {
      newsletter: false,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      theme: "dark",
      language: "vi",
    },
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ============================================
  // VALIDATION FUNCTIONS
  // ============================================

  /**
   * Validate Account Step
   */
  const validateAccount = useCallback(() => {
    const errors = {};
    const { email, username, password, confirmPassword } = formData.account;

    // Email validation
    if (!email) {
      errors.email = "Email là bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email không hợp lệ";
    }

    // Username validation
    if (!username) {
      errors.username = "Username là bắt buộc";
    } else if (username.length < 3) {
      errors.username = "Username phải có ít nhất 3 ký tự";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      errors.username = "Username chỉ chứa chữ, số và dấu gạch dưới";
    }

    // Password validation
    if (!password) {
      errors.password = "Mật khẩu là bắt buộc";
    } else if (password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.password = "Mật khẩu phải có chữ hoa, chữ thường và số";
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp";
    }

    return errors;
  }, [formData.account]);

  /**
   * Validate Profile Step
   */
  const validateProfile = useCallback(() => {
    const errors = {};
    const { firstName, lastName, birthDate, gender, phone, zipCode } =
      formData.profile;

    // First name
    if (!firstName) {
      errors.firstName = "Tên là bắt buộc";
    } else if (firstName.length < 2) {
      errors.firstName = "Tên phải có ít nhất 2 ký tự";
    }

    // Last name
    if (!lastName) {
      errors.lastName = "Họ là bắt buộc";
    } else if (lastName.length < 2) {
      errors.lastName = "Họ phải có ít nhất 2 ký tự";
    }

    // Birth date
    if (!birthDate) {
      errors.birthDate = "Ngày sinh là bắt buộc";
    } else {
      const today = new Date();
      const birth = new Date(birthDate);
      const age = today.getFullYear() - birth.getFullYear();
      if (age < 13) {
        errors.birthDate = "Bạn phải từ 13 tuổi trở lên";
      }
      if (age > 120) {
        errors.birthDate = "Ngày sinh không hợp lệ";
      }
    }

    // Gender
    if (!gender) {
      errors.gender = "Vui lòng chọn giới tính";
    }

    // Phone
    if (phone && !/^0\d{9,10}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ (VD: 0901234567)";
    }

    // Zip code
    if (zipCode && !/^\d{5,6}$/.test(zipCode)) {
      errors.zipCode = "Mã bưu điện phải có 5-6 chữ số";
    }

    return errors;
  }, [formData.profile]);

  /**
   * Validate Preferences Step (no required fields)
   */
  const validatePreferences = useCallback(() => {
    return {}; // No validation needed
  }, []);

  // ============================================
  // DERIVED STATE
  // ============================================

  /**
   * Step Validations - Memoized validation results
   */
  const stepValidations = useMemo(() => {
    console.log("🔍 Running validations...");
    return {
      account: validateAccount(),
      profile: validateProfile(),
      preferences: validatePreferences(),
    };
  }, [validateAccount, validateProfile, validatePreferences]);

  /**
   * Can Proceed - Check if current step is valid
   */
  const canProceed = useMemo(() => {
    const currentStepName = STEPS[currentStep];
    if (currentStepName === "review") return true;

    const currentErrors = stepValidations[currentStepName];
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  }, [currentStep, stepValidations]);

  /**
   * Completion Percentage
   * Tính % hoàn thành dựa trên số field đã điền
   */
  const completion = useMemo(() => {
    console.log("📊 Calculating completion...");

    let totalFields = 0;
    let filledFields = 0;

    // Count account fields
    Object.entries(formData.account).forEach(([key, value]) => {
      totalFields++;
      if (value && value.trim() !== "") filledFields++;
    });

    // Count profile fields
    Object.entries(formData.profile).forEach(([key, value]) => {
      totalFields++;
      if (value && value.trim() !== "") filledFields++;
    });

    // Count preferences (simplified)
    totalFields += 4; // newsletter, theme, language, notifications count as 1
    if (formData.preferences.newsletter) filledFields++;
    if (formData.preferences.theme) filledFields++;
    if (formData.preferences.language) filledFields++;
    filledFields++; // notifications always has some value

    return Math.round((filledFields / totalFields) * 100);
  }, [formData]);

  /**
   * All Steps Valid
   * Kiểm tra tất cả các step đã valid chưa
   */
  const allStepsValid = useMemo(() => {
    return Object.keys(stepValidations).every(
      (step) => Object.keys(stepValidations[step]).length === 0
    );
  }, [stepValidations]);

  // ============================================
  // UPDATE FUNCTIONS
  // ============================================

  /**
   * Update field value
   */
  const updateField = useCallback((step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));

    // Mark as touched
    setTouched((prev) => ({
      ...prev,
      [`${step}.${field}`]: true,
    }));
  }, []);

  /**
   * Update nested field (notifications)
   */
  const updateNestedField = useCallback((step, parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [parent]: {
          ...prev[step][parent],
          [field]: value,
        },
      },
    }));
  }, []);

  // ============================================
  // NAVIGATION
  // ============================================

  const handleNext = useCallback(() => {
    if (canProceed && currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setErrors({});
    } else if (!canProceed) {
      // Show errors for current step
      const currentStepName = STEPS[currentStep];
      setErrors(stepValidations[currentStepName]);
    }
  }, [canProceed, currentStep, stepValidations]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    console.log("🚀 Submitting form...", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("✅ Đăng ký thành công!\n\nThông tin đã được lưu.");

    // Reset form (optional)
    // window.location.reload();
  }, [formData]);

  // ============================================
  // RENDER STEP CONTENT
  // ============================================

  const renderStepContent = () => {
    const stepName = STEPS[currentStep];

    switch (stepName) {
      case "account":
        return (
          <AccountStep
            data={formData.account}
            errors={errors}
            touched={touched}
            onUpdate={(field, value) => updateField("account", field, value)}
          />
        );

      case "profile":
        return (
          <ProfileStep
            data={formData.profile}
            errors={errors}
            touched={touched}
            onUpdate={(field, value) => updateField("profile", field, value)}
          />
        );

      case "preferences":
        return (
          <PreferencesStep
            data={formData.preferences}
            onUpdate={(field, value) =>
              updateField("preferences", field, value)
            }
            onUpdateNested={(parent, field, value) =>
              updateNestedField("preferences", parent, field, value)
            }
          />
        );

      case "review":
        return <ReviewStep formData={formData} />;

      default:
        return null;
    }
  };

  return (
    <div className="form-wizard">
      {/* Header */}
      <div className="wizard-header">
        <h1 className="wizard-title">
          <span className="title-gradient">📝 Đăng ký tài khoản</span>
        </h1>
        <p className="wizard-subtitle">
          Form Wizard với Complex State Management
        </p>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completion}%` }}
          ></div>
        </div>
        <div className="progress-text">{completion}% hoàn thành</div>
      </div>

      {/* Steps Indicator */}
      <div className="steps-indicator">
        {STEPS.map((step, index) => (
          <div
            key={step}
            className={`step-item ${index === currentStep ? "active" : ""} ${
              index < currentStep ? "completed" : ""
            }`}
          >
            <div className="step-circle">
              {index < currentStep ? "✓" : index + 1}
            </div>
            <div className="step-label">{STEP_LABELS[step]}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">{renderStepContent()}</div>

      {/* Validation Summary */}
      {!canProceed &&
        currentStep < STEPS.length - 1 &&
        Object.keys(errors).length > 0 && (
          <div className="validation-summary">
            <h4>⚠️ Vui lòng hoàn thành các trường sau:</h4>
            <ul>
              {Object.entries(errors).map(([field, error]) => (
                <li key={field}>{error}</li>
              ))}
            </ul>
          </div>
        )}

      {/* Navigation */}
      <div className="wizard-navigation">
        {currentStep > 0 && (
          <button className="btn-secondary" onClick={handlePrev}>
            ← Quay lại
          </button>
        )}

        {currentStep < STEPS.length - 1 ? (
          <button
            className="btn-primary"
            onClick={handleNext}
            disabled={!canProceed}
          >
            Tiếp tục →
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={!allStepsValid}
          >
            ✓ Hoàn tất
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * AccountStep Component
 */
function AccountStep({ data, errors, touched, onUpdate }) {
  return (
    <div className="form-step">
      <h2 className="step-title">🔐 Thông tin tài khoản</h2>

      <div className="form-grid">
        <div className="form-group full-width">
          <label className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            className={`form-input ${errors.email ? "error" : ""}`}
            value={data.email}
            onChange={(e) => onUpdate("email", e.target.value)}
            placeholder="example@email.com"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group full-width">
          <label className="form-label">
            Username <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-input ${errors.username ? "error" : ""}`}
            value={data.username}
            onChange={(e) => onUpdate("username", e.target.value)}
            placeholder="username123"
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
          <div className="form-hint">Chỉ chữ, số và dấu gạch dưới</div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Mật khẩu <span className="required">*</span>
          </label>
          <input
            type="password"
            className={`form-input ${errors.password ? "error" : ""}`}
            value={data.password}
            onChange={(e) => onUpdate("password", e.target.value)}
            placeholder="••••••••"
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
          <div className="form-hint">
            Tối thiểu 6 ký tự, có chữ hoa, thường và số
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Xác nhận mật khẩu <span className="required">*</span>
          </label>
          <input
            type="password"
            className={`form-input ${errors.confirmPassword ? "error" : ""}`}
            value={data.confirmPassword}
            onChange={(e) => onUpdate("confirmPassword", e.target.value)}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * ProfileStep Component
 */
function ProfileStep({ data, errors, touched, onUpdate }) {
  return (
    <div className="form-step">
      <h2 className="step-title">👤 Thông tin cá nhân</h2>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">
            Họ <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-input ${errors.lastName ? "error" : ""}`}
            value={data.lastName}
            onChange={(e) => onUpdate("lastName", e.target.value)}
            placeholder="Nguyễn"
          />
          {errors.lastName && (
            <div className="error-message">{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Tên <span className="required">*</span>
          </label>
          <input
            type="text"
            className={`form-input ${errors.firstName ? "error" : ""}`}
            value={data.firstName}
            onChange={(e) => onUpdate("firstName", e.target.value)}
            placeholder="Văn A"
          />
          {errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Ngày sinh <span className="required">*</span>
          </label>
          <input
            type="date"
            className={`form-input ${errors.birthDate ? "error" : ""}`}
            value={data.birthDate}
            onChange={(e) => onUpdate("birthDate", e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
          {errors.birthDate && (
            <div className="error-message">{errors.birthDate}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Giới tính <span className="required">*</span>
          </label>
          <select
            className={`form-input ${errors.gender ? "error" : ""}`}
            value={data.gender}
            onChange={(e) => onUpdate("gender", e.target.value)}
          >
            {GENDER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.gender && (
            <div className="error-message">{errors.gender}</div>
          )}
        </div>

        <div className="form-group full-width">
          <label className="form-label">Số điện thoại</label>
          <input
            type="tel"
            className={`form-input ${errors.phone ? "error" : ""}`}
            value={data.phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            placeholder="0901234567"
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="form-group full-width">
          <label className="form-label">Địa chỉ</label>
          <input
            type="text"
            className="form-input"
            value={data.address}
            onChange={(e) => onUpdate("address", e.target.value)}
            placeholder="123 Đường ABC"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Thành phố</label>
          <input
            type="text"
            className="form-input"
            value={data.city}
            onChange={(e) => onUpdate("city", e.target.value)}
            placeholder="Hồ Chí Minh"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mã bưu điện</label>
          <input
            type="text"
            className={`form-input ${errors.zipCode ? "error" : ""}`}
            value={data.zipCode}
            onChange={(e) => onUpdate("zipCode", e.target.value)}
            placeholder="70000"
          />
          {errors.zipCode && (
            <div className="error-message">{errors.zipCode}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * PreferencesStep Component
 */
function PreferencesStep({ data, onUpdate, onUpdateNested }) {
  return (
    <div className="form-step">
      <h2 className="step-title">⚙️ Tùy chọn</h2>

      <div className="preferences-section">
        <div className="pref-group">
          <h3 className="pref-title">📧 Thông báo</h3>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.email}
              onChange={(e) =>
                onUpdateNested("notifications", "email", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>Email notifications</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.sms}
              onChange={(e) =>
                onUpdateNested("notifications", "sms", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>SMS notifications</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.push}
              onChange={(e) =>
                onUpdateNested("notifications", "push", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>Push notifications</span>
          </label>
        </div>

        <div className="pref-group">
          <h3 className="pref-title">🎨 Giao diện</h3>

          <div className="theme-selector">
            <label
              className={`theme-option ${
                data.theme === "dark" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={data.theme === "dark"}
                onChange={(e) => onUpdate("theme", e.target.value)}
              />
              <div className="theme-preview dark">🌙</div>
              <span>Dark</span>
            </label>

            <label
              className={`theme-option ${
                data.theme === "light" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="theme"
                value="light"
                checked={data.theme === "light"}
                onChange={(e) => onUpdate("theme", e.target.value)}
              />
              <div className="theme-preview light">☀️</div>
              <span>Light</span>
            </label>
          </div>
        </div>

        <div className="pref-group">
          <h3 className="pref-title">🌐 Ngôn ngữ</h3>

          <select
            className="form-input"
            value={data.language}
            onChange={(e) => onUpdate("language", e.target.value)}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pref-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.newsletter}
              onChange={(e) => onUpdate("newsletter", e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span>Đăng ký nhận bản tin qua email</span>
          </label>
        </div>
      </div>
    </div>
  );
}

/**
 * ReviewStep Component
 */
function ReviewStep({ formData }) {
  return (
    <div className="form-step">
      <h2 className="step-title">✅ Xác nhận thông tin</h2>

      <div className="review-sections">
        <div className="review-section">
          <h3 className="review-section-title">🔐 Tài khoản</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Email:</span>
              <span className="review-value">{formData.account.email}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Username:</span>
              <span className="review-value">{formData.account.username}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Mật khẩu:</span>
              <span className="review-value">••••••••</span>
            </div>
          </div>
        </div>

        <div className="review-section">
          <h3 className="review-section-title">👤 Thông tin cá nhân</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Họ tên:</span>
              <span className="review-value">
                {formData.profile.lastName} {formData.profile.firstName}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Ngày sinh:</span>
              <span className="review-value">
                {new Date(formData.profile.birthDate).toLocaleDateString(
                  "vi-VN"
                )}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Giới tính:</span>
              <span className="review-value">
                {
                  GENDER_OPTIONS.find(
                    (g) => g.value === formData.profile.gender
                  )?.label
                }
              </span>
            </div>
            {formData.profile.phone && (
              <div className="review-item">
                <span className="review-label">Số điện thoại:</span>
                <span className="review-value">{formData.profile.phone}</span>
              </div>
            )}
            {formData.profile.address && (
              <div className="review-item">
                <span className="review-label">Địa chỉ:</span>
                <span className="review-value">
                  {formData.profile.address}, {formData.profile.city}{" "}
                  {formData.profile.zipCode}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="review-section">
          <h3 className="review-section-title">⚙️ Tùy chọn</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Thông báo:</span>
              <span className="review-value">
                {Object.entries(formData.preferences.notifications)
                  .filter(([_, value]) => value)
                  .map(([key]) => key.toUpperCase())
                  .join(", ") || "Không có"}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Giao diện:</span>
              <span className="review-value">
                {formData.preferences.theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Ngôn ngữ:</span>
              <span className="review-value">
                {
                  LANGUAGE_OPTIONS.find(
                    (l) => l.value === formData.preferences.language
                  )?.label
                }
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Newsletter:</span>
              <span className="review-value">
                {formData.preferences.newsletter ? "✓ Có" : "✗ Không"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="review-notice">
        <p>
          ℹ️ Vui lòng kiểm tra lại thông tin trước khi hoàn tất đăng ký. Bạn có
          thể quay lại để chỉnh sửa nếu cần.
        </p>
      </div>
    </div>
  );
}

export default FormWizard;
