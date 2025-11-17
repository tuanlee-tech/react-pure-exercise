import{r as s,j as e,C as F}from"./index-Ci6_VdJn.js";/* empty css               */import{E as N}from"./ExerciseCard-DhUkAPVk.js";const $=[{id:1,name:'MacBook Pro 16"',category:"electronics",price:2499,rating:4.8,inStock:!0,image:"💻"},{id:2,name:"iPhone 15 Pro Max",category:"electronics",price:1199,rating:4.7,inStock:!0,image:"📱"},{id:3,name:"iPad Air M2",category:"electronics",price:599,rating:4.6,inStock:!0,image:"📱"},{id:4,name:"Sony WH-1000XM5",category:"electronics",price:399,rating:4.9,inStock:!0,image:"🎧"},{id:5,name:"Samsung 4K Monitor",category:"electronics",price:499,rating:4.5,inStock:!1,image:"🖥️"},{id:6,name:"Herman Miller Chair",category:"furniture",price:1495,rating:4.8,inStock:!0,image:"🪑"},{id:7,name:"Standing Desk Pro",category:"furniture",price:799,rating:4.6,inStock:!0,image:"🪑"},{id:8,name:"Bookshelf Oak Wood",category:"furniture",price:349,rating:4.4,inStock:!0,image:"📚"},{id:9,name:"Office Desk Lamp",category:"furniture",price:89,rating:4.3,inStock:!0,image:"💡"},{id:10,name:"Nike Air Max 2024",category:"clothing",price:180,rating:4.5,inStock:!0,image:"👟"},{id:11,name:"Levi's Denim Jacket",category:"clothing",price:120,rating:4.6,inStock:!0,image:"🧥"},{id:12,name:"Adidas Running Shoes",category:"clothing",price:150,rating:4.7,inStock:!1,image:"👟"},{id:13,name:"Patagonia Backpack",category:"clothing",price:89,rating:4.8,inStock:!0,image:"🎒"},{id:14,name:"Wireless Keyboard",category:"electronics",price:129,rating:4.4,inStock:!0,image:"⌨️"},{id:15,name:"Gaming Mouse RGB",category:"electronics",price:79,rating:4.6,inStock:!0,image:"🖱️"},{id:16,name:"Coffee Table Modern",category:"furniture",price:299,rating:4.5,inStock:!0,image:"🪑"},{id:17,name:"Wool Winter Coat",category:"clothing",price:250,rating:4.7,inStock:!0,image:"🧥"},{id:18,name:"Mechanical Watch",category:"accessories",price:450,rating:4.9,inStock:!0,image:"⌚"},{id:19,name:"Leather Wallet",category:"accessories",price:85,rating:4.5,inStock:!0,image:"💼"},{id:20,name:"Sunglasses Polarized",category:"accessories",price:199,rating:4.6,inStock:!1,image:"🕶️"}],E=[{value:"all",label:"Tất cả danh mục"},{value:"electronics",label:"📱 Điện tử"},{value:"furniture",label:"🪑 Nội thất"},{value:"clothing",label:"👕 Thời trang"},{value:"accessories",label:"⌚ Phụ kiện"}];function U({filters:t,onFilterChange:a}){const r=s.useCallback((n,h)=>{a(p=>({...p,[n]:h}))},[a]),l=s.useCallback(()=>{a({category:"all",minPrice:"",maxPrice:"",minRating:0,inStockOnly:!1,search:""})},[a]);return e.jsxs("div",{className:"product-filters",children:[e.jsxs("div",{className:"filters-header",children:[e.jsx("h2",{className:"filters-title",children:"🔍 Bộ lọc"}),e.jsx("button",{onClick:l,className:"btn-reset",children:"🔄 Reset"})]}),e.jsxs("div",{className:"filters-grid",children:[e.jsxs("div",{className:"filter-group full-width",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"🔎"}),"Tìm kiếm sản phẩm"]}),e.jsx("input",{type:"text",value:t.search,onChange:n=>r("search",n.target.value),placeholder:"Nhập tên sản phẩm...",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"📁"}),"Danh mục"]}),e.jsx("select",{value:t.category,onChange:n=>r("category",n.target.value),className:"filter-select",children:E.map(n=>e.jsx("option",{value:n.value,children:n.label},n.value))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"💰"}),"Giá từ"]}),e.jsx("input",{type:"number",value:t.minPrice,onChange:n=>r("minPrice",n.target.value),placeholder:"0",min:"0",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"💵"}),"Giá đến"]}),e.jsx("input",{type:"number",value:t.maxPrice,onChange:n=>r("maxPrice",n.target.value),placeholder:"9999",min:"0",className:"filter-input"})]}),e.jsxs("div",{className:"filter-group full-width",children:[e.jsxs("label",{className:"filter-label",children:[e.jsx("span",{className:"label-icon",children:"⭐"}),"Đánh giá tối thiểu: ",t.minRating," sao"]}),e.jsx("input",{type:"range",value:t.minRating,onChange:n=>r("minRating",parseFloat(n.target.value)),min:"0",max:"5",step:"0.5",className:"filter-range"}),e.jsxs("div",{className:"rating-labels",children:[e.jsx("span",{children:"0⭐"}),e.jsx("span",{children:"2.5⭐"}),e.jsx("span",{children:"5⭐"})]})]}),e.jsx("div",{className:"filter-group full-width",children:e.jsxs("label",{className:"filter-checkbox",children:[e.jsx("input",{type:"checkbox",checked:t.inStockOnly,onChange:n=>r("inStockOnly",n.target.checked)}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{className:"checkbox-label",children:"📦 Chỉ hiển thị sản phẩm còn hàng"})]})})]})]})}function G({products:t}){return t.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:"🔍"}),e.jsx("h3",{children:"Không tìm thấy sản phẩm"}),e.jsx("p",{children:"Thử thay đổi bộ lọc để xem nhiều sản phẩm hơn"})]}):e.jsx("div",{className:"product-list",children:t.map(a=>e.jsxs("div",{className:"product-card",children:[!a.inStock&&e.jsx("div",{className:"stock-badge out-of-stock",children:"Hết hàng"}),a.inStock&&e.jsx("div",{className:"stock-badge in-stock",children:"Còn hàng"}),e.jsx("div",{className:"product-image",children:e.jsx("span",{className:"product-emoji",children:a.image})}),e.jsxs("div",{className:"product-info",children:[e.jsx("h3",{className:"product-name",children:a.name}),e.jsx("div",{className:"product-category",children:E.find(r=>r.value===a.category)?.label||a.category}),e.jsxs("div",{className:"product-rating",children:[e.jsxs("span",{className:"rating-stars",children:["⭐".repeat(Math.floor(a.rating)),a.rating%1!==0&&"✨"]}),e.jsx("span",{className:"rating-value",children:a.rating.toFixed(1)})]}),e.jsxs("div",{className:"product-price",children:["$",a.price.toLocaleString()]}),e.jsx("button",{className:"btn-add-cart",disabled:!a.inStock,children:a.inStock?"🛒 Thêm vào giỏ":"❌ Hết hàng"})]})]},a.id))})}function V({products:t}){const a=s.useMemo(()=>{console.log("📊 Calculating stats...");const r=t.length,l=r>0?t.reduce((i,d)=>i+d.price,0)/r:0,n=r>0?t.reduce((i,d)=>i+d.rating,0)/r:0,h=t.filter(i=>i.inStock).length,p=r>0?Math.max(...t.map(i=>i.price)):0,g=r>0?Math.min(...t.map(i=>i.price)):0;return{total:r,averagePrice:l,averageRating:n,inStockCount:h,maxPrice:p,minPrice:g}},[t]);return e.jsxs("div",{className:"product-stats",children:[e.jsx("h2",{className:"stats-title",children:"📊 Thống kê"}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"📦"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:a.total}),e.jsx("div",{className:"stat-label",children:"Sản phẩm"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"💰"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("div",{className:"stat-value",children:["$",Math.round(a.averagePrice)]}),e.jsx("div",{className:"stat-label",children:"Giá TB"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"⭐"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:a.averageRating.toFixed(1)}),e.jsx("div",{className:"stat-label",children:"Đánh giá TB"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-icon",children:"✅"}),e.jsxs("div",{className:"stat-content",children:[e.jsx("div",{className:"stat-value",children:a.inStockCount}),e.jsx("div",{className:"stat-label",children:"Còn hàng"})]})]}),e.jsxs("div",{className:"stat-card full-width",children:[e.jsx("div",{className:"stat-icon",children:"💵"}),e.jsxs("div",{className:"stat-content",children:[e.jsxs("div",{className:"stat-value",children:["$",a.minPrice," - $",a.maxPrice]}),e.jsx("div",{className:"stat-label",children:"Khoảng giá"})]})]})]})]})}function H(){const[t]=s.useState($),[a,r]=s.useState({category:"all",minPrice:"",maxPrice:"",minRating:0,inStockOnly:!1,search:""}),l=s.useMemo(()=>(console.log("🔄 Filtering products..."),t.filter(n=>{if(a.category!=="all"&&n.category!==a.category||a.minPrice&&n.price<parseFloat(a.minPrice)||a.maxPrice&&n.price>parseFloat(a.maxPrice)||n.rating<a.minRating||a.inStockOnly&&!n.inStock)return!1;if(a.search){const h=a.search.toLowerCase();return n.name.toLowerCase().includes(h)}return!0})),[t,a]);return e.jsxs("div",{className:"product-page",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{className:"page-title",children:e.jsx("span",{className:"title-gradient",children:"Product Catalog"})}),e.jsx("p",{className:"page-description",children:"Khám phá bộ sưu tập sản phẩm với bộ lọc thông minh"})]}),e.jsxs("div",{className:"page-layout",children:[e.jsxs("aside",{className:"page-sidebar",children:[e.jsx(U,{filters:a,onFilterChange:r}),e.jsx(V,{products:l})]}),e.jsxs("main",{className:"page-content",children:[e.jsx("div",{className:"result-header",children:e.jsxs("h2",{className:"result-title",children:["Tìm thấy ",l.length," sản phẩm"]})}),e.jsx(G,{products:l})]})]})]})}function B(){return e.jsxs(N,{children:[e.jsx(N.Header,{order:1,title:"Multi-Filter Product List"}),e.jsx(N.Description,{children:`
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

`}),e.jsx(N.Demo,{children:e.jsx(H,{})}),e.jsx(N.Code,{children:`
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
`})]})}function W(){const[t,a]=s.useState({products:{1:{id:1,name:"Áo thun Premium",price:15e4,image:"👕",stock:10,category:"clothing"},2:{id:2,name:"Quần jean Slim",price:35e4,image:"👖",stock:5,category:"clothing"},3:{id:3,name:"Giày sneaker",price:5e5,image:"👟",stock:3,category:"shoes"},4:{id:4,name:"Túi xách nữ",price:25e4,image:"👜",stock:8,category:"accessories"},5:{id:5,name:"Mũ lưỡi trai",price:8e4,image:"🧢",stock:15,category:"accessories"},6:{id:6,name:"Đồng hồ nam",price:45e4,image:"⌚",stock:6,category:"accessories"},7:{id:7,name:"Áo khoác dạ",price:6e5,image:"🧥",stock:4,category:"clothing"},8:{id:8,name:"Giày boot",price:55e4,image:"🥾",stock:7,category:"shoes"}},cart:{},coupons:{GIAM10:{code:"GIAM10",discount:10,type:"percent",description:"Giảm 10%"},GIAM20:{code:"GIAM20",discount:20,type:"percent",description:"Giảm 20%"},GIAM50K:{code:"GIAM50K",discount:5e4,type:"fixed",description:"Giảm 50.000đ"},GIAM100K:{code:"GIAM100K",discount:1e5,type:"fixed",description:"Giảm 100.000đ"},FREESHIP:{code:"FREESHIP",discount:0,type:"freeship",description:"Miễn phí ship"}},appliedCoupon:null,shippingMethod:"standard"}),r=s.useCallback(m=>{a(o=>{const f=o.products[m],k=o.cart[m]||0;return k>=f.stock?(alert(`❌ Không đủ hàng! Chỉ còn ${f.stock} sản phẩm.`),o):{...o,cart:{...o.cart,[m]:k+1}}})},[]),l=s.useCallback(m=>{a(o=>{const f={...o.cart};return delete f[m],{...o,cart:f}})},[]),n=s.useCallback((m,o)=>{a(f=>{const k=f.products[m];if(o<0)return f;if(o===0){const P={...f.cart};return delete P[m],{...f,cart:P}}return o>k.stock?(alert(`❌ Không đủ hàng! Chỉ còn ${k.stock} sản phẩm.`),f):{...f,cart:{...f.cart,[m]:o}}})},[]),h=s.useCallback(m=>{const o=m.toUpperCase().trim();if(!o){alert("❌ Vui lòng nhập mã giảm giá");return}a(f=>f.coupons[o]?{...f,appliedCoupon:o}:(alert(`❌ Mã "${o}" không hợp lệ!`),f))},[]),p=s.useCallback(()=>{a(m=>({...m,appliedCoupon:null}))},[]),g=s.useCallback(m=>{a(o=>({...o,shippingMethod:m}))},[]),i=s.useCallback(()=>{window.confirm("🗑️ Xóa toàn bộ giỏ hàng?")&&a(m=>({...m,cart:{},appliedCoupon:null}))},[]),d=s.useMemo(()=>(console.log("🔄 Denormalizing cart..."),Object.entries(t.cart).map(([m,o])=>{const f=t.products[m];return{...f,quantity:o,itemTotal:f.price*o}})),[t.cart,t.products]),c=s.useMemo(()=>(console.log("💰 Calculating subtotal..."),d.reduce((m,o)=>m+o.itemTotal,0)),[d]),v=s.useMemo(()=>{if(console.log("🎟️ Calculating discount..."),!t.appliedCoupon)return 0;const m=t.coupons[t.appliedCoupon];return m.type==="percent"?Math.round(c*(m.discount/100)):m.type==="fixed"?Math.min(m.discount,c):0},[c,t.appliedCoupon,t.coupons]),x=s.useMemo(()=>(console.log("🚚 Calculating shipping..."),t.appliedCoupon==="FREESHIP"||c>=5e5?0:t.shippingMethod==="standard"?3e4:5e4),[c,t.shippingMethod,t.appliedCoupon]),b=s.useMemo(()=>(console.log("📊 Calculating tax..."),Math.round(c*.1)),[c]),C=s.useMemo(()=>(console.log("💵 Calculating total..."),c+x+b-v),[c,x,b,v]),M=s.useMemo(()=>d.reduce((m,o)=>m+o.quantity,0),[d]),I=s.useMemo(()=>{let m=v;if(x===0&&c>0){const o=t.shippingMethod==="standard"?3e4:5e4;m+=o}return m},[v,x,c,t.shippingMethod]);return e.jsxs("div",{className:"cart-app",children:[e.jsxs("header",{className:"app-header",children:[e.jsx("h1",{className:"app-title",children:e.jsx("span",{className:"title-gradient",children:"🛒 CyberCart"})}),e.jsx("p",{className:"app-subtitle",children:"E-commerce Shopping Cart với Normalized State"})]}),e.jsxs("div",{className:"app-layout",children:[e.jsxs("div",{className:"catalog-section",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{className:"section-title",children:"📦 Sản phẩm"}),e.jsxs("div",{className:"product-count",children:[Object.keys(t.products).length," sản phẩm"]})]}),e.jsx(K,{products:t.products,cart:t.cart,onAddToCart:r})]}),e.jsx("div",{className:"cart-section",children:e.jsx(q,{cartItems:d,state:t,onUpdateQuantity:n,onRemoveFromCart:l,onApplyCoupon:h,onRemoveCoupon:p,onChangeShipping:g,onClearCart:i,subtotal:c,discount:v,shippingCost:x,tax:b,total:C,itemCount:M,savedAmount:I})})]})]})}function K({products:t,cart:a,onAddToCart:r}){return e.jsx("div",{className:"product-catalog",children:Object.values(t).map(l=>{const n=a[l.id]||0,h=n<l.stock;return e.jsxs("div",{className:"catalog-card",children:[e.jsx("div",{className:"catalog-image",children:l.image}),e.jsxs("div",{className:"catalog-info",children:[e.jsx("h3",{className:"catalog-name",children:l.name}),e.jsxs("div",{className:"catalog-price",children:[l.price.toLocaleString("vi-VN"),"đ"]}),e.jsxs("div",{className:"catalog-stock",children:["📦 Còn ",l.stock," sản phẩm"]}),n>0&&e.jsxs("div",{className:"in-cart-badge",children:["🛒 Đã có ",n," trong giỏ"]})]}),e.jsx("button",{className:"btn-add",onClick:()=>r(l.id),disabled:!h,children:h?"➕ Thêm":"❌ Hết"})]},l.id)})})}function q({cartItems:t,state:a,onUpdateQuantity:r,onRemoveFromCart:l,onApplyCoupon:n,onRemoveCoupon:h,onChangeShipping:p,onClearCart:g,subtotal:i,discount:d,shippingCost:c,tax:v,total:x,itemCount:b,savedAmount:C}){const[M,I]=s.useState(""),m=o=>{o.preventDefault(),n(M),I("")};return t.length===0?e.jsxs("div",{className:"cart-container",children:[e.jsx("div",{className:"section-header",children:e.jsx("h2",{className:"section-title",children:"🛒 Giỏ hàng"})}),e.jsxs("div",{className:"empty-cart",children:[e.jsx("div",{className:"empty-icon",children:"🛒"}),e.jsx("h3",{children:"Giỏ hàng trống"}),e.jsx("p",{children:"Thêm sản phẩm từ danh mục bên trái"})]}),e.jsx(O,{coupons:a.coupons})]}):e.jsxs("div",{className:"cart-container",children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("h2",{className:"section-title",children:["🛒 Giỏ hàng (",b,")"]}),e.jsx("button",{className:"btn-clear",onClick:g,children:"🗑️ Xóa tất cả"})]}),e.jsx("div",{className:"cart-items",children:t.map(o=>e.jsxs("div",{className:"cart-item",children:[e.jsx("div",{className:"item-image",children:o.image}),e.jsxs("div",{className:"item-info",children:[e.jsx("h4",{className:"item-name",children:o.name}),e.jsxs("div",{className:"item-price",children:[o.price.toLocaleString("vi-VN"),"đ"]})]}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx("button",{className:"qty-btn",onClick:()=>r(o.id,o.quantity-1),children:"-"}),e.jsx("input",{type:"number",className:"qty-input",value:o.quantity,onChange:f=>{const k=parseInt(f.target.value)||0;r(o.id,k)},min:"0",max:o.stock}),e.jsx("button",{className:"qty-btn",onClick:()=>r(o.id,o.quantity+1),disabled:o.quantity>=o.stock,children:"+"})]}),e.jsxs("div",{className:"item-total",children:[o.itemTotal.toLocaleString("vi-VN"),"đ"]}),e.jsx("button",{className:"btn-remove",onClick:()=>l(o.id),title:"Xóa",children:"❌"})]},o.id))}),e.jsxs("div",{className:"coupon-section",children:[e.jsx("h3",{className:"coupon-title",children:"🎟️ Mã giảm giá"}),a.appliedCoupon?e.jsxs("div",{className:"applied-coupon",children:[e.jsxs("div",{className:"coupon-info",children:[e.jsx("span",{className:"coupon-code",children:a.appliedCoupon}),e.jsx("span",{className:"coupon-desc",children:a.coupons[a.appliedCoupon].description})]}),e.jsx("button",{className:"btn-remove-coupon",onClick:h,children:"❌"})]}):e.jsxs("form",{className:"coupon-form",onSubmit:m,children:[e.jsx("input",{type:"text",className:"coupon-input",placeholder:"Nhập mã giảm giá...",value:M,onChange:o=>I(o.target.value.toUpperCase())}),e.jsx("button",{type:"submit",className:"btn-apply",children:"Áp dụng"})]})]}),e.jsxs("div",{className:"shipping-section",children:[e.jsx("h3",{className:"shipping-title",children:"🚚 Phương thức vận chuyển"}),e.jsxs("div",{className:"shipping-options",children:[e.jsxs("label",{className:`shipping-option ${a.shippingMethod==="standard"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"shipping",value:"standard",checked:a.shippingMethod==="standard",onChange:o=>p(o.target.value)}),e.jsxs("div",{className:"option-content",children:[e.jsx("div",{className:"option-name",children:"🚚 Giao hàng tiêu chuẩn"}),e.jsx("div",{className:"option-desc",children:"3-5 ngày"})]}),e.jsx("div",{className:"option-price",children:"30.000đ"})]}),e.jsxs("label",{className:`shipping-option ${a.shippingMethod==="express"?"active":""}`,children:[e.jsx("input",{type:"radio",name:"shipping",value:"express",checked:a.shippingMethod==="express",onChange:o=>p(o.target.value)}),e.jsxs("div",{className:"option-content",children:[e.jsx("div",{className:"option-name",children:"⚡ Giao hàng nhanh"}),e.jsx("div",{className:"option-desc",children:"1-2 ngày"})]}),e.jsx("div",{className:"option-price",children:"50.000đ"})]})]}),i>=5e5&&e.jsx("div",{className:"free-ship-notice",children:"✨ Miễn phí ship cho đơn ≥ 500.000đ"})]}),e.jsxs("div",{className:"order-summary",children:[e.jsx("h3",{className:"summary-title",children:"💰 Tổng đơn hàng"}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính"}),e.jsxs("span",{children:[i.toLocaleString("vi-VN"),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Phí vận chuyển"}),e.jsx("span",{className:c===0?"free":"",children:c===0?"Miễn phí":`${c.toLocaleString("vi-VN")}đ`})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Thuế VAT (10%)"}),e.jsxs("span",{children:[v.toLocaleString("vi-VN"),"đ"]})]}),d>0&&e.jsxs("div",{className:"summary-row discount",children:[e.jsx("span",{children:"Giảm giá"}),e.jsxs("span",{children:["-",d.toLocaleString("vi-VN"),"đ"]})]}),e.jsx("div",{className:"summary-divider"}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{children:"Tổng cộng"}),e.jsxs("span",{className:"total-amount",children:[x.toLocaleString("vi-VN"),"đ"]})]}),C>0&&e.jsxs("div",{className:"saved-amount",children:["🎉 Bạn tiết kiệm được ",C.toLocaleString("vi-VN"),"đ"]}),e.jsx("button",{className:"btn-checkout",children:"🛍️ Thanh toán"})]}),!a.appliedCoupon&&e.jsx(O,{coupons:a.coupons})]})}function O({coupons:t}){return e.jsxs("div",{className:"coupon-list",children:[e.jsx("h3",{className:"coupon-list-title",children:"💎 Mã giảm giá khả dụng"}),e.jsx("div",{className:"coupon-grid",children:Object.values(t).map(a=>e.jsxs("div",{className:"coupon-badge",children:[e.jsx("div",{className:"coupon-code-badge",children:a.code}),e.jsx("div",{className:"coupon-desc-badge",children:a.description})]},a.code))})]})}function z(){return e.jsxs(N,{children:[e.jsx(N.Header,{order:2,title:"E-commerce Cart với Normalized State"}),e.jsx(N.Description,{children:`
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

`}),e.jsx(N.Demo,{children:e.jsx(W,{})}),e.jsx(N.Code,{children:`
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
          <span className="title-gradient">🛒 CyberCart</span>
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

`})]})}const T={1:{id:1,name:"Bạn",avatar:"😎",color:"#00D9FF"},2:{id:2,name:"Alice",avatar:"👩",color:"#22c55e"},3:{id:3,name:"Bob",avatar:"👨",color:"#f59e0b"},4:{id:4,name:"Charlie",avatar:"🧑",color:"#8b5cf6"}},Q=[{id:1,name:"💬 General",description:"Thảo luận chung",unread:0},{id:2,name:"🎮 Gaming",description:"Trò chuyện về game",unread:2},{id:3,name:"💻 Tech Talk",description:"Công nghệ & lập trình",unread:5},{id:4,name:"🎵 Music",description:"Âm nhạc & nghệ thuật",unread:0},{id:5,name:"🏃 Fitness",description:"Thể thao & sức khỏe",unread:1}],X=t=>({1:[{id:1,userId:2,text:"Chào mọi người! 👋",timestamp:Date.now()-36e5,replyTo:null,edited:!1},{id:2,userId:3,text:"Hi Alice! Hôm nay thế nào?",timestamp:Date.now()-3e6,replyTo:null,edited:!1},{id:3,userId:2,text:"Tốt lắm, cảm ơn! 😊",timestamp:Date.now()-2e6,replyTo:2,edited:!1}],2:[{id:4,userId:4,text:"Ai chơi Valorant không? 🎮",timestamp:Date.now()-18e5,replyTo:null,edited:!1},{id:5,userId:3,text:"Có đó! Rank bao nhiêu?",timestamp:Date.now()-12e5,replyTo:4,edited:!1}],3:[{id:6,userId:2,text:"React 19 ra rồi nè! 🚀",timestamp:Date.now()-9e5,replyTo:null,edited:!1},{id:7,userId:3,text:"Server Components quá tuyệt",timestamp:Date.now()-6e5,replyTo:6,edited:!1},{id:8,userId:4,text:"useReducer vs useState ai win?",timestamp:Date.now()-3e5,replyTo:null,edited:!1},{id:9,userId:2,text:"useReducer cho complex state!",timestamp:Date.now()-12e4,replyTo:8,edited:!1},{id:10,userId:3,text:"Đúng rồi, nhất là với normalized state",timestamp:Date.now()-6e4,replyTo:9,edited:!1}],4:[{id:11,userId:4,text:"Nghe album mới của Taylor Swift chưa? 🎵",timestamp:Date.now()-72e5,replyTo:null,edited:!1}],5:[{id:12,userId:2,text:"Ai đi gym sáng mai không? 🏋️",timestamp:Date.now()-18e5,replyTo:null,edited:!1}]})[t]||[];function _({roomId:t,currentUserId:a,roomName:r}){const[l,n]=s.useState(()=>X(t)),[h,p]=s.useState(""),[g,i]=s.useState(null),[d,c]=s.useState(null),[v,x]=s.useState({}),b=s.useRef(null),C=s.useRef({});s.useEffect(()=>{b.current?.scrollIntoView({behavior:"smooth"})},[l]),s.useEffect(()=>()=>{Object.values(C.current).forEach(clearTimeout)},[]);const M=s.useCallback(()=>{const u=h.trim();if(u){if(d)n(j=>j.map(y=>y.id===d.id?{...y,text:u,edited:!0}:y)),c(null);else{const j={id:Date.now(),userId:a,text:u,timestamp:Date.now(),replyTo:g?.id||null,edited:!1};n(y=>[...y,j]),i(null)}p("")}},[h,a,g,d]),I=s.useCallback(u=>{window.confirm("🗑️ Xóa tin nhắn này?")&&n(j=>j.filter(y=>y.id!==u))},[]),m=s.useCallback(u=>{c(u),p(u.text),i(null)},[]),o=s.useCallback(u=>{i(u),c(null)},[]),f=s.useCallback(()=>{i(null),c(null),p("")},[]),k=s.useCallback(u=>{const j=u.target.value;if(p(j),j.length>0&&Math.random()>.7){const y=[2,3,4][Math.floor(Math.random()*3)];x(S=>({...S,[y]:!0})),C.current[y]&&clearTimeout(C.current[y]),C.current[y]=setTimeout(()=>{x(S=>{const w={...S};return delete w[y],w})},3e3)}},[]),P=s.useCallback(u=>{const j=new Date(u),S=new Date-j;return S<6e4?"Vừa xong":S<36e5?`${Math.floor(S/6e4)} phút trước`:S<864e5?j.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}):j.toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit"})},[]),L=s.useCallback(u=>l.find(j=>j.id===u),[l]),R=s.useMemo(()=>Object.keys(v).map(u=>T[u]?.name).filter(Boolean),[v]);return e.jsxs("div",{className:"chat-room",children:[e.jsx("div",{className:"room-header",children:e.jsxs("div",{className:"room-info",children:[e.jsx("h2",{className:"room-name",children:r}),e.jsxs("div",{className:"online-status",children:[e.jsx("span",{className:"status-dot"}),Object.keys(T).length," thành viên online"]})]})}),e.jsxs("div",{className:"messages-container",children:[l.length===0?e.jsxs("div",{className:"empty-messages",children:[e.jsx("div",{className:"empty-icon",children:"💬"}),e.jsx("p",{children:"Chưa có tin nhắn. Hãy bắt đầu cuộc trò chuyện!"})]}):l.map((u,j)=>{const y=T[u.userId],S=u.userId===a,w=j===0||l[j-1].userId!==u.userId,D=u.replyTo?L(u.replyTo):null;return e.jsxs("div",{className:`message ${S?"own":""} ${w?"":"compact"}`,children:[w&&!S&&e.jsx("div",{className:"message-avatar",style:{color:y.color},children:y.avatar}),e.jsxs("div",{className:"message-content",children:[w&&!S&&e.jsx("div",{className:"message-author",style:{color:y.color},children:y.name}),D&&e.jsxs("div",{className:"message-reply",children:[e.jsx("div",{className:"reply-icon",children:"↩️"}),e.jsxs("div",{className:"reply-content",children:[e.jsx("div",{className:"reply-author",children:T[D.userId]?.name}),e.jsx("div",{className:"reply-text",children:D.text})]})]}),e.jsxs("div",{className:"message-bubble",children:[e.jsx("div",{className:"message-text",children:u.text}),u.edited&&e.jsx("span",{className:"edited-badge",children:"đã chỉnh sửa"})]}),e.jsxs("div",{className:"message-meta",children:[e.jsx("span",{className:"message-time",children:P(u.timestamp)}),S&&e.jsxs("div",{className:"message-actions",children:[e.jsx("button",{className:"action-btn",onClick:()=>m(u),title:"Chỉnh sửa",children:"✏️"}),e.jsx("button",{className:"action-btn",onClick:()=>I(u.id),title:"Xóa",children:"🗑️"})]}),!S&&e.jsx("button",{className:"action-btn reply-btn",onClick:()=>o(u),title:"Trả lời",children:"↩️"})]})]})]},u.id)}),R.length>0&&e.jsxs("div",{className:"typing-indicator",children:[e.jsx("div",{className:"typing-avatar",children:"✍️"}),e.jsxs("div",{className:"typing-text",children:[R.join(", ")," đang nhập",e.jsxs("span",{className:"typing-dots",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]})]})]}),e.jsx("div",{ref:b})]}),e.jsxs("div",{className:"input-area",children:[(g||d)&&e.jsxs("div",{className:"action-preview",children:[e.jsx("div",{className:"preview-icon",children:d?"✏️":"↩️"}),e.jsxs("div",{className:"preview-content",children:[e.jsx("div",{className:"preview-label",children:d?"Chỉnh sửa tin nhắn":`Trả lời ${T[g.userId]?.name}`}),e.jsx("div",{className:"preview-text",children:d?d.text:g.text})]}),e.jsx("button",{className:"preview-close",onClick:f,children:"✕"})]}),e.jsxs("div",{className:"input-box",children:[e.jsx("input",{type:"text",className:"message-input",placeholder:"Nhập tin nhắn...",value:h,onChange:k,onKeyPress:u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),M())}}),e.jsx("button",{className:"send-button",onClick:M,disabled:!h.trim(),children:d?"💾":"📤"})]})]})]})}function Y(){const[t,a]=s.useState(Q),[r,l]=s.useState(1),[n]=s.useState(1),h=s.useCallback(i=>{l(i),a(d=>d.map(c=>c.id===i?{...c,unread:0}:c))},[]),p=s.useMemo(()=>t.find(i=>i.id===r),[t,r]),g=s.useMemo(()=>t.reduce((i,d)=>i+d.unread,0),[t]);return e.jsxs("div",{className:"chat-app",children:[e.jsxs("header",{className:"app-header",children:[e.jsx("h1",{className:"app-title",children:e.jsx("span",{className:"title-gradient",children:"💬 CyberChat"})}),e.jsx("p",{className:"app-subtitle",children:"Real-time Chat với State Colocation"})]}),e.jsxs("div",{className:"app-chat-layout",children:[e.jsxs("div",{className:"sidebar-chatapp",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("h2",{className:"sidebar-title",children:"📁 Rooms"}),g>0&&e.jsx("div",{className:"total-unread",children:g})]}),e.jsx("div",{className:"rooms-list",children:t.map(i=>e.jsxs("div",{className:`room-item ${i.id===r?"active":""}`,onClick:()=>h(i.id),children:[e.jsxs("div",{className:"room-item-content",children:[e.jsx("div",{className:"room-item-name",children:i.name}),e.jsx("div",{className:"room-item-desc",children:i.description})]}),i.unread>0&&e.jsx("div",{className:"unread-badge",children:i.unread})]},i.id))}),e.jsxs("div",{className:"user-profile",children:[e.jsx("div",{className:"profile-avatar",style:{color:T[n].color},children:T[n].avatar}),e.jsxs("div",{className:"profile-info",children:[e.jsx("div",{className:"profile-name",children:T[n].name}),e.jsx("div",{className:"profile-status",children:"🟢 Online"})]})]})]}),e.jsx("div",{className:"main-chatapp",children:e.jsx(_,{roomId:r,currentUserId:n,roomName:p?.name||""},r)})]})]})}function Z(){return e.jsxs(N,{children:[e.jsx(N.Header,{order:3,title:"Real-time Chat với State Colocation"}),e.jsx(N.Description,{children:`
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

`}),e.jsx(N.Demo,{children:e.jsx(Y,{})}),e.jsx(N.Code,{children:`
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

    if (diff < 60000) return "Vừa xong";
    if (diff < 3600000) return \`\${Math.floor(diff / 60000)} phút trước\`;
    if (diff < 86400000)
      return date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
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
          <span className="title-gradient">💬 CyberChat</span>
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

`})]})}const J=t=>{const r={week:7,month:30,year:12}[t],l=[];for(let n=0;n<r;n++)l.push({label:t==="year"?`T${n+1}`:`${n+1}`,value:Math.floor(Math.random()*5e7)+1e7});return l},ee=()=>({total:Math.floor(Math.random()*1e4)+5e3,active:Math.floor(Math.random()*5e3)+2e3,new:Math.floor(Math.random()*500)+100,growth:(Math.random()*30+5).toFixed(1)}),te=()=>{const t=["pending","processing","completed","cancelled"],a=["iPhone 15","MacBook Pro","AirPods","iPad Air","Apple Watch"];return Array.from({length:10},(r,l)=>({id:`ORD${Date.now()-l*1e5}`,product:a[Math.floor(Math.random()*a.length)],customer:`Khách hàng ${l+1}`,amount:Math.floor(Math.random()*5e7)+1e6,status:t[Math.floor(Math.random()*t.length)],timestamp:Date.now()-Math.random()*864e5*7}))},ae=()=>[{name:"iPhone 15 Pro Max",icon:"📱"},{name:"MacBook Pro M3",icon:"💻"},{name:"AirPods Pro",icon:"🎧"},{name:"iPad Air M2",icon:"📱"},{name:"Apple Watch Ultra",icon:"⌚"}].map(a=>({...a,sales:Math.floor(Math.random()*1e3)+100,revenue:Math.floor(Math.random()*5e8)+5e7}));function se(){const[t,a]=s.useState("week"),[r,l]=s.useState([]),[n,h]=s.useState(!1);s.useEffect(()=>{h(!0);const i=setTimeout(()=>{l(J(t)),h(!1)},500);return()=>clearTimeout(i)},[t]);const p=s.useMemo(()=>{if(console.log("📊 Calculating sales stats..."),r.length===0)return{total:0,average:0,highest:0,growth:0};const i=r.reduce((x,b)=>x+b.value,0),d=i/r.length,c=Math.max(...r.map(x=>x.value)),v=r.length>1?((r[r.length-1].value-r[0].value)/r[0].value*100).toFixed(1):0;return{total:i,average:d,highest:c,growth:v}},[r]),g=i=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(i);return e.jsxs("div",{className:"widget sales-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"💰 Doanh thu"}),e.jsxs("div",{className:"period-selector",children:[e.jsx("button",{className:`period-btn ${t==="week"?"active":""}`,onClick:()=>a("week"),children:"Tuần"}),e.jsx("button",{className:`period-btn ${t==="month"?"active":""}`,onClick:()=>a("month"),children:"Tháng"}),e.jsx("button",{className:`period-btn ${t==="year"?"active":""}`,onClick:()=>a("year"),children:"Năm"})]})]}),n?e.jsxs("div",{className:"widget-loading",children:[e.jsx("div",{className:"spinner"}),e.jsx("p",{children:"Đang tải dữ liệu..."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Tổng"}),e.jsx("div",{className:"stat-value",children:g(p.total)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Trung bình"}),e.jsx("div",{className:"stat-value",children:g(p.average)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Cao nhất"}),e.jsx("div",{className:"stat-value",children:g(p.highest)})]}),e.jsxs("div",{className:"stat-mini",children:[e.jsx("div",{className:"stat-label",children:"Tăng trưởng"}),e.jsxs("div",{className:`stat-value ${p.growth>=0?"positive":"negative"}`,children:[p.growth>=0?"↗":"↘"," ",Math.abs(p.growth),"%"]})]})]}),e.jsx("div",{className:"chart-container",children:r.map((i,d)=>{const c=Math.max(...r.map(x=>x.value)),v=i.value/c*100;return e.jsxs("div",{className:"chart-bar-wrapper",children:[e.jsx("div",{className:"chart-bar",style:{height:`${v}%`},children:e.jsx("div",{className:"bar-tooltip",children:g(i.value)})}),e.jsx("div",{className:"chart-label",children:i.label})]},d)})})]})]})}function ie(){const[t,a]=s.useState(null),[r,l]=s.useState(!0),[n,h]=s.useState(0);s.useEffect(()=>{l(!0);const d=setTimeout(()=>{a(ee()),l(!1)},300);return()=>clearTimeout(d)},[n]);const p=s.useMemo(()=>t?t.total-t.active:0,[t]),g=s.useMemo(()=>t?(t.active/t.total*100).toFixed(1):0,[t]),i=()=>{h(d=>d+1)};return e.jsxs("div",{className:"widget user-stats-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"👥 Người dùng"}),e.jsx("button",{className:"refresh-btn",onClick:i,disabled:r,children:"🔄"})]}),r?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"user-stats-main",children:e.jsxs("div",{className:"main-stat",children:[e.jsx("div",{className:"main-stat-value",children:t.total.toLocaleString()}),e.jsx("div",{className:"main-stat-label",children:"Tổng người dùng"})]})}),e.jsxs("div",{className:"progress-section",children:[e.jsxs("div",{className:"progress-header",children:[e.jsx("span",{children:"Hoạt động"}),e.jsxs("span",{className:"progress-value",children:[g,"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${g}%`}})})]}),e.jsxs("div",{className:"user-stats-grid",children:[e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon active",children:"✅"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:t.active.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Hoạt động"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon inactive",children:"💤"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:p.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Không hoạt động"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon new",children:"🆕"}),e.jsxs("div",{className:"stat-info",children:[e.jsx("div",{className:"stat-value",children:t.new.toLocaleString()}),e.jsx("div",{className:"stat-label",children:"Mới (7 ngày)"})]})]}),e.jsxs("div",{className:"user-stat-item",children:[e.jsx("div",{className:"stat-icon growth",children:"📈"}),e.jsxs("div",{className:"stat-info",children:[e.jsxs("div",{className:"stat-value",children:["+",t.growth,"%"]}),e.jsx("div",{className:"stat-label",children:"Tăng trưởng"})]})]})]})]})]})}function ne(){const[t,a]=s.useState([]),[r,l]=s.useState(!0),[n,h]=s.useState("all");s.useEffect(()=>{l(!0);const c=setTimeout(()=>{a(te()),l(!1)},400);return()=>clearTimeout(c)},[]);const p=s.useMemo(()=>(console.log("🔄 Filtering orders..."),n==="all"?t:t.filter(c=>c.status===n)),[t,n]),g=s.useMemo(()=>{const c=t.length,v=t.filter(C=>C.status==="pending").length,x=t.filter(C=>C.status==="completed").length,b=t.filter(C=>C.status==="completed").reduce((C,M)=>C+M.amount,0);return{total:c,pending:v,completed:x,totalRevenue:b}},[t]),i=c=>{const v={pending:{label:"Chờ xử lý",icon:"⏳",class:"pending"},processing:{label:"Đang xử lý",icon:"⚙️",class:"processing"},completed:{label:"Hoàn thành",icon:"✅",class:"completed"},cancelled:{label:"Đã hủy",icon:"❌",class:"cancelled"}};return v[c]||v.pending},d=c=>{const v=new Date(c),b=new Date-v;return b<36e5?`${Math.floor(b/6e4)} phút trước`:b<864e5?`${Math.floor(b/36e5)} giờ trước`:`${Math.floor(b/864e5)} ngày trước`};return e.jsxs("div",{className:"widget orders-widget",children:[e.jsx("div",{className:"widget-header",children:e.jsx("h3",{className:"widget-title",children:"📦 Đơn hàng gần đây"})}),e.jsxs("div",{className:"order-stats",children:[e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Tổng:"}),e.jsx("span",{className:"stat-value",children:g.total})]}),e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Chờ:"}),e.jsx("span",{className:"stat-value pending",children:g.pending})]}),e.jsxs("div",{className:"order-stat",children:[e.jsx("span",{className:"stat-label",children:"Hoàn thành:"}),e.jsx("span",{className:"stat-value completed",children:g.completed})]})]}),e.jsx("div",{className:"filter-buttons",children:["all","pending","processing","completed","cancelled"].map(c=>e.jsx("button",{className:`filter-btn ${n===c?"active":""}`,onClick:()=>h(c),children:c==="all"?"Tất cả":i(c).label},c))}),r?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsx("div",{className:"orders-list",children:p.length===0?e.jsx("div",{className:"empty-state",children:e.jsx("p",{children:"Không có đơn hàng"})}):p.map(c=>{const v=i(c.status);return e.jsxs("div",{className:"order-item",children:[e.jsxs("div",{className:"order-main",children:[e.jsxs("div",{className:"order-id",children:["#",c.id]}),e.jsx("div",{className:"order-product",children:c.product}),e.jsx("div",{className:"order-customer",children:c.customer})]}),e.jsxs("div",{className:"order-details",children:[e.jsxs("div",{className:"order-amount",children:[c.amount.toLocaleString("vi-VN"),"đ"]}),e.jsxs("div",{className:`order-status ${v.class}`,children:[v.icon," ",v.label]})]}),e.jsx("div",{className:"order-time",children:d(c.timestamp)})]},c.id)})})]})}function re(){const[t,a]=s.useState([]),[r,l]=s.useState(!0),[n,h]=s.useState("sales");s.useEffect(()=>{l(!0);const i=setTimeout(()=>{a(ae()),l(!1)},350);return()=>clearTimeout(i)},[]);const p=s.useMemo(()=>(console.log("🔄 Sorting products..."),[...t].sort((i,d)=>n==="sales"?d.sales-i.sales:d.revenue-i.revenue)),[t,n]),g=s.useMemo(()=>p.length===0?0:Math.max(...n==="sales"?p.map(i=>i.sales):p.map(i=>i.revenue)),[p,n]);return e.jsxs("div",{className:"widget products-widget",children:[e.jsxs("div",{className:"widget-header",children:[e.jsx("h3",{className:"widget-title",children:"🏆 Sản phẩm bán chạy"}),e.jsxs("div",{className:"sort-selector",children:[e.jsx("button",{className:`sort-btn ${n==="sales"?"active":""}`,onClick:()=>h("sales"),children:"Số lượng"}),e.jsx("button",{className:`sort-btn ${n==="revenue"?"active":""}`,onClick:()=>h("revenue"),children:"Doanh thu"})]})]}),r?e.jsx("div",{className:"widget-loading",children:e.jsx("div",{className:"spinner"})}):e.jsx("div",{className:"products-list",children:p.map((i,d)=>{const v=(n==="sales"?i.sales:i.revenue)/g*100;return e.jsxs("div",{className:"product-item",children:[e.jsxs("div",{className:"product-rank",children:["#",d+1]}),e.jsx("div",{className:"product-icon",children:i.icon}),e.jsxs("div",{className:"product-info",children:[e.jsx("div",{className:"product-name",children:i.name}),e.jsx("div",{className:"product-bar",children:e.jsx("div",{className:"product-bar-fill",style:{width:`${v}%`}})}),e.jsxs("div",{className:"product-stats",children:[e.jsxs("span",{children:[i.sales.toLocaleString()," bán"]}),e.jsxs("span",{className:"product-revenue",children:[(i.revenue/1e6).toFixed(1),"M"]})]})]})]},d)})})]})}function oe(){const[t,a]=s.useState("grid"),[r,l]=s.useState("dark");return e.jsxs("div",{className:`dashboard ${r}`,children:[e.jsxs("header",{className:"dashboard-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{className:"dashboard-title",children:e.jsx("span",{className:"title-gradient",children:"📊 CyberDash"})}),e.jsx("p",{className:"dashboard-subtitle",children:"Analytics Dashboard với State Optimization"})]}),e.jsxs("div",{className:"header-controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("button",{className:`control-btn ${t==="grid"?"active":""}`,onClick:()=>a("grid"),title:"Grid Layout",children:"▦"}),e.jsx("button",{className:`control-btn ${t==="list"?"active":""}`,onClick:()=>a("list"),title:"List Layout",children:"☰"})]}),e.jsx("button",{className:"theme-toggle",onClick:()=>l(r==="dark"?"light":"dark"),children:r==="dark"?"☀️":"🌙"})]})]}),e.jsxs("div",{className:`widgets-container ${t}`,children:[e.jsx(se,{}),e.jsx(ie,{}),e.jsx(ne,{}),e.jsx(re,{})]})]})}function ce(){return e.jsxs(N,{children:[e.jsx(N.Header,{order:4,title:"Dashboard với Multiple Widgets"}),e.jsx(N.Description,{children:`
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

`}),e.jsx(N.Demo,{children:e.jsx(oe,{})}),e.jsx(N.Code,{children:`
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

`})]})}function le(){return e.jsx("div",{children:"FormWizard"})}function de(){return e.jsxs(N,{children:[e.jsx(N.Header,{order:5,title:"Form Wizard với Complex State (Challenge)"}),e.jsx(N.Description,{children:`
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

`}),e.jsx(N.Demo,{children:e.jsx(le,{})}),e.jsx(N.Code,{children:`


`})]})}const A={1:B,2:z,3:Z,4:ce,5:de},he=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(F,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 8"}),e.jsx("p",{className:"day-subtitle",children:"State Management Patterns"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Lifting State Up - Chia sẻ state giữa components"}),e.jsx("li",{children:"Derived State - Tính toán từ state/props"}),e.jsx("li",{children:"State Batching trong React 18"}),e.jsx("li",{children:"State Colocation - Đặt state đúng chỗ"}),e.jsx("li",{children:"State normalization patterns"}),e.jsx("li",{children:"Optimizing re-renders"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(A).map(t=>{const a=A[t];return a?e.jsx(a,{},t):null})})]});export{he as default};
