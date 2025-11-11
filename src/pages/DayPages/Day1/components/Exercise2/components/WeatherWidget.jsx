import { Card } from "@ui";
const init = {
  city: "Hanoi",
  temperature: 28,
  condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
  humidity: 65,
  wind: 12, // km/h
};
export default function WeatherWidget({ weather = init }) {
  const conditionMap = {
    Sunny: {
      icon: "☀️",
      bgClass: "bg-sunny",
    },
    Rainy: {
      icon: "🌧️",
      bgClass: "bg-rainy",
    },
    Cloudy: {
      icon: "☁️",
      bgClass: "bg-cloudy",
    },
  };

  const current = conditionMap[weather.condition];

  return (
    <Card className={`weather-widget-modern ${current.bgClass}`}>
      {/* Thành phố */}
      <h2 className="weather-city">{weather.city}</h2>

      {/* Icon thời tiết + hiệu ứng */}
      <div className="weather-icon-big">{current.icon}</div>

      {/* Nhiệt độ */}
      <div className="weather-temperature">{weather.temperature}°C</div>

      {/* Chi tiết */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.wind} km/h</span>
        </div>
      </div>
    </Card>
  );
}
