import React, { createContext, useContext, useEffect, useState } from "react";
// Context
const WizardContext = createContext();

export default function WizardMix({ children, onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState([]);
  const [formData, setFormData] = useState({});

  // Thu thập stepIds từ WizardMix.Step
  useEffect(() => {
    const ids = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === WizardMix.Steps) {
        React.Children.forEach(child.props.children, (step) => {
          if (step.type === WizardMix.Step && step.props.stepId) {
            ids.push(step.props.stepId);
          }
        });
      }
    });
    setSteps(ids);
    if (!ids.includes(currentStep)) {
      setCurrentStep(ids[0] || 1);
    }
  }, [children, currentStep]);

  const goToStep = (id) => {
    if (steps.includes(id)) {
      setCurrentStep(id);
    }
  };

  const next = () => {
    const idx = steps.indexOf(currentStep);
    if (idx < steps.length - 1) setCurrentStep(steps[idx + 1]);
  };
  const prev = () => {
    const idx = steps.indexOf(currentStep);
    if (idx > 0) setCurrentStep(steps[idx - 1]);
  };
  const isFirstStep = steps.indexOf(currentStep) === 0;
  const isLastStep = steps.indexOf(currentStep) === steps.length - 1;

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = () => {
    if (isLastStep && onComplete) {
      onComplete(formData);
    }
  };
  const value = {
    currentStep,
    steps,
    goToStep,
    next,
    prev,
    isFirstStep,
    isLastStep,
    formData,
    updateFormData,
    handleSubmit,
  };
  return (
    <WizardContext.Provider value={value}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
}
WizardMix.Steps = function WizardSteps({ children }) {
  const { steps, currentStep, goToStep } = useContext(WizardContext);
  return (
    <div className="wizard-steps">
      {steps.map((id, idx) => {
        const step = React.Children.toArray(children).find(
          (c) => c.props.stepId === id
        );
        const isActive = currentStep === id;
        const isCompleted = steps.indexOf(currentStep) > idx;
        return (
          <div
            key={id}
            className={`step ${isActive ? "active" : ""} ${
              isCompleted ? "completed" : ""
            }`}
            onClick={() => isCompleted && goToStep(id)}
          >
            <span className="step-number">{idx + 1}</span>
            <span className="step-title">{step?.props.title}</span>
          </div>
        );
      })}
    </div>
  );
};

WizardMix.Step = function WizardStep() {
  return null;
};

WizardMix.Panels = function WizardPanels({ children }) {
  return <div className="wizard-panels">{children}</div>;
};
WizardMix.Panel = function WizardPanel({ render, stepId }) {
  const { formData, currentStep, updateFormData } = useContext(WizardContext);
  if (stepId !== currentStep) return null;

  return (
    <div className="wizard-panel">{render({ formData, updateFormData })}</div>
  );
};
WizardMix.Navigation = function WizardNavigation() {
  const { prev, next, isFirstStep, isLastStep, handleSubmit } =
    useContext(WizardContext);
  return (
    <div className="wizard-navigation">
      {!isFirstStep && <button onClick={prev}>Previous</button>}
      <div style={{ flex: 1 }} />
      {isLastStep ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={next}>Next</button>
      )}
    </div>
  );
};
