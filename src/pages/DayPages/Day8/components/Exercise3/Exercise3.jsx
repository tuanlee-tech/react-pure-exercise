import ExerciseCard from "../../../../../components/ExerciseCard.jsx";
import ChatApp from "./components/ChatApp.jsx";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={3}
        title="Real-time Chat với State Colocation"
      />

      <ExerciseCard.Description>
        {`
// TODO: Implement chat app với proper state placement

function ChatRoom({ roomId, currentUserId }) {
  // TODO: State cho chat room này
  // - messages: array of messages
  // - isTyping: { userId: boolean }
  // - onlineUsers: array of user IDs
  
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  // TODO: Implement
  // - sendMessage
  // - deleteMessage
  // - editMessage
  // - replyToMessage
  // - loadMoreMessages (pagination)

  // TODO: Simulate typing indicator
  // useEffect với debounce khi user type

  return (
    <div className="chat-room">
      <div className="messages">
        {/* TODO: Message list */}
      </div>
      
      {replyingTo && (
        <div className="replying-to">
          Đang trả lời: {replyingTo.text}
          <button onClick={() => setReplyingTo(null)}>×</button>
        </div>
      )}

      <div className="input-area">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={sendMessage}>Gửi</button>
      </div>
    </div>
  );
}

function ChatApp() {
  // TODO: State ở App level (higher level)
  // - rooms: array of rooms
  // - currentRoomId
  // - currentUser

  const [rooms] = useState([
    { id: 1, name: 'General', unread: 3 },
    { id: 2, name: 'Random', unread: 0 },
    { id: 3, name: 'Tech', unread: 1 }
  ]);

  const [currentRoomId, setCurrentRoomId] = useState(1);

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2>Rooms</h2>
        {rooms.map(room => (
          <div
            key={room.id}
            className={\`room \${room.id === currentRoomId ? 'active' : ''}\`}
            onClick={() => setCurrentRoomId(room.id)}
          >
            {room.name}
            {room.unread > 0 && <span className="badge">{room.unread}</span>}
          </div>
        ))}
      </div>

      <div className="main">
        {/* ChatRoom state cô lập cho mỗi room */}
        <ChatRoom
          key={currentRoomId} // Re-mount khi đổi room
          roomId={currentRoomId}
          currentUserId={1}
        />
      </div>
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <ChatApp />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * REAL-TIME CHAT APP với STATE COLOCATION
 * Demonstrates:
 * - State Colocation (đặt state gần nơi sử dụng)
 * - Component independence
 * - Efficient re-renders
 * - Message management
 * Design: CyberSlate/Neon Ocean
 */

// Mock users data
const USERS = {
  1: { id: 1, name: "Bạn", avatar: "😎", color: "#00D9FF" },
  2: { id: 2, name: "Alice", avatar: "👩", color: "#22c55e" },
  3: { id: 3, name: "Bob", avatar: "👨", color: "#f59e0b" },
  4: { id: 4, name: "Charlie", avatar: "🧑", color: "#8b5cf6" },
};

// Mock rooms data
const INITIAL_ROOMS = [
  { id: 1, name: "💬 General", description: "Thảo luận chung", unread: 0 },
  { id: 2, name: "🎮 Gaming", description: "Trò chuyện về game", unread: 2 },
  {
    id: 3,
    name: "💻 Tech Talk",
    description: "Công nghệ & lập trình",
    unread: 5,
  },
  { id: 4, name: "🎵 Music", description: "Âm nhạc & nghệ thuật", unread: 0 },
  { id: 5, name: "🏃 Fitness", description: "Thể thao & sức khỏe", unread: 1 },
];

// Generate mock messages cho room
const generateMockMessages = (roomId) => {
  const messages = {
    1: [
      {
        id: 1,
        userId: 2,
        text: "Chào mọi người! 👋",
        timestamp: Date.now() - 3600000,
        replyTo: null,
        edited: false,
      },
      {
        id: 2,
        userId: 3,
        text: "Hi Alice! Hôm nay thế nào?",
        timestamp: Date.now() - 3000000,
        replyTo: null,
        edited: false,
      },
      {
        id: 3,
        userId: 2,
        text: "Tốt lắm, cảm ơn! 😊",
        timestamp: Date.now() - 2000000,
        replyTo: 2,
        edited: false,
      },
    ],
    2: [
      {
        id: 4,
        userId: 4,
        text: "Ai chơi Valorant không? 🎮",
        timestamp: Date.now() - 1800000,
        replyTo: null,
        edited: false,
      },
      {
        id: 5,
        userId: 3,
        text: "Có đó! Rank bao nhiêu?",
        timestamp: Date.now() - 1200000,
        replyTo: 4,
        edited: false,
      },
    ],
    3: [
      {
        id: 6,
        userId: 2,
        text: "React 19 ra rồi nè! 🚀",
        timestamp: Date.now() - 900000,
        replyTo: null,
        edited: false,
      },
      {
        id: 7,
        userId: 3,
        text: "Server Components quá tuyệt",
        timestamp: Date.now() - 600000,
        replyTo: 6,
        edited: false,
      },
      {
        id: 8,
        userId: 4,
        text: "useReducer vs useState ai win?",
        timestamp: Date.now() - 300000,
        replyTo: null,
        edited: false,
      },
      {
        id: 9,
        userId: 2,
        text: "useReducer cho complex state!",
        timestamp: Date.now() - 120000,
        replyTo: 8,
        edited: false,
      },
      {
        id: 10,
        userId: 3,
        text: "Đúng rồi, nhất là với normalized state",
        timestamp: Date.now() - 60000,
        replyTo: 9,
        edited: false,
      },
    ],
    4: [
      {
        id: 11,
        userId: 4,
        text: "Nghe album mới của Taylor Swift chưa? 🎵",
        timestamp: Date.now() - 7200000,
        replyTo: null,
        edited: false,
      },
    ],
    5: [
      {
        id: 12,
        userId: 2,
        text: "Ai đi gym sáng mai không? 🏋️",
        timestamp: Date.now() - 1800000,
        replyTo: null,
        edited: false,
      },
    ],
  };

  return messages[roomId] || [];
};

/**
 * ChatRoom Component
 * ✅ STATE COLOCATION: Mỗi room có state riêng, độc lập
 * Props:
 * - roomId: ID của room hiện tại
 * - currentUserId: ID của user đang đăng nhập
 */
function ChatRoom({ roomId, currentUserId, roomName }) {
  // ✅ STATE CÔ LẬP - Chỉ component này sử dụng
  const [messages, setMessages] = useState(() => generateMockMessages(roomId));
  const [inputValue, setInputValue] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingMessage, setEditingMessage] = useState(null);
  const [isTyping, setIsTyping] = useState({});

  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef({});

  // Auto-scroll to bottom khi có message mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Cleanup typing timeouts
  useEffect(() => {
    return () => {
      Object.values(typingTimeoutRef.current).forEach(clearTimeout);
    };
  }, []);

  /**
   * Gửi tin nhắn mới
   */
  const sendMessage = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;

    if (editingMessage) {
      // Edit existing message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editingMessage.id ? { ...msg, text, edited: true } : msg
        )
      );
      setEditingMessage(null);
    } else {
      // Send new message
      const newMessage = {
        id: Date.now(),
        userId: currentUserId,
        text,
        timestamp: Date.now(),
        replyTo: replyingTo?.id || null,
        edited: false,
      };

      setMessages((prev) => [...prev, newMessage]);
      setReplyingTo(null);
    }

    setInputValue("");
  }, [inputValue, currentUserId, replyingTo, editingMessage]);

  /**
   * Xóa tin nhắn
   */
  const deleteMessage = useCallback((messageId) => {
    if (window.confirm("🗑️ Xóa tin nhắn này?")) {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  }, []);

  /**
   * Bắt đầu edit tin nhắn
   */
  const startEditMessage = useCallback((message) => {
    setEditingMessage(message);
    setInputValue(message.text);
    setReplyingTo(null);
  }, []);

  /**
   * Reply to message
   */
  const replyToMessage = useCallback((message) => {
    setReplyingTo(message);
    setEditingMessage(null);
  }, []);

  /**
   * Cancel reply/edit
   */
  const cancelAction = useCallback(() => {
    setReplyingTo(null);
    setEditingMessage(null);
    setInputValue("");
  }, []);

  /**
   * Simulate typing indicator
   */
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setInputValue(value);

    // Simulate other users typing
    if (value.length > 0 && Math.random() > 0.7) {
      const randomUserId = [2, 3, 4][Math.floor(Math.random() * 3)];

      setIsTyping((prev) => ({ ...prev, [randomUserId]: true }));

      if (typingTimeoutRef.current[randomUserId]) {
        clearTimeout(typingTimeoutRef.current[randomUserId]);
      }

      typingTimeoutRef.current[randomUserId] = setTimeout(() => {
        setIsTyping((prev) => {
          const newState = { ...prev };
          delete newState[randomUserId];
          return newState;
        });
      }, 3000);
    }
  }, []);

  /**
   * Format timestamp
   */
  const formatTime = useCallback((timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return "Vừa xong";
    if (diff < 3600000) return \`\${Math.floor(diff / 60000)} phút trước\`;
    if (diff < 86400000)
      return date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      });
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
    });
  }, []);

  /**
   * Get message being replied to
   */
  const getReplyMessage = useCallback(
    (messageId) => {
      return messages.find((msg) => msg.id === messageId);
    },
    [messages]
  );

  // Typing users display
  const typingUsers = useMemo(() => {
    return Object.keys(isTyping)
      .map((userId) => USERS[userId]?.name)
      .filter(Boolean);
  }, [isTyping]);

  return (
    <div className="chat-room">
      {/* Room Header */}
      <div className="room-header">
        <div className="room-info">
          <h2 className="room-name">{roomName}</h2>
          <div className="online-status">
            <span className="status-dot"></span>
            {Object.keys(USERS).length} thành viên online
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-messages">
            <div className="empty-icon">💬</div>
            <p>Chưa có tin nhắn. Hãy bắt đầu cuộc trò chuyện!</p>
          </div>
        ) : (
          messages.map((message, index) => {
            const user = USERS[message.userId];
            const isOwn = message.userId === currentUserId;
            const showAvatar =
              index === 0 || messages[index - 1].userId !== message.userId;
            const replyMessage = message.replyTo
              ? getReplyMessage(message.replyTo)
              : null;

            return (
              <div
                key={message.id}
                className={\`message \${isOwn ? "own" : ""} \${
                  !showAvatar ? "compact" : ""
                }\`}
              >
                {showAvatar && !isOwn && (
                  <div className="message-avatar" style={{ color: user.color }}>
                    {user.avatar}
                  </div>
                )}

                <div className="message-content">
                  {showAvatar && !isOwn && (
                    <div
                      className="message-author"
                      style={{ color: user.color }}
                    >
                      {user.name}
                    </div>
                  )}

                  {replyMessage && (
                    <div className="message-reply">
                      <div className="reply-icon">↩️</div>
                      <div className="reply-content">
                        <div className="reply-author">
                          {USERS[replyMessage.userId]?.name}
                        </div>
                        <div className="reply-text">{replyMessage.text}</div>
                      </div>
                    </div>
                  )}

                  <div className="message-bubble">
                    <div className="message-text">{message.text}</div>
                    {message.edited && (
                      <span className="edited-badge">đã chỉnh sửa</span>
                    )}
                  </div>

                  <div className="message-meta">
                    <span className="message-time">
                      {formatTime(message.timestamp)}
                    </span>

                    {isOwn && (
                      <div className="message-actions">
                        <button
                          className="action-btn"
                          onClick={() => startEditMessage(message)}
                          title="Chỉnh sửa"
                        >
                          ✏️
                        </button>
                        <button
                          className="action-btn"
                          onClick={() => deleteMessage(message.id)}
                          title="Xóa"
                        >
                          🗑️
                        </button>
                      </div>
                    )}

                    {!isOwn && (
                      <button
                        className="action-btn reply-btn"
                        onClick={() => replyToMessage(message)}
                        title="Trả lời"
                      >
                        ↩️
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div className="typing-indicator">
            <div className="typing-avatar">✍️</div>
            <div className="typing-text">
              {typingUsers.join(", ")} đang nhập
              <span className="typing-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-area">
        {/* Reply/Edit Preview */}
        {(replyingTo || editingMessage) && (
          <div className="action-preview">
            <div className="preview-icon">{editingMessage ? "✏️" : "↩️"}</div>
            <div className="preview-content">
              <div className="preview-label">
                {editingMessage
                  ? "Chỉnh sửa tin nhắn"
                  : \`Trả lời \${USERS[replyingTo.userId]?.name}\`}
              </div>
              <div className="preview-text">
                {editingMessage ? editingMessage.text : replyingTo.text}
              </div>
            </div>
            <button className="preview-close" onClick={cancelAction}>
              ✕
            </button>
          </div>
        )}

        {/* Input Box */}
        <div className="input-box">
          <input
            type="text"
            className="message-input"
            placeholder="Nhập tin nhắn..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            className="send-button"
            onClick={sendMessage}
            disabled={!inputValue.trim()}
          >
            {editingMessage ? "💾" : "📤"}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * ChatApp Component - Main Container
 * ✅ STATE Ở CAO: Rooms list và current room selection
 */
function ChatApp() {
  // ✅ State ở App level - shared data
  const [rooms, setRooms] = useState(INITIAL_ROOMS);
  const [currentRoomId, setCurrentRoomId] = useState(1);
  const [currentUserId] = useState(1); // Current logged-in user

  /**
   * Switch room
   * Clear unread count khi vào room
   */
  const handleRoomChange = useCallback((roomId) => {
    setCurrentRoomId(roomId);

    // Clear unread count
    setRooms((prev) =>
      prev.map((room) => (room.id === roomId ? { ...room, unread: 0 } : room))
    );
  }, []);

  /**
   * Get current room info
   */
  const currentRoom = useMemo(() => {
    return rooms.find((room) => room.id === currentRoomId);
  }, [rooms, currentRoomId]);

  /**
   * Total unread messages
   */
  const totalUnread = useMemo(() => {
    return rooms.reduce((sum, room) => sum + room.unread, 0);
  }, [rooms]);

  return (
    <div className="chat-app">
      {/* App Header */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-gradient">💬 CyberChat</span>
        </h1>
        <p className="app-subtitle">Real-time Chat với State Colocation</p>
      </header>

      <div className="app-chat-layout">
        {/* Sidebar: Room List */}
        <aside className="sidebar-chatapp">
          <div className="sidebar-header">
            <h2 className="sidebar-title">📁 Rooms</h2>
            {totalUnread > 0 && (
              <div className="total-unread">{totalUnread}</div>
            )}
          </div>

          <div className="rooms-list">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={\`room-item \${
                  room.id === currentRoomId ? "active" : ""
                }\`}
                onClick={() => handleRoomChange(room.id)}
              >
                <div className="room-item-content">
                  <div className="room-item-name">{room.name}</div>
                  <div className="room-item-desc">{room.description}</div>
                </div>
                {room.unread > 0 && (
                  <div className="unread-badge">{room.unread}</div>
                )}
              </div>
            ))}
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <div
              className="profile-avatar"
              style={{ color: USERS[currentUserId].color }}
            >
              {USERS[currentUserId].avatar}
            </div>
            <div className="profile-info">
              <div className="profile-name">{USERS[currentUserId].name}</div>
              <div className="profile-status">🟢 Online</div>
            </div>
          </div>
        </aside>

        {/* Main: Chat Room */}
        <div className="main-chatapp">
          {/* ✅ ChatRoom state cô lập, re-mount khi đổi room */}
          <ChatRoom
            key={currentRoomId}
            roomId={currentRoomId}
            currentUserId={currentUserId}
            roomName={currentRoom?.name || ""}
          />
        </main>
      </div>
    </div>
  );
}

export default ChatApp;

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
