import { CATEGORIES } from "../data/data";

/**
 * ProductList Component
 * Hiển thị danh sách sản phẩm dạng grid
 * Props:
 * - products: Array các sản phẩm đã được filter
 */
export function ProductList({ products }) {
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
      {products.map((product) => (
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
              {CATEGORIES.find((c) => c.value === product.category)?.label ||
                product.category}
            </div>

            {/* Rating */}
            <div className="product-rating">
              <span className="rating-stars">
                {"⭐".repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && "✨"}
              </span>
              <span className="rating-value">{product.rating.toFixed(1)}</span>
            </div>

            {/* Price */}
            <div className="product-price">
              ${product.price.toLocaleString()}
            </div>

            {/* Action Button */}
            <button className="btn-add-cart" disabled={!product.inStock}>
              {product.inStock ? "🛒 Thêm vào giỏ" : "❌ Hết hàng"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
