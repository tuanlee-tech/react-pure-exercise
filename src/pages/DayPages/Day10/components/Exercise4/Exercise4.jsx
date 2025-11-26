import { useState } from "react";
import ExerciseCard from "../../../../../components/ExerciseCard";

import DraggableList from "./components/DraggableList";
import "./styles.css";
export default function Exercise4() {
  const [verticalItems, setVerticalItems] = useState([
    { id: 1, text: "First Item", icon: "🥇" },
    { id: 2, text: "Second Item", icon: "🥈" },
    { id: 3, text: "Third Item", icon: "🥉" },
    { id: 4, text: "Fourth Item", icon: "4️⃣" },
    { id: 5, text: "Fifth Item", icon: "5️⃣" },
  ]);

  const [horizontalItems, setHorizontalItems] = useState([
    { id: 11, text: "React", icon: "⚛️" },
    { id: 12, text: "Vue", icon: "💚" },
    { id: 13, text: "Angular", icon: "🅰️" },
    { id: 14, text: "Svelte", icon: "🔥" },
  ]);

  const [todoItems, setTodoItems] = useState([
    { id: 21, text: "Design mockups", icon: "🎨", disabled: false },
    { id: 22, text: "Write documentation", icon: "📝", disabled: false },
    { id: 23, text: "Pinned Item", icon: "📌", disabled: true },
    { id: 24, text: "Code review", icon: "👀", disabled: false },
    { id: 25, text: "Deploy to production", icon: "🚀", disabled: false },
  ]);

  const [kanbanColumns, setKanbanColumns] = useState({
    todo: [
      { id: 31, text: "Create landing page" },
      { id: 32, text: "Setup analytics" },
    ],
    inProgress: [{ id: 33, text: "API integration" }],
    done: [
      { id: 34, text: "Database setup" },
      { id: 35, text: "Authentication" },
    ],
  });

  const resetAll = () => {
    setVerticalItems([
      { id: 1, text: "First Item", icon: "🥇" },
      { id: 2, text: "Second Item", icon: "🥈" },
      { id: 3, text: "Third Item", icon: "🥉" },
      { id: 4, text: "Fourth Item", icon: "4️⃣" },
      { id: 5, text: "Fifth Item", icon: "5️⃣" },
    ]);
    setHorizontalItems([
      { id: 11, text: "React", icon: "⚛️" },
      { id: 12, text: "Vue", icon: "💚" },
      { id: 13, text: "Angular", icon: "🅰️" },
      { id: 14, text: "Svelte", icon: "🔥" },
    ]);
  };

  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={4}
        title="Drag and Drop với useLayoutEffect"
      />

      <ExerciseCard.Description>
        {`
// TODO: Implement draggable items

function DraggableList({ items, onReorder }) {
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // TODO: Drag handlers
  // - onDragStart: set draggingIndex
  // - onDragOver: calculate dragOverIndex, show preview
  // - onDrop: reorder items, call onReorder
  // - onDragEnd: cleanup

  // TODO: useLayoutEffect để update positions smoothly
  // - Measure item positions
  // - Animate during drag

  // TODO: Features
  // - Visual feedback (ghost element)
  // - Smooth animations
  // - Touch support
  // - Horizontal/vertical modes
  // - Disabled items
  // - Handle constraints

  const handleDragStart = (index) => (e) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (index) => (e) => {
    e.preventDefault();
    if (index !== draggingIndex) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (index) => (e) => {
    e.preventDefault();
    
    if (draggingIndex === null || draggingIndex === index) return;

    const newItems = [...items];
    const [removed] = newItems.splice(draggingIndex, 1);
    newItems.splice(index, 0, removed);

    onReorder(newItems);
    setDraggingIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="draggable-list">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver(index)}
          onDrop={handleDrop(index)}
          className={\`draggable-item \${
            index === draggingIndex ? 'dragging' : ''
          } \${index === dragOverIndex ? 'drag-over' : ''}\`}
        >
          <span className="drag-handle">☰</span>
          {item.text}
        </div>
      ))}
    </div>
  );
}

// Usage
function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' }
  ]);

  return (
    <div>
      <h1>Draggable List</h1>
      <DraggableList items={items} onReorder={setItems} />
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="app">
          <h1>🎯 Drag & Drop Component</h1>
          <p className="subtitle">Smooth drag and drop with useLayoutEffect</p>

          <button onClick={resetAll} className="reset-btn">
            🔄 Reset All
          </button>

          {/* Vertical List */}
          <div className="demo-section">
            <h2>📋 Vertical List</h2>
            <p className="demo-description">Standard vertical drag and drop</p>
            <DraggableList
              items={verticalItems}
              onReorder={setVerticalItems}
              orientation="vertical"
            />
            <div className="item-order">
              Order: {verticalItems.map((item) => item.icon).join(" → ")}
            </div>
          </div>

          {/* Horizontal List */}
          <div className="demo-section">
            <h2>➡️ Horizontal List</h2>
            <p className="demo-description">
              Horizontal orientation with frameworks
            </p>
            <DraggableList
              items={horizontalItems}
              onReorder={setHorizontalItems}
              orientation="horizontal"
            />
            <div className="item-order">
              Order: {horizontalItems.map((item) => item.text).join(" → ")}
            </div>
          </div>

          {/* Disabled Items */}
          <div className="demo-section">
            <h2>🔒 With Disabled Items</h2>
            <p className="demo-description">
              Some items are locked and cannot be moved
            </p>
            <DraggableList
              items={todoItems}
              onReorder={setTodoItems}
              orientation="vertical"
            />
          </div>

          {/* Kanban Board */}
          <div className="demo-section">
            <h2>📊 Kanban Board (Simple)</h2>
            <p className="demo-description">Multiple independent lists</p>
            <div className="kanban-board">
              <div className="kanban-column">
                <h3>📝 To Do</h3>
                <DraggableList
                  items={kanbanColumns.todo}
                  onReorder={(newItems) =>
                    setKanbanColumns((prev) => ({ ...prev, todo: newItems }))
                  }
                  orientation="vertical"
                />
              </div>
              <div className="kanban-column">
                <h3>⚡ In Progress</h3>
                <DraggableList
                  items={kanbanColumns.inProgress}
                  onReorder={(newItems) =>
                    setKanbanColumns((prev) => ({
                      ...prev,
                      inProgress: newItems,
                    }))
                  }
                  orientation="vertical"
                />
              </div>
              <div className="kanban-column">
                <h3>✅ Done</h3>
                <DraggableList
                  items={kanbanColumns.done}
                  onReorder={(newItems) =>
                    setKanbanColumns((prev) => ({ ...prev, done: newItems }))
                  }
                  orientation="vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function DraggableList({
  items: initialItems,
  onReorder,
  orientation = "vertical",
}) {
  const [items, setItems] = useState(initialItems);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [positions, setPositions] = useState({});
  const [ghostPosition, setGhostPosition] = useState({ x: 0, y: 0 });
  const itemRefs = useRef({});
  const containerRef = useRef(null);
  const draggedElementRef = useRef(null);

  console.log("positions :", positions);
  console.log("ghostPosition :", ghostPosition);

  // ✅ useLayoutEffect - Measure positions trước khi paint
  useLayoutEffect(() => {
    const newPositions = {};

    Object.keys(itemRefs.current).forEach((key) => {
      const element = itemRefs.current[key];
      if (element) {
        const rect = element.getBoundingClientRect();
        newPositions[key] = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      }
    });

    setPositions(newPositions);
  }, [items, setPositions]);

  // Update items khi prop thay đổi
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  // Drag Start
  const handleDragStart = (index) => (e) => {
    setDraggingIndex(index);
    draggedElementRef.current = e.currentTarget;

    // Set ghost image
    e.dataTransfer.effectAllowed = "move";

    // Create custom ghost image
    const ghost = e.currentTarget.cloneNode(true);
    ghost.style.opacity = "0.5";
    ghost.style.position = "absolute";
    ghost.style.top = "-9999px";
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(
      ghost,
      e.currentTarget.offsetWidth / 2,
      e.currentTarget.offsetHeight / 2
    );

    // Cleanup ghost
    setTimeout(() => document.body.removeChild(ghost), 0);
  };

  // Drag Over
  const handleDragOver = (index) => (e) => {
    e.preventDefault();

    if (index === draggingIndex) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const isVertical = orientation === "vertical";
    const mousePos = isVertical ? e.clientY : e.clientX;
    const elementStart = isVertical ? rect.top : rect.left;
    const elementSize = isVertical ? rect.height : rect.width;
    const middle = elementStart + elementSize / 2;

    // Determine insert position
    if (draggingIndex < index) {
      // Dragging down/right
      if (mousePos > middle) {
        setDragOverIndex(index);
      }
    } else {
      // Dragging up/left
      if (mousePos < middle) {
        setDragOverIndex(index);
      }
    }

    // Update ghost position
    setGhostPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Drop
  const handleDrop = (index) => (e) => {
    e.preventDefault();

    if (draggingIndex === null || draggingIndex === index) {
      cleanup();
      return;
    }

    // Calculate final drop position
    const finalIndex = dragOverIndex !== null ? dragOverIndex : index;

    if (draggingIndex === finalIndex) {
      cleanup();
      return;
    }

    // Reorder items
    const newItems = [...items];
    const [removed] = newItems.splice(draggingIndex, 1);
    newItems.splice(finalIndex, 0, removed);

    setItems(newItems);

    // Notify parent
    if (onReorder) {
      onReorder(newItems);
    }

    cleanup();
  };

  // Drag End
  const handleDragEnd = () => {
    cleanup();
  };

  const cleanup = () => {
    setDraggingIndex(null);
    setDragOverIndex(null);
    draggedElementRef.current = null;
  };

  // Touch support (bonus)
  const handleTouchStart = (index) => (e) => {
    setDraggingIndex(index);
    const touch = e.touches[0];
    setGhostPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    setGhostPosition({ x: touch.clientX, y: touch.clientY });

    // Find element under touch
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.dataset.index) {
      const index = parseInt(element.dataset.index);
      if (index !== draggingIndex) {
        setDragOverIndex(index);
      }
    }
  };

  const handleTouchEnd = () => {
    if (
      draggingIndex !== null &&
      dragOverIndex !== null &&
      draggingIndex !== dragOverIndex
    ) {
      const newItems = [...items];
      const [removed] = newItems.splice(draggingIndex, 1);
      newItems.splice(dragOverIndex, 0, removed);
      setItems(newItems);

      if (onReorder) {
        onReorder(newItems);
      }
    }
    cleanup();
  };

  return (
    <div ref={containerRef} className={\`draggable-list \${orientation}\`}>
      {items.map((item, index) => {
        const isDragging = index === draggingIndex;
        const isDragOver = index === dragOverIndex;
        const isDisabled = item.disabled;

        return (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
            data-index={index}
            draggable={!isDisabled}
            onDragStart={!isDisabled ? handleDragStart(index) : undefined}
            onDragOver={!isDisabled ? handleDragOver(index) : undefined}
            onDrop={!isDisabled ? handleDrop(index) : undefined}
            onDragEnd={handleDragEnd}
            onTouchStart={!isDisabled ? handleTouchStart(index) : undefined}
            onTouchMove={!isDisabled ? handleTouchMove : undefined}
            onTouchEnd={!isDisabled ? handleTouchEnd : undefined}
            className={\`draggable-item \${isDragging ? "dragging" : ""} \${
              isDragOver ? "drag-over" : ""
            } \${isDisabled ? "disabled" : ""}\`}
            style={{
              opacity: isDragging ? 0.5 : 1,
              cursor: isDisabled ? "not-allowed" : "grab",
            }}
          >
            <span className="drag-handle">☰</span>
            <div className="item-content">
              {item.icon && <span className="item-icon">{item.icon}</span>}
              <span className="item-text">{item.text}</span>
              {isDisabled && <span className="disabled-badge">🔒</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
