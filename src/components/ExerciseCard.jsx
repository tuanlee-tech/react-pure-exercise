import { useState } from "react";
import { ChevronDown, ChevronRight, Code, Eye } from "lucide-react";
import "../assets/styles.css";
import { Highlight, themes } from "prism-react-renderer";

const ExerciseCard = ({ children }) => {
  console.log(children);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");

  const header = children.find((child) => child.type === ExerciseCard.Header);
  const description = children.find(
    (child) => child.type === ExerciseCard.Description
  );
  const demo = children.find((child) => child.type === ExerciseCard.Demo);
  const code = children.find((child) => child.type === ExerciseCard.Code);

  return (
    <div className="exercise-card">
      <div className="exercise-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="exercise-header-left">{header}</div>
        <div className="expand-icon">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>

      {isOpen && (
        <div className="solution-container">
          <div className="exercise-description">{description}</div>

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
              <div className="demo-slot">{demo}</div>
            ) : (
              <div className="code-container">
                <div className="code-header">
                  <span className="code-lang">jsx</span>
                </div>
                <Highlight
                  theme={themes.nightOwl}
                  code={code?.props?.children || ""}
                  language="jsx"
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre
                      className={className}
                      style={{
                        ...style,
                        ...{ overflowX: "auto", borderRadius: 8 },
                      }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span
                              key={key}
                              {...getTokenProps({ token, key })}
                            />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

ExerciseCard.Header = ({ order, title }) => (
  <>
    <div className="exercise-number">{order ?? "#"}</div>
    <h3 className="exercise-title">{title}</h3>
  </>
);

ExerciseCard.Description = ({ children }) => (
  <pre className="exercise-description-block">
    <code>{children}</code>
  </pre>
);

ExerciseCard.Demo = ({ children }) => <>{children}</>;
ExerciseCard.Code = ({ children }) => <>{children}</>;

export default ExerciseCard;
