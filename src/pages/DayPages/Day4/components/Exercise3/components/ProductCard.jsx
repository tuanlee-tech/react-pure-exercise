export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <img
        src={"https://placehold.co/600x400?text=Product%20Image"}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p>
        Price: <strong>${product.price}</strong>
      </p>
      <p>{product.description}</p>
    </div>
  );
}
