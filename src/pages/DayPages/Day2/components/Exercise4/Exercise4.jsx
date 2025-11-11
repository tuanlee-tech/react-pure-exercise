import ExerciseCard from "../../../../../components/ExerciseCard";
import BlogPosts from "./components/BlogPosts";
import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Blog Posts with Tags (Challenge)" />

      <ExerciseCard.Description>
        {`
function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  // TODO:
  // 1. Render posts với key đúng
  // 2. Featured posts có border vàng và icon ⭐
  // 3. Render tags dưới dạng badges (clickable)
  // 4. Click vào tag để filter posts có tag đó
  // 5. Hiển thị views và likes với icons (👁️ và ❤️)
  // 6. Sort options: Latest, Most Viewed, Most Liked
  // 7. Search by title
  // 8. Nếu filter/search không có kết quả: "No posts found" với button reset
  // 9. Hiển thị total results count
  // 10. "Load more" button (giả lập pagination)

  return <div className="blog-posts">{/* Your code here */}</div>;
}
`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <BlogPosts />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card, Input, Select } from "@ui";
import { useState } from "react";

function BlogPosts() {
  const initialPosts = [
    {
      id: 1,
      title: "Bắt đầu với React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Kỹ thuật CSS nâng cao",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Thực hành tốt nhất với Node.js",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  const [posts] = useState(initialPosts);
  const [selectedTag, setSelectedTag] = useState(null);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredPosts = posts
    .filter((p) => {
      if (selectedTag && !p.tags.includes(selectedTag)) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "views") return b.views - a.views;
      if (sort === "likes") return b.likes - a.likes;
      if (sort === "latest") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedTag(null);
    setSearch("");
    setVisibleCount(2);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, filteredPosts.length));
  };

  return (
    <div className="blog-posts">
      {/* Controls */}
      <Card className="blog-controls">
        <Input
          placeholder="Tìm kiếm theo tiêu đề...."
          icon="🔍"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          options={[
            { value: "latest", label: "Mới nhất" },
            { value: "views", label: "Xem nhiều nhất" },
            { value: "likes", label: "Thích nhiều nhất" },
          ]}
        />

        {selectedTag && (
          <div className="current-tag">
            Lọc theo: {selectedTag}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              Clear
            </Button>
          </div>
        )}
      </Card>

      {/* Results Count */}
      <div className="results-count">
        Tìm thấy {filteredPosts.length} bài viết
      </div>

      {/* Posts */}
      {filteredPosts.length === 0 ? (
        <div className="no-posts">
          <p>Không tìm thấy bài viết nào</p>
          <Button
            variant="primary"
            size="sm"
            onClick={resetFilters}
            style={{ marginTop: "16px" }}
          >
            Đặt lại bộ lọc
          </Button>
        </div>
      ) : (
        <>
          <ul className="post-list">
            {visiblePosts.map((post) => (
              <Card
                key={post.id}
                className={\`post-item \${post.featured ? "featured" : ""}\`}
              >
                {post.featured && <span className="featured-icon">⭐</span>}
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  Bởi {post.author} •{" "}
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </div>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-badge"
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="post-stats">
                  <span>👁️ {post.views.toLocaleString()}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </Card>
            ))}
          </ul>

          {visibleCount < filteredPosts.length && (
            <Button
              variant="primary"
              size="lg"
              onClick={loadMore}
              className="load-more-btn"
            >
              Xem thêm ({filteredPosts.length - visibleCount} bài còn lại)
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default BlogPosts;


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
