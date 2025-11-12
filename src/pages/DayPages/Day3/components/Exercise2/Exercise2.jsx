import ExerciseCard from "../../../../../components/ExerciseCard";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/products";
import "./styles.css";
export default function Exercise2() {
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart !`);
  };
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={2} title="ProductGrid" />

      <ExerciseCard.Description>
        {`
// ProductGrid.jsx
function ProductGrid({ products, onAddToCart }) {
  // TODO:
  // Render grid of ProductCard components
  // Pass onAddToCart down
  
  return (
    <div className="product-grid">
      {/* Your code */}
    </div>
  );
}

// ProductCard.jsx
function ProductCard({ product, onAddToCart }) {
  // Props: id, name, price, image, rating, inStock, discount
  
  // TODO:
  // - Product image
  // - Product name
  // - Price (hiển thị giá cũ nếu có discount)
  // - Rating stars
  // - Add to Cart button (disabled nếu out of stock)
  // - Discount badge nếu có
  // - Out of Stock overlay nếu !inStock
  
  return (
    <div className="product-card">
      {/* Your code */}
    </div>
  );
}

// ProductImage.jsx
function ProductImage({ src, alt, discount, inStock }) {
  // TODO:
  // - Image với fallback
  // - Discount badge overlay
  // - Out of stock overlay
  
  return (
    <div className="product-image">
      {/* Your code */}
    </div>
  );
}

// ProductPrice.jsx
function ProductPrice({ price, originalPrice, currency = 'USD' }) {
  // TODO:
  // - Current price (large, bold)
  // - Original price (strikethrough) nếu có discount
  // - Savings amount
  
  return (
    <div className="product-price">
      {/* Your code */}
    </div>
  );
}

// Rating.jsx
function Rating({ rating, reviews, size = 'medium' }) {
  // TODO:
  // - Star icons (filled/half/empty)
  // - Rating number (4.5)
  // - Reviews count (128 reviews)
  
  return (
    <div className="rating">
      {/* Your code */}
    </div>
  );
}



`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Card, Button } from "@ui";
// ProductGrid
export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// ProductCard
function ProductCard({ product, onAddToCart }) {
  const {
    name,
    price,
    image,
    rating,
    reviews,
    inStock = true,
    discount = 0,
  } = product;

  const originalPrice = discount > 0 ? price / (1 - discount / 100) : null;

  return (
    <Card className={\`product-card \${!inStock ? "out-of-stock" : ""}\`}>
      <ProductImage
        src={image}
        alt={name}
        discount={discount}
        inStock={inStock}
      />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        <Rating rating={rating} reviews={reviews} />

        <ProductPrice
          price={price}
          originalPrice={originalPrice}
          currency="USD"
        />

        <Button
          variant="primary"
          size="md"
          className="add-to-cart-btn"
          onClick={() => onAddToCart?.(product)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </Card>
  );
}
// ProductImage
function ProductImage({ src, alt, discount = 0, inStock = true }) {
  return (
    <div className="product-image-wrapper">
      <img
        src={src || "https://via.placeholder.com/300"}
        alt={alt}
        className="product-img"
      />

      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </div>
  );
}
//ProductPrice
function ProductPrice({ price, originalPrice, currency = "USD" }) {
  const savings = originalPrice ? originalPrice - price : 0;

  return (
    <div className="product-price">
      <span className="current-price">
        {currency} {price.toFixed(2)}
      </span>

      {originalPrice && (
        <>
          <span className="original-price">
            {currency} {originalPrice.toFixed(2)}
          </span>
          <span className="savings">
            Save {currency} {savings.toFixed(2)}
          </span>
        </>
      )}
    </div>
  );
}
//Rating
function Rating({ rating = 0, reviews = 0, size = "medium" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={\`rating rating-\${size}\`}>
      <div className="stars">
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯪"}
        {"☆".repeat(emptyStars)}
      </div>

      <span className="rating-value">{rating.toFixed(1)}</span>
      {reviews > 0 && (
        <span className="reviews-count">({reviews} reviews)</span>
      )}
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
