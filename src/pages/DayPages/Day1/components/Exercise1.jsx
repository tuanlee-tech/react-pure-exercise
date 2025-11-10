import ExerciseCard from "../../../../components/ExerciseCard";
import { Card } from "@ui";
import "@ui/global.css";
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
        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 8 }}>
          <ProductCard />
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
  function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Product%20Image",
  };

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

      {/* 5. Badge % discount (nếu có) */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Tên sản phẩm */}
      <h3 className="product-name">{product.name}</h3>

      {/* 2. Giá */}
      <div className="product-price">
        <span className="price-discounted">
          {product.currency} {discountedPrice.toFixed(2)}
        </span>
        {product.discount > 0 && (
          <span className="price-original">
            {product.currency} {product.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* 3. Rating với emoji */}
      <div className="product-rating">
        <span className="rating-stars">
          {"⭐".repeat(Math.round(product.rating))}
        </span>
        <span className="rating-value">{product.rating}</span>
        <span className="reviews-count"> ({product.reviews} reviews)</span>
      </div>

      {/* 4. Badge trạng thái kho - dùng object mapping */}
       <div className={\`stock-status \${stockStatus[product.inStock].className}\`}>
    {stockStatus[product.inStock].text}
  </div>
    </div>
  );
}      
            `}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}

function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Product%20Image",
  };

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

      {/* 5. Badge % discount (nếu có) */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Tên sản phẩm */}
      <h3 className="product-name">{product.name}</h3>

      {/* 2. Giá */}
      <div className="product-price">
        <span className="price-discounted">
          {product.currency} {discountedPrice.toFixed(2)}
        </span>
        {product.discount > 0 && (
          <span className="price-original">
            {product.currency} {product.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* 3. Rating với emoji */}
      <div className="product-rating">
        <span className="rating-stars">
          {"⭐".repeat(Math.round(product.rating))}
        </span>
        <span className="rating-value">{product.rating}</span>
        <span className="reviews-count"> ({product.reviews} reviews)</span>
      </div>

      {/* 4. Badge trạng thái kho - dùng object mapping */}
      <div className={`stock-status ${stockStatus[product.inStock].className}`}>
        {stockStatus[product.inStock].text}
      </div>
    </div>
  );
}
