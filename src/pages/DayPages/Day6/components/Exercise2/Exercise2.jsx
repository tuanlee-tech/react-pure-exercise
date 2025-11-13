import ExerciseCard from "../../../../../components/ExerciseCard";
import TodoApp from "./components/TodoApp";
import "./styles.css";
export default function Exercise2() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={2} title="Todo App Hoàn Chỉnh" />

      <ExerciseCard.Description>
        {`
function TodoApp() {
  // TODO:
  // 1. Todos array state với: id, text, completed, priority, createdAt
  // 2. Input state
  // 3. Filter state (all/active/completed)
  // 4. Sort state (date/priority/alphabetical)
  // 5. Chức năng:
  //    - Thêm todo
  //    - Xóa todo
  //    - Toggle completed
  //    - Edit todo (inline editing)
  //    - Set priority (low/medium/high)
  //    - Filter và sort
  //    - Clear completed
  //    - Toggle all
  // 6. Save vào localStorage
  // 7. Stats: total, active, completed

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <TodoApp />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card, Checkbox, Input, Select, Tooltip } from "@ui";
import { useEffect, useState } from "react";

const priorityOrder = { high: 3, medium: 2, low: 1 };

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const sortOptions = [
  { value: "date", label: "Date" },
  { value: "priority", label: "Priority" },
  { value: "alphabetical", label: "Alphabetical" },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChangeTodo = (e) => setTodo(e.target.value);

  const handleSelectEdit = (id) => {
    const item = todos.find((t) => t.id === id);
    if (item) {
      setEditingId(id);
      setTodo(item.text);
    }
  };

  const handCancel = () => {
    setEditingId(null);
    setTodo("");
  };

  const handleUpdate = () => {
    if (!todo.trim()) return;
    setTodos((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: todo.trim() } : item
      )
    );
    setEditingId(null);
    setTodo("");
  };

  const handleAdd = () => {
    if (!todo.trim()) return;
    const now = new Date();
    const newTodo = {
      id: now.getTime(),
      text: todo.trim(),
      completed: false,
      priority: "low",
      createdAt: now.toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleChangePriority = (value, id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, priority: value } : t))
    );
  };

  const toggleAll = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos((prev) => prev.map((t) => ({ ...t, completed: !allCompleted })));
  };

  const removeCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const todosFiltered = todos
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    })
    .sort((a, b) => {
      if (sort === "date") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sort === "priority")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if (sort === "alphabetical") return a.text.localeCompare(b.text);
      return 0;
    });

  const total = todosFiltered.length;
  const completed = todosFiltered.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="todo-app-wrapper">
      <div className="todo-app-container">
        <Card className="todo-app-card">
          <Card.Header>
            <Card.Title>Todo App</Card.Title>
            <Card.Subtitle>Manage your tasks with style</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            {/* Input Area */}
            <div className="todo-app-input-area">
              <Input
                placeholder="What needs to be done?"
                value={todo}
                onChange={handleChangeTodo}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    editingId ? handleUpdate() : handleAdd();
                  if (e.key === "Escape") handCancel();
                }}
                autoFocus
              />

              <div className="todo-app-input-actions">
                {editingId ? (
                  <>
                    <Button variant="secondary" size="sm" onClick={handCancel}>
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleUpdate}>
                      Update Task
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleAdd}
                    disabled={!todo.trim()}
                    icon="+ "
                  >
                    Add Task
                  </Button>
                )}
              </div>
            </div>

            {/* Filters & Sort */}
            <div className="todo-app-filters">
              <Select
                label="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                options={filterOptions}
                className="todo-app-filter-select"
              />
              <Select
                label="Sort by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                options={sortOptions}
                className="todo-app-filter-select"
              />
            </div>

            {/* Todo List */}
            <div className="todo-app-list">
              {todosFiltered.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {todosFiltered.map(({ id, text, completed, priority }) => (
                    <Card
                      key={id}
                      className={\`todo-app-item todo-app-item--\${priority}\`}
                    >
                      <Card.Content>
                        <div className="todo-app-item-content">
                          <Checkbox
                            checked={completed}
                            onChange={() => handleComplete(id)}
                          />

                          <span
                            className={\`todo-app-item-text \${
                              completed ? "todo-app-item-text--completed" : ""
                            }\`}
                          >
                            {text}
                          </span>

                          <Select
                            value={priority}
                            onChange={(e) =>
                              handleChangePriority(e.target.value, id)
                            }
                            options={priorityOptions}
                            disabled={completed}
                            style={{ width: "120px" }}
                          />

                          <div className="todo-app-item-actions">
                            <Tooltip content="Edit task">
                              <Button
                                variant="ghost"
                                size="sm"
                                icon="🖉"
                                onClick={() => handleSelectEdit(id)}
                                disabled={completed || editingId === id}
                              />
                            </Tooltip>

                            <Tooltip content="Delete task">
                              <Button
                                variant="danger"
                                size="sm"
                                icon="❌"
                                onClick={() => handleDelete(id)}
                              />
                            </Tooltip>
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="todo-app-list-empty">No tasks to do</p>
              )}
            </div>

            {/* Actions */}
            <div className="todo-app-actions">
              <Button variant="secondary" size="sm" onClick={toggleAll}>
                Toggle All
              </Button>
              <Button variant="danger" size="sm" onClick={removeCompleted}>
                Clear Completed
              </Button>
            </div>

            {/* Stats */}
            <Card className="todo-app-stats">
              <Card.Content>
                <div className="todo-app-stats-grid">
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#00D9FF" }}
                    >
                      {total}
                    </div>
                    <p className="todo-app-stat-label">Total</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#22c55e" }}
                    >
                      {active}
                    </div>
                    <p className="todo-app-stat-label">Active</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#f59e0b" }}
                    >
                      {completed}
                    </div>
                    <p className="todo-app-stat-label">Completed</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
