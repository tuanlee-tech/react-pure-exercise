// KanbanBoard.jsx
import { Button, Input, Modal, Select, Tooltip } from "@ui";
import { useReducer, useRef, useState } from "react";

const KANBAN_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  MOVE_TASK: "MOVE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  ADD_COLUMN: "ADD_COLUMN",
  DELETE_COLUMN: "DELETE_COLUMN",
};

const initialState = {
  columns: {
    todo: { id: "todo", title: "Cần làm", taskIds: [] },
    inProgress: { id: "inProgress", title: "Đang làm", taskIds: [] },
    done: { id: "done", title: "Hoàn thành", taskIds: [] },
  },
  tasks: {},
  columnOrder: ["todo", "inProgress", "done"],
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case KANBAN_ACTIONS.ADD_TASK: {
      //       Flow:
      // Tạo taskId mới.
      // Thêm task vào state.tasks.
      // Push taskId vào column.taskIds tương ứng.
      // Kết quả:
      // ➡️ Task mới xuất hiện ở cuối cột được chọn.
      const { columnId, task } = action.payload;
      const newTaskId = `task-${Date.now()}`;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTaskId]: { id: newTaskId, columnId, ...task },
        },
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: [...state.columns[columnId].taskIds, newTaskId],
          },
        },
      };
    }

    case KANBAN_ACTIONS.MOVE_TASK: {
      // 2. MOVE_TASK
      // Flow:
      // Nhận source và destination.
      // Nếu không thay đổi vị trí → return state.
      // Lấy ra mảng taskIds tại cột nguồn và cột đích.
      // Xoá task khỏi vị trí cũ.
      // Chèn task vào vị trí mới.
      // Cập nhật task.columnId.
      // Kết quả:
      // ➡️ Task được kéo-thả sang cột/vị trí mới.

      const { source, destination } = action.payload;
      if (
        !destination ||
        (source.columnId === destination.columnId &&
          source.index === destination.index)
      ) {
        return state;
      }

      const sourceColumn = state.columns[source.columnId];
      const destColumn = state.columns[destination.columnId];
      const sourceTasks = Array.from(sourceColumn.taskIds);
      const destTasks =
        source.columnId === destination.columnId
          ? sourceTasks
          : Array.from(destColumn.taskIds);

      const [movedTaskId] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, movedTaskId);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [movedTaskId]: {
            ...state.tasks[movedTaskId],
            columnId: destination.columnId,
          },
        },
        columns: {
          ...state.columns,
          [source.columnId]: { ...sourceColumn, taskIds: sourceTasks },
          [destination.columnId]: { ...destColumn, taskIds: destTasks },
        },
      };
    }

    case KANBAN_ACTIONS.UPDATE_TASK: {
      // 3. UPDATE_TASK
      // Flow:
      // Lấy task hiện tại.
      // Kiểm tra xem columnId có thay đổi không.
      // Nếu task đổi cột:
      // Remove taskId khỏi cột cũ.
      // Push taskId vào cột mới.
      // Gộp nội dung update vào task.
      // Kết quả:
      // ➡️ Task được cập nhật nội dung, ưu tiên, assignee, hoặc cột.

      const { taskId, updates } = action.payload;
      const task = state.tasks[taskId];
      const oldColumnId = task.columnId;
      const newColumnId = updates.columnId || oldColumnId;

      let newState = { ...state };

      if (newColumnId !== oldColumnId) {
        newState = {
          ...newState,
          columns: {
            ...newState.columns,
            [oldColumnId]: {
              ...newState.columns[oldColumnId],
              taskIds: newState.columns[oldColumnId].taskIds.filter(
                (id) => id !== taskId
              ),
            },
            [newColumnId]: {
              ...newState.columns[newColumnId],
              taskIds: [...newState.columns[newColumnId].taskIds, taskId],
            },
          },
        };
      }

      return {
        ...newState,
        tasks: {
          ...newState.tasks,
          [taskId]: { ...task, ...updates },
        },
      };
    }

    case KANBAN_ACTIONS.DELETE_TASK: {
      // 4. DELETE_TASK
      // Flow:
      // Xoá task khỏi state.tasks.
      // Xoá taskId khỏi column.taskIds.
      // Kết quả:
      // ➡️ Task biến mất khỏi bảng.
      const { taskId, columnId } = action.payload;
      return {
        ...state,
        tasks: Object.fromEntries(
          Object.entries(state.tasks).filter(([id]) => id !== taskId)
        ),
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: state.columns[columnId].taskIds.filter(
              (id) => id !== taskId
            ),
          },
        },
      };
    }

    case KANBAN_ACTIONS.ADD_COLUMN: {
      // 5. ADD_COLUMN
      // Flow:
      // Tạo column mới với id, title, taskIds: [].
      // Thêm column vào state.columns.
      // Push columnId vào columnOrder.
      // Kết quả:
      // ➡️ Bảng xuất hiện cột mới.
      const { id, title } = action.payload;
      return {
        ...state,
        columns: { ...state.columns, [id]: { id, title, taskIds: [] } },
        columnOrder: [...state.columnOrder, id],
      };
    }

    case KANBAN_ACTIONS.DELETE_COLUMN: {
      // 6. DELETE_COLUMN
      // Flow:
      // Lấy column bị xoá.
      // Chọn cột đích (targetColumnId) để chuyển tất cả task sang.
      // Append toàn bộ task của cột bị xoá sang cột đích.
      // Xoá columnId khỏi columnOrder.
      // Kết quả:
      // ➡️ Cột biến mất, task được dồn sang cột khác.
      const { columnId, targetColumnId } = action.payload;
      const column = state.columns[columnId];
      const newColumnOrder = state.columnOrder.filter((id) => id !== columnId);

      return {
        ...state,
        columns: {
          ...state.columns,
          [targetColumnId]: {
            ...state.columns[targetColumnId],
            taskIds: [
              ...state.columns[targetColumnId].taskIds,
              ...column.taskIds,
            ],
          },
        },
        columnOrder: newColumnOrder,
      };
    }

    default:
      return state;
  }
}

export default function KanbanBoard() {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterAssignee, setFilterAssignee] = useState("");

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);

  const [selectedColumn, setSelectedColumn] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // Drag state cho preview
  const [dragOverInfo, setDragOverInfo] = useState({
    columnId: null,
    index: null,
  });
  const dragItem = useRef(null);

  // Lọc task
  const filteredTasks = Object.values(state.tasks).filter((task) => {
    const matchesSearch = task.content
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPriority = !filterPriority || task.priority === filterPriority;
    const matchesAssignee = !filterAssignee || task.assignee === filterAssignee;
    return matchesSearch && matchesPriority && matchesAssignee;
  });

  // Drag & Drop
  const handleDragStart = (e, columnId, index) => {
    dragItem.current = { columnId, index };
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (columnId, index) => {
    setDragOverInfo({ columnId, index });
  };

  const handleDragLeave = () => {
    setDragOverInfo({ columnId: null, index: null });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumnId, targetIndex) => {
    e.preventDefault();
    const source = dragItem.current;
    if (!source) return;

    const destination = {
      columnId: targetColumnId,
      index: targetIndex ?? state.columns[targetColumnId].taskIds.length,
    };

    dispatch({
      type: KANBAN_ACTIONS.MOVE_TASK,
      payload: { source, destination },
    });

    dragItem.current = null;
    setDragOverInfo({ columnId: null, index: null });
  };

  // Modal
  const openAddTask = (columnId) => {
    setSelectedColumn(columnId);
    setIsAddTaskOpen(true);
  };

  const openEditTask = (task) => {
    setEditingTask(task);
    setIsEditTaskOpen(true);
  };

  const openAddColumn = () => setIsAddColumnOpen(true);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      type: KANBAN_ACTIONS.ADD_TASK,
      payload: {
        columnId: selectedColumn,
        task: {
          content: form.content.value,
          priority: form.priority.value,
          assignee: form.assignee.value || "Chưa giao",
        },
      },
    });
    setIsAddTaskOpen(false);
    form.reset();
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      type: KANBAN_ACTIONS.UPDATE_TASK,
      payload: {
        taskId: editingTask.id,
        updates: {
          content: form.content.value,
          priority: form.priority.value,
          assignee: form.assignee.value || "Chưa giao",
          columnId: form.columnId.value,
        },
      },
    });
    setIsEditTaskOpen(false);
  };

  const handleAddColumn = (e) => {
    e.preventDefault();
    const id = `column-${Date.now()}`;
    dispatch({
      type: KANBAN_ACTIONS.ADD_COLUMN,
      payload: { id, title: e.target.title.value },
    });
    setIsAddColumnOpen(false);
    e.target.reset();
  };

  const handleDeleteColumn = (columnId) => {
    if (state.columnOrder.length <= 1) return;
    const target =
      state.columnOrder.find((id) => id !== columnId) || state.columnOrder[0];
    dispatch({
      type: KANBAN_ACTIONS.DELETE_COLUMN,
      payload: { columnId, targetColumnId: target },
    });
  };

  return (
    <div className="kanban-board">
      <h1 className="kanban-title">Kanban Board</h1>

      <div className="kanban-header">
        <div className="kanban-controls">
          <input
            type="text"
            placeholder="Tìm kiếm task..."
            className="kanban-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            options={[
              { value: "", label: "Tất cả ưu tiên" },
              { value: "high", label: "Cao" },
              { value: "medium", label: "Trung bình" },
              { value: "low", label: "Thấp" },
            ]}
          />
          <Select
            value={filterAssignee}
            onChange={(e) => setFilterAssignee(e.target.value)}
            options={[
              { value: "", label: "Tất cả người" },
              ...Array.from(
                new Set(Object.values(state.tasks).map((t) => t.assignee))
              )
                .filter(Boolean)
                .map((name) => ({ value: name, label: name })),
            ]}
          />
        </div>
        <Button variant="primary" size="lg" onClick={openAddColumn}>
          + Thêm cột
        </Button>
      </div>

      <div className="kanban-columns">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds
            .map((id) => state.tasks[id])
            .filter(
              (task) => task && filteredTasks.some((t) => t.id === task.id)
            );

          return (
            <div
              key={columnId}
              className="kanban-column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnId)}
            >
              <div className="kanban-column-header">
                <h2 className="kanban-column-title">{column.title}</h2>
                <Tooltip content="Xóa cột">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteColumn(columnId)}
                    disabled={state.columnOrder.length <= 1}
                  >
                    Delete
                  </Button>
                </Tooltip>
              </div>

              <div className="kanban-tasks">
                {tasks.map((task, index) => {
                  const isDragOver =
                    dragOverInfo.columnId === columnId &&
                    dragOverInfo.index === index;

                  return (
                    <div key={task.id}>
                      {/* PREVIEW TRƯỚC TASK */}
                      {isDragOver && <div className="drop-preview" />}

                      <div
                        draggable
                        onDragStart={(e) => handleDragStart(e, columnId, index)}
                        onDragEnter={() => handleDragEnter(columnId, index)}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, columnId, index)}
                        className={`kanban-task-card ${
                          isDragOver ? "drag-over" : ""
                        }`}
                      >
                        <div className="kanban-task-content">
                          {task.content}
                        </div>
                        <div className="kanban-task-meta">
                          <span
                            className={`kanban-task-priority priority-${task.priority}`}
                          >
                            {task.priority}
                          </span>
                          <span className="kanban-task-assignee">
                            {task.assignee}
                          </span>
                        </div>
                        <div className="kanban-task-actions">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditTask(task)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() =>
                              dispatch({
                                type: KANBAN_ACTIONS.DELETE_TASK,
                                payload: { taskId: task.id, columnId },
                              })
                            }
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* PREVIEW CUỐI CỘT */}
                {dragOverInfo.columnId === columnId &&
                  dragOverInfo.index === tasks.length && (
                    <div className="drop-preview" />
                  )}
              </div>

              <div
                className="kanban-add-task"
                onClick={() => openAddTask(columnId)}
              >
                + Thêm task mới
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL ADD TASK */}
      <Modal isOpen={isAddTaskOpen} onClose={() => setIsAddTaskOpen(false)}>
        <Modal.Header onClose={() => setIsAddTaskOpen(false)}>
          Thêm Task
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddTask} className="modal-form">
            <Input
              label="Nội dung"
              name="content"
              placeholder="Nhập nội dung..."
              required
            />
            <Select
              label="Độ ưu tiên"
              name="priority"
              options={[
                { value: "high", label: "Cao" },
                { value: "medium", label: "Trung bình" },
                { value: "low", label: "Thấp" },
              ]}
              defaultValue="medium"
            />
            <Input
              label="Người thực hiện"
              name="assignee"
              placeholder="Tên..."
            />
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setIsAddTaskOpen(false)}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Thêm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* MODAL EDIT TASK */}
      <Modal isOpen={isEditTaskOpen} onClose={() => setIsEditTaskOpen(false)}>
        <Modal.Header onClose={() => setIsEditTaskOpen(false)}>
          Sửa Task
        </Modal.Header>
        <Modal.Body>
          {editingTask && (
            <form onSubmit={handleUpdateTask} className="modal-form">
              <Input
                label="Nội dung"
                name="content"
                defaultValue={editingTask.content}
                required
              />
              <Select
                label="Độ ưu tiên"
                name="priority"
                options={[
                  { value: "high", label: "Cao" },
                  { value: "medium", label: "Trung bình" },
                  { value: "low", label: "Thấp" },
                ]}
                defaultValue={editingTask.priority}
              />
              <Input
                label="Người thực hiện"
                name="assignee"
                defaultValue={editingTask.assignee}
              />
              <Select
                label="Chuyển đến cột"
                name="columnId"
                options={state.columnOrder.map((id) => ({
                  value: id,
                  label: state.columns[id].title,
                }))}
                defaultValue={editingTask.columnId}
              />
              <div className="modal-actions">
                <Button
                  variant="ghost"
                  onClick={() => setIsEditTaskOpen(false)}
                >
                  Hủy
                </Button>
                <Button variant="primary" type="submit">
                  Cập nhật
                </Button>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>

      {/* MODAL ADD COLUMN */}
      <Modal isOpen={isAddColumnOpen} onClose={() => setIsAddColumnOpen(false)}>
        <Modal.Header onClose={() => setIsAddColumnOpen(false)}>
          Thêm Cột
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddColumn} className="modal-form">
            <Input
              label="Tên cột"
              name="title"
              placeholder="VD: Review..."
              required
            />
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setIsAddColumnOpen(false)}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Thêm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
