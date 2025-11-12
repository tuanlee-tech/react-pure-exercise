import ExerciseCard from "../../../../../components/ExerciseCard";
import Alert from "./components/Alert";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={1}
        title="Alert/Toast System (Compound Components)"
      />

      <ExerciseCard.Description>
        {`
// TODO: Implement compound components Alert system

// Alert.jsx
function Alert({ children, variant = 'info', dismissible = false }) {
  // TODO:
  // - Context để share state
  // - Auto dismiss sau X seconds (optional)
  // - Variants: info, success, warning, error
}

Alert.Icon = function AlertIcon({ children }) {
  // TODO: Render icon based on variant from context
}

Alert.Title = function AlertTitle({ children }) {
  // TODO: Render title
}

Alert.Description = function AlertDescription({ children }) {
  // TODO: Render description
}

Alert.CloseButton = function AlertCloseButton() {
  // TODO: Dismiss button
}

// Usage
<Alert variant="success" dismissible>
  <Alert.Icon />
  <div>
    <Alert.Title>Success!</Alert.Title>
    <Alert.Description>
      Your changes have been saved.
    </Alert.Description>
  </div>
  <Alert.CloseButton />
</Alert>


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="grid grid-cols-1">
          <Alert variant="info" dismissible autoDismiss={5000}>
            <Alert.Icon />
            <div>
              <Alert.Title>Information</Alert.Title>
              <Alert.Description>
                This is an informational message for the user.{" "}
                <strong>Auto Dismiss after 5s</strong>
              </Alert.Description>
            </div>
            <Alert.CloseButton />
          </Alert>

          <Alert variant="success" dismissible>
            <Alert.Icon />
            <div>
              <Alert.Title>Success!</Alert.Title>
              <Alert.Description>
                Your changes have been saved successfully.
              </Alert.Description>
            </div>
            <Alert.CloseButton />
          </Alert>

          <Alert variant="error">
            <Alert.Icon />
            <div>
              <Alert.Title>Error!</Alert.Title>
              <Alert.Description>
                Something went wrong, please try again later.
              </Alert.Description>
            </div>
          </Alert>
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
// Alert.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

// Icon map
const ICONS = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

const VARIANT_CLASSES = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

function Alert({
  children,
  variant = "info",
  dismissible = false,
  autoDismiss = 0, // ms, 0 = không tự đóng
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Auto dismiss
  useEffect(() => {
    if (autoDismiss > 0 && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <AlertContext.Provider value={{ variant, dismissible, setIsOpen }}>
      <div className={\`alert \${VARIANT_CLASSES[variant]}\`}>{children}</div>
    </AlertContext.Provider>
  );
}

// Sub-components
Alert.Icon = function AlertIcon() {
  const { variant } = useContext(AlertContext);
  return <span className="alert-icon">{ICONS[variant]}</span>;
};

Alert.Title = function AlertTitle({ children }) {
  return <h3 className="alert-title">{children}</h3>;
};

Alert.Description = function AlertDescription({ children }) {
  return <p className="alert-description">{children}</p>;
};

Alert.CloseButton = function AlertCloseButton() {
  const { dismissible, setIsOpen } = useContext(AlertContext);

  if (!dismissible) return null;

  return (
    <button
      className="alert-close"
      onClick={() => setIsOpen(false)}
      aria-label="Close alert"
    >
      X
    </button>
  );
};

export default Alert;

        `}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
