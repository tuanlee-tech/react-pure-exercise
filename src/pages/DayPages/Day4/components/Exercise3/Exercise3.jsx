import ExerciseCard from "../../../../../components/ExerciseCard";
import { DataFetcher } from "./components/DataFetcher";
import { ProductCard } from "./components/ProductCard";
import { Skeleton } from "./components/Skeleton";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Data Fetcher (Render Props)" />

      <ExerciseCard.Description>
        {`
// TODO: Reusable data fetching component

function DataFetcher({ url, children, method = 'GET', body }) {
  // TODO:
  // - Fetch data from URL
  // - Handle loading, error, success states
  // - Retry functionality
  // - Cache (optional)
  // Pass { data, loading, error, retry } to children
}

// Usage 1: User List
<DataFetcher url="/api/users">
  {({ data, loading, error, retry }) => {
    if (loading) return <Spinner />;
    if (error) return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
    return <UserList users={data} />;
  }}
</DataFetcher>

// Usage 2: Product Details
<DataFetcher url="/api/products/123">
  {({ data: product, loading }) => {
    if (loading) return <Skeleton />;
    return <ProductCard product={product} />;
  }}
</DataFetcher>

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <h3>Simulate : 5s loading</h3>
        <br />
        <DataFetcher url="https://fakestoreapi.com/products/1">
          {({ data: product, loading }) => {
            if (loading) return <Skeleton width="300px" height="400px" />;
            return <ProductCard product={product} />;
          }}
        </DataFetcher>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
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
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
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

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
