// KanbanBoard.jsx
import { useReducer, useState } from "react";
import { Button, Card, Modal, Input, Select } from "@ui";

const KANBAN_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  MOVE_TASK: "MOVE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  ADD_COLUMN: "ADD_COLUMN",
  DELETE_COLUMN: "DELETE_COLUMN",
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case KANBAN_ACTIONS.ADD_TASK: {
      const newTaskId = `task-${Date.now()}`;
      const newTask = {
        id: newTaskId,
        content: action.payload.content,
        priority: action.payload.priority || "normal",
        assignee: action.payload.assignee || "",
      };

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTaskId]: newTask,
        },
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            taskIds: [
              ...state.columns[action.payload.columnId].taskIds,
              newTaskId,
            ],
          },
        },
      };
    }

    case KANBAN_ACTIONS.MOVE_TASK:
      const { sourceColumnId, destColumnId, taskId, destIndex } = action;
      const newSourceIds = state.columns[sourceColumnId].taskIds.filter(
        (id) => id !== taskId
      );
      const newDestIds = [...state.columns[destColumnId].taskIds];
      newDestIds.splice(destIndex, 0, taskId);
      return {
        ...state,
        columns: {
          ...state.columns,
          [sourceColumnId]: {
            ...state.columns[sourceColumnId],
            taskIds: newSourceIds,
          },
          [destColumnId]: {
            ...state.columns[destColumnId],
            taskIds: newDestIds,
          },
        },
      };
    case KANBAN_ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.taskId]: { ...state.tasks[action.taskId], ...action.updates },
        },
      };
    case KANBAN_ACTIONS.DELETE_TASK:
      const { [action.taskId]: deleted, ...restTasks } = state.tasks;
      const updatedColumns = Object.fromEntries(
        Object.entries(state.columns).map(([colId, col]) => [
          colId,
          { ...col, taskIds: col.taskIds.filter((id) => id !== action.taskId) },
        ])
      );
      return { ...state, tasks: restTasks, columns: updatedColumns };
    case KANBAN_ACTIONS.ADD_COLUMN:
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.columnId]: {
            id: action.columnId,
            title: action.title,
            taskIds: [],
          },
        },
        columnOrder: [...state.columnOrder, action.columnId],
      };
    case KANBAN_ACTIONS.DELETE_COLUMN:
      const { [action.columnId]: deletedCol, ...restColumns } = state.columns;
      const movedTasks = deletedCol.taskIds.reduce(
        (acc, id) => ({ ...acc, [id]: state.tasks[id] }),
        {}
      );
      return {
        ...state,
        columns: restColumns,
        tasks: { ...state.tasks, ...movedTasks },
        columnOrder: state.columnOrder.filter((id) => id !== action.columnId),
      };
    default:
      return state;
  }
}

export default function KanbanBoard() {
  const [state, dispatch] = useReducer(kanbanReducer, {
    columns: {
      todo: { id: "todo", title: "Cần làm", taskIds: [] },
      inProgress: { id: "inProgress", title: "Đang làm", taskIds: [] },
      done: { id: "done", title: "Hoàn thành", taskIds: [] },
    },
    tasks: {},
    columnOrder: ["todo", "inProgress", "done"],
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [newTaskColumn, setNewTaskColumn] = useState("todo");

  return (
    <div className="cs-kanban-board">
      <h1>Kanban Board</h1>

      <div className="cs-kanban-columns">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return (
            <div key={columnId} className="cs-kanban-column">
              <h2>{column.title}</h2>

              <div className="cs-kanban-tasks">
                {tasks.map((task) => (
                  <Card key={task.id} className="cs-kanban-task-card">
                    <Card.Content>{task.content}</Card.Content>
                    <Card.Footer>
                      <Button size="sm" variant="ghost">
                        Edit
                      </Button>
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                ))}
              </div>

              <div className="cs-kanban-add-task">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                >
                  + Thêm task
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header onClose={() => setModalOpen(false)}>
          Thêm Task Mới
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Nội dung task"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
          />
          <Select
            label="Chọn cột"
            value={newTaskColumn}
            onChange={(e) => setNewTaskColumn(e.target.value)}
            options={state.columnOrder.map((colId) => ({
              value: colId,
              label: state.columns[colId].title,
            }))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch({
                type: KANBAN_ACTIONS.ADD_TASK,
                payload: { content: newTaskContent, columnId: newTaskColumn },
              });
              setNewTaskContent("");
              setModalOpen(false);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
