export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={"https://placehold.co/600x400?text=Product%20Image"}
        alt={product.name}
        className="product-image"
      />
      <h3 style={{ margin: "0 0 12px" }}>{product.name}</h3>
      <p style={{ margin: "0 0 8px", color: "#555" }}>
        Price: <strong>${product.price}</strong>
      </p>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#777" }}>
        {product.description}
      </p>
    </div>
  );
}
