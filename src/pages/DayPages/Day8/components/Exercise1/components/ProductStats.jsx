import { useMemo } from "react";

/**
 * ProductStats Component
 * Hiển thị thống kê sản phẩm (Derived State)
 * Props:
 * - products: Array các sản phẩm đã được filter
 */
export default function ProductStats({ products }) {
  // ✅ Derived State - Tính toán từ products array
  // Sử dụng useMemo để tránh tính toán lại mỗi render
  const stats = useMemo(() => {
    console.log("📊 Calculating stats...");

    // Tổng số sản phẩm
    const total = products.length;

    // Giá trung bình
    const averagePrice =
      total > 0 ? products.reduce((sum, p) => sum + p.price, 0) / total : 0;

    // Đánh giá trung bình
    const averageRating =
      total > 0 ? products.reduce((sum, p) => sum + p.rating, 0) / total : 0;

    // Số sản phẩm còn hàng
    const inStockCount = products.filter((p) => p.inStock).length;

    // Sản phẩm đắt nhất
    const maxPrice = total > 0 ? Math.max(...products.map((p) => p.price)) : 0;

    // Sản phẩm rẻ nhất
    const minPrice = total > 0 ? Math.min(...products.map((p) => p.price)) : 0;

    return {
      total,
      averagePrice,
      averageRating,
      inStockCount,
      maxPrice,
      minPrice,
    };
  }, [products]); // Chỉ tính lại khi products thay đổi

  return (
    <div className="product-stats">
      <h2 className="stats-title">📊 Thống kê</h2>

      <div className="stats-grid">
        {/* Total Products */}
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Sản phẩm</div>
          </div>
        </div>

        {/* Average Price */}
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <div className="stat-value">${Math.round(stats.averagePrice)}</div>
            <div className="stat-label">Giá TB</div>
          </div>
        </div>

        {/* Average Rating */}
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{stats.averageRating.toFixed(1)}</div>
            <div className="stat-label">Đánh giá TB</div>
          </div>
        </div>

        {/* In Stock */}
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">{stats.inStockCount}</div>
            <div className="stat-label">Còn hàng</div>
          </div>
        </div>

        {/* Price Range */}
        <div className="stat-card full-width">
          <div className="stat-icon">💵</div>
          <div className="stat-content">
            <div className="stat-value">
              ${stats.minPrice} - ${stats.maxPrice}
            </div>
            <div className="stat-label">Khoảng giá</div>
          </div>
        </div>
      </div>
    </div>
  );
}
