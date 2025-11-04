import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WizardContext = createContext();

export function Wizard({ children, onComplete }) {
  const [steps, setSteps] = useState([]); // [{id, title}]
  const [currentIndex, setCurrentIndex] = useState(0); // index thay vì id
  const [formData, setFormData] = useState({});

  const totalSteps = steps.length;
  const currentStep = steps[currentIndex]; // object {id, title}

  const registerStep = (id, title) => {
    setSteps((prev) => {
      if (prev.some((s) => s.id === id)) return prev;
      return [...prev, { id, title }];
    });
  };

  const next = () => {
    if (currentIndex < totalSteps - 1) setCurrentIndex((i) => i + 1);
    else if (onComplete) onComplete(formData);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const jumpTo = (id) => {
    const targetIndex = steps.findIndex((s) => s.id === id);
    if (targetIndex !== -1) setCurrentIndex(targetIndex);
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const value = {
    steps,
    currentStep,
    currentIndex,
    totalSteps,
    registerStep,
    next,
    prev,
    jumpTo,
    formData,
    updateFormData,
  };

  return (
    <WizardContext.Provider value={value}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
}

// --- Steps Header ---
Wizard.Steps = function WizardSteps({ children }) {
  const { steps, currentIndex } = useContext(WizardContext);

  return (
    <div className="wizard-steps">
      {Children.map(children, (child) => {
        const stepIndex = steps.findIndex((s) => s.id === child.props.stepId);
        const isActive = stepIndex === currentIndex;
        const isCompleted = stepIndex < currentIndex;
        return cloneElement(child, { isActive, isCompleted });
      })}
    </div>
  );
};

// --- Step Item ---
Wizard.Step = function WizardStep({ stepId, title, isActive, isCompleted }) {
  const { registerStep, jumpTo, steps } = useContext(WizardContext);

  useEffect(() => {
    registerStep(stepId, title);
  }, [stepId, title, registerStep]);

  const classes = [
    "step",
    isActive ? "active" : "",
    isCompleted ? "completed" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const stepIndex = steps.findIndex((s) => s.id === stepId) + 1;
  return (
    <div className={classes} onClick={() => isCompleted && jumpTo(stepId)}>
      <div className="step-number">{stepIndex}</div>
      <div className="step-label">{title}</div>
    </div>
  );
};

// --- Panels Container ---
Wizard.Panels = function WizardPanels({ children }) {
  const { currentStep } = useContext(WizardContext);

  return (
    <div className="wizard-panels">
      {Children.map(children, (child) =>
        child.props.stepId === currentStep?.id ? child : null
      )}
    </div>
  );
};

// --- Panel (with form data support) ---
Wizard.Panel = function WizardPanel({ children }) {
  const { formData, updateFormData } = useContext(WizardContext);

  const enhancedChildren = Children.map(children, (child) =>
    typeof child === "object"
      ? cloneElement(child, { formData, updateFormData })
      : child
  );

  return <div className="wizard-panel">{enhancedChildren}</div>;
};

// --- Navigation ---
Wizard.Navigation = function WizardNavigation() {
  const { currentIndex, totalSteps, prev, next } = useContext(WizardContext);

  return (
    <div className="wizard-navigation">
      <button
        className="btn btn-secondary"
        onClick={prev}
        disabled={currentIndex === 0}
      >
        ← Previous
      </button>

      {currentIndex < totalSteps - 1 ? (
        <button className="btn btn-primary" onClick={next}>
          Next →
        </button>
      ) : (
        <button className="btn btn-primary" onClick={next}>
          Submit ✅
        </button>
      )}
    </div>
  );
};
