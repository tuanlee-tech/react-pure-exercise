import { useEffect, useLayoutEffect, useRef, useState } from "react";

// ==========================================
// CUSTOM ANIMATION HOOKS
// ==========================================

// ✅ 1. useAnimation - Timeline-based animation
function useAnimation(duration = 1000, easing = "linear") {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const startTimeRef = useRef(null);
  const pauseTimeRef = useRef(0);
  const rafRef = useRef(null);

  const easingFunctions = {
    linear: (t) => t,
    easeIn: (t) => t * t,
    easeOut: (t) => t * (2 - t),
    easeInOut: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeInCubic: (t) => t * t * t,
    easeOutCubic: (t) => --t * t * t + 1,
    easeInOutCubic: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    bounce: (t) => {
      if (t < 1 / 2.75) return 7.5625 * t * t;
      if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
      if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
  };

  useLayoutEffect(() => {
    if (!isPlaying || isPaused) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pauseTimeRef.current;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](rawProgress);

      setProgress(easedProgress);

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
        startTimeRef.current = null;
        pauseTimeRef.current = 0;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isPlaying, isPaused, duration, easing]);

  const play = () => {
    setIsPlaying(true);
    setIsPaused(false);
    if (progress === 1) {
      setProgress(0);
      startTimeRef.current = null;
      pauseTimeRef.current = 0;
    }
  };

  const pause = () => {
    if (isPlaying) {
      setIsPaused(true);
      pauseTimeRef.current = progress * duration;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    }
  };

  const resume = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsPlaying(true);
    }
  };

  const reset = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    startTimeRef.current = null;
    pauseTimeRef.current = 0;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  };

  const reverse = () => {
    setProgress(1 - progress);
    pauseTimeRef.current = (1 - progress) * duration;
    play();
  };

  return {
    progress,
    isPlaying,
    isPaused,
    play,
    pause,
    resume,
    reset,
    reverse,
  };
}

// ✅ 2. useSpring - Physics-based animation
function useSpring(target, config = {}) {
  const { stiffness = 170, damping = 26, mass = 1, precision = 0.01 } = config;
  const [value, setValue] = useState(target);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    let lastTime = performance.now();
    let settled = false;

    const animate = (time) => {
      const deltaTime = Math.min((time - lastTime) / 1000, 0.064); // Cap at ~15fps
      lastTime = time;

      // Spring physics calculation
      const displacement = target - value;
      const springForce = stiffness * displacement;
      const dampingForce = damping * velocityRef.current;
      const acceleration = (springForce - dampingForce) / mass;

      velocityRef.current += acceleration * deltaTime;
      const newValue = value + velocityRef.current * deltaTime;

      setValue(newValue);

      // Check if settled
      const isDisplacementSmall = Math.abs(displacement) < precision;
      const isVelocitySmall = Math.abs(velocityRef.current) < precision;

      if (isDisplacementSmall && isVelocitySmall) {
        setValue(target);
        velocityRef.current = 0;
        settled = true;
      }

      if (!settled) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, stiffness, damping, mass, precision, value]);

  return value;
}

// ✅ 3. useStagger - Staggered animations
function useStagger(count, delayBetween = 100, autoPlay = false) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeoutRef = useRef(null);

  const play = () => {
    setActiveIndex(-1);
    let index = 0;

    const stagger = () => {
      setActiveIndex(index);
      index++;

      if (index < count) {
        timeoutRef.current = setTimeout(stagger, delayBetween);
      }
    };

    stagger();
  };

  const reset = () => {
    setActiveIndex(-1);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      play();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoPlay]);

  return { activeIndex, play, reset };
}

// ✅ 4. useGesture - Gesture-based animation (drag)
function useGesture() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startPosRef.current = {
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - startPosRef.current.x;
    const newY = e.clientY - startPosRef.current.y;

    setPosition({ x: newX, y: newY });
    offsetRef.current = { x: newX, y: newY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }
  }, [isDragging]);

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    offsetRef.current = { x: 0, y: 0 };
  };

  return { position, isDragging, handlePointerDown, reset };
}

// ==========================================
// DEMO COMPONENTS
// ==========================================

function TimelineDemo() {
  const [easing, setEasing] = useState("easeInOut");
  const [duration, setDuration] = useState(1000);
  const animation = useAnimation(duration, easing);

  return (
    <div className="demo-card">
      <h2>⏱️ Timeline Animation</h2>

      <div className="controls">
        <button
          onClick={animation.play}
          disabled={animation.isPlaying && !animation.isPaused}
        >
          ▶️ Play
        </button>
        <button
          onClick={animation.pause}
          disabled={!animation.isPlaying || animation.isPaused}
        >
          ⏸️ Pause
        </button>
        <button onClick={animation.resume} disabled={!animation.isPaused}>
          ▶️ Resume
        </button>
        <button onClick={animation.reset}>🔄 Reset</button>
        <button onClick={animation.reverse}>↩️ Reverse</button>
      </div>

      <div className="control-group">
        <label>
          Easing:
          <select value={easing} onChange={(e) => setEasing(e.target.value)}>
            <option value="linear">Linear</option>
            <option value="easeIn">Ease In</option>
            <option value="easeOut">Ease Out</option>
            <option value="easeInOut">Ease In Out</option>
            <option value="easeInCubic">Ease In Cubic</option>
            <option value="easeOutCubic">Ease Out Cubic</option>
            <option value="easeInOutCubic">Ease In Out Cubic</option>
            <option value="bounce">Bounce</option>
          </select>
        </label>

        <label>
          Duration: {duration}ms
          <input
            type="range"
            min="500"
            max="3000"
            step="100"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${animation.progress * 100}%` }}
        />
      </div>

      <div className="animation-preview">
        <div
          className="animated-box"
          style={{
            transform: `translateX(${animation.progress * 300}px) scale(${
              0.5 + animation.progress * 0.5
            })`,
            opacity: animation.progress,
          }}
        >
          📦
        </div>
      </div>

      <div className="progress-text">
        Progress: {(animation.progress * 100).toFixed(1)}%
      </div>
    </div>
  );
}

function SpringDemo() {
  const [target, setTarget] = useState(0);
  const [config, setConfig] = useState({
    stiffness: 170,
    damping: 26,
  });
  const springValue = useSpring(target, config);

  return (
    <div className="demo-card">
      <h2>🎪 Spring Physics</h2>

      <div className="controls">
        <button onClick={() => setTarget(0)}>Left</button>
        <button onClick={() => setTarget(150)}>Center</button>
        <button onClick={() => setTarget(300)}>Right</button>
      </div>

      <div className="control-group">
        <label>
          Stiffness: {config.stiffness}
          <input
            type="range"
            min="50"
            max="300"
            value={config.stiffness}
            onChange={(e) =>
              setConfig({ ...config, stiffness: Number(e.target.value) })
            }
          />
        </label>

        <label>
          Damping: {config.damping}
          <input
            type="range"
            min="5"
            max="50"
            value={config.damping}
            onChange={(e) =>
              setConfig({ ...config, damping: Number(e.target.value) })
            }
          />
        </label>
      </div>

      <div className="animation-preview">
        <div
          className="animated-box spring-box"
          style={{
            transform: `translateX(${springValue}px)`,
          }}
        >
          🎾
        </div>
      </div>

      <div className="spring-info">
        <p>Target: {target}px</p>
        <p>Current: {springValue.toFixed(2)}px</p>
      </div>
    </div>
  );
}

function StaggerDemo() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  const [delay, setDelay] = useState(100);
  const stagger = useStagger(items.length, delay);

  return (
    <div className="demo-card">
      <h2>📊 Stagger Animation</h2>

      <div className="controls">
        <button onClick={stagger.play}>▶️ Play</button>
        <button onClick={stagger.reset}>🔄 Reset</button>
      </div>

      <div className="control-group">
        <label>
          Delay: {delay}ms
          <input
            type="range"
            min="50"
            max="300"
            step="50"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="stagger-grid">
        {items.map((item, index) => (
          <div
            key={item}
            className={`stagger-item ${
              index <= stagger.activeIndex ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function GestureDemo() {
  const gesture = useGesture();

  return (
    <div className="demo-card">
      <h2>🖐️ Gesture Animation (Drag)</h2>

      <div className="controls">
        <button onClick={gesture.reset}>🔄 Reset Position</button>
      </div>

      <div className="gesture-area">
        <div
          className={`draggable-box ${gesture.isDragging ? "dragging" : ""}`}
          style={{
            transform: `translate(${gesture.position.x}px, ${gesture.position.y}px)`,
          }}
          onPointerDown={gesture.handlePointerDown}
        >
          🎯 Drag me!
        </div>
      </div>

      <div className="gesture-info">
        <p>X: {gesture.position.x.toFixed(0)}px</p>
        <p>Y: {gesture.position.y.toFixed(0)}px</p>
        <p>Status: {gesture.isDragging ? "Dragging" : "Idle"}</p>
      </div>
    </div>
  );
}

// Main App
function AnimationDemo() {
  return (
    <div className="app">
      <h1>🎨 Advanced Animation System</h1>
      <p className="subtitle">
        Physics-based and timeline animations with useLayoutEffect
      </p>

      <div className="demos-grid">
        <TimelineDemo />
        <SpringDemo />
        <StaggerDemo />
        <GestureDemo />
      </div>
    </div>
  );
}

export default AnimationDemo;
