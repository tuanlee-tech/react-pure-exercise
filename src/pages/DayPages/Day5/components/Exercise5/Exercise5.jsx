import ExerciseCard from "../../../../../components/ExerciseCard";
import LifecyclePlayground from "./components/LifecyclePlayground";
import "./styles.css";

export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={5} title="Lifecycle Playground (Challenge)" />

      <ExerciseCard.Description>
        {`
// ============================
// ĐỀ BÀI: Trực quan hóa các phương pháp Lifecycle trong React
// ============================

/*
Mục tiêu:
- Tạo một ứng dụng React để trực quan hóa và theo dõi các lifecycle methods của class component và function component.
- So sánh sự khác biệt giữa việc sử dụng lifecycle methods trong class component và hooks (useEffect) trong function component.

Yêu cầu:
1. Tạo Class Component và Function Component với các lifecycle methods sau:
    - componentDidMount: Được gọi sau khi component đã được mount vào DOM.
    - componentDidUpdate: Được gọi khi props hoặc state của component thay đổi.
    - componentWillUnmount: Được gọi trước khi component bị unmount khỏi DOM.
    - useEffect (Function Component): Thay thế các lifecycle methods trong function component.
    - useRef: Được sử dụng để đếm số lần render của parent và child component.

2. Thực hiện các thao tác sau trong class component và function component:
    - Increment Count: Nút để tăng giá trị count.
    - Show/Hide Child: Nút để ẩn hoặc hiện child component.
    - Clear Logs: Nút để xóa log.
    - Hiển thị logs cho các lifecycle methods của parent và child component.

3. Cần có các phương thức lifecycle sau cho child component:
    - componentDidMount/useEffect (mount): Được gọi khi child component được mount.
    - componentDidUpdate/useEffect (update): Được gọi khi count thay đổi.
    - componentWillUnmount/useEffect (cleanup): Được gọi trước khi component bị unmount.

4. Logs:
    - Cập nhật log mỗi khi render, mount, update, unmount diễn ra.
    - Hiển thị log cho cả parent và child component.

5. So sánh lifecycle:
    - So sánh trực quan giữa Class Component và Function Component khi thực hiện các thao tác trên.

6. Yêu cầu kỹ thuật:
    - Không gây lỗi "Maximum update depth exceeded".
    - Không gây lỗi "Cannot update during render".
    - Đảm bảo ứng dụng production-ready, không có render thừa và không bị đơ khi sử dụng.

7. Hiển thị số liệu hiệu suất:
    - Hiển thị số lần render của Parent và Child.
    - Hiển thị tổng số logs đã tạo ra trong quá trình lifecycle.

*/

// ============================
// Class Component (LifecycleDemo)
// ============================

/*
Tạo một class component có tên LifecycleDemo:
- State:
    - logs: Lưu các log lifecycle (array).
    - count: Dùng để đếm số lần render.
    - showChild: Điều khiển hiển thị child component.

- Phương thức lifecycle:
    - componentDidMount(): Log thông tin khi parent component được mount.
    - componentDidUpdate(prevProps, prevState): Log thông tin khi state count hoặc showChild thay đổi.
    - componentWillUnmount(): Log thông tin khi component bị unmount.
*/

// ============================
// Function Component (LifecycleFunction)
// ============================

/*
Tạo một function component có tên LifecycleFunction:
- Hooks:
    - useState: Quản lý các state count, showChild.
    - useRef: Đếm số lần render của component.
    - useEffect: Thay thế các lifecycle methods của class component.
        - useEffect với mảng dependencies rỗng: Thực hiện mount.
        - useEffect với dependency là count: Thực hiện update khi count thay đổi.
        - Cleanup trong useEffect: Giống như componentWillUnmount trong class component.

- Đảm bảo tương tự như class component, có log cho mọi thao tác lifecycle: render, mount, update, unmount.
*/

// ============================
// Child Component (ChildClass / ChildFunction)
// ============================

/*
Tạo child component cho cả Class và Function Component:
- Class Component (ChildClass):
    - Phương thức lifecycle:
        - componentDidMount(): Log khi child component được mount.
        - componentDidUpdate(prevProps): Log khi count thay đổi.
        - componentWillUnmount(): Log khi child component bị unmount.
    - Sử dụng this.props.count để hiển thị giá trị count.

- Function Component (ChildFunction):
    - useEffect: Tương tự như trong class component, gọi khi count thay đổi hoặc khi component mount/unmount.
    - useRef: Đếm số lần render của child.
*/

// ============================
// Tính năng bổ sung: So sánh Class và Function Component
// ============================

/*
Tạo bảng so sánh lifecycle methods của Class và Function Component:
    - Thứ tự gọi các lifecycle methods giữa class và function component.
    - So sánh giữa componentDidMount, componentDidUpdate, componentWillUnmount trong class component và useEffect trong function component.
    - Hiển thị số lần render của cả parent và child component.

Hiển thị kết quả trong bảng so sánh lifecycle:
    - Render (mỗi lần)
    - Mount (sau render đầu)
    - Update (khi state/props thay đổi)
    - Unmount (trước khi mất)
    - Các phương thức khác như shouldComponentUpdate, getSnapshotBeforeUpdate, React.memo, useMemo, useCallback
*/

// ============================
// Yêu cầu kỹ thuật:
// ============================

/*
    1. Không gây lỗi "Maximum update depth exceeded": Đảm bảo không có vòng lặp vô tận khi cập nhật state.
    2. Không gây lỗi "Cannot update during render": Tránh việc cập nhật state trong quá trình render.
    3. Sử dụng đúng lifecycle methods trong cả class component và function component.
    4. Đảm bảo các component được tối ưu hóa, tránh render thừa.
    5. Production-ready: Đảm bảo ứng dụng hoạt động ổn định và không gây lỗi trong môi trường sản xuất.

*/

// ============================
// Các phương thức cần sử dụng:
// ============================

/*
- Class Component:
    - componentDidMount, componentDidUpdate, componentWillUnmount
- Function Component:
    - useEffect, useRef, useState
    - Sử dụng useLayoutEffect khi cần thiết
*/


// ============================
// BONUS: Các lifecycle nâng cao (Advanced Lifecycle Methods)
// ============================

/*
BONUS: Tìm hiểu và implement các lifecycle nâng cao trong React

Hướng dẫn:

1. Class Component:
    - shouldComponentUpdate(nextProps, nextState):
        - Được gọi trước mỗi lần render, cho phép kiểm soát xem component có cần re-render hay không.
        - Tìm hiểu và implement phương thức này để quyết định khi nào nên re-render dựa trên nextProps và nextState.
        
    - getDerivedStateFromProps(nextProps, nextState):
        - Được gọi trước mỗi render, khi props thay đổi. Để cập nhật state dựa trên props mới.
        - Cần tìm hiểu cách sử dụng getDerivedStateFromProps để đồng bộ hóa state với props.
        
    - getSnapshotBeforeUpdate(prevProps, prevState):
        - Được gọi ngay trước khi React cập nhật DOM, có thể lấy thông tin snapshot của DOM trước khi cập nhật.
        - Cần tìm hiểu cách sử dụng getSnapshotBeforeUpdate để lấy snapshot của DOM trước khi update.

    - componentDidCatch(error, info):
        - Phương thức lifecycle dùng để bắt lỗi trong tree của React và hiển thị thông báo lỗi thay vì crash toàn bộ ứng dụng.
        - Cần tìm hiểu cách bắt lỗi bằng componentDidCatch và render UI fallback khi có lỗi.

2. Function Component (Hooks):
    - useMemo:
        - Sử dụng để ghi nhớ giá trị của tính toán đắt đỏ (expensive calculation) trong function component và tránh tính toán lại nếu không cần thiết.
        - Tìm hiểu cách sử dụng useMemo để tối ưu hóa hiệu suất.
        
    - useCallback:
        - Dùng để ghi nhớ một function và chỉ tái tạo lại function đó khi dependencies thay đổi.
        - Tìm hiểu cách sử dụng useCallback để tối ưu hóa việc truyền function xuống các component con.

    - useLayoutEffect:
        - Tương tự như useEffect nhưng được gọi ngay sau khi render và trước khi layout được vẽ lên, hữu ích khi muốn đo kích thước của DOM hoặc thay đổi style trước khi render.

    - useImperativeHandle:
        - Cung cấp cho child component API có thể gọi từ parent component, thường dùng khi cần phải làm việc với DOM elements hoặc component methods.

    - useErrorBoundary (React 18):
        - Nếu sử dụng React 18, tìm hiểu về useErrorBoundary hook để xử lý lỗi trong function component.

3. Yêu cầu:
    - Tìm hiểu cách sử dụng các lifecycle nâng cao trong React (class component và function component).
    - Implement ít nhất một trong các lifecycle nâng cao như shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate trong class component hoặc các hooks như useMemo, useCallback, useLayoutEffect trong function component.
    - Đảm bảo các lifecycle nâng cao này giúp tối ưu hóa hiệu suất và render.
    - Hiển thị logs hoặc bảng so sánh để chứng minh hiệu quả của các lifecycle nâng cao trong ứng dụng.
*/
Giải thích phần Bonus:
1. Class Component:
   - shouldComponentUpdate: Giúp quyết định xem component có cần re-render hay không.
   - getDerivedStateFromProps: Cập nhật state dựa trên sự thay đổi của props.
   - getSnapshotBeforeUpdate: Giúp lấy thông tin snapshot của DOM trước khi thực hiện update.
   - componentDidCatch: Dùng để bắt lỗi và hiển thị UI fallback.

2. Function Component:
   - useMemo: Giúp lưu lại kết quả tính toán để tránh tính lại trong những lần render sau.
   - useCallback: Giúp lưu lại một hàm để tránh tái tạo lại hàm đó trong những lần render không cần thiết.
   - useLayoutEffect: Giống như useEffect, nhưng chạy trước khi layout được render.
   - useImperativeHandle: Giúp child component expose các API cho parent component.
   - useErrorBoundary: Mới trong React 18, giúp bắt lỗi trong function component.

Phần Bonus này khuyến khích người làm việc tìm hiểu và áp dụng các lifecycle nâng cao để tối ưu hóa hiệu suất, giảm thiểu render thừa và xử lý lỗi trong ứng dụng React.

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <LifecyclePlayground />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card } from "@ui";
import { Component, useEffect, useRef, useState } from "react";

/* ==================== CLASS COMPONENT  ==================== */
class LifecycleDemo extends Component {
  state = { count: 0, showChild: true };
  logsRef = { current: [] };
  parentRenderCount = 0;

  log = (msg) =>
    this.logsRef.current.push(\`\${new Date().toLocaleTimeString()}: \${msg}\`);

  componentDidMount() {
    this.log("Parent Class: componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      this.log(\`Parent Class: count → \${this.state.count}\`);
    if (prevState.showChild !== this.state.showChild)
      this.log(\`Parent Class: showChild → \${this.state.showChild}\`);
  }

  componentWillUnmount() {
    this.log("Parent Class: cleanup (unmount)");
  }

  render() {
    this.parentRenderCount++;
    this.log(\`Parent Class: render (\${this.parentRenderCount})\`);

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
      this.props.log(\`Child Class: count → \${this.props.count}\`);
    }
  }

  componentWillUnmount() {
    this.props.log("Child Class: cleanup (unmount)");
  }

  render() {
    this.childRenderCount++;
    this.props.log(\`Child Class: render (\${this.childRenderCount})\`);

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
    logsRef.current.push(\`\${new Date().toLocaleTimeString()}: \${msg}\`);

  const clearLogs = () => {
    logsRef.current = [];
    setCount((c) => c + 1);
  };

  useEffect(() => {
    log("Function: useEffect (mount)");
    return () => log("Function: useEffect cleanup (unmount)");
  }, []);

  useEffect(() => {
    if (count > 0) log(\`Function: count → \${count}\`);
  }, [count]);

  parentRenderCount.current += 1;
  log(\`Function: render (\${parentRenderCount.current})\`);

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
    log(\`Child Function: count → \${count}\`);
  }, [count, log]);

  log(\`Child Function: render (\${childRenderCount.current})\`);

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
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
