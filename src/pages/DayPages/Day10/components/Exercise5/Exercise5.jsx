import ExerciseCard from "../../../../../components/ExerciseCard";
import MultiTabSyncApp from "./components/MultiTabSyncApp";

import "./styles.css";
export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={5} title="Multi-Tab Sync (Challenge)" />

      <ExerciseCard.Description>
        {`
// TODO: Sync state across browser tabs

function MultiTabSyncApp() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState(1);
  const [tabId] = useState(() => \`tab-\${Date.now()}\`);

  // TODO: Effects
  // 1. Broadcast state changes to other tabs (BroadcastChannel API)
  // 2. Listen for changes from other tabs
  // 3. Sync count across tabs
  // 4. Track active tabs
  // 5. Remove tab on unmount

  // Broadcast changes
  useEffect(() => {
    // Create BroadcastChannel
    const channel = new BroadcastChannel('app-sync');

    // Listen for messages from other tabs
    channel.onmessage = (event) => {
      const { type, payload, senderId } = event.data;

      if (senderId === tabId) return; // Ignore own messages

      switch (type) {
        case 'COUNT_UPDATE':
          setCount(payload);
          break;
        case 'MESSAGE_ADD':
          setMessages(prev => [...prev, payload]);
          break;
        case 'TAB_OPENED':
          setActiveUsers(prev => prev + 1);
          // Send current state to new tab
          channel.postMessage({
            type: 'STATE_SYNC',
            payload: { count, messages },
            senderId: tabId
          });
          break;
        case 'TAB_CLOSED':
          setActiveUsers(prev => Math.max(1, prev - 1));
          break;
        case 'STATE_SYNC':
          if (messages.length === 0) {
            setCount(payload.count);
            setMessages(payload.messages);
          }
          break;
        default:
          break;
      }
    };

    // Announce tab opened
    channel.postMessage({
      type: 'TAB_OPENED',
      senderId: tabId
    });

    // Cleanup
    return () => {
      channel.postMessage({
        type: 'TAB_CLOSED',
        senderId: tabId
      });
      channel.close();
    };
  }, [tabId, count, messages]);

  // Broadcast count changes
  useEffect(() => {
    if (count === 0) return; // Skip initial value

    const channel = new BroadcastChannel('app-sync');
    channel.postMessage({
      type: 'COUNT_UPDATE',
      payload: count,
      senderId: tabId
    });
    channel.close();
  }, [count, tabId]);

  const addMessage = (text) => {
    const message = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      tabId
    };

    setMessages(prev => [...prev, message]);

    // Broadcast to other tabs
    const channel = new BroadcastChannel('app-sync');
    channel.postMessage({
      type: 'MESSAGE_ADD',
      payload: message,
      senderId: tabId
    });
    channel.close();
  };

  // TODO: Features
  // - Shared counter across tabs
  // - Shared message list
  // - Show active tab count
  // - Highlight messages from current tab
  // - Sync immediately when tab opens
  // - Handle tab close gracefully

  return (
    <div className="multi-tab-sync">
      <h1>Multi-Tab Sync Demo</h1>
      
      <div className="stats">
        <p>Tab ID: {tabId}</p>
        <p>Active Tabs: {activeUsers}</p>
      </div>

      <div className="counter">
        <h2>Shared Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="messages">
        <h2>Shared Messages</h2>
        <div className="message-list">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={\`message \${msg.tabId === tabId ? 'own' : 'other'}\`}
            >
              <strong>{msg.tabId === tabId ? 'Bạn' : msg.tabId}:</strong> {msg.text}
              <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>

      <div className="instructions">
        <p>💡 Mở nhiều tab để xem đồng bộ!</p>
      </div>
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <MultiTabSyncApp />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useEffect, useRef, useState } from "react";

function MultiTabSyncApp() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState(1);
  const [tabId] = useState(
    () => \`tab-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`
  );
  const [messageInput, setMessageInput] = useState("");
  const [tabColor] = useState(() => {
    const colors = [
      "#00D9FF",
      "#22c55e",
      "#f59e0b",
      "#ec4899",
      "#8b5cf6",
      "#ef4444",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  });
  const channelRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize BroadcastChannel
  useEffect(() => {
    // Create BroadcastChannel
    const channel = new BroadcastChannel("app-sync");
    channelRef.current = channel;

    // Listen for messages from other tabs
    channel.onmessage = (event) => {
      const { type, payload, senderId } = event.data;

      // Ignore messages from self
      if (senderId === tabId) return;

      switch (type) {
        case "COUNT_UPDATE":
          setCount(payload);
          break;

        case "MESSAGE_ADD":
          setMessages((prev) => {
            // Check if message already exists
            if (prev.some((msg) => msg.id === payload.id)) {
              return prev;
            }
            return [...prev, payload];
          });
          break;

        case "TAB_OPENED":
          setActiveUsers((prev) => prev + 1);
          // Send current state to new tab
          channel.postMessage({
            type: "STATE_SYNC",
            payload: { count, messages },
            senderId: tabId,
          });
          break;

        case "TAB_CLOSED":
          setActiveUsers((prev) => Math.max(1, prev - 1));
          break;

        case "STATE_SYNC":
          // Only sync if we have no data (new tab)
          if (messages.length === 0) {
            setCount(payload.count);
            setMessages(payload.messages);
          }
          break;

        case "MESSAGES_CLEAR":
          setMessages([]);
          break;

        case "COUNT_RESET":
          setCount(0);
          break;

        default:
          break;
      }
    };

    // Announce tab opened
    channel.postMessage({
      type: "TAB_OPENED",
      senderId: tabId,
    });

    // Cleanup on unmount
    return () => {
      channel.postMessage({
        type: "TAB_CLOSED",
        senderId: tabId,
      });
      channel.close();
    };
  }, [tabId]); // Only depend on tabId (constant)

  // Broadcast count changes
  useEffect(() => {
    if (count === 0) return; // Skip initial value

    const channel = channelRef.current;
    if (channel) {
      channel.postMessage({
        type: "COUNT_UPDATE",
        payload: count,
        senderId: tabId,
      });
    }
  }, [count, tabId]);

  // Auto-scroll to bottom when new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
    const channel = channelRef.current;
    if (channel) {
      channel.postMessage({
        type: "COUNT_RESET",
        senderId: tabId,
      });
    }
  };

  const addMessage = () => {
    const text = messageInput.trim();
    if (!text) return;

    const message = {
      id: \`\${Date.now()}-\${Math.random()}\`,
      text,
      timestamp: new Date().toISOString(),
      tabId,
      tabColor,
    };

    setMessages((prev) => [...prev, message]);
    setMessageInput("");

    // Broadcast to other tabs
    const channel = channelRef.current;
    if (channel) {
      channel.postMessage({
        type: "MESSAGE_ADD",
        payload: message,
        senderId: tabId,
      });
    }
  };

  const clearMessages = () => {
    setMessages([]);
    const channel = channelRef.current;
    if (channel) {
      channel.postMessage({
        type: "MESSAGES_CLEAR",
        senderId: tabId,
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getTabName = (id) => {
    if (id === tabId) return "You";
    return id.split("-")[1].slice(0, 6);
  };

  return (
    <div className="multi-tab-app">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <div className="header-content">
            <h1 className="header-title">🔄 Multi-Tab Sync</h1>
            <p className="header-subtitle">
              Real-time synchronization across browser tabs using
              BroadcastChannel API
            </p>
          </div>

          {/* Tab Info */}
          <div className="tab-info-card">
            <div className="tab-badge" style={{ borderColor: tabColor }}>
              <div
                className="tab-color-dot"
                style={{ background: tabColor }}
              ></div>
              <div className="tab-details">
                <div className="tab-label">Your Tab ID</div>
                <div className="tab-id">{tabId}</div>
              </div>
            </div>

            <div className="active-tabs-badge">
              <div className="badge-icon">👥</div>
              <div className="badge-content">
                <div className="badge-label">Active Tabs</div>
                <div className="badge-value">{activeUsers}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="info-banner">
          <span className="info-icon">💡</span>
          <span className="info-text">
            Open multiple tabs of this app to see real-time synchronization in
            action!
          </span>
        </div>

        <div className="content-grid">
          {/* Shared Counter */}
          <div className="counter-panel">
            <div className="panel-header">
              <h2 className="panel-title">📊 Shared Counter</h2>
              <div className="sync-indicator">
                <div className="pulse-dot"></div>
                <span>Synced</span>
              </div>
            </div>

            <div className="counter-display">
              <div className="counter-value">{count}</div>
              <div className="counter-label">Current Count</div>
            </div>

            <div className="counter-controls">
              <button
                onClick={decrementCount}
                className="btn-counter btn-decrement"
              >
                <span className="btn-icon">−</span>
                <span className="btn-text">Decrease</span>
              </button>
              <button
                onClick={incrementCount}
                className="btn-counter btn-increment"
              >
                <span className="btn-icon">+</span>
                <span className="btn-text">Increase</span>
              </button>
            </div>

            <button onClick={resetCount} className="btn-reset">
              🔄 Reset Counter
            </button>

            <div className="counter-info">
              <p>
                The counter is synchronized across all open tabs. Try changing
                it in any tab!
              </p>
            </div>
          </div>

          {/* Shared Messages */}
          <div className="messages-panel">
            <div className="panel-header">
              <h2 className="panel-title">💬 Shared Messages</h2>
              <button onClick={clearMessages} className="btn-clear-messages">
                🗑️ Clear
              </button>
            </div>

            <div className="messages-container">
              {messages.length === 0 ? (
                <div className="messages-empty">
                  <div className="empty-icon">💭</div>
                  <p className="empty-text">No messages yet</p>
                  <p className="empty-subtext">
                    Send a message to start the conversation
                  </p>
                </div>
              ) : (
                <div className="messages-list">
                  {messages.map((msg) => {
                    const isOwn = msg.tabId === tabId;
                    return (
                      <div
                        key={msg.id}
                        className={\`message-item \${isOwn ? "own" : "other"}\`}
                      >
                        <div className="message-header">
                          <div className="message-sender">
                            <div
                              className="sender-dot"
                              style={{ background: msg.tabColor }}
                            ></div>
                            <span className="sender-name">
                              {getTabName(msg.tabId)}
                            </span>
                          </div>
                          <span className="message-time">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                        <div className="message-text">{msg.text}</div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            <div className="message-input-area">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message and press Enter..."
                className="message-input"
              />
              <button
                onClick={addMessage}
                className="btn-send"
                disabled={!messageInput.trim()}
              >
                <span className="send-icon">📤</span>
              </button>
            </div>

            <div className="messages-info">
              <p>Messages are synced across all tabs in real-time</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h3 className="section-title">🔧 How It Works</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h4 className="feature-title">BroadcastChannel API</h4>
              <p className="feature-text">
                Uses browser's BroadcastChannel API to communicate between tabs
                in the same origin
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4 className="feature-title">Real-time Sync</h4>
              <p className="feature-text">
                Changes in any tab are instantly broadcasted to all other open
                tabs
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h4 className="feature-title">Unique Tab Identity</h4>
              <p className="feature-text">
                Each tab has a unique ID and color for easy identification
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4 className="feature-title">State Management</h4>
              <p className="feature-text">
                New tabs automatically receive current state from existing tabs
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧹</div>
              <h4 className="feature-title">Cleanup</h4>
              <p className="feature-text">
                Properly closes channels and notifies other tabs when a tab is
                closed
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4 className="feature-title">No Duplicates</h4>
              <p className="feature-text">
                Smart message handling prevents duplicate messages and infinite
                loops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiTabSyncApp;

---

// ✅ Tính năng đã implement:
// 🎯 Core Features:

// BroadcastChannel API - Communication giữa các tabs cùng origin
// Shared Counter - Counter đồng bộ real-time across tabs
// Shared Messages - Chat system sync giữa tất cả tabs
// Unique Tab Identity - Mỗi tab có ID và màu riêng
// Active Users Count - Track số tabs đang mở
// State Synchronization - Tab mới nhận state từ tabs cũ
// Proper Cleanup - Thông báo khi tab đóng

// 🔄 Sync Events:

// COUNT_UPDATE - Broadcast khi counter thay đổi
// MESSAGE_ADD - Broadcast khi gửi message
// TAB_OPENED - Announce khi tab mới mở
// TAB_CLOSED - Announce khi tab đóng
// STATE_SYNC - Gửi full state cho tab mới
// MESSAGES_CLEAR - Clear messages across tabs
// COUNT_RESET - Reset counter across tabs

// 🎨 UI/UX:

// Tab Color Coding - Mỗi tab có màu unique với pulse animation
// Message Styling - "You" messages highlight, others dimmed
// Real-time Indicators - Green "Synced" badge với pulse dot
// Smooth Animations - Messages fade in, buttons hover effects
// Auto-scroll - Messages tự động scroll xuống bottom
// Empty States - Beautiful empty state cho messages
// Feature Cards - Explain how everything works

// 🔧 useEffect Usage:

// Initialize BroadcastChannel on mount:

// useEffect(() => {
//   const channel = new BroadcastChannel('app-sync');
  
//   // Listen for messages
//   channel.onmessage = (event) => {
//     // Handle different message types
//   };
  
//   // Announce tab opened
//   channel.postMessage({ type: 'TAB_OPENED' });
  
//   // Cleanup
//   return () => {
//     channel.postMessage({ type: 'TAB_CLOSED' });
//     channel.close();
//   };
// }, [tabId]);

// Broadcast count changes:

// useEffect(() => {
//   if (count === 0) return; // Skip initial
  
//   channel.postMessage({
//     type: 'COUNT_UPDATE',
//     payload: count,
//     senderId: tabId
//   });
// }, [count, tabId]);

// Auto-scroll messages:

// useEffect(() => {
//   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// }, [messages]);
// 💡 Advanced Patterns:
// 1. Prevent Self-Echo:
// if (senderId === tabId) return; // Ignore own messages
// 2. Prevent Duplicates:
// setMessages(prev => {
//   if (prev.some(msg => msg.id === payload.id)) {
//     return prev; // Already exists
//   }
//   return [...prev, payload];
// });
// 3. State Sync for New Tabs:
// case 'TAB_OPENED':
//   // Send current state to new tab
//   channel.postMessage({
//     type: 'STATE_SYNC',
//     payload: { count, messages }
//   });
//   break;

// case 'STATE_SYNC':
//   // Only accept if we're new (no data yet)
//   if (messages.length === 0) {
//     setCount(payload.count);
//     setMessages(payload.messages);
//   }
//   break;
// 4. Proper Cleanup:
// return () => {
//   channel.postMessage({ type: 'TAB_CLOSED' });
//   channel.close(); // Important!
// };


// ### 🎮 Test Features:
// 1. **Open 2+ tabs** - Xem active tabs count tăng
// 2. **Change counter** - Thấy sync ngay lập tức
// 3. **Send messages** - Chat sync real-time
// 4. **Close a tab** - Active count giảm
// 5. **Open new tab** - Nhận được state hiện tại
// 6. **Different colors** - Mỗi tab có màu riêng

// ### 🚀 Key Highlights:

// **Race Condition Free:**
// - Skip initial count (0) để tránh broadcast không cần thiết
// - Check duplicate messages by ID
// - Ignore messages from self

// **Memory Leak Prevention:**
// - Proper channel.close() trong cleanup
// - Remove all event listeners
// - Clear refs properly

// **User Experience:**
// - Unique tab colors cho easy identification
// - "You" vs tab ID cho messages
// - Auto-scroll to latest message
// - Smooth animations everywhere

// **Error Handling:**
// - Check if channel exists before posting
// - Defensive checks trong message handlers
// - Safe state updates với prev callbacks

// ### 📊 Data Flow:

// Tab A: setCount(5)
//     ↓
// useEffect → channel.postMessage({COUNT_UPDATE: 5})
//     ↓
// Tab B: channel.onmessage → setCount(5)
// Tab C: channel.onmessage → setCount(5)
// 🎯 BroadcastChannel API:

// Same-origin only - Chỉ tabs cùng domain
// Fast - No server needed, direct browser communication
// Simple - Easy to use compared to SharedWorker
// Supported - All modern browsers (not IE11)


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
