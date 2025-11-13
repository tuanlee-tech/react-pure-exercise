import { Code2, Menu, X } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import "./assets/styles.css";

// Lazy load ComingSoon và UIShowcase
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const UIShowcase = lazy(() => import("./pages/UIShowcase"));

const DAY_NUMBER = 30;
const CURRENT_DAY = 7;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentDay, setCurrentDay] = useState(1);
  const [showUI, setShowUI] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Component cho từng ngày (lazy import động)
  const [SelectedDay, setSelectedDay] = useState(() =>
    lazy(() => import(`./pages/DayPages/Day1/Day1`))
  );

  // Khi đổi ngày → lazy load file tương ứng
  useEffect(() => {
    if (currentDay) {
      const loadDay = async () => {
        try {
          const module = await import(
            `./pages/DayPages/Day${currentDay}/Day${currentDay}.jsx`
          );
          setSelectedDay(() => module.default);
        } catch (err) {
          console.warn(`Ngày ${currentDay} chưa có file.`);
          setSelectedDay(null);
        }
      };
      loadDay();
    }
  }, [currentDay]);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Click vào ngày
  const handleDayClick = (day) => {
    setCurrentDay(day);
    setShowUI(false);
    if (isMobile) setIsSidebarOpen(false);
  };

  // Click vào UI List
  const handleUIClick = () => {
    setShowUI(true);
    setCurrentDay(null);
    if (isMobile) setIsSidebarOpen(false);
  };

  const processing = Number(100 * (CURRENT_DAY / DAY_NUMBER)).toFixed(2) + "%";

  return (
    <div className="container">
      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isMobile && isSidebarOpen && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="sidebar-header">
          <div className="logo-container">
            <Code2 size={28} color="#00D9FF" />
            <span className="logo">{DAY_NUMBER} Ngày ReactJS</span>
          </div>
          {isMobile && (
            <button
              className="close-button"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="sidebar-content">
          <div className="progress-container">
            <div className="progress-header">
              <span className="progress-text">Tiến độ</span>
              <span className="progress-percent">{processing}</span>
            </div>
            <div className="progress-bar" style={{ "--progress": processing }}>
              <div className="progress-fill"></div>
            </div>
          </div>

          <nav className="nav">
            {/* UI List */}
            <button
              className={`nav-item ${showUI ? "nav-item-active" : ""}`}
              onClick={handleUIClick}
            >
              <span className="nav-item-number">Danh sách UI</span>
              {showUI && <div className="active-indicator" />}
            </button>

            {/* 30 Days */}
            {Array.from({ length: DAY_NUMBER }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={`nav-item ${
                  currentDay === day && !showUI ? "nav-item-active" : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                <span className="nav-item-number">Ngày {day}</span>
                {currentDay === day && !showUI && (
                  <div className="active-indicator" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className="main"
        style={{
          marginLeft: isSidebarOpen ? "280px" : "0",
          width: isSidebarOpen ? "calc(100% - 280px)" : "100%",
        }}
      >
        <Suspense fallback={<div className="loading">Đang tải...</div>}>
          {showUI ? (
            <UIShowcase />
          ) : SelectedDay ? (
            <SelectedDay />
          ) : (
            <ComingSoon />
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
