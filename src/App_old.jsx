// App.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import * as Days from "./days";

function App() {
  const totalDays = 30;

  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/day/1" />} />
          {Array.from({ length: totalDays }, (_, i) => {
            const DayComponent = Days[`Day${i + 1}`];
            return (
              <Route
                key={i}
                path={`/day/${i + 1}`}
                element={
                  DayComponent ? <DayComponent /> : <p>Coming soon...</p>
                }
              />
            );
          })}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
