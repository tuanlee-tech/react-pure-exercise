// ProductImage.jsx
function ProductImage({ src, alt, discount = 0, inStock = true }) {
  return (
    <div className="product-image-wrapper">
      <img
        src={src || "https://via.placeholder.com/300"}
        alt={alt}
        className="product-img"
      />

      {/* Discount Badge */}
      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      {/* Out of Stock Overlay (nếu cần) */}
      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </div>
  );
}

export default ProductImage;
