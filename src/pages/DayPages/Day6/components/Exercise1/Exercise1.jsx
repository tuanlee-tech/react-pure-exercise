import ExerciseCard from "../../../../../components/ExerciseCard";
import AdvancedCounter from "./components/AdvancedCounter";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="Counter Nâng Cao" />

      <ExerciseCard.Description>
        {`
function AdvancedCounter() {
  // TODO:
  // 1. Count state
  // 2. Step size state (có thể thay đổi được)
  // 3. History state (lưu các giá trị trước đó)
  // 4. Min/max limits
  // 5. Các nút: +, -, Reset, Undo, Redo
  // 6. Hiển thị history

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <AdvancedCounter />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { useState } from "react";
const initialValue = {
  state: {
    count: 0,
    history: [],
  },
  redoStack: [],
};
export default function AdvancedCounter() {
  // TODO:
  // 1. Count state
  // 2. Step size state (có thể thay đổi được)
  // 3. History state (lưu các giá trị trước đó)
  // 4. Min/max limits
  // 5. Các nút: +, -, Reset, Undo, Redo
  // 6. Hiển thị history
  const [state, setState] = useState(() => initialValue.state);
  const [redoStack, setRedoStack] = useState(initialValue.redoStack);
  const [step, setStep] = useState(1);
  const increment = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + step,
      history: [prev.count + step, ...prev.history],
    }));
  };
  const decrease = () => {
    if (state.count < 1) return;
    setState((prev) => ({
      ...prev,
      count: prev.count - step,
      history: [prev.count - step, ...prev.history],
    }));
  };

  const undo = () => {
    if (state.history < 2) return;

    const [newest, ...rest] = history;

    setState((prev) => ({
      ...prev,
      count: rest[0],
      history: rest,
    }));

    setRedoStack([newest, ...redoStack]);
  };
  const redo = () => {
    if (redoStack.length === 0) return;
    const [next, ...rest] = redoStack;
    setState((prev) => ({
      ...prev,
      count: next,
      history: [next, ...prev.history],
    }));
    setRedoStack(rest);
  };
  const reset = () => {
    setState(initialValue.state);
    setRedoStack(initialValue.redoStack);
  };
  const handleStepChange = (e) => setStep(+e.target.value);
  const { count, history } = state;

  return (
    <div className="advanced-counter">
      <div className="counter-value">{count}</div>
      <div className="controls">
        <button disabled={count < 1} onClick={decrease}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
      <div className="controls">
        <button disabled={history < 2} onClick={undo}>
          Undo
        </button>
        <button disabled={redoStack.length === 0} onClick={redo}>
          Redo
        </button>
        <button disabled={history.length === 0} onClick={reset}>
          Reset
        </button>
      </div>
      <div className="step-control">
        <label>Step: </label>
        <input min={1} type="number" value={step} onChange={handleStepChange} />
      </div>
      {history.length > 0 && (
        <div className="history">
          <h3>History</h3>
          <ul className="history-list">
            {history.map((c, idx) => (
              <li key={idx + 1} className={\`\${idx === 0 ? "current" : ""}\`}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
