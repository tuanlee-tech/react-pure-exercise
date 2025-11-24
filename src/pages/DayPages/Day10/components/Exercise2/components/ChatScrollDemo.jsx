// src/components/ChatScrollDemo.jsx
import { useCallback, useRef, useState } from "react";
import VirtualScrollList from "./VirtualScrollList";

export default function ChatScrollDemo() {
  const [messages, setMessages] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      text: `Message ${i} — ${"Lorem ipsum dolor sit amet"
        .split(" ")
        .slice(0, (i % 8) + 1)
        .join(" ")}`,
      sender: i % 2 === 0 ? "me" : "other",
      timestamp: new Date(Date.now() - (50 - i) * 60000).toISOString(),
    }))
  );

  const [hasOlder, setHasOlder] = useState(true);
  const isLoadingOlder = useRef(false);

  // Load older messages khi scroll lên đầu
  const loadOlder = useCallback(async () => {
    if (isLoadingOlder.current || !hasOlder) return;
    isLoadingOlder.current = true;

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const oldestId = messages[0].id;
    const newBatch = Array.from({ length: 30 }, (_, i) => ({
      id: oldestId - i - 1,
      text: `Older Message ${oldestId - i - 1}`,
      sender: (oldestId - i - 1) % 3 === 0 ? "me" : "other",
      timestamp: new Date(Date.now() - (100 + i) * 60000).toISOString(),
    })).reverse();

    setMessages((prev) => [...newBatch, ...prev]);

    if (oldestId <= 30) {
      setHasOlder(false);
    }

    isLoadingOlder.current = false;
  }, [messages, hasOlder]);

  // Render từng tin nhắn
  const renderMessage = (message) => (
    <div className={`message-wrapper ${message.sender}`}>
      <div className={`message-bubble ${message.sender}`}>
        <div>{message.text}</div>
        <small>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <h1 className="neon-title">Chat with Bi-directional Virtual Scroll</h1>
      <p
        style={{ textAlign: "center", color: "#94a3b8", marginBottom: "2rem" }}
      >
        Scroll lên để tải tin nhắn cũ • Chỉ render ~25 tin nhắn dù có hàng nghìn
        tin
      </p>

      <div style={{ position: "relative" }}>
        {/* Loading indicator ở đầu */}
        {hasOlder && (
          <div
            className="loading-more"
            style={{
              padding: "16px",
              opacity: isLoadingOlder.current ? 1 : 0.5,
            }}
          >
            <span
              className="spinner"
              style={{ width: 18, height: 18, marginRight: 8 }}
            />
            Loading older messages...
          </div>
        )}

        <VirtualScrollList
          items={messages}
          itemHeight={80} // Ước lượng chiều cao trung bình
          containerHeight={600}
          dynamicHeight={true} // Bật đo thực tế (rất mượt với tin nhắn)
          overscan={5}
          renderItem={renderMessage}
          onFetchMore={loadOlder} // Khi scroll lên gần đầu → load older
          hasMore={hasOlder}
          loadingComponent={
            <div className="loading-more">
              <span className="spinner" /> Loading older messages...
            </div>
          }
        />
      </div>

      <div
        style={{
          marginTop: "1rem",
          textAlign: "center",
          color: "#64748b",
          fontSize: "0.9rem",
        }}
      >
        Total messages: {messages.length} (DOM nodes chỉ ~25)
      </div>
    </div>
  );
}
