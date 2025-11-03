export default function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20, // percent
    image: "https://placehold.co/600x400?text=Product%20Image",
  };

  // TODO:
  // 1. Hiển thị ảnh sản phẩm
  // 2. Hiển thị tên và giá (tính giá sau discount)
  // 3. Hiển thị rating và số reviews
  // 4. Hiển thị badge "In Stock" hoặc "Out of Stock" với màu khác nhau
  // 5. Hiển thị % discount nếu có
  // Object mapping cho trạng thái kho
  const stockStatus = {
    true: { text: "In Stock", className: "in-stock" },
    false: { text: "Out of Stock", className: "out-of-stock" },
  };
  // Tính giá sau giảm
  const discountedPrice = product.price * (1 - product.discount / 100);
  return (
    <div className="product-card">
      {/* 1. Ảnh sản phẩm */}
      <img src={product.image} alt={product.name} className="product-image" />

      {/* 2. Tên và Giá sau discount */}
      <h3 className="product-name">{product.name}</h3>
      <div className="product-price">
        <span className="price-discounted">
          {product.currency} {discountedPrice.toFixed(2)}
        </span>
        {product.discount > 0 && (
          <span className="price-original">{product.price.toFixed(2)}</span>
        )}
        {/* 3. Hiển thị rating và số reviews */}
        <div className="product-rating">
          <span className="rating-stars">
            {"⭐".repeat(Math.round(product.rating))}
          </span>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews-count">({product.reviews} reviews)</span>
        </div>
        {/* 4. Hiển thị badge */}
        <div
          className={`stock-status ${stockStatus[product.inStock]?.className}`}
        >
          {stockStatus[product.inStock]?.text}
        </div>
        {/*5. Hiển thị % discount nếu có */}
        {product.discount > 0 && (
          <div className="discount-badge">{`-${product.discount}%`}</div>
        )}
      </div>
    </div>
  );
}
