import ExerciseCard from "../../../../components/ExerciseCard";

export default function HomeWork() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={"#"} title="Home Work" />

      <ExerciseCard.Description>
        {`
1. Notes App
Tạo ứng dụng ghi chú:

CRUD operations (Create, Read, Update, Delete)
Categories/Tags
Search functionality
Rich text formatting (optional)
Pin/Favorite notes
Sort by: date, title, modified
LocalStorage persistence
Export/Import notes
2. Budget Planner
Quản lý ngân sách cá nhân:

// State structure
{
  income: { amount, source, date },
  expenses: [{ amount, category, date, recurring }],
  budget: { category: limit },
  savings: { goal, current, deadline }
}

// Features:
// - Set income
// - Add/edit/delete expenses
// - Set budget limits per category
// - Alerts khi vượt budget
// - Savings goal tracker
// - Monthly/yearly reports
// - Recurring expenses

3. Habit Tracker
Theo dõi thói quen hàng ngày:

// State structure
{
  habits: [
    {
      id,
      name,
      goal, // 'daily', 'weekly', số lần
      streak,
      history: { date: completed }
    }
  ]
}

// Features:
// - Add/edit/delete habits
// - Mark as completed
// - Current streak
// - Best streak
// - Calendar view
// - Statistics
// - Reminders (optional)

4. Recipe Book
Sổ công thức nấu ăn:

// State structure
{
  recipes: [
    {
      id,
      title,
      ingredients: [{ name, amount, unit }],
      steps: [],
      prepTime,
      cookTime,
      servings,
      difficulty,
      category,
      tags,
      image,
      rating,
      notes
    }
  ],
  shoppingList: []
}

// Features:
// - Add/edit/delete recipes
// - Search and filter
// - Scale servings
// - Add to shopping list
// - Rate recipes
// - Categories and tags
// - Favorite recipes

5. Pomodoro Timer với Stats (Challenge)
Timer làm việc với thống kê:

// State structure
{
  timer: {
    minutes,
    seconds,
    isRunning,
    mode // 'work', 'shortBreak', 'longBreak'
  },
  settings: {
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    sessionsUntilLongBreak
  },
  sessions: [
    {
      date,
      completedPomodoros,
      totalFocusTime,
      tasks: [{ name, pomodoros }]
    }
  ],
  currentTask: { name, estimatedPomodoros, completed }
}

// Features:
// - Customizable durations
// - Auto-switch between work/break
// - Task list với pomodoro estimates
// - Daily/weekly statistics
// - Focus time trends
// - Browser notifications
// - Sound alerts
// - Background work tracking
`}
      </ExerciseCard.Description>

      <ExerciseCard.Code>
        {`
// ==========================================
// GIẢI BÀI TẬP VỀ NHÀ - NGÀY 6: useState Mastery
// ==========================================

// 1️⃣ NOTES APP
// Cốt lõi: CRUD operations, categories/tags, search, localStorage persistence

function NotesApp() {
  // Lazy init từ localStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'personal',
    tags: []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date'); // date | title | modified
  const [editingId, setEditingId] = useState(null);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = () => {
    if (!formData.title.trim()) return;

    const newNote = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      isPinned: false
    };

    setNotes(prev => [newNote, ...prev]);
    resetForm();
  };

  // Update note
  const updateNote = () => {
    setNotes(prev =>
      prev.map(note =>
        note.id === editingId
          ? { ...note, ...formData, modifiedAt: new Date().toISOString() }
          : note
      )
    );
    resetForm();
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  // Toggle pin
  const togglePin = (id) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  // Edit note - load vào form
  const startEdit = (note) => {
    setFormData({
      title: note.title,
      content: note.content,
      category: note.category,
      tags: note.tags
    });
    setEditingId(note.id);
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', category: 'personal', tags: [] });
    setEditingId(null);
  };

  // DERIVED STATE - Filtered & sorted notes
  const processedNotes = notes
    .filter(note => {
      const matchSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = filterCategory === 'all' || note.category === filterCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      // Pinned notes luôn lên đầu
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
      
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'modified':
          return new Date(b.modifiedAt) - new Date(a.modifiedAt);
        default: // date
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Export data
  const exportNotes = () => {
    const dataStr = JSON.stringify(notes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = \`notes-\${Date.now()}.json\`;
    link.click();
  };

  // Import data
  const importNotes = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        setNotes(prev => [...imported, ...prev]);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="notes-app">
      <h1>📝 Notes App</h1>

      {/* Form */}
      <div className="note-form">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Title..."
        />
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Content..."
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="ideas">Ideas</option>
        </select>
        
        <button onClick={editingId ? updateNote : addNote}>
          {editingId ? 'Update' : 'Add'} Note
        </button>
        {editingId && <button onClick={resetForm}>Cancel</button>}
      </div>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search notes..."
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="ideas">Ideas</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="modified">Sort by Modified</option>
        </select>
        <button onClick={exportNotes}>Export</button>
        <label>
          Import <input type="file" accept=".json" onChange={importNotes} />
        </label>
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {processedNotes.map(note => (
          <div key={note.id} className="note-card">
            <div className="note-header">
              <h3>{note.title}</h3>
              <button onClick={() => togglePin(note.id)}>
                {note.isPinned ? '📌' : '📍'}
              </button>
            </div>
            <p>{note.content}</p>
            <div className="note-meta">
              <span className="category">{note.category}</span>
              <span className="date">{new Date(note.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="note-actions">
              <button onClick={() => startEdit(note)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2️⃣ BUDGET PLANNER
// Cốt lõi: Income/expenses tracking, budget limits, alerts, savings goal

function BudgetPlanner() {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('budget');
    return saved ? JSON.parse(saved) : {
      income: { amount: 0, source: '', date: '' },
      expenses: [],
      budgetLimits: {
        'Ăn uống': 5000000,
        'Di chuyển': 2000000,
        'Giải trí': 3000000,
        'Mua sắm': 4000000
      },
      savingsGoal: { target: 10000000, current: 0, deadline: '' }
    };
  });

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Ăn uống',
    date: new Date().toISOString().split('T')[0],
    recurring: false
  });

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state));
  }, [state]);

  // Add expense
  const addExpense = () => {
    if (!formData.amount) return;

    const newExpense = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount)
    };

    setState(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));

    setFormData({
      description: '',
      amount: '',
      category: 'Ăn uống',
      date: new Date().toISOString().split('T')[0],
      recurring: false
    });
  };

  // Delete expense
  const deleteExpense = (id) => {
    setState(prev => ({
      ...prev,
      expenses: prev.expenses.filter(e => e.id !== id)
    }));
  };

  // Set income
  const setIncome = (amount, source) => {
    setState(prev => ({
      ...prev,
      income: { amount, source, date: new Date().toISOString() }
    }));
  };

  // Update budget limit
  const updateBudgetLimit = (category, limit) => {
    setState(prev => ({
      ...prev,
      budgetLimits: { ...prev.budgetLimits, [category]: parseFloat(limit) }
    }));
  };

  // DERIVED STATE - Spending by category
  const spendingByCategory = state.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // DERIVED STATE - Budget status
  const budgetStatus = Object.keys(state.budgetLimits).map(category => {
    const spent = spendingByCategory[category] || 0;
    const limit = state.budgetLimits[category];
    const percentage = (spent / limit) * 100;
    return {
      category,
      spent,
      limit,
      remaining: limit - spent,
      percentage,
      isOverBudget: spent > limit
    };
  });

  // DERIVED STATE - Monthly totals
  const totalExpenses = state.expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = state.income.amount - totalExpenses;

  // DERIVED STATE - Savings progress
  const savingsProgress = (state.savingsGoal.current / state.savingsGoal.target) * 100;

  return (
    <div className="budget-planner">
      <h1>💰 Budget Planner</h1>

      {/* Income Section */}
      <div className="income-section">
        <h2>Income: {state.income.amount.toLocaleString()}đ</h2>
        <input
          type="number"
          placeholder="Amount"
          onBlur={(e) => setIncome(parseFloat(e.target.value) || 0, 'Salary')}
        />
      </div>

      {/* Balance Overview */}
      <div className="balance">
        <h3>Balance: {balance.toLocaleString()}đ</h3>
        <p>Income: {state.income.amount.toLocaleString()}đ</p>
        <p>Expenses: {totalExpenses.toLocaleString()}đ</p>
      </div>

      {/* Add Expense Form */}
      <div className="expense-form">
        <input
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="Amount"
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option>Ăn uống</option>
          <option>Di chuyển</option>
          <option>Giải trí</option>
          <option>Mua sắm</option>
        </select>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={formData.recurring}
            onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
          />
          Recurring
        </label>
        <button onClick={addExpense}>Add Expense</button>
      </div>

      {/* Budget Status per Category */}
      <div className="budget-status">
        <h3>Budget Status</h3>
        {budgetStatus.map(item => (
          <div key={item.category} className={item.isOverBudget ? 'over-budget' : ''}>
            <h4>{item.category}</h4>
            <progress value={item.percentage} max="100" />
            <p>
              {item.spent.toLocaleString()} / {item.limit.toLocaleString()}đ
              ({item.percentage.toFixed(1)}%)
            </p>
            {item.isOverBudget && <span style={{color: 'red'}}>⚠️ OVER BUDGET!</span>}
            <input
              type="number"
              placeholder="New limit"
              onBlur={(e) => updateBudgetLimit(item.category, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Savings Goal */}
      <div className="savings-goal">
        <h3>Savings Goal</h3>
        <progress value={savingsProgress} max="100" />
        <p>
          {state.savingsGoal.current.toLocaleString()} / 
          {state.savingsGoal.target.toLocaleString()}đ 
          ({savingsProgress.toFixed(1)}%)
        </p>
      </div>

      {/* Expenses List */}
      <div className="expenses-list">
        <h3>Recent Expenses</h3>
        {state.expenses.slice(-10).reverse().map(expense => (
          <div key={expense.id} className="expense-item">
            <span>{expense.description}</span>
            <span>{expense.category}</span>
            <span>{expense.amount.toLocaleString()}đ</span>
            <span>{expense.date}</span>
            {expense.recurring && <span>🔄</span>}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3️⃣ HABIT TRACKER
// Cốt lõi: Daily habits tracking, streak counting, calendar view

function HabitTracker() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    goal: 'daily', // daily | weekly | custom
    targetCount: 1
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Add habit
  const addHabit = () => {
    if (!formData.name.trim()) return;

    const newHabit = {
      id: Date.now(),
      ...formData,
      history: {}, // { 'YYYY-MM-DD': count }
      currentStreak: 0,
      bestStreak: 0,
      createdAt: new Date().toISOString()
    };

    setHabits(prev => [...prev, newHabit]);
    setFormData({ name: '', goal: 'daily', targetCount: 1 });
  };

  // Toggle habit completion for today
  const toggleHabit = (habitId) => {
    const today = new Date().toISOString().split('T')[0];

    setHabits(prev =>
      prev.map(habit => {
        if (habit.id !== habitId) return habit;

        const newHistory = { ...habit.history };
        const currentCount = newHistory[today] || 0;

        if (currentCount >= habit.targetCount) {
          delete newHistory[today]; // Mark as incomplete
        } else {
          newHistory[today] = currentCount + 1;
        }

        // Calculate streak
        const { currentStreak, bestStreak } = calculateStreak(newHistory, habit.goal);

        return {
          ...habit,
          history: newHistory,
          currentStreak,
          bestStreak: Math.max(bestStreak, habit.bestStreak)
        };
      })
    );
  };

  // Calculate current streak
  const calculateStreak = (history, goal) => {
    const dates = Object.keys(history).sort().reverse();
    let currentStreak = 0;
    let bestStreak = 0;
    let streak = 0;

    const today = new Date();
    let checkDate = new Date(today);

    for (let i = 0; i < 365; i++) {
      const dateStr = checkDate.toISOString().split('T')[0];
      
      if (history[dateStr]) {
        streak++;
        if (i === 0) currentStreak = streak;
      } else {
        if (streak > bestStreak) bestStreak = streak;
        if (i === 0) break; // Streak broken today
        streak = 0;
      }

      checkDate.setDate(checkDate.getDate() - 1);
    }

    return { currentStreak, bestStreak: Math.max(streak, bestStreak) };
  };

  // Delete habit
  const deleteHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  // DERIVED STATE - Today's completion
  const today = new Date().toISOString().split('T')[0];
  const todayStats = {
    total: habits.length,
    completed: habits.filter(h => (h.history[today] || 0) >= h.targetCount).length
  };

  return (
    <div className="habit-tracker">
      <h1>✅ Habit Tracker</h1>

      {/* Add Habit Form */}
      <div className="habit-form">
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Habit name..."
        />
        <select
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <input
          type="number"
          value={formData.targetCount}
          onChange={(e) => setFormData({ ...formData, targetCount: parseInt(e.target.value) })}
          min="1"
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>

      {/* Today's Progress */}
      <div className="today-progress">
        <h3>Today: {todayStats.completed}/{todayStats.total} completed</h3>
        <progress value={todayStats.completed} max={todayStats.total} />
      </div>

      {/* Habits List */}
      <div className="habits-list">
        {habits.map(habit => {
          const todayCount = habit.history[today] || 0;
          const isCompleted = todayCount >= habit.targetCount;

          return (
            <div key={habit.id} className="habit-card">
              <div className="habit-header">
                <h3>{habit.name}</h3>
                <button onClick={() => deleteHabit(habit.id)}>Delete</button>
              </div>

              <div className="habit-info">
                <p>Goal: {habit.goal} ({habit.targetCount}x)</p>
                <p>🔥 Current Streak: {habit.currentStreak} days</p>
                <p>🏆 Best Streak: {habit.bestStreak} days</p>
              </div>

              <div className="habit-action">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={isCompleted ? 'completed' : ''}
                >
                  {isCompleted ? '✅' : '⭕'} Today: {todayCount}/{habit.targetCount}
                </button>
              </div>

              {/* Last 7 days */}
              <div className="habit-history">
                {[...Array(7)].map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - i);
                  const dateStr = date.toISOString().split('T')[0];
                  const count = habit.history[dateStr] || 0;
                  const completed = count >= habit.targetCount;

                  return (
                    <div key={i} className="day">
                      <span>{date.getDate()}</span>
                      <span>{completed ? '✅' : '⭕'}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 4️⃣ RECIPE BOOK
// Cốt lõi: Recipe CRUD, ingredients, steps, shopping list

function RecipeBook() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    return saved ? JSON.parse(saved) : [];
  });

  const [shoppingList, setShoppingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    ingredients: [{ name: '', amount: '', unit: '' }],
    steps: [''],
    prepTime: 0,
    cookTime: 0,
    servings: 4,
    difficulty: 'medium',
    category: 'main',
    tags: [],
    rating: 0,
    notes: ''
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  // Add/Update recipe
  const saveRecipe = () => {
    if (!formData.title.trim()) return;

    if (editingId) {
      setRecipes(prev =>
        prev.map(recipe =>
          recipe.id === editingId ? { ...recipe, ...formData } : recipe
        )
      );
      setEditingId(null);
    } else {
      const newRecipe = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      setRecipes(prev => [...prev, newRecipe]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      ingredients: [{ name: '', amount: '', unit: '' }],
      steps: [''],
      prepTime: 0,
      cookTime: 0,
      servings: 4,
      difficulty: 'medium',
      category: 'main',
      tags: [],
      rating: 0,
      notes: ''
    });
  };

  // Update ingredient
  const updateIngredient = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? { ...ing, [field]: value } : ing
      )
    }));
  };

  // Add ingredient
  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: '', amount: '', unit: '' }]
    }));
  };

  // Update step
  const updateStep = (index, value) => {
    setFormData(prev => ({
      ...prev,
      steps: prev.steps.map((step, i) => (i === index ? value : step))
    }));
  };

  // Add step
  const addStep = () => {
    setFormData(prev => ({
      ...prev,
      steps: [...prev.steps, '']
    }));
  };

  // Scale servings
  const scaleServings = (recipe, newServings) => {
    const scale = newServings / recipe.servings;
    return {
      ...recipe,
      servings: newServings,
      ingredients: recipe.ingredients.map(ing => ({
        ...ing,
        amount: (parseFloat(ing.amount) * scale).toFixed(2)
      }))
    };
  };

  // Add to shopping list
  const addToShoppingList = (recipe) => {
    setShoppingList(prev => [
      ...prev,
      ...recipe.ingredients.map(ing => ({
        ...ing,
        recipeTitle: recipe.title,
        checked: false
      }))
    ]);
  };

  // Toggle shopping list item
  const toggleShoppingItem = (index) => {
    setShoppingList(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // DERIVED STATE - Filtered recipes
  const filteredRecipes = recipes.filter(recipe => {
    const matchSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === 'all' || recipe.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="recipe-book">
      <h1>👨‍🍳 Recipe Book</h1>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="breakfast">Breakfast</option>
          <option value="main">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      {/* Add/Edit Recipe Form */}
      <div className="recipe-form">
        <h3>{editingId ? 'Edit' : 'Add'} Recipe</h3>
        
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Recipe title..."
        />

        <div className="time-inputs">
          <input
            type="number"
            value={formData.prepTime}
            onChange={(e) => setFormData({ ...formData, prepTime: parseInt(e.target.value) })}
            placeholder="Prep time (min)"
          />
          <input
            type="number"
            value={formData.cookTime}
            onChange={(e) => setFormData({ ...formData, cookTime: parseInt(e.target.value) })}
            placeholder="Cook time (min)"
          />
          <input
            type="number"
            value={formData.servings}
            onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
            placeholder="Servings"
          />
        </div>

        {/* Ingredients */}
        <div className="ingredients">
          <h4>Ingredients</h4>
          {formData.ingredients.map((ing, index) => (
            <div key={index}>
              <input
                value={ing.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                placeholder="Ingredient"
              />
              <input
                value={ing.amount}
                onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                placeholder="Amount"
              />
              <input
                value={ing.unit}
                onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                placeholder="Unit"
              />
            </div>
          ))}
          <button onClick={addIngredient}>+ Add Ingredient</button>
        </div>

        {/* Steps */}
        <div className="steps">
          <h4>Steps</h4>
          {formData.steps.map((step, index) => (
            <textarea
              key={index}
              value={step}
              onChange={(e) => updateStep(index, e.target.value)}
              placeholder={\`Step \${index + 1}...\`}
            />
          ))}
          <button onClick={addStep}>+ Add Step</button>
        </div>

        <button onClick={saveRecipe}>{editingId ? 'Update' : 'Add'} Recipe</button>
        {editingId && <button onClick={resetForm}>Cancel</button>}
      </div>

      {/* Recipes List */}
      <div className="recipes-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>⏱️ {recipe.prepTime + recipe.cookTime} min | 🍽️ {recipe.servings} servings</p>
            <p>Difficulty: {recipe.difficulty}</p>
            
            <div className="recipe-actions">
              <button onClick={() => { setFormData(recipe); setEditingId(recipe.id); }}>
                Edit
              </button>
              <button onClick={() => addToShoppingList(recipe)}>
                Add to Shopping List
              </button>
              <button onClick={() => setRecipes(prev => prev.filter(r => r.id !== recipe.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping List */}
      <div className="shopping-list">
        <h3>🛒 Shopping List ({shoppingList.filter(i => !i.checked).length} items)</h3>
        {shoppingList.map((item, index) => (
          <div key={index} className={item.checked ? 'checked' : ''}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleShoppingItem(index)}
            />
            <span>{item.amount} {item.unit} {item.name}</span>
            <small>({item.recipeTitle})</small>
          </div>
        ))}
        <button onClick={() => setShoppingList([])}>Clear List</button>
      </div>
    </div>
  );


// ==========================================
// 5️⃣ POMODORO TIMER WITH STATS (CHALLENGE)
// Cốt lõi: Timer state machine, work/break modes, task tracking, statistics

function PomodoroTimer() {
  // Settings
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('pomodoro-settings');
    return saved ? JSON.parse(saved) : {
      workDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      sessionsUntilLongBreak: 4
    };
  });

  // Timer state
  const [timer, setTimer] = useState({
    minutes: settings.workDuration,
    seconds: 0,
    isRunning: false,
    mode: 'work' // 'work' | 'shortBreak' | 'longBreak'
  });

  // Session tracking
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem('pomodoro-sessions');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentTask, setCurrentTask] = useState({
    name: '',
    estimatedPomodoros: 1,
    completedPomodoros: 0
  });

  const [tasks, setTasks] = useState([]);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-settings', JSON.stringify(settings));
  }, [settings]);

  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-sessions', JSON.stringify(sessions));
  }, [sessions]);

  // Timer countdown
  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Timer finished
          handleTimerComplete();
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  // Handle timer completion
  const handleTimerComplete = () => {
    // Play sound notification
    playNotificationSound();

    if (timer.mode === 'work') {
      // Work session completed
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);

      // Update current task
      if (currentTask.name) {
        setCurrentTask(prev => ({
          ...prev,
          completedPomodoros: prev.completedPomodoros + 1
        }));
      }

      // Save session
      const today = new Date().toISOString().split('T')[0];
      const todaySession = sessions.find(s => s.date === today);

      if (todaySession) {
        setSessions(prev =>
          prev.map(s =>
            s.date === today
              ? {
                  ...s,
                  completedPomodoros: s.completedPomodoros + 1,
                  totalFocusTime: s.totalFocusTime + settings.workDuration
                }
              : s
          )
        );
      } else {
        setSessions(prev => [
          ...prev,
          {
            date: today,
            completedPomodoros: 1,
            totalFocusTime: settings.workDuration,
            tasks: currentTask.name ? [{ name: currentTask.name, pomodoros: 1 }] : []
          }
        ]);
      }

      // Switch to break
      const isLongBreak = newCompletedPomodoros % settings.sessionsUntilLongBreak === 0;
      startBreak(isLongBreak ? 'longBreak' : 'shortBreak');
    } else {
      // Break finished, back to work
      startWork();
    }

    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Pomodoro Timer', {
        body: timer.mode === 'work' ? 'Time for a break!' : 'Back to work!',
        icon: '🍅'
      });
    }
  };

  // Notification sound
  const playNotificationSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZQQ0PVqzt7qVYGAg+ltv0xnElBSl+zPLaizsIGGS57OihUBELTKXi8bllHAU2jdXy0HwpBSp6yvDdkj8JE1y05+mnVRQLRp/g8r1sIAUqfs/y2Ik3CBhku+znoVARC0yl4vG5ZRwFNo3V8tB8KQUqeMrw3ZI/CRNctOfpp1UVAAAAAAAAAAAAAAAAAAAAAAAAAAA'); // Simplified beep
    audio.play().catch(() => {}); // Ignore errors if audio can't play
  };

  // Start/pause timer
  const toggleTimer = () => {
    setTimer(prev => ({ ...prev, isRunning: !prev.isRunning }));

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  // Start work session
  const startWork = () => {
    setTimer({
      minutes: settings.workDuration,
      seconds: 0,
      isRunning: false,
      mode: 'work'
    });
  };

  // Start break
  const startBreak = (type) => {
    const duration = type === 'longBreak' 
      ? settings.longBreakDuration 
      : settings.shortBreakDuration;

    setTimer({
      minutes: duration,
      seconds: 0,
      isRunning: true,
      mode: type
    });
  };

  // Reset timer
  const resetTimer = () => {
    const duration = timer.mode === 'work' 
      ? settings.workDuration
      : timer.mode === 'shortBreak'
        ? settings.shortBreakDuration
        : settings.longBreakDuration;

    setTimer({
      minutes: duration,
      seconds: 0,
      isRunning: false,
      mode: timer.mode
    });
  };

  // Skip to next mode
  const skipToNext = () => {
    if (timer.mode === 'work') {
      const isLongBreak = (completedPomodoros + 1) % settings.sessionsUntilLongBreak === 0;
      startBreak(isLongBreak ? 'longBreak' : 'shortBreak');
    } else {
      startWork();
    }
  };

  // Add task
  const addTask = () => {
    if (!currentTask.name.trim()) return;

    setTasks(prev => [...prev, {
      id: Date.now(),
      name: currentTask.name,
      estimatedPomodoros: currentTask.estimatedPomodoros,
      completedPomodoros: 0,
      createdAt: new Date().toISOString()
    }]);

    setCurrentTask({ name: '', estimatedPomodoros: 1, completedPomodoros: 0 });
  };

  // Complete task
  const completeTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  // Update settings
  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: parseInt(value) }));
  };

  // DERIVED STATE - Today's stats
  const today = new Date().toISOString().split('T')[0];
  const todaySession = sessions.find(s => s.date === today);
  const todayStats = todaySession || {
    completedPomodoros: 0,
    totalFocusTime: 0
  };

  // DERIVED STATE - Weekly stats
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  });

  const weeklyStats = last7Days.map(date => {
    const session = sessions.find(s => s.date === date);
    return {
      date,
      pomodoros: session?.completedPomodoros || 0,
      focusTime: session?.totalFocusTime || 0
    };
  }).reverse();

  const weeklyTotal = weeklyStats.reduce((sum, day) => sum + day.pomodoros, 0);

  // DERIVED STATE - Progress display
  const progress = timer.mode === 'work'
    ? ((settings.workDuration * 60 - (timer.minutes * 60 + timer.seconds)) / (settings.workDuration * 60)) * 100
    : ((settings.shortBreakDuration * 60 - (timer.minutes * 60 + timer.seconds)) / (settings.shortBreakDuration * 60)) * 100;

  // Format time display
  const timeDisplay = \`\${String(timer.minutes).padStart(2, '0')}:\${String(timer.seconds).padStart(2, '0')}\`;

  return (
    <div className="pomodoro-timer">
      <h1>🍅 Pomodoro Timer</h1>

      {/* Mode indicator */}
      <div className="mode-indicator">
        <h2>
          {timer.mode === 'work' ? '💼 Work Time' : 
           timer.mode === 'shortBreak' ? '☕ Short Break' : 
           '🌴 Long Break'}
        </h2>
      </div>

      {/* Timer display */}
      <div className="timer-display">
        <div className="timer-circle" style={{ background: \`conic-gradient(#4caf50 \${progress}%, #ddd \${progress}%)\` }}>
          <div className="timer-inner">
            <h1>{timeDisplay}</h1>
          </div>
        </div>
      </div>

      {/* Timer controls */}
      <div className="timer-controls">
        <button onClick={toggleTimer}>
          {timer.isRunning ? '⏸️ Pause' : '▶️ Start'}
        </button>
        <button onClick={resetTimer}>🔄 Reset</button>
        <button onClick={skipToNext}>⏭️ Skip</button>
      </div>

      {/* Session counter */}
      <div className="session-counter">
        <h3>
          Sessions today: {completedPomodoros}
          {completedPomodoros > 0 && \` (\${Math.floor(completedPomodoros / settings.sessionsUntilLongBreak)} long breaks earned)\`}
        </h3>
      </div>

      {/* Current task */}
      <div className="current-task-section">
        <h3>Current Task</h3>
        {currentTask.name ? (
          <div className="active-task">
            <h4>{currentTask.name}</h4>
            <p>
              {currentTask.completedPomodoros}/{currentTask.estimatedPomodoros} pomodoros
            </p>
            <progress 
              value={currentTask.completedPomodoros} 
              max={currentTask.estimatedPomodoros} 
            />
          </div>
        ) : (
          <p>No active task</p>
        )}
      </div>

      {/* Add task form */}
      <div className="add-task-form">
        <input
          value={currentTask.name}
          onChange={(e) => setCurrentTask({ ...currentTask, name: e.target.value })}
          placeholder="Task name..."
        />
        <input
          type="number"
          value={currentTask.estimatedPomodoros}
          onChange={(e) => setCurrentTask({ 
            ...currentTask, 
            estimatedPomodoros: parseInt(e.target.value) || 1 
          })}
          min="1"
          style={{ width: '80px' }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task list */}
      <div className="task-list">
        <h3>Task Queue ({tasks.length})</h3>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <div>
              <strong>{task.name}</strong>
              <p>{task.estimatedPomodoros} pomodoros estimated</p>
            </div>
            <div>
              <button onClick={() => {
                setCurrentTask({
                  name: task.name,
                  estimatedPomodoros: task.estimatedPomodoros,
                  completedPomodoros: 0
                });
                completeTask(task.id);
              }}>
                Start
              </button>
              <button onClick={() => completeTask(task.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Statistics */}
      <div className="today-stats">
        <h3>📊 Today's Stats</h3>
        <div className="stat-card">
          <h4>{todayStats.completedPomodoros}</h4>
          <p>Pomodoros Completed</p>
        </div>
        <div className="stat-card">
          <h4>{todayStats.totalFocusTime} min</h4>
          <p>Total Focus Time</p>
        </div>
        <div className="stat-card">
          <h4>{Math.floor(todayStats.totalFocusTime / 60)}h {todayStats.totalFocusTime % 60}m</h4>
          <p>Formatted Time</p>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="weekly-stats">
        <h3>📈 Last 7 Days</h3>
        <div className="chart">
          {weeklyStats.map(day => (
            <div key={day.date} className="chart-bar">
              <div 
                className="bar" 
                style={{ height: \`\${(day.pomodoros / Math.max(...weeklyStats.map(d => d.pomodoros), 1)) * 100}%\` }}
              />
              <span className="label">{new Date(day.date).getDate()}</span>
              <span className="value">{day.pomodoros}</span>
            </div>
          ))}
        </div>
        <p>Total this week: {weeklyTotal} pomodoros</p>
      </div>

      {/* Settings */}
      <div className="settings">
        <h3>⚙️ Settings</h3>
        <div className="setting-item">
          <label>Work Duration (minutes):</label>
          <input
            type="number"
            value={settings.workDuration}
            onChange={(e) => updateSetting('workDuration', e.target.value)}
            min="1"
            max="60"
          />
        </div>
        <div className="setting-item">
          <label>Short Break (minutes):</label>
          <input
            type="number"
            value={settings.shortBreakDuration}
            onChange={(e) => updateSetting('shortBreakDuration', e.target.value)}
            min="1"
            max="30"
          />
        </div>
        <div className="setting-item">
          <label>Long Break (minutes):</label>
          <input
            type="number"
            value={settings.longBreakDuration}
            onChange={(e) => updateSetting('longBreakDuration', e.target.value)}
            min="1"
            max="60"
          />
        </div>
        <div className="setting-item">
          <label>Sessions until long break:</label>
          <input
            type="number"
            value={settings.sessionsUntilLongBreak}
            onChange={(e) => updateSetting('sessionsUntilLongBreak', e.target.value)}
            min="2"
            max="10"
          />
        </div>
      </div>

      {/* All-time statistics */}
      <div className="all-time-stats">
        <h3>🏆 All-Time Statistics</h3>
        <div className="stat-card">
          <h4>{sessions.reduce((sum, s) => sum + s.completedPomodoros, 0)}</h4>
          <p>Total Pomodoros</p>
        </div>
        <div className="stat-card">
          <h4>{Math.floor(sessions.reduce((sum, s) => sum + s.totalFocusTime, 0) / 60)}h</h4>
          <p>Total Focus Time</p>
        </div>
        <div className="stat-card">
          <h4>{sessions.length}</h4>
          <p>Days Tracked</p>
        </div>
        <div className="stat-card">
          <h4>{(sessions.reduce((sum, s) => sum + s.completedPomodoros, 0) / sessions.length || 0).toFixed(1)}</h4>
          <p>Average per Day</p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 📝 KEY PATTERNS SUMMARY - NGÀY 6
// ==========================================

/*
=== USESTATE MASTERY PATTERNS ===

1. LAZY INITIALIZATION:
   ✅ useState(() => expensiveCalculation())
   ✅ localStorage: useState(() => JSON.parse(localStorage.getItem('key')))
   - Chỉ chạy 1 lần khi mount

2. FUNCTIONAL UPDATES:
   ✅ setState(prev => newValue)
   - Khi state mới phụ thuộc state cũ
   - Tránh stale closure trong useEffect/timers
   - Multiple updates: setCount(p => p+1); setCount(p => p+1); = +2 ✅

3. IMMUTABLE UPDATES:
   ✅ Objects: { ...obj, key: value }
   ✅ Arrays: [...arr, item] | arr.map() | arr.filter()
   ✅ Nested: { ...obj, nested: { ...obj.nested, key: value } }
   ❌ NEVER: obj.key = value; arr.push(); arr.sort()

4. STATE STRUCTURE:
   ✅ Nhóm related state vào object
   ✅ Tránh redundant/derived state
   ✅ Normalize khi cần (byId + allIds)

5. DERIVED STATE:
   ✅ const filtered = data.filter(...) - KHÔNG LƯU vào state
   ✅ const total = items.reduce(...) - Tính toán trực tiếp
   - Giảm complexity, tránh sync issues

6. LOCALSTORAGE PERSISTENCE:
   ✅ Init: useState(() => JSON.parse(localStorage.getItem('key')) || default)
   ✅ Save: useEffect(() => localStorage.setItem('key', JSON.stringify(state)), [state])

7. FORM HANDLING:
   ✅ Single object cho form data
   ✅ Generic updateField function
   ✅ Separate errors state
   ✅ Clear errors khi user edits

8. TIMER/INTERVAL PATTERN:
   ✅ useEffect với cleanup
   ✅ Functional updates trong interval
   ✅ Return cleanup: () => clearInterval(id)

9. STATISTICS/ANALYTICS:
   ✅ Derived từ raw data
   ✅ useMemo cho expensive calculations
   ✅ Aggregate functions (reduce, filter, map)

10. SETTINGS MANAGEMENT:
    ✅ Separate settings object
    ✅ Generic update function
    ✅ Persist to localStorage

=== COMMON MISTAKES TO AVOID ===

❌ Mutating state directly
❌ Not using functional updates in closures
❌ Storing derived/computed values in state
❌ Not initializing from localStorage lazily
❌ Using mutating array methods (push, splice, sort)
❌ Forgetting to spread nested objects
❌ Not cleaning up intervals/timers
❌ Duplicating props in state

=== KEY TAKEAWAYS ===

1. useState = Foundation của React state management
2. Immutability = React's change detection mechanism
3. Functional updates = Safe updates với latest state
4. Lazy init = Performance optimization
5. Derived state = Single source of truth
6. Structure matters = Nhóm related, normalize complex
7. localStorage = Persistent user experience
8. Cleanup = No memory leaks

=== PERFORMANCE TIPS ===

- Lazy init cho expensive calculations
- Derived state thay vì duplicate
- Split components = Isolated state updates
- useMemo cho expensive derived values
- Batch updates tự động trong event handlers
- Avoid unnecessary state = Derive when possible
*/

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
