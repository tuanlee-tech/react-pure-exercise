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
    <div ref={containerRef} className={`draggable-list ${orientation}`}>
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
            className={`draggable-item ${isDragging ? "dragging" : ""} ${
              isDragOver ? "drag-over" : ""
            } ${isDisabled ? "disabled" : ""}`}
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
