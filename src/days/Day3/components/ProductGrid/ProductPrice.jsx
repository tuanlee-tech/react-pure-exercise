// ProductPrice.jsx
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

export default ProductPrice;
