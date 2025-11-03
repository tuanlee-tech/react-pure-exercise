import React, { useState } from "react";

function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Office Chair",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Desk Lamp",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Notebook",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
    },
  ];

  // State cho filters & sort
  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("none");

  // Hàm lọc sản phẩm
  const filteredProducts = products
    .filter((p) => {
      // 1. Filter category
      if (category !== "all" && p.category !== category) return false;
      // 2. Filter stock
      if (stock === "in" && !p.inStock) return false;
      if (stock === "out" && p.inStock) return false;
      // 3. Filter price range
      if (priceRange === "low" && p.price >= 50) return false;
      if (priceRange === "mid" && (p.price < 50 || p.price > 500)) return false;
      if (priceRange === "high" && p.price <= 500) return false;
      return true;
    })
    // 8. Sort
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-filter">
      {/* Filters */}
      <div className="filters">
        {/* 1. Category filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="stationery">Stationery</option>
        </select>

        {/* 2. Stock filter */}
        <select value={stock} onChange={(e) => setStock(e.target.value)}>
          <option value="all">All Stock</option>
          <option value="in">In Stock</option>
          <option value="out">Out of Stock</option>
        </select>

        {/* 3. Price range filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="low">&lt;$50</option>
          <option value="mid">$50-$500</option>
          <option value="high">&gt;$500</option>
        </select>

        {/* 8. Sort options */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">No Sort</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>

      {/* 7. Số lượng products */}
      <div className="product-count">
        Showing {filteredProducts.length} / {products.length} products
      </div>

      {/* List products */}
      {filteredProducts.length === 0 ? (
        // 6. Empty state
        <div className="no-products">No products found</div>
      ) : (
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>

              {/* 5. Rating stars */}
              <span className="product-rating">
                {"⭐".repeat(Math.floor(product.rating))}
              </span>

              {/* 4. Out of Stock badge */}
              {!product.inStock && (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductFilter;
