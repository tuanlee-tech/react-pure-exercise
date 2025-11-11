import ExerciseCard from "../../../../../components/ExerciseCard";
import UserDashboard from "./components/UserDashboard";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="User Stats Dashboard" />

      <ExerciseCard.Description>
        {`
function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith"
  ];

  // TODO:
  // 1. Hiển thị 4 stats trong grid layout
  // 2. Format numbers với commas (2,340)
  // 3. Hiển thị danh sách activities
  // 4. Thêm icons cho mỗi stat
  // 5. Dùng Fragment hợp lý
  
  return (
    // Your code here
  );
}


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <UserDashboard />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
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


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
