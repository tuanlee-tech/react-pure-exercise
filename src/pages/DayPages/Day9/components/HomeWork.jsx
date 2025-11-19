import ExerciseCard from "../../../../components/ExerciseCard";

export default function HomeWork() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={"#"} title="Home Work" />

      <ExerciseCard.Description>
        {`

1. News Feed với Auto-Refresh
// Features:
// - Fetch news articles
// - Auto-refresh every 60s
// - Pull-to-refresh
// - Mark as read (localStorage)
// - Filter by category
// - Search articles
// - Pagination

2. Pomodoro Timer
// Features:
// - 25min work / 5min break
// - Audio notification
// - Pause/resume
// - Skip break
// - Session history
// - Statistics (daily, weekly)
// - Auto-start next session

3. Live Notification Center
// Features:
// - Real-time notifications (simulated)
// - Mark as read
// - Delete notification
// - Filter by type
// - Sound on new notification
// - Browser notification API
// - Persist unread count

4. Collaborative Whiteboard
// Features:
// - Draw on canvas
// - Sync drawing across tabs (BroadcastChannel)
// - Multiple colors and brush sizes
// - Undo/redo
// - Clear canvas
// - Save/load drawings
// - Show active users

5. Advanced Data Table (Challenge)
// Features:
// - Server-side pagination
// - Sorting (multi-column)
// - Filtering (multiple filters)
// - Search with debounce
// - Column visibility toggle
// - Export to CSV
// - Infinite scroll mode
// - Virtual scrolling for large datasets
// - Row selection
// - Bulk actions


`}
      </ExerciseCard.Description>

      <ExerciseCard.Code>
        {`


### **1. News Feed với Auto-Refresh**
// News Feed với Auto-Refresh

import React, { useState, useEffect, useRef } from 'react';
export default function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [readArticles, setReadArticles] = useState(() => {
    const saved = localStorage.getItem('read-articles');
    return saved ? JSON.parse(saved) : [];
  });

  const pullRef = useRef(null);
  const startY = useRef(0);
  const pulling = useRef(false);
  const [pullDistance, setPullDistance] = useState(0);

  const fetchArticles = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockArticles = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      title: \`Breaking News \${i + 1}\`,
      description: 'Lorem ipsum dolor sit amet...',
      category: ['tech', 'sports', 'politics'][i % 3],
      timestamp: new Date().toISOString(),
      image: \`https://picsum.photos/seed/\${Date.now() + i}/400/200\`,
    }));

    setArticles(mockArticles);
    setLoading(false);
  };

  // Initial fetch
  useEffect(() => {
    fetchArticles();
  }, [category]);

  // Auto Refresh
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchArticles, 60000);
    return () => clearInterval(interval);
  }, [autoRefresh, category]);

  // Save read articles
  useEffect(() => {
    localStorage.setItem('read-articles', JSON.stringify(readArticles));
  }, [readArticles]);

  const markAsRead = (id) => {
    setReadArticles((prev) => [...prev, id]);
  };

  // Pull-to-refresh listeners
  useEffect(() => {
    const el = pullRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      if (el.scrollTop === 0) {
        startY.current = e.touches[0].clientY;
        pulling.current = true;
      }
    };

    const onTouchMove = (e) => {
      if (!pulling.current) return;

      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) {
        setPullDistance(delta > 120 ? 120 : delta);
      }
    };

    const onTouchEnd = () => {
      if (pullDistance > 80) fetchArticles();
      pulling.current = false;
      setPullDistance(0);
    };

    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    el.addEventListener('touchend', onTouchEnd);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [pullDistance]);

  const filteredArticles = articles.filter((article) => {
    const matchCategory = category === 'all' || article.category === category;
    const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div
      ref={pullRef}
      className="news-feed"
      style={{ overflowY: 'auto', height: '100vh' }}
    >
      {/* Pull to refresh indicator */}
      <div
        style={{
          height: pullDistance,
          background: '#e0f7fa',
          textAlign: 'center',
          transition: pulling.current ? 'none' : '0.2s',
        }}
      >
        {pullDistance > 40 ? '↻ Release to refresh' : '↓ Pull to refresh'}
      </div>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="tech">Tech</option>
          <option value="sports">Sports</option>
          <option value="politics">Politics</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
          />
          Auto-refresh (60s)
        </label>

        <button onClick={fetchArticles}>Refresh Now</button>
      </div>

      {/* Articles */}
      {loading && <div>Loading...</div>}

      <div className="articles-grid">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className={\`article-card \${readArticles.includes(article.id) ? 'read' : ''}\`}
            onClick={() => markAsRead(article.id)}
          >
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="category">{article.category}</span>
            {readArticles.includes(article.id) && <span className="read-badge">✓ Read</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

### **2. Pomodoro Timer**
// Pomodoro Timer
import React, { useState, useEffect, useRef } from 'react';

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [sessions, setSessions] = useState([]);

  const audioRef = useRef(null);

  // Tạo audio 1 lần
  useEffect(() => {
    audioRef.current = new Audio(
      "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YRAAAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA"
    );
  }, []);

  // Timer logic
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          // Play sound
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((e) => console.log("Audio blocked:", e));
          }

          const session = {
            type: isWorkSession ? "Work" : "Break",
            completedAt: new Date().toISOString(),
          };
          setSessions((prev) => [...prev, session]);

          // Switch session
          if (isWorkSession) {
            setMinutes(5);
            setIsWorkSession(false);
          } else {
            setMinutes(25);
            setIsWorkSession(true);
          }
          setSeconds(0);
          setIsActive(false);
        } else {
          setMinutes((m) => m - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isWorkSession]);

  // Unblock audio bằng thao tác người dùng
  const toggleTimer = () => {
    if (!isActive && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        })
        .catch(() => {});
    }

    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsWorkSession(true);
  };

  const skipBreak = () => {
    setMinutes(25);
    setSeconds(0);
    setIsWorkSession(true);
    setIsActive(false);
  };

  return (
    <div className="pomodoro">
      <h1>{isWorkSession ? "🍅 Work Time" : "☕ Break Time"}</h1>

      <div className="timer-display">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>

      <div className="controls">
        <button onClick={toggleTimer}>{isActive ? "⏸️ Pause" : "▶️ Start"}</button>
        <button onClick={resetTimer}>🔄 Reset</button>
        {!isWorkSession && <button onClick={skipBreak}>⏭️ Skip Break</button>}
      </div>

      <div className="session-history">
        <h3>Sessions Today: {sessions.length}</h3>
        {sessions.map((session, i) => (
          <div key={i}>
            {session.type} - {new Date(session.completedAt).toLocaleTimeString()}
          </div>
        ))}
      </div>
    </div>
  );
}

### **3. Live Notification Center**
// Live Notification Center


function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all');
  const [unreadCount, setUnreadCount] = useState(0);

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const types = ['info', 'success', 'warning', 'error'];
      const newNotif = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        title: 'New Notification',
        message: 'This is a real-time notification',
        timestamp: new Date().toISOString(),
        read: false
      };

      setNotifications(prev => [newNotif, ...prev]);
      setUnreadCount(prev => prev + 1);

      // Play sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZF...');
      audio.play().catch(() => {});

      // Browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(newNotif.title, {
          body: newNotif.message,
          icon: '🔔'
        });
      }
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Request notification permission on mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Persist unread count
  useEffect(() => {
    localStorage.setItem('unread-count', unreadCount);
    document.title = unreadCount > 0 ? \`(\${unreadCount}) Notifications\` : 'Notifications';
  }, [unreadCount]);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'all') return true;
    return n.type === filter;
  });

  return (
    <div className="notification-center">
      <div className="header">
        <h1>🔔 Notifications ({unreadCount})</h1>
        <button onClick={markAllAsRead}>Mark All Read</button>
      </div>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('unread')}>Unread</button>
        <button onClick={() => setFilter('info')}>Info</button>
        <button onClick={() => setFilter('success')}>Success</button>
        <button onClick={() => setFilter('warning')}>Warning</button>
        <button onClick={() => setFilter('error')}>Error</button>
      </div>

      <div className="notifications-list">
        {filteredNotifications.map(notif => (
          <div
            key={notif.id}
            className={\`notif-card \${notif.type} \${notif.read ? 'read' : 'unread'}\`}
          >
            <div className="notif-content">
              <h3>{notif.title}</h3>
              <p>{notif.message}</p>
              <small>{new Date(notif.timestamp).toLocaleString()}</small>
            </div>
            <div className="notif-actions">
              {!notif.read && (
                <button onClick={() => markAsRead(notif.id)}>✓</button>
              )}
              <button onClick={() => deleteNotification(notif.id)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
### **4. Collaborative Whiteboard**
// Collaborative Whiteboard
import React, { useState, useEffect, useRef } from 'react';

function CollaborativeWhiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#00D9FF');
  const [brushSize, setBrushSize] = useState(3);
  const [drawingHistory, setDrawingHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeUsers, setActiveUsers] = useState(1);
  const channelRef = useRef(null);

  // Initialize BroadcastChannel
  useEffect(() => {
    const channel = new BroadcastChannel('whiteboard-sync');
    channelRef.current = channel;

    channel.onmessage = (event) => {
      const { type, payload } = event.data;

      if (type === 'DRAW') {
        drawLine(payload.x0, payload.y0, payload.x1, payload.y1, payload.color, payload.size);
      } else if (type === 'CLEAR') {
        clearCanvas();
      } else if (type === 'USER_JOINED') {
        setActiveUsers(prev => prev + 1);
      } else if (type === 'USER_LEFT') {
        setActiveUsers(prev => Math.max(1, prev - 1));
      }
    };

    channel.postMessage({ type: 'USER_JOINED' });

    return () => {
      channel.postMessage({ type: 'USER_LEFT' });
      channel.close();
    };
  }, []);

  // Drawing functions
  const drawLine = (x0, y0, x1, y1, strokeColor, strokeSize) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastPoint.current = { x, y };
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    drawLine(lastPoint.current.x, lastPoint.current.y, x, y, color, brushSize);
    
    // Broadcast to other tabs
    channelRef.current.postMessage({
      type: 'DRAW',
      payload: {
        x0: lastPoint.current.x,
        y0: lastPoint.current.y,
        x1: x,
        y1: y,
        color,
        size: brushSize
      }
    });
    
    lastPoint.current = { x, y };
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      saveToHistory();
    }
    setIsDrawing(false);
  };

  const lastPoint = useRef({ x: 0, y: 0 });

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleClear = () => {
    clearCanvas();
    channelRef.current.postMessage({ type: 'CLEAR' });
    setDrawingHistory([]);
    setHistoryIndex(-1);
  };

  const saveToHistory = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    setDrawingHistory(prev => [...prev.slice(0, historyIndex + 1), imageData]);
    setHistoryIndex(prev => prev + 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      loadFromHistory(drawingHistory[newIndex]);
    } else {
      clearCanvas();
      setHistoryIndex(-1);
    }
  };

  const redo = () => {
    if (historyIndex < drawingHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      loadFromHistory(drawingHistory[newIndex]);
    }
  };

  const loadFromHistory = (dataUrl) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataUrl;
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = \`whiteboard-\${Date.now()}.png\`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="whiteboard">
      <div className="toolbar">
        <h2>👥 Active Users: {activeUsers}</h2>
        
        <div className="color-picker">
          {['#00D9FF', '#22c55e', '#f59e0b', '#ec4899', '#ef4444', '#000000'].map(c => (
            <button
              key={c}
              style={{ background: c }}
              className={color === c ? 'active' : ''}
              onClick={() => setColor(c)}
            />
          ))}
        </div>

        <label>
          Brush Size: {brushSize}
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
          />
        </label>

        <button onClick={undo} disabled={historyIndex <= 0}>↶ Undo</button>
        <button onClick={redo} disabled={historyIndex >= drawingHistory.length - 1}>↷ Redo</button>
        <button onClick={handleClear}>🗑️ Clear</button>
        <button onClick={saveDrawing}>💾 Save</button>
      </div>

      <canvas
        ref={canvasRef}
        width={1200}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ border: '1px solid #1e293b', cursor: 'crosshair' }}
      />
    </div>
  );
}
### **5. Advanced Data Table (Challenge)**
// Advanced Data Table
import React, { useState, useEffect } from 'react';

function AdvancedDataTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    name: true,
    email: true,
    status: true,
    date: true
  });

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch data (server-side pagination)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockData = Array.from({ length: 20 }, (_, i) => ({
        id: (page - 1) * 20 + i + 1,
        name: \`User \${(page - 1) * 20 + i + 1}\`,
        email: \`user\${(page - 1) * 20 + i + 1}@example.com\`,
        status: ['active', 'inactive', 'pending'][i % 3],
        date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
      }));
      
      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, [page, debouncedSearch, sortConfig, filters]);

  // Sorting
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  // Row selection
  const toggleRowSelection = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(row => row.id));
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = Object.keys(visibleColumns).filter(col => visibleColumns[col]);
    const csvData = [
      headers.join(','),
      ...data.map(row => headers.map(h => row[h]).join(','))
    ].join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = \`data-\${Date.now()}.csv\`;
    link.click();
  };

  // Bulk actions
  const bulkDelete = () => {
    if (confirm(\`Delete \${selectedRows.length} items?\`)) {
      setData(prev => prev.filter(row => !selectedRows.includes(row.id)));
      setSelectedRows([]);
    }
  };

  return (
    <div className="data-table">
      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search... (debounced)"
        />

        <select onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>

        <button onClick={exportToCSV}>📥 Export CSV</button>

        {selectedRows.length > 0 && (
          <button onClick={bulkDelete} style={{ background: '#ef4444' }}>
            🗑️ Delete ({selectedRows.length})
          </button>
        )}

        {/* Column Visibility */}
        <div className="column-toggle">
          {Object.keys(visibleColumns).map(col => (
            <label key={col}>
              <input
                type="checkbox"
                checked={visibleColumns[col]}
                onChange={(e) => setVisibleColumns({ ...visibleColumns, [col]: e.target.checked })}
              />
              {col}
            </label>
          ))}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={toggleAllRows}
                />
              </th>
              {visibleColumns.id && (
                <th onClick={() => handleSort('id')}>
                  ID {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              )}
              {visibleColumns.name && (
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              )}
              {visibleColumns.email && <th>Email</th>}
              {visibleColumns.status && <th>Status</th>}
              {visibleColumns.date && <th>Date</th>}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} className={selectedRows.includes(row.id) ? 'selected' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRowSelection(row.id)}
                  />
                </td>
                {visibleColumns.id && <td>{row.id}</td>}
                {visibleColumns.name && <td>{row.name}</td>}
                {visibleColumns.email && <td>{row.email}</td>}
                {visibleColumns.status && (
                  <td>
                    <span className={\`badge \${row.status}\`}>{row.status}</span>
                  </td>
                )}
                {visibleColumns.date && <td>{row.date}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

/* 
KEY EFFECTS USED:
1. Debounce search - useEffect with setTimeout cleanup
2. Fetch data - useEffect with page, search, sort, filters dependencies
3. Auto-cleanup - Return cleanup functions for all timers
*/

## 📝 Tổng kết các patterns chính:

### **1. News Feed** 
- ✅ Auto-refresh: \`setInterval()\` với cleanup
- ✅ LocalStorage: Load/save read articles
- ✅ Filter: Category + search
- ✅ Dependencies: \`[autoRefresh, category]\`

### **2. Pomodoro Timer**
- ✅ Countdown timer: \`setInterval()\` decrement
- ✅ Session switching: Work ↔ Break
- ✅ Audio notification: Play sound khi hết giờ
- ✅ Session history: Track completed sessions
- ✅ Cleanup: \`clearInterval()\` khi unmount

### **3. Notification Center**
- ✅ Real-time notifs: \`setInterval()\` tạo notification mới
- ✅ Browser Notification API: Native notifications
- ✅ Filter: All, unread, by type
- ✅ Unread count: Update document.title
- ✅ Mark read/delete: State management

### **4. Whiteboard**
- ✅ Canvas drawing: Mouse events + Canvas API
- ✅ BroadcastChannel: Sync drawing across tabs
- ✅ Undo/Redo: History stack với dataURL
- ✅ Color picker: Multiple colors
- ✅ Save: Export canvas to PNG

### **5. Data Table**
- ✅ Server-side pagination: Fetch với page dependency
- ✅ Debounced search: \`setTimeout()\` với cleanup
- ✅ Sorting: Multi-column với direction
- ✅ Row selection: Checkbox + bulk actions
- ✅ Column visibility: Toggle columns
- ✅ Export CSV: Blob download

## 🎯 Key useEffect Patterns Đã Dùng:

\`\`\`javascript
// 1. Auto-refresh với interval
useEffect(() => {
  const interval = setInterval(() => {...}, 60000);
  return () => clearInterval(interval);
}, [deps]);

// 2. Debounce
useEffect(() => {
  const timer = setTimeout(() => {...}, 500);
  return () => clearTimeout(timer);
}, [value]);

// 3. BroadcastChannel
useEffect(() => {
  const channel = new BroadcastChannel('name');
  channel.onmessage = (e) => {...};
  return () => channel.close();
}, []);

// 4. Fetch with dependencies
useEffect(() => {
  fetchData();
}, [page, search, filters]);

// 5. LocalStorage sync
useEffect(() => {
  localStorage.setItem('key', JSON.stringify(data));
}, [data]);

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
