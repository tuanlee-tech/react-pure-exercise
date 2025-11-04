// StatCard.jsx
function StatCard({ title, value, icon, trend, trendValue }) {
  const isUp = trend === "up";
  const trendColor = isUp ? "text-green" : "text-red";
  const trendIcon = isUp ? "↗️" : "↘️";

  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>

      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value">{value}</div>
      </div>

      <div className={`trend ${trendColor}`}>
        <span className="trend-icon">{trendIcon}</span>
        <span className="trend-value">{trendValue}</span>
      </div>
    </div>
  );
}

export default StatCard;
