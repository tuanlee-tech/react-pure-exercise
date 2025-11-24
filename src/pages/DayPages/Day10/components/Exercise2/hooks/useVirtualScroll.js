import { useCallback, useMemo, useRef, useState } from "react";
import { throttle } from "../utils/throttle";


export function useVirtualScroll({
  items,
  itemHeight,
  containerHeight,
  overscan = 3,
  dynamicHeight = false,
}) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const itemHeightsRef = useRef(new Map()); // For dynamic heights

  // Calculate item height (static or dynamic)
  const getItemHeight = useCallback(
    (index) => {
      if (!dynamicHeight) return itemHeight;
      return itemHeightsRef.current.get(index) || itemHeight;
    },
    [dynamicHeight, itemHeight]
  );

  // Calculate total height
  const totalHeight = useMemo(() => {
    if (!dynamicHeight) return items.length * itemHeight;

    let height = 0;
    for (let i = 0; i < items.length; i++) {
      height += getItemHeight(i);
    }
    return height;
  }, [items.length, dynamicHeight, itemHeight, getItemHeight]);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    let start = 0;
    let end = 0;
    let accumulatedHeight = 0;

    // Find start index
    for (let i = 0; i < items.length; i++) {
      const height = getItemHeight(i);
      if (accumulatedHeight + height > scrollTop) {
        start = Math.max(0, i - overscan);
        break;
      }
      accumulatedHeight += height;
    }

    // Find end index
    accumulatedHeight = 0;
    for (let i = 0; i < items.length; i++) {
      accumulatedHeight += getItemHeight(i);
      if (accumulatedHeight > scrollTop + containerHeight) {
        end = Math.min(items.length - 1, i + overscan);
        break;
      }
    }

    if (end === 0) end = items.length - 1;

    return { start, end };
  }, [scrollTop, containerHeight, items.length, overscan, getItemHeight]);

  // Calculate offset for visible items
  const offsetY = useMemo(() => {
    let offset = 0;
    for (let i = 0; i < visibleRange.start; i++) {
      offset += getItemHeight(i);
    }
    return offset;
  }, [visibleRange.start, getItemHeight]);

  // Get visible items
  const visibleItems = useMemo(() => {
    return items
      .slice(visibleRange.start, visibleRange.end + 1)
      .map((item, index) => ({
        item,
        index: visibleRange.start + index,
      }));
  }, [items, visibleRange]);

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle((e) => {
      setScrollTop(e.target.scrollTop);
    }, 16), // ~60fps
    []
  );

  // Measure item height (for dynamic heights)
  const measureItem = useCallback(
    (index, height) => {
      if (dynamicHeight) {
        itemHeightsRef.current.set(index, height);
      }
    },
    [dynamicHeight]
  );

  // Scroll to specific index
  const scrollToIndex = useCallback(
    (index) => {
      if (!containerRef.current) return;

      let offset = 0;
      for (let i = 0; i < index; i++) {
        offset += getItemHeight(i);
      }

      containerRef.current.scrollTop = offset;
    },
    [getItemHeight]
  );

  // Scroll to top
  const scrollToTop = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = totalHeight;
    }
  }, [totalHeight]);

  return {
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
  };
}
