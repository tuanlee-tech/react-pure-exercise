import { useEffect, useState } from "react";

const priorityOrder = {
  high: 3,
  medium: 2,
  low: 1,
};

export default function TodoApp() {
  /**
   * -----------------------------
   * 🧠 1. STATE QUẢN LÝ DỮ LIỆU
   * -----------------------------
   */

  // Danh sách todos
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  // ID của todo đang được chỉnh sửa
  const [editingId, setEditingId] = useState(null);

  // Input text cho todo
  const [todo, setTodo] = useState("");

  // Trạng thái lọc (all / active / completed)
  const [filter, setFilter] = useState("all");

  // Trạng thái sắp xếp (date / priority / alphabetical)
  const [sort, setSort] = useState("date");

  /**
   * -----------------------------
   * 💾 2. SIDE EFFECTS
   * -----------------------------
   */

  // Lưu todos vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * -----------------------------
   * ✍️ 3. XỬ LÝ INPUT & EDITING
   * -----------------------------
   */

  // Nhập nội dung todo
  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  // Chọn todo để chỉnh sửa
  const handleSelectEdit = (id) => {
    const editItem = todos.find((todo) => todo.id === id);
    if (!editItem) return;
    setEditingId(id);
    setTodo(editItem.text);
  };

  // Hủy chỉnh sửa
  const handCancel = () => {
    setEditingId(null);
    setTodo("");
  };

  // Cập nhật todo sau khi chỉnh sửa
  const handleUpdate = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: todo } : item
      )
    );
    setEditingId(null);
    setTodo("");
  };

  /**
   * -----------------------------
   * ➕ 4. CRUD CHO TODO
   * -----------------------------
   */

  // Thêm todo mới
  const handleAdd = () => {
    if (!todo) return;
    const now = new Date();
    const newTodo = {
      id: now.getTime(),
      text: todo,
      completed: false,
      priority: "low",
      createdAt: now.toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  // Xóa todo
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Đánh dấu todo đã hoàn thành / chưa hoàn thành
  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Thay đổi độ ưu tiên
  const handleChangePriority = (value, id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, priority: value } : todo))
    );
  };

  /**
   * -----------------------------
   * ⚙️ 5. HÀNH ĐỘNG HÀNG LOẠT
   * -----------------------------
   */

  // Toggle tất cả todos (hoàn thành / chưa hoàn thành)
  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, completed: !allCompleted }))
    );
  };

  // Xóa tất cả todos đã hoàn thành
  const removeCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  /**
   * -----------------------------
   * 🔍 6. FILTER & SORT
   * -----------------------------
   */

  const todosFiltered = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .sort((a, b) => {
      if (sort === "date") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sort === "priority")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if (sort === "alphabetical") return a.text.localeCompare(b.text);
      return 0;
    });

  /**
   * -----------------------------
   * 📊 7. THỐNG KÊ
   * -----------------------------
   */

  const total = todosFiltered?.length || 0;
  const completed = todosFiltered?.filter((todo) => todo.completed).length || 0;
  const active = total - completed;

  /**
   * -----------------------------
   * 🧩 8. RENDER GIAO DIỆN
   * -----------------------------
   */

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      {/* Input thêm / chỉnh sửa todo */}
      <div className="todo-input">
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={handleChangeTodo}
          placeholder="Add a new todo..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editingId ? handleUpdate() : handleAdd();
            }
            if (e.key === "Escape") handCancel();
          }}
        />
        {editingId ? (
          <div className="todo-btns">
            <button onClick={handCancel} className="btn cancel">
              Cancel
            </button>
            <button onClick={handleUpdate} className="btn update">
              Update
            </button>
          </div>
        ) : (
          <button onClick={handleAdd} disabled={!todo} className="btn add">
            Add
          </button>
        )}
      </div>

      {/* Filter & Sort */}
      <div className="controls">
        <div className="filter">
          <label>Filter:</label>
          <select
            value={filter}
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="sort">
          <label>Sort by:</label>
          <select
            value={sort}
            name="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="priority">Priority</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todosFiltered?.length > 0 ? (
          todosFiltered.map(({ id, text, completed, priority }) => (
            <li
              key={id}
              className={`todo-item ${completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={completed}
                value={completed}
                onChange={() => handleComplete(id)}
              />
              <span className="todo-text">{text}</span>
              <select
                disabled={completed}
                className="priority"
                value={priority}
                onChange={(e) => handleChangePriority(e.target.value, id)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                disabled={completed || editingId === id}
                onClick={() => handleSelectEdit(id)}
                className="btn edit"
              >
                Edit
              </button>
              <button onClick={() => handleDelete(id)} className="btn delete">
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No action to do</p>
        )}
      </ul>

      {/* Actions */}
      <div className="actions">
        <button className="btn toggle-all" onClick={toggleAll}>
          Toggle All
        </button>
        <button className="btn clear-completed" onClick={removeCompleted}>
          Remove Completed
        </button>
      </div>

      {/* Stats */}
      <div className="stats">
        <span>Total: {total}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>
    </div>
  );
}
