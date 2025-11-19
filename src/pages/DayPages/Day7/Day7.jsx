import "@ui/global.css";
import { Code2 } from "lucide-react";
import Exercise1 from "./components/Exercise1/Exercise1";
import Exercise2 from "./components/Exercise2/Exercise2";
import Exercise3 from "./components/Exercise3/Exercise3";
import Exercise4 from "./components/Exercise4/Exercise4";
import Exercise5 from "./components/Exercise5/Exercise5";
import HomeWork from "./components/HomeWork";

const exercises = {
  1: Exercise1,
  2: Exercise2,
  3: Exercise3,
  4: Exercise4,
  5: Exercise5,
};

const Day7 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Ngày 7</h1>
            <p className="day-subtitle">useReducer - Complex State Logic</p>
          </div>
        </div>
        <section className="lesson-goal">
          <h2>🎯 Mục tiêu hôm nay</h2>
          <ul>
            <li>Hiểu useReducer và khi nào dùng</li>
            <li>Reducer pattern và Redux-like state management</li>
            <li>Action types và action creators</li>
            <li>So sánh useReducer vs useState</li>
            <li>Complex state logic patterns</li>
            <li>Best practices và optimization</li>
          </ul>
        </section>
      </div>

      <div className="exercises-list">
        {Object.keys(exercises).map((day) => {
          const Ex = exercises[day];
          return Ex ? <Ex key={day} /> : null;
        })}
      </div>
      <div className="exercises-list mt-1">
        <HomeWork />
      </div>
    </div>
  );
};

export default Day7;
