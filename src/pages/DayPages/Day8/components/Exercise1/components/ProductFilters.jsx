import { useCallback } from "react";
import { CATEGORIES } from "../data/data";

/**
 * ProductFilters Component
 * Quản lý tất cả các bộ lọc sản phẩm
 * Props:
 * - filters: Object chứa tất cả filter values
 * - onFilterChange: Function để update filters
 */
export function ProductFilters({ filters, onFilterChange }) {
  // Helper function để update một filter field
  const updateFilter = useCallback(
    (field, value) => {
      onFilterChange((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [onFilterChange]
  );

  // Reset tất cả filters về giá trị mặc định
  const handleReset = useCallback(() => {
    onFilterChange({
      category: "all",
      minPrice: "",
      maxPrice: "",
      minRating: 0,
      inStockOnly: false,
      search: "",
    });
  }, [onFilterChange]);

  return (
    <div className="product-filters">
      {/* Header với reset button */}
      <div className="filters-header">
        <h2 className="filters-title">🔍 Bộ lọc</h2>
        <button onClick={handleReset} className="btn-reset">
          🔄 Reset
        </button>
      </div>

      <div className="filters-grid">
        {/* Search Input */}
        <div className="filter-group full-width">
          <label className="filter-label">
            <span className="label-icon">🔎</span>
            Tìm kiếm sản phẩm
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            placeholder="Nhập tên sản phẩm..."
            className="filter-input"
          />
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <label className="filter-label">
            <span className="label-icon">📁</span>
            Danh mục
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter("category", e.target.value)}
            className="filter-select"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range - Min */}
        <div className="filter-group">
          <label className="filter-label">
            <span className="label-icon">💰</span>
            Giá từ
          </label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
            placeholder="0"
            min="0"
            className="filter-input"
          />
        </div>

        {/* Price Range - Max */}
        <div className="filter-group">
          <label className="filter-label">
            <span className="label-icon">💵</span>
            Giá đến
          </label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
            placeholder="9999"
            min="0"
            className="filter-input"
          />
        </div>

        {/* Rating Filter */}
        <div className="filter-group full-width">
          <label className="filter-label">
            <span className="label-icon">⭐</span>
            Đánh giá tối thiểu: {filters.minRating} sao
          </label>
          <input
            type="range"
            value={filters.minRating}
            onChange={(e) =>
              updateFilter("minRating", parseFloat(e.target.value))
            }
            min="0"
            max="5"
            step="0.5"
            className="filter-range"
          />
          <div className="rating-labels">
            <span>0⭐</span>
            <span>2.5⭐</span>
            <span>5⭐</span>
          </div>
        </div>

        {/* In Stock Checkbox */}
        <div className="filter-group full-width">
          <label className="filter-checkbox">
            <input
              type="checkbox"
              checked={filters.inStockOnly}
              onChange={(e) => updateFilter("inStockOnly", e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">
              📦 Chỉ hiển thị sản phẩm còn hàng
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
