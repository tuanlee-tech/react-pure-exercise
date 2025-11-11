import ExerciseCard from "../../../../../components/ExerciseCard";
import ProductFilter from "./components/ProductFilter";
import "./styles.css";
export default function Exercise2() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={2} title="Product Filter" />

      <ExerciseCard.Description>
        {`
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

  // TODO:
  // 1. Thêm filter by category (All, Electronics, Furniture, Stationery)
  // 2. Thêm filter by stock (All, In Stock, Out of Stock)
  // 3. Thêm filter by price range (<$50, $50-$500, >$500)
  // 4. Hiển thị "Out of Stock" badge cho sản phẩm hết hàng
  // 5. Hiển thị rating với stars (⭐)
  // 6. Nếu không có sản phẩm nào match filters, hiển thị "No products found"
  // 7. Hiển thị số lượng products hiện tại / tổng số
  // 8. Sort options: Price (Low to High), Price (High to Low), Rating

  return <div className="product-filter">{/* Your code here */}</div>;
}


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <ProductFilter />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Card } from "@ui";
import { useState } from "react";

function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
      icon: "💻",
    },
    {
      id: 2,
      name: "Ghế văn phòng",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
      icon: "🪑",
    },
    {
      id: 3,
      name: "Đèn bàn học",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
      icon: "💡",
    },
    {
      id: 4,
      name: "Chuột không dây",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
      icon: "🖱️",
    },
    {
      id: 5,
      name: "Sổ tay",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
      icon: "📒",
    },
  ];

  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("none");

  const filteredProducts = products
    .filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (stock === "in" && !p.inStock) return false;
      if (stock === "out" && p.inStock) return false;
      if (priceRange === "low" && p.price >= 50) return false;
      if (priceRange === "mid" && (p.price < 50 || p.price > 500)) return false;
      if (priceRange === "high" && p.price <= 500) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-filter">
      {/* Filter Bar */}
      <Card className="filter-bar">
        <select
          className="custom-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Tất cả danh mục</option>
          <option value="electronics">Điện tử</option>
          <option value="furniture">Nội thất</option>
          <option value="stationery">Văn phòng phẩm</option>
        </select>

        <select
          className="custom-select"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value="all">Tất cả kho</option>
          <option value="in">Còn hàng</option>
          <option value="out">Hết hàng</option>
        </select>

        <select
          className="custom-select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">Tất cả giá</option>
          <option value="low">Dưới 50$</option>
          <option value="mid">50$ - 500$</option>
          <option value="high">Trên 500$</option>
        </select>

        <select
          className="custom-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Không sắp xếp</option>
          <option value="price-low">Giá tăng dần</option>
          <option value="price-high">Giá giảm dần</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </Card>

      {/* Product Count */}
      <div className="product-count-display">
        Hiển thị {filteredProducts.length} / {products.length} sản phẩm
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">Không tìm thấy sản phẩm nào</div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-item-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-img">{product.icon}</p>
              <div className="product-price">\${product.price}</div>
              <div className="product-rating-stars">
                {"★".repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 && "⯪"}
              </div>

              {!product.inStock && (
                <span className="out-of-stock-badge">Hết hàng</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductFilter;


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
