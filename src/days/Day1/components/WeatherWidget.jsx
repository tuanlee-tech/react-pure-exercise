export default function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12, // km/h
  };

  // TODO:
  // 1. Hiển thị icon dựa vào condition (☀️ Sunny, 🌧️ Rainy, ☁️ Cloudy)
  // 2. Hiển thị nhiệt độ với unit °C
  // 3. Hiển thị thành phố
  // 4. Hiển thị humidity và wind speed
  // 5. Background color khác nhau cho mỗi condition

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
    <div className={`weather-widget ${current.bgClass}`}>
      {/* 3. Thành phố */}
      <h2 className="city">{weather.city}</h2>

      {/* 1. Icon thời tiết */}
      <div className="weather-icon">{current.icon}</div>

      {/* 2. Nhiệt độ */}
      <div className="temperature">{weather.temperature}°C</div>
      {/* 4. Humidity & Wind */}
      <div className="details">
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind</span>
          <span className="value">{weather.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
