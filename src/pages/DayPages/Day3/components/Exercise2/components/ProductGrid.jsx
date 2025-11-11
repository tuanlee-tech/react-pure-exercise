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
    <Card className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
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
    <div className={`rating rating-${size}`}>
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
