import ExerciseCard from "../../../../../components/ExerciseCard";
import WeatherWidget from "./components/WeatherWidget";
import "./data/weathers";
import { weathers } from "./data/weathers";
import "./styles.css";
export default function Exercise2() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={2} title="Weather Widget" />

      <ExerciseCard.Description>
        {`
function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12 // km/h
  };

  // TODO:
  // 1. Hiển thị icon dựa vào condition (☀️ Sunny, 🌧️ Rainy, ☁️ Cloudy)
  // 2. Hiển thị nhiệt độ với unit °C
  // 3. Hiển thị thành phố
  // 4. Hiển thị humidity và wind speed
  // 5. Background color khác nhau cho mỗi condition
  
  return (
    <div className="weather-widget">
      {/* Your code here */}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="grid grid-cols-3">
          {weathers.map((weather) => (
            <div key={weather.city} className="grid-item">
              <WeatherWidget weather={weather} />
            </div>
          ))}
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Card } from "@ui";
export default function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12, // km/h
  };

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
    <Card className={\`weather-widget-modern \${current.bgClass}\`}>
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

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
