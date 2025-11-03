import React from "react";

function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 mins ago",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 hour ago",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 mins ago",
      points: 2100,
    },
  ];

  // 6. Sort users theo points (highest first)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // 8. Tổng số users mỗi role
  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  // Object mapping cho status icons
  const statusIcons = {
    online: "🟢",
    offline: "⚫",
    away: "🟡",
  };

  // Object mapping cho role classes (màu badge)
  const roleClasses = {
    admin: "bg-red",
    moderator: "bg-blue",
    user: "bg-green",
  };

  return (
    <div className="user-dashboard">
      {/* 8. Hiển thị tổng số users mỗi role */}
      <div className="role-summary">
        <h3>Role Summary</h3>
        <ul>
          {Object.entries(roleCounts).map(([role, count]) => (
            <li key={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}: {count}
            </li>
          ))}
        </ul>
      </div>

      {/* 7. Empty state nếu không có users */}
      {sortedUsers.length === 0 ? (
        <div className="empty-state">No users found</div>
      ) : (
        /* 1. Render danh sách users với key đúng */
        <ul className="user-list">
          {sortedUsers.map((user) => (
            <li key={user.id} className="user-item">
              <span className="user-name">{user.name}</span>

              {/* 2. Badge role với màu khác nhau */}
              <span className={`role-badge ${roleClasses[user.role]}`}>
                {user.role}
              </span>

              {/* 3. Status với icon */}
              <span className="user-status">
                {statusIcons[user.status]} {user.status}
              </span>

              {/* 4. Chỉ hiển thị lastActive nếu !== 'online' */}
              {user.status !== "online" && (
                <span className="last-active">{user.lastActive}</span>
              )}

              <span className="user-points">{user.points} points</span>

              {/* 5. "Top User" badge nếu points > 1000 */}
              {user.points > 1000 && (
                <span className="top-user-badge">Top User</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserDashboard;
