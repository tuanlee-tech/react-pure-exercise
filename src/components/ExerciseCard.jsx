import { ChevronDown, ChevronRight, Code, Eye } from "lucide-react";
import { useState } from "react";
import { styles } from "../assets/styles";
import ExerciseDemo from "./ExerciseDemo";
const ExerciseCard = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <div style={styles.exerciseCard}>
      <div style={styles.exerciseHeader} onClick={() => setIsOpen(!isOpen)}>
        <div style={styles.exerciseHeaderLeft}>
          <div style={styles.exerciseNumber}>{exercise.id}</div>
          <h3 style={styles.exerciseTitle}>{exercise.title}</h3>
        </div>
        <div style={styles.expandIcon}>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>

      <div style={styles.exerciseDescription}>{exercise.description}</div>

      {isOpen && (
        <div style={styles.solutionContainer}>
          <div style={styles.tabsContainer}>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === "demo" ? styles.tabActive : {}),
              }}
              onClick={() => setActiveTab("demo")}
            >
              <Eye size={16} />
              <span>Demo</span>
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === "code" ? styles.tabActive : {}),
              }}
              onClick={() => setActiveTab("code")}
            >
              <Code size={16} />
              <span>Code</span>
            </button>
          </div>

          <div style={styles.tabContent}>
            {activeTab === "demo" ? (
              <ExerciseDemo exerciseId={exercise.id} />
            ) : (
              <div style={styles.codeContainer}>
                <div style={styles.codeHeader}>
                  <span style={styles.codeLang}>JavaScript</span>
                </div>
                <pre style={styles.codeBlock}>
                  <code style={styles.code}>{exercise.solution}</code>
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
