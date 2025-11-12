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
      <div className={`alert ${VARIANT_CLASSES[variant]}`}>{children}</div>
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
