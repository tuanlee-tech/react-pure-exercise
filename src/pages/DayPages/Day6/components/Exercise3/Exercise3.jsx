import ExerciseCard from "../../../../../components/ExerciseCard";
import MultiStepForm from "./components/MultiStepForm";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Multi-Step Form" />

      <ExerciseCard.Description>
        {`
function MultiStepForm() {
  // TODO:
  // 1. Current step state (1, 2, 3)
  // 2. Form data state cho mỗi step:
  //    Step 1: Personal info (name, email, phone)
  //    Step 2: Address (street, city, postal code)
  //    Step 3: Payment (card number, expiry, cvv)
  // 3. Errors state cho mỗi step
  // 4. Validation cho mỗi step
  // 5. Nút: Next, Previous, Submit
  // 6. Progress bar
  // 7. Review tất cả data ở step cuối
  // 8. Không cho next nếu step hiện tại invalid

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <MultiStepForm />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card, Input, Modal } from "@ui";
import { useState } from "react";

const validateField = (fieldName, value) => {
  if (!value.trim()) return "Trường này là bắt buộc";
  if (fieldName === "fullname" && value.trim().length < 6)
    return "Tên quá ngắn";
  if (fieldName === "email" && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value))
    return "Email không hợp lệ";
  if (fieldName === "phone" && value.trim().length < 10)
    return "Số điện thoại không hợp lệ";
  if (fieldName === "card_number" && value.trim().length < 12)
    return "Số thẻ không hợp lệ";
  if (fieldName === "cvv" && value.trim().length < 3) return "CVV không hợp lệ";
  return null;
};

const initialFormData = {
  fullname: "",
  street: "",
  card_number: "",
  expiry_date: "",
  cvv: "",
  email: "",
  phone: "",
  city: "",
  postal_code: "",
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateStep = (step) => {
    const fields = {
      1: ["fullname", "email", "phone"],
      2: ["street", "city", "postal_code"],
      3: ["card_number", "expiry_date", "cvv"],
    }[step];

    const stepErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      stepErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      setShowModal(true);
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="multistep-form">
      <div className="multistep-form__container">
        <Card className="multistep-form__card">
          <div className="multistep-form__header">
            <h1 className="multistep-form__title">Multi-Step Form</h1>
            <p className="multistep-form__subtitle">
              Điền thông tin từng bước một cách dễ dàng
            </p>
          </div>

          <div className="multistep-form__progress">
            <div
              className="multistep-form__progress-fill"
              style={{ width: \`\${progress}%\` }}
            />
          </div>

          <Card.Content className="multistep-form__content">
            {/* Step 1 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 1 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Personal Information
              </h2>
              <div className="multistep-form__grid">
                <div>
                  <Input
                    label="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    error={errors.fullname}
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="example@email.com"
                    error={errors.email}
                  />
                </div>
                <div>
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+84 123 456 789"
                    error={errors.phone}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 2 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Address Information
              </h2>
              <div className="multistep-form__grid">
                <Input
                  label="Street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123 Main St"
                  error={errors.street}
                />
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hà Nội"
                  error={errors.city}
                />
                <Input
                  label="Postal Code"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="100000"
                  error={errors.postal_code}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 3 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">Payment Details</h2>
              <div className="multistep-form__grid">
                <Input
                  label="Card Number"
                  name="card_number"
                  value={formData.card_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1234 5678 9012 3456"
                  error={errors.card_number}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Input
                    label="Expiry Date"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="MM/YY"
                    error={errors.expiry_date}
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    type="password"
                    value={formData.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="123"
                    error={errors.cvv}
                  />
                </div>
              </div>

              <div
                className="multistep-form__review"
                style={{ marginTop: "2rem" }}
              >
                <h3 style={{ color: "#00D9FF", marginBottom: "1rem" }}>
                  Review Your Information
                </h3>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="multistep-form__review-item">
                    <span className="multistep-form__review-label">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\\w/g, (c) => c.toUpperCase())}
                    </span>
                    <span className="multistep-form__review-value">
                      {value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="multistep-form__actions">
              <Button
                variant="secondary"
                size="md"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              <div style={{ display: "flex", gap: "1rem" }}>
                {currentStep < 3 && (
                  <Button variant="primary" size="md" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    icon="Check"
                  >
                    Submit Payment
                  </Button>
                )}
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header onClose={() => setShowModal(false)}>
          Payment Successful!
        </Modal.Header>
        <Modal.Body>
          <p>Cảm ơn bạn đã hoàn thành form!</p>
          <div className="multistep-form__review" style={{ marginTop: "1rem" }}>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="multistep-form__review-item">
                <span className="multistep-form__review-label">
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\\w/g, (c) => c.toUpperCase())}
                </span>
                <span className="multistep-form__review-value">{value}</span>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              setFormData(initialFormData);
              setErrors({});
              setCurrentStep(1);
            }}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
