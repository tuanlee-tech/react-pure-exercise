import { useState } from "react";
import VirtualScrollList from "./VirtualScrollList";

export default function DynamicHeightDemo() {
  const [items, _] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      title: `Post ${i}`,
      content: `This is post ${i}. `.repeat(Math.floor(Math.random() * 5) + 1),
    }))
  );

  const renderItem = (item) => (
    <div style={{ padding: "15px" }}>
      <h3 style={{ margin: "0 0 10px 0" }}>{item.title}</h3>
      <p style={{ margin: 0, lineHeight: "1.6" }}>{item.content}</p>
    </div>
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Dynamic Height Virtual Scroll</h1>
      <p>Items have variable heights</p>

      <VirtualScrollList
        items={items}
        itemHeight={100} // Initial estimate
        containerHeight={600}
        dynamicHeight={true}
        overscan={3}
        renderItem={renderItem}
        hasMore={false}
      />
    </div>
  );
}
