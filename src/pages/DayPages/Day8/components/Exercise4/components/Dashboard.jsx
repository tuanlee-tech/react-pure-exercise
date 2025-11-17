import { useEffect, useMemo, useState } from "react";
/**
 * DASHBOARD với MULTIPLE WIDGETS
 * Demonstrates:
 * - Independent widget state (State Colocation)
 * - Shared global state (theme, user)
 * - Derived state calculations
 * - Data fetching simulation
 * Design: CyberSlate/Neon Ocean
 */

// Mock data generators
const generateSalesData = (period) => {
  const dataPoints = {
    week: 7,
    month: 30,
    year: 12,
  };

  const count = dataPoints[period];
  const data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      label: period === "year" ? `T${i + 1}` : `${i + 1}`,
      value: Math.floor(Math.random() * 50000000) + 10000000,
    });
  }

  return data;
};

const generateUserStats = () => ({
  total: Math.floor(Math.random() * 10000) + 5000,
  active: Math.floor(Math.random() * 5000) + 2000,
  new: Math.floor(Math.random() * 500) + 100,
  growth: (Math.random() * 30 + 5).toFixed(1),
});

const generateRecentOrders = () => {
  const statuses = ["pending", "processing", "completed", "cancelled"];
  const products = [
    "iPhone 15",
    "MacBook Pro",
    "AirPods",
    "iPad Air",
    "Apple Watch",
  ];

  return Array.from({ length: 10 }, (_, i) => ({
    id: `ORD${Date.now() - i * 100000}`,
    product: products[Math.floor(Math.random() * products.length)],
    customer: `Khách hàng ${i + 1}`,
    amount: Math.floor(Math.random() * 50000000) + 1000000,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    timestamp: Date.now() - Math.random() * 86400000 * 7,
  }));
};

const generateTopProducts = () => {
  const products = [
    { name: "iPhone 15 Pro Max", icon: "📱" },
    { name: "MacBook Pro M3", icon: "💻" },
    { name: "AirPods Pro", icon: "🎧" },
    { name: "iPad Air M2", icon: "📱" },
    { name: "Apple Watch Ultra", icon: "⌚" },
  ];

  return products.map((product) => ({
    ...product,
    sales: Math.floor(Math.random() * 1000) + 100,
    revenue: Math.floor(Math.random() * 500000000) + 50000000,
  }));
};

/**
 * SalesWidget Component
 * ✅ INDEPENDENT STATE - Mỗi widget quản lý state riêng
 */
function SalesWidget() {
  const [period, setPeriod] = useState("week");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data khi period thay đổi
  useEffect(() => {
    setLoading(true);

    // Simulate API call
    const timer = setTimeout(() => {
      setData(generateSalesData(period));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [period]);

  // ✅ Derived State - Statistics từ data
  const stats = useMemo(() => {
    console.log("📊 Calculating sales stats...");

    if (data.length === 0)
      return { total: 0, average: 0, highest: 0, growth: 0 };

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const average = total / data.length;
    const highest = Math.max(...data.map((item) => item.value));

    // Calculate growth (compare last vs first)
    const growth =
      data.length > 1
        ? (
            ((data[data.length - 1].value - data[0].value) / data[0].value) *
            100
          ).toFixed(1)
        : 0;

    return { total, average, highest, growth };
  }, [data]);

  // Format currency
  const formatMoney = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="widget sales-widget">
      <div className="widget-header">
        <h3 className="widget-title">💰 Doanh thu</h3>
        <div className="period-selector">
          <button
            className={`period-btn ${period === "week" ? "active" : ""}`}
            onClick={() => setPeriod("week")}
          >
            Tuần
          </button>
          <button
            className={`period-btn ${period === "month" ? "active" : ""}`}
            onClick={() => setPeriod("month")}
          >
            Tháng
          </button>
          <button
            className={`period-btn ${period === "year" ? "active" : ""}`}
            onClick={() => setPeriod("year")}
          >
            Năm
          </button>
        </div>
      </div>

      {loading ? (
        <div className="widget-loading">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      ) : (
        <>
          {/* Stats Summary */}
          <div className="stats-grid">
            <div className="stat-mini">
              <div className="stat-label">Tổng</div>
              <div className="stat-value">{formatMoney(stats.total)}</div>
            </div>
            <div className="stat-mini">
              <div className="stat-label">Trung bình</div>
              <div className="stat-value">{formatMoney(stats.average)}</div>
            </div>
            <div className="stat-mini">
              <div className="stat-label">Cao nhất</div>
              <div className="stat-value">{formatMoney(stats.highest)}</div>
            </div>
            <div className="stat-mini">
              <div className="stat-label">Tăng trưởng</div>
              <div
                className={`stat-value ${
                  stats.growth >= 0 ? "positive" : "negative"
                }`}
              >
                {stats.growth >= 0 ? "↗" : "↘"} {Math.abs(stats.growth)}%
              </div>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="chart-container">
            {data.map((item, index) => {
              const maxValue = Math.max(...data.map((d) => d.value));
              const height = (item.value / maxValue) * 100;

              return (
                <div key={index} className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: `${height}%` }}>
                    <div className="bar-tooltip">{formatMoney(item.value)}</div>
                  </div>
                  <div className="chart-label">{item.label}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * UserStatsWidget Component
 * ✅ INDEPENDENT STATE
 */
function UserStatsWidget() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // Fetch data
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setStats(generateUserStats());
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [refreshKey]);

  // ✅ Derived State
  const inactiveUsers = useMemo(() => {
    if (!stats) return 0;
    return stats.total - stats.active;
  }, [stats]);

  const activePercentage = useMemo(() => {
    if (!stats) return 0;
    return ((stats.active / stats.total) * 100).toFixed(1);
  }, [stats]);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="widget user-stats-widget">
      <div className="widget-header">
        <h3 className="widget-title">👥 Người dùng</h3>
        <button
          className="refresh-btn"
          onClick={handleRefresh}
          disabled={loading}
        >
          🔄
        </button>
      </div>

      {loading ? (
        <div className="widget-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="user-stats-main">
            <div className="main-stat">
              <div className="main-stat-value">
                {stats.total.toLocaleString()}
              </div>
              <div className="main-stat-label">Tổng người dùng</div>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-header">
              <span>Hoạt động</span>
              <span className="progress-value">{activePercentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${activePercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="user-stats-grid">
            <div className="user-stat-item">
              <div className="stat-icon active">✅</div>
              <div className="stat-info">
                <div className="stat-value">
                  {stats.active.toLocaleString()}
                </div>
                <div className="stat-label">Hoạt động</div>
              </div>
            </div>

            <div className="user-stat-item">
              <div className="stat-icon inactive">💤</div>
              <div className="stat-info">
                <div className="stat-value">
                  {inactiveUsers.toLocaleString()}
                </div>
                <div className="stat-label">Không hoạt động</div>
              </div>
            </div>

            <div className="user-stat-item">
              <div className="stat-icon new">🆕</div>
              <div className="stat-info">
                <div className="stat-value">{stats.new.toLocaleString()}</div>
                <div className="stat-label">Mới (7 ngày)</div>
              </div>
            </div>

            <div className="user-stat-item">
              <div className="stat-icon growth">📈</div>
              <div className="stat-info">
                <div className="stat-value">+{stats.growth}%</div>
                <div className="stat-label">Tăng trưởng</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * RecentOrdersWidget Component
 * ✅ INDEPENDENT STATE
 */
function RecentOrdersWidget() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setOrders(generateRecentOrders());
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Derived State - Filtered orders
  const filteredOrders = useMemo(() => {
    console.log("🔄 Filtering orders...");

    if (filter === "all") return orders;
    return orders.filter((order) => order.status === filter);
  }, [orders, filter]);

  // ✅ Derived State - Statistics
  const orderStats = useMemo(() => {
    const total = orders.length;
    const pending = orders.filter((o) => o.status === "pending").length;
    const completed = orders.filter((o) => o.status === "completed").length;
    const totalRevenue = orders
      .filter((o) => o.status === "completed")
      .reduce((sum, o) => sum + o.amount, 0);

    return { total, pending, completed, totalRevenue };
  }, [orders]);

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { label: "Chờ xử lý", icon: "⏳", class: "pending" },
      processing: { label: "Đang xử lý", icon: "⚙️", class: "processing" },
      completed: { label: "Hoàn thành", icon: "✅", class: "completed" },
      cancelled: { label: "Đã hủy", icon: "❌", class: "cancelled" },
    };

    return statusMap[status] || statusMap.pending;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút trước`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ trước`;
    return `${Math.floor(diff / 86400000)} ngày trước`;
  };

  return (
    <div className="widget orders-widget">
      <div className="widget-header">
        <h3 className="widget-title">📦 Đơn hàng gần đây</h3>
      </div>

      {/* Stats Summary */}
      <div className="order-stats">
        <div className="order-stat">
          <span className="stat-label">Tổng:</span>
          <span className="stat-value">{orderStats.total}</span>
        </div>
        <div className="order-stat">
          <span className="stat-label">Chờ:</span>
          <span className="stat-value pending">{orderStats.pending}</span>
        </div>
        <div className="order-stat">
          <span className="stat-label">Hoàn thành:</span>
          <span className="stat-value completed">{orderStats.completed}</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["all", "pending", "processing", "completed", "cancelled"].map(
          (status) => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? "active" : ""}`}
              onClick={() => setFilter(status)}
            >
              {status === "all" ? "Tất cả" : getStatusBadge(status).label}
            </button>
          )
        )}
      </div>

      {loading ? (
        <div className="widget-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="orders-list">
          {filteredOrders.length === 0 ? (
            <div className="empty-state">
              <p>Không có đơn hàng</p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const badge = getStatusBadge(order.status);

              return (
                <div key={order.id} className="order-item">
                  <div className="order-main">
                    <div className="order-id">#{order.id}</div>
                    <div className="order-product">{order.product}</div>
                    <div className="order-customer">{order.customer}</div>
                  </div>

                  <div className="order-details">
                    <div className="order-amount">
                      {order.amount.toLocaleString("vi-VN")}đ
                    </div>
                    <div className={`order-status ${badge.class}`}>
                      {badge.icon} {badge.label}
                    </div>
                  </div>

                  <div className="order-time">
                    {formatTime(order.timestamp)}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

/**
 * TopProductsWidget Component
 * ✅ INDEPENDENT STATE
 */
function TopProductsWidget() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("sales");

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setProducts(generateTopProducts());
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Derived State - Sorted products
  const sortedProducts = useMemo(() => {
    console.log("🔄 Sorting products...");

    return [...products].sort((a, b) => {
      if (sortBy === "sales") return b.sales - a.sales;
      return b.revenue - a.revenue;
    });
  }, [products, sortBy]);

  const maxValue = useMemo(() => {
    if (sortedProducts.length === 0) return 0;
    return sortBy === "sales"
      ? Math.max(...sortedProducts.map((p) => p.sales))
      : Math.max(...sortedProducts.map((p) => p.revenue));
  }, [sortedProducts, sortBy]);

  return (
    <div className="widget products-widget">
      <div className="widget-header">
        <h3 className="widget-title">🏆 Sản phẩm bán chạy</h3>
        <div className="sort-selector">
          <button
            className={`sort-btn ${sortBy === "sales" ? "active" : ""}`}
            onClick={() => setSortBy("sales")}
          >
            Số lượng
          </button>
          <button
            className={`sort-btn ${sortBy === "revenue" ? "active" : ""}`}
            onClick={() => setSortBy("revenue")}
          >
            Doanh thu
          </button>
        </div>
      </div>

      {loading ? (
        <div className="widget-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="products-list">
          {sortedProducts.map((product, index) => {
            const value = sortBy === "sales" ? product.sales : product.revenue;
            const percentage = (value / maxValue) * 100;

            return (
              <div key={index} className="product-item">
                <div className="product-rank">#{index + 1}</div>
                <div className="product-icon">{product.icon}</div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-bar">
                    <div
                      className="product-bar-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="product-stats">
                    <span>{product.sales.toLocaleString()} bán</span>
                    <span className="product-revenue">
                      {(product.revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Dashboard Component - Main Container
 * ✅ SHARED STATE: layout, theme
 */
function Dashboard() {
  const [layout, setLayout] = useState("grid");
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`dashboard ${theme}`}>
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">
            <span className="title-gradient">📊 CyberDash</span>
          </h1>
          <p className="dashboard-subtitle">
            Analytics Dashboard với State Optimization
          </p>
        </div>

        <div className="header-controls">
          {/* Layout Toggle */}
          <div className="control-group">
            <button
              className={`control-btn ${layout === "grid" ? "active" : ""}`}
              onClick={() => setLayout("grid")}
              title="Grid Layout"
            >
              ▦
            </button>
            <button
              className={`control-btn ${layout === "list" ? "active" : ""}`}
              onClick={() => setLayout("list")}
              title="List Layout"
            >
              ☰
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Widgets Container */}
      <div className={`widgets-container ${layout}`}>
        {/* Mỗi widget có state độc lập */}
        <SalesWidget />
        <UserStatsWidget />
        <RecentOrdersWidget />
        <TopProductsWidget />
      </div>
    </div>
  );
}

export default Dashboard;
