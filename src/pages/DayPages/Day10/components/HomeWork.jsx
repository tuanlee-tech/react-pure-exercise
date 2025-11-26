import ExerciseCard from "../../../../components/ExerciseCard";

export default function HomeWork() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={"#"} title="Home Work" />

      <ExerciseCard.Description>
        {`

1. Advanced Tooltip System
Smart positioning với collision detection
Multiple placements
Delay show/hide
Portal rendering
Arrow positioning
Touch support

2. Infinite Scroll với Virtual Scrolling
Render chỉ visible items
Smooth scrolling
Dynamic item heights
Bi-directional scrolling
Scroll restoration
Loading states

3. Custom Hooks Library
useAsync (async operations)
useThrottle
useDebounce
usePrevious
useToggle
useLocalStorage
useSessionStorage
useCopyToClipboard
useIdle
useTimeout

4. Animation Framework
Timeline control (play, pause, reverse)
Easing functions
Spring physics
Stagger animations
Sequence animations
Gesture-based animations

5. Advanced Form System (Challenge)
Field-level validation
Async validation
Dependent fields
Dynamic fields (add/remove)
Multi-step with progress
Auto-save drafts
Undo/redo
File uploads với progress



`}
      </ExerciseCard.Description>

      <ExerciseCard.Code>
        {`

// ==========================================
// 1️⃣ ADVANCED TOOLTIP SYSTEM
// Cốt lõi: useLayoutEffect + Portal + Collision Detection
// ==========================================

// Hook: useTooltip với smart positioning
function useTooltip({ placement = 'top', delay = 300, offset = 10 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualPlacement, setActualPlacement] = useState(placement);
  
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  // useLayoutEffect - Calculate position BEFORE paint
  useLayoutEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    // Placement calculations
    const placements = {
      top: {
        top: triggerRect.top - tooltipRect.height - offset,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      },
      bottom: {
        top: triggerRect.bottom + offset,
        left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
      },
      left: {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.left - tooltipRect.width - offset
      },
      right: {
        top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
        left: triggerRect.right + offset
      }
    };

    let finalPlacement = placement;
    let pos = placements[placement];

    // COLLISION DETECTION - Auto-adjust if overflow
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Check boundaries & fallback
    if (pos.top < 0) finalPlacement = 'bottom';
    else if (pos.top + tooltipRect.height > viewport.height) finalPlacement = 'top';
    else if (pos.left < 0) finalPlacement = 'right';
    else if (pos.left + tooltipRect.width > viewport.width) finalPlacement = 'left';

    pos = placements[finalPlacement];

    // Clamp to viewport
    pos.left = Math.max(10, Math.min(pos.left, viewport.width - tooltipRect.width - 10));
    pos.top = Math.max(10, Math.min(pos.top, viewport.height - tooltipRect.height - 10));

    setPosition(pos);
    setActualPlacement(finalPlacement);
  }, [isVisible, placement, offset]);

  // Delayed show
  const show = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  // Instant hide
  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  }, []);

  // Touch support
  const handleTouch = useCallback(() => {
    if (isVisible) hide();
    else show();
  }, [isVisible, show, hide]);

  return {
    triggerRef,
    tooltipRef,
    isVisible,
    position,
    actualPlacement,
    show,
    hide,
    handleTouch
  };
}

// Tooltip Component với Portal
function Tooltip({ children, content, placement = 'top' }) {
  const {
    triggerRef,
    tooltipRef,
    isVisible,
    position,
    actualPlacement,
    show,
    hide,
    handleTouch
  } = useTooltip({ placement, delay: 300 });

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onTouchStart={handleTouch}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </div>

      {isVisible && ReactDOM.createPortal(
        <div
          ref={tooltipRef}
          className={\`tooltip tooltip-\${actualPlacement}\`}
          style={{
            position: 'fixed',
            top: \`\${position.top}px\`,
            left: \`\${position.left}px\`,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            pointerEvents: 'none',
            animation: 'fadeIn 0.2s'
          }}
        >
          {content}
          {/* Arrow */}
          <div className={\`tooltip-arrow tooltip-arrow-\${actualPlacement}\`} />
        </div>,
        document.body
      )}
    </>
  );
}

// ==========================================
// 2️⃣ INFINITE SCROLL + VIRTUAL SCROLLING
// ĐÃ GIẢI Ở TRÊN - Key patterns:
// ==========================================
/*
- useLayoutEffect: Measure heights, restore scroll position
- IntersectionObserver: Infinite scroll trigger
- Throttle: Scroll performance (16ms = 60fps)
- Dynamic heights: Map to store measured heights
- Bi-directional: Load older + maintain position
*/

// ==========================================
// 3️⃣ CUSTOM HOOKS LIBRARY
// Cốt lõi: Reusable effect patterns
// ==========================================

// useAsync - Handle async operations
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle'); // idle | pending | success | error
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...params) => {
    setStatus('pending');
    setValue(null);
    setError(null);

    try {
      const response = await asyncFunction(...params);
      setValue(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
      throw error;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error, isLoading: status === 'pending' };
}

// useThrottle - Throttle value updates
function useThrottle(value, delay = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}

// useDebounce - Debounce value updates
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// usePrevious - Get previous value
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// useToggle - Boolean state helper
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse, setValue }];
}

// useLocalStorage - Sync with localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  // Listen to changes in other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [value, setValue];
}

// useSessionStorage - Same as localStorage but sessionStorage
function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

// useCopyToClipboard - Copy text to clipboard
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.error('Copy failed:', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}

// useIdle - Detect user idle state
function useIdle(timeout = 60000) {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleActivity = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), timeout);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => 
      document.addEventListener(event, handleActivity, true)
    );

    timeoutId = setTimeout(() => setIsIdle(true), timeout);

    return () => {
      events.forEach(event => 
        document.removeEventListener(event, handleActivity, true)
      );
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return isIdle;
}

// useTimeout - Declarative setTimeout
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

// ==========================================
// 4️⃣ ANIMATION FRAMEWORK
// Cốt lõi: requestAnimationFrame + useLayoutEffect
// ==========================================

// useAnimation - Timeline control
function useAnimation({ duration = 1000, easing = 'linear', autoPlay = false }) {
  const [progress, setProgress] = useState(0);
  const [state, setState] = useState('idle'); // idle | playing | paused | finished

  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(0);
  const rafRef = useRef(null);

  // Easing functions
  const easings = {
    linear: t => t,
    easeIn: t => t * t,
    easeOut: t => t * (2 - t),
    easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    elastic: t => {
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    }
  };

  const easingFn = easings[easing] || easings.linear;

  // Animation loop
  useLayoutEffect(() => {
    if (state !== 'playing') return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedTimeRef.current;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(rawProgress);

      setProgress(easedProgress);

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setState('finished');
        startTimeRef.current = null;
        pausedTimeRef.current = 0;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state, duration, easingFn]);

  const play = useCallback(() => {
    setState('playing');
  }, []);

  const pause = useCallback(() => {
    if (state === 'playing') {
      setState('paused');
      pausedTimeRef.current = progress * duration;
    }
  }, [state, progress, duration]);

  const reverse = useCallback(() => {
    setProgress(1 - progress);
    setState('playing');
  }, [progress]);

  const reset = useCallback(() => {
    setState('idle');
    setProgress(0);
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
  }, []);

  useEffect(() => {
    if (autoPlay) play();
  }, [autoPlay, play]);

  return { progress, state, play, pause, reverse, reset };
}

// useSpring - Physics-based animation
function useSpring(targetValue, config = {}) {
  const { stiffness = 170, damping = 26, mass = 1, precision = 0.01 } = config;
  
  const [value, setValue] = useState(targetValue);
  const velocity = useRef(0);
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const deltaTime = Math.min((time - lastTime) / 1000, 0.064); // Cap at 64ms
      lastTime = time;

      const springForce = -stiffness * (value - targetValue);
      const dampingForce = -damping * velocity.current;
      const acceleration = (springForce + dampingForce) / mass;

      velocity.current += acceleration * deltaTime;
      const newValue = value + velocity.current * deltaTime;

      setValue(newValue);

      // Continue if not settled
      const isMoving = Math.abs(velocity.current) > precision;
      const isDisplaced = Math.abs(targetValue - newValue) > precision;

      if (isMoving || isDisplaced) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(targetValue);
        velocity.current = 0;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetValue, stiffness, damping, mass, precision, value]);

  return value;
}

// useStagger - Stagger animations
function useStagger(count, delay = 100) {
  const [activeIndexes, setActiveIndexes] = useState(new Set());

  const trigger = useCallback(() => {
    setActiveIndexes(new Set());
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        setActiveIndexes(prev => new Set([...prev, i]));
      }, i * delay);
    }
  }, [count, delay]);

  return { activeIndexes, trigger };
}

// useGesture - Gesture-based animations (simplified)
function useGesture(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const startPos = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleStart = (e) => {
      setIsDragging(true);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      startPos.current = {
        x: clientX - offset.current.x,
        y: clientY - offset.current.y
      };
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const newPos = {
        x: clientX - startPos.current.x,
        y: clientY - startPos.current.y
      };

      offset.current = newPos;
      setPosition(newPos);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    element.addEventListener('mousedown', handleStart);
    element.addEventListener('touchstart', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      element.removeEventListener('mousedown', handleStart);
      element.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [ref, isDragging]);

  return { position, isDragging };
}

// ==========================================
// 5️⃣ ADVANCED FORM SYSTEM (CHALLENGE)
// Cốt lõi: useReducer + Complex validation + Auto-save
// ==========================================

// Form Actions
const FORM_ACTIONS = {
  SET_FIELD: 'SET_FIELD',
  SET_ERRORS: 'SET_ERRORS',
  SET_TOUCHED: 'SET_TOUCHED',
  SET_SUBMITTING: 'SET_SUBMITTING',
  ADD_FIELD: 'ADD_FIELD',
  REMOVE_FIELD: 'REMOVE_FIELD',
  RESET: 'RESET',
  UNDO: 'UNDO',
  REDO: 'REDO',
  SAVE_SNAPSHOT: 'SAVE_SNAPSHOT'
};

// Form Reducer
function formReducer(state, action) {
  switch (action.type) {
    case FORM_ACTIONS.SET_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value
        },
        errors: {
          ...state.errors,
          [action.payload.name]: null
        },
        touched: {
          ...state.touched,
          [action.payload.name]: true
        }
      };

    case FORM_ACTIONS.SET_ERRORS:
      return { ...state, errors: action.payload };

    case FORM_ACTIONS.SET_SUBMITTING:
      return { ...state, isSubmitting: action.payload };

    case FORM_ACTIONS.ADD_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value
        }
      };

    case FORM_ACTIONS.REMOVE_FIELD:
      const { [action.payload]: removed, ...restValues } = state.values;
      return { ...state, values: restValues };

    case FORM_ACTIONS.SAVE_SNAPSHOT:
      return {
        ...state,
        history: [...state.history, state.values],
        historyIndex: state.history.length
      };

    case FORM_ACTIONS.UNDO:
      if (state.historyIndex > 0) {
        const prevIndex = state.historyIndex - 1;
        return {
          ...state,
          values: state.history[prevIndex],
          historyIndex: prevIndex
        };
      }
      return state;

    case FORM_ACTIONS.REDO:
      if (state.historyIndex < state.history.length - 1) {
        const nextIndex = state.historyIndex + 1;
        return {
          ...state,
          values: state.history[nextIndex],
          historyIndex: nextIndex
        };
      }
      return state;

    case FORM_ACTIONS.RESET:
      return action.payload || initialFormState;

    default:
      return state;
  }
}

// useAdvancedForm Hook
function useAdvancedForm({
  initialValues,
  validate,
  asyncValidate,
  onSubmit,
  autoSave = false,
  autoSaveDelay = 2000
}) {
  const initialFormState = {
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    history: [initialValues],
    historyIndex: 0
  };

  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [validating, setValidating] = useState({});

  // Auto-save
  const debouncedValues = useDebounce(state.values, autoSaveDelay);
  
  useEffect(() => {
    if (autoSave && state.historyIndex > 0) {
      localStorage.setItem('form-draft', JSON.stringify(debouncedValues));
      console.log('Form auto-saved');
    }
  }, [debouncedValues, autoSave, state.historyIndex]);

  // Field-level validation
  const validateField = useCallback(async (name, value) => {
    // Sync validation
    if (validate) {
      const errors = validate({ ...state.values, [name]: value });
      if (errors[name]) {
        dispatch({ type: FORM_ACTIONS.SET_ERRORS, payload: { ...state.errors, [name]: errors[name] } });
        return false;
      }
    }

    // Async validation
    if (asyncValidate && asyncValidate[name]) {
      setValidating(prev => ({ ...prev, [name]: true }));
      
      try {
        const error = await asyncValidate[name](value);
        dispatch({ type: FORM_ACTIONS.SET_ERRORS, payload: { ...state.errors, [name]: error } });
        return !error;
      } finally {
        setValidating(prev => ({ ...prev, [name]: false }));
      }
    }

    return true;
  }, [state.values, state.errors, validate, asyncValidate]);

  // Set field value
  const setFieldValue = useCallback((name, value) => {
    dispatch({
      type: FORM_ACTIONS.SET_FIELD,
      payload: { name, value }
    });

    // Save snapshot for undo/redo
    dispatch({ type: FORM_ACTIONS.SAVE_SNAPSHOT });

    // Validate on change
    validateField(name, value);
  }, [validateField]);

  // Handle submit
  const handleSubmit = useCallback(async (e) => {
    if (e) e.preventDefault();

    // Validate all fields
    if (validate) {
      const errors = validate(state.values);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: FORM_ACTIONS.SET_ERRORS, payload: errors });
        return;
      }
    }

    dispatch({ type: FORM_ACTIONS.SET_SUBMITTING, payload: true });

    try {
      await onSubmit(state.values);
    } catch (error) {
      dispatch({ type: FORM_ACTIONS.SET_ERRORS, payload: { submit: error.message } });
    } finally {
      dispatch({ type: FORM_ACTIONS.SET_SUBMITTING, payload: false });
    }
  }, [state.values, validate, onSubmit]);

  // Dynamic fields
  const addField = useCallback((name, value) => {
    dispatch({ type: FORM_ACTIONS.ADD_FIELD, payload: { name, value } });
  }, []);

  const removeField = useCallback((name) => {
    dispatch({ type: FORM_ACTIONS.REMOVE_FIELD, payload: name });
  }, []);

  // Undo/Redo
  const undo = useCallback(() => {
    dispatch({ type: FORM_ACTIONS.UNDO });
  }, []);

  const redo = useCallback(() => {
    dispatch({ type: FORM_ACTIONS.REDO });
  }, []);

  const canUndo = state.historyIndex > 0;
  const canRedo = state.historyIndex < state.history.length - 1;

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: state.isSubmitting,
    validating,
    setFieldValue,
    handleSubmit,
    addField,
    removeField,
    undo,
    redo,
    canUndo,
    canRedo
  };
}

// Demo: Multi-step Form với File Upload
function AdvancedFormDemo() {
  const [step, setStep] = useState(1);
  const [uploadProgress, setUploadProgress] = useState({});

  const validate = (values) => {
    const errors = {};
    
    if (step === 1) {
      if (!values.email) errors.email = 'Required';
      else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) errors.email = 'Invalid email';
      
      if (!values.password) errors.password = 'Required';
      else if (values.password.length < 6) errors.password = 'Min 6 characters';
    }

    if (step === 2) {
      if (!values.firstName) errors.firstName = 'Required';
      if (!values.lastName) errors.lastName = 'Required';
    }

    return errors;
  };

  // Async validation
  const asyncValidate = {
    email: async (value) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (value === 'taken@example.com') {
        return 'Email already taken';
      }
      return null;
    }
  };

  const form = useAdvancedForm({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      skills: ['']
    },
    validate,
    asyncValidate,
    onSubmit: async (values) => {
      console.log('Submitting:', values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Form submitted!');
    },
    autoSave: true,
    autoSaveDelay: 2000
  });

  // File upload simulation
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadId = Date.now();
    setUploadProgress(prev => ({ ...prev, [uploadId]: 0 }));

    // Simulate upload
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const progress = prev[uploadId] + 10;
        if (progress >= 100) {
          clearInterval(interval);
          form.setFieldValue('avatar', file.name);
          return { ...prev, [uploadId]: 100 };
        }
        return { ...prev, [uploadId]: progress };
      });
    }, 200);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Advanced Form Demo</h1>

      {/* Progress */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        {[1, 2, 3].map(s => (
          <div
            key={s}
            style={{
              flex: 1,
              height: '4px',
              background: s <= step ? '#007bff' : '#ddd',
              borderRadius: '2px'
            }}
          />
        ))}
      </div>

      <form onSubmit={form.handleSubmit}>
        {/* Step 1: Account */}
        {step === 1 && (
          <div>
            <h2>Step 1: Account</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <label>Email {form.validating.email && '(validating...)'}</label>
              <input
                type="email"
                value={form.values.email}
                onChange={(e) => form.setFieldValue('email', e.target.value)}
              />
              {form.errors.email && <span style={{color: 'red'}}>{form.errors.email}</span>}
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label>Password</label>
              <input
                type="password"
                value={form.values.password}
                onChange={(e) => form.setFieldValue('password', e.target.value)}
              />
              {form.errors.password && <span style={{color: 'red'}}>{form.errors.password}</span>}
            </div>

            <button type="button" onClick={() => setStep(2)}>Next</button>
          </div>
        )}

        {/* Step 2: Profile */}
        {step === 2 && (
          <div>
            <h2>Step 2: Profile</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <label>First Name</label>
              <input
                value={form.values.firstName}
                onChange={(e) => form.setFieldValue('firstName', e.target.value)}
              />
              {form.errors.firstName && <span style={{color: 'red'}}>{form.errors.firstName}</span>}
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label>Last Name</label>
              <input
                value={form.values.lastName}
                onChange={(e) => form.setFieldValue('lastName', e.target.value)}
              />
              {form.errors.lastName && <span style={{color: 'red'}}>{form.errors.lastName}</span>}
            </div>

            {/* Dynamic Fields */}
            <div style={{ marginBottom: '15px' }}>
              <h3>Skills</h3>
              {form.values.skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                  <input
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...form.values.skills];
                      newSkills[index] = e.target.value;
                      form.setFieldValue('skills', newSkills);
                    }}
                    placeholder="Enter skill"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newSkills = form.values.skills.filter((_, i) => i !== index);
                      form.setFieldValue('skills', newSkills);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => form.setFieldValue('skills', [...form.values.skills, ''])}
              >
                + Add Skill
              </button>
            </div>

            <button type="button" onClick={() => setStep(1)}>Back</button>
            <button type="button" onClick={() => setStep(3)}>Next</button>
          </div>
        )}

        {/* Step 3: Review & Upload */}
        {step === 3 && (
          <div>
            <h2>Step 3: Review</h2>
            
            {/* File Upload */}
            <div style={{ marginBottom: '20px' }}>
              <label>Profile Picture</label>
              <input type="file" onChange={handleFileUpload} accept="image/*" />
              {Object.entries(uploadProgress).map(([id, progress]) => (
                <div key={id}>
                  <progress value={progress} max="100" style={{ width: '100%' }} />
                  <span>{progress}%</span>
                </div>
              ))}
            </div>

            {/* Review Data */}
            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px' }}>
              <h3>Review Your Information</h3>
              <p><strong>Email:</strong> {form.values.email}</p>
              <p><strong>Name:</strong> {form.values.firstName} {form.values.lastName}</p>
              <p><strong>Skills:</strong> {form.values.skills.filter(Boolean).join(', ')}</p>
              {form.values.avatar && <p><strong>Avatar:</strong> {form.values.avatar}</p>}
            </div>

            {/* Undo/Redo */}
            <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
              <button type="button" onClick={form.undo} disabled={!form.canUndo}>
                ↶ Undo
              </button>
              <button type="button" onClick={form.redo} disabled={!form.canRedo}>
                ↷ Redo
              </button>
            </div>

            <button type="button" onClick={() => setStep(2)}>Back</button>
            <button type="submit" disabled={form.isSubmitting}>
              {form.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        )}
      </form>

      {/* Auto-save indicator */}
      <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
        💾 Form is auto-saving...
      </p>
    </div>
  );
}

// ==========================================
// 📝 TÓM TẮT KEY PATTERNS
// ==========================================

/*
=== 1. TOOLTIP SYSTEM ===
✅ useLayoutEffect: Position BEFORE paint (no flicker)
✅ Collision detection: Auto-adjust placement
✅ Portal: Render outside parent DOM
✅ Delayed show: Better UX
✅ Touch support: Mobile-friendly

=== 2. VIRTUAL SCROLLING ===
✅ Only render visible items (performance)
✅ useLayoutEffect: Measure & restore scroll
✅ IntersectionObserver: Infinite scroll
✅ Throttle: Smooth 60fps scrolling
✅ Dynamic heights: Measure on render

=== 3. CUSTOM HOOKS ===
✅ useAsync: Centralize async logic
✅ useDebounce/Throttle: Performance optimization
✅ useLocalStorage: Persistent state
✅ usePrevious: Compare changes
✅ useIdle: User activity tracking

=== 4. ANIMATION FRAMEWORK ===
✅ useLayoutEffect: Sync animations
✅ requestAnimationFrame: 60fps smooth
✅ Easing functions: Natural motion
✅ Spring physics: Realistic feel
✅ Gesture support: Interactive animations

=== 5. ADVANCED FORM ===
✅ useReducer: Complex state management
✅ Field-level validation: Better UX
✅ Async validation: Server checks
✅ Auto-save: Drafts with debounce
✅ Undo/Redo: History management
✅ Dynamic fields: Add/remove on fly
✅ Multi-step: Progress tracking
✅ File upload: Progress feedback

=== CORE PRINCIPLES ===
1. useLayoutEffect = Sync DOM operations
2. useEffect = Async side effects
3. Custom hooks = Reusable logic
4. Memoization = Performance
5. Refs = Non-reactive values
6. Cleanup = Memory management

=== PERFORMANCE TIPS ===
- Virtual scroll: 1000+ items
- Debounce: Search, auto-save
- Throttle: Scroll, resize events
- Memoize: Expensive calculations
- useLayoutEffect: Only when needed
- RAF: Smooth animations
*/


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
