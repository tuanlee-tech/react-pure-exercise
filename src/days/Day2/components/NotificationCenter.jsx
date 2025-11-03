import React, { useState } from "react";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "System update available",
      read: false,
      timestamp: "5 mins ago",
    },
    {
      id: 2,
      type: "success",
      message: "Payment processed successfully",
      read: true,
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Your subscription expires in 3 days",
      read: false,
      timestamp: "2 hours ago",
    },
    {
      id: 4,
      type: "error",
      message: "Failed to sync data",
      read: false,
      timestamp: "3 hours ago",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [groupByType, setGroupByType] = useState(false);

  // Object mapping cho type: icon & color
  const typeConfig = {
    info: { icon: "ℹ️", color: "blue" },
    success: { icon: "✅", color: "green" },
    warning: { icon: "⚠️", color: "yellow" },
    error: { icon: "❌", color: "red" },
  };

  // Unread count
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Filtered notifications
  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  // Group by type nếu enabled
  const groups = filteredNotifications.reduce((acc, n) => {
    if (!acc[n.type]) acc[n.type] = [];
    acc[n.type].push(n);
    return acc;
  }, {});

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  // Clear all với confirmation
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      setNotifications([]);
    }
  };

  return (
    <div className="notification-center">
      {/* Header với controls */}
      <div className="header">
        <h2>
          Notifications
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </h2>

        {/* 3. Filter */}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>

        {/* 8. Group by type */}
        <label className="group-toggle">
          <input
            type="checkbox"
            checked={groupByType}
            onChange={(e) => setGroupByType(e.target.checked)}
          />
          Group by type
        </label>

        {/* 5. Mark all as read (nếu có unread) */}
        {unreadCount > 0 && (
          <button onClick={markAllAsRead}>Mark all as read</button>
        )}

        {/* 6. Clear all */}
        <button onClick={clearAll}>Clear all</button>
      </div>

      {/* 7. No notifications */}
      {filteredNotifications.length === 0 ? (
        <div className="no-notifications">No notifications</div>
      ) : groupByType ? (
        /* 8. Grouped view */
        Object.entries(groups).map(([type, notifs]) => (
          <div key={type} className="group-section">
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
            <ul className="notification-list">
              {notifs.map((n) => (
                <li
                  key={n.id}
                  className={`notification-item ${!n.read ? "unread" : ""}`}
                >
                  {/* 1. Icon dựa trên type */}
                  <span
                    className="icon"
                    style={{ color: typeConfig[n.type].color }}
                  >
                    {typeConfig[n.type].icon}
                  </span>

                  <span className="message">{n.message}</span>
                  <span className="timestamp">{n.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        /* Flat list */
        <ul className="notification-list">
          {filteredNotifications.map((n) => (
            <li
              key={n.id}
              className={`notification-item ${!n.read ? "unread" : ""}`}
            >
              {/* 1. Icon dựa trên type */}
              <span
                className="icon"
                style={{ color: typeConfig[n.type].color }}
              >
                {typeConfig[n.type].icon}
              </span>

              <span className="message">{n.message}</span>
              <span className="timestamp">{n.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationCenter;
