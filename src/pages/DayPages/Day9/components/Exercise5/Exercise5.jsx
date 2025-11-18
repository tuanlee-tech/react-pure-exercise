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

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
