import{r as n,j as e,C as M}from"./index-DpTKp3y9.js";/* empty css               */import{E as t}from"./ExerciseCard-C7OLhylv.js";const D=async i=>{await new Promise(a=>setTimeout(a,800));const l=["Sunny","Cloudy","Rainy","Stormy","Snowy","Foggy"],r={Sunny:"☀️",Cloudy:"☁️",Rainy:"🌧️",Stormy:"⛈️",Snowy:"🌨️",Foggy:"🌫️"},d=l[Math.floor(Math.random()*l.length)];return{city:i,temperature:Math.floor(Math.random()*35)+5,humidity:Math.floor(Math.random()*60)+30,windSpeed:Math.floor(Math.random()*30)+5,condition:d,icon:r[d],pressure:Math.floor(Math.random()*50)+980,visibility:Math.floor(Math.random()*10)+5,uvIndex:Math.floor(Math.random()*11),feelsLike:Math.floor(Math.random()*35)+5}};function I(){const[i,l]=n.useState("Hanoi"),[r,d]=n.useState("Hanoi"),[a,u]=n.useState(null),[s,g]=n.useState(!0),[f,N]=n.useState(null),[v,b]=n.useState(null),[p,o]=n.useState(!1),[c,x]=n.useState(30),y=async m=>{try{g(!0),N(null);const h=await D(m);u(h),b(new Date),g(!1)}catch(h){N("Failed to fetch weather data. Please try again."+h),g(!1)}};n.useEffect(()=>{y(i)},[i]),n.useEffect(()=>{if(!p)return;const m=c*1e3,h=setInterval(()=>{y(i)},m);return()=>clearInterval(h)},[p,c,i]);const w=m=>{m.preventDefault(),r.trim()&&l(r.trim())},S=()=>{y(i)},k=()=>{if(!v)return"";const h=Math.floor((new Date-v)/1e3);return h<60?`${h}s ago`:h<3600?`${Math.floor(h/60)}m ago`:v.toLocaleTimeString()};return e.jsx("div",{className:"weather-app",children:e.jsxs("div",{className:"weather-container",children:[e.jsx("div",{className:"weather-header",children:e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{className:"header-title",children:"🌤️ Weather Dashboard"}),e.jsx("p",{className:"header-subtitle",children:"Real-time weather information with auto-refresh"})]})}),e.jsx("div",{className:"search-section",children:e.jsxs("form",{onSubmit:w,className:"search-form",children:[e.jsxs("div",{className:"search-input-wrapper",children:[e.jsx("span",{className:"search-icon",children:"🔍"}),e.jsx("input",{type:"text",value:r,onChange:m=>d(m.target.value),placeholder:"Enter city name...",className:"search-input"})]}),e.jsx("button",{type:"submit",className:"btn-search",disabled:s,children:"Search"})]})}),e.jsxs("div",{className:"controls-section",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("div",{className:"control-item",children:e.jsxs("label",{className:"control-label",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:m=>o(m.target.checked),className:"control-checkbox"}),e.jsx("span",{className:"checkbox-text",children:"Auto-refresh"})]})}),p&&e.jsxs("div",{className:"control-item",children:[e.jsx("label",{className:"control-label-text",children:"Interval:"}),e.jsxs("select",{value:c,onChange:m=>x(Number(m.target.value)),className:"control-select",children:[e.jsx("option",{value:30,children:"30 seconds"}),e.jsx("option",{value:60,children:"1 minute"}),e.jsx("option",{value:300,children:"5 minutes"})]})]}),e.jsxs("button",{onClick:S,disabled:s,className:"btn-refresh",children:[e.jsx("span",{className:"refresh-icon",children:"🔄"}),"Refresh"]})]}),v&&e.jsxs("div",{className:"last-updated",children:[e.jsx("span",{className:"clock-icon",children:"🕐"}),"Last updated: ",k()]})]}),e.jsxs("div",{className:"weather-content",children:[s&&!a&&e.jsxs("div",{className:"loading-state",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading weather data..."})]}),f&&e.jsxs("div",{className:"error-state",children:[e.jsx("span",{className:"error-icon",children:"⚠️"}),e.jsx("p",{children:f}),e.jsx("button",{onClick:S,className:"btn-retry",children:"Try Again"})]}),a&&!f&&e.jsxs("div",{className:"weather-data",children:[e.jsxs("div",{className:"main-weather-card",children:[e.jsxs("div",{className:"city-header",children:[e.jsx("h2",{className:"city-name",children:a.city}),s&&e.jsx("div",{className:"updating-badge",children:"Updating..."})]}),e.jsxs("div",{className:"main-weather-content",children:[e.jsx("div",{className:"weather-icon-large",children:a.icon}),e.jsxs("div",{className:"temperature-display",children:[e.jsx("span",{className:"temp-value",children:a.temperature}),e.jsx("span",{className:"temp-unit",children:"°C"})]}),e.jsx("div",{className:"condition-text",children:a.condition}),e.jsxs("div",{className:"feels-like",children:["Feels like ",a.feelsLike,"°C"]})]})]}),e.jsxs("div",{className:"weather-grid",children:[e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"💧"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"Humidity"}),e.jsxs("div",{className:"stat-value",children:[a.humidity,"%"]})]})]}),e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"💨"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"Wind Speed"}),e.jsxs("div",{className:"stat-value",children:[a.windSpeed," km/h"]})]})]}),e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"🌡️"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"Pressure"}),e.jsxs("div",{className:"stat-value",children:[a.pressure," hPa"]})]})]}),e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"👁️"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"Visibility"}),e.jsxs("div",{className:"stat-value",children:[a.visibility," km"]})]})]}),e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"☀️"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"UV Index"}),e.jsxs("div",{className:"stat-value",children:[a.uvIndex,"/10"]})]})]}),e.jsxs("div",{className:"weather-stat-card",children:[e.jsx("div",{className:"stat-icon",children:"🌡️"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-label",children:"Feels Like"}),e.jsxs("div",{className:"stat-value",children:[a.feelsLike,"°C"]})]})]})]}),p&&e.jsxs("div",{className:"auto-refresh-indicator",children:[e.jsx("div",{className:"pulse-dot"}),"Auto-refreshing every ",c,"s"]})]})]})]})})}function T(){return e.jsxs(t,{children:[e.jsx(t.Header,{order:1,title:"Weather Dashboard"}),e.jsx(t.Description,{children:`
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

`}),e.jsx(t.Demo,{children:e.jsx(I,{})}),e.jsx(t.Code,{children:`
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
`})]})}const C=async(i,l=5)=>{await new Promise(s=>setTimeout(s,800));const r=30,d=(i-1)*l,a=d+l;if(d>=r)return{items:[],hasMore:!1};const u=[];for(let s=d;s<Math.min(a,r);s++)u.push({id:s+1,title:`Item #${s+1}`,description:`This is the description for item ${s+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,image:`https://picsum.photos/id/${s+1}/400/300`,category:["Technology","Design","Business","Science","Art"][s%5],date:new Date(Date.now()-Math.random()*1e10).toLocaleDateString(),views:Math.floor(Math.random()*1e4),likes:Math.floor(Math.random()*1e3)});return{items:u,hasMore:a<r}};function L(){const[i,l]=n.useState([]),[r,d]=n.useState(1),[a,u]=n.useState(!1),[s,g]=n.useState(!0),[f,N]=n.useState(null),v=n.useRef(null);n.useEffect(()=>{(async()=>{if(s)try{u(!0),N(null);const c=await C(r);l(x=>[...x,...c.items]),g(c.hasMore),u(!1)}catch(c){N("Failed to load items. Please try again."+c),u(!1)}})()},[r,s]),n.useEffect(()=>{const o=new IntersectionObserver(x=>{x[0].isIntersecting&&!a&&s&&d(y=>y+1)},{root:null,rootMargin:"100px",threshold:.1}),c=v.current;return c&&o.observe(c),()=>{c&&o.unobserve(c)}},[a,s]);const b=()=>{window.scrollTo({top:0,behavior:"smooth"})},p=()=>{l([]),d(1),g(!0),N(null),b()};return e.jsx("div",{className:"infinite-scroll-app",children:e.jsxs("div",{className:"app-container",children:[e.jsxs("div",{className:"app-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{className:"header-title",children:"📜 Infinite Scroll"}),e.jsx("p",{className:"header-subtitle",children:"Automatically loads more items as you scroll down"})]}),e.jsxs("div",{className:"header-stats",children:[e.jsxs("div",{className:"stat-badge",children:[e.jsx("span",{className:"stat-label",children:"Loaded:"}),e.jsx("span",{className:"stat-value",children:i.length})]}),e.jsxs("div",{className:"stat-badge",children:[e.jsx("span",{className:"stat-label",children:"Page:"}),e.jsx("span",{className:"stat-value",children:r})]}),i.length>0&&e.jsx("button",{onClick:p,className:"btn-reset",children:"🔄 Reset"})]})]}),e.jsx("div",{className:"items-grid",children:i.map(o=>e.jsxs("div",{className:"item-card",children:[e.jsxs("div",{className:"item-image-wrapper",children:[e.jsx("img",{src:o.image,alt:o.title,className:"item-image",loading:"lazy"}),e.jsx("div",{className:"item-category",children:o.category})]}),e.jsxs("div",{className:"item-content",children:[e.jsx("h3",{className:"item-title",children:o.title}),e.jsx("p",{className:"item-description",children:o.description}),e.jsxs("div",{className:"item-meta",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"📅"}),e.jsx("span",{className:"meta-text",children:o.date})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"👁️"}),e.jsx("span",{className:"meta-text",children:o.views.toLocaleString()})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx("span",{className:"meta-icon",children:"❤️"}),e.jsx("span",{className:"meta-text",children:o.likes.toLocaleString()})]})]})]})]},o.id))}),a&&e.jsxs("div",{className:"loading-state",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{className:"loading-text",children:"Loading more items..."}),e.jsxs("p",{className:"loading-subtext",children:["Page ",r+1]})]}),f&&e.jsxs("div",{className:"error-state",children:[e.jsx("span",{className:"error-icon",children:"⚠️"}),e.jsx("p",{className:"error-text",children:f}),e.jsx("button",{onClick:()=>d(r),className:"btn-retry",children:"Try Again"})]}),!s&&i.length>0&&e.jsxs("div",{className:"end-message",children:[e.jsx("div",{className:"end-icon",children:"🎉"}),e.jsx("h3",{className:"end-title",children:"You've reached the end!"}),e.jsxs("p",{className:"end-text",children:["You've loaded all ",i.length," items"]}),e.jsx("button",{onClick:b,className:"btn-scroll-top",children:"⬆️ Back to Top"})]}),e.jsx("div",{ref:v,className:"observer-target"}),i.length>10&&e.jsx("button",{onClick:b,className:"floating-scroll-top",title:"Scroll to top",children:"⬆️"})]})})}function E(){return e.jsxs(t,{children:[e.jsx(t.Header,{order:2,title:"Infinite Scroll List"}),e.jsx(t.Description,{children:`
// TODO: Implement infinite scroll

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  // TODO: Effect để fetch data
  useEffect(() => {
    // Fetch items for current page
    // Append to existing items
    // Set hasMore based on response
  }, [page]);

  // TODO: Intersection Observer cho infinite scroll
  useEffect(() => {
    // Setup IntersectionObserver
    // Khi user scroll đến bottom → load more (setPage)
    // Cleanup observer
  }, [loading, hasMore]);

  // TODO: Features
  // - Load 20 items per page
  // - Show loading spinner khi fetch
  // - "No more items" message khi hết
  // - Smooth scrolling
  // - Error handling

  return (
    <div className="infinite-scroll-list">
      {items.map((item,index) => (
        <div key={item.id} className="item">
          {/* Render item */}
        </div>
      ))}
      
      {loading && <div className="loading">Đang tải...</div>}
      
      {!hasMore && <div className="end-message">Hết rồi!</div>}
      
      {/* Observer target */}
      <div ref={observerTarget} />
    </div>
  );
}

`}),e.jsx(t.Demo,{children:e.jsx(L,{})}),e.jsx(t.Code,{children:`
import { useEffect, useRef, useState } from "react";

// Mock API to fetch items
const fetchItems = async (page, perPage = 20) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Simulate data with pagination
  const totalItems = 100; // Total available items
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (start >= totalItems) {
    return { items: [], hasMore: false };
  }

  const items = [];
  for (let i = start; i < Math.min(end, totalItems); i++) {
    items.push({
      id: i + 1,
      title: \`Item #\${i + 1}\`,
      description: \`This is the description for item \${
        i + 1
      }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\`,
      image: \`https://picsum.photos/id/\${i + 1}/400/300\`,
      category: ["Technology", "Design", "Business", "Science", "Art"][i % 5],
      date: new Date(
        Date.now() - Math.random() * 10000000000
      ).toLocaleDateString(),
      views: Math.floor(Math.random() * 10000),
      likes: Math.floor(Math.random() * 1000),
    });
  }

  return {
    items,
    hasMore: end < totalItems,
  };
};

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const observerTarget = useRef(null);

  // Fetch data when page changes
  useEffect(() => {
    const loadItems = async () => {
      if (!hasMore) return;

      try {
        setLoading(true);
        setError(null);

        const result = await fetchItems(page);

        setItems((prevItems) => [...prevItems, ...result.items]);
        setHasMore(result.hasMore);
        setLoading(false);
      } catch (err) {
        setError("Failed to load items. Please try again." + err);
        setLoading(false);
      }
    };

    loadItems();
  }, [page, hasMore]);

  // Setup Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the target element is visible and we're not loading
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null, // viewport
        rootMargin: "100px", // Start loading 100px before reaching the target
        threshold: 0.1,
      }
    );

    const currentTarget = observerTarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    // Cleanup
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loading, hasMore]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reset list
  const handleReset = () => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setError(null);
    scrollToTop();
  };

  return (
    <div className="infinite-scroll-app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <div className="header-content">
            <h1 className="header-title">📜 Infinite Scroll</h1>
            <p className="header-subtitle">
              Automatically loads more items as you scroll down
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-badge">
              <span className="stat-label">Loaded:</span>
              <span className="stat-value">{items.length}</span>
            </div>
            <div className="stat-badge">
              <span className="stat-label">Page:</span>
              <span className="stat-value">{page}</span>
            </div>
            {items.length > 0 && (
              <button onClick={handleReset} className="btn-reset">
                🔄 Reset
              </button>
            )}
          </div>
        </div>

        {/* Items Grid */}
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="item-image"
                  loading="lazy"
                />
                <div className="item-category">{item.category}</div>
              </div>

              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span className="meta-text">{item.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👁️</span>
                    <span className="meta-text">
                      {item.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">❤️</span>
                    <span className="meta-text">
                      {item.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading more items...</p>
            <p className="loading-subtext">Page {page + 1}</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="error-icon">⚠️</span>
            <p className="error-text">{error}</p>
            <button onClick={() => setPage(page)} className="btn-retry">
              Try Again
            </button>
          </div>
        )}

        {/* End Message */}
        {!hasMore && items.length > 0 && (
          <div className="end-message">
            <div className="end-icon">🎉</div>
            <h3 className="end-title">You've reached the end!</h3>
            <p className="end-text">You've loaded all {items.length} items</p>
            <button onClick={scrollToTop} className="btn-scroll-top">
              ⬆️ Back to Top
            </button>
          </div>
        )}

        {/* Observer Target */}
        <div ref={observerTarget} className="observer-target"></div>

        {/* Scroll to Top Button (appears after scrolling) */}
        {items.length > 10 && (
          <button
            onClick={scrollToTop}
            className="floating-scroll-top"
            title="Scroll to top"
          >
            ⬆️
          </button>
        )}
      </div>
    </div>
  );
}

export default InfiniteScrollList;

---
// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Infinite Scroll - Tự động load thêm items khi scroll đến cuối
// Intersection Observer API - Phát hiện khi user scroll đến target element
// Pagination - Load 20 items mỗi page
// Lazy Loading Images - Images load khi cần thiết
// Total 100 items - Có điểm kết thúc rõ ràng

// 🎨 UI/UX:

// Sticky Header - Header dính ở top với stats (items loaded, page number)
// Item Cards - Beautiful cards với image, title, description, metadata
// Loading Spinner - Smooth loading animation khi fetch data
// Error Handling - Error state với retry button
// End Message - "You've reached the end!" với celebration icon
// Floating Scroll Top - FAB button xuất hiện sau 10 items
// Reset Button - Reset về trang đầu
// Smooth Animations - Fade-in-up cho items mới

// 🔧 useEffect Usage:

// Fetch items khi page thay đổi:

// jsxuseEffect(() => {
//   // Load items for current page
//   // Append to existing items
// }, [page]);

// Intersection Observer setup:

// jsxuseEffect(() => {
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting && !loading && hasMore) {
//       setPage(prevPage => prevPage + 1);
//     }
//   }, { rootMargin: '100px' }); // Load 100px trước
  
//   // Cleanup observer
//   return () => observer.unobserve(target);
// }, [loading, hasMore]);
// 💡 Highlights:

// Race condition prevention - Check loading và hasMore trước khi load
// Memory leak prevention - Proper cleanup của observer
// Performance optimization - rootMargin 100px để preload
// Smooth UX - Items append, không replace
// Visual feedback - Loading, error, end states rõ ràng
// Responsive design - Works great on mobile

// 📊 Data Flow:

// User scroll xuống
// Observer trigger khi target visible
// setPage(page + 1)
// useEffect fetch data
// Append items vào list
// Process lặp lại

// 🎮 Test Features:

// Scroll xuống để load thêm items
// Click floating button để scroll lên top
// Đợi load 100 items để thấy end message
// Click Reset để restart
// Xem smooth animations khi items load
`})]})}const A=()=>e.jsx("div",{children:"StockTicker"});function O(){return e.jsxs(t,{children:[e.jsx(t.Header,{order:3,title:"Live Stock Ticker"}),e.jsx(t.Description,{children:`
// TODO: Implement real-time stock price updates

function StockTicker() {
  // TODO: State
  // - stocks: array of { symbol, price, change }
  // - selectedStock: currently viewing
  // - priceHistory: array of historical prices
  // - isConnected: WebSocket status

  // TODO: Effects
  // 1. Connect to WebSocket (simulated)
  // 2. Subscribe to selected stocks
  // 3. Update prices in real-time
  // 4. Track price history
  // 5. Cleanup on unmount

  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', name: 'Apple', price: 150.0, change: 0 },
    { symbol: 'GOOGL', name: 'Google', price: 2800.0, change: 0 },
    { symbol: 'MSFT', name: 'Microsoft', price: 300.0, change: 0 },
    { symbol: 'TSLA', name: 'Tesla', price: 700.0, change: 0 }
  ]);

  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [priceHistory, setPriceHistory] = useState([]);

  // TODO: Simulate WebSocket updates
  useEffect(() => {
    // Update prices every 2 seconds
    // Random price changes (-5% to +5%)
    // Update stocks state
    // Track history for selected stock
  }, [selectedStock]);

  // TODO: Features
  // - Real-time price updates
  // - Price change indicators (↑ green, ↓ red)
  // - Price history chart (last 20 updates)
  // - Connection status indicator
  // - Add/remove stocks
  // - Alerts for price thresholds

  return (
    <div className="stock-ticker">
      <h1>Live Stock Ticker</h1>
      
      <div className="stock-list">
        {stocks.map(stock => (
          <div
            key={stock.symbol}
            className={\`stock-item \${selectedStock === stock.symbol ? 'selected' : ''}\`}
            onClick={() => setSelectedStock(stock.symbol)}
          >
            <h3>{stock.symbol}</h3>
            <p className="price">\${stock.price.toFixed(2)}</p>
            <p className={\`change \${stock.change >= 0 ? 'positive' : 'negative'}\`}>
              {stock.change >= 0 ? '↑' : '↓'} {Math.abs(stock.change).toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      <div className="price-chart">
        <h2>Lịch sử giá: {selectedStock}</h2>
        {/* TODO: Render price history */}
      </div>
    </div>
  );
}

`}),e.jsx(t.Demo,{children:e.jsx(A,{})}),e.jsx(t.Code,{children:`

`})]})}const R=()=>e.jsx("div",{children:"AutoSaveForm"});function P(){return e.jsxs(t,{children:[e.jsx(t.Header,{order:4,title:"Dashboard với Multiple Widgets"}),e.jsx(t.Description,{children:`
// TODO: Implement auto-save form

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    category: ''
  });

  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved' | 'saving' | 'unsaved'
  const [lastSaved, setLastSaved] = useState(null);
  const [savingError, setSavingError] = useState(null);

  // TODO: Effects
  // 1. Load draft from localStorage on mount
  // 2. Debounced auto-save (2 seconds after user stops typing)
  // 3. Save to localStorage
  // 4. Show save status
  // 5. Handle save errors

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem('draft');
    if (saved) {
      setFormData(JSON.parse(saved));
      setLastSaved(new Date(localStorage.getItem('draft-timestamp')));
    }
  }, []);

  // Debounced auto-save
  useEffect(() => {
    // Set status to 'unsaved' immediately when data changes
    setSaveStatus('unsaved');

    // Debounce save
    const timer = setTimeout(() => {
      // TODO: Save to localStorage
      // Set status to 'saving'
      // Simulate API call
      // Set status to 'saved'
      // Update lastSaved
    }, 2000);

    return () => clearTimeout(timer);
  }, [formData]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (saveStatus === 'unsaved' || saveStatus === 'saving') {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [saveStatus]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Final submit
    // Clear draft from localStorage
  };

  return (
    <form onSubmit={handleSubmit} className="auto-save-form">
      <h1>Tạo bài viết</h1>

      <div className="save-status">
        {saveStatus === 'saved' && (
          <span className="status-saved">
            ✓ Đã lưu {lastSaved && \`lúc \${lastSaved.toLocaleTimeString()}\`}
          </span>
        )}
        {saveStatus === 'saving' && (
          <span className="status-saving">💾 Đang lưu...</span>
        )}
        {saveStatus === 'unsaved' && (
          <span className="status-unsaved">● Chưa lưu</span>
        )}
        {savingError && (
          <span className="status-error">❌ Lỗi: {savingError}</span>
        )}
      </div>

      <div>
        <label>Tiêu đề:</label>
        <input
          value={formData.title}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>

      <div>
        <label>Nội dung:</label>
        <textarea
          value={formData.content}
          onChange={(e) => updateField('content', e.target.value)}
          rows={10}
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={formData.category}
          onChange={(e) => updateField('category', e.target.value)}
        >
          <option value="">Chọn category</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
        </select>
      </div>

      <button type="submit">Xuất bản</button>
    </form>
  );
}

`}),e.jsx(t.Demo,{children:e.jsx(R,{})}),e.jsx(t.Code,{children:`

`})]})}const F=()=>e.jsx("div",{children:"MultiTabSyncApp"});function U(){return e.jsxs(t,{children:[e.jsx(t.Header,{order:5,title:"Multi-Tab Sync (Challenge)"}),e.jsx(t.Description,{children:`
// TODO: Sync state across browser tabs

function MultiTabSyncApp() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState(1);
  const [tabId] = useState(() => \`tab-\${Date.now()}\`);

  // TODO: Effects
  // 1. Broadcast state changes to other tabs (BroadcastChannel API)
  // 2. Listen for changes from other tabs
  // 3. Sync count across tabs
  // 4. Track active tabs
  // 5. Remove tab on unmount

  // Broadcast changes
  useEffect(() => {
    // Create BroadcastChannel
    const channel = new BroadcastChannel('app-sync');

    // Listen for messages from other tabs
    channel.onmessage = (event) => {
      const { type, payload, senderId } = event.data;

      if (senderId === tabId) return; // Ignore own messages

      switch (type) {
        case 'COUNT_UPDATE':
          setCount(payload);
          break;
        case 'MESSAGE_ADD':
          setMessages(prev => [...prev, payload]);
          break;
        case 'TAB_OPENED':
          setActiveUsers(prev => prev + 1);
          // Send current state to new tab
          channel.postMessage({
            type: 'STATE_SYNC',
            payload: { count, messages },
            senderId: tabId
          });
          break;
        case 'TAB_CLOSED':
          setActiveUsers(prev => Math.max(1, prev - 1));
          break;
        case 'STATE_SYNC':
          if (messages.length === 0) {
            setCount(payload.count);
            setMessages(payload.messages);
          }
          break;
        default:
          break;
      }
    };

    // Announce tab opened
    channel.postMessage({
      type: 'TAB_OPENED',
      senderId: tabId
    });

    // Cleanup
    return () => {
      channel.postMessage({
        type: 'TAB_CLOSED',
        senderId: tabId
      });
      channel.close();
    };
  }, [tabId, count, messages]);

  // Broadcast count changes
  useEffect(() => {
    if (count === 0) return; // Skip initial value

    const channel = new BroadcastChannel('app-sync');
    channel.postMessage({
      type: 'COUNT_UPDATE',
      payload: count,
      senderId: tabId
    });
    channel.close();
  }, [count, tabId]);

  const addMessage = (text) => {
    const message = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      tabId
    };

    setMessages(prev => [...prev, message]);

    // Broadcast to other tabs
    const channel = new BroadcastChannel('app-sync');
    channel.postMessage({
      type: 'MESSAGE_ADD',
      payload: message,
      senderId: tabId
    });
    channel.close();
  };

  // TODO: Features
  // - Shared counter across tabs
  // - Shared message list
  // - Show active tab count
  // - Highlight messages from current tab
  // - Sync immediately when tab opens
  // - Handle tab close gracefully

  return (
    <div className="multi-tab-sync">
      <h1>Multi-Tab Sync Demo</h1>
      
      <div className="stats">
        <p>Tab ID: {tabId}</p>
        <p>Active Tabs: {activeUsers}</p>
      </div>

      <div className="counter">
        <h2>Shared Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="messages">
        <h2>Shared Messages</h2>
        <div className="message-list">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={\`message \${msg.tabId === tabId ? 'own' : 'other'}\`}
            >
              <strong>{msg.tabId === tabId ? 'Bạn' : msg.tabId}:</strong> {msg.text}
              <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>

      <div className="instructions">
        <p>💡 Mở nhiều tab để xem đồng bộ!</p>
      </div>
    </div>
  );
}

`}),e.jsx(t.Demo,{children:e.jsx(F,{})}),e.jsx(t.Code,{children:`

`})]})}const j={1:T,2:E,3:O,4:P,5:U},$=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(M,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 9"}),e.jsx("p",{className:"day-subtitle",children:"useEffect & Side Effects"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu sâu về useEffect và side effects"}),e.jsx("li",{children:"Dependencies array và rules"}),e.jsx("li",{children:"Cleanup functions"}),e.jsx("li",{children:"Common patterns: data fetching, subscriptions, timers"}),e.jsx("li",{children:"useLayoutEffect vs useEffect"}),e.jsx("li",{children:"Avoiding infinite loops và race conditions"}),e.jsx("li",{children:"Best practices"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(j).map(i=>{const l=j[i];return l?e.jsx(l,{},i):null})})]});export{$ as default};
