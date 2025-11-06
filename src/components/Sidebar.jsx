// components/Sidebar.tsx
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef(null);
  const location = useLocation();

  // Click outside → close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, sidebarRef]);

  // Auto open on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) setIsOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when route changes (mobile only)
  useEffect(() => {
    if (window.innerWidth < 769) {
      setIsOpen(false);
    }
  }, [location]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={toggle}
        aria-label={isOpen ? "Ẩn menu" : "Hiện menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? "◀" : "▶"}
      </button>

      {/* Sidebar */}
      <aside ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>React Exercises</h2>
          <button className="close-btn" onClick={toggle} aria-label="Đóng">
            ✕
          </button>
        </div>

        <ul>
          {days.map((day) => (
            <li key={day}>
              <NavLink
                to={`/day/${day}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.innerWidth < 769 && setIsOpen(false)}
              >
                Day {day}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay */}
      {isOpen && window.innerWidth < 769 && (
        <div className="sidebar-overlay" onClick={toggle} />
      )}
    </>
  );
}

export default Sidebar;
