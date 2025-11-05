import { useState } from "react";

const validateField = (fieldName, value) => {
  if (!value.trim()) return "Trường này là bắt buộc";
  if (fieldName === "fullname" && value.trim().length < 6)
    return "Tên quá ngắn";
  if (
    fieldName === "email" &&
    !new RegExp(/^[^s@]+@[^s@]+.[^s@]+$/).test(value)
  )
    return "Email không hợp lệ";
  if (fieldName === "phone" && value.trim().length < 10)
    return "Số điện thoại không hợp lệ";
  if (fieldName === "card_number" && value.trim().length < 12)
    return "Số thẻ không hợp lệ";
  if (fieldName === "cvv" && value.trim().length < 3)
    return "Số CVV không hợp lệ";
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
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => initialFormData);
  const [errors, setErrors] = useState(null);

  const validAll = () => {
    let isValid = true;
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      errors[field] = error;
      if (error) isValid = false;
    });

    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validAll();
    if (!isValid) return;

    alert(
      `Cảm ơn đã điền form.\n Hãy xem lại nội dung đã điền :\n ${JSON.stringify(
        formData
      )}`
    );
    formReset();
  };
  const formReset = () => {
    setFormData(initialFormData);
    setErrors(null);
    setCurrentStep(1);
  };
  const handleNext = () => {
    if (currentStep > 2) return;
    setCurrentStep((step) => step + 1);
  };
  const handlePrev = () => {
    if (currentStep <= 1) return;
    setCurrentStep((step) => step - 1);
  };
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const progress = (currentStep / 3) * 100;
  const isVaild =
    (errors && Object.values(errors).every((error) => !error)) || false;

  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="form-step active">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="John Doe"
            />
            {errors?.fullname && (
              <span className="error">{errors?.fullname}</span>
            )}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="example@email.com"
            />
            {errors?.email && <span className="error">{errors?.email}</span>}
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="tel"
              placeholder="+84 123 456 789"
            />
            {errors?.phone && <span className="error">{errors?.phone}</span>}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="form-step active">
          <h2>Address Information</h2>
          <div className="form-group">
            <label>Street</label>
            <input
              name="street"
              value={formData.street || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="123 Main St"
            />
            {errors?.street && <span className="error">{errors?.street}</span>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={formData.city || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="Hà Nội"
            />
            {errors?.city && <span className="error">{errors?.city}</span>}
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              name="postal_code"
              value={formData.postal_code || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="100000"
            />
            {errors?.postal_code && (
              <span className="error">{errors?.postal_code}</span>
            )}
          </div>
        </div>
      )}
      {/* Step 3 */}
      {currentStep === 3 && (
        <div className="form-step active">
          <h2>Payment Details</h2>
          <div className="form-group">
            <label>Card Number</label>
            <input
              name="card_number"
              value={formData.card_number || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="1234 5678 9012 3456"
            />
            {errors?.card_number && (
              <span className="error">{errors?.card_number}</span>
            )}
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              name="expiry_date"
              value={formData.expiry_date || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="text"
              placeholder="MM/YY"
            />
            {errors?.expiry_date && (
              <span className="error">{errors?.expiry_date}</span>
            )}
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              name="cvv"
              value={formData.cvv || ""}
              onChange={handleChangeValue}
              onBlur={handleBlur}
              type="password"
              placeholder="123"
            />
            {errors?.cvv && <span className="error">{errors?.cvv}</span>}
          </div>
        </div>
      )}

      <div className="button-group">
        <button
          disabled={currentStep === 1}
          onClick={handlePrev}
          className="btn prev"
        >
          Previous
        </button>
        <button
          disabled={!isVaild || currentStep === 3}
          className="btn next"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          type="submit"
          disabled={currentStep < 3 || !isVaild}
          onClick={handleSubmit}
          className="btn submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MultiStepForm;
