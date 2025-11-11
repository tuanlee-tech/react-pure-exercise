import { Card } from "@ui";
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
    "Commented on Sarah's story",
    "Shared a reel",
  ];

  const statConfig = {
    posts: { label: "Posts", icon: "📰" },
    followers: { label: "Followers", icon: "🧑‍🤝‍🧑" },
    following: { label: "Following", icon: "🔔" },
    likes: { label: "Likes", icon: "💖" },
  };

  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="user-dashboard-modern">
      {/* Stats Grid */}
      <div className="stats-grid-modern">
        {Object.entries(stats).map(([key, value]) => {
          const { label, icon } = statConfig[key];
          return (
            <Card key={key} className="stat-item-modern" data-type={key}>
              <div className="stat-icon-modern">{icon}</div>
              <div className="stat-value-modern">{formatNumber(value)}</div>
              <div className="stat-label-modern">{label}</div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="activities-section">
        <h3 className="activities-title">Recent Activities</h3>
        <ul className="activity-list">
          {recentActivities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
