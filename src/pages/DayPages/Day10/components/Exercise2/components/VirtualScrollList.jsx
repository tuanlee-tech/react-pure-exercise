import { Button } from "@ui";
import { useCallback } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useVirtualScroll } from "../hooks/useVirtualScroll";
export default function VirtualScrollList({
  items,
  itemHeight = 50,
  containerHeight = 600,
  overscan = 3,
  dynamicHeight = false,
  renderItem,
  onFetchMore,
  hasMore = false,
  loadingComponent = <div>Loading more...</div>,
  emptyComponent = <div>No items</div>,
}) {
  const {
    containerRef,
    visibleItems,
    totalHeight,
    offsetY,
    handleScroll,
    measureItem,
    scrollToIndex,
    scrollToTop,
    scrollToBottom,
    scrollTop,
  } = useVirtualScroll({
    items,
    itemHeight,
    containerHeight,
    overscan,
    dynamicHeight,
  });

  const { loaderRef, isFetching } = useInfiniteScroll({
    fetchMore: onFetchMore,
    hasMore,
    threshold: 200,
  });

  // Show scroll to top Button when scrolled down
  const showScrollTop = scrollTop > containerHeight;

  // Measure item height (for dynamic heights)
  const itemRef = useCallback(
    (node, index) => {
      if (node && dynamicHeight) {
        const height = node.getBoundingClientRect().height;
        measureItem(index, height);
      }
    },
    [dynamicHeight, measureItem]
  );

  if (items.length === 0) {
    return (
      <div
        style={{
          height: containerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {emptyComponent}
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {/* Scroll Controls */}
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <Button onClick={scrollToTop}>⬆️ Top</Button>
        <Button onClick={scrollToBottom}>⬇️ Bottom</Button>
        <Button onClick={() => scrollToIndex(Math.floor(items.length / 2))}>
          ➡️ Middle
        </Button>
        <span style={{ marginLeft: "auto" }}>
          Showing {visibleItems.length} of {items.length} items
        </span>
      </div>

      {/* Virtual Scroll Container */}
      <div
        ref={containerRef}
        style={{
          height: containerHeight,
          overflow: "auto",
          position: "relative",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onScroll={handleScroll}
      >
        {/* Spacer for total height */}
        <div style={{ height: totalHeight, position: "relative" }}>
          {/* Visible items */}
          <div
            style={{
              transform: `translateY(${offsetY}px)`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            {visibleItems.map(({ item, index }) => (
              <div
                key={index}
                ref={(node) => itemRef(node, index)}
                style={{
                  minHeight: !dynamicHeight ? itemHeight : undefined,
                  borderBottom: "1px solid #eee",
                }}
              >
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        </div>

        {/* Infinite scroll loader */}
        {hasMore && (
          <div
            ref={loaderRef}
            style={{
              padding: "20px",
              textAlign: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            {isFetching ? loadingComponent : <div style={{ height: "1px" }} />}
          </div>
        )}
      </div>

      {/* Scroll to top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            padding: "10px 15px",
            borderRadius: "50%",
            border: "none",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            fontSize: "20px",
          }}
        >
          ⬆️
        </Button>
      )}
    </div>
  );
}
