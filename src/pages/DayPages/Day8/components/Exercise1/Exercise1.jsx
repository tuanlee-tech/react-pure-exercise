import ExerciseCard from "../../../../../components/ExerciseCard";
import ProductPage from "./components/ProductPage";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="Multi-Filter Product List" />

      <ExerciseCard.Description>
        {`
// TODO: Implement product filtering với lifting state up

function ProductFilters({ filters, onFilterChange }) {
  // TODO:
  // - Category filter (dropdown)
  // - Price range filter (min/max inputs)
  // - Rating filter (stars)
  // - In stock checkbox
  // - Search input
  
  return (
    <div className="filters">
      {/* Your code */}
    </div>
  );
}

function ProductList({ products }) {
  // TODO: Render products
  return (
    <div className="product-list">
      {/* Your code */}
    </div>
  );
}

function ProductStats({ products }) {
  // TODO: Derived state
  // - Total products
  // - Average price
  // - Average rating
  // - In stock count
  
  return (
    <div className="stats">
      {/* Your code */}
    </div>
  );
}

function ProductPage() {
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'electronics', price: 1000, rating: 4.5, inStock: true },
    { id: 2, name: 'Phone', category: 'electronics', price: 500, rating: 4.0, inStock: true },
    { id: 3, name: 'Desk', category: 'furniture', price: 300, rating: 4.2, inStock: false },
    // More products...
  ]);

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    inStockOnly: false,
    search: ''
  });

  // TODO: Filtered products (derived state với useMemo)
  const filteredProducts = useMemo(() => {
    // Apply all filters
  }, [products, filters]);

  return (
    <div className="product-page">
      <ProductFilters filters={filters} onFilterChange={setFilters} />
      <ProductList products={filteredProducts} />
      <ProductStats products={filteredProducts} />
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <ProductPage />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import React, { useState, useMemo, useCallback } from 'react';
import './ProductFilter.css';

/**
 * MULTI-FILTER PRODUCT LIST
 * Demonstrates: Lifting State Up, Derived State, useMemo optimization
 * Design: CyberSlate/Neon Ocean - Dark theme với cyan gradient
 */

// Mock data - Danh sách sản phẩm mẫu
const INITIAL_PRODUCTS = [
  { id: 1, name: 'MacBook Pro 16"', category: 'electronics', price: 2499, rating: 4.8, inStock: true, image: '💻' },
  { id: 2, name: 'iPhone 15 Pro Max', category: 'electronics', price: 1199, rating: 4.7, inStock: true, image: '📱' },
  { id: 3, name: 'iPad Air M2', category: 'electronics', price: 599, rating: 4.6, inStock: true, image: '📱' },
  { id: 4, name: 'Sony WH-1000XM5', category: 'electronics', price: 399, rating: 4.9, inStock: true, image: '🎧' },
  { id: 5, name: 'Samsung 4K Monitor', category: 'electronics', price: 499, rating: 4.5, inStock: false, image: '🖥️' },
  { id: 6, name: 'Herman Miller Chair', category: 'furniture', price: 1495, rating: 4.8, inStock: true, image: '🪑' },
  { id: 7, name: 'Standing Desk Pro', category: 'furniture', price: 799, rating: 4.6, inStock: true, image: '🪑' },
  { id: 8, name: 'Bookshelf Oak Wood', category: 'furniture', price: 349, rating: 4.4, inStock: true, image: '📚' },
  { id: 9, name: 'Office Desk Lamp', category: 'furniture', price: 89, rating: 4.3, inStock: true, image: '💡' },
  { id: 10, name: 'Nike Air Max 2024', category: 'clothing', price: 180, rating: 4.5, inStock: true, image: '👟' },
  { id: 11, name: 'Levi\\'s Denim Jacket', category: 'clothing', price: 120, rating: 4.6, inStock: true, image: '🧥' },
  { id: 12, name: 'Adidas Running Shoes', category: 'clothing', price: 150, rating: 4.7, inStock: false, image: '👟' },
  { id: 13, name: 'Patagonia Backpack', category: 'clothing', price: 89, rating: 4.8, inStock: true, image: '🎒' },
  { id: 14, name: 'Wireless Keyboard', category: 'electronics', price: 129, rating: 4.4, inStock: true, image: '⌨️' },
  { id: 15, name: 'Gaming Mouse RGB', category: 'electronics', price: 79, rating: 4.6, inStock: true, image: '🖱️' },
  { id: 16, name: 'Coffee Table Modern', category: 'furniture', price: 299, rating: 4.5, inStock: true, image: '🪑' },
  { id: 17, name: 'Wool Winter Coat', category: 'clothing', price: 250, rating: 4.7, inStock: true, image: '🧥' },
  { id: 18, name: 'Mechanical Watch', category: 'accessories', price: 450, rating: 4.9, inStock: true, image: '⌚' },
  { id: 19, name: 'Leather Wallet', category: 'accessories', price: 85, rating: 4.5, inStock: true, image: '💼' },
  { id: 20, name: 'Sunglasses Polarized', category: 'accessories', price: 199, rating: 4.6, inStock: false, image: '🕶️' },
];

// Categories cho dropdown filter
const CATEGORIES = [
  { value: 'all', label: 'Tất cả danh mục' },
  { value: 'electronics', label: '📱 Điện tử' },
  { value: 'furniture', label: '🪑 Nội thất' },
  { value: 'clothing', label: '👕 Thời trang' },
  { value: 'accessories', label: '⌚ Phụ kiện' },
];

/**
 * ProductFilters Component
 * Quản lý tất cả các bộ lọc sản phẩm
 * Props:
 * - filters: Object chứa tất cả filter values
 * - onFilterChange: Function để update filters
 */
function ProductFilters({ filters, onFilterChange }) {
  // Helper function để update một filter field
  const updateFilter = useCallback((field, value) => {
    onFilterChange(prev => ({
      ...prev,
      [field]: value
    }));
  }, [onFilterChange]);

  // Reset tất cả filters về giá trị mặc định
  const handleReset = useCallback(() => {
    onFilterChange({
      category: 'all',
      minPrice: '',
      maxPrice: '',
      minRating: 0,
      inStockOnly: false,
      search: ''
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
            onChange={(e) => updateFilter('search', e.target.value)}
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
            onChange={(e) => updateFilter('category', e.target.value)}
            className="filter-select"
          >
            {CATEGORIES.map(cat => (
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
            onChange={(e) => updateFilter('minPrice', e.target.value)}
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
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
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
            onChange={(e) => updateFilter('minRating', parseFloat(e.target.value))}
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
              onChange={(e) => updateFilter('inStockOnly', e.target.checked)}
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

/**
 * ProductList Component
 * Hiển thị danh sách sản phẩm dạng grid
 * Props:
 * - products: Array các sản phẩm đã được filter
 */
function ProductList({ products }) {
  // Render khi không có sản phẩm
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>Không tìm thấy sản phẩm</h3>
        <p>Thử thay đổi bộ lọc để xem nhiều sản phẩm hơn</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          {/* Stock Badge */}
          {!product.inStock && (
            <div className="stock-badge out-of-stock">Hết hàng</div>
          )}
          {product.inStock && (
            <div className="stock-badge in-stock">Còn hàng</div>
          )}

          {/* Product Image */}
          <div className="product-image">
            <span className="product-emoji">{product.image}</span>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            
            {/* Category Tag */}
            <div className="product-category">
              {CATEGORIES.find(c => c.value === product.category)?.label || product.category}
            </div>

            {/* Rating */}
            <div className="product-rating">
              <span className="rating-stars">
                {'⭐'.repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && '✨'}
              </span>
              <span className="rating-value">{product.rating.toFixed(1)}</span>
            </div>

            {/* Price */}
            <div className="product-price">
              \${product.price.toLocaleString()}
            </div>

            {/* Action Button */}
            <button 
              className="btn-add-cart"
              disabled={!product.inStock}
            >
              {product.inStock ? '🛒 Thêm vào giỏ' : '❌ Hết hàng'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * ProductStats Component
 * Hiển thị thống kê sản phẩm (Derived State)
 * Props:
 * - products: Array các sản phẩm đã được filter
 */
function ProductStats({ products }) {
  // ✅ Derived State - Tính toán từ products array
  // Sử dụng useMemo để tránh tính toán lại mỗi render
  const stats = useMemo(() => {
    console.log('📊 Calculating stats...');
    
    // Tổng số sản phẩm
    const total = products.length;
    
    // Giá trung bình
    const averagePrice = total > 0
      ? products.reduce((sum, p) => sum + p.price, 0) / total
      : 0;
    
    // Đánh giá trung bình
    const averageRating = total > 0
      ? products.reduce((sum, p) => sum + p.rating, 0) / total
      : 0;
    
    // Số sản phẩm còn hàng
    const inStockCount = products.filter(p => p.inStock).length;
    
    // Sản phẩm đắt nhất
    const maxPrice = total > 0
      ? Math.max(...products.map(p => p.price))
      : 0;
    
    // Sản phẩm rẻ nhất
    const minPrice = total > 0
      ? Math.min(...products.map(p => p.price))
      : 0;

    return {
      total,
      averagePrice,
      averageRating,
      inStockCount,
      maxPrice,
      minPrice
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
            <div className="stat-value">\${Math.round(stats.averagePrice)}</div>
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
              \${stats.minPrice} - \${stats.maxPrice}
            </div>
            <div className="stat-label">Khoảng giá</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProductPage Component - Main Container
 * Quản lý state và coordination giữa các components
 * Demonstrates: Lifting State Up
 */
function ProductPage() {
  // ✅ State được lift up lên component cha
  const [products] = useState(INITIAL_PRODUCTS);
  
  // ✅ Filter state - single source of truth
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    inStockOnly: false,
    search: ''
  });

  // ✅ Derived State - Filtered products với useMemo
  // Chỉ re-calculate khi products hoặc filters thay đổi
  const filteredProducts = useMemo(() => {
    console.log('🔄 Filtering products...');
    
    return products.filter(product => {
      // Filter by category
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Filter by price range
      if (filters.minPrice && product.price < parseFloat(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) {
        return false;
      }

      // Filter by rating
      if (product.rating < filters.minRating) {
        return false;
      }

      // Filter by stock status
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      // Filter by search query
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return product.name.toLowerCase().includes(searchLower);
      }

      return true;
    });
  }, [products, filters]); // Dependencies: chỉ re-run khi này thay đổi

  return (
    <div className="product-page">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">
          <span className="title-gradient">CyberSlate</span>
          <span className="title-subtitle">Product Catalog</span>
        </h1>
        <p className="page-description">
          Khám phá bộ sưu tập sản phẩm với bộ lọc thông minh
        </p>
      </div>

      {/* Layout: Filters + Content */}
      <div className="page-layout">
        {/* Sidebar: Filters */}
        <aside className="page-sidebar">
          {/* ✅ Pass filters state và setState function xuống child */}
          <ProductFilters 
            filters={filters} 
            onFilterChange={setFilters} 
          />
          
          {/* ✅ Pass filtered products để tính stats */}
          <ProductStats products={filteredProducts} />
        </aside>

        {/* Main Content: Product List */}
        <main className="page-content">
          {/* Result count */}
          <div className="result-header">
            <h2 className="result-title">
              Tìm thấy {filteredProducts.length} sản phẩm
            </h2>
          </div>

          {/* ✅ Pass filtered products xuống child */}
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
