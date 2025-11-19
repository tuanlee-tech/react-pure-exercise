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

const Day9 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Ngày 9</h1>
            <p className="day-subtitle">useEffect & Side Effects</p>
          </div>
        </div>
        <section className="lesson-goal">
          <h2>🎯 Mục tiêu hôm nay</h2>
          <ul>
            <li>Hiểu sâu về useEffect và side effects</li>
            <li>Dependencies array và rules</li>
            <li>Cleanup functions</li>
            <li>Common patterns: data fetching, subscriptions, timers</li>
            <li>useLayoutEffect vs useEffect</li>
            <li>Avoiding infinite loops và race conditions</li>
            <li>Best practices</li>
          </ul>
        </section>
      </div>

      <div className="exercises-list">
        {Object.keys(exercises).map((day) => {
          const Ex = exercises[day];
          return Ex ? <Ex key={day} /> : null;
        })}
      </div>
      <div className="summary-day">
        <section className="lesson-goal">
          <h2>Tổng kết Ngày 9</h2>
          <ul>
            <li>✅ Exercise 1: Weather Dashboard - Auto-refresh, debouncing</li>
            <li>✅ Exercise 2: Infinite Scroll - Intersection Observer</li>
            <li>
              ✅ Exercise 3: Stock Ticker - Real-time updates, price alerts
            </li>
            <li>✅ Exercise 4: Auto-Save Form - Debouncing, localStorage</li>
            <li>✅ Exercise 5: Multi-Tab Sync - BroadcastChannel API</li>
          </ul>
          <br />
          <h2> Bạn đã master được:</h2>
          <ul>
            <li>useEffect dependencies</li>
            <li>Cleanup functions</li>
            <li>Debouncing patterns</li>
            <li>Real-time updates</li>
            <li>Browser APIs</li>
            <li>Race condition handling</li>
            <li>Memory leak prevention</li>
          </ul>
        </section>
      </div>
      <div className="exercises-list mt-1">
        <HomeWork />
      </div>
    </div>
  );
};

export default Day9;
