import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Tooltip({
  children,
  content,
  placement = "top",
  delay = 300,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPlacement, setActualPlacement] = useState(placement);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });

  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // ✅ useLayoutEffect - Position tooltip TRƯỚC khi paint
  useLayoutEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const spacing = 10; // Gap between trigger và tooltip
    const arrowSize = 8;

    // Helper: Calculate position cho từng placement
    const calculatePosition = (place) => {
      let top = 0;
      let left = 0;
      let arrowTop = 0;
      let arrowLeft = 0;

      switch (place) {
        case "top":
          top = triggerRect.top - tooltipRect.height - spacing;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          arrowTop = tooltipRect.height;
          arrowLeft = tooltipRect.width / 2 - arrowSize;
          break;

        case "bottom":
          top = triggerRect.bottom + spacing;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          arrowTop = -arrowSize;
          arrowLeft = tooltipRect.width / 2 - arrowSize;
          break;

        case "left":
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - spacing;
          arrowTop = tooltipRect.height / 2 - arrowSize;
          arrowLeft = tooltipRect.width;
          break;

        case "right":
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.right + spacing;
          arrowTop = tooltipRect.height / 2 - arrowSize;
          arrowLeft = -arrowSize;
          break;

        default:
          break;
      }

      return { top, left, arrowTop, arrowLeft };
    };

    // Helper: Check nếu position bị overflow
    const isOverflowing = (pos) => {
      return (
        pos.left < 0 ||
        pos.top < 0 ||
        pos.left + tooltipRect.width > viewportWidth ||
        pos.top + tooltipRect.height > viewportHeight
      );
    };

    // Try placement ưu tiên
    let pos = calculatePosition(placement);
    let finalPlacement = placement;

    // Nếu overflow, thử các placements khác
    if (isOverflowing(pos)) {
      const fallbackPlacements = {
        top: ["bottom", "right", "left"],
        bottom: ["top", "right", "left"],
        left: ["right", "top", "bottom"],
        right: ["left", "top", "bottom"],
      };

      for (const fallback of fallbackPlacements[placement]) {
        pos = calculatePosition(fallback);
        if (!isOverflowing(pos)) {
          finalPlacement = fallback;
          break;
        }
      }
    }

    // Adjust nếu vẫn overflow (edge cases)
    if (pos.left < 0) pos.left = spacing;
    if (pos.top < 0) pos.top = spacing;
    if (pos.left + tooltipRect.width > viewportWidth) {
      pos.left = viewportWidth - tooltipRect.width - spacing;
    }
    if (pos.top + tooltipRect.height > viewportHeight) {
      pos.top = viewportHeight - tooltipRect.height - spacing;
    }

    setPosition({ top: pos.top, left: pos.left });
    setArrowPosition({ top: pos.arrowTop, left: pos.arrowLeft });
    setActualPlacement(finalPlacement);
  }, [isVisible, placement]);

  // Show với delay
  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  // Hide ngay lập tức
  const handleMouseLeave = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 0);
  };

  // Keyboard support
  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <div className="tooltip-wrapper">
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        className="tooltip-trigger"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`tooltip tooltip-${actualPlacement}`}
          style={{
            position: "fixed",
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 9999,
          }}
        >
          {content}
          <div
            className={`tooltip-arrow arrow-${actualPlacement}`}
            style={{
              top: `${arrowPosition.top}px`,
              left: `${arrowPosition.left}px`,
            }}
          />
        </div>
      )}
    </div>
  );
}
