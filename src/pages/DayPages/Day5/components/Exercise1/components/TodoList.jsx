import { Button, Card, Checkbox, Input } from "@ui";
import { useEffect, useState } from "react";

const DATA_KEY = "todos";

/**
 * ✅ Hàm tiện ích load todos từ localStorage
 * - Trả về mảng todos hợp lệ
 * - Nếu lỗi JSON hoặc dữ liệu không phải mảng, trả về []
 */
function loadTodos() {
  try {
    const saved = localStorage.getItem(DATA_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Invalid todos data:", e);
    localStorage.removeItem(DATA_KEY);
    return [];
  }
}

/* ----------------------------- BONUS -----------------------------
Nếu không dùng lazy initializer, có thể dùng ref để tránh overwrite
lần đầu khi component mount:

const isFirstRender = useRef(true);

useEffect(() => {
  const saved = localStorage.getItem(DATA_KEY);
  if (saved) setTodos(JSON.parse(saved));
}, []);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
}, [todos]);
------------------------------------------------------------------*/

export default function TodoList() {
  // ✅ Lazy initializer: gọi hàm loadTodos ngay khi tạo state
  const [todos, setTodos] = useState(() => loadTodos());

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Lưu todos xuống localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem(DATA_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue.trim(), completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <Card className="todo-card">
        <h2 className="todo-title">Todo List</h2>

        {/* Add Todo */}
        <div className="todo-input-group">
          <Input
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            className="todo-input"
          />
          <Button variant="primary" size="md" onClick={addTodo}>
            Add
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="filter-group">
          {["all", "active", "completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "ghost"}
              size="sm"
              onClick={() => setFilter(f)}
              className="filter-btn"
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">
              {filter === "all"
                ? "No todos yet. Add one!"
                : `No ${filter} todos.`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                  {todo.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>

        {/* Stats */}
        <div className="todo-stats">
          <span>
            {todos.filter((t) => !t.completed).length} active •{" "}
            {todos.filter((t) => t.completed).length} completed
          </span>
        </div>
      </Card>
    </div>
  );
}
