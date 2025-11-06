import { styles } from "../assets/styles";

const ExerciseDemo = ({ exerciseId }) => {
  return (
    <div style={styles.demoContainer}>
      <div style={styles.demoBox}>
        <h4 style={styles.demoTitle}>Live Demo</h4>
        <div style={styles.demoContent}>
          <p style={styles.demoText}>Demo content for Exercise {exerciseId}</p>
          <button style={styles.demoButton}>Click me</button>
        </div>
      </div>
    </div>
  );
};
export default ExerciseDemo;
