import ExerciseCard from "../../../../../components/ExerciseCard";
import InfiniteScrollList from "./components/InfiniteScrollList";
import "./styles.css";
export default function Exercise2() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={2} title="Infinite Scroll List" />

      <ExerciseCard.Description>
        {`
// TODO: Implement infinite scroll

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);

  // TODO: Effect để fetch data
  useEffect(() => {
    // Fetch items for current page
    // Append to existing items
    // Set hasMore based on response
  }, [page]);

  // TODO: Intersection Observer cho infinite scroll
  useEffect(() => {
    // Setup IntersectionObserver
    // Khi user scroll đến bottom → load more (setPage)
    // Cleanup observer
  }, [loading, hasMore]);

  // TODO: Features
  // - Load 20 items per page
  // - Show loading spinner khi fetch
  // - "No more items" message khi hết
  // - Smooth scrolling
  // - Error handling

  return (
    <div className="infinite-scroll-list">
      {items.map((item,index) => (
        <div key={item.id} className="item">
          {/* Render item */}
        </div>
      ))}
      
      {loading && <div className="loading">Đang tải...</div>}
      
      {!hasMore && <div className="end-message">Hết rồi!</div>}
      
      {/* Observer target */}
      <div ref={observerTarget} />
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <InfiniteScrollList />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useEffect, useRef, useState } from "react";

// Mock API to fetch items
const fetchItems = async (page, perPage = 20) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Simulate data with pagination
  const totalItems = 100; // Total available items
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (start >= totalItems) {
    return { items: [], hasMore: false };
  }

  const items = [];
  for (let i = start; i < Math.min(end, totalItems); i++) {
    items.push({
      id: i + 1,
      title: \`Item #\${i + 1}\`,
      description: \`This is the description for item \${
        i + 1
      }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\`,
      image: \`https://picsum.photos/id/\${i + 1}/400/300\`,
      category: ["Technology", "Design", "Business", "Science", "Art"][i % 5],
      date: new Date(
        Date.now() - Math.random() * 10000000000
      ).toLocaleDateString(),
      views: Math.floor(Math.random() * 10000),
      likes: Math.floor(Math.random() * 1000),
    });
  }

  return {
    items,
    hasMore: end < totalItems,
  };
};

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const observerTarget = useRef(null);

  // Fetch data when page changes
  useEffect(() => {
    const loadItems = async () => {
      if (!hasMore) return;

      try {
        setLoading(true);
        setError(null);

        const result = await fetchItems(page);

        setItems((prevItems) => [...prevItems, ...result.items]);
        setHasMore(result.hasMore);
        setLoading(false);
      } catch (err) {
        setError("Failed to load items. Please try again." + err);
        setLoading(false);
      }
    };

    loadItems();
  }, [page, hasMore]);

  // Setup Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the target element is visible and we're not loading
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null, // viewport
        rootMargin: "100px", // Start loading 100px before reaching the target
        threshold: 0.1,
      }
    );

    const currentTarget = observerTarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    // Cleanup
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loading, hasMore]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reset list
  const handleReset = () => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setError(null);
    scrollToTop();
  };

  return (
    <div className="infinite-scroll-app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <div className="header-content">
            <h1 className="header-title">📜 Infinite Scroll</h1>
            <p className="header-subtitle">
              Automatically loads more items as you scroll down
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-badge">
              <span className="stat-label">Loaded:</span>
              <span className="stat-value">{items.length}</span>
            </div>
            <div className="stat-badge">
              <span className="stat-label">Page:</span>
              <span className="stat-value">{page}</span>
            </div>
            {items.length > 0 && (
              <button onClick={handleReset} className="btn-reset">
                🔄 Reset
              </button>
            )}
          </div>
        </div>

        {/* Items Grid */}
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="item-image"
                  loading="lazy"
                />
                <div className="item-category">{item.category}</div>
              </div>

              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>

                <div className="item-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span className="meta-text">{item.date}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👁️</span>
                    <span className="meta-text">
                      {item.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">❤️</span>
                    <span className="meta-text">
                      {item.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading more items...</p>
            <p className="loading-subtext">Page {page + 1}</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-state">
            <span className="error-icon">⚠️</span>
            <p className="error-text">{error}</p>
            <button onClick={() => setPage(page)} className="btn-retry">
              Try Again
            </button>
          </div>
        )}

        {/* End Message */}
        {!hasMore && items.length > 0 && (
          <div className="end-message">
            <div className="end-icon">🎉</div>
            <h3 className="end-title">You've reached the end!</h3>
            <p className="end-text">You've loaded all {items.length} items</p>
            <button onClick={scrollToTop} className="btn-scroll-top">
              ⬆️ Back to Top
            </button>
          </div>
        )}

        {/* Observer Target */}
        <div ref={observerTarget} className="observer-target"></div>

        {/* Scroll to Top Button (appears after scrolling) */}
        {items.length > 10 && (
          <button
            onClick={scrollToTop}
            className="floating-scroll-top"
            title="Scroll to top"
          >
            ⬆️
          </button>
        )}
      </div>
    </div>
  );
}

export default InfiniteScrollList;

---
// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Infinite Scroll - Tự động load thêm items khi scroll đến cuối
// Intersection Observer API - Phát hiện khi user scroll đến target element
// Pagination - Load 20 items mỗi page
// Lazy Loading Images - Images load khi cần thiết
// Total 100 items - Có điểm kết thúc rõ ràng

// 🎨 UI/UX:

// Sticky Header - Header dính ở top với stats (items loaded, page number)
// Item Cards - Beautiful cards với image, title, description, metadata
// Loading Spinner - Smooth loading animation khi fetch data
// Error Handling - Error state với retry button
// End Message - "You've reached the end!" với celebration icon
// Floating Scroll Top - FAB button xuất hiện sau 10 items
// Reset Button - Reset về trang đầu
// Smooth Animations - Fade-in-up cho items mới

// 🔧 useEffect Usage:

// Fetch items khi page thay đổi:

// jsxuseEffect(() => {
//   // Load items for current page
//   // Append to existing items
// }, [page]);

// Intersection Observer setup:

// jsxuseEffect(() => {
//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting && !loading && hasMore) {
//       setPage(prevPage => prevPage + 1);
//     }
//   }, { rootMargin: '100px' }); // Load 100px trước
  
//   // Cleanup observer
//   return () => observer.unobserve(target);
// }, [loading, hasMore]);
// 💡 Highlights:

// Race condition prevention - Check loading và hasMore trước khi load
// Memory leak prevention - Proper cleanup của observer
// Performance optimization - rootMargin 100px để preload
// Smooth UX - Items append, không replace
// Visual feedback - Loading, error, end states rõ ràng
// Responsive design - Works great on mobile

// 📊 Data Flow:

// User scroll xuống
// Observer trigger khi target visible
// setPage(page + 1)
// useEffect fetch data
// Append items vào list
// Process lặp lại

// 🎮 Test Features:

// Scroll xuống để load thêm items
// Click floating button để scroll lên top
// Đợi load 100 items để thấy end message
// Click Reset để restart
// Xem smooth animations khi items load
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
