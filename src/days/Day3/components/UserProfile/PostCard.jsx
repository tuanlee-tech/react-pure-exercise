// PostCard.jsx
function PostCard({ post }) {
  const { content, image, likes, comments, timestamp } = post;

  return (
    <div className="post-card">
      {image && <img src={image} alt="Post" className="post-image" />}

      <div className="post-content">
        <p>{content}</p>

        <div className="post-actions">
          <button className="action-btn">Heart {likes}</button>
          <button className="action-btn">Comment {comments}</button>
          <button className="action-btn">Share</button>
        </div>

        <div className="post-timestamp">{timestamp}</div>
      </div>
    </div>
  );
}

export default PostCard;
