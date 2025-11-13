import { Button, Card } from "@ui";
import { Component, useEffect, useRef, useState } from "react";

/* ==================== CLASS COMPONENT  ==================== */
class LifecycleDemo extends Component {
  state = { count: 0, showChild: true };
  logsRef = { current: [] };
  parentRenderCount = 0;

  log = (msg) =>
    this.logsRef.current.push(`${new Date().toLocaleTimeString()}: ${msg}`);

  componentDidMount() {
    this.log("Parent Class: componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      this.log(`Parent Class: count → ${this.state.count}`);
    if (prevState.showChild !== this.state.showChild)
      this.log(`Parent Class: showChild → ${this.state.showChild}`);
  }

  componentWillUnmount() {
    this.log("Parent Class: cleanup (unmount)");
  }

  render() {
    this.parentRenderCount++;
    this.log(`Parent Class: render (${this.parentRenderCount})`);

    const { count, showChild } = this.state;

    return (
      <Card className="lifecycle-card">
        <h2>Class Component</h2>
        <p>
          <strong>Parent Renders:</strong> {this.parentRenderCount}
        </p>

        <div className="controls">
          <Button
            onClick={() => this.setState({ count: count + 1 })}
            variant="primary"
          >
            Count ({count})
          </Button>
          <Button
            onClick={() => this.setState({ showChild: !showChild })}
            variant="secondary"
          >
            {showChild ? "Hide" : "Show"} Child
          </Button>
          <Button
            onClick={() => {
              this.logsRef.current = [];
              this.forceUpdate();
            }}
            variant="danger"
          >
            Clear Logs
          </Button>
        </div>

        {showChild && <ChildClass log={this.log} count={count} />}
        <LogsList logs={this.logsRef.current} title="Class Logs" />
      </Card>
    );
  }
}

class ChildClass extends Component {
  childRenderCount = 0;

  componentDidMount() {
    this.props.log("Child Class: Did Mount (~ useEffect[])");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.props.log(`Child Class: count → ${this.props.count}`);
    }
  }

  componentWillUnmount() {
    this.props.log("Child Class: cleanup (unmount)");
  }

  render() {
    this.childRenderCount++;
    this.props.log(`Child Class: render (${this.childRenderCount})`);

    return (
      <div className="child-box">
        Child Class (count: {this.props.count}) – Render #
        {this.childRenderCount}
      </div>
    );
  }
}

/* ==================== FUNCTION COMPONENT ==================== */
function LifecycleFunction() {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);
  const logsRef = useRef([]);
  const parentRenderCount = useRef(0);

  const log = (msg) =>
    logsRef.current.push(`${new Date().toLocaleTimeString()}: ${msg}`);

  const clearLogs = () => {
    logsRef.current = [];
    setCount((c) => c + 1);
  };

  useEffect(() => {
    log("Function: useEffect (mount)");
    return () => log("Function: useEffect cleanup (unmount)");
  }, []);

  useEffect(() => {
    if (count > 0) log(`Function: count → ${count}`);
  }, [count]);

  parentRenderCount.current += 1;
  log(`Function: render (${parentRenderCount.current})`);

  return (
    <Card className="lifecycle-card">
      <h2>Function Component</h2>
      <p>
        <strong>Parent Renders:</strong> {parentRenderCount.current}
      </p>

      <div className="controls">
        <Button onClick={() => setCount((c) => c + 1)} variant="primary">
          Count ({count})
        </Button>
        <Button onClick={() => setShowChild((s) => !s)} variant="secondary">
          {showChild ? "Hide" : "Show"} Child
        </Button>
        <Button onClick={clearLogs} variant="danger">
          Clear Logs
        </Button>
      </div>

      {showChild && <ChildFunction log={log} count={count} />}
      <LogsList logs={logsRef.current} title="Function Logs" />
    </Card>
  );
}

function ChildFunction({ log, count }) {
  const childRenderCount = useRef(0);
  childRenderCount.current += 1;

  useEffect(() => {
    log("Child Function: useEffect (mount)");
    return () => log("Child Function: cleanup (unmount)");
  }, [log]);

  useEffect(() => {
    log(`Child Function: count → ${count}`);
  }, [count, log]);

  log(`Child Function: render (${childRenderCount.current})`);

  return (
    <div className="child-box function">
      Child Function (count: {count}) – Render #{childRenderCount.current}
    </div>
  );
}

function LogsList({ logs, title }) {
  return (
    <div className="logs">
      <h3>
        {title} ({logs.length})
      </h3>
      {logs.length === 0 ? (
        <p>No logs yet...</p>
      ) : (
        <ul>
          {logs.map((l, i) => (
            <li key={i}>
              <code>{l}</code>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ==================== MAIN APP ==================== */
export default function LifecyclePlayground() {
  return (
    <div className="playground">
      <h1>Lifecycle Playground</h1>
      <div className="grid">
        <LifecycleDemo />
        <LifecycleFunction />
      </div>

      <div
        className="success"
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          background: "#16213e",
          borderRadius: "12px",
          border: "2px solid #00ff88",
          lineHeight: "2em",
        }}
      >
        <h3 style={{ color: "#00ff88" }}>
          SO SÁNH LIFECYCLE – CLASS VS FUNCTION COMPONENT
        </h3>
        <p style={{ color: "#a0d8ff", lineHeight: "1.8" }}>
          Playground này giúp bạn <strong>nhìn thấy trực tiếp</strong> từng giai
          đoạn lifecycle chạy như thế nào:
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#e0e0e0",
            fontSize: "0.95rem",
          }}
        >
          <thead>
            <tr style={{ background: "#1e2a44" }}>
              <th
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  textAlign: "left",
                }}
              >
                Giai đoạn
              </th>
              <th
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  textAlign: "left",
                }}
              >
                Class Component
              </th>
              <th
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  textAlign: "left",
                }}
              >
                Function Component + Hooks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  background: "#1a2333",
                }}
              >
                <strong>Render (mỗi lần)</strong>
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #444" }}>
                <code>render()</code>
                <br />→ Phải tự log + đếm bằng biến instance
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  color: "#00ff88",
                }}
              >
                <code>Function body chạy lại</code>
                <br />→ Tự động log + đếm bằng <code>useRef</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  background: "#1a2333",
                }}
              >
                <strong>Mount (sau render đầu)</strong>
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #444" }}>
                <code>componentDidMount()</code>
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  color: "#00ff88",
                }}
              >
                <code>{`useEffect(() => { ... }, [])`}</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  background: "#1a2333",
                }}
              >
                <strong>Update (khi state/props đổi)</strong>
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #444" }}>
                <code>componentDidUpdate(prevProps, prevState)</code>
                <br />→ Phải tự so sánh <code>prevState</code>
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  color: "#00ff88",
                }}
              >
                <code>{`useEffect(() => { ... }, [deps])`}</code>
                <br />→ Tự động chạy khi <code>deps</code> thay đổi
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  background: "#1a2333",
                }}
              >
                <strong>Unmount (trước khi mất)</strong>
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #444" }}>
                <code>componentWillUnmount()</code>
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  color: "#00ff88",
                }}
              >
                <code>{`return () => cleanup`}</code> trong{" "}
                <code>useEffect</code>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  background: "#1a2333",
                }}
              >
                <strong>Các method khác</strong>
              </td>
              <td style={{ padding: "0.75rem", border: "1px solid #444" }}>
                <code>shouldComponentUpdate</code>,{" "}
                <code>getSnapshotBeforeUpdate</code>, v.v.
              </td>
              <td
                style={{
                  padding: "0.75rem",
                  border: "1px solid #444",
                  color: "#00ff88",
                }}
              >
                Thay bằng <code>React.memo</code>, <code>useMemo</code>,{" "}
                <code>useCallback</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ color: "#00ff88", marginTop: "1.5rem" }}>
          Tóm tắt so sánh lifecycle:
        </h4>
        <ul style={{ color: "#ffdd99", lineHeight: "1.9" }}>
          <li>
            <strong>Thứ tự chạy:</strong> Giống hệt nhau → bạn thấy rõ trong
            logs
          </li>
          <li>
            <strong>Function Component:</strong> 1 hàm <code>useEffect</code>{" "}
            thay thế 3 lifecycle methods
          </li>
          <li>
            <strong>Class Component:</strong> Nhiều method riêng lẻ → dễ nhầm,
            dễ quên
          </li>
          <li>
            <strong>Log giống hệt nhau:</strong> Dễ nhìn ra sự tương đương 1-1
          </li>
        </ul>

        <p
          style={{
            marginTop: "1.5rem",
            color: "#00ff88",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Kết luận:{" "}
          <strong>
            Hooks không phải là “khác biệt” – mà là “cách viết tốt hơn” của cùng
            một lifecycle!
          </strong>
        </p>
      </div>
    </div>
  );
}
