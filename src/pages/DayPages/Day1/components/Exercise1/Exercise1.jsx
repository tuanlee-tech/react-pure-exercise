import ExerciseCard from "../../../../../components/ExerciseCard";
import ProductCard from "./components/ProductCard";
import "./data/products";
import products from "./data/products";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="Product Card Component" />

      <ExerciseCard.Description>
        {`
Tạo component hiển thị thông tin sản phẩm:
---
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20, // percent
    image: "https://via.placeholder.com/200"
  };

  // TODO: 
  // 1. Hiển thị ảnh sản phẩm
  // 2. Hiển thị tên và giá (tính giá sau discount)
  // 3. Hiển thị rating và số reviews
  // 4. Hiển thị badge "In Stock" hoặc "Out of Stock"
  // 5. Hiển thị % discount nếu có
  
  return (
    <div className="product-card">
      {/* Your code here */}
    </div>
  );
}
---
Gợi ý:
- Giá sau giảm = price * (1 - discount/100)
- Format giá: toFixed(2)
- Dùng emoji cho rating: ⭐
`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="grid grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="grid-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card } from "@ui";
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Headphones",
  };

  const stockStatus = {
    true: "in",
    false: "out",
  };

  const discountedPrice = product.price * (1 - product.discount / 100);
  const roundedRating = Math.round(product.rating);

  return (
    <Card className="product-card-modern">
      {/* Image + Badges */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-image-overlay" />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="discount-badge-premium">−{product.discount}%</div>
        )}

        {/* Stock Dot */}
        <div className={\`stock-dot \${product.inStock ? "" : "out"}\`} />
      </div>

      <Card.Content style={{ padding: "24px" }}>
        {/* Name */}
        <h3 className="product-name-gradient">{product.name}</h3>

        {/* Price */}
        <div className="product-price-wrapper">
          <span className="price-discounted">
            {product.currency} {discountedPrice.toFixed(2)}
          </span>
          {product.discount > 0 && (
            <span className="price-original">
              {product.currency} {product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="product-rating-modern">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < roundedRating ? "filled" : "empty"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews-count">• {product.reviews} đánh giá</span>
        </div>

        {/* Stock Status */}
        <div className={\`stock-pill \${stockStatus[product.inStock]}\`}>
          <span className="stock-pill-dot" />
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="lg"
          className="product-cta-button"
          disabled={!product.inStock}
        >
          {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
        </Button>
      </Card.Content>
    </Card>
  );
}
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
