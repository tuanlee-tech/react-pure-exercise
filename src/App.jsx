import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { styles } from "./assets/styles";
import DayContent from "./components/DayContent";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentDay, setCurrentDay] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDayClick = (day) => {
    setCurrentDay(day);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Toggle Button */}
      <button
        style={styles.toggleButton}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isMobile && isSidebarOpen && (
        <div style={styles.overlay} onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        style={{
          ...styles.sidebar,
          ...(isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed),
        }}
      >
        <div style={styles.sidebarHeader}>
          <div style={styles.logoContainer}>
            <Code2 size={28} color="#00D9FF" />
            <span style={styles.logo}>React 30 Days</span>
          </div>
          {isMobile && (
            <button
              style={styles.closeButton}
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div style={styles.sidebarContent}>
          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span style={styles.progressText}>Progress</span>
              <span style={styles.progressPercent}>3%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>
          </div>

          <nav style={styles.nav}>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                style={{
                  ...styles.navItem,
                  ...(currentDay === day ? styles.navItemActive : {}),
                }}
                onClick={() => handleDayClick(day)}
              >
                <span style={styles.navItemNumber}>Day {day}</span>
                {currentDay === day && <div style={styles.activeIndicator} />}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          ...styles.main,
          marginLeft: isSidebarOpen ? "280px" : "0",
          width: isSidebarOpen ? "calc(100% - 280px)" : "100%",
        }}
      >
        <DayContent day={currentDay} />
      </main>
    </div>
  );
};

export default App;
