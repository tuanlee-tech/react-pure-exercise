export default function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678,
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith",
  ];

  // Object mapping: stat key → { label, icon }
  const statConfig = {
    posts: { label: "Posts", icon: "Post" },
    followers: { label: "Followers", icon: "Followers" },
    following: { label: "Following", icon: "Following" },
    likes: { label: "Likes", icon: "Heart" },
  };

  // Hàm format số có dấu phẩy
  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <>
      {/* 1. Grid hiển thị 4 stats */}
      <div className="stats-grid">
        {Object.entries(stats).map(([key, value]) => {
          const { label, icon } = statConfig[key];
          return (
            <div key={key} className="stat-item">
              {/* 4. Icon */}
              <div className="stat-icon">{icon}</div>
              {/* 2. Số đã format */}
              <div className="stat-value">{formatNumber(value)}</div>
              <div className="stat-label">{label}</div>
            </div>
          );
        })}
      </div>

      {/* 3. Danh sách hoạt động gần đây */}
      <div className="activities">
        <h3>Recent Activities</h3>
        <ul className="activity-list">
          {recentActivities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
