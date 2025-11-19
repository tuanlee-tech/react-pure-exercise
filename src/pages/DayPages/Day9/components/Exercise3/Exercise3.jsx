import ExerciseCard from "../../../../../components/ExerciseCard.jsx";
import StockTicker from "./components/StockTicker.jsx";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Live Stock Ticker" />

      <ExerciseCard.Description>
        {`
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

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <StockTicker />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useEffect, useRef, useState } from "react";

// Initial stock data
const INITIAL_STOCKS = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.0, change: 0, history: [] },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2800.0,
    change: 0,
    history: [],
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: 300.0,
    change: 0,
    history: [],
  },
  { symbol: "TSLA", name: "Tesla Inc.", price: 700.0, change: 0, history: [] },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 3200.0,
    change: 0,
    history: [],
  },
  {
    symbol: "META",
    name: "Meta Platforms",
    price: 280.0,
    change: 0,
    history: [],
  },
];

function StockTicker() {
  const [stocks, setStocks] = useState(INITIAL_STOCKS);
  const [selectedStock, setSelectedStock] = useState("AAPL");
  const [priceHistory, setPriceHistory] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [alerts, setAlerts] = useState({});
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertSymbol, setAlertSymbol] = useState("");
  const [alertPrice, setAlertPrice] = useState("");
  const [alertType, setAlertType] = useState("above");
  const updateCountRef = useRef(0);

  // Simulate WebSocket connection on mount
  useEffect(() => {
    setIsConnected(true);
    return () => setIsConnected(false);
  }, []);

  // Real-time price updates (simulated WebSocket)
  useEffect(() => {
    if (!isConnected) return;

    const updateInterval = setInterval(() => {
      setStocks((prevStocks) => {
        return prevStocks.map((stock) => {
          // Random price change between -5% and +5%
          const changePercent = (Math.random() - 0.5) * 0.1; // -5% to +5%
          const priceChange = stock.price * changePercent;
          const newPrice = Math.max(stock.price + priceChange, 1); // Minimum $1

          // Calculate percent change from original
          const originalPrice =
            INITIAL_STOCKS.find((s) => s.symbol === stock.symbol)?.price ||
            stock.price;
          const percentChange =
            ((newPrice - originalPrice) / originalPrice) * 100;

          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(percentChange.toFixed(2)),
          };
        });
      });

      updateCountRef.current += 1;
    }, 2000); // Update every 2 seconds

    return () => clearInterval(updateInterval);
  }, [isConnected]);

  // Track price history for selected stock
  useEffect(() => {
    const selectedStockData = stocks.find((s) => s.symbol === selectedStock);
    if (!selectedStockData) return;

    setPriceHistory((prev) => {
      const newHistory = [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          price: selectedStockData.price,
          timestamp: Date.now(),
        },
      ];

      // Keep only last 20 data points
      return newHistory.slice(-20);
    });
  }, [stocks, selectedStock]);

  // Check price alerts
  useEffect(() => {
    stocks.forEach((stock) => {
      const alert = alerts[stock.symbol];
      if (!alert) return;

      const shouldTrigger =
        (alert.type === "above" && stock.price >= alert.price) ||
        (alert.type === "below" && stock.price <= alert.price);

      if (shouldTrigger && !alert.triggered) {
        // Show browser notification if supported
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification(\`Stock Alert: \${stock.symbol}\`, {
            body: \`Price \${alert.type} $\${alert.price}. Current: $\${stock.price}\`,
            icon: "📈",
          });
        }

        // Mark alert as triggered
        setAlerts((prev) => ({
          ...prev,
          [stock.symbol]: { ...alert, triggered: true },
        }));

        // Show visual alert
        showNotification(stock.symbol, stock.price, alert);
      }
    });
  }, [stocks, alerts]);

  const showNotification = (symbol, price, alert) => {
    // This could trigger a toast notification in a real app
    console.log(
      \`Alert triggered for \${symbol}: $\${price} is \${alert.type} $\${alert.price}\`
    );
  };

  const addAlert = () => {
    if (!alertSymbol || !alertPrice) return;

    setAlerts((prev) => ({
      ...prev,
      [alertSymbol]: {
        price: parseFloat(alertPrice),
        type: alertType,
        triggered: false,
      },
    }));

    setShowAlertModal(false);
    setAlertSymbol("");
    setAlertPrice("");
  };

  const removeAlert = (symbol) => {
    setAlerts((prev) => {
      const newAlerts = { ...prev };
      delete newAlerts[symbol];
      return newAlerts;
    });
  };

  const requestNotificationPermission = () => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  };

  const getMinPrice = () => {
    if (priceHistory.length === 0) return 0;
    return Math.min(...priceHistory.map((h) => h.price));
  };

  const getMaxPrice = () => {
    if (priceHistory.length === 0) return 0;
    return Math.max(...priceHistory.map((h) => h.price));
  };

  const selectedStockData = stocks.find((s) => s.symbol === selectedStock);

  return (
    <div className="stock-ticker-app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <div className="header-left">
            <h1 className="header-title">📈 Live Stock Ticker</h1>
            <p className="header-subtitle">Real-time stock price updates</p>
          </div>
          <div className="header-right">
            <div
              className={\`connection-status \${
                isConnected ? "connected" : "disconnected"
              }\`}
            >
              <span className="status-dot"></span>
              <span className="status-text">
                {isConnected ? "Connected" : "Disconnected"}
              </span>
            </div>
            <div className="update-count">
              Updates: {updateCountRef.current}
            </div>
          </div>
        </div>

        <div className="content-grid">
          {/* Stock List */}
          <div className="stock-list-panel">
            <div className="panel-header">
              <h2 className="panel-title">Stocks</h2>
              <button
                onClick={() => setShowAlertModal(true)}
                className="btn-add-alert"
                title="Add Price Alert"
              >
                🔔 Alert
              </button>
            </div>

            <div className="stock-list">
              {stocks.map((stock) => {
                const isSelected = selectedStock === stock.symbol;
                const hasAlert = alerts[stock.symbol];

                return (
                  <div
                    key={stock.symbol}
                    className={\`stock-item \${isSelected ? "selected" : ""}\`}
                    onClick={() => {
                      setSelectedStock(stock.symbol);
                      setPriceHistory([
                        {
                          time: new Date().toLocaleTimeString(),
                          price: stock.price,
                          timestamp: Date.now(),
                        },
                      ]);
                    }}
                  >
                    <div className="stock-item-left">
                      <div className="stock-symbol">{stock.symbol}</div>
                      <div className="stock-name">{stock.name}</div>
                    </div>

                    <div className="stock-item-right">
                      <div className="stock-price">
                        \${stock.price.toFixed(2)}
                      </div>
                      <div
                        className={\`stock-change \${
                          stock.change >= 0 ? "positive" : "negative"
                        }\`}
                      >
                        <span className="change-arrow">
                          {stock.change >= 0 ? "↑" : "↓"}
                        </span>
                        {Math.abs(stock.change).toFixed(2)}%
                      </div>
                    </div>

                    {hasAlert && (
                      <div className="alert-indicator" title="Price alert set">
                        🔔
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Alerts List */}
            {Object.keys(alerts).length > 0 && (
              <div className="alerts-section">
                <h3 className="alerts-title">Active Alerts</h3>
                <div className="alerts-list">
                  {Object.entries(alerts).map(([symbol, alert]) => (
                    <div key={symbol} className="alert-item">
                      <div className="alert-info">
                        <span className="alert-symbol">{symbol}</span>
                        <span className="alert-condition">
                          {alert.type === "above" ? "≥" : "≤"} ${alert.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeAlert(symbol)}
                        className="btn-remove-alert"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Chart */}
          <div className="chart-panel">
            <div className="panel-header">
              <div>
                <h2 className="panel-title">
                  {selectedStockData?.name} ({selectedStock})
                </h2>
                <div className="current-price-display">
                  <span className="price-large">
                    \${selectedStockData?.price.toFixed(2)}
                  </span>
                  <span
                    className={\`change-large \${
                      selectedStockData?.change >= 0 ? "positive" : "negative"
                    }\`}
                  >
                    {selectedStockData?.change >= 0 ? "+" : ""}
                    {selectedStockData?.change.toFixed(2)}%
                  </span>
                </div>
              </div>
              <button
                onClick={requestNotificationPermission}
                className="btn-notifications"
                title="Enable notifications"
              >
                🔔 Enable Notifications
              </button>
            </div>

            {/* Price History Chart */}
            <div className="chart-container">
              {priceHistory.length === 0 ? (
                <div className="chart-empty">
                  <div className="empty-icon">📊</div>
                  <p>Collecting price data...</p>
                </div>
              ) : (
                <div className="chart">
                  <div className="chart-y-axis">
                    <div className="y-label">\${getMaxPrice().toFixed(2)}</div>
                    <div className="y-label">
                      \${((getMaxPrice() + getMinPrice()) / 2).toFixed(2)}
                    </div>
                    <div className="y-label">\${getMinPrice().toFixed(2)}</div>
                  </div>

                  <div className="chart-area">
                    <svg
                      className="chart-svg"
                      viewBox="0 0 800 300"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(0, 217, 255, 0.3)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(0, 217, 255, 0)"
                          />
                        </linearGradient>
                      </defs>

                      {/* Draw price line */}
                      <polyline
                        points={priceHistory
                          .map((point, i) => {
                            const x = (i / (priceHistory.length - 1)) * 800;
                            const priceRange = getMaxPrice() - getMinPrice();
                            const y =
                              priceRange === 0
                                ? 150
                                : 300 -
                                  ((point.price - getMinPrice()) / priceRange) *
                                    300;
                            return \`\${x},\${y}\`;
                          })
                          .join(" ")}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Draw filled area */}
                      <polygon
                        points={[
                          "0,300",
                          ...priceHistory.map((point, i) => {
                            const x = (i / (priceHistory.length - 1)) * 800;
                            const priceRange = getMaxPrice() - getMinPrice();
                            const y =
                              priceRange === 0
                                ? 150
                                : 300 -
                                  ((point.price - getMinPrice()) / priceRange) *
                                    300;
                            return \`\${x},\${y}\`;
                          }),
                          "800,300",
                        ].join(" ")}
                        fill="url(#gradient)"
                      />

                      <defs>
                        <linearGradient
                          id="lineGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#00D9FF" />
                          <stop offset="100%" stopColor="#00A3CC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}

              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">High</div>
                  <div className="stat-value">\${getMaxPrice().toFixed(2)}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Low</div>
                  <div className="stat-value">\${getMinPrice().toFixed(2)}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Data Points</div>
                  <div className="stat-value">{priceHistory.length}/20</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Last Update</div>
                  <div className="stat-value">
                    {priceHistory[priceHistory.length - 1]?.time || "--:--"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="modal-overlay" onClick={() => setShowAlertModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Set Price Alert</h3>
              <button
                onClick={() => setShowAlertModal(false)}
                className="modal-close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Stock</label>
                <select
                  value={alertSymbol}
                  onChange={(e) => setAlertSymbol(e.target.value)}
                  className="form-select"
                >
                  <option value="">Select stock...</option>
                  {stocks.map((stock) => (
                    <option key={stock.symbol} value={stock.symbol}>
                      {stock.symbol} - {stock.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Alert Type</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="above"
                      checked={alertType === "above"}
                      onChange={(e) => setAlertType(e.target.value)}
                      className="radio-input"
                    />
                    <span>Price goes above</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="below"
                      checked={alertType === "below"}
                      onChange={(e) => setAlertType(e.target.value)}
                      className="radio-input"
                    />
                    <span>Price goes below</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Target Price ($)</label>
                <input
                  type="number"
                  value={alertPrice}
                  onChange={(e) => setAlertPrice(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="form-input"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setShowAlertModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={addAlert}
                className="btn-primary"
                disabled={!alertSymbol || !alertPrice}
              >
                Set Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockTicker;

// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Real-time price updates - Cập nhật giá mỗi 2 giây (simulated WebSocket)
// 6 stocks - AAPL, GOOGL, MSFT, TSLA, AMZN, META
// Price change tracking - Tính % thay đổi so với giá gốc
// Price history chart - SVG chart với gradient, track 20 data points cuối
// Connection status - Hiển thị connected/disconnected với pulse animation
// Update counter - Đếm số lần cập nhật

// 📊 Chart Features:

// Line chart - Smooth line với gradient fill
// Auto-scaling Y-axis - Min, mid, max price labels
// Gradient area fill - Beautiful visualization
// Stats grid - High, Low, Data points, Last update time
// Real-time updates - Chart tự động update

// 🔔 Alert System:

// Price alerts - Set alerts cho từng stock
// Alert types - "Above" hoặc "Below" threshold
// Visual indicators - 🔔 icon trên stocks có alert
// Browser notifications - Native notifications khi alert trigger
// Alert management - Add/remove alerts dễ dàng
// Active alerts list - Hiển thị tất cả alerts đang active

// 🎨 UI/UX:

// Stock list sidebar - Click để select, highlight stock đang xem
// Color coding - Green cho tăng, Red cho giảm
// Smooth animations - Pulse dots, transitions
// Modal dialog - Beautiful modal để set alerts
// Responsive design - Mobile friendly
// Glassmorphism - Modern backdrop blur effects

// 🔧 useEffect Usage:

// Connection status on mount:

// useEffect(() => {
//   setIsConnected(true);
//   return () => setIsConnected(false);
// }, []);

// Real-time price updates (simulated WebSocket):

// useEffect(() => {
//   if (!isConnected) return;
  
//   const interval = setInterval(() => {
//     // Update all stock prices
//   }, 2000);
  
//   return () => clearInterval(interval);
// }, [isConnected]);

// Track price history for selected stock:

// useEffect(() => {
//   const stockData = stocks.find(s => s.symbol === selectedStock);
//   setPriceHistory(prev => [...prev, newDataPoint].slice(-20));
// }, [stocks, selectedStock]);

// Check and trigger price alerts:

// useEffect(() => {
//   stocks.forEach(stock => {
//     const alert = alerts[stock.symbol];
//     // Check if alert should trigger
//     // Show browser notification
//     // Mark as triggered
//   });
// }, [stocks, alerts]);
// 💡 Highlights:

// Race condition free - Proper cleanup của intervals
// Memory leak prevention - All intervals cleared properly
// Efficient updates - Only update what's needed
// Browser Notification API - Native notifications support
// Dynamic chart - Auto-scaling based on data
// Alert persistence - Alerts tracked in state
// One-time trigger - Alerts only trigger once until reset

// 🎮 Test Features:

// Watch real-time updates - Prices change every 2s
// Switch stocks - Click different stocks to see their charts
// Set price alert - Click "🔔 Alert" button
// Enable notifications - Click "Enable Notifications" (requires permission)
// Watch alerts trigger - Set alert close to current price
// Remove alerts - Click ✕ button on active alerts

// 📈 Chart Math:
// jsx// Scale price to chart coordinates
// const priceRange = maxPrice - minPrice;
// const y = 300 - ((price - minPrice) / priceRange) * 300;
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
