import { ChevronDown, ChevronRight, Code, Eye } from "lucide-react";
import { useState } from "react";
import "../assets/styles.css";
import ExerciseDemo from "./ExerciseDemo";

const ExerciseCard = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <div className="exercise-card">
      <div className="exercise-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="exercise-header-left">
          <div className="exercise-number">{exercise.id}</div>
          <h3 className="exercise-title">{exercise.title}</h3>
        </div>
        <div className="expand-icon">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>

      <div className="exercise-description">{exercise.description}</div>

      {isOpen && (
        <div className="solution-container">
          <div className="tabs-container">
            <button
              className={`tab ${activeTab === "demo" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("demo")}
            >
              <Eye size={16} />
              <span>Demo</span>
            </button>
            <button
              className={`tab ${activeTab === "code" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("code")}
            >
              <Code size={16} />
              <span>Code</span>
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "demo" ? (
              <ExerciseDemo exerciseId={exercise.id} />
            ) : (
              <div className="code-container">
                <div className="code-header">
                  <span className="code-lang">JavaScript</span>
                </div>
                <pre className="code-block">
                  <code className="code">{exercise.solution}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
