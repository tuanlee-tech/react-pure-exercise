import{r as i,j as e,C as V}from"./index-DWyDx9Oi.js";/* empty css               */import{E as b}from"./ExerciseCard-B6SIPsBu.js";const G=[{id:1,name:'MacBook Pro 16"',category:"electronics",price:2499,rating:4.8,inStock:!0,image:"💻"},{id:2,name:"iPhone 15 Pro Max",category:"electronics",price:1199,rating:4.7,inStock:!0,image:"📱"},{id:3,name:"iPad Air M2",category:"electronics",price:599,rating:4.6,inStock:!0,image:"📱"},{id:4,name:"Sony WH-1000XM5",category:"electronics",price:399,rating:4.9,inStock:!0,image:"🎧"},{id:5,name:"Samsung 4K Monitor",category:"electronics",price:499,rating:4.5,inStock:!1,image:"🖥️"},{id:6,name:"Herman Miller Chair",category:"furniture",price:1495,rating:4.8,inStock:!0,image:"🪑"},{id:7,name:"Standing Desk Pro",category:"furniture",price:799,rating:4.6,inStock:!0,image:"🪑"},{id:8,name:"Bookshelf Oak Wood",category:"furniture",price:349,rating:4.4,inStock:!0,image:"📚"},{id:9,name:"Office Desk Lamp",category:"furniture",price:89,rating:4.3,inStock:!0,image:"💡"},{id:10,name:"Nike Air Max 2024",category:"clothing",price:180,rating:4.5,inStock:!0,image:"👟"},{id:11,name:"Levi's Denim Jacket",category:"clothing",price:120,rating:4.6,inStock:!0,image:"🧥"},{id:12,name:"Adidas Running Shoes",category:"clothing",price:150,rating:4.7,inStock:!1,image:"👟"},{id:13,name:"Patagonia Backpack",category:"clothing",price:89,rating:4.8,inStock:!0,image:"🎒"},{id:14,name:"Wireless Keyboard",category:"electronics",price:129,rating:4.4,inStock:!0,image:"⌨️"},{id:15,name:"Gaming Mouse RGB",category:"electronics",price:79,rating:4.6,inStock:!0,image:"🖱️"},{id:16,name:"Coffee Table Modern",category:"furniture",price:299,rating:4.5,inStock:!0,image:"🪑"},{id:17,name:"Wool Winter Coat",category:"clothing",price:250,rating:4.7,inStock:!0,image:"🧥"},{id:18,name:"Mechanical Watch",category:"accessories",price:450,rating:4.9,inStock:!0,image:"⌚"},{id:19,name:"Leather Wallet",category:"accessories",price:85,rating:4.5,inStock:!0,image:"💼"},{id:20,name:"Sunglasses Polarized",category:"accessories",price:199,rating:4.6,inStock:!1,image:"🕶️"}],U=[{value:"all",label:"Tất cả danh mục"},{value:"electronics",label:"📱 Điện tử"},{value:"furniture",label:"🪑 Nội thất"},{value:"clothing",label:"👕 Thời trang"},{value:"accessories",label:"⌚ Phụ kiện"}];function B({filters:t,onFilterChange:s}){const n=i.useCallback((a,N)=>{s(v=>({...v,[a]:N}))},[s]),r=i.useCallback(()=>{s({category:"all",minPrice:"",maxPrice:"",minRating:0,inStockOnly:!1,search:""})},[s]);return e.jsxs("div",{className:"product-filters",children:[e.jsxs("div",{className:"filters-header",children:[e.jsx("h2",{className:"filters-title",children:"🔍 Bộ lọc"}),e.jsx("button",{onClick:r,className:"btn-reset",children:"🔄 Reset"})]}),e.jsxs("div",{className:"filters-grid",children:[e.jsxs("div",{className:"filter-group full-width",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"🔎"}),"Tìm kiếm sản phẩm"]}),e.jsx("input",{type:"text",value:t.search,onChange:a=>n("search",a.target.value),placeholder:"Nhập tên sản phẩm...",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"📁"}),"Danh mục"]}),e.jsx("select",{value:t.category,onChange:a=>n("category",a.target.value),className:"filter-select",children:U.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"💰"}),"Giá từ"]}),e.jsx("input",{type:"number",value:t.minPrice,onChange:a=>n("minPrice",a.target.value),placeholder:"0",min:"0",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"💵"}),"Giá đến"]}),e.jsx("input",{type:"number",value:t.maxPrice,onChange:a=>n("maxPrice",a.target.value),placeholder:"9999",min:"0",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group full-width",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"⭐"}),"Đánh giá tối thiểu: ",t.minRating," sao"]}),e.jsx("input",{type:"range",value:t.minRating,onChange:a=>n("minRating",parseFloat(a.target.value)),min:"0",max:"5",step:"0.5",className:"filter-range"}),e.jsxs("div",{className:"rating-labels",children:[e.jsx("span",{children:"0⭐"}),e.jsx("span",{children:"2.5⭐"}),e.jsx("span",{children:"5⭐"})]})]}),e.jsx("div",{className:"filter-group full-width",children:e.jsxs("label",{className:"filter-checkbox",children:[e.jsx("input",{type:"checkbox",checked:t.inStockOnly,onChange:a=>n("inStockOnly",a.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{className:"checkbox-label",children:"📦 Chỉ hiển thị sản phẩm còn hàng"})]})})]})]})}function q({products:t}){return t.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:"🔍"}),e.jsx("h3",{children:"Không tìm thấy sản phẩm"}),e.jsx("p",{children:"Thử thay đổi bộ lọc để xem nhiều sản phẩm hơn"})]}):e.jsx("div",{className:"product-list",children:t.map(s=>e.jsxs("div",{className:"product-card",children:[!s.inStock&&e.jsx("div",{className:"stock-badge out-of-stock",children:"Hết hàng"}),s.inStock&&e.jsx("div",{className:"stock-badge in-stock",children:"Còn hàng"}),e.jsx("div",{className:"product-image",children:e.jsx("span",{className:"product-emoji",children:s.image})}),e.jsxs("div",{className:"product-info",children:[e.jsx("h3",{className:"product-name",children:s.name}),e.jsx("div",{className:"product-category",children:U.find(n=>n.value===s.category)?.label||s.category}),e.jsxs("div",{className:"product-rating",children:[e.jsxs("span",{className:"rating-stars",children:["⭐".repeat(Math.floor(s.rating)),s.rating%1!==0&&"✨"]}),e.jsx("span",{className:"rating-value",children:s.rating.toFixed(1)})]}),e.jsxs("div",{className:"product-price",children:["$",s.price.toLocaleString()]}),e.jsx("button",{className:"btn-add-cart",disabled:!s.inStock,children:s.inStock?"🛒 Thêm vào giỏ":"❌ Hết hàng"})]})]},s.id))})}function H({products:t}){const s=i.useMemo(()=>{console.log("📊 Calculating stats...");const n=t.length,r=n>0?t.reduce((o,u)=>o+u.price,0)/n:0,a=n>0?t.reduce((o,u)=>o+u.rating,0)/n:0,N=t.filter(o=>o.inStock).length,v=n>0?Math.max(...t.map(o=>o.price)):0,f=n>0?Math.min(...t.map(o=>o.price)):0;return{total:n,averagePrice:r,averageRating:a,inStockCount:N,maxPrice:v,minPrice:f}},[t]);return e.jsxs("div",{className:"product-stats-column",children:[e.jsx("h2",{className:"stats-title",children:"📊 Thống kê"}),e.jsxs("div",{className:"stats-grid-container",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stats-icon",children:"📦"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:s.total}),e.jsx("div",{className:"stat-label",children:"Sản phẩm"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stats-icon",children:"💰"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("div",{className:"stat-value",children:["$",Math.round(s.averagePrice)]}),e.jsx("div",{className:"stat-label",children:"Giá TB"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stats-icon",children:"⭐"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:s.averageRating.toFixed(1)}),e.jsx("div",{className:"stat-label",children:"Đánh giá TB"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stats-icon",children:"✅"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:s.inStockCount}),e.jsx("div",{className:"stat-label",children:"Còn hàng"})]})]}),e.jsxs("div",{className:"stat-card full-width",children:[e.jsx("div",{className:"stats-icon",children:"💵"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("div",{className:"stat-value",children:["$",s.minPrice," - $",s.maxPrice]}),e.jsx("div",{className:"stat-label",children:"Khoảng giá"})]})]})]})]})}function W(){const[t]=i.useState(G),[s,n]=i.useState({category:"all",minPrice:"",maxPrice:"",minRating:0,inStockOnly:!1,search:""}),r=i.useMemo(()=>(console.log("🔄 Filtering products..."),t.filter(a=>{if(s.category!=="all"&&a.category!==s.category||s.minPrice&&a.price<parseFloat(s.minPrice)||s.maxPrice&&a.price>parseFloat(s.maxPrice)||a.rating<s.minRating||s.inStockOnly&&!a.inStock)return!1;if(s.search){const N=s.search.toLowerCase();return a.name.toLowerCase().includes(N)}return!0})),[t,s]);return e.jsxs("div",{className:"product-page",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:e.jsx("span",{className:"title-gradient",children:"Product Catalog"})}),e.jsx("p",{className:"page-description",children:"Khám phá bộ sưu tập sản phẩm với bộ lọc thông minh"})]}),e.jsxs("div",{className:"page-layout",children:[e.jsxs("aside",{className:"page-sidebar",children:[e.jsx(B,{filters:s,onFilterChange:n}),e.jsx(H,{products:r})]}),e.jsxs("main",{className:"page-content",children:[e.jsx("div",{className:"result-header",children:e.jsxs("h2",{className:"result-title",children:["Tìm thấy ",r.length," sản phẩm"]})}),e.jsx(q,{products:r})]})]})]})}function K(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:1,title:"Multi-Filter Product List"}),e.jsx(b.Description,{children:`
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

`}),e.jsx(b.Demo,{children:e.jsx(W,{})}),e.jsx(b.Code,{children:`
import React, { useState, useMemo, useCallback } from 'react';
import './ProductFilter.css';

/**
 * MULTI-FILTER PRODUCT LIST
 * Demonstrates: Lifting State Up, Derived State, useMemo optimization
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
                {product.rating % 1 !== 0 && '✨ (half-star)'}
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
`})]})}function Q(){const[t,s]=i.useState({products:{1:{id:1,name:"Áo thun Premium",price:15e4,image:"👕",stock:10,category:"clothing"},2:{id:2,name:"Quần jean Slim",price:35e4,image:"👖",stock:5,category:"clothing"},3:{id:3,name:"Giày sneaker",price:5e5,image:"👟",stock:3,category:"shoes"},4:{id:4,name:"Túi xách nữ",price:25e4,image:"👜",stock:8,category:"accessories"},5:{id:5,name:"Mũ lưỡi trai",price:8e4,image:"🧢",stock:15,category:"accessories"},6:{id:6,name:"Đồng hồ nam",price:45e4,image:"⌚",stock:6,category:"accessories"},7:{id:7,name:"Áo khoác dạ",price:6e5,image:"🧥",stock:4,category:"clothing"},8:{id:8,name:"Giày boot",price:55e4,image:"🥾",stock:7,category:"shoes"}},cart:{},coupons:{GIAM10:{code:"GIAM10",discount:10,type:"percent",description:"Giảm 10%"},GIAM20:{code:"GIAM20",discount:20,type:"percent",description:"Giảm 20%"},GIAM50K:{code:"GIAM50K",discount:5e4,type:"fixed",description:"Giảm 50.000đ"},GIAM100K:{code:"GIAM100K",discount:1e5,type:"fixed",description:"Giảm 100.000đ"},FREESHIP:{code:"FREESHIP",discount:0,type:"freeship",description:"Miễn phí ship"}},appliedCoupon:null,shippingMethod:"standard"}),n=i.useCallback(h=>{s(m=>{const x=m.products[h],M=m.cart[h]||0;return M>=x.stock?(alert(`❌ Không đủ hàng! Chỉ còn ${x.stock} sản phẩm.`),m):{...m,cart:{...m.cart,[h]:M+1}}})},[]),r=i.useCallback(h=>{s(m=>{const x={...m.cart};return delete x[h],{...m,cart:x}})},[]),a=i.useCallback((h,m)=>{s(x=>{const M=x.products[h];if(m<0)return x;if(m===0){const l={...x.cart};return delete l[h],{...x,cart:l}}return m>M.stock?(alert(`❌ Không đủ hàng! Chỉ còn ${M.stock} sản phẩm.`),x):{...x,cart:{...x.cart,[h]:m}}})},[]),N=i.useCallback(h=>{const m=h.toUpperCase().trim();if(!m){alert("❌ Vui lòng nhập mã giảm giá");return}s(x=>x.coupons[m]?{...x,appliedCoupon:m}:(alert(`❌ Mã "${m}" không hợp lệ!`),x))},[]),v=i.useCallback(()=>{s(h=>({...h,appliedCoupon:null}))},[]),f=i.useCallback(h=>{s(m=>({...m,shippingMethod:h}))},[]),o=i.useCallback(()=>{window.confirm("🗑️ Xóa toàn bộ giỏ hàng?")&&s(h=>({...h,cart:{},appliedCoupon:null}))},[]),u=i.useMemo(()=>(console.log("🔄 Denormalizing cart..."),Object.entries(t.cart).map(([h,m])=>{const x=t.products[h];return{...x,quantity:m,itemTotal:x.price*m}})),[t.cart,t.products]),d=i.useMemo(()=>(console.log("💰 Calculating subtotal..."),u.reduce((h,m)=>h+m.itemTotal,0)),[u]),g=i.useMemo(()=>{if(console.log("🎟️ Calculating discount..."),!t.appliedCoupon)return 0;const h=t.coupons[t.appliedCoupon];return h.type==="percent"?Math.round(d*(h.discount/100)):h.type==="fixed"?Math.min(h.discount,d):0},[d,t.appliedCoupon,t.coupons]),C=i.useMemo(()=>(console.log("🚚 Calculating shipping..."),t.appliedCoupon==="FREESHIP"||d>=5e5?0:t.shippingMethod==="standard"?3e4:5e4),[d,t.shippingMethod,t.appliedCoupon]),k=i.useMemo(()=>(console.log("📊 Calculating tax..."),Math.round(d*.1)),[d]),w=i.useMemo(()=>(console.log("💵 Calculating total..."),d+C+k-g),[d,C,k,g]),I=i.useMemo(()=>u.reduce((h,m)=>h+m.quantity,0),[u]),P=i.useMemo(()=>{let h=g;if(C===0&&d>0){const m=t.shippingMethod==="standard"?3e4:5e4;h+=m}return h},[g,C,d,t.shippingMethod]);return e.jsxs("div",{className:"cart-app",children:[e.jsxs("header",{className:"app-header",children:[e.jsx("h1",{className:"app-title",children:e.jsx("span",{className:"title-gradient",children:"🛒 Cart"})}),e.jsx("p",{className:"app-subtitle",children:"E-commerce Shopping Cart với Normalized State"})]}),e.jsxs("div",{className:"app-layout",children:[e.jsxs("div",{className:"catalog-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:"📦 Sản phẩm"}),e.jsxs("div",{className:"product-count",children:[Object.keys(t.products).length," sản phẩm"]})]}),e.jsx(X,{products:t.products,cart:t.cart,onAddToCart:n})]}),e.jsx("div",{className:"cart-section",children:e.jsx(_,{cartItems:u,state:t,onUpdateQuantity:a,onRemoveFromCart:r,onApplyCoupon:N,onRemoveCoupon:v,onChangeShipping:f,onClearCart:o,subtotal:d,discount:g,shippingCost:C,tax:k,total:w,itemCount:I,savedAmount:P})})]})]})}function X({products:t,cart:s,onAddToCart:n}){return e.jsx("div",{className:"product-catalog",children:Object.values(t).map(r=>{const a=s[r.id]||0,N=a<r.stock;return e.jsxs("div",{className:"catalog-card",children:[e.jsx("div",{className:"catalog-image",children:r.image}),e.jsxs("div",{className:"catalog-info",children:[e.jsx("h3",{className:"catalog-name",children:r.name}),e.jsxs("div",{className:"catalog-price",children:[r.price.toLocaleString("vi-VN"),"đ"]}),e.jsxs("div",{className:"catalog-stock",children:["📦 Còn ",r.stock," sản phẩm"]}),a>0&&e.jsxs("div",{className:"in-cart-badge",children:["🛒 Đã có ",a," trong giỏ"]})]}),e.jsx("button",{className:"btn-add",onClick:()=>n(r.id),disabled:!N,children:N?"➕ Thêm":"❌ Hết"})]},r.id)})})}function _({cartItems:t,state:s,onUpdateQuantity:n,onRemoveFromCart:r,onApplyCoupon:a,onRemoveCoupon:N,onChangeShipping:v,onClearCart:f,subtotal:o,discount:u,shippingCost:d,tax:g,total:C,itemCount:k,savedAmount:w}){const[I,P]=i.useState(""),h=m=>{m.preventDefault(),a(I),P("")};return t.length===0?e.jsxs("div",{className:"cart-container",children:[e.jsx("div",{className:"section-header",children:e.jsx("h2",{className:"section-title",children:"🛒 Giỏ hàng"})}),e.jsxs("div",{className:"empty-cart",children:[e.jsx("div",{className:"empty-icon",children:"🛒"}),e.jsx("h3",{children:"Giỏ hàng trống"}),e.jsx("p",{children:"Thêm sản phẩm từ danh mục bên trái"})]}),e.jsx(L,{coupons:s.coupons})]}):e.jsxs("div",{className:"cart-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:["🛒 Giỏ hàng (",k,")"]}),e.jsx("button",{className:"btn-clear",onClick:f,children:"🗑️ Xóa tất cả"})]}),e.jsx("div",{className:"cart-items",children:t.map(m=>e.jsxs("div",{className:"cart-item",children:[e.jsx("div",{className:"item-image",children:m.image}),e.jsxs("div",{className:"item-info",children:[e.jsx("h4",{className:"item-name",children:m.name}),e.jsxs("div",{className:"item-price",children:[m.price.toLocaleString("vi-VN"),"đ"]})]}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx("button",{className:"qty-btn",onClick:()=>n(m.id,m.quantity-1),children:"-"}),e.jsx("input",{type:"number",className:"qty-input",value:m.quantity,onChange:x=>{const M=parseInt(x.target.value)||0;n(m.id,M)},min:"0",max:m.stock}),e.jsx("button",{className:"qty-btn",onClick:()=>n(m.id,m.quantity+1),disabled:m.quantity>=m.stock,children:"+"})]}),e.jsxs("div",{className:"item-total",children:[m.itemTotal.toLocaleString("vi-VN"),"đ"]}),e.jsx("button",{className:"btn-remove",onClick:()=>r(m.id),title:"Xóa",children:"❌"})]},m.id))}),e.jsxs("div",{className:"coupon-section",children:[e.jsx("h3",{className:"coupon-title",children:"🎟️ Mã giảm giá"}),s.appliedCoupon?e.jsxs("div",{className:"applied-coupon",children:[e.jsxs("div",{className:"coupon-info",children:[e.jsx("span",{className:"coupon-code",children:s.appliedCoupon}),e.jsx("span",{className:"coupon-desc",children:s.coupons[s.appliedCoupon].description})]}),e.jsx("button",{className:"btn-remove-coupon",onClick:N,children:"❌"})]}):e.jsxs("form",{className:"coupon-form",onSubmit:h,children:[e.jsx("input",{type:"text",className:"coupon-input",placeholder:"Nhập mã giảm giá...",value:I,onChange:m=>P(m.target.value.toUpperCase())}),e.jsx("button",{type:"submit",className:"btn-apply",children:"Áp dụng"})]})]}),e.jsxs("div",{className:"shipping-section",children:[e.jsx("h3",{className:"shipping-title",children:"🚚 Phương thức vận chuyển"}),e.jsxs("div",{className:"shipping-options",children:[e.jsxs("label",{className:`shipping-option ${s.shippingMethod==="standard"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"shipping",value:"standard",checked:s.shippingMethod==="standard",onChange:m=>v(m.target.value)}),e.jsxs("div",{className:"option-content",children:[e.jsx("div",{className:"option-name",children:"🚚 Giao hàng tiêu chuẩn"}),e.jsx("div",{className:"option-desc",children:"3-5 ngày"})]}),e.jsx("div",{className:"option-price",children:"30.000đ"})]}),e.jsxs("label",{className:`shipping-option ${s.shippingMethod==="express"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"shipping",value:"express",checked:s.shippingMethod==="express",onChange:m=>v(m.target.value)}),e.jsxs("div",{className:"option-content",children:[e.jsx("div",{className:"option-name",children:"⚡ Giao hàng nhanh"}),e.jsx("div",{className:"option-desc",children:"1-2 ngày"})]}),e.jsx("div",{className:"option-price",children:"50.000đ"})]})]}),o>=5e5&&e.jsx("div",{className:"free-ship-notice",children:"✨ Miễn phí ship cho đơn ≥ 500.000đ"})]}),e.jsxs("div",{className:"order-summary",children:[e.jsx("h3",{className:"summary-title",children:"💰 Tổng đơn hàng"}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính"}),e.jsxs("span",{children:[o.toLocaleString("vi-VN"),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Phí vận chuyển"}),e.jsx("span",{className:d===0?"free":"",children:d===0?"Miễn phí":`${d.toLocaleString("vi-VN")}đ`})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Thuế VAT (10%)"}),e.jsxs("span",{children:[g.toLocaleString("vi-VN"),"đ"]})]}),u>0&&e.jsxs("div",{className:"summary-row discount",children:[e.jsx("span",{children:"Giảm giá"}),e.jsxs("span",{children:["-",u.toLocaleString("vi-VN"),"đ"]})]}),e.jsx("div",{className:"summary-divider"}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{children:"Tổng cộng"}),e.jsxs("span",{className:"total-amount",children:[C.toLocaleString("vi-VN"),"đ"]})]}),w>0&&e.jsxs("div",{className:"saved-amount",children:["🎉 Bạn tiết kiệm được ",w.toLocaleString("vi-VN"),"đ"]}),e.jsx("button",{className:"btn-checkout",children:"🛍️ Thanh toán"})]}),!s.appliedCoupon&&e.jsx(L,{coupons:s.coupons})]})}function L({coupons:t}){return e.jsxs("div",{className:"coupon-list",children:[e.jsx("h3",{className:"coupon-list-title",children:"💎 Mã giảm giá khả dụng"}),e.jsx("div",{className:"coupon-grid",children:Object.values(t).map(s=>e.jsxs("div",{className:"coupon-badge",children:[e.jsx("div",{className:"coupon-code-badge",children:s.code}),e.jsx("div",{className:"coupon-desc-badge",children:s.description})]},s.code))})]})}function J(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:2,title:"E-commerce Cart với Normalized State"}),e.jsx(b.Description,{children:`
// TODO: Implement shopping cart với normalized structure

function CartApp() {
    const [state, setState] = useState({
    products: {
      // Catalog products
      1: { id: 1, name: 'Áo thun', price: 150000, image: '👕', stock: 10 },
      2: { id: 2, name: 'Quần jean', price: 350000, image: '👖', stock: 5 },
      3: { id: 3, name: 'Giày', price: 500000, image: '👟', stock: 3 },
      4: { id: 4, name: 'Túi', price: 250000, image: '👜', stock: 8 }
    },
    cart: {
      // Cart items: { productId: quantity }
      // e.g., { 1: 2, 3: 1 } = 2 áo thun, 1 giày
    },
    coupons: {
      'GIAM10': { code: 'GIAM10', discount: 10, type: 'percent' },
      'GIAM50K': { code: 'GIAM50K', discount: 50000, type: 'fixed' }
    },
    appliedCoupon: null,
    shippingMethod: 'standard' // 'standard' | 'express'
  });

  // TODO: Implement functions
  // - addToCart(productId)
  // - removeFromCart(productId)
  // - updateQuantity(productId, quantity)
  // - applyCoupon(code)
  // - removeCoupon()
  // - changeShippingMethod(method)

  // TODO: Derived state với useMemo
  // - cartItems: denormalize cart
  // - subtotal
  // - discount (from coupon)
  // - shippingCost (standard: 30k, express: 50k, free if > 500k)
  // - tax (10%)
  // - total
  // - itemCount

  const addToCart = useCallback((productId) => {
    setState(prev => {
      const product = prev.products[productId];
      const currentQty = prev.cart[productId] || 0;

      // Check stock
      if (currentQty >= product.stock) {
        alert('Không đủ hàng!');
        return prev;
      }

      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: currentQty + 1
        }
      };
    });
  }, []);

  // TODO: Implement other functions

  // TODO: Derived state
  const cartItems = useMemo(() => {
    // Convert cart object to array with product details
  }, [state.cart, state.products]);

  const subtotal = useMemo(() => {
    // Calculate subtotal
  }, [cartItems]);

  const discount = useMemo(() => {
    // Calculate discount from coupon
  }, [subtotal, state.appliedCoupon, state.coupons]);

  const shippingCost = useMemo(() => {
    // Calculate shipping
  }, [subtotal, state.shippingMethod]);

  const total = useMemo(() => {
    // Calculate total
  }, [subtotal, discount, shippingCost]);

  return (
    <div className="cart-app">
      <div className="products">
        <h2>Sản phẩm</h2>
        {Object.values(state.products).map(product => (
          <div key={product.id} className="product-card">
            {/* TODO: Product card với add to cart button */}
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Giỏ hàng</h2>
        {/* TODO: Cart items */}
        {/* TODO: Coupon section */}
        {/* TODO: Shipping method selector */}
        {/* TODO: Order summary */}
      </div>
    </div>
  );
}

`}),e.jsx(b.Demo,{children:e.jsx(Q,{})}),e.jsx(b.Code,{children:`
import { useCallback, useMemo, useState } from "react";

/**
 * E-COMMERCE CART với NORMALIZED STATE
 * Demonstrates:
 * - State Normalization (byId pattern)
 * - Derived State với useMemo
 * - Complex state calculations
 * Design: CyberSlate/Neon Ocean
 */

/**
 * CartApp Component - Main Container
 * Quản lý normalized state structure
 */
function CartApp() {
  // ✅ NORMALIZED STATE STRUCTURE
  // Tách thành các entities độc lập, dễ update
  const [state, setState] = useState({
    // Catalog products - byId pattern
    products: {
      1: {
        id: 1,
        name: "Áo thun Premium",
        price: 150000,
        image: "👕",
        stock: 10,
        category: "clothing",
      },
      2: {
        id: 2,
        name: "Quần jean Slim",
        price: 350000,
        image: "👖",
        stock: 5,
        category: "clothing",
      },
      3: {
        id: 3,
        name: "Giày sneaker",
        price: 500000,
        image: "👟",
        stock: 3,
        category: "shoes",
      },
      4: {
        id: 4,
        name: "Túi xách nữ",
        price: 250000,
        image: "👜",
        stock: 8,
        category: "accessories",
      },
      5: {
        id: 5,
        name: "Mũ lưỡi trai",
        price: 80000,
        image: "🧢",
        stock: 15,
        category: "accessories",
      },
      6: {
        id: 6,
        name: "Đồng hồ nam",
        price: 450000,
        image: "⌚",
        stock: 6,
        category: "accessories",
      },
      7: {
        id: 7,
        name: "Áo khoác dạ",
        price: 600000,
        image: "🧥",
        stock: 4,
        category: "clothing",
      },
      8: {
        id: 8,
        name: "Giày boot",
        price: 550000,
        image: "🥾",
        stock: 7,
        category: "shoes",
      },
    },

    // Cart items - normalized: { productId: quantity }
    cart: {
      // Ví dụ: { 1: 2, 3: 1 } = 2 áo thun + 1 giày
    },

    // Coupon codes available
    coupons: {
      GIAM10: {
        code: "GIAM10",
        discount: 10,
        type: "percent",
        description: "Giảm 10%",
      },
      GIAM20: {
        code: "GIAM20",
        discount: 20,
        type: "percent",
        description: "Giảm 20%",
      },
      GIAM50K: {
        code: "GIAM50K",
        discount: 50000,
        type: "fixed",
        description: "Giảm 50.000đ",
      },
      GIAM100K: {
        code: "GIAM100K",
        discount: 100000,
        type: "fixed",
        description: "Giảm 100.000đ",
      },
      FREESHIP: {
        code: "FREESHIP",
        discount: 0,
        type: "freeship",
        description: "Miễn phí ship",
      },
    },

    // Applied coupon (null nếu chưa áp dụng)
    appliedCoupon: null,

    // Shipping method: 'standard' | 'express'
    shippingMethod: "standard",
  });

  // ============================================
  // CART MANAGEMENT FUNCTIONS
  // ============================================

  /**
   * Thêm sản phẩm vào giỏ hàng
   * Kiểm tra stock trước khi thêm
   */
  const addToCart = useCallback((productId) => {
    setState((prev) => {
      const product = prev.products[productId];
      const currentQty = prev.cart[productId] || 0;

      // Check stock availability
      if (currentQty >= product.stock) {
        alert(\`❌ Không đủ hàng! Chỉ còn \${product.stock} sản phẩm.\`);
        return prev;
      }

      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: currentQty + 1,
        },
      };
    });
  }, []);

  /**
   * Xóa sản phẩm khỏi giỏ hàng
   */
  const removeFromCart = useCallback((productId) => {
    setState((prev) => {
      const newCart = { ...prev.cart };
      delete newCart[productId];

      return {
        ...prev,
        cart: newCart,
      };
    });
  }, []);

  /**
   * Cập nhật số lượng sản phẩm trong giỏ
   * Validate: quantity >= 0 và <= stock
   */
  const updateQuantity = useCallback((productId, quantity) => {
    setState((prev) => {
      const product = prev.products[productId];

      // Validate quantity
      if (quantity < 0) return prev;
      if (quantity === 0) {
        // Remove item if quantity is 0
        const newCart = { ...prev.cart };
        delete newCart[productId];
        return { ...prev, cart: newCart };
      }
      if (quantity > product.stock) {
        alert(\`❌ Không đủ hàng! Chỉ còn \${product.stock} sản phẩm.\`);
        return prev;
      }

      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: quantity,
        },
      };
    });
  }, []);

  /**
   * Áp dụng mã giảm giá
   * Validate coupon code
   */
  const applyCoupon = useCallback((code) => {
    const couponCode = code.toUpperCase().trim();

    if (!couponCode) {
      alert("❌ Vui lòng nhập mã giảm giá");
      return;
    }

    setState((prev) => {
      const coupon = prev.coupons[couponCode];

      if (!coupon) {
        alert(\`❌ Mã "\${couponCode}" không hợp lệ!\`);
        return prev;
      }

      return {
        ...prev,
        appliedCoupon: couponCode,
      };
    });
  }, []);

  /**
   * Xóa mã giảm giá đã áp dụng
   */
  const removeCoupon = useCallback(() => {
    setState((prev) => ({
      ...prev,
      appliedCoupon: null,
    }));
  }, []);

  /**
   * Thay đổi phương thức vận chuyển
   */
  const changeShippingMethod = useCallback((method) => {
    setState((prev) => ({
      ...prev,
      shippingMethod: method,
    }));
  }, []);

  /**
   * Clear toàn bộ giỏ hàng
   */
  const clearCart = useCallback(() => {
    if (window.confirm("🗑️ Xóa toàn bộ giỏ hàng?")) {
      setState((prev) => ({
        ...prev,
        cart: {},
        appliedCoupon: null,
      }));
    }
  }, []);

  // ============================================
  // DERIVED STATE - DENORMALIZE CART
  // ============================================

  /**
   * Chuyển cart từ normalized { productId: qty }
   * sang array với full product details
   */
  const cartItems = useMemo(() => {
    console.log("🔄 Denormalizing cart...");

    return Object.entries(state.cart).map(([productId, quantity]) => {
      const product = state.products[productId];
      return {
        ...product,
        quantity,
        itemTotal: product.price * quantity,
      };
    });
  }, [state.cart, state.products]);

  // ============================================
  // DERIVED STATE - CALCULATIONS
  // ============================================

  /**
   * Tính subtotal (tổng tiền hàng)
   */
  const subtotal = useMemo(() => {
    console.log("💰 Calculating subtotal...");
    return cartItems.reduce((sum, item) => sum + item.itemTotal, 0);
  }, [cartItems]);

  /**
   * Tính discount từ coupon
   */
  const discount = useMemo(() => {
    console.log("🎟️ Calculating discount...");

    if (!state.appliedCoupon) return 0;

    const coupon = state.coupons[state.appliedCoupon];

    if (coupon.type === "percent") {
      return Math.round(subtotal * (coupon.discount / 100));
    } else if (coupon.type === "fixed") {
      return Math.min(coupon.discount, subtotal); // Không giảm quá subtotal
    }

    return 0;
  }, [subtotal, state.appliedCoupon, state.coupons]);

  /**
   * Tính phí ship
   * - Standard: 30k
   * - Express: 50k
   * - Free nếu subtotal > 500k hoặc có mã FREESHIP
   */
  const shippingCost = useMemo(() => {
    console.log("🚚 Calculating shipping...");

    // Free ship nếu có mã FREESHIP
    if (state.appliedCoupon === "FREESHIP") {
      return 0;
    }

    // Free ship nếu subtotal > 500k
    if (subtotal >= 500000) {
      return 0;
    }

    // Phí ship theo phương thức
    return state.shippingMethod === "standard" ? 30000 : 50000;
  }, [subtotal, state.shippingMethod, state.appliedCoupon]);

  /**
   * Tính thuế VAT 10%
   */
  const tax = useMemo(() => {
    console.log("📊 Calculating tax...");
    return Math.round(subtotal * 0.1);
  }, [subtotal]);

  /**
   * Tính tổng tiền cuối cùng
   */
  const total = useMemo(() => {
    console.log("💵 Calculating total...");
    return subtotal + shippingCost + tax - discount;
  }, [subtotal, shippingCost, tax, discount]);

  /**
   * Đếm tổng số items trong giỏ
   */
  const itemCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  /**
   * Số tiền tiết kiệm được
   */
  const savedAmount = useMemo(() => {
    let saved = discount;

    // Cộng thêm tiền ship nếu free
    if (shippingCost === 0 && subtotal > 0) {
      const normalShipping =
        state.shippingMethod === "standard" ? 30000 : 50000;
      saved += normalShipping;
    }

    return saved;
  }, [discount, shippingCost, subtotal, state.shippingMethod]);

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="cart-app">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-gradient">🛒 Cart</span>
        </h1>
        <p className="app-subtitle">
          E-commerce Shopping Cart với Normalized State
        </p>
      </header>

      <div className="app-layout">
        {/* Left: Product Catalog */}
        <div className="catalog-section">
          <div className="section-header">
            <h2 className="section-title">📦 Sản phẩm</h2>
            <div className="product-count">
              {Object.keys(state.products).length} sản phẩm
            </div>
          </div>

          <ProductCatalog
            products={state.products}
            cart={state.cart}
            onAddToCart={addToCart}
          />
        </div>

        {/* Right: Cart */}
        <div className="cart-section">
          <ShoppingCart
            cartItems={cartItems}
            state={state}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
            onApplyCoupon={applyCoupon}
            onRemoveCoupon={removeCoupon}
            onChangeShipping={changeShippingMethod}
            onClearCart={clearCart}
            subtotal={subtotal}
            discount={discount}
            shippingCost={shippingCost}
            tax={tax}
            total={total}
            itemCount={itemCount}
            savedAmount={savedAmount}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ProductCatalog Component
 * Hiển thị danh sách sản phẩm có thể mua
 */
function ProductCatalog({ products, cart, onAddToCart }) {
  return (
    <div className="product-catalog">
      {Object.values(products).map((product) => {
        const inCart = cart[product.id] || 0;
        const canAdd = inCart < product.stock;

        return (
          <div key={product.id} className="catalog-card">
            <div className="catalog-image">{product.image}</div>

            <div className="catalog-info">
              <h3 className="catalog-name">{product.name}</h3>
              <div className="catalog-price">
                {product.price.toLocaleString("vi-VN")}đ
              </div>
              <div className="catalog-stock">
                📦 Còn {product.stock} sản phẩm
              </div>

              {inCart > 0 && (
                <div className="in-cart-badge">🛒 Đã có {inCart} trong giỏ</div>
              )}
            </div>

            <button
              className="btn-add"
              onClick={() => onAddToCart(product.id)}
              disabled={!canAdd}
            >
              {canAdd ? "➕ Thêm" : "❌ Hết"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

/**
 * ShoppingCart Component
 * Hiển thị giỏ hàng và tính toán
 */
function ShoppingCart({
  cartItems,
  state,
  onUpdateQuantity,
  onRemoveFromCart,
  onApplyCoupon,
  onRemoveCoupon,
  onChangeShipping,
  onClearCart,
  subtotal,
  discount,
  shippingCost,
  tax,
  total,
  itemCount,
  savedAmount,
}) {
  const [couponInput, setCouponInput] = useState("");

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    onApplyCoupon(couponInput);
    setCouponInput("");
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="section-header">
          <h2 className="section-title">🛒 Giỏ hàng</h2>
        </div>

        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Giỏ hàng trống</h3>
          <p>Thêm sản phẩm từ danh mục bên trái</p>
        </div>

        {/* Available Coupons */}
        <CouponList coupons={state.coupons} />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="section-header">
        <h2 className="section-title">🛒 Giỏ hàng ({itemCount})</h2>
        <button className="btn-clear" onClick={onClearCart}>
          🗑️ Xóa tất cả
        </button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>

            <div className="item-info">
              <h4 className="item-name">{item.name}</h4>
              <div className="item-price">
                {item.price.toLocaleString("vi-VN")}đ
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="quantity-controls">
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                className="qty-input"
                value={item.quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  onUpdateQuantity(item.id, val);
                }}
                min="0"
                max={item.stock}
              />
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= item.stock}
              >
                +
              </button>
            </div>

            <div className="item-total">
              {item.itemTotal.toLocaleString("vi-VN")}đ
            </div>

            <button
              className="btn-remove"
              onClick={() => onRemoveFromCart(item.id)}
              title="Xóa"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="coupon-section">
        <h3 className="coupon-title">🎟️ Mã giảm giá</h3>

        {state.appliedCoupon ? (
          <div className="applied-coupon">
            <div className="coupon-info">
              <span className="coupon-code">{state.appliedCoupon}</span>
              <span className="coupon-desc">
                {state.coupons[state.appliedCoupon].description}
              </span>
            </div>
            <button className="btn-remove-coupon" onClick={onRemoveCoupon}>
              ❌
            </button>
          </div>
        ) : (
          <form className="coupon-form" onSubmit={handleApplyCoupon}>
            <input
              type="text"
              className="coupon-input"
              placeholder="Nhập mã giảm giá..."
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
            />
            <button type="submit" className="btn-apply">
              Áp dụng
            </button>
          </form>
        )}
      </div>

      {/* Shipping Method */}
      <div className="shipping-section">
        <h3 className="shipping-title">🚚 Phương thức vận chuyển</h3>

        <div className="shipping-options">
          <label
            className={\`shipping-option \${
              state.shippingMethod === "standard" ? "active" : ""
            }\`}
          >
            <input
              type="radio"
              name="shipping"
              value="standard"
              checked={state.shippingMethod === "standard"}
              onChange={(e) => onChangeShipping(e.target.value)}
            />
            <div className="option-content">
              <div className="option-name">🚚 Giao hàng tiêu chuẩn</div>
              <div className="option-desc">3-5 ngày</div>
            </div>
            <div className="option-price">30.000đ</div>
          </label>

          <label
            className={\`shipping-option \${
              state.shippingMethod === "express" ? "active" : ""
            }\`}
          >
            <input
              type="radio"
              name="shipping"
              value="express"
              checked={state.shippingMethod === "express"}
              onChange={(e) => onChangeShipping(e.target.value)}
            />
            <div className="option-content">
              <div className="option-name">⚡ Giao hàng nhanh</div>
              <div className="option-desc">1-2 ngày</div>
            </div>
            <div className="option-price">50.000đ</div>
          </label>
        </div>

        {subtotal >= 500000 && (
          <div className="free-ship-notice">
            ✨ Miễn phí ship cho đơn ≥ 500.000đ
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3 className="summary-title">💰 Tổng đơn hàng</h3>

        <div className="summary-row">
          <span>Tạm tính</span>
          <span>{subtotal.toLocaleString("vi-VN")}đ</span>
        </div>

        <div className="summary-row">
          <span>Phí vận chuyển</span>
          <span className={shippingCost === 0 ? "free" : ""}>
            {shippingCost === 0
              ? "Miễn phí"
              : \`\${shippingCost.toLocaleString("vi-VN")}đ\`}
          </span>
        </div>

        <div className="summary-row">
          <span>Thuế VAT (10%)</span>
          <span>{tax.toLocaleString("vi-VN")}đ</span>
        </div>

        {discount > 0 && (
          <div className="summary-row discount">
            <span>Giảm giá</span>
            <span>-{discount.toLocaleString("vi-VN")}đ</span>
          </div>
        )}

        <div className="summary-divider"></div>

        <div className="summary-row total">
          <span>Tổng cộng</span>
          <span className="total-amount">{total.toLocaleString("vi-VN")}đ</span>
        </div>

        {savedAmount > 0 && (
          <div className="saved-amount">
            🎉 Bạn tiết kiệm được {savedAmount.toLocaleString("vi-VN")}đ
          </div>
        )}

        <button className="btn-checkout">🛍️ Thanh toán</button>
      </div>

      {/* Available Coupons */}
      {!state.appliedCoupon && <CouponList coupons={state.coupons} />}
    </div>
  );
}

/**
 * CouponList Component
 * Hiển thị danh sách mã giảm giá có sẵn
 */
function CouponList({ coupons }) {
  return (
    <div className="coupon-list">
      <h3 className="coupon-list-title">💎 Mã giảm giá khả dụng</h3>
      <div className="coupon-grid">
        {Object.values(coupons).map((coupon) => (
          <div key={coupon.code} className="coupon-badge">
            <div className="coupon-code-badge">{coupon.code}</div>
            <div className="coupon-desc-badge">{coupon.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartApp;

`})]})}const E={1:{id:1,name:"Bạn",avatar:"😎",color:"#00D9FF"},2:{id:2,name:"Alice",avatar:"👩",color:"#22c55e"},3:{id:3,name:"Bob",avatar:"👨",color:"#f59e0b"},4:{id:4,name:"Charlie",avatar:"🧑",color:"#8b5cf6"}},Z=[{id:1,name:"💬 General",description:"Thảo luận chung",unread:0},{id:2,name:"🎮 Gaming",description:"Trò chuyện về game",unread:2},{id:3,name:"💻 Tech Talk",description:"Công nghệ & lập trình",unread:5},{id:4,name:"🎵 Music",description:"Âm nhạc & nghệ thuật",unread:0},{id:5,name:"🏃 Fitness",description:"Thể thao & sức khỏe",unread:1}],Y=t=>({1:[{id:1,userId:2,text:"Chào mọi người! 👋",timestamp:Date.now()-36e5,replyTo:null,edited:!1},{id:2,userId:3,text:"Hi Alice! Hôm nay thế nào?",timestamp:Date.now()-3e6,replyTo:null,edited:!1},{id:3,userId:2,text:"Tốt lắm, cảm ơn! 😊",timestamp:Date.now()-2e6,replyTo:2,edited:!1}],2:[{id:4,userId:4,text:"Ai chơi Valorant không? 🎮",timestamp:Date.now()-18e5,replyTo:null,edited:!1},{id:5,userId:3,text:"Có đó! Rank bao nhiêu?",timestamp:Date.now()-12e5,replyTo:4,edited:!1}],3:[{id:6,userId:2,text:"React 19 ra rồi nè! 🚀",timestamp:Date.now()-9e5,replyTo:null,edited:!1},{id:7,userId:3,text:"Server Components quá tuyệt",timestamp:Date.now()-6e5,replyTo:6,edited:!1},{id:8,userId:4,text:"useReducer vs useState ai win?",timestamp:Date.now()-3e5,replyTo:null,edited:!1},{id:9,userId:2,text:"useReducer cho complex state!",timestamp:Date.now()-12e4,replyTo:8,edited:!1},{id:10,userId:3,text:"Đúng rồi, nhất là với normalized state",timestamp:Date.now()-6e4,replyTo:9,edited:!1}],4:[{id:11,userId:4,text:"Nghe album mới của Taylor Swift chưa? 🎵",timestamp:Date.now()-72e5,replyTo:null,edited:!1}],5:[{id:12,userId:2,text:"Ai đi gym sáng mai không? 🏋️",timestamp:Date.now()-18e5,replyTo:null,edited:!1}]})[t]||[];function ee({roomId:t,currentUserId:s,roomName:n}){const[r,a]=i.useState(()=>Y(t)),[N,v]=i.useState(""),[f,o]=i.useState(null),[u,d]=i.useState(null),[g,C]=i.useState({}),k=i.useRef(null),w=i.useRef({});i.useEffect(()=>{k.current?.scrollIntoView({behavior:"smooth"})},[r]),i.useEffect(()=>()=>{Object.values(w.current).forEach(clearTimeout)},[]);const I=i.useCallback(()=>{const c=N.trim();if(c){if(u)a(j=>j.map(S=>S.id===u.id?{...S,text:c,edited:!0}:S)),d(null);else{const j={id:Date.now(),userId:s,text:c,timestamp:Date.now(),replyTo:f?.id||null,edited:!1};a(S=>[...S,j]),o(null)}v("")}},[N,s,f,u]),P=i.useCallback(c=>{window.confirm("🗑️ Xóa tin nhắn này?")&&a(j=>j.filter(S=>S.id!==c))},[]),h=i.useCallback(c=>{d(c),v(c.text),o(null)},[]),m=i.useCallback(c=>{o(c),d(null)},[]),x=i.useCallback(()=>{o(null),d(null),v("")},[]),M=i.useCallback(c=>{const j=c.target.value;if(v(j),j.length>0&&Math.random()>.7){const S=[2,3,4][Math.floor(Math.random()*3)];C(T=>({...T,[S]:!0})),w.current[S]&&clearTimeout(w.current[S]),w.current[S]=setTimeout(()=>{C(T=>{const D={...T};return delete D[S],D})},3e3)}},[]),l=i.useCallback(c=>{const j=new Date(c),T=new Date-j;return T<6e4?"Vừa xong":T<36e5?`${Math.floor(T/6e4)} phút trước`:T<864e5?j.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}):j.toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit"})},[]),p=i.useCallback(c=>r.find(j=>j.id===c),[r]),y=i.useMemo(()=>Object.keys(g).map(c=>E[c]?.name).filter(Boolean),[g]);return e.jsxs("div",{className:"chat-room",children:[e.jsx("div",{className:"room-header",children:e.jsxs("div",{className:"room-info",children:[e.jsx("h2",{className:"room-name",children:n}),e.jsxs("div",{className:"online-status",children:[e.jsx("span",{className:"status-dot"}),Object.keys(E).length," thành viên online"]})]})}),e.jsxs("div",{className:"messages-container",children:[r.length===0?e.jsxs("div",{className:"empty-messages",children:[e.jsx("div",{className:"empty-icon",children:"💬"}),e.jsx("p",{children:"Chưa có tin nhắn. Hãy bắt đầu cuộc trò chuyện!"})]}):r.map((c,j)=>{const S=E[c.userId],T=c.userId===s,D=j===0||r[j-1].userId!==c.userId,R=c.replyTo?p(c.replyTo):null;return e.jsxs("div",{className:`message ${T?"own":""} ${D?"":"compact"}`,children:[D&&!T&&e.jsx("div",{className:"message-avatar",style:{color:S.color},children:S.avatar}),e.jsxs("div",{className:"message-content",children:[D&&!T&&e.jsx("div",{className:"message-author",style:{color:S.color},children:S.name}),R&&e.jsxs("div",{className:"message-reply",children:[e.jsx("div",{className:"reply-icon",children:"↩️"}),e.jsxs("div",{className:"reply-content",children:[e.jsx("div",{className:"reply-author",children:E[R.userId]?.name}),e.jsx("div",{className:"reply-text",children:R.text})]})]}),e.jsxs("div",{className:"message-bubble",children:[e.jsx("div",{className:"message-text",children:c.text}),c.edited&&e.jsx("span",{className:"edited-badge",children:"đã chỉnh sửa"})]}),e.jsxs("div",{className:"message-meta",children:[e.jsx("span",{className:"message-time",children:l(c.timestamp)}),T&&e.jsxs("div",{className:"message-actions",children:[e.jsx("button",{className:"action-btn",onClick:()=>h(c),title:"Chỉnh sửa",children:"✏️"}),e.jsx("button",{className:"action-btn",onClick:()=>P(c.id),title:"Xóa",children:"🗑️"})]}),!T&&e.jsx("button",{className:"action-btn reply-btn",onClick:()=>m(c),title:"Trả lời",children:"↩️"})]})]})]},c.id)}),y.length>0&&e.jsxs("div",{className:"typing-indicator",children:[e.jsx("div",{className:"typing-avatar",children:"✍️"}),e.jsxs("div",{className:"typing-text",children:[y.join(", ")," đang nhập",e.jsxs("span",{className:"typing-dots",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]})]})]}),e.jsx("div",{ref:k})]}),e.jsxs("div",{className:"input-area",children:[(f||u)&&e.jsxs("div",{className:"action-preview",children:[e.jsx("div",{className:"preview-icon",children:u?"✏️":"↩️"}),e.jsxs("div",{className:"preview-content",children:[e.jsx("div",{className:"preview-label",children:u?"Chỉnh sửa tin nhắn":`Trả lời ${E[f.userId]?.name}`}),e.jsx("div",{className:"preview-text",children:u?u.text:f.text})]}),e.jsx("button",{className:"preview-close",onClick:x,children:"✕"})]}),e.jsxs("div",{className:"input-box",children:[e.jsx("input",{type:"text",className:"message-input",placeholder:"Nhập tin nhắn...",value:N,onChange:M,onKeyUp:c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),I())}}),e.jsx("button",{className:"send-button",onClick:I,disabled:!N.trim(),children:u?"💾":"📤"})]})]})]})}function te(){const[t,s]=i.useState(Z),[n,r]=i.useState(1),[a]=i.useState(1),N=i.useCallback(o=>{r(o),s(u=>u.map(d=>d.id===o?{...d,unread:0}:d))},[]),v=i.useMemo(()=>t.find(o=>o.id===n),[t,n]),f=i.useMemo(()=>t.reduce((o,u)=>o+u.unread,0),[t]);return e.jsxs("div",{className:"chat-app",children:[e.jsxs("header",{className:"app-header",children:[e.jsx("h1",{className:"app-title",children:e.jsx("span",{className:"title-gradient",children:"💬 Chat"})}),e.jsx("p",{className:"app-subtitle",children:"Real-time Chat với State Colocation"})]}),e.jsxs("div",{className:"app-chat-layout",children:[e.jsxs("div",{className:"sidebar-chatapp",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("h2",{className:"sidebar-title",children:"📁 Rooms"}),f>0&&e.jsx("div",{className:"total-unread",children:f})]}),e.jsx("div",{className:"rooms-list",children:t.map(o=>e.jsxs("div",{className:`room-item ${o.id===n?"active":""}`,onClick:()=>N(o.id),children:[e.jsxs("div",{className:"room-item-content",children:[e.jsx("div",{className:"room-item-name",children:o.name}),e.jsx("div",{className:"room-item-desc",children:o.description})]}),o.unread>0&&e.jsx("div",{className:"unread-badge",children:o.unread})]},o.id))}),e.jsxs("div",{className:"user-profile",children:[e.jsx("div",{className:"profile-avatar",style:{color:E[a].color},children:E[a].avatar}),e.jsxs("div",{className:"profile-info",children:[e.jsx("div",{className:"profile-name",children:E[a].name}),e.jsx("div",{className:"profile-status",children:"🟢 Online"})]})]})]}),e.jsx("div",{className:"main-chatapp",children:e.jsx(ee,{roomId:n,currentUserId:a,roomName:v?.name||""},n)})]})]})}function se(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:3,title:"Real-time Chat với State Colocation"}),e.jsx(b.Description,{children:`
// TODO: Implement chat app với proper state placement

function ChatRoom({ roomId, currentUserId }) {
  // TODO: State cho chat room này
  // - messages: array of messages
  // - isTyping: { userId: boolean }
  // - onlineUsers: array of user IDs
  
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  // TODO: Implement
  // - sendMessage
  // - deleteMessage
  // - editMessage
  // - replyToMessage
  // - loadMoreMessages (pagination)

  // TODO: Simulate typing indicator
  // useEffect với debounce khi user type

  return (
    <div className="chat-room">
      <div className="messages">
        {/* TODO: Message list */}
      </div>
      
      {replyingTo && (
        <div className="replying-to">
          Đang trả lời: {replyingTo.text}
          <button onClick={() => setReplyingTo(null)}>×</button>
        </div>
      )}

      <div className="input-area">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={sendMessage}>Gửi</button>
      </div>
    </div>
  );
}

function ChatApp() {
  // TODO: State ở App level (higher level)
  // - rooms: array of rooms
  // - currentRoomId
  // - currentUser

  const [rooms] = useState([
    { id: 1, name: 'General', unread: 3 },
    { id: 2, name: 'Random', unread: 0 },
    { id: 3, name: 'Tech', unread: 1 }
  ]);

  const [currentRoomId, setCurrentRoomId] = useState(1);

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2>Rooms</h2>
        {rooms.map(room => (
          <div
            key={room.id}
            className={\`room \${room.id === currentRoomId ? 'active' : ''}\`}
            onClick={() => setCurrentRoomId(room.id)}
          >
            {room.name}
            {room.unread > 0 && <span className="badge">{room.unread}</span>}
          </div>
        ))}
      </div>

      <div className="main">
        {/* ChatRoom state cô lập cho mỗi room */}
        <ChatRoom
          key={currentRoomId} // Re-mount khi đổi room
          roomId={currentRoomId}
          currentUserId={1}
        />
      </div>
    </div>
  );
}

`}),e.jsx(b.Demo,{children:e.jsx(te,{})}),e.jsx(b.Code,{children:`
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * REAL-TIME CHAT APP với STATE COLOCATION
 * Demonstrates:
 * - State Colocation (đặt state gần nơi sử dụng)
 * - Component independence
 * - Efficient re-renders
 * - Message management
 * Design: CyberSlate/Neon Ocean
 */

// Mock users data
const USERS = {
  1: { id: 1, name: "Bạn", avatar: "😎", color: "#00D9FF" },
  2: { id: 2, name: "Alice", avatar: "👩", color: "#22c55e" },
  3: { id: 3, name: "Bob", avatar: "👨", color: "#f59e0b" },
  4: { id: 4, name: "Charlie", avatar: "🧑", color: "#8b5cf6" },
};

// Mock rooms data
const INITIAL_ROOMS = [
  { id: 1, name: "💬 General", description: "Thảo luận chung", unread: 0 },
  { id: 2, name: "🎮 Gaming", description: "Trò chuyện về game", unread: 2 },
  {
    id: 3,
    name: "💻 Tech Talk",
    description: "Công nghệ & lập trình",
    unread: 5,
  },
  { id: 4, name: "🎵 Music", description: "Âm nhạc & nghệ thuật", unread: 0 },
  { id: 5, name: "🏃 Fitness", description: "Thể thao & sức khỏe", unread: 1 },
];

// Generate mock messages cho room
const generateMockMessages = (roomId) => {
  const messages = {
    1: [
      {
        id: 1,
        userId: 2,
        text: "Chào mọi người! 👋",
        timestamp: Date.now() - 3600000,
        replyTo: null,
        edited: false,
      },
      {
        id: 2,
        userId: 3,
        text: "Hi Alice! Hôm nay thế nào?",
        timestamp: Date.now() - 3000000,
        replyTo: null,
        edited: false,
      },
      {
        id: 3,
        userId: 2,
        text: "Tốt lắm, cảm ơn! 😊",
        timestamp: Date.now() - 2000000,
        replyTo: 2,
        edited: false,
      },
    ],
    2: [
      {
        id: 4,
        userId: 4,
        text: "Ai chơi Valorant không? 🎮",
        timestamp: Date.now() - 1800000,
        replyTo: null,
        edited: false,
      },
      {
        id: 5,
        userId: 3,
        text: "Có đó! Rank bao nhiêu?",
        timestamp: Date.now() - 1200000,
        replyTo: 4,
        edited: false,
      },
    ],
    3: [
      {
        id: 6,
        userId: 2,
        text: "React 19 ra rồi nè! 🚀",
        timestamp: Date.now() - 900000,
        replyTo: null,
        edited: false,
      },
      {
        id: 7,
        userId: 3,
        text: "Server Components quá tuyệt",
        timestamp: Date.now() - 600000,
        replyTo: 6,
        edited: false,
      },
      {
        id: 8,
        userId: 4,
        text: "useReducer vs useState ai win?",
        timestamp: Date.now() - 300000,
        replyTo: null,
        edited: false,
      },
      {
        id: 9,
        userId: 2,
        text: "useReducer cho complex state!",
        timestamp: Date.now() - 120000,
        replyTo: 8,
        edited: false,
      },
      {
        id: 10,
        userId: 3,
        text: "Đúng rồi, nhất là với normalized state",
        timestamp: Date.now() - 60000,
        replyTo: 9,
        edited: false,
      },
    ],
    4: [
      {
        id: 11,
        userId: 4,
        text: "Nghe album mới của Taylor Swift chưa? 🎵",
        timestamp: Date.now() - 7200000,
        replyTo: null,
        edited: false,
      },
    ],
    5: [
      {
        id: 12,
        userId: 2,
        text: "Ai đi gym sáng mai không? 🏋️",
        timestamp: Date.now() - 1800000,
        replyTo: null,
        edited: false,
      },
    ],
  };

  return messages[roomId] || [];
};

/**
 * ChatRoom Component
 * ✅ STATE COLOCATION: Mỗi room có state riêng, độc lập
 * Props:
 * - roomId: ID của room hiện tại
 * - currentUserId: ID của user đang đăng nhập
 */
function ChatRoom({ roomId, currentUserId, roomName }) {
  // ✅ STATE CÔ LẬP - Chỉ component này sử dụng
  const [messages, setMessages] = useState(() => generateMockMessages(roomId));
  const [inputValue, setInputValue] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [isTyping, setIsTyping] = useState({});

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef({});

  // Auto-scroll to bottom khi có message mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Cleanup typing timeouts
  useEffect(() => {
    return () => {
      Object.values(typingTimeoutRef.current).forEach(clearTimeout);
    };
  }, []);

  /**
   * Gửi tin nhắn mới
   */
  const sendMessage = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;

    if (editingMessage) {
      // Edit existing message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editingMessage.id ? { ...msg, text, edited: true } : msg
        )
      );
      setEditingMessage(null);
    } else {
      // Send new message
      const newMessage = {
        id: Date.now(),
        userId: currentUserId,
        text,
        timestamp: Date.now(),
        replyTo: replyingTo?.id || null,
        edited: false,
      };

      setMessages((prev) => [...prev, newMessage]);
      setReplyingTo(null);
    }

    setInputValue("");
  }, [inputValue, currentUserId, replyingTo, editingMessage]);

  /**
   * Xóa tin nhắn
   */
  const deleteMessage = useCallback((messageId) => {
    if (window.confirm("🗑️ Xóa tin nhắn này?")) {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  }, []);

  /**
   * Bắt đầu edit tin nhắn
   */
  const startEditMessage = useCallback((message) => {
    setEditingMessage(message);
    setInputValue(message.text);
    setReplyingTo(null);
  }, []);

  /**
   * Reply to message
   */
  const replyToMessage = useCallback((message) => {
    setReplyingTo(message);
    setEditingMessage(null);
  }, []);

  /**
   * Cancel reply/edit
   */
  const cancelAction = useCallback(() => {
    setReplyingTo(null);
    setEditingMessage(null);
    setInputValue("");
  }, []);

  /**
   * Simulate typing indicator
   */
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setInputValue(value);

    // Simulate other users typing
    if (value.length > 0 && Math.random() > 0.7) {
      const randomUserId = [2, 3, 4][Math.floor(Math.random() * 3)];

      setIsTyping((prev) => ({ ...prev, [randomUserId]: true }));

      if (typingTimeoutRef.current[randomUserId]) {
        clearTimeout(typingTimeoutRef.current[randomUserId]);
      }

      typingTimeoutRef.current[randomUserId] = setTimeout(() => {
        setIsTyping((prev) => {
          const newState = { ...prev };
          delete newState[randomUserId];
          return newState;
        });
      }, 3000);
    }
  }, []);

  /**
   * Format timestamp
   */
  const formatTime = useCallback((timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    // 1000ms = 1s 
    // 1000 ms x 60 = 60000 = 1 phút

    if (diff < 60000) return "Vừa xong";  // < 1 phút
    if (diff < 3600000) return \`\${Math.floor(diff / 60000)} phút trước\`; // < 1 giờ
    // < 24 giờ
    if (diff < 86400000)
      return date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    // > 24 giờ, hiển thị ngày
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
    });
  }, []);

  /**
   * Get message being replied to
   */
  const getReplyMessage = useCallback(
    (messageId) => {
      return messages.find((msg) => msg.id === messageId);
    },
    [messages]
  );

  // Typing users display
  const typingUsers = useMemo(() => {
    return Object.keys(isTyping)
      .map((userId) => USERS[userId]?.name)
      .filter(Boolean);
  }, [isTyping]);

  return (
    <div className="chat-room">
      {/* Room Header */}
      <div className="room-header">
        <div className="room-info">
          <h2 className="room-name">{roomName}</h2>
          <div className="online-status">
            <span className="status-dot"></span>
            {Object.keys(USERS).length} thành viên online
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-messages">
            <div className="empty-icon">💬</div>
            <p>Chưa có tin nhắn. Hãy bắt đầu cuộc trò chuyện!</p>
          </div>
        ) : (
          messages.map((message, index) => {
            const user = USERS[message.userId];
            const isOwn = message.userId === currentUserId;
            const showAvatar =
              index === 0 || messages[index - 1].userId !== message.userId;
            const replyMessage = message.replyTo
              ? getReplyMessage(message.replyTo)
              : null;

            return (
              <div
                key={message.id}
                className={\`message \${isOwn ? "own" : ""} \${
                  !showAvatar ? "compact" : ""
                }\`}
              >
                {showAvatar && !isOwn && (
                  <div className="message-avatar" style={{ color: user.color }}>
                    {user.avatar}
                  </div>
                )}

                <div className="message-content">
                  {showAvatar && !isOwn && (
                    <div
                      className="message-author"
                      style={{ color: user.color }}
                    >
                      {user.name}
                    </div>
                  )}

                  {replyMessage && (
                    <div className="message-reply">
                      <div className="reply-icon">↩️</div>
                      <div className="reply-content">
                        <div className="reply-author">
                          {USERS[replyMessage.userId]?.name}
                        </div>
                        <div className="reply-text">{replyMessage.text}</div>
                      </div>
                    </div>
                  )}

                  <div className="message-bubble">
                    <div className="message-text">{message.text}</div>
                    {message.edited && (
                      <span className="edited-badge">đã chỉnh sửa</span>
                    )}
                  </div>

                  <div className="message-meta">
                    <span className="message-time">
                      {formatTime(message.timestamp)}
                    </span>

                    {isOwn && (
                      <div className="message-actions">
                        <button
                          className="action-btn"
                          onClick={() => startEditMessage(message)}
                          title="Chỉnh sửa"
                        >
                          ✏️
                        </button>
                        <button
                          className="action-btn"
                          onClick={() => deleteMessage(message.id)}
                          title="Xóa"
                        >
                          🗑️
                        </button>
                      </div>
                    )}

                    {!isOwn && (
                      <button
                        className="action-btn reply-btn"
                        onClick={() => replyToMessage(message)}
                        title="Trả lời"
                      >
                        ↩️
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div className="typing-indicator">
            <div className="typing-avatar">✍️</div>
            <div className="typing-text">
              {typingUsers.join(", ")} đang nhập
              <span className="typing-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-area">
        {/* Reply/Edit Preview */}
        {(replyingTo || editingMessage) && (
          <div className="action-preview">
            <div className="preview-icon">{editingMessage ? "✏️" : "↩️"}</div>
            <div className="preview-content">
              <div className="preview-label">
                {editingMessage
                  ? "Chỉnh sửa tin nhắn"
                  : \`Trả lời \${USERS[replyingTo.userId]?.name}\`}
              </div>
              <div className="preview-text">
                {editingMessage ? editingMessage.text : replyingTo.text}
              </div>
            </div>
            <button className="preview-close" onClick={cancelAction}>
              ✕
            </button>
          </div>
        )}

        {/* Input Box */}
        <div className="input-box">
          <input
            type="text"
            className="message-input"
            placeholder="Nhập tin nhắn..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            className="send-button"
            onClick={sendMessage}
            disabled={!inputValue.trim()}
          >
            {editingMessage ? "💾" : "📤"}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * ChatApp Component - Main Container
 * ✅ STATE Ở CAO: Rooms list và current room selection
 */
function ChatApp() {
  // ✅ State ở App level - shared data
  const [rooms, setRooms] = useState(INITIAL_ROOMS);
  const [currentRoomId, setCurrentRoomId] = useState(1);
  const [currentUserId] = useState(1); // Current logged-in user

  /**
   * Switch room
   * Clear unread count khi vào room
   */
  const handleRoomChange = useCallback((roomId) => {
    setCurrentRoomId(roomId);

    // Clear unread count
    setRooms((prev) =>
      prev.map((room) => (room.id === roomId ? { ...room, unread: 0 } : room))
    );
  }, []);

  /**
   * Get current room info
   */
  const currentRoom = useMemo(() => {
    return rooms.find((room) => room.id === currentRoomId);
  }, [rooms, currentRoomId]);

  /**
   * Total unread messages
   */
  const totalUnread = useMemo(() => {
    return rooms.reduce((sum, room) => sum + room.unread, 0);
  }, [rooms]);

  return (
    <div className="chat-app">
      {/* App Header */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-gradient">💬 Chat</span>
        </h1>
        <p className="app-subtitle">Real-time Chat với State Colocation</p>
      </header>

      <div className="app-chat-layout">
        {/* Sidebar: Room List */}
        <aside className="sidebar-chatapp">
          <div className="sidebar-header">
            <h2 className="sidebar-title">📁 Rooms</h2>
            {totalUnread > 0 && (
              <div className="total-unread">{totalUnread}</div>
            )}
          </div>

          <div className="rooms-list">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={\`room-item \${
                  room.id === currentRoomId ? "active" : ""
                }\`}
                onClick={() => handleRoomChange(room.id)}
              >
                <div className="room-item-content">
                  <div className="room-item-name">{room.name}</div>
                  <div className="room-item-desc">{room.description}</div>
                </div>
                {room.unread > 0 && (
                  <div className="unread-badge">{room.unread}</div>
                )}
              </div>
            ))}
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <div
              className="profile-avatar"
              style={{ color: USERS[currentUserId].color }}
            >
              {USERS[currentUserId].avatar}
            </div>
            <div className="profile-info">
              <div className="profile-name">{USERS[currentUserId].name}</div>
              <div className="profile-status">🟢 Online</div>
            </div>
          </div>
        </aside>

        {/* Main: Chat Room */}
        <div className="main-chatapp">
          {/* ✅ ChatRoom state cô lập, re-mount khi đổi room */}
          <ChatRoom
            key={currentRoomId}
            roomId={currentRoomId}
            currentUserId={currentUserId}
            roomName={currentRoom?.name || ""}
          />
        </main>
      </div>
    </div>
  );
}

export default ChatApp;

`})]})}const ae=t=>{const n={week:7,month:30,year:12}[t],r=[];for(let a=0;a<n;a++)r.push({label:t==="year"?`T${a+1}`:`${a+1}`,value:Math.floor(Math.random()*5e7)+1e7});return r},ie=()=>({total:Math.floor(Math.random()*1e4)+5e3,active:Math.floor(Math.random()*5e3)+2e3,new:Math.floor(Math.random()*500)+100,growth:(Math.random()*30+5).toFixed(1)}),ne=()=>{const t=["pending","processing","completed","cancelled"],s=["iPhone 15","MacBook Pro","AirPods","iPad Air","Apple Watch"];return Array.from({length:10},(n,r)=>({id:`ORD${Date.now()-r*1e5}`,product:s[Math.floor(Math.random()*s.length)],customer:`Khách hàng ${r+1}`,amount:Math.floor(Math.random()*5e7)+1e6,status:t[Math.floor(Math.random()*t.length)],timestamp:Date.now()-Math.random()*864e5*7}))},re=()=>[{name:"iPhone 15 Pro Max",icon:"📱"},{name:"MacBook Pro M3",icon:"💻"},{name:"AirPods Pro",icon:"🎧"},{name:"iPad Air M2",icon:"📱"},{name:"Apple Watch Ultra",icon:"⌚"}].map(s=>({...s,sales:Math.floor(Math.random()*1e3)+100,revenue:Math.floor(Math.random()*5e8)+5e7}));function oe(){const[t,s]=i.useState("week"),[n,r]=i.useState([]),[a,N]=i.useState(!1);i.useEffect(()=>{N(!0);const o=setTimeout(()=>{r(ae(t)),N(!1)},500);return()=>clearTimeout(o)},[t]);const v=i.useMemo(()=>{if(console.log("📊 Calculating sales stats..."),n.length===0)return{total:0,average:0,highest:0,growth:0};const o=n.reduce((C,k)=>C+k.value,0),u=o/n.length,d=Math.max(...n.map(C=>C.value)),g=n.length>1?((n[n.length-1].value-n[0].value)/n[0].value*100).toFixed(1):0;return{total:o,average:u,highest:d,growth:g}},[n]),f=o=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(o);return e.jsxs("div",{className:"widget sales-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"💰 Doanh thu"}),e.jsxs("div",{className:"period-selector",children:[e.jsx("button",{className:`period-btn ${t==="week"?"active":""}`,onClick:()=>s("week"),children:"Tuần"}),e.jsx("button",{className:`period-btn ${t==="month"?"active":""}`,onClick:()=>s("month"),children:"Tháng"}),e.jsx("button",{className:`period-btn ${t==="year"?"active":""}`,onClick:()=>s("year"),children:"Năm"})]})]}),a?e.jsxs("div",{className:"widget-loading",children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Đang tải dữ liệu..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Tổng"}),e.jsx("div",{className:"stat-value",children:f(v.total)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Trung bình"}),e.jsx("div",{className:"stat-value",children:f(v.average)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Cao nhất"}),e.jsx("div",{className:"stat-value",children:f(v.highest)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Tăng trưởng"}),e.jsxs("div",{className:`stat-value ${v.growth>=0?"positive":"negative"}`,children:[v.growth>=0?"↗":"↘"," ",Math.abs(v.growth),"%"]})]})]}),e.jsx("div",{className:"chart-container",children:n.map((o,u)=>{const d=Math.max(...n.map(C=>C.value)),g=o.value/d*100;return e.jsxs("div",{className:"chart-bar-wrapper",children:[e.jsx("div",{className:"chart-bar",style:{height:`${g}%`},children:e.jsx("div",{className:"bar-tooltip",children:f(o.value)})}),e.jsx("div",{className:"chart-label",children:o.label})]},u)})})]})]})}function le(){const[t,s]=i.useState(null),[n,r]=i.useState(!0),[a,N]=i.useState(0);i.useEffect(()=>{r(!0);const u=setTimeout(()=>{s(ie()),r(!1)},300);return()=>clearTimeout(u)},[a]);const v=i.useMemo(()=>t?t.total-t.active:0,[t]),f=i.useMemo(()=>t?(t.active/t.total*100).toFixed(1):0,[t]),o=()=>{N(u=>u+1)};return e.jsxs("div",{className:"widget user-stats-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"👥 Người dùng"}),e.jsx("button",{className:"refresh-btn",onClick:o,disabled:n,children:"🔄"})]}),n?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"user-stats-main",children:e.jsxs("div",{className:"main-stat",children:[e.jsx("div",{className:"main-stat-value",children:t.total.toLocaleString()}),e.jsx("div",{className:"main-stat-label",children:"Tổng người dùng"})]})}),e.jsxs("div",{className:"progress-section",children:[e.jsxs("div",{className:"progress-header",children:[e.jsx("span",{children:"Hoạt động"}),e.jsxs("span",{className:"progress-value",children:[f,"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${f}%`}})})]}),e.jsxs("div",{className:"user-stats-grid",children:[e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon active",children:"✅"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:t.active.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Hoạt động"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon inactive",children:"💤"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:v.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Không hoạt động"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon new",children:"🆕"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:t.new.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Mới (7 ngày)"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon growth",children:"📈"}),e.jsxs("div",{className:"stat-info",children:[e.jsxs("div",{className:"stat-value",children:["+",t.growth,"%"]}),e.jsx("div",{className:"stat-label",children:"Tăng trưởng"})]})]})]})]})]})}function ce(){const[t,s]=i.useState([]),[n,r]=i.useState(!0),[a,N]=i.useState("all");i.useEffect(()=>{r(!0);const d=setTimeout(()=>{s(ne()),r(!1)},400);return()=>clearTimeout(d)},[]);const v=i.useMemo(()=>(console.log("🔄 Filtering orders..."),a==="all"?t:t.filter(d=>d.status===a)),[t,a]),f=i.useMemo(()=>{const d=t.length,g=t.filter(w=>w.status==="pending").length,C=t.filter(w=>w.status==="completed").length,k=t.filter(w=>w.status==="completed").reduce((w,I)=>w+I.amount,0);return{total:d,pending:g,completed:C,totalRevenue:k}},[t]),o=d=>{const g={pending:{label:"Chờ xử lý",icon:"⏳",class:"pending"},processing:{label:"Đang xử lý",icon:"⚙️",class:"processing"},completed:{label:"Hoàn thành",icon:"✅",class:"completed"},cancelled:{label:"Đã hủy",icon:"❌",class:"cancelled"}};return g[d]||g.pending},u=d=>{const g=new Date(d),k=new Date-g;return k<36e5?`${Math.floor(k/6e4)} phút trước`:k<864e5?`${Math.floor(k/36e5)} giờ trước`:`${Math.floor(k/864e5)} ngày trước`};return e.jsxs("div",{className:"widget orders-widget",children:[e.jsx("div",{className:"widget-header",children:e.jsx("h3",{className:"widget-title",children:"📦 Đơn hàng gần đây"})}),e.jsxs("div",{className:"order-stats",children:[e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Tổng:"}),e.jsx("span",{className:"stat-value",children:f.total})]}),e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Chờ:"}),e.jsx("span",{className:"stat-value pending",children:f.pending})]}),e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Hoàn thành:"}),e.jsx("span",{className:"stat-value completed",children:f.completed})]})]}),e.jsx("div",{className:"filter-buttons",children:["all","pending","processing","completed","cancelled"].map(d=>e.jsx("button",{className:`filter-btn ${a===d?"active":""}`,onClick:()=>N(d),children:d==="all"?"Tất cả":o(d).label},d))}),n?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsx("div",{className:"orders-list",children:v.length===0?e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"Không có đơn hàng"})}):v.map(d=>{const g=o(d.status);return e.jsxs("div",{className:"order-item",children:[e.jsxs("div",{className:"order-main",children:[e.jsxs("div",{className:"order-id",children:["#",d.id]}),e.jsx("div",{className:"order-product",children:d.product}),e.jsx("div",{className:"order-customer",children:d.customer})]}),e.jsxs("div",{className:"order-details",children:[e.jsxs("div",{className:"order-amount",children:[d.amount.toLocaleString("vi-VN"),"đ"]}),e.jsxs("div",{className:`order-status ${g.class}`,children:[g.icon," ",g.label]})]}),e.jsx("div",{className:"order-time",children:u(d.timestamp)})]},d.id)})})]})}function de(){const[t,s]=i.useState([]),[n,r]=i.useState(!0),[a,N]=i.useState("sales");i.useEffect(()=>{r(!0);const o=setTimeout(()=>{s(re()),r(!1)},350);return()=>clearTimeout(o)},[]);const v=i.useMemo(()=>(console.log("🔄 Sorting products..."),[...t].sort((o,u)=>a==="sales"?u.sales-o.sales:u.revenue-o.revenue)),[t,a]),f=i.useMemo(()=>v.length===0?0:Math.max(...a==="sales"?v.map(o=>o.sales):v.map(o=>o.revenue)),[v,a]);return e.jsxs("div",{className:"widget products-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"🏆 Sản phẩm bán chạy"}),e.jsxs("div",{className:"sort-selector",children:[e.jsx("button",{className:`sort-btn ${a==="sales"?"active":""}`,onClick:()=>N("sales"),children:"Số lượng"}),e.jsx("button",{className:`sort-btn ${a==="revenue"?"active":""}`,onClick:()=>N("revenue"),children:"Doanh thu"})]})]}),n?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsx("div",{className:"products-list",children:v.map((o,u)=>{const g=(a==="sales"?o.sales:o.revenue)/f*100;return e.jsxs("div",{className:"product-item",children:[e.jsxs("div",{className:"product-rank",children:["#",u+1]}),e.jsx("div",{className:"product-icon",children:o.icon}),e.jsxs("div",{className:"product-info",children:[e.jsx("div",{className:"product-name",children:o.name}),e.jsx("div",{className:"product-bar",children:e.jsx("div",{className:"product-bar-fill",style:{width:`${g}%`}})}),e.jsxs("div",{className:"product-stats",children:[e.jsxs("span",{children:[o.sales.toLocaleString()," bán"]}),e.jsxs("span",{className:"product-revenue",children:[(o.revenue/1e6).toFixed(1),"M"]})]})]})]},u)})})]})}function me(){const[t,s]=i.useState("grid"),[n,r]=i.useState("dark");return e.jsxs("div",{className:`dashboard ${n}`,children:[e.jsxs("header",{className:"dashboard-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{className:"dashboard-title",children:e.jsx("span",{className:"title-gradient",children:"📊 CyberDash"})}),e.jsx("p",{className:"dashboard-subtitle",children:"Analytics Dashboard với State Optimization"})]}),e.jsxs("div",{className:"header-controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("button",{className:`control-btn ${t==="grid"?"active":""}`,onClick:()=>s("grid"),title:"Grid Layout",children:"▦"}),e.jsx("button",{className:`control-btn ${t==="list"?"active":""}`,onClick:()=>s("list"),title:"List Layout",children:"☰"})]}),e.jsx("button",{className:"theme-toggle",onClick:()=>r(n==="dark"?"light":"dark"),children:n==="dark"?"☀️":"🌙"})]})]}),e.jsxs("div",{className:`widgets-container ${t}`,children:[e.jsx(oe,{}),e.jsx(le,{}),e.jsx(ce,{}),e.jsx(de,{})]})]})}function ue(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:4,title:"Dashboard với Multiple Widgets"}),e.jsx(b.Description,{children:`
// TODO: Implement dashboard với state optimization

// Widget có independent state
function SalesWidget() {
  const [period, setPeriod] = useState('week'); // 'week' | 'month' | 'year'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // TODO: Fetch data based on period
  useEffect(() => {
    // Simulate API call
  }, [period]);

  // TODO: Derived state - statistics
  const stats = useMemo(() => {
    // Calculate from data
  }, [data]);

  return (
    <div className="widget">
      <h3>Doanh thu</h3>
      {/* TODO: Render widget */}
    </div>
  );
}

function UserStatsWidget() {
  // TODO: Independent state
  return <div className="widget">{/* ... */}</div>;
}

function RecentOrdersWidget() {
  // TODO: Independent state
  return <div className="widget">{/* ... */}</div>;
}

function Dashboard() {
  // TODO: Shared/global state nếu cần
  // - theme
  // - user info
  // - notifications

  const [layout, setLayout] = useState('grid'); // 'grid' | 'list'

  return (
    <div className={\`dashboard \${layout}\`}>
      <h1>Dashboard</h1>
      
      <div className="controls">
        <button onClick={() => setLayout('grid')}>Grid</button>
        <button onClick={() => setLayout('list')}>List</button>
      </div>

      {/* Mỗi widget có state riêng */}
      <SalesWidget />
      <UserStatsWidget />
      <RecentOrdersWidget />
    </div>
  );
}

`}),e.jsx(b.Demo,{children:e.jsx(me,{})}),e.jsx(b.Code,{children:`
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
      label: period === "year" ? \`T\${i + 1}\` : \`\${i + 1}\`,
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
    id: \`ORD\${Date.now() - i * 100000}\`,
    product: products[Math.floor(Math.random() * products.length)],
    customer: \`Khách hàng \${i + 1}\`,
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
            className={\`period-btn \${period === "week" ? "active" : ""}\`}
            onClick={() => setPeriod("week")}
          >
            Tuần
          </button>
          <button
            className={\`period-btn \${period === "month" ? "active" : ""}\`}
            onClick={() => setPeriod("month")}
          >
            Tháng
          </button>
          <button
            className={\`period-btn \${period === "year" ? "active" : ""}\`}
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
                className={\`stat-value \${
                  stats.growth >= 0 ? "positive" : "negative"
                }\`}
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
                  <div className="chart-bar" style={{ height: \`\${height}%\` }}>
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
                style={{ width: \`\${activePercentage}%\` }}
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

    if (diff < 3600000) return \`\${Math.floor(diff / 60000)} phút trước\`;
    if (diff < 86400000) return \`\${Math.floor(diff / 3600000)} giờ trước\`;
    return \`\${Math.floor(diff / 86400000)} ngày trước\`;
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
              className={\`filter-btn \${filter === status ? "active" : ""}\`}
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
                    <div className={\`order-status \${badge.class}\`}>
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
            className={\`sort-btn \${sortBy === "sales" ? "active" : ""}\`}
            onClick={() => setSortBy("sales")}
          >
            Số lượng
          </button>
          <button
            className={\`sort-btn \${sortBy === "revenue" ? "active" : ""}\`}
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
                      style={{ width: \`\${percentage}%\` }}
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
    <div className={\`dashboard \${theme}\`}>
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
              className={\`control-btn \${layout === "grid" ? "active" : ""}\`}
              onClick={() => setLayout("grid")}
              title="Grid Layout"
            >
              ▦
            </button>
            <button
              className={\`control-btn \${layout === "list" ? "active" : ""}\`}
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
      <div className={\`widgets-container \${layout}\`}>
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

`})]})}const O=["account","profile","preferences","review"],pe={account:"1. Tài khoản",profile:"2. Thông tin",preferences:"3. Tùy chọn",review:"4. Xác nhận"},z=[{value:"",label:"Chọn giới tính"},{value:"male",label:"Nam"},{value:"female",label:"Nữ"},{value:"other",label:"Khác"}],$=[{value:"vi",label:"🇻🇳 Tiếng Việt"},{value:"en",label:"🇺🇸 English"},{value:"ja",label:"🇯🇵 日本語"},{value:"ko",label:"🇰🇷 한국어"}];function he(){const[t,s]=i.useState(0),[n,r]=i.useState({account:{email:"",username:"",password:"",confirmPassword:""},profile:{firstName:"",lastName:"",birthDate:"",gender:"",phone:"",address:"",city:"",zipCode:""},preferences:{newsletter:!1,notifications:{email:!0,sms:!1,push:!0},theme:"dark",language:"vi"}}),[a,N]=i.useState({}),[v,f]=i.useState({}),o=i.useCallback(()=>{const l={},{email:p,username:y,password:c,confirmPassword:j}=n.account;return p?/\S+@\S+\.\S+/.test(p)||(l.email="Email không hợp lệ"):l.email="Email là bắt buộc",y?y.length<3?l.username="Username phải có ít nhất 3 ký tự":/^[a-zA-Z0-9_]+$/.test(y)||(l.username="Username chỉ chứa chữ, số và dấu gạch dưới"):l.username="Username là bắt buộc",c?c.length<6?l.password="Mật khẩu phải có ít nhất 6 ký tự":/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(c)||(l.password="Mật khẩu phải có chữ hoa, chữ thường và số"):l.password="Mật khẩu là bắt buộc",j?c!==j&&(l.confirmPassword="Mật khẩu không khớp"):l.confirmPassword="Vui lòng xác nhận mật khẩu",l},[n.account]),u=i.useCallback(()=>{const l={},{firstName:p,lastName:y,birthDate:c,gender:j,phone:S,zipCode:T}=n.profile;if(p?p.length<2&&(l.firstName="Tên phải có ít nhất 2 ký tự"):l.firstName="Tên là bắt buộc",y?y.length<2&&(l.lastName="Họ phải có ít nhất 2 ký tự"):l.lastName="Họ là bắt buộc",!c)l.birthDate="Ngày sinh là bắt buộc";else{const D=new Date,R=new Date(c),A=D.getFullYear()-R.getFullYear();A<13&&(l.birthDate="Bạn phải từ 13 tuổi trở lên"),A>120&&(l.birthDate="Ngày sinh không hợp lệ")}return j||(l.gender="Vui lòng chọn giới tính"),S&&!/^0\d{9,10}$/.test(S)&&(l.phone="Số điện thoại không hợp lệ (VD: 0901234567)"),T&&!/^\d{5,6}$/.test(T)&&(l.zipCode="Mã bưu điện phải có 5-6 chữ số"),l},[n.profile]),d=i.useCallback(()=>({}),[]),g=i.useMemo(()=>(console.log("🔍 Running validations..."),{account:o(),profile:u(),preferences:d()}),[o,u,d]),C=i.useMemo(()=>{const l=O[t];if(l==="review")return!0;const p=g[l];return N(p),Object.keys(p).length===0},[t,g]),k=i.useMemo(()=>{console.log("📊 Calculating completion...");let l=0,p=0;return Object.entries(n.account).forEach(([y,c])=>{l++,c&&c.trim()!==""&&p++}),Object.entries(n.profile).forEach(([y,c])=>{l++,c&&c.trim()!==""&&p++}),l+=4,n.preferences.newsletter&&p++,n.preferences.theme&&p++,n.preferences.language&&p++,p++,Math.round(p/l*100)},[n]),w=i.useMemo(()=>Object.keys(g).every(l=>Object.keys(g[l]).length===0),[g]),I=i.useCallback((l,p,y)=>{r(c=>({...c,[l]:{...c[l],[p]:y}})),f(c=>({...c,[`${l}.${p}`]:!0}))},[]),P=i.useCallback((l,p,y,c)=>{r(j=>({...j,[l]:{...j[l],[p]:{...j[l][p],[y]:c}}}))},[]),h=i.useCallback(()=>{if(C&&t<O.length-1)s(l=>l+1),N({});else if(!C){const l=O[t];N(g[l])}},[C,t,g]),m=i.useCallback(()=>{t>0&&(s(l=>l-1),N({}))},[t]),x=i.useCallback(async()=>{console.log("🚀 Submitting form...",n),await new Promise(l=>setTimeout(l,1500)),alert(`✅ Đăng ký thành công!

Thông tin đã được lưu.`)},[n]),M=()=>{switch(O[t]){case"account":return e.jsx(ve,{data:n.account,errors:a,touched:v,onUpdate:(p,y)=>I("account",p,y)});case"profile":return e.jsx(ge,{data:n.profile,errors:a,touched:v,onUpdate:(p,y)=>I("profile",p,y)});case"preferences":return e.jsx(Ne,{data:n.preferences,onUpdate:(p,y)=>I("preferences",p,y),onUpdateNested:(p,y,c)=>P("preferences",p,y,c)});case"review":return e.jsx(fe,{formData:n});default:return null}};return e.jsxs("div",{className:"form-wizard",children:[e.jsxs("div",{className:"wizard-header",children:[e.jsx("h1",{className:"wizard-title",children:e.jsx("span",{className:"title-gradient",children:"📝 Đăng ký tài khoản"})}),e.jsx("p",{className:"wizard-subtitle",children:"Form Wizard với Complex State Management"})]}),e.jsxs("div",{className:"progress-section",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${k}%`}})}),e.jsxs("div",{className:"progress-text",children:[k,"% hoàn thành"]})]}),e.jsx("div",{className:"steps-indicator",children:O.map((l,p)=>e.jsxs("div",{className:`step-item ${p===t?"active":""} ${p<t?"completed":""}`,children:[e.jsx("div",{className:"step-circle",children:p<t?"✓":p+1}),e.jsx("div",{className:"step-label",children:pe[l]})]},l))}),e.jsx("div",{className:"step-content",children:M()}),!C&&t<O.length-1&&Object.keys(a).length>0&&e.jsxs("div",{className:"validation-summary",children:[e.jsx("h4",{children:"⚠️ Vui lòng hoàn thành các trường sau:"}),e.jsx("ul",{children:Object.entries(a).map(([l,p])=>e.jsx("li",{children:p},l))})]}),e.jsxs("div",{className:"wizard-navigation",children:[t>0&&e.jsx("button",{className:"btn-secondary",onClick:m,children:"← Quay lại"}),t<O.length-1?e.jsx("button",{className:"btn-primary",onClick:h,disabled:!C,children:"Tiếp tục →"}):e.jsx("button",{className:"btn-primary",onClick:x,disabled:!w,children:"✓ Hoàn tất"})]})]})}function ve({data:t,errors:s,touched:n,onUpdate:r}){return e.jsxs("div",{className:"form-step",children:[e.jsx("h2",{className:"step-title",children:"🔐 Thông tin tài khoản"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group full-width",children:[e.jsxs("label",{className:"form-label",children:["Email ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"email",className:`form-input ${s.email?"error":""}`,value:t.email,onChange:a=>r("email",a.target.value),placeholder:"example@email.com"}),s.email&&e.jsx("div",{className:"error-message",children:s.email})]}),e.jsxs("div",{className:"form-group full-width",children:[e.jsxs("label",{className:"form-label",children:["Username ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",className:`form-input ${s.username?"error":""}`,value:t.username,onChange:a=>r("username",a.target.value),placeholder:"username123"}),s.username&&e.jsx("div",{className:"error-message",children:s.username}),e.jsx("div",{className:"form-hint",children:"Chỉ chữ, số và dấu gạch dưới"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Mật khẩu ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"password",className:`form-input ${s.password?"error":""}`,value:t.password,onChange:a=>r("password",a.target.value),placeholder:"••••••••"}),s.password&&e.jsx("div",{className:"error-message",children:s.password}),e.jsx("div",{className:"form-hint",children:"Tối thiểu 6 ký tự, có chữ hoa, thường và số"})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Xác nhận mật khẩu ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"password",className:`form-input ${s.confirmPassword?"error":""}`,value:t.confirmPassword,onChange:a=>r("confirmPassword",a.target.value),placeholder:"••••••••"}),s.confirmPassword&&e.jsx("div",{className:"error-message",children:s.confirmPassword})]})]})]})}function ge({data:t,errors:s,touched:n,onUpdate:r}){return e.jsxs("div",{className:"form-step",children:[e.jsx("h2",{className:"step-title",children:"👤 Thông tin cá nhân"}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Họ ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",className:`form-input ${s.lastName?"error":""}`,value:t.lastName,onChange:a=>r("lastName",a.target.value),placeholder:"Nguyễn"}),s.lastName&&e.jsx("div",{className:"error-message",children:s.lastName})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Tên ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",className:`form-input ${s.firstName?"error":""}`,value:t.firstName,onChange:a=>r("firstName",a.target.value),placeholder:"Văn A"}),s.firstName&&e.jsx("div",{className:"error-message",children:s.firstName})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Ngày sinh ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"date",className:`form-input ${s.birthDate?"error":""}`,value:t.birthDate,onChange:a=>r("birthDate",a.target.value),max:new Date().toISOString().split("T")[0]}),s.birthDate&&e.jsx("div",{className:"error-message",children:s.birthDate})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{className:"form-label",children:["Giới tính ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("select",{className:`form-input ${s.gender?"error":""}`,value:t.gender,onChange:a=>r("gender",a.target.value),children:z.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),s.gender&&e.jsx("div",{className:"error-message",children:s.gender})]}),e.jsxs("div",{className:"form-group full-width",children:[e.jsx("label",{className:"form-label",children:"Số điện thoại"}),e.jsx("input",{type:"tel",className:`form-input ${s.phone?"error":""}`,value:t.phone,onChange:a=>r("phone",a.target.value),placeholder:"0901234567"}),s.phone&&e.jsx("div",{className:"error-message",children:s.phone})]}),e.jsxs("div",{className:"form-group full-width",children:[e.jsx("label",{className:"form-label",children:"Địa chỉ"}),e.jsx("input",{type:"text",className:"form-input",value:t.address,onChange:a=>r("address",a.target.value),placeholder:"123 Đường ABC"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Thành phố"}),e.jsx("input",{type:"text",className:"form-input",value:t.city,onChange:a=>r("city",a.target.value),placeholder:"Hồ Chí Minh"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Mã bưu điện"}),e.jsx("input",{type:"text",className:`form-input ${s.zipCode?"error":""}`,value:t.zipCode,onChange:a=>r("zipCode",a.target.value),placeholder:"70000"}),s.zipCode&&e.jsx("div",{className:"error-message",children:s.zipCode})]})]})]})}function Ne({data:t,onUpdate:s,onUpdateNested:n}){return e.jsxs("div",{className:"form-step",children:[e.jsx("h2",{className:"step-title",children:"⚙️ Tùy chọn"}),e.jsxs("div",{className:"preferences-section",children:[e.jsxs("div",{className:"pref-group",children:[e.jsx("h3",{className:"pref-title",children:"📧 Thông báo"}),e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:t.notifications.email,onChange:r=>n("notifications","email",r.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{children:"Email notifications"})]}),e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:t.notifications.sms,onChange:r=>n("notifications","sms",r.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{children:"SMS notifications"})]}),e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:t.notifications.push,onChange:r=>n("notifications","push",r.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{children:"Push notifications"})]})]}),e.jsxs("div",{className:"pref-group",children:[e.jsx("h3",{className:"pref-title",children:"🎨 Giao diện"}),e.jsxs("div",{className:"theme-selector",children:[e.jsxs("label",{className:`theme-option ${t.theme==="dark"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"theme",value:"dark",checked:t.theme==="dark",onChange:r=>s("theme",r.target.value)}),e.jsx("div",{className:"theme-preview dark",children:"🌙"}),e.jsx("span",{children:"Dark"})]}),e.jsxs("label",{className:`theme-option ${t.theme==="light"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"theme",value:"light",checked:t.theme==="light",onChange:r=>s("theme",r.target.value)}),e.jsx("div",{className:"theme-preview light",children:"☀️"}),e.jsx("span",{children:"Light"})]})]})]}),e.jsxs("div",{className:"pref-group",children:[e.jsx("h3",{className:"pref-title",children:"🌐 Ngôn ngữ"}),e.jsx("select",{className:"form-input",value:t.language,onChange:r=>s("language",r.target.value),children:$.map(r=>e.jsx("option",{value:r.value,children:r.label},r.value))})]}),e.jsx("div",{className:"pref-group",children:e.jsxs("label",{className:"checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:t.newsletter,onChange:r=>s("newsletter",r.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{children:"Đăng ký nhận bản tin qua email"})]})})]})]})}function fe({formData:t}){return e.jsxs("div",{className:"form-step",children:[e.jsx("h2",{className:"step-title",children:"✅ Xác nhận thông tin"}),e.jsxs("div",{className:"review-sections",children:[e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{className:"review-section-title",children:"🔐 Tài khoản"}),e.jsxs("div",{className:"review-items",children:[e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Email:"}),e.jsx("span",{className:"review-value",children:t.account.email})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Username:"}),e.jsx("span",{className:"review-value",children:t.account.username})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Mật khẩu:"}),e.jsx("span",{className:"review-value",children:"••••••••"})]})]})]}),e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{className:"review-section-title",children:"👤 Thông tin cá nhân"}),e.jsxs("div",{className:"review-items",children:[e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Họ tên:"}),e.jsxs("span",{className:"review-value",children:[t.profile.lastName," ",t.profile.firstName]})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Ngày sinh:"}),e.jsx("span",{className:"review-value",children:new Date(t.profile.birthDate).toLocaleDateString("vi-VN")})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Giới tính:"}),e.jsx("span",{className:"review-value",children:z.find(s=>s.value===t.profile.gender)?.label})]}),t.profile.phone&&e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Số điện thoại:"}),e.jsx("span",{className:"review-value",children:t.profile.phone})]}),t.profile.address&&e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Địa chỉ:"}),e.jsxs("span",{className:"review-value",children:[t.profile.address,", ",t.profile.city," ",t.profile.zipCode]})]})]})]}),e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{className:"review-section-title",children:"⚙️ Tùy chọn"}),e.jsxs("div",{className:"review-items",children:[e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Thông báo:"}),e.jsx("span",{className:"review-value",children:Object.entries(t.preferences.notifications).filter(([s,n])=>n).map(([s])=>s.toUpperCase()).join(", ")||"Không có"})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Giao diện:"}),e.jsx("span",{className:"review-value",children:t.preferences.theme==="dark"?"🌙 Dark":"☀️ Light"})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Ngôn ngữ:"}),e.jsx("span",{className:"review-value",children:$.find(s=>s.value===t.preferences.language)?.label})]}),e.jsxs("div",{className:"review-item",children:[e.jsx("span",{className:"review-label",children:"Newsletter:"}),e.jsx("span",{className:"review-value",children:t.preferences.newsletter?"✓ Có":"✗ Không"})]})]})]})]}),e.jsx("div",{className:"review-notice",children:e.jsx("p",{children:"ℹ️ Vui lòng kiểm tra lại thông tin trước khi hoàn tất đăng ký. Bạn có thể quay lại để chỉnh sửa nếu cần."})})]})}function be(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:5,title:"Form Wizard với Complex State (Challenge)"}),e.jsx(b.Description,{children:`
// TODO: Multi-step form với validation và derived state

const STEPS = ['account', 'profile', 'preferences', 'review'];

function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const [formData, setFormData] = useState({
    account: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    profile: {
      firstName: '',
      lastName: '',
      birthDate: '',
      gender: '',
      phone: '',
      avatar: null
    },
    preferences: {
      newsletter: false,
      notifications: {
        email: true,
        sms: false,
        push: true
      },
      theme: 'light',
      language: 'vi'
    }
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // TODO: Validation functions cho mỗi step
  const validateAccount = useCallback(() => {
    const errors = {};
    const { email, username, password, confirmPassword } = formData.account;

    if (!email) {
      errors.email = 'Email là bắt buộc';
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!username) {
      errors.username = 'Username là bắt buộc';
    } else if (username.length < 3) {
      errors.username = 'Username phải ≥ 3 ký tự';
    }

    if (!password) {
      errors.password = 'Mật khẩu là bắt buộc';
    } else if (password.length < 6) {
      errors.password = 'Mật khẩu phải ≥ 6 ký tự';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }

    return errors;
  }, [formData.account]);

  const validateProfile = useCallback(() => {
    // TODO: Validate profile step
  }, [formData.profile]);

  // TODO: Derived state - step validation
  const stepValidations = useMemo(() => ({
    account: validateAccount(),
    profile: validateProfile(),
    preferences: {} // No validation
  }), [validateAccount, validateProfile]);

  // TODO: Derived state - can proceed to next step
  const canProceed = useMemo(() => {
    const currentStepName = STEPS[currentStep];
    const currentErrors = stepValidations[currentStepName];
    return Object.keys(currentErrors).length === 0;
  }, [currentStep, stepValidations]);

  // TODO: Derived state - overall form completion
  const completion = useMemo(() => {
    // Calculate % completion based on filled fields
    let totalFields = 0;
    let filledFields = 0;

    // Count all fields
    Object.values(formData).forEach(section => {
      Object.values(section).forEach(value => {
        totalFields++;
        if (value && value !== '' && value !== false) {
          filledFields++;
        }
      });
    });

    return Math.round((filledFields / totalFields) * 100);
  }, [formData]);

  const updateField = useCallback((step, field, value) => {
    setFormData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value
      }
    }));

    // Mark as touched
    setTouched(prev => ({
      ...prev,
      [\`\${step}.\${field}\`]: true
    }));
  }, []);

  const handleNext = () => {
    if (canProceed && currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    // TODO: Submit form
    console.log('Submitting:', formData);
  };

  const renderStepContent = () => {
    const stepName = STEPS[currentStep];
    const stepData = formData[stepName];
    const stepErrors = stepValidations[stepName];

    switch (stepName) {
      case 'account':
        return (
          <div className="step-content">
            <h2>Thông tin tài khoản</h2>
            {/* TODO: Render form fields */}
          </div>
        );

      case 'profile':
        return (
          <div className="step-content">
            <h2>Thông tin cá nhân</h2>
            {/* TODO: Render form fields */}
          </div>
        );

      case 'preferences':
        return (
          <div className="step-content">
            <h2>Tùy chọn</h2>
            {/* TODO: Render preferences */}
          </div>
        );

      case 'review':
        return (
          <div className="step-content">
            <h2>Xác nhận thông tin</h2>
            {/* TODO: Review all data */}
            <div className="review-section">
              <h3>Tài khoản</h3>
              <p>Email: {formData.account.email}</p>
              <p>Username: {formData.account.username}</p>
            </div>
            <div className="review-section">
              <h3>Hồ sơ</h3>
              <p>Tên: {formData.profile.firstName} {formData.profile.lastName}</p>
              <p>Ngày sinh: {formData.profile.birthDate}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="form-wizard">
      <h1>Đăng ký tài khoản</h1>

      {/* Progress indicator */}
      <div className="progress">
        <div className="progress-bar" style={{ width: \`\${completion}%\` }}>
          {completion}%
        </div>
      </div>

      {/* Steps indicator */}
      <div className="steps">
        {STEPS.map((step, index) => (
          <div
            key={step}
            className={\`step \${index === currentStep ? 'active' : ''} \${
              index < currentStep ? 'completed' : ''
            }\`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>

      {/* Step content */}
      {renderStepContent()}

      {/* Navigation */}
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Quay lại
        </button>

        {currentStep < STEPS.length - 1 ? (
          <button onClick={handleNext} disabled={!canProceed}>
            Tiếp tục
          </button>
        ) : (
          <button onClick={handleSubmit}>
            Hoàn tất
          </button>
        )}
      </div>

      {/* Validation summary */}
      {!canProceed && (
        <div className="validation-summary">
          <p>Vui lòng hoàn thành các trường bắt buộc:</p>
          <ul>
            {Object.entries(stepValidations[STEPS[currentStep]]).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

`}),e.jsx(b.Demo,{children:e.jsx(he,{})}),e.jsx(b.Code,{children:`
import { useCallback, useMemo, useState } from "react";

/**
 * FORM WIZARD với COMPLEX STATE MANAGEMENT
 * Demonstrates:
 * - Multi-step form với validation
 * - Complex nested state structure
 * - Derived state (completion, validation)
 * - Field-level validation
 * - Step navigation với guards
 */

// Form steps configuration
const STEPS = ["account", "profile", "preferences", "review"];

const STEP_LABELS = {
  account: "1. Tài khoản",
  profile: "2. Thông tin",
  preferences: "3. Tùy chọn",
  review: "4. Xác nhận",
};

// Gender options
const GENDER_OPTIONS = [
  { value: "", label: "Chọn giới tính" },
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
  { value: "other", label: "Khác" },
];

// Language options
const LANGUAGE_OPTIONS = [
  { value: "vi", label: "🇻🇳 Tiếng Việt" },
  { value: "en", label: "🇺🇸 English" },
  { value: "ja", label: "🇯🇵 日本語" },
  { value: "ko", label: "🇰🇷 한국어" },
];

/**
 * FormWizard Component - Main Container
 */
function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  // ✅ COMPLEX NESTED STATE
  const [formData, setFormData] = useState({
    account: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    profile: {
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    preferences: {
      newsletter: false,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      theme: "dark",
      language: "vi",
    },
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ============================================
  // VALIDATION FUNCTIONS
  // ============================================

  /**
   * Validate Account Step
   */
  const validateAccount = useCallback(() => {
    const errors = {};
    const { email, username, password, confirmPassword } = formData.account;

    // Email validation
    if (!email) {
      errors.email = "Email là bắt buộc";
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      errors.email = "Email không hợp lệ";
    }

    // Username validation
    if (!username) {
      errors.username = "Username là bắt buộc";
    } else if (username.length < 3) {
      errors.username = "Username phải có ít nhất 3 ký tự";
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      errors.username = "Username chỉ chứa chữ, số và dấu gạch dưới";
    }

    // Password validation
    if (!password) {
      errors.password = "Mật khẩu là bắt buộc";
    } else if (password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(password)) {
      errors.password = "Mật khẩu phải có chữ hoa, chữ thường và số";
    }

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp";
    }

    return errors;
  }, [formData.account]);

  /**
   * Validate Profile Step
   */
  const validateProfile = useCallback(() => {
    const errors = {};
    const { firstName, lastName, birthDate, gender, phone, zipCode } =
      formData.profile;

    // First name
    if (!firstName) {
      errors.firstName = "Tên là bắt buộc";
    } else if (firstName.length < 2) {
      errors.firstName = "Tên phải có ít nhất 2 ký tự";
    }

    // Last name
    if (!lastName) {
      errors.lastName = "Họ là bắt buộc";
    } else if (lastName.length < 2) {
      errors.lastName = "Họ phải có ít nhất 2 ký tự";
    }

    // Birth date
    if (!birthDate) {
      errors.birthDate = "Ngày sinh là bắt buộc";
    } else {
      const today = new Date();
      const birth = new Date(birthDate);
      const age = today.getFullYear() - birth.getFullYear();
      if (age < 13) {
        errors.birthDate = "Bạn phải từ 13 tuổi trở lên";
      }
      if (age > 120) {
        errors.birthDate = "Ngày sinh không hợp lệ";
      }
    }

    // Gender
    if (!gender) {
      errors.gender = "Vui lòng chọn giới tính";
    }

    // Phone
    if (phone && !/^0\\d{9,10}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ (VD: 0901234567)";
    }

    // Zip code
    if (zipCode && !/^\\d{5,6}$/.test(zipCode)) {
      errors.zipCode = "Mã bưu điện phải có 5-6 chữ số";
    }

    return errors;
  }, [formData.profile]);

  /**
   * Validate Preferences Step (no required fields)
   */
  const validatePreferences = useCallback(() => {
    return {}; // No validation needed
  }, []);

  // ============================================
  // DERIVED STATE
  // ============================================

  /**
   * Step Validations - Memoized validation results
   */
  const stepValidations = useMemo(() => {
    console.log("🔍 Running validations...");
    return {
      account: validateAccount(),
      profile: validateProfile(),
      preferences: validatePreferences(),
    };
  }, [validateAccount, validateProfile, validatePreferences]);

  /**
   * Can Proceed - Check if current step is valid
   */
  const canProceed = useMemo(() => {
    const currentStepName = STEPS[currentStep];
    if (currentStepName === "review") return true;

    const currentErrors = stepValidations[currentStepName];
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  }, [currentStep, stepValidations]);

  /**
   * Completion Percentage
   * Tính % hoàn thành dựa trên số field đã điền
   */
  const completion = useMemo(() => {
    console.log("📊 Calculating completion...");

    let totalFields = 0;
    let filledFields = 0;

    // Count account fields
    Object.entries(formData.account).forEach(([key, value]) => {
      totalFields++;
      if (value && value.trim() !== "") filledFields++;
    });

    // Count profile fields
    Object.entries(formData.profile).forEach(([key, value]) => {
      totalFields++;
      if (value && value.trim() !== "") filledFields++;
    });

    // Count preferences (simplified)
    totalFields += 4; // newsletter, theme, language, notifications count as 1
    if (formData.preferences.newsletter) filledFields++;
    if (formData.preferences.theme) filledFields++;
    if (formData.preferences.language) filledFields++;
    filledFields++; // notifications always has some value

    return Math.round((filledFields / totalFields) * 100);
  }, [formData]);

  /**
   * All Steps Valid
   * Kiểm tra tất cả các step đã valid chưa
   */
  const allStepsValid = useMemo(() => {
    return Object.keys(stepValidations).every(
      (step) => Object.keys(stepValidations[step]).length === 0
    );
  }, [stepValidations]);

  // ============================================
  // UPDATE FUNCTIONS
  // ============================================

  /**
   * Update field value
   */
  const updateField = useCallback((step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));

    // Mark as touched
    setTouched((prev) => ({
      ...prev,
      [\`\${step}.\${field}\`]: true,
    }));
  }, []);

  /**
   * Update nested field (notifications)
   */
  const updateNestedField = useCallback((step, parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [parent]: {
          ...prev[step][parent],
          [field]: value,
        },
      },
    }));
  }, []);

  // ============================================
  // NAVIGATION
  // ============================================

  const handleNext = useCallback(() => {
    if (canProceed && currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setErrors({});
    } else if (!canProceed) {
      // Show errors for current step
      const currentStepName = STEPS[currentStep];
      setErrors(stepValidations[currentStepName]);
    }
  }, [canProceed, currentStep, stepValidations]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    console.log("🚀 Submitting form...", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("✅ Đăng ký thành công!

Thông tin đã được lưu.");

    // Reset form (optional)
    // window.location.reload();
  }, [formData]);

  // ============================================
  // RENDER STEP CONTENT
  // ============================================

  const renderStepContent = () => {
    const stepName = STEPS[currentStep];

    switch (stepName) {
      case "account":
        return (
          <AccountStep
            data={formData.account}
            errors={errors}
            touched={touched}
            onUpdate={(field, value) => updateField("account", field, value)}
          />
        );

      case "profile":
        return (
          <ProfileStep
            data={formData.profile}
            errors={errors}
            touched={touched}
            onUpdate={(field, value) => updateField("profile", field, value)}
          />
        );

      case "preferences":
        return (
          <PreferencesStep
            data={formData.preferences}
            onUpdate={(field, value) =>
              updateField("preferences", field, value)
            }
            onUpdateNested={(parent, field, value) =>
              updateNestedField("preferences", parent, field, value)
            }
          />
        );

      case "review":
        return <ReviewStep formData={formData} />;

      default:
        return null;
    }
  };

  return (
    <div className="form-wizard">
      {/* Header */}
      <div className="wizard-header">
        <h1 className="wizard-title">
          <span className="title-gradient">📝 Đăng ký tài khoản</span>
        </h1>
        <p className="wizard-subtitle">
          Form Wizard với Complex State Management
        </p>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: \`\${completion}%\` }}
          ></div>
        </div>
        <div className="progress-text">{completion}% hoàn thành</div>
      </div>

      {/* Steps Indicator */}
      <div className="steps-indicator">
        {STEPS.map((step, index) => (
          <div
            key={step}
            className={\`step-item \${index === currentStep ? "active" : ""} \${
              index < currentStep ? "completed" : ""
            }\`}
          >
            <div className="step-circle">
              {index < currentStep ? "✓" : index + 1}
            </div>
            <div className="step-label">{STEP_LABELS[step]}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">{renderStepContent()}</div>

      {/* Validation Summary */}
      {!canProceed &&
        currentStep < STEPS.length - 1 &&
        Object.keys(errors).length > 0 && (
          <div className="validation-summary">
            <h4>⚠️ Vui lòng hoàn thành các trường sau:</h4>
            <ul>
              {Object.entries(errors).map(([field, error]) => (
                <li key={field}>{error}</li>
              ))}
            </ul>
          </div>
        )}

      {/* Navigation */}
      <div className="wizard-navigation">
        {currentStep > 0 && (
          <button className="btn-secondary" onClick={handlePrev}>
            ← Quay lại
          </button>
        )}

        {currentStep < STEPS.length - 1 ? (
          <button
            className="btn-primary"
            onClick={handleNext}
            disabled={!canProceed}
          >
            Tiếp tục →
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={!allStepsValid}
          >
            ✓ Hoàn tất
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * AccountStep Component
 */
function AccountStep({ data, errors, touched, onUpdate }) {
  return (
    <div className="form-step">
      <h2 className="step-title">🔐 Thông tin tài khoản</h2>

      <div className="form-grid">
        <div className="form-group full-width">
          <label className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            className={\`form-input \${errors.email ? "error" : ""}\`}
            value={data.email}
            onChange={(e) => onUpdate("email", e.target.value)}
            placeholder="example@email.com"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group full-width">
          <label className="form-label">
            Username <span className="required">*</span>
          </label>
          <input
            type="text"
            className={\`form-input \${errors.username ? "error" : ""}\`}
            value={data.username}
            onChange={(e) => onUpdate("username", e.target.value)}
            placeholder="username123"
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
          <div className="form-hint">Chỉ chữ, số và dấu gạch dưới</div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Mật khẩu <span className="required">*</span>
          </label>
          <input
            type="password"
            className={\`form-input \${errors.password ? "error" : ""}\`}
            value={data.password}
            onChange={(e) => onUpdate("password", e.target.value)}
            placeholder="••••••••"
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
          <div className="form-hint">
            Tối thiểu 6 ký tự, có chữ hoa, thường và số
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            Xác nhận mật khẩu <span className="required">*</span>
          </label>
          <input
            type="password"
            className={\`form-input \${errors.confirmPassword ? "error" : ""}\`}
            value={data.confirmPassword}
            onChange={(e) => onUpdate("confirmPassword", e.target.value)}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * ProfileStep Component
 */
function ProfileStep({ data, errors, touched, onUpdate }) {
  return (
    <div className="form-step">
      <h2 className="step-title">👤 Thông tin cá nhân</h2>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">
            Họ <span className="required">*</span>
          </label>
          <input
            type="text"
            className={\`form-input \${errors.lastName ? "error" : ""}\`}
            value={data.lastName}
            onChange={(e) => onUpdate("lastName", e.target.value)}
            placeholder="Nguyễn"
          />
          {errors.lastName && (
            <div className="error-message">{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Tên <span className="required">*</span>
          </label>
          <input
            type="text"
            className={\`form-input \${errors.firstName ? "error" : ""}\`}
            value={data.firstName}
            onChange={(e) => onUpdate("firstName", e.target.value)}
            placeholder="Văn A"
          />
          {errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Ngày sinh <span className="required">*</span>
          </label>
          <input
            type="date"
            className={\`form-input \${errors.birthDate ? "error" : ""}\`}
            value={data.birthDate}
            onChange={(e) => onUpdate("birthDate", e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
          {errors.birthDate && (
            <div className="error-message">{errors.birthDate}</div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Giới tính <span className="required">*</span>
          </label>
          <select
            className={\`form-input \${errors.gender ? "error" : ""}\`}
            value={data.gender}
            onChange={(e) => onUpdate("gender", e.target.value)}
          >
            {GENDER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.gender && (
            <div className="error-message">{errors.gender}</div>
          )}
        </div>

        <div className="form-group full-width">
          <label className="form-label">Số điện thoại</label>
          <input
            type="tel"
            className={\`form-input \${errors.phone ? "error" : ""}\`}
            value={data.phone}
            onChange={(e) => onUpdate("phone", e.target.value)}
            placeholder="0901234567"
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="form-group full-width">
          <label className="form-label">Địa chỉ</label>
          <input
            type="text"
            className="form-input"
            value={data.address}
            onChange={(e) => onUpdate("address", e.target.value)}
            placeholder="123 Đường ABC"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Thành phố</label>
          <input
            type="text"
            className="form-input"
            value={data.city}
            onChange={(e) => onUpdate("city", e.target.value)}
            placeholder="Hồ Chí Minh"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mã bưu điện</label>
          <input
            type="text"
            className={\`form-input \${errors.zipCode ? "error" : ""}\`}
            value={data.zipCode}
            onChange={(e) => onUpdate("zipCode", e.target.value)}
            placeholder="70000"
          />
          {errors.zipCode && (
            <div className="error-message">{errors.zipCode}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * PreferencesStep Component
 */
function PreferencesStep({ data, onUpdate, onUpdateNested }) {
  return (
    <div className="form-step">
      <h2 className="step-title">⚙️ Tùy chọn</h2>

      <div className="preferences-section">
        <div className="pref-group">
          <h3 className="pref-title">📧 Thông báo</h3>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.email}
              onChange={(e) =>
                onUpdateNested("notifications", "email", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>Email notifications</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.sms}
              onChange={(e) =>
                onUpdateNested("notifications", "sms", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>SMS notifications</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.notifications.push}
              onChange={(e) =>
                onUpdateNested("notifications", "push", e.target.checked)
              }
            />
            <span className="checkbox-custom"></span>
            <span>Push notifications</span>
          </label>
        </div>

        <div className="pref-group">
          <h3 className="pref-title">🎨 Giao diện</h3>

          <div className="theme-selector">
            <label
              className={\`theme-option \${
                data.theme === "dark" ? "active" : ""
              }\`}
            >
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={data.theme === "dark"}
                onChange={(e) => onUpdate("theme", e.target.value)}
              />
              <div className="theme-preview dark">🌙</div>
              <span>Dark</span>
            </label>

            <label
              className={\`theme-option \${
                data.theme === "light" ? "active" : ""
              }\`}
            >
              <input
                type="radio"
                name="theme"
                value="light"
                checked={data.theme === "light"}
                onChange={(e) => onUpdate("theme", e.target.value)}
              />
              <div className="theme-preview light">☀️</div>
              <span>Light</span>
            </label>
          </div>
        </div>

        <div className="pref-group">
          <h3 className="pref-title">🌐 Ngôn ngữ</h3>

          <select
            className="form-input"
            value={data.language}
            onChange={(e) => onUpdate("language", e.target.value)}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pref-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={data.newsletter}
              onChange={(e) => onUpdate("newsletter", e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span>Đăng ký nhận bản tin qua email</span>
          </label>
        </div>
      </div>
    </div>
  );
}

/**
 * ReviewStep Component
 */
function ReviewStep({ formData }) {
  return (
    <div className="form-step">
      <h2 className="step-title">✅ Xác nhận thông tin</h2>

      <div className="review-sections">
        <div className="review-section">
          <h3 className="review-section-title">🔐 Tài khoản</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Email:</span>
              <span className="review-value">{formData.account.email}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Username:</span>
              <span className="review-value">{formData.account.username}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Mật khẩu:</span>
              <span className="review-value">••••••••</span>
            </div>
          </div>
        </div>

        <div className="review-section">
          <h3 className="review-section-title">👤 Thông tin cá nhân</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Họ tên:</span>
              <span className="review-value">
                {formData.profile.lastName} {formData.profile.firstName}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Ngày sinh:</span>
              <span className="review-value">
                {new Date(formData.profile.birthDate).toLocaleDateString(
                  "vi-VN"
                )}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Giới tính:</span>
              <span className="review-value">
                {
                  GENDER_OPTIONS.find(
                    (g) => g.value === formData.profile.gender
                  )?.label
                }
              </span>
            </div>
            {formData.profile.phone && (
              <div className="review-item">
                <span className="review-label">Số điện thoại:</span>
                <span className="review-value">{formData.profile.phone}</span>
              </div>
            )}
            {formData.profile.address && (
              <div className="review-item">
                <span className="review-label">Địa chỉ:</span>
                <span className="review-value">
                  {formData.profile.address}, {formData.profile.city}{" "}
                  {formData.profile.zipCode}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="review-section">
          <h3 className="review-section-title">⚙️ Tùy chọn</h3>
          <div className="review-items">
            <div className="review-item">
              <span className="review-label">Thông báo:</span>
              <span className="review-value">
                {Object.entries(formData.preferences.notifications)
                  .filter(([_, value]) => value)
                  .map(([key]) => key.toUpperCase())
                  .join(", ") || "Không có"}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Giao diện:</span>
              <span className="review-value">
                {formData.preferences.theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Ngôn ngữ:</span>
              <span className="review-value">
                {
                  LANGUAGE_OPTIONS.find(
                    (l) => l.value === formData.preferences.language
                  )?.label
                }
              </span>
            </div>
            <div className="review-item">
              <span className="review-label">Newsletter:</span>
              <span className="review-value">
                {formData.preferences.newsletter ? "✓ Có" : "✗ Không"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="review-notice">
        <p>
          ℹ️ Vui lòng kiểm tra lại thông tin trước khi hoàn tất đăng ký. Bạn có
          thể quay lại để chỉnh sửa nếu cần.
        </p>
      </div>
    </div>
  );
}

export default FormWizard;


`})]})}function xe(){return e.jsxs(b,{children:[e.jsx(b.Header,{order:"#",title:"Home Work"}),e.jsx(b.Description,{children:`
1. Social Media Feed
// TODO: Implement feed với proper state management
// Features:
// - Posts với likes, comments, shares
// - Normalized state (users, posts, comments)
// - Like/unlike (optimistic update)
// - Add comment
// - Filter posts (following, recommended, trending)
// - Infinite scroll
// - Derived state: stats per post

2. Kanban Board v2
// TODO: Trello-like board
// Features:
// - Multiple boards
// - Normalized state (boards, lists, cards)
// - Drag & drop cards between lists
// - Card details (description, checklist, due date)
// - Search cards across all boards
// - Filter by labels, assignee
// - Statistics dashboard (derived state)

3. E-learning Platform
// TODO: Course management
// Features:
// - Courses, modules, lessons (normalized)
// - Progress tracking per user
// - Quizzes với scores
// - Certificate generation (derived state)
// - Leaderboard (derived state)
// - Course completion % (derived state)

4. Expense Splitter
// TODO: Split expenses among friends
// Features:
// - Users, expenses, payments (normalized)
// - Add expense với multiple payers
// - Calculate who owes whom (derived state)
// - Settle debts
// - Export settlement summary
// - Statistics per user

5. Project Management Tool (Challenge)
// TODO: Asana/Jira-like tool
// Features:
// - Projects, tasks, subtasks, comments
// - Normalized state structure
// - Task dependencies
// - Timeline view (Gantt chart)
// - Team members và assignments
// - Workload per member (derived state)
// - Project completion (derived state)
// - Time tracking
// - Export reports
`}),e.jsx(b.Code,{children:`


### **1. Social Media Feed**
// Social Media Feed với Normalized State
import React, { useState, useMemo, useCallback } from 'react';

function SocialFeed() {
  // ✅ Normalized state structure
  const [state, setState] = useState({
    users: {
      1: { id: 1, name: 'John Doe', avatar: '👨' },
      2: { id: 2, name: 'Jane Smith', avatar: '👩' },
      3: { id: 3, name: 'Bob Wilson', avatar: '👴' }
    },
    posts: {
      1: { 
        id: 1, 
        content: 'Learning React!', 
        authorId: 1, 
        likes: [2, 3], 
        commentIds: [1, 2],
        shares: 5,
        timestamp: Date.now() - 3600000
      },
      2: { 
        id: 2, 
        content: 'State management patterns', 
        authorId: 2, 
        likes: [1], 
        commentIds: [3],
        shares: 2,
        timestamp: Date.now() - 7200000
      }
    },
    comments: {
      1: { id: 1, postId: 1, authorId: 2, text: 'Great post!' },
      2: { id: 2, postId: 1, authorId: 3, text: 'Thanks for sharing!' },
      3: { id: 3, postId: 2, authorId: 1, text: 'Very helpful' }
    },
    postIds: [1, 2]
  });

  const [filter, setFilter] = useState('all'); // 'all' | 'following' | 'trending'
  const [currentUserId] = useState(1);

  // ✅ Derived state - Denormalize posts with details
  const postsWithDetails = useMemo(() => {
    return state.postIds.map(postId => {
      const post = state.posts[postId];
      const author = state.users[post.authorId];
      const comments = post.commentIds.map(cId => ({
        ...state.comments[cId],
        author: state.users[state.comments[cId].authorId]
      }));

      return {
        ...post,
        author,
        comments,
        likeCount: post.likes.length,
        isLiked: post.likes.includes(currentUserId)
      };
    });
  }, [state, currentUserId]);

  // ✅ Filtered posts
  const filteredPosts = useMemo(() => {
    switch (filter) {
      case 'trending':
        return postsWithDetails
          .filter(p => p.likeCount > 1 || p.shares > 3)
          .sort((a, b) => b.likeCount - a.likeCount);
      case 'following':
        return postsWithDetails.filter(p => p.authorId !== currentUserId);
      default:
        return postsWithDetails;
    }
  }, [postsWithDetails, filter, currentUserId]);

  // Like/Unlike (Optimistic update)
  const toggleLike = useCallback((postId) => {
    setState(prev => {
      const post = prev.posts[postId];
      const isLiked = post.likes.includes(currentUserId);
      
      return {
        ...prev,
        posts: {
          ...prev.posts,
          [postId]: {
            ...post,
            likes: isLiked
              ? post.likes.filter(id => id !== currentUserId)
              : [...post.likes, currentUserId]
          }
        }
      };
    });
  }, [currentUserId]);

  // Add comment
  const addComment = useCallback((postId, text) => {
    const commentId = Date.now();
    
    setState(prev => ({
      ...prev,
      comments: {
        ...prev.comments,
        [commentId]: {
          id: commentId,
          postId,
          authorId: currentUserId,
          text
        }
      },
      posts: {
        ...prev.posts,
        [postId]: {
          ...prev.posts[postId],
          commentIds: [...prev.posts[postId].commentIds, commentId]
        }
      }
    }));
  }, [currentUserId]);

  return (
    <div className="social-feed">
      <h1>Social Feed</h1>

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('following')}>Following</button>
        <button onClick={() => setFilter('trending')}>Trending</button>
      </div>

      {/* Posts */}
      {filteredPosts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <span>{post.author.avatar} {post.author.name}</span>
            <small>{new Date(post.timestamp).toLocaleString()}</small>
          </div>
          
          <p className="post-content">{post.content}</p>
          
          <div className="post-actions">
            <button onClick={() => toggleLike(post.id)}>
              {post.isLiked ? '❤️' : '🤍'} {post.likeCount}
            </button>
            <span>💬 {post.comments.length}</span>
            <span>🔄 {post.shares}</span>
          </div>

          {/* Comments */}
          <div className="comments">
            {post.comments.map(comment => (
              <div key={comment.id} className="comment">
                <strong>{comment.author.avatar} {comment.author.name}:</strong>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>

          {/* Add comment */}
          <input
            placeholder="Add a comment..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addComment(post.id, e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

// KEY PATTERNS USED:
// ✅ Normalized state (users, posts, comments)
// ✅ Derived state với useMemo (denormalize, filter)
// ✅ Optimistic updates (toggleLike)
// ✅ State colocation pattern

---

### **2. Kanban Board v2**
// Kanban Board với Normalized State
import React, { useState, useMemo, useCallback } from 'react';

function KanbanBoard() {
  const [state, setState] = useState({
    boards: {
      1: { id: 1, name: 'Project Alpha', listIds: [1, 2, 3] }
    },
    lists: {
      1: { id: 1, boardId: 1, name: 'To Do', cardIds: [1, 2] },
      2: { id: 2, boardId: 1, name: 'In Progress', cardIds: [3] },
      3: { id: 3, boardId: 1, name: 'Done', cardIds: [] }
    },
    cards: {
      1: { 
        id: 1, 
        listId: 1, 
        title: 'Design homepage', 
        description: 'Create mockups',
        labels: ['design', 'urgent'],
        assignee: 'John',
        dueDate: '2024-01-15'
      },
      2: { 
        id: 2, 
        listId: 1, 
        title: 'API integration',
        labels: ['backend'],
        assignee: 'Jane'
      },
      3: { 
        id: 3, 
        listId: 2, 
        title: 'Setup database',
        labels: ['backend'],
        assignee: 'John'
      }
    },
    currentBoardId: 1
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filterLabel, setFilterLabel] = useState('all');

  // ✅ Derived state - All cards with search & filter
  const filteredCards = useMemo(() => {
    const allCards = Object.values(state.cards);
    
    return allCards.filter(card => {
      const matchSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLabel = filterLabel === 'all' || card.labels?.includes(filterLabel);
      return matchSearch && matchLabel;
    });
  }, [state.cards, searchQuery, filterLabel]);

  // ✅ Derived state - Statistics
  const stats = useMemo(() => {
    const cards = Object.values(state.cards);
    return {
      total: cards.length,
      todo: cards.filter(c => c.listId === 1).length,
      inProgress: cards.filter(c => c.listId === 2).length,
      done: cards.filter(c => c.listId === 3).length,
      byLabel: cards.reduce((acc, card) => {
        card.labels?.forEach(label => {
          acc[label] = (acc[label] || 0) + 1;
        });
        return acc;
      }, {})
    };
  }, [state.cards]);

  // Move card between lists
  const moveCard = useCallback((cardId, fromListId, toListId) => {
    setState(prev => ({
      ...prev,
      cards: {
        ...prev.cards,
        [cardId]: {
          ...prev.cards[cardId],
          listId: toListId
        }
      },
      lists: {
        ...prev.lists,
        [fromListId]: {
          ...prev.lists[fromListId],
          cardIds: prev.lists[fromListId].cardIds.filter(id => id !== cardId)
        },
        [toListId]: {
          ...prev.lists[toListId],
          cardIds: [...prev.lists[toListId].cardIds, cardId]
        }
      }
    }));
  }, []);

  // Add card
  const addCard = useCallback((listId, title) => {
    const cardId = Date.now();
    
    setState(prev => ({
      ...prev,
      cards: {
        ...prev.cards,
        [cardId]: {
          id: cardId,
          listId,
          title,
          labels: [],
          assignee: null
        }
      },
      lists: {
        ...prev.lists,
        [listId]: {
          ...prev.lists[listId],
          cardIds: [...prev.lists[listId].cardIds, cardId]
        }
      }
    }));
  }, []);

  const currentBoard = state.boards[state.currentBoardId];

  return (
    <div className="kanban-board">
      <h1>{currentBoard.name}</h1>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search cards..."
        />
        <select value={filterLabel} onChange={(e) => setFilterLabel(e.target.value)}>
          <option value="all">All Labels</option>
          <option value="design">Design</option>
          <option value="backend">Backend</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Statistics */}
      <div className="stats">
        <p>Total: {stats.total}</p>
        <p>To Do: {stats.todo}</p>
        <p>In Progress: {stats.inProgress}</p>
        <p>Done: {stats.done}</p>
      </div>

      {/* Lists */}
      <div className="board-lists">
        {currentBoard.listIds.map(listId => {
          const list = state.lists[listId];
          const cards = list.cardIds
            .map(cId => state.cards[cId])
            .filter(card => filteredCards.find(fc => fc.id === card.id));

          return (
            <div key={listId} className="list">
              <h3>{list.name} ({cards.length})</h3>
              
              {cards.map(card => (
                <div key={card.id} className="card" draggable>
                  <h4>{card.title}</h4>
                  {card.description && <p>{card.description}</p>}
                  {card.labels && (
                    <div className="labels">
                      {card.labels.map(label => (
                        <span key={label} className="label">{label}</span>
                      ))}
                    </div>
                  )}
                  {card.assignee && <span>👤 {card.assignee}</span>}
                  {card.dueDate && <span>📅 {card.dueDate}</span>}
                  
                  {/* Move buttons */}
                  {listId !== 2 && (
                    <button onClick={() => moveCard(card.id, listId, 2)}>
                      → In Progress
                    </button>
                  )}
                  {listId !== 3 && (
                    <button onClick={() => moveCard(card.id, listId, 3)}>
                      → Done
                    </button>
                  )}
                </div>
              ))}

              <button onClick={() => {
                const title = prompt('Card title:');
                if (title) addCard(listId, title);
              }}>
                + Add Card
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// KEY PATTERNS:
// ✅ Normalized: boards → lists → cards
// ✅ Derived state: filtered cards, statistics
// ✅ Search & filter across all cards
// ✅ Move cards between lists

---

### **3. E-learning Platform**
// E-learning Platform với Progress Tracking
import React, { useState, useMemo, useCallback } from 'react';

function ELearningPlatform() {
  const [state, setState] = useState({
    courses: {
      1: { 
        id: 1, 
        name: 'React Fundamentals', 
        moduleIds: [1, 2],
        quizId: 1
      },
      2: { 
        id: 2, 
        name: 'Advanced React', 
        moduleIds: [3],
        quizId: 2
      }
    },
    modules: {
      1: { id: 1, courseId: 1, name: 'Getting Started', lessonIds: [1, 2] },
      2: { id: 2, courseId: 1, name: 'State Management', lessonIds: [3] },
      3: { id: 3, courseId: 2, name: 'Performance', lessonIds: [4] }
    },
    lessons: {
      1: { id: 1, moduleId: 1, name: 'What is React?', duration: 10 },
      2: { id: 2, moduleId: 1, name: 'JSX Basics', duration: 15 },
      3: { id: 3, moduleId: 2, name: 'useState Hook', duration: 20 },
      4: { id: 4, moduleId: 3, name: 'React.memo', duration: 25 }
    },
    quizzes: {
      1: { id: 1, courseId: 1, questions: 10, passingScore: 70 },
      2: { id: 2, courseId: 2, questions: 15, passingScore: 80 }
    },
    // User progress
    progress: {
      completedLessons: [1, 2], // lesson IDs
      quizScores: {
        1: 85 // quiz 1: 85%
      }
    },
    leaderboard: [
      { userId: 1, name: 'John', points: 850 },
      { userId: 2, name: 'Jane', points: 920 },
      { userId: 3, name: 'Bob', points: 780 }
    ]
  });

  const [currentCourseId, setCurrentCourseId] = useState(1);

  // ✅ Derived: Course completion %
  const courseProgress = useMemo(() => {
    return Object.values(state.courses).map(course => {
      const modules = course.moduleIds.map(mid => state.modules[mid]);
      const allLessonIds = modules.flatMap(m => m.lessonIds);
      const completedInCourse = allLessonIds.filter(lid => 
        state.progress.completedLessons.includes(lid)
      );
      
      const percentage = (completedInCourse.length / allLessonIds.length) * 100;
      const quizPassed = state.progress.quizScores[course.quizId] >= 
                         state.quizzes[course.quizId].passingScore;

      return {
        courseId: course.id,
        courseName: course.name,
        percentage: Math.round(percentage),
        lessonsCompleted: completedInCourse.length,
        totalLessons: allLessonIds.length,
        quizScore: state.progress.quizScores[course.quizId],
        quizPassed,
        canGetCertificate: percentage === 100 && quizPassed
      };
    });
  }, [state.courses, state.modules, state.progress, state.quizzes]);

  // ✅ Derived: Leaderboard sorted
  const sortedLeaderboard = useMemo(() => {
    return [...state.leaderboard].sort((a, b) => b.points - a.points);
  }, [state.leaderboard]);

  // Complete lesson
  const completeLesson = useCallback((lessonId) => {
    setState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        completedLessons: [...prev.progress.completedLessons, lessonId]
      }
    }));
  }, []);

  // Submit quiz score
  const submitQuiz = useCallback((quizId, score) => {
    setState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        quizScores: {
          ...prev.progress.quizScores,
          [quizId]: score
        }
      }
    }));
  }, []);

  const currentCourse = state.courses[currentCourseId];
  const currentProgress = courseProgress.find(p => p.courseId === currentCourseId);

  return (
    <div className="elearning-platform">
      <h1>📚 E-Learning Platform</h1>

      {/* Course List */}
      <div className="courses">
        {Object.values(state.courses).map(course => {
          const progress = courseProgress.find(p => p.courseId === course.id);
          return (
            <div 
              key={course.id} 
              className="course-card"
              onClick={() => setCurrentCourseId(course.id)}
            >
              <h3>{course.name}</h3>
              <div className="progress-bar">
                <div style={{ width: \`\${progress.percentage}%\` }}>
                  {progress.percentage}%
                </div>
              </div>
              <p>{progress.lessonsCompleted}/{progress.totalLessons} lessons</p>
              {progress.canGetCertificate && <span>🏆 Certificate Ready!</span>}
            </div>
          );
        })}
      </div>

      {/* Current Course Detail */}
      <div className="course-detail">
        <h2>{currentCourse.name}</h2>
        <p>Progress: {currentProgress.percentage}%</p>

        {/* Modules & Lessons */}
        {currentCourse.moduleIds.map(moduleId => {
          const module = state.modules[moduleId];
          return (
            <div key={moduleId} className="module">
              <h3>{module.name}</h3>
              {module.lessonIds.map(lessonId => {
                const lesson = state.lessons[lessonId];
                const isCompleted = state.progress.completedLessons.includes(lessonId);
                return (
                  <div key={lessonId} className="lesson">
                    <span>{isCompleted ? '✅' : '⭕'} {lesson.name}</span>
                    <span>{lesson.duration} min</span>
                    {!isCompleted && (
                      <button onClick={() => completeLesson(lessonId)}>
                        Complete
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Quiz */}
        <div className="quiz">
          <h3>Final Quiz</h3>
          {currentProgress.quizScore ? (
            <p>
              Score: {currentProgress.quizScore}% 
              {currentProgress.quizPassed ? ' ✅ Passed' : ' ❌ Failed'}
            </p>
          ) : (
            <button onClick={() => {
              const score = Math.floor(Math.random() * 40) + 60;
              submitQuiz(currentCourse.quizId, score);
            }}>
              Take Quiz
            </button>
          )}
        </div>

        {/* Certificate */}
        {currentProgress.canGetCertificate && (
          <div className="certificate">
            <h3>🎓 Certificate Available!</h3>
            <button>Download Certificate</button>
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="leaderboard">
        <h3>🏆 Leaderboard</h3>
        {sortedLeaderboard.map((user, index) => (
          <div key={user.userId} className="leaderboard-item">
            <span>#{index + 1}</span>
            <span>{user.name}</span>
            <span>{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// KEY PATTERNS:
// ✅ Normalized: courses → modules → lessons
// ✅ Derived: completion %, certificate eligibility
// ✅ Progress tracking per user
// ✅ Leaderboard sorting

---

### **4. Expense Splitter** + **5. Project Management (Tóm gọn)**

// 4. Expense Splitter
function ExpenseSplitter() {
  const [state, setState] = useState({
    users: {
      1: { id: 1, name: 'John' },
      2: { id: 2, name: 'Jane' },
      3: { id: 3, name: 'Bob' }
    },
    expenses: {
      1: { 
        id: 1, 
        description: 'Dinner', 
        amount: 150000, 
        paidBy: 1, 
        splitBetween: [1, 2, 3] 
      },
      2: { 
        id: 2, 
        description: 'Taxi', 
        amount: 50000, 
        paidBy: 2, 
        splitBetween: [1, 2] 
      }
    }
  });

  // ✅ DERIVED: Who owes whom (key calculation!)
  const settlements = useMemo(() => {
    const balances = {}; // { userId: balance }
    
    // Initialize
    Object.keys(state.users).forEach(id => {
      balances[id] = 0;
    });

    // Calculate balances
    Object.values(state.expenses).forEach(expense => {
      const perPerson = expense.amount / expense.splitBetween.length;
      
      // Payer gets credit
      balances[expense.paidBy] += expense.amount;
      
      // Each person owes their share
      expense.splitBetween.forEach(userId => {
        balances[userId] -= perPerson;
      });
    });

    // Generate settlements
    const settlements = [];
    const creditors = Object.entries(balances).filter(([_, bal]) => bal > 0);
    const debtors = Object.entries(balances).filter(([_, bal]) => bal < 0);

    debtors.forEach(([debtorId, debtAmount]) => {
      creditors.forEach(([creditorId, creditAmount]) => {
        if (creditAmount > 0 && debtAmount < 0) {
          const amount = Math.min(creditAmount, -debtAmount);
          settlements.push({
            from: state.users[debtorId].name,
            to: state.users[creditorId].name,
            amount: Math.round(amount)
          });
          balances[creditorId] -= amount;
          balances[debtorId] += amount;
        }
      });
    });

    return settlements;
  }, [state.expenses, state.users]);

  const addExpense = (description, amount, paidBy, splitBetween) => {
    const id = Date.now();
    setState(prev => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        [id]: { id, description, amount, paidBy, splitBetween }
      }
    }));
  };

  return (
    <div>
      <h1>💰 Expense Splitter</h1>
      
      {/* Expenses */}
      {Object.values(state.expenses).map(exp => (
        <div key={exp.id}>
          {exp.description}: {exp.amount.toLocaleString()}đ
          (paid by {state.users[exp.paidBy].name})
        </div>
      ))}

      {/* Settlements */}
      <h3>Who Owes Whom:</h3>
      {settlements.map((s, i) => (
        <div key={i}>
          {s.from} owes {s.to}: {s.amount.toLocaleString()}đ
        </div>
      ))}
    </div>
  );
}

// 5. Project Management (Simplified)
function ProjectManagement() {
  const [state, setState] = useState({
    projects: { 1: { id: 1, name: 'Website Redesign', taskIds: [1, 2, 3] } },
    tasks: {
      1: { id: 1, title: 'Design', assignee: 'John', hours: 20, completed: true },
      2: { id: 2, title: 'Frontend', assignee: 'Jane', hours: 40, completed: false },
      3: { id: 3, title: 'Backend', assignee: 'John', hours: 30, completed: false }
    },
    members: ['John', 'Jane', 'Bob']
  });

  // ✅ DERIVED: Workload per member
  const workload = useMemo(() => {
    const load = {};
    
    Object.values(state.tasks).forEach(task => {
      if (!task.completed) {
        load[task.assignee] = (load[task.assignee] || 0) + task.hours;
      }
    });

    return load;
  }, [state.tasks]);

  // ✅ DERIVED: Project completion
  const projectCompletion = useMemo(() => {
    return Object.values(state.projects).map(project => {
      const tasks = project.taskIds.map(id => state.tasks[id]);
      const completed = tasks.filter(t => t.completed).length;
      return {
        projectId: project.id,
        name: project.name,
        percentage: Math.round((completed / tasks.length) * 100),
        totalHours: tasks.reduce((sum, t) => sum + t.hours, 0)
      };
    });
  }, [state.projects, state.tasks]);

  return (
    <div>
      <h1>📊 Project Management</h1>
      
      {/* Project Progress */}
      {projectCompletion.map(p => (
        <div key={p.projectId}>
          <h3>{p.name}</h3>
          <progress value={p.percentage} max="100" />
          <span>{p.percentage}%</span>
          <p>Total: {p.totalHours}h</p>
        </div>
      ))}

      {/* Workload */}
      <h3>Team Workload:</h3>
      {Object.entries(workload).map(([member, hours]) => (
        <div key={member}>
          {member}: {hours} hours remaining
        </div>
      ))}
    </div>
  );
}

/* 
=== TÓM TẮT PATTERNS ĐÃ DÙNG ===

1. NORMALIZED STATE:
   - Flat structure: users, expenses, tasks
   - Reference bằng IDs
   - Dễ update, tránh nested hell

2. DERIVED STATE với useMemo:
   - ExpenseSplitter: settlements (who owes whom)
   - ELearning: completion %, certificate eligibility
   - Kanban: filtered cards, statistics
   - Project: workload, completion %

3. STATE COLOCATION:
   - Filter/search state ở component dùng nó
   - Modal state ở component modal
   - Form state ở form component

4. LIFTING STATE UP:
   - Shared state lên parent
   - Pass callbacks xuống children
   - Single source of truth

5. OPTIMIZATION:
   - useMemo cho expensive calculations
   - useCallback cho event handlers
   - Tránh unnecessary re-renders

KEY TAKEAWAY:
- Normalize khi có relationships
- Derive khi có thể calculate
- Memoize khi expensive
- Colocate khi có thể
*/

## 📝 Tổng kết Patterns đã dùng:

### **1. Social Media Feed**
- ✅ Normalized: users, posts, comments
- ✅ Derived: denormalize, filter trending
- ✅ Optimistic updates: like/unlike
- ✅ Add comments với ID references

### **2. Kanban Board**
- ✅ Normalized: boards → lists → cards
- ✅ Derived: filtered cards, statistics
- ✅ Search & filter across all cards
- ✅ Move cards: update both card.listId và list.cardIds

### **3. E-Learning Platform**
- ✅ Normalized: courses → modules → lessons
- ✅ Derived: **completion %** (key calculation)
- ✅ Certificate eligibility: 100% + quiz passed
- ✅ Leaderboard sorting

### **4. Expense Splitter**
- ✅ Normalized: users, expenses
- ✅ **Derived: settlements** (who owes whom) - complex calculation
- ✅ Balance algorithm: credit - debit
- ✅ Minimize transactions

### **5. Project Management**
- ✅ Normalized: projects, tasks
- ✅ Derived: **workload per member**
- ✅ Derived: **project completion %**
- ✅ Filter incomplete tasks

## 🎯 Key State Management Patterns:


// 1. NORMALIZED STATE STRUCTURE
{
  entities: { 1: {...}, 2: {...} },  // byId
  ids: [1, 2, 3]                      // allIds
}

// 2. DERIVED STATE (useMemo)
const filtered = useMemo(() => {
  return data.filter(...)
}, [data, filters]);

// 3. COMPLEX CALCULATIONS
const settlements = useMemo(() => {
  // Calculate balances
  // Generate settlements
  return results;
}, [expenses, users]);

// 4. UPDATE NORMALIZED STATE
setState(prev => ({
  ...prev,
  entities: {
    ...prev.entities,
    [id]: { ...prev.entities[id], field: value }
  }
}));

// 5. DENORMALIZE FOR RENDER
const itemsWithDetails = ids.map(id => ({
  ...entities[id],
  relatedData: otherEntities[entities[id].relatedId]
}));


Tất cả đều follow principles:
- **Normalize** khi có relationships
- **Derive** thay vì duplicate
- **useMemo** cho expensive calculations
- **Single source of truth**

`})]})}const F={1:K,2:J,3:se,4:ue,5:be},Se=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(V,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 8"}),e.jsx("p",{className:"day-subtitle",children:"State Management Patterns"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Lifting State Up - Chia sẻ state giữa components"}),e.jsx("li",{children:"Derived State - Tính toán từ state/props"}),e.jsx("li",{children:"State Batching trong React 18"}),e.jsx("li",{children:"State Colocation - Đặt state đúng chỗ"}),e.jsx("li",{children:"State normalization patterns"}),e.jsx("li",{children:"Optimizing re-renders"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(F).map(t=>{const s=F[t];return s?e.jsx(s,{},t):null})}),e.jsx("div",{className:"exercises-list mt-1",children:e.jsx(xe,{})})]});export{Se as default};
