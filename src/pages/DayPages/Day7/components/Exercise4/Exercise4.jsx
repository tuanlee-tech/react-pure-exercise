import ExerciseCard from "../../../../../components/ExerciseCard";
import KanbanBoard from "./components/KanbanBoard";

import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Kanban Board" />

      <ExerciseCard.Description>
        {`
// TODO: Implement Kanban board với drag & drop

const KANBAN_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  MOVE_TASK: 'MOVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  ADD_COLUMN: 'ADD_COLUMN',
  DELETE_COLUMN: 'DELETE_COLUMN'
};

function kanbanReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   columns: {
  //     'todo': {
  //       id: 'todo',
  //       title: 'Cần làm',
  //       taskIds: ['task-1', 'task-2']
  //     },
  //     'inProgress': { ... },
  //     'done': { ... }
  //   },
  //   tasks: {
  //     'task-1': {
  //       id: 'task-1',
  //       content: 'Học React',
  //       priority: 'high',
  //       assignee: 'John'
  //     }
  //   },
  //   columnOrder: ['todo', 'inProgress', 'done']
  // }

  // Features:
  // - Add task to column
  // - Move task between columns
  // - Update task details
  // - Delete task
  // - Add new column
  // - Delete column (move tasks to another column)
}

function KanbanBoard() {
  const [state, dispatch] = useReducer(kanbanReducer, {
    columns: {
      todo: { id: 'todo', title: 'Cần làm', taskIds: [] },
      inProgress: { id: 'inProgress', title: 'Đang làm', taskIds: [] },
      done: { id: 'done', title: 'Hoàn thành', taskIds: [] }
    },
    tasks: {},
    columnOrder: ['todo', 'inProgress', 'done']
  });

  // TODO: Implement
  // - Drag & drop functionality
  // - Add task modal/form
  // - Task card với edit/delete
  // - Column management
  // - Task filtering (by priority, assignee)
  // - Search tasks

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      
      <div className="columns">
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

          return (
            <div key={columnId} className="column">
              <h2>{column.title}</h2>
              <div className="tasks">
                {tasks.map(task => (
                  <div key={task.id} className="task-card">
                    {/* TODO: Task card */}
                  </div>
                ))}
              </div>
              <button>+ Thêm task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <KanbanBoard />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
