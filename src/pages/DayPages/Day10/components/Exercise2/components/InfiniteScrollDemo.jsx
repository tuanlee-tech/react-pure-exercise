import { useState } from "react";
import VirtualScrollList from "./VirtualScrollList";

// 4️⃣ Demo App với Infinite Scroll
export default function InfiniteScrollDemo() {
  const [items, setItems] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      title: `Item ${i}`,
      description: `Description for item ${i}`,
      timestamp: new Date(Date.now() - i * 60000).toISOString(),
    }))
  );

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Simulate API call
  const fetchMore = async () => {
    console.log("Fetching more items...");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newItems = Array.from({ length: 20 }, (_, i) => {
      const id = items.length + i;
      return {
        id,
        title: `Item ${id}`,
        description: `Description for item ${id}`,
        timestamp: new Date(Date.now() - id * 60000).toISOString(),
      };
    });

    setItems((prev) => [...prev, ...newItems]);
    setPage((p) => p + 1);

    // Stop after 5 pages
    if (page >= 5) {
      setHasMore(false);
    }
  };

  const renderItem = (item, index) => (
    <div style={{ padding: "15px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: `hsl(${(index * 30) % 360}, 70%, 60%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {index}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0 }}>{item.title}</h4>
          <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
            {item.description}
          </p>
          <small style={{ color: "#999" }}>
            {new Date(item.timestamp).toLocaleString()}
          </small>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Infinite Scroll + Virtual Scrolling Demo</h1>
      <p>
        🔄 {items.length} items loaded
        {hasMore ? " (scroll down for more)" : " (all loaded)"}
      </p>

      <VirtualScrollList
        items={items}
        itemHeight={80}
        containerHeight={600}
        overscan={5}
        renderItem={renderItem}
        onFetchMore={fetchMore}
        hasMore={hasMore}
        loadingComponent={
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="spinner" />
            Loading more items...
          </div>
        }
        emptyComponent={<div>No items to display</div>}
      />
    </div>
  );
}
