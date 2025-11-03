import React, { useState } from "react";

function BlogPosts() {
  const initialPosts = [
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

  // State
  const [posts] = useState(initialPosts); // Giả lập, không thay đổi
  const [selectedTag, setSelectedTag] = useState(null);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(2); // Bắt đầu với 2, simulate pagination

  // Filter & Sort
  const filteredPosts = posts
    .filter((p) => {
      // 4. Filter by tag
      if (selectedTag && !p.tags.includes(selectedTag)) return false;
      // 7. Search by title
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => {
      // 6. Sort options
      if (sort === "views") return b.views - a.views;
      if (sort === "likes") return b.likes - a.likes;
      if (sort === "latest") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  // Visible posts cho pagination
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  // Reset filters
  const resetFilters = () => {
    setSelectedTag(null);
    setSearch("");
    setVisibleCount(2);
  };

  // Load more
  const loadMore = () => {
    setVisibleCount((prev) => prev + 2); // Tăng 2 mỗi lần
  };

  return (
    <div className="blog-posts">
      {/* Controls */}
      <div className="controls">
        {/* 7. Search input */}
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* 6. Sort select */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort-select"
        >
          <option value="latest">Latest</option>
          <option value="views">Most Viewed</option>
          <option value="likes">Most Liked</option>
        </select>

        {/* Current tag filter */}
        {selectedTag && (
          <span className="current-tag">
            Filtering by: {selectedTag}
            <button onClick={() => setSelectedTag(null)}>Clear</button>
          </span>
        )}
      </div>

      {/* 9. Total count */}
      <div className="results-count">
        {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} found
      </div>

      {/* 8. No results */}
      {filteredPosts.length === 0 ? (
        <div className="no-posts">
          No posts found
          <button onClick={resetFilters}>Reset filters</button>
        </div>
      ) : (
        <>
          {/* 1. Render list with key */}
          <ul className="post-list">
            {visiblePosts.map((post) => (
              <li
                key={post.id}
                className={`post-item ${post.featured ? "featured" : ""}`}
              >
                {/* 2. Featured icon */}
                {post.featured && <span className="featured-icon">⭐</span>}

                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  By {post.author} on {post.date}
                </div>

                {/* 3. Tags as badges, 4. Clickable */}
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-badge"
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 5. Views & Likes with icons */}
                <div className="post-stats">
                  <span>👁️ {post.views}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* 10. Load more */}
          {visibleCount < filteredPosts.length && (
            <button onClick={loadMore} className="load-more">
              Load more
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default BlogPosts;
