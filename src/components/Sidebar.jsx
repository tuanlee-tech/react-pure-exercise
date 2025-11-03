import { NavLink } from "react-router-dom";

function Sidebar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <aside className="sidebar">
      <h2>📘 React Exercises</h2>
      <ul>
        {days.map((day) => (
          <li key={day}>
            <NavLink
              to={`/day/${day}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Day {day}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
