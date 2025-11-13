import ExerciseCard from "../../../../../components/ExerciseCard";
import TodoList from "./components/TodoList";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="Convert Class to Function" />

      <ExerciseCard.Description>
        {`
// Refactor các class components sau thành function components:
// TODO: Convert to function component
import { Component } from "react";

// TODO: Convert to function component
class TodoList extends Component {
  state = {
    todos: [],
    inputValue: '',
    filter: 'all' // 'all', 'active', 'completed'
  };

  componentDidMount() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = () => {
    if (this.state.inputValue.trim()) {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            text: prevState.inputValue,
            completed: false
          }
        ],
        inputValue: ''
      }));
    }
  };

  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    switch (filter) {
      case 'active':
        return todos.filter(t => !t.completed);
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  };

  render() {
    const filteredTodos = this.getFilteredTodos();

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && this.addTodo()}
        />
        <button onClick={this.addTodo}>Add</button>

        <div>
          {['all', 'active', 'completed'].map(filter => (
            <button
              key={filter}
              onClick={() => this.setState({ filter })}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <TodoList />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
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
                : \`No \${filter} todos.\`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={\`todo-text \${todo.completed ? "completed" : ""}\`}
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

        `}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
