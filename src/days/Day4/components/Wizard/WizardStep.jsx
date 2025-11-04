export function AccountStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Account Information</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username || ""}
        onChange={(e) => updateFormData("username", e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password || ""}
        onChange={(e) => updateFormData("password", e.target.value)}
      />
    </div>
  );
}

export function ProfileStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Profile Details</h2>
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName || ""}
        onChange={(e) => updateFormData("fullName", e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email || ""}
        onChange={(e) => updateFormData("email", e.target.value)}
      />
    </div>
  );
}

export function ReviewStep({ formData }) {
  return (
    <div className="form-group review">
      <h2>Review & Submit</h2>
      <div className="summary">
        <p>
          <b>Username:</b> {formData.username}
        </p>
        <p>
          <b>Full Name:</b> {formData.fullName}
        </p>
        <p>
          <b>Email:</b> {formData.email}
        </p>
      </div>
    </div>
  );
}
