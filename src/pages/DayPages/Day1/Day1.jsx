import { Code2 } from "lucide-react";
import Exercise1 from "./components/Exercise1";
import "./styles.css";
const exercises = {
  1: Exercise1,
};

const Day1 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Day 1</h1>
            <p className="day-subtitle">JSX & Rendering Basics</p>
          </div>
        </div>
      </div>

      <div className="exercises-list">
        {Array.from({ length: 1 }, (_, i) => {
          const Ex = exercises[i + 1];
          return <Ex key={i} />;
        })}
      </div>
    </div>
  );
};

export default Day1;
