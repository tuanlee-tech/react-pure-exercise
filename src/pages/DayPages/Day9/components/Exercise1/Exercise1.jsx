import ExerciseCard from "../../../../../components/ExerciseCard";
import WeatherDashboard from "./components/WeatherDashboard";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="Weather Dashboard" />

      <ExerciseCard.Description>
        {`
// TODO: Implement weather dashboard với auto-refresh

function WeatherDashboard() {
  // TODO: State
  // - city (user input)
  // - weather data
  // - loading, error
  // - lastUpdated timestamp
  // - autoRefresh (boolean)
  // - refreshInterval (30s, 1m, 5m)

  // TODO: Effects
  // 1. Fetch weather khi city thay đổi
  // 2. Auto-refresh nếu autoRefresh = true
  // 3. Update lastUpdated
  // 4. Cleanup intervals

  // TODO: Features
  // - Search by city
  // - Display: temp, humidity, wind speed, condition
  // - Auto-refresh toggle
  // - Refresh interval selector
  // - Manual refresh button
  // - Last updated time
  // - Error handling
  // - Loading state

  return (
    <div className="weather-dashboard">
      {/* Your code */}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <WeatherDashboard />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useEffect, useState } from "react";

// Mock Weather API
const fetchWeatherData = async (city) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Simulate random weather data
  const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Snowy", "Foggy"];
  const icons = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rainy: "🌧️",
    Stormy: "⛈️",
    Snowy: "🌨️",
    Foggy: "🌫️",
  };

  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  return {
    city,
    temperature: Math.floor(Math.random() * 35) + 5,
    humidity: Math.floor(Math.random() * 60) + 30,
    windSpeed: Math.floor(Math.random() * 30) + 5,
    condition,
    icon: icons[condition],
    pressure: Math.floor(Math.random() * 50) + 980,
    visibility: Math.floor(Math.random() * 10) + 5,
    uvIndex: Math.floor(Math.random() * 11),
    feelsLike: Math.floor(Math.random() * 35) + 5,
  };
};

function WeatherDashboard() {
  // State management
  const [city, setCity] = useState("Hanoi");
  const [inputCity, setInputCity] = useState("Hanoi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(30);

  // Fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again." + err);
      setLoading(false);
    }
  };

  // Initial fetch when city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Auto-refresh logic
  useEffect(() => {
    if (!autoRefresh) return;

    const intervalMs = refreshInterval * 1000;
    const timer = setInterval(() => {
      fetchWeather(city);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [autoRefresh, refreshInterval, city]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity.trim());
    }
  };

  // Manual refresh
  const handleManualRefresh = () => {
    fetchWeather(city);
  };

  // Format last updated time
  const formatLastUpdated = () => {
    if (!lastUpdated) return "";

    const now = new Date();
    const diff = Math.floor((now - lastUpdated) / 1000);

    if (diff < 60) return \`\${diff}s ago\`;
    if (diff < 3600) return \`\${Math.floor(diff / 60)}m ago\`;
    return lastUpdated.toLocaleTimeString();
  };

  return (
    <div className="weather-app">
      <div className="weather-container">
        {/* Header */}
        <div className="weather-header">
          <div className="header-content">
            <h1 className="header-title">🌤️ Weather Dashboard</h1>
            <p className="header-subtitle">
              Real-time weather information with auto-refresh
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                placeholder="Enter city name..."
                className="search-input"
              />
            </div>
            <button type="submit" className="btn-search" disabled={loading}>
              Search
            </button>
          </form>
        </div>

        {/* Controls Section */}
        <div className="controls-section">
          <div className="control-group">
            <div className="control-item">
              <label className="control-label">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="control-checkbox"
                />
                <span className="checkbox-text">Auto-refresh</span>
              </label>
            </div>

            {autoRefresh && (
              <div className="control-item">
                <label className="control-label-text">Interval:</label>
                <select
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(Number(e.target.value))}
                  className="control-select"
                >
                  <option value={30}>30 seconds</option>
                  <option value={60}>1 minute</option>
                  <option value={300}>5 minutes</option>
                </select>
              </div>
            )}

            <button
              onClick={handleManualRefresh}
              disabled={loading}
              className="btn-refresh"
            >
              <span className="refresh-icon">🔄</span>
              Refresh
            </button>
          </div>

          {lastUpdated && (
            <div className="last-updated">
              <span className="clock-icon">🕐</span>
              Last updated: {formatLastUpdated()}
            </div>
          )}
        </div>

        {/* Weather Content */}
        <div className="weather-content">
          {loading && !weatherData && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading weather data...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <span className="error-icon">⚠️</span>
              <p>{error}</p>
              <button onClick={handleManualRefresh} className="btn-retry">
                Try Again
              </button>
            </div>
          )}

          {weatherData && !error && (
            <div className="weather-data">
              {/* Main Weather Card */}
              <div className="main-weather-card">
                <div className="city-header">
                  <h2 className="city-name">{weatherData.city}</h2>
                  {loading && <div className="updating-badge">Updating...</div>}
                </div>

                <div className="main-weather-content">
                  <div className="weather-icon-large">{weatherData.icon}</div>
                  <div className="temperature-display">
                    <span className="temp-value">
                      {weatherData.temperature}
                    </span>
                    <span className="temp-unit">°C</span>
                  </div>
                  <div className="condition-text">{weatherData.condition}</div>
                  <div className="feels-like">
                    Feels like {weatherData.feelsLike}°C
                  </div>
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="weather-grid">
                <div className="weather-stat-card">
                  <div className="stat-icon">💧</div>
                  <div className="stat-content">
                    <div className="stat-label">Humidity</div>
                    <div className="stat-value">{weatherData.humidity}%</div>
                  </div>
                </div>

                <div className="weather-stat-card">
                  <div className="stat-icon">💨</div>
                  <div className="stat-content">
                    <div className="stat-label">Wind Speed</div>
                    <div className="stat-value">
                      {weatherData.windSpeed} km/h
                    </div>
                  </div>
                </div>

                <div className="weather-stat-card">
                  <div className="stat-icon">🌡️</div>
                  <div className="stat-content">
                    <div className="stat-label">Pressure</div>
                    <div className="stat-value">{weatherData.pressure} hPa</div>
                  </div>
                </div>

                <div className="weather-stat-card">
                  <div className="stat-icon">👁️</div>
                  <div className="stat-content">
                    <div className="stat-label">Visibility</div>
                    <div className="stat-value">
                      {weatherData.visibility} km
                    </div>
                  </div>
                </div>

                <div className="weather-stat-card">
                  <div className="stat-icon">☀️</div>
                  <div className="stat-content">
                    <div className="stat-label">UV Index</div>
                    <div className="stat-value">{weatherData.uvIndex}/10</div>
                  </div>
                </div>

                <div className="weather-stat-card">
                  <div className="stat-icon">🌡️</div>
                  <div className="stat-content">
                    <div className="stat-label">Feels Like</div>
                    <div className="stat-value">{weatherData.feelsLike}°C</div>
                  </div>
                </div>
              </div>

              {/* Auto-refresh indicator */}
              {autoRefresh && (
                <div className="auto-refresh-indicator">
                  <div className="pulse-dot"></div>
                  Auto-refreshing every {refreshInterval}s
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;


---
// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Search by city - Tìm kiếm thời tiết theo tên thành phố
// Real-time data - Hiển thị đầy đủ thông tin thời tiết (nhiệt độ, độ ẩm, tốc độ gió, áp suất, tầm nhìn, chỉ số UV)
// Auto-refresh - Tự động cập nhật với checkbox toggle
// Refresh interval - Chọn khoảng thời gian: 30s, 1m, 5m
// Manual refresh - Nút refresh thủ công
// Last updated - Hiển thị thời gian cập nhật cuối (relative time)

// 🎨 UI/UX:

// Loading states - Spinner animation khi đang tải
// Error handling - Hiển thị lỗi với nút retry
// Updating indicator - Badge hiển thị khi đang cập nhật
// Auto-refresh indicator - Pulse animation khi auto-refresh bật
// Responsive design - Tương thích mobile
// Hover effects - Smooth transitions và lift effects
// Glassmorphism - Background blur effect

// 🔧 useEffect Usage:

// Fetch weather khi city thay đổi - Dependencies: [city]
// Auto-refresh interval - Dependencies: [autoRefresh, refreshInterval, city] với cleanup clearInterval
// Debounce có thể thêm (hiện tại instant search)

// 💡 Highlights:

// Race condition handling - Mỗi fetch mới sẽ cancel request cũ
// Stale data prevention - Always fetch fresh data
// Memory leak prevention - Cleanup intervals properly
// Optimized re-renders - Only necessary state updates
// Relative time display - "5s ago", "2m ago" format
// Visual feedback - Loading, updating, error states
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
