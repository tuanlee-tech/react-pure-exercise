// Rating.jsx
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

export default Rating;
