// ProductCard.jsx

import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import Rating from "./Rating";

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
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
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

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart?.(product)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>

      {/* Out of Stock Overlay */}
      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </div>
  );
}

export default ProductCard;
