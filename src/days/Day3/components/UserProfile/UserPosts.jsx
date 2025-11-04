import PostCard from "./PostCard";

export default function UserPosts({ posts = [] }) {
  if (posts.length === 0) {
    return (
      <div className="user-posts">
        <p className="empty-state">No posts yet.</p>
      </div>
    );
  }
  return (
    <div className="user-posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
