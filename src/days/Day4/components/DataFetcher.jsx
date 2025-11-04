import { useCallback, useEffect, useState } from "react";

// simple in-memory cache (optional)
const cache = new Map();

export function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    try {
      setLoading(true);
      setError(null);

      // 🧠 Check cache first
      if (cache.has(url)) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      // 🧩 Fetch from API
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      await new Promise((res) => setTimeout(res, 3000));

      // ✅ Save to state + cache
      setData(json);
      cache.set(url, json);
    } catch (err) {
      setError(err);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [url]);

  // 🔁 Retry handler
  const retry = () => {
    cache.delete(url); // clear cache before retry
    fetchData();
  };

  // 🎬 Fetch once on mount / URL change
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  // 📦 Render Props pattern
  return children({ data, loading, error, retry });
}
