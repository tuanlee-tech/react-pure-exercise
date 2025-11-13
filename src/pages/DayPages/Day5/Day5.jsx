import "@ui/global.css";
import { Code2 } from "lucide-react";
import Exercise1 from "./components/Exercise1/Exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Exercise3 from "./components/Exercise3/Exercise3";
import Exercise4 from "./components/Exercise4/Exercise4";
import Exercise5 from "./components/Exercise5/Exercise5";
import Exercise6 from "./components/Exercise6/Exercise6";

const exercises = {
  1: Exercise1,
  2: Exercise2,
  3: Exercise3,
  4: Exercise4,
  5: Exercise5,
  6: Exercise6,
};

const Day5 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Ngày 5</h1>
            <p className="day-subtitle">Class Components (Legacy)</p>
          </div>
        </div>
        <section className="lesson-goal">
          <h2>🎯 Mục tiêu hôm nay</h2>
          <ul>
            <li>Hiểu Class Components syntax (để đọc code cũ)</li>
            <li>Master Lifecycle Methods</li>
            <li>So sánh Class vs Function Components</li>
            <li>Biết cách refactor Class → Function</li>
            <li>Migration strategies</li>
          </ul>
        </section>
      </div>

      <div className="exercises-list">
        {Object.keys(exercises).map((day) => {
          const Ex = exercises[day];
          return Ex ? <Ex key={day} /> : null;
        })}
      </div>
    </div>
  );
};

export default Day5;
