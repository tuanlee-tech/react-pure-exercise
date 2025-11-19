import ExerciseCard from "../../../../components/ExerciseCard";

export default function HomeWork() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={"#"} title="Home Work" />

      <ExerciseCard.Description>
        {`
1. Task Manager App
Quản lý tasks với categories, priorities, và deadlines:

// Features:
// - Multiple task lists (Personal, Work, Shopping)
// - Priority levels (Low, Medium, High, Urgent)
// - Due dates với reminders
// - Subtasks
// - Tags
// - Search và filters
// - Sort options
// - Archive completed tasks
// - Statistics dashboard

2. Expense Tracker với Categories
Tracking chi tiêu chi tiết:

// Features:
// - Multiple categories và subcategories
// - Recurring expenses
// - Budget limits per category
// - Monthly/yearly views
// - Charts và statistics
// - Export reports
// - Multi-currency support
// - Receipt attachments (optional)

3. Blog Post Editor
Rich text editor với preview:

// Features:
// - Draft/Published status
// - Auto-save drafts
// - Version history
// - Tags và categories
// - Featured image
// - SEO metadata
// - Preview mode
// - Publish scheduling
// - Comment management

4. Music Player
Audio player với playlist:

// Features:
// - Play/Pause/Stop/Next/Previous
// - Playlist management
// - Shuffle và repeat modes
// - Volume control
// - Progress bar với seeking
// - Now playing info
// - Favorites
// - Search songs
// - Create custom playlists

5. Game: Tic Tac Toe với AI (Challenge)
// Features:
// - 2 player mode
// - vs Computer (AI)
// - Move history với time travel
// - Highlight winning line
// - Game statistics
// - Difficulty levels (Easy, Medium, Hard)
// - Undo move
// - Board size options (3x3, 4x4, 5x5)


`}
      </ExerciseCard.Description>

      <ExerciseCard.Code>
        {`

// ==========================================
// GIẢI BÀI TẬP VỀ NHÀ - NGÀY 7: useReducer
// ==========================================

// 1️⃣ TASK MANAGER APP
// Cốt lõi: Complex state với nested updates, multiple filters

const TASK_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_PRIORITY: 'SET_PRIORITY',
  ADD_SUBTASK: 'ADD_SUBTASK',
  SET_FILTER: 'SET_FILTER'
};

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: Date.now(),
          text: action.payload.text,
          category: action.payload.category,
          priority: action.payload.priority || 'medium',
          completed: false,
          subtasks: [],
          tags: action.payload.tags || [],
          dueDate: action.payload.dueDate
        }]
      };
    
    case TASK_ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    
    case TASK_ACTIONS.SET_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        )
      };
    
    case TASK_ACTIONS.ADD_SUBTASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId
            ? {
                ...task,
                subtasks: [...task.subtasks, {
                  id: Date.now(),
                  text: action.payload.text,
                  completed: false
                }]
              }
            : task
        )
      };
    
    case TASK_ACTIONS.SET_FILTER:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    
    default:
      return state;
  }
}

function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filters: { category: 'all', priority: 'all', status: 'all' }
  });

  // DERIVED STATE - Filtered tasks
  const filteredTasks = state.tasks.filter(task => {
    if (state.filters.category !== 'all' && task.category !== state.filters.category) return false;
    if (state.filters.priority !== 'all' && task.priority !== state.filters.priority) return false;
    if (state.filters.status === 'completed' && !task.completed) return false;
    if (state.filters.status === 'active' && task.completed) return false;
    return true;
  });

  // DERIVED STATE - Statistics
  const stats = {
    total: state.tasks.length,
    completed: state.tasks.filter(t => t.completed).length,
    byPriority: state.tasks.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {}),
    overdue: state.tasks.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < new Date()).length
  };

  return (
    <div>
      <h1>Task Manager - {stats.completed}/{stats.total} completed</h1>
      {/* Filters, task list, add form */}
    </div>
  );
}

// ==========================================
// 2️⃣ EXPENSE TRACKER
// Cốt lõi: Computed totals, category budgets, complex calculations

const EXPENSE_ACTIONS = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  UPDATE_EXPENSE: 'UPDATE_EXPENSE',
  SET_BUDGET: 'SET_BUDGET'
};

function expenseReducer(state, action) {
  switch (action.type) {
    case EXPENSE_ACTIONS.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, {
          id: Date.now(),
          amount: action.payload.amount,
          category: action.payload.category,
          description: action.payload.description,
          date: action.payload.date || new Date().toISOString(),
          recurring: action.payload.recurring || false
        }]
      };
    
    case EXPENSE_ACTIONS.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(e => e.id !== action.payload)
      };
    
    case EXPENSE_ACTIONS.SET_BUDGET:
      return {
        ...state,
        budgets: {
          ...state.budgets,
          [action.payload.category]: action.payload.amount
        }
      };
    
    default:
      return state;
  }
}

function ExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, {
    expenses: [],
    budgets: { food: 5000000, transport: 2000000, entertainment: 3000000 }
  });

  // DERIVED STATE - Total by category (KHÔNG LƯU trong state!)
  const totalByCategory = state.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // DERIVED STATE - Budget status
  const budgetStatus = Object.keys(state.budgets).map(category => {
    const spent = totalByCategory[category] || 0;
    const budget = state.budgets[category];
    return {
      category,
      budget,
      spent,
      remaining: budget - spent,
      percentage: (spent / budget) * 100,
      isOverBudget: spent > budget
    };
  });

  // DERIVED STATE - Monthly totals
  const monthlyTotal = state.expenses
    .filter(e => new Date(e.date).getMonth() === new Date().getMonth())
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h1>Expense Tracker - {monthlyTotal.toLocaleString()}đ this month</h1>
      {budgetStatus.map(item => (
        <div key={item.category}>
          <h3>{item.category}</h3>
          <progress value={item.percentage} max="100" />
          <p>{item.spent.toLocaleString()} / {item.budget.toLocaleString()}đ</p>
          {item.isOverBudget && <span style={{color: 'red'}}>⚠️ Over budget!</span>}
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 3️⃣ BLOG POST EDITOR
// Cốt lõi: Multi-step state machine, auto-save, version history

const POST_ACTIONS = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  SAVE_DRAFT: 'SAVE_DRAFT',
  PUBLISH: 'PUBLISH',
  UNPUBLISH: 'UNPUBLISH',
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
  SET_STATUS: 'SET_STATUS'
};

function postReducer(state, action) {
  switch (action.type) {
    case POST_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        post: {
          ...state.post,
          [action.payload.field]: action.payload.value
        },
        isDirty: true, // Có thay đổi chưa save
        lastModified: Date.now()
      };
    
    case POST_ACTIONS.SAVE_DRAFT:
      return {
        ...state,
        savedPost: { ...state.post },
        isDirty: false,
        lastSaved: Date.now(),
        versions: [...state.versions, { 
          ...state.post, 
          savedAt: Date.now() 
        }]
      };
    
    case POST_ACTIONS.PUBLISH:
      return {
        ...state,
        post: { ...state.post, status: 'published', publishedAt: Date.now() },
        isDirty: false
      };
    
    case POST_ACTIONS.ADD_TAG:
      return {
        ...state,
        post: {
          ...state.post,
          tags: [...state.post.tags, action.payload]
        }
      };
    
    case POST_ACTIONS.REMOVE_TAG:
      return {
        ...state,
        post: {
          ...state.post,
          tags: state.post.tags.filter(t => t !== action.payload)
        }
      };
    
    default:
      return state;
  }
}

function BlogEditor() {
  const [state, dispatch] = useReducer(postReducer, {
    post: {
      title: '',
      content: '',
      excerpt: '',
      featuredImage: null,
      tags: [],
      category: '',
      status: 'draft', // draft | published
      publishedAt: null,
      seo: { metaTitle: '', metaDescription: '' }
    },
    savedPost: null,
    isDirty: false,
    lastSaved: null,
    lastModified: null,
    versions: []
  });

  // Auto-save every 30s if dirty
  useEffect(() => {
    if (state.isDirty) {
      const timer = setTimeout(() => {
        dispatch({ type: POST_ACTIONS.SAVE_DRAFT });
        console.log('Auto-saved!');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [state.isDirty, state.lastModified]);

  // DERIVED STATE - Word count
  const wordCount = state.post.content.split(/\\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words/min

  return (
    <div>
      <h1>Blog Editor</h1>
      <span>{state.post.status === 'published' ? '✅ Published' : '📝 Draft'}</span>
      <span>{state.isDirty ? '• Unsaved changes' : '✓ Saved'}</span>
      
      <input 
        value={state.post.title}
        onChange={(e) => dispatch({
          type: POST_ACTIONS.UPDATE_FIELD,
          payload: { field: 'title', value: e.target.value }
        })}
        placeholder="Post title..."
      />
      
      <textarea 
        value={state.post.content}
        onChange={(e) => dispatch({
          type: POST_ACTIONS.UPDATE_FIELD,
          payload: { field: 'content', value: e.target.value }
        })}
        placeholder="Write your post..."
      />
      
      <div>
        <p>Words: {wordCount} | Reading time: ~{readingTime} min</p>
        <p>Versions: {state.versions.length}</p>
      </div>

      <button onClick={() => dispatch({ type: POST_ACTIONS.SAVE_DRAFT })}>
        Save Draft
      </button>
      <button onClick={() => dispatch({ type: POST_ACTIONS.PUBLISH })}>
        Publish
      </button>
    </div>
  );
}

// ==========================================
// 4️⃣ MUSIC PLAYER
// Cốt lõi: State machine (idle/playing/paused), playlist management

const PLAYER_ACTIONS = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
  SET_VOLUME: 'SET_VOLUME',
  SEEK: 'SEEK',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_REPEAT: 'TOGGLE_REPEAT',
  ADD_TO_PLAYLIST: 'ADD_TO_PLAYLIST',
  REMOVE_FROM_PLAYLIST: 'REMOVE_FROM_PLAYLIST',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
};

function playerReducer(state, action) {
  switch (action.type) {
    case PLAYER_ACTIONS.PLAY:
      return {
        ...state,
        isPlaying: true,
        currentTrackId: action.payload || state.currentTrackId
      };
    
    case PLAYER_ACTIONS.PAUSE:
      return { ...state, isPlaying: false };
    
    case PLAYER_ACTIONS.NEXT:
      const currentIndex = state.playlist.indexOf(state.currentTrackId);
      const nextIndex = state.shuffle 
        ? Math.floor(Math.random() * state.playlist.length)
        : (currentIndex + 1) % state.playlist.length;
      return {
        ...state,
        currentTrackId: state.playlist[nextIndex],
        isPlaying: true
      };
    
    case PLAYER_ACTIONS.PREVIOUS:
      const prevIndex = state.playlist.indexOf(state.currentTrackId);
      const newIndex = prevIndex === 0 ? state.playlist.length - 1 : prevIndex - 1;
      return {
        ...state,
        currentTrackId: state.playlist[newIndex],
        isPlaying: true
      };
    
    case PLAYER_ACTIONS.SET_VOLUME:
      return { ...state, volume: action.payload };
    
    case PLAYER_ACTIONS.TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle };
    
    case PLAYER_ACTIONS.TOGGLE_REPEAT:
      return { ...state, repeat: !state.repeat };
    
    case PLAYER_ACTIONS.TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
    
    default:
      return state;
  }
}

function MusicPlayer() {
  const [state, dispatch] = useReducer(playerReducer, {
    tracks: {
      1: { id: 1, title: 'Song 1', artist: 'Artist A', duration: 180 },
      2: { id: 2, title: 'Song 2', artist: 'Artist B', duration: 240 },
      3: { id: 3, title: 'Song 3', artist: 'Artist C', duration: 200 }
    },
    playlist: [1, 2, 3],
    currentTrackId: 1,
    isPlaying: false,
    volume: 50,
    shuffle: false,
    repeat: false,
    favorites: []
  });

  const currentTrack = state.tracks[state.currentTrackId];
  const isFavorite = state.favorites.includes(state.currentTrackId);

  return (
    <div className="music-player">
      <h1>🎵 Music Player</h1>
      
      {/* Now Playing */}
      <div className="now-playing">
        <h2>{currentTrack.title}</h2>
        <p>{currentTrack.artist}</p>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_FAVORITE, payload: currentTrack.id })}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.PREVIOUS })}>⏮️</button>
        <button onClick={() => dispatch({ 
          type: state.isPlaying ? PLAYER_ACTIONS.PAUSE : PLAYER_ACTIONS.PLAY 
        })}>
          {state.isPlaying ? '⏸️' : '▶️'}
        </button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.NEXT })}>⏭️</button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_SHUFFLE })}>
          🔀 {state.shuffle ? 'ON' : 'OFF'}
        </button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_REPEAT })}>
          🔁 {state.repeat ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Volume */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={state.volume}
        onChange={(e) => dispatch({ 
          type: PLAYER_ACTIONS.SET_VOLUME, 
          payload: parseInt(e.target.value) 
        })}
      />
      <span>🔊 {state.volume}%</span>

      {/* Playlist */}
      <div className="playlist">
        <h3>Playlist ({state.playlist.length} songs)</h3>
        {state.playlist.map(trackId => {
          const track = state.tracks[trackId];
          return (
            <div 
              key={trackId} 
              className={trackId === state.currentTrackId ? 'active' : ''}
              onClick={() => dispatch({ type: PLAYER_ACTIONS.PLAY, payload: trackId })}
            >
              {track.title} - {track.artist}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 5️⃣ TIC TAC TOE WITH AI (CHALLENGE)
// Cốt lõi: Game state machine, move history, minimax algorithm

const GAME_ACTIONS = {
  MAKE_MOVE: 'MAKE_MOVE',
  JUMP_TO_MOVE: 'JUMP_TO_MOVE',
  RESET_GAME: 'RESET_GAME',
  SET_MODE: 'SET_MODE' // vs Player | vs Computer
};

function gameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.MAKE_MOVE:
      const { index, player } = action.payload;
      const newBoard = [...state.currentBoard];
      
      if (newBoard[index] || state.winner) return state;
      
      newBoard[index] = player;
      const winner = calculateWinner(newBoard);
      
      return {
        ...state,
        history: [...state.history, { board: newBoard, move: index }],
        currentBoard: newBoard,
        currentPlayer: player === 'X' ? 'O' : 'X',
        winner,
        moveCount: state.moveCount + 1
      };
    
    case GAME_ACTIONS.JUMP_TO_MOVE:
      const move = state.history[action.payload];
      return {
        ...state,
        currentBoard: move.board,
        currentPlayer: action.payload % 2 === 0 ? 'X' : 'O',
        winner: calculateWinner(move.board),
        moveCount: action.payload
      };
    
    case GAME_ACTIONS.RESET_GAME:
      return {
        ...state,
        history: [{ board: Array(9).fill(null), move: null }],
        currentBoard: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        moveCount: 0
      };
    
    default:
      return state;
  }
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  
  return board.every(cell => cell) ? { winner: 'Draw' } : null;
}

function TicTacToe() {
  const [state, dispatch] = useReducer(gameReducer, {
    history: [{ board: Array(9).fill(null), move: null }],
    currentBoard: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    moveCount: 0,
    mode: 'pvp' // pvp | vsAI
  });

  const handleClick = (index) => {
    dispatch({ 
      type: GAME_ACTIONS.MAKE_MOVE, 
      payload: { index, player: state.currentPlayer } 
    });
  };

  // AI move (simple random)
  useEffect(() => {
    if (state.mode === 'vsAI' && state.currentPlayer === 'O' && !state.winner) {
      setTimeout(() => {
        const availableMoves = state.currentBoard
          .map((cell, i) => cell === null ? i : null)
          .filter(i => i !== null);
        
        if (availableMoves.length > 0) {
          const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
          dispatch({ 
            type: GAME_ACTIONS.MAKE_MOVE, 
            payload: { index: randomMove, player: 'O' } 
          });
        }
      }, 500);
    }
  }, [state.currentPlayer, state.mode, state.winner]);

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      
      <div className="status">
        {state.winner 
          ? state.winner.winner === 'Draw' 
            ? 'Draw!' 
            : \`Winner: \${state.winner.winner}\` 
          : \`Next player: \${state.currentPlayer}\`}
      </div>

      {/* Board */}
      <div className="board">
        {state.currentBoard.map((cell, index) => (
          <button 
            key={index}
            onClick={() => handleClick(index)}
            disabled={cell || state.winner}
            className={state.winner?.line?.includes(index) ? 'winning-cell' : ''}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* History */}
      <div className="history">
        <h3>Move History</h3>
        <button onClick={() => dispatch({ type: GAME_ACTIONS.RESET_GAME })}>
          New Game
        </button>
        {state.history.map((_, index) => (
          <button 
            key={index}
            onClick={() => dispatch({ type: GAME_ACTIONS.JUMP_TO_MOVE, payload: index })}
          >
            {index === 0 ? 'Game start' : \`Move #\${index}\`}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="stats">
        <p>Total moves: {state.moveCount}</p>
      </div>
    </div>
  );
}

// ==========================================
// 📝 KEY PATTERNS SUMMARY
// ==========================================

/*
1. REDUCER PATTERN:
   - Pure function (state, action) => newState
   - Immutable updates với spread operator
   - Switch case cho action types
   - Default case return state

2. ACTION TYPES:
   - Constants để tránh typo
   - Descriptive names (VERB_NOUN)
   - Payload cho data

3. COMPLEX STATE:
   - Nested objects/arrays
   - Multiple related sub-values
   - State machine patterns (idle/playing/paused)

4. DERIVED STATE:
   - Calculate từ state, KHÔNG lưu
   - Use useMemo nếu expensive
   - Examples: totals, filters, statistics

5. STATE TRANSITIONS:
   - Next state depends on previous
   - Multiple fields update together
   - History/undo functionality

6. IMMUTABLE UPDATES:
   - Arrays: map, filter, concat, slice
   - Objects: spread operator
   - Nested: spread multiple levels

KEY TAKEAWAY:
- useReducer = Centralized state logic
- Reducer = Pure + Predictable
- Actions = What happened
- Derived = Don't duplicate state
- Immutability = Always new references

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
