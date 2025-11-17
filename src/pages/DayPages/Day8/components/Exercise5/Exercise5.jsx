import ExerciseCard from "../../../../../components/ExerciseCard";
import FormWizard from "./components/FormWizard";

import "./styles.css";
export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={5}
        title="Form Wizard với Complex State (Challenge)"
      />

      <ExerciseCard.Description>
        {`
// TODO: Multi-step form với validation và derived state

const STEPS = ['account', 'profile', 'preferences', 'review'];

function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState({
    account: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    profile: {
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      phone: '',
      avatar: null
    },
    preferences: {
      newsletter: false,
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      theme: 'light',
      language: 'vi'
    }
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // TODO: Validation functions cho mỗi step
  const validateAccount = useCallback(() => {
    const errors = {};
    const { email, username, password, confirmPassword } = formData.account;

    if (!email) {
      errors.email = 'Email là bắt buộc';
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!username) {
      errors.username = 'Username là bắt buộc';
    } else if (username.length < 3) {
      errors.username = 'Username phải ≥ 3 ký tự';
    }

    if (!password) {
      errors.password = 'Mật khẩu là bắt buộc';
    } else if (password.length < 6) {
      errors.password = 'Mật khẩu phải ≥ 6 ký tự';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }

    return errors;
  }, [formData.account]);

  const validateProfile = useCallback(() => {
    // TODO: Validate profile step
  }, [formData.profile]);

  // TODO: Derived state - step validation
  const stepValidations = useMemo(() => ({
    account: validateAccount(),
    profile: validateProfile(),
    preferences: {} // No validation
  }), [validateAccount, validateProfile]);

  // TODO: Derived state - can proceed to next step
  const canProceed = useMemo(() => {
    const currentStepName = STEPS[currentStep];
    const currentErrors = stepValidations[currentStepName];
    return Object.keys(currentErrors).length === 0;
  }, [currentStep, stepValidations]);

  // TODO: Derived state - overall form completion
  const completion = useMemo(() => {
    // Calculate % completion based on filled fields
    let totalFields = 0;
    let filledFields = 0;

    // Count all fields
    Object.values(formData).forEach(section => {
      Object.values(section).forEach(value => {
        totalFields++;
        if (value && value !== '' && value !== false) {
          filledFields++;
        }
      });
    });

    return Math.round((filledFields / totalFields) * 100);
  }, [formData]);

  const updateField = useCallback((step, field, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }));

    // Mark as touched
    setTouched(prev => ({
      ...prev,
      [\`\${step}.\${field}\`]: true
    }));
  }, []);

  const handleNext = () => {
    if (canProceed && currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    // TODO: Submit form
    console.log('Submitting:', formData);
  };

  const renderStepContent = () => {
    const stepName = STEPS[currentStep];
    const stepData = formData[stepName];
    const stepErrors = stepValidations[stepName];

    switch (stepName) {
      case 'account':
        return (
          <div className="step-content">
            <h2>Thông tin tài khoản</h2>
            {/* TODO: Render form fields */}
          </div>
        );

      case 'profile':
        return (
          <div className="step-content">
            <h2>Thông tin cá nhân</h2>
            {/* TODO: Render form fields */}
          </div>
        );

      case 'preferences':
        return (
          <div className="step-content">
            <h2>Tùy chọn</h2>
            {/* TODO: Render preferences */}
          </div>
        );

      case 'review':
        return (
          <div className="step-content">
            <h2>Xác nhận thông tin</h2>
            {/* TODO: Review all data */}
            <div className="review-section">
              <h3>Tài khoản</h3>
              <p>Email: {formData.account.email}</p>
              <p>Username: {formData.account.username}</p>
            </div>
            <div className="review-section">
              <h3>Hồ sơ</h3>
              <p>Tên: {formData.profile.firstName} {formData.profile.lastName}</p>
              <p>Ngày sinh: {formData.profile.birthDate}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-wizard">
      <h1>Đăng ký tài khoản</h1>

      {/* Progress indicator */}
      <div className="progress">
        <div className="progress-bar" style={{ width: \`\${completion}%\` }}>
          {completion}%
        </div>
      </div>

      {/* Steps indicator */}
      <div className="steps">
        {STEPS.map((step, index) => (
          <div
            key={step}
            className={\`step \${index === currentStep ? 'active' : ''} \${
              index < currentStep ? 'completed' : ''
            }\`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>

      {/* Step content */}
      {renderStepContent()}

      {/* Navigation */}
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Quay lại
        </button>

        {currentStep < STEPS.length - 1 ? (
          <button onClick={handleNext} disabled={!canProceed}>
            Tiếp tục
          </button>
        ) : (
          <button onClick={handleSubmit}>
            Hoàn tất
          </button>
        )}
      </div>

      {/* Validation summary */}
      {!canProceed && (
        <div className="validation-summary">
          <p>Vui lòng hoàn thành các trường bắt buộc:</p>
          <ul>
            {Object.entries(stepValidations[STEPS[currentStep]]).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <FormWizard />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
