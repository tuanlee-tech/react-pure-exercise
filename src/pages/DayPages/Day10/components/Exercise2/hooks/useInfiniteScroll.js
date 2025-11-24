import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll({ fetchMore, hasMore, threshold = 200 }) {
  const loaderRef = useRef(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!hasMore || isFetching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setIsFetching(true);
          fetchMore().finally(() => setIsFetching(false));
        }
      },
      { rootMargin: `${threshold}px` }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isFetching, fetchMore, threshold]);

  return { loaderRef, isFetching };
}