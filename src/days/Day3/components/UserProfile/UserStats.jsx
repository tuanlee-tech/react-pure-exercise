export default function UserStats({ posts, followers, following }) {
  const formatNumber = (num) => num.toLocaleString("en-US");
  return (
    <div className="user-stats">
      <div className="stat-item" role="button">
        <div className="stat-value">{formatNumber(posts)}</div>
        <div className="stat-label">Posts</div>
      </div>
      <div className="stat-item" role="button">
        <div className="stat-value">{formatNumber(followers)}</div>
        <div className="stat-label">Followers</div>
      </div>
      <div className="stat-item" role="button">
        <div className="stat-value">{formatNumber(following)}</div>
        <div className="stat-label">Following</div>
      </div>
    </div>
  );
}
