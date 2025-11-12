import ExerciseCard from "../../../../../components/ExerciseCard";
import InfiniteScrollList from "./components/InfiniteScrollList";
import "./styles.css";

export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={5}
        title="Infinite Scroll List (Container/Presentational)"
      />

      <ExerciseCard.Description>
        {`
// TODO: Presentational Component
function List({ items, loading, hasMore, observerRef }) {
  // TODO:
  // - Render items
  // - Loading indicator
  // - Observer element for intersection
}

// TODO: Container Component
function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  // TODO:
  // - Manage items state
  // - Intersection Observer setup
  // - Load more when reaching bottom
  // - Handle loading state
  
  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}

// Usage
<InfiniteScrollList
  fetchItems={async (page, limit = 2) => {
    const res = await fetch(
      \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${limit}\`
    );
    return await res.json();
  }}
/>

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <InfiniteScrollList
          fetchItems={async (page, limit = 2) => {
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
            );
            return await res.json();
          }}
        />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useCallback, useEffect, useRef, useState } from "react";

// === Presentational Component ===
function List({ items, loading, hasMore, observerRef }) {
  return (
    <div className="infinite-list-container">
      {items.map((item, index) => (
        <div key={index} className="infinite-list-item">
          <h3 className="infinite-list-item-title">
             {index + 1}. {item.title || \`Item \${item.id}\`}
          </h3>
          <p className="infinite-list-item-body">
            {item.body || "Nội dung mẫu..."}
          </p>
        </div>
      ))}

      {loading && items.length === 0 && (
        <>
          {[...Array(2)].map((_, i) => (
            <div key={\`skeleton-\${i}\`} className="infinite-skeleton">
              <div className="infinite-skeleton-title"></div>
              <div className="infinite-skeleton-body"></div>
              <div className="infinite-skeleton-body"></div>
            </div>
          ))}
        </>
      )}

      {loading && items.length > 0 && (
        <div className="infinite-loading">Đang tải thêm...</div>
      )}

      {hasMore && !loading && (
        <div ref={observerRef} className="infinite-observer" />
      )}

      {!hasMore && items.length > 0 && (
        <div className="infinite-end">Đã hết dữ liệu (tối đa 10 bài)</div>
      )}
    </div>
  );
}

// === Container Component ===
export default function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);

  // Giới hạn: tối đa 10 post → 5 lần fetch (2 post/lần)
  const MAX_POSTS = 10;
  const POSTS_PER_PAGE = 2;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || items.length >= MAX_POSTS) return;

    setLoading(true);
    try {
      const newItems = await fetchItems(page + 1, POSTS_PER_PAGE);
      if (newItems && newItems.length > 0) {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);

        // Dừng khi đạt 10 bài hoặc không còn dữ liệu
        const totalLoaded = items.length + newItems.length;
        setHasMore(
          totalLoaded < MAX_POSTS && newItems.length === POSTS_PER_PAGE
        );
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, items.length, fetchItems]);

  // Setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loading, loadMore]);

  // Tải lần đầu nếu chưa có data
  useEffect(() => {
    if (initialItems.length === 0 && page === 1 && items.length === 0) {
      loadMore();
    }
  }, [initialItems.length, page, items.length, loadMore]);

  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}
`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
