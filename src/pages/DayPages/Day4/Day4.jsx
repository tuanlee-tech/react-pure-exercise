import "@ui/global.css";
import { Code2 } from "lucide-react";
import Exercise1 from "./components/Exercise1/Exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Exercise3 from "./components/Exercise3/Exercise3";
import Exercise4 from "./components/Exercise4/Exercise4";
import Exercise5 from "./components/Exercise5/Exercise5";

const exercises = {
  1: Exercise1,
  2: Exercise2,
  3: Exercise3,
  4: Exercise4,
  5: Exercise5,
};

const Day4 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Ngày 3</h1>
            <p className="day-subtitle">Components Fundamentals</p>
          </div>
        </div>
        <section className="lesson-goal">
          <h2>🎯 Mục tiêu hôm nay</h2>
          <ul>
            <li>Master Compound Components pattern</li>
            <li>Hiểu và implement Render Props pattern</li>
            <li>Container/Presentational pattern</li>
            <li>Học cách build flexible và reusable components</li>
            <li>Tránh prop drilling với composition</li>
          </ul>
        </section>
      </div>

      <div className="exercises-list">
        {Array.from({ length: 5 }, (_, i) => {
          const Ex = exercises[i + 1];
          return Ex ? <Ex key={i} /> : null;
        })}
      </div>
    </div>
  );
};

export default Day4;
