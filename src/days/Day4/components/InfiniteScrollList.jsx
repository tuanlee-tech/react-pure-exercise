import { useCallback, useEffect, useRef, useState } from "react";

// === Presentational Component ===
function List({ items, loading, hasMore, observerRef }) {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      {/* Danh sách items */}
      {items.map((item, index) => (
        <div
          key={item.id || index}
          style={{
            padding: "1rem",
            margin: "0.5rem 0",
            background: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem" }}>
            {item.title || `Item ${item.id}`}
          </h3>
          <p style={{ margin: 0, color: "#6c757d" }}>
            {item.body || "Nội dung mẫu..."}
          </p>
        </div>
      ))}

      {/* Loading khi đang tải thêm */}
      {loading && (
        <div
          style={{ textAlign: "center", padding: "1.5rem", color: "#007bff" }}
        >
          <div>Đang tải thêm...</div>
        </div>
      )}

      {/* Observer element - ẩn nhưng kích hoạt khi cuộn tới */}
      {hasMore && !loading && (
        <div
          ref={observerRef}
          style={{ height: "20px", background: "transparent" }}
        />
      )}

      {/* Hết dữ liệu */}
      {!hasMore && items.length > 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            color: "#6c757d",
            fontStyle: "italic",
          }}
        >
          Đã hết dữ liệu
        </div>
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

  // Gọi API để lấy thêm dữ liệu
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newItems = await fetchItems(page + 1);
      if (newItems && newItems.length > 0) {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
        setHasMore(newItems.length >= 10); // Giả sử 10 là limit
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, fetchItems]);

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
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, loading, loadMore]);

  // Tải dữ liệu ban đầu (nếu cần)
  useEffect(() => {
    if (initialItems.length === 0 && page === 1) {
      loadMore();
    }
  }, [initialItems.length, page, loadMore]);

  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}
