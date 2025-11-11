import "@ui/global.css";
import { Code2 } from "lucide-react";
import Exercise1 from "./components/Exercise1/Exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Exercise3 from "./components/Exercise3/Exercise3";
import Exercise4 from "./components/Exercise4/Exercise4";

const exercises = {
  1: Exercise1,
  2: Exercise2,
  3: Exercise3,
  4: Exercise4,
};

const Day3 = () => {
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
            <li>Hiểu sâu về Function Components</li>
            <li>Mastering Props: passing data, prop types, default props</li>
            <li>Props Destructuring cho code sạch hơn</li>
            <li>Children prop và component composition</li>
            <li>Prop Drilling: vấn đề và giải pháp cơ bản</li>
          </ul>
        </section>
      </div>

      <div className="exercises-list">
        {Array.from({ length: 4 }, (_, i) => {
          const Ex = exercises[i + 1];
          return Ex ? <Ex key={i} /> : null;
        })}
      </div>
    </div>
  );
};

export default Day3;
