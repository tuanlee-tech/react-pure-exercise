// Dashboard.jsx
import { useState } from "react";
import { dashboardData } from "../../sample";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";

function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const handleNavClick = (id) => {
    setActiveItem(id);
    // Có thể thêm logic điều hướng thực tế (React Router)
    // navigate(`/dashboard/${id}`);
  };

  const handleProfileClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleLogout = () => {
    alert("Logged out!");
    setShowUserMenu(false);
  };

  const markAllAsRead = () => {
    alert("All notifications marked as read!");
    setShowNotifications(false);
  };
  return (
    <div className="dashboard">
      <Sidebar
        items={dashboardData.sidebarItems}
        activeItem={activeItem}
        onItemClick={handleNavClick}
      />

      <div className="main-content">
        <Header
          user={dashboardData.user}
          notifications={dashboardData.notifications}
          onProfileClick={handleProfileClick}
          onNotificationClick={handleNotificationClick}
        />
        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="dropdown-menu user-dropdown">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}

        {/* Notifications Modal */}
        {showNotifications && (
          <div
            className="modal-overlay"
            onClick={() => setShowNotifications(false)}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Notifications</h3>
                <button onClick={() => setShowNotifications(false)}>
                  Close
                </button>
              </div>
              <div className="modal-body">
                <p>New order received</p>
                <p>User John Doe registered</p>
                <p>Server backup completed</p>
              </div>
              <div className="modal-footer">
                <button onClick={markAllAsRead}>Mark all as read</button>
              </div>
            </div>
          </div>
        )}
        <main className="content">
          <section className="stats-grid">
            {dashboardData.stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                trend={stat.trend}
                trendValue={stat.trendValue}
              />
            ))}
          </section>

          <section className="recent-activity">
            <h2>Recent Activity</h2>
            <p>
              Showing data for: <strong>{activeItem}</strong>
            </p>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
