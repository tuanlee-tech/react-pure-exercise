import { useMemo, useState } from "react";
import { INITIAL_PRODUCTS } from "../data/data";
import { ProductFilters } from "./ProductFilters";
import { ProductList } from "./ProductList";
import ProductStats from "./ProductStats";

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
    category: "all",
    minPrice: "",
    maxPrice: "",
    minRating: 0,
    inStockOnly: false,
    search: "",
  });

  // ✅ Derived State - Filtered products với useMemo
  // Chỉ re-calculate khi products hoặc filters thay đổi
  const filteredProducts = useMemo(() => {
    console.log("🔄 Filtering products...");

    return products.filter((product) => {
      // Filter by category
      if (filters.category !== "all" && product.category !== filters.category) {
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
          <span className="title-gradient">Product Catalog</span>
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
          <ProductFilters filters={filters} onFilterChange={setFilters} />

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
