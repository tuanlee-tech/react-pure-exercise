import ExerciseCard from "../../../../../components/ExerciseCard";
import Tooltip from "./components/Tooltip";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header
        order={1}
        title="Tooltip Component với useLayoutEffect"
      />

      <ExerciseCard.Description>
        {`
// TODO: Implement tooltip với smart positioning

function Tooltip({ children, content, placement = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  // TODO: useLayoutEffect để position tooltip
  // - Measure trigger và tooltip dimensions
  // - Calculate position based on placement
  // - Adjust nếu overflow viewport
  // - Support placements: top, bottom, left, right

  // TODO: Show/hide on hover
  // - Add mouseenter/mouseleave listeners
  // - Delay show (300ms)
  // - Instant hide

  // TODO: Features
  // - Arrow pointing to trigger
  // - Fade in/out animation
  // - Auto-adjust placement if no space
  // - Support keyboard (focus/blur)

  return (
    <div className="tooltip-wrapper">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="tooltip"
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}

// Usage
function App() {
  return (
    <div style={{ padding: '200px' }}>
      <Tooltip content="This is a tooltip" placement="top">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div style={{ padding: "200px" }}>
          <h1>🎈 Tooltip Component Demo</h1>
          <p className="subtitle">
            Hover or focus các elements để xem tooltips
          </p>

          <div className="demo-grid">
            {/* Top placements */}
            <div className="demo-section">
              <h2>Top Placement</h2>
              <div className="button-group">
                <Tooltip content="This is a top tooltip! 🎯" placement="top">
                  <button className="demo-button">Hover me (Top)</button>
                </Tooltip>
              </div>
            </div>

            {/* Bottom placements */}
            <div className="demo-section">
              <h2>Bottom Placement</h2>
              <div className="button-group">
                <Tooltip
                  content="This is a bottom tooltip! 📍"
                  placement="bottom"
                >
                  <button className="demo-button">Hover me (Bottom)</button>
                </Tooltip>
              </div>
            </div>

            {/* Left placements */}
            <div className="demo-section">
              <h2>Left Placement</h2>
              <div className="button-group">
                <Tooltip content="This is a left tooltip! ⬅️" placement="left">
                  <button className="demo-button">Hover me (Left)</button>
                </Tooltip>
              </div>
            </div>

            {/* Right placements */}
            <div className="demo-section">
              <h2>Right Placement</h2>
              <div className="button-group">
                <Tooltip
                  content="This is a right tooltip! ➡️"
                  placement="right"
                >
                  <button className="demo-button">Hover me (Right)</button>
                </Tooltip>
              </div>
            </div>

            {/* Long content */}
            <div className="demo-section">
              <h2>Long Content</h2>
              <div className="button-group">
                <Tooltip
                  content="This is a very long tooltip content that demonstrates how the tooltip handles longer text and wrapping. It should still position correctly! 📝"
                  placement="top"
                >
                  <button className="demo-button">Long Tooltip</button>
                </Tooltip>
              </div>
            </div>

            {/* Custom delay */}
            <div className="demo-section">
              <h2>No Delay</h2>
              <div className="button-group">
                <Tooltip
                  content="Instant tooltip! ⚡"
                  placement="top"
                  delay={0}
                >
                  <button className="demo-button">Instant Show</button>
                </Tooltip>
              </div>
            </div>
          </div>

          {/* Edge cases */}
          <div className="edge-cases">
            <h2>Edge Cases (Auto-adjust placement)</h2>
            <p>
              These buttons are near viewport edges - tooltips will auto-adjust!
            </p>

            <div className="corners">
              <div className="corner top-left">
                <Tooltip content="Top-left corner 📐" placement="bottom">
                  <button className="demo-button">Top Left</button>
                </Tooltip>
              </div>

              <div className="corner top-right">
                <Tooltip content="Top-right corner 📐" placement="bottom">
                  <button className="demo-button">Top Right</button>
                </Tooltip>
              </div>

              <div className="corner bottom-left">
                <Tooltip content="Bottom-left corner 📐" placement="top">
                  <button className="demo-button">Bottom Left</button>
                </Tooltip>
              </div>

              <div className="corner bottom-right">
                <Tooltip content="Bottom-right corner 📐" placement="top">
                  <button className="demo-button">Bottom Right</button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';

function Tooltip({ children, content, placement = 'top', delay = 300 }) {
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
        case 'top':
          top = triggerRect.top - tooltipRect.height - spacing;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          arrowTop = tooltipRect.height;
          arrowLeft = tooltipRect.width / 2 - arrowSize;
          break;

        case 'bottom':
          top = triggerRect.bottom + spacing;
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
          arrowTop = -arrowSize;
          arrowLeft = tooltipRect.width / 2 - arrowSize;
          break;

        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
          left = triggerRect.left - tooltipRect.width - spacing;
          arrowTop = tooltipRect.height / 2 - arrowSize;
          arrowLeft = tooltipRect.width;
          break;

        case 'right':
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
        top: ['bottom', 'right', 'left'],
        bottom: ['top', 'right', 'left'],
        left: ['right', 'top', 'bottom'],
        right: ['left', 'top', 'bottom']
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
          className={\`tooltip tooltip-\${actualPlacement}\`}
          style={{
            position: 'fixed',
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
            zIndex: 9999
          }}
        >
          {content}
          <div
            className={\`tooltip-arrow arrow-\${actualPlacement}\`}
            style={{
              top: \`\${arrowPosition.top}px\`,
              left: \`\${arrowPosition.left}px\`
            }}
          />
        </div>
      )}
    </div>
  );
}

// Demo App
function App() {
  return (
    <div className="app">
      <h1>🎈 Tooltip Component Demo</h1>
      <p className="subtitle">Hover or focus các elements để xem tooltips</p>

      <div className="demo-grid">
        {/* Top placements */}
        <div className="demo-section">
          <h2>Top Placement</h2>
          <div className="button-group">
            <Tooltip content="This is a top tooltip! 🎯" placement="top">
              <button className="demo-button">Hover me (Top)</button>
            </Tooltip>
          </div>
        </div>

        {/* Bottom placements */}
        <div className="demo-section">
          <h2>Bottom Placement</h2>
          <div className="button-group">
            <Tooltip content="This is a bottom tooltip! 📍" placement="bottom">
              <button className="demo-button">Hover me (Bottom)</button>
            </Tooltip>
          </div>
        </div>

        {/* Left placements */}
        <div className="demo-section">
          <h2>Left Placement</h2>
          <div className="button-group">
            <Tooltip content="This is a left tooltip! ⬅️" placement="left">
              <button className="demo-button">Hover me (Left)</button>
            </Tooltip>
          </div>
        </div>

        {/* Right placements */}
        <div className="demo-section">
          <h2>Right Placement</h2>
          <div className="button-group">
            <Tooltip content="This is a right tooltip! ➡️" placement="right">
              <button className="demo-button">Hover me (Right)</button>
            </Tooltip>
          </div>
        </div>

        {/* Long content */}
        <div className="demo-section">
          <h2>Long Content</h2>
          <div className="button-group">
            <Tooltip 
              content="This is a very long tooltip content that demonstrates how the tooltip handles longer text and wrapping. It should still position correctly! 📝"
              placement="top"
            >
              <button className="demo-button">Long Tooltip</button>
            </Tooltip>
          </div>
        </div>

        {/* Custom delay */}
        <div className="demo-section">
          <h2>No Delay</h2>
          <div className="button-group">
            <Tooltip content="Instant tooltip! ⚡" placement="top" delay={0}>
              <button className="demo-button">Instant Show</button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Edge cases */}
      <div className="edge-cases">
        <h2>Edge Cases (Auto-adjust placement)</h2>
        <p>These buttons are near viewport edges - tooltips will auto-adjust!</p>
        
        <div className="corners">
          <div className="corner top-left">
            <Tooltip content="Top-left corner 📐" placement="bottom">
              <button className="demo-button">Top Left</button>
            </Tooltip>
          </div>

          <div className="corner top-right">
            <Tooltip content="Top-right corner 📐" placement="bottom">
              <button className="demo-button">Top Right</button>
            </Tooltip>
          </div>

          <div className="corner bottom-left">
            <Tooltip content="Bottom-left corner 📐" placement="top">
              <button className="demo-button">Bottom Left</button>
            </Tooltip>
          </div>

          <div className="corner bottom-right">
            <Tooltip content="Bottom-right corner 📐" placement="top">
              <button className="demo-button">Bottom Right</button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// ✅ Tính năng đã implement:
// 🎯 Core Features:

// Smart Positioning với useLayoutEffect

// Calculate position TRƯỚC khi browser paint
// Không có flicker/jump
// Support 4 placements: top, bottom, left, right


// Collision Detection

// Auto-detect overflow viewport
// Fallback sang placement khác nếu không đủ chỗ
// Edge adjustment cho các trường hợp đặc biệt


// Arrow Positioning

// Arrow tự động point về trigger
// Position đúng cho mỗi placement
// CSS border trick cho arrow


// Delay Show/Hide

// Configurable delay (default 300ms)
// Show với delay để tránh flashing
// Hide instant để responsive


// Keyboard Support

// Focus/blur events
// tabIndex={0} cho accessibility



// 🔧 useLayoutEffect Usage:
// javascriptuseLayoutEffect(() => {
//   if (!isVisible) return;
  
//   // 1. Measure trigger & tooltip dimensions
//   const triggerRect = triggerRef.current.getBoundingClientRect();
//   const tooltipRect = tooltipRef.current.getBoundingClientRect();
  
//   // 2. Calculate position
//   let pos = calculatePosition(placement);
  
//   // 3. Check overflow
//   if (isOverflowing(pos)) {
//     // Try fallback placements
//   }
  
//   // 4. Set position trước khi paint
//   setPosition(pos);
// }, [isVisible, placement]);

// 💡 Key Patterns:
// 1. Fallback Placements:
// javascriptconst fallbackPlacements = {
//   top: ['bottom', 'right', 'left'],
//   bottom: ['top', 'right', 'left'],
//   left: ['right', 'top', 'bottom'],
//   right: ['left', 'top', 'bottom']
// };

// 2. Timeout Management:
// javascript// Show với delay
// showTimeoutRef.current = setTimeout(() => {
//   setIsVisible(true);
// }, delay);

// // Cleanup trong useEffect
// useEffect(() => {
//   return () => {
//     if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
//   };
// }, []);

// 3. Arrow với CSS Border Trick:
// css.arrow-top {
//   border-width: 8px 8px 0 8px;
//   border-color: color transparent transparent transparent;
// }

// 🎨 UI/UX:

// Glassmorphism - backdrop-filter blur
// Smooth animations - fadeIn 0.2s
// Responsive - Works on mobile
// Accessible - Keyboard support
// Visual feedback - Hover states

// 🎮 Test Features:

// Hover buttons - Xem tooltips ở các placements
// Edge cases - Buttons ở góc viewport tự động adjust
// Long content - Tooltip wraps text properly
// Keyboard - Tab và focus để trigger tooltips
// No delay option - Instant tooltip

// 🚀 Advantages of useLayoutEffect:

// ✅ No flicker - Position calculated trước paint
// ✅ Smooth appearance - User không thấy jump
// ✅ Accurate measurements - DOM measurements chính xác
// ✅ Sync updates - Position và state sync perfectly

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
