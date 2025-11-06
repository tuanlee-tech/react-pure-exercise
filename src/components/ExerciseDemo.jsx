import "../assets/styles.css";
const ExerciseDemo = ({ exerciseId }) => {
  return (
    <div className="demo-container">
      <div className="demo-box">
        <h4 className="demo-title">Live Demo</h4>
        <div className="demo-content">
          <p className="demo-text">Demo content for Exercise {exerciseId}</p>
          <button className="demo-button">Click me</button>
        </div>
      </div>
    </div>
  );
};
export default ExerciseDemo;
