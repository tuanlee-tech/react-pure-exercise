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

const Day1 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Ngày 1</h1>
            <p className="day-subtitle">JSX & Rendering Basics</p>
          </div>
        </div>
        <section className="lesson-goal">
          <h2>🎯 Mục tiêu hôm nay</h2>
          <ul>
            <li>Hiểu JSX là gì và cách hoạt động</li>
            <li>Sử dụng JavaScript expressions trong JSX</li>
            <li>Làm việc với Fragments</li>
            <li>Tạo được UI components đơn giản</li>
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

export default Day1;
