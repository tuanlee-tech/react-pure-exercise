import { Card } from "@ui";
export default function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 phút trước",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 giờ trước",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 phút trước",
      points: 2100,
    },
  ];

  // 6. Sort theo points (cao → thấp)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // 8. Tổng số users mỗi role
  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const statusIcons = {
    online: "🟢",
    offline: "⚫",
    away: "🟡",
  };

  const roleClasses = {
    admin: "role-admin",
    moderator: "role-moderator",
    user: "role-user",
  };

  const roleLabels = {
    admin: "Admin",
    moderator: "Moderator",
    user: "User",
  };

  return (
    <div className="user-dashboard-vn">
      {/* Role Summary */}
      <Card className="role-summary-card">
        <h3 className="role-summary-title">Tổng quan vai trò</h3>
        <ul className="role-summary-list">
          {Object.entries(roleCounts).map(([role, count]) => (
            <li key={role} className="role-summary-item">
              <span>{roleLabels[role] || role}</span>
              <span>{count} người</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* User List */}
      {sortedUsers.length === 0 ? (
        <div className="empty-state-vn">Không tìm thấy người dùng nào</div>
      ) : (
        <div className="user-list-vn">
          {sortedUsers.map((user) => (
            <Card key={user.id} className="user-item-card">
              <div className="user-info">
                <div className="flex items-center gap-1 mb-1">
                  <span className="user-name-vn">{user.name}</span>
                  <span className={`role-badge-vn ${roleClasses[user.role]}`}>
                    {roleLabels[user.role]}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="user-status-vn">
                    <span className="status-dot">
                      {statusIcons[user.status]}
                    </span>
                    {user.status === "online"
                      ? "Đang hoạt động"
                      : user.status === "away"
                      ? "Vắng mặt"
                      : "Ngoại tuyến"}
                  </span>
                  {user.status !== "online" && (
                    <span className="last-active-vn">{user.lastActive}</span>
                  )}
                  <span className="user-points-vn">{user.points} điểm</span>
                </div>
              </div>

              {user.points > 1000 && (
                <span className="top-user-badge-vn">Top User</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
