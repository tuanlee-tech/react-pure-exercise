import { Card, Input, Button, Modal } from "@ui";
import { useState } from "react";
import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavClick = (id) => {
    setActiveItem(id);
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

      <div className="dashboard-main-content">
        <Header
          user={dashboardData.user}
          notifications={dashboardData.notifications}
          onProfileClick={handleProfileClick}
          onNotificationClick={handleNotificationClick}
        />

        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="dashboard-dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}

        {/* Notifications Modal */}
        <Modal
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        >
          <Modal.Header onClose={() => setShowNotifications(false)}>
            Notifications
          </Modal.Header>
          <Modal.Body>
            <div className="dashboard-modal-body">
              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">🛒</span>
                <span className="dashboard-notification-text">
                  New order received — <strong>#1024</strong>
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">👤</span>
                <span className="dashboard-notification-text">
                  User <strong>John Doe</strong> just registered
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">💾</span>
                <span className="dashboard-notification-text">
                  Server backup completed successfully
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={() => setShowNotifications(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          </Modal.Footer>
        </Modal>
        <main className="dashboard-content">
          {activeItem === "dashboard" && (
            <section className="dashboard-stats-grid">
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
          )}

          <section className="dashboard-recent-activity">
            <h2>Recent Activity</h2>
            <p>
              Showing data for:{" "}
              <strong>
                {activeItem.charAt(0).toUpperCase()}
                {activeItem.slice(1)}
              </strong>
            </p>
          </section>
        </main>

        <footer className="dashboard-footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

/* Header Component */
function Header({
  user,
  notifications = 0,
  onProfileClick,
  onNotificationClick,
}) {
  return (
    <header className="dashboard-header">
      <Input placeholder="Search..." icon="🔍" />

      <div className="dashboard-user-menu">
        <div
          className="dashboard-notification-bell"
          onClick={onNotificationClick}
        >
          🔔
          {notifications > 0 && (
            <span className="dashboard-notification-badge">
              {notifications}
            </span>
          )}
        </div>

        <div
          className="dashboard-user-avatar"
          onClick={onProfileClick}
          role="button"
        >
          <img src={user.avatar} alt={user.name} />
          <span className="dashboard-user-name">{user.name}</span>
        </div>
      </div>
    </header>
  );
}

/* Sidebar Component */
function Sidebar({ items = [], activeItem, onItemClick }) {
  return (
    <aside className="dashboard-sidebar">
      <div className="logo">
        <h1>Dashboard</h1>
      </div>

      <nav className="dashboard-nav">
        <ul className="dashboard-nav-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={`dashboard-nav-item ${
                activeItem === item.id ? "active" : ""
              }`}
              onClick={() => onItemClick(item.id)}
              role="button"
            >
              <span className="dashboard-nav-icon">{item.icon}</span>
              <span className="dashboard-nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

/* StatCard Component */
function StatCard({ title, value, icon, trend, trendValue }) {
  const isUp = trend === "up";
  const trendColor = isUp ? "dashboard-trend-up" : "dashboard-trend-down";
  const trendIcon = isUp ? "↗️" : "↘️";

  return (
    <Card className="dashboard-stat-card">
      <div className="dashboard-stat-icon">{icon}</div>

      <div className="dashboard-stat-info">
        <h3 className="dashboard-stat-title">{title}</h3>
        <div className="dashboard-stat-value">{value}</div>
      </div>

      <div className={`dashboard-trend ${trendColor}`}>
        <span className="dashboard-trend-icon">{trendIcon}</span>
        <span className="dashboard-trend-value">{trendValue}</span>
      </div>
    </Card>
  );
}
