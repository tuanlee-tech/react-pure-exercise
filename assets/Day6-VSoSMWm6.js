import{r as g,j as e,C as te}from"./index-BS3qSuky.js";/* empty css               */import{E as d}from"./ExerciseCard-mXl7boCG.js";import{C as S,I as N,B as T,S as L,a as ae,M as H}from"./tooltip-bGaQcz33.js";import{T as G}from"./Tooltip-B1BiLwem.js";const q={state:{count:0,history:[]},redoStack:[]};function se(){const[a,o]=g.useState(()=>q.state),[n,v]=g.useState(q.redoStack),[i,h]=g.useState(1),I=()=>{o(m=>({...m,count:m.count+i,history:[m.count+i,...m.history]}))},D=()=>{a.count<1||o(m=>({...m,count:m.count-i,history:[m.count-i,...m.history]}))},C=()=>{if(a.history<2)return;const[m,...l]=b;o(r=>({...r,count:l[0],history:l})),v([m,...n])},j=()=>{if(n.length===0)return;const[m,...l]=n;o(r=>({...r,count:m,history:[m,...r.history]})),v(l)},F=()=>{o(q.state),v(q.redoStack)},k=m=>h(+m.target.value),{count:f,history:b}=a;return e.jsxs("div",{className:"advanced-counter",children:[e.jsx("div",{className:"counter-value",children:f}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{disabled:f<1,onClick:D,children:"-"}),e.jsx("button",{onClick:I,children:"+"})]}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{disabled:b<2,onClick:C,children:"Undo"}),e.jsx("button",{disabled:n.length===0,onClick:j,children:"Redo"}),e.jsx("button",{disabled:b.length===0,onClick:F,children:"Reset"})]}),e.jsxs("div",{className:"step-control",children:[e.jsx("label",{children:"Step: "}),e.jsx("input",{min:1,type:"number",value:i,onChange:k})]}),b.length>0&&e.jsxs("div",{className:"history",children:[e.jsx("h3",{children:"History"}),e.jsx("ul",{className:"history-list",children:b.map((m,l)=>e.jsx("li",{className:`${l===0?"current":""}`,children:m},l+1))})]})]})}function oe(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:1,title:"Counter Nâng Cao"}),e.jsx(d.Description,{children:`
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

`}),e.jsx(d.Demo,{children:e.jsx(se,{})}),e.jsx(d.Code,{children:`
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

`})]})}const J={high:3,medium:2,low:1},ne=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],re=[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"completed",label:"Completed"}],ie=[{value:"date",label:"Date"},{value:"priority",label:"Priority"},{value:"alphabetical",label:"Alphabetical"}];function le(){const[a,o]=g.useState(()=>{const s=localStorage.getItem("todos");return s?JSON.parse(s):[]}),[n,v]=g.useState(null),[i,h]=g.useState(""),[I,D]=g.useState("all"),[C,j]=g.useState("date");g.useEffect(()=>{localStorage.setItem("todos",JSON.stringify(a))},[a]);const F=s=>h(s.target.value),k=s=>{const c=a.find(y=>y.id===s);c&&(v(s),h(c.text))},f=()=>{v(null),h("")},b=()=>{i.trim()&&(o(s=>s.map(c=>c.id===n?{...c,text:i.trim()}:c)),v(null),h(""))},m=()=>{if(!i.trim())return;const s=new Date,c={id:s.getTime(),text:i.trim(),completed:!1,priority:"low",createdAt:s.toISOString()};o(y=>[c,...y]),h("")},l=s=>{o(c=>c.filter(y=>y.id!==s))},r=s=>{o(c=>c.map(y=>y.id===s?{...y,completed:!y.completed}:y))},p=(s,c)=>{o(y=>y.map(t=>t.id===c?{...t,priority:s}:t))},w=()=>{const s=a.every(c=>c.completed);o(c=>c.map(y=>({...y,completed:!s})))},A=()=>{o(s=>s.filter(c=>!c.completed))},E=a.filter(s=>I==="active"?!s.completed:I==="completed"?s.completed:!0).sort((s,c)=>C==="date"?new Date(c.createdAt)-new Date(s.createdAt):C==="priority"?J[c.priority]-J[s.priority]:C==="alphabetical"?s.text.localeCompare(c.text):0),R=E.length,z=E.filter(s=>s.completed).length,P=R-z;return e.jsx("div",{className:"todo-app-wrapper",children:e.jsx("div",{className:"todo-app-container",children:e.jsxs(S,{className:"todo-app-card",children:[e.jsxs(S.Header,{children:[e.jsx(S.Title,{children:"Todo App"}),e.jsx(S.Subtitle,{children:"Manage your tasks with style"})]}),e.jsxs(S.Content,{children:[e.jsxs("div",{className:"todo-app-input-area",children:[e.jsx(N,{placeholder:"What needs to be done?",value:i,onChange:F,onKeyDown:s=>{s.key==="Enter"&&(n?b():m()),s.key==="Escape"&&f()},autoFocus:!0}),e.jsx("div",{className:"todo-app-input-actions",children:n?e.jsxs(e.Fragment,{children:[e.jsx(T,{variant:"secondary",size:"sm",onClick:f,children:"Cancel"}),e.jsx(T,{variant:"primary",size:"sm",onClick:b,children:"Update Task"})]}):e.jsx(T,{variant:"primary",size:"md",onClick:m,disabled:!i.trim(),icon:"+ ",children:"Add Task"})})]}),e.jsxs("div",{className:"todo-app-filters",children:[e.jsx(L,{label:"Filter",value:I,onChange:s=>D(s.target.value),options:re,className:"todo-app-filter-select"}),e.jsx(L,{label:"Sort by",value:C,onChange:s=>j(s.target.value),options:ie,className:"todo-app-filter-select"})]}),e.jsx("div",{className:"todo-app-list",children:E.length>0?e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:E.map(({id:s,text:c,completed:y,priority:t})=>e.jsx(S,{className:`todo-app-item todo-app-item--${t}`,children:e.jsx(S.Content,{children:e.jsxs("div",{className:"todo-app-item-content",children:[e.jsx(ae,{checked:y,onChange:()=>r(s)}),e.jsx("span",{className:`todo-app-item-text ${y?"todo-app-item-text--completed":""}`,children:c}),e.jsx(L,{value:t,onChange:u=>p(u.target.value,s),options:ne,disabled:y,style:{width:"120px"}}),e.jsxs("div",{className:"todo-app-item-actions",children:[e.jsx(G,{content:"Edit task",children:e.jsx(T,{variant:"ghost",size:"sm",icon:"🖉",onClick:()=>k(s),disabled:y||n===s})}),e.jsx(G,{content:"Delete task",children:e.jsx(T,{variant:"danger",size:"sm",icon:"❌",onClick:()=>l(s)})})]})]})})},s))}):e.jsx("p",{className:"todo-app-list-empty",children:"No tasks to do"})}),e.jsxs("div",{className:"todo-app-actions",children:[e.jsx(T,{variant:"secondary",size:"sm",onClick:w,children:"Toggle All"}),e.jsx(T,{variant:"danger",size:"sm",onClick:A,children:"Clear Completed"})]}),e.jsx(S,{className:"todo-app-stats",children:e.jsx(S.Content,{children:e.jsxs("div",{className:"todo-app-stats-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#00D9FF"},children:R}),e.jsx("p",{className:"todo-app-stat-label",children:"Total"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#22c55e"},children:P}),e.jsx("p",{className:"todo-app-stat-label",children:"Active"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#f59e0b"},children:z}),e.jsx("p",{className:"todo-app-stat-label",children:"Completed"})]})]})})})]})]})})})}function de(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:2,title:"Todo App Hoàn Chỉnh"}),e.jsx(d.Description,{children:`
function TodoApp() {
  // TODO:
  // 1. Todos array state với: id, text, completed, priority, createdAt
  // 2. Input state
  // 3. Filter state (all/active/completed)
  // 4. Sort state (date/priority/alphabetical)
  // 5. Chức năng:
  //    - Thêm todo
  //    - Xóa todo
  //    - Toggle completed
  //    - Edit todo (inline editing)
  //    - Set priority (low/medium/high)
  //    - Filter và sort
  //    - Clear completed
  //    - Toggle all
  // 6. Save vào localStorage
  // 7. Stats: total, active, completed

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),e.jsx(d.Demo,{children:e.jsx(le,{})}),e.jsx(d.Code,{children:`
import { Button, Card, Checkbox, Input, Select, Tooltip } from "@ui";
import { useEffect, useState } from "react";

const priorityOrder = { high: 3, medium: 2, low: 1 };

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const sortOptions = [
  { value: "date", label: "Date" },
  { value: "priority", label: "Priority" },
  { value: "alphabetical", label: "Alphabetical" },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChangeTodo = (e) => setTodo(e.target.value);

  const handleSelectEdit = (id) => {
    const item = todos.find((t) => t.id === id);
    if (item) {
      setEditingId(id);
      setTodo(item.text);
    }
  };

  const handCancel = () => {
    setEditingId(null);
    setTodo("");
  };

  const handleUpdate = () => {
    if (!todo.trim()) return;
    setTodos((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, text: todo.trim() } : item
      )
    );
    setEditingId(null);
    setTodo("");
  };

  const handleAdd = () => {
    if (!todo.trim()) return;
    const now = new Date();
    const newTodo = {
      id: now.getTime(),
      text: todo.trim(),
      completed: false,
      priority: "low",
      createdAt: now.toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleChangePriority = (value, id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, priority: value } : t))
    );
  };

  const toggleAll = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos((prev) => prev.map((t) => ({ ...t, completed: !allCompleted })));
  };

  const removeCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const todosFiltered = todos
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "completed") return t.completed;
      return true;
    })
    .sort((a, b) => {
      if (sort === "date") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sort === "priority")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if (sort === "alphabetical") return a.text.localeCompare(b.text);
      return 0;
    });

  const total = todosFiltered.length;
  const completed = todosFiltered.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="todo-app-wrapper">
      <div className="todo-app-container">
        <Card className="todo-app-card">
          <Card.Header>
            <Card.Title>Todo App</Card.Title>
            <Card.Subtitle>Manage your tasks with style</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            {/* Input Area */}
            <div className="todo-app-input-area">
              <Input
                placeholder="What needs to be done?"
                value={todo}
                onChange={handleChangeTodo}
                onKeyDown={(e) => {
                  if (e.key === "Enter")
                    editingId ? handleUpdate() : handleAdd();
                  if (e.key === "Escape") handCancel();
                }}
                autoFocus
              />

              <div className="todo-app-input-actions">
                {editingId ? (
                  <>
                    <Button variant="secondary" size="sm" onClick={handCancel}>
                      Cancel
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleUpdate}>
                      Update Task
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleAdd}
                    disabled={!todo.trim()}
                    icon="+ "
                  >
                    Add Task
                  </Button>
                )}
              </div>
            </div>

            {/* Filters & Sort */}
            <div className="todo-app-filters">
              <Select
                label="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                options={filterOptions}
                className="todo-app-filter-select"
              />
              <Select
                label="Sort by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                options={sortOptions}
                className="todo-app-filter-select"
              />
            </div>

            {/* Todo List */}
            <div className="todo-app-list">
              {todosFiltered.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {todosFiltered.map(({ id, text, completed, priority }) => (
                    <Card
                      key={id}
                      className={\`todo-app-item todo-app-item--\${priority}\`}
                    >
                      <Card.Content>
                        <div className="todo-app-item-content">
                          <Checkbox
                            checked={completed}
                            onChange={() => handleComplete(id)}
                          />

                          <span
                            className={\`todo-app-item-text \${
                              completed ? "todo-app-item-text--completed" : ""
                            }\`}
                          >
                            {text}
                          </span>

                          <Select
                            value={priority}
                            onChange={(e) =>
                              handleChangePriority(e.target.value, id)
                            }
                            options={priorityOptions}
                            disabled={completed}
                            style={{ width: "120px" }}
                          />

                          <div className="todo-app-item-actions">
                            <Tooltip content="Edit task">
                              <Button
                                variant="ghost"
                                size="sm"
                                icon="🖉"
                                onClick={() => handleSelectEdit(id)}
                                disabled={completed || editingId === id}
                              />
                            </Tooltip>

                            <Tooltip content="Delete task">
                              <Button
                                variant="danger"
                                size="sm"
                                icon="❌"
                                onClick={() => handleDelete(id)}
                              />
                            </Tooltip>
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="todo-app-list-empty">No tasks to do</p>
              )}
            </div>

            {/* Actions */}
            <div className="todo-app-actions">
              <Button variant="secondary" size="sm" onClick={toggleAll}>
                Toggle All
              </Button>
              <Button variant="danger" size="sm" onClick={removeCompleted}>
                Clear Completed
              </Button>
            </div>

            {/* Stats */}
            <Card className="todo-app-stats">
              <Card.Content>
                <div className="todo-app-stats-grid">
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#00D9FF" }}
                    >
                      {total}
                    </div>
                    <p className="todo-app-stat-label">Total</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#22c55e" }}
                    >
                      {active}
                    </div>
                    <p className="todo-app-stat-label">Active</p>
                  </div>
                  <div>
                    <div
                      className="todo-app-stat-number"
                      style={{ color: "#f59e0b" }}
                    >
                      {completed}
                    </div>
                    <p className="todo-app-stat-label">Completed</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}


`})]})}const Q=(a,o)=>o.trim()?a==="fullname"&&o.trim().length<6?"Tên quá ngắn":a==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?"Email không hợp lệ":a==="phone"&&o.trim().length<10?"Số điện thoại không hợp lệ":a==="card_number"&&o.trim().length<12?"Số thẻ không hợp lệ":a==="cvv"&&o.trim().length<3?"CVV không hợp lệ":null:"Trường này là bắt buộc",Y={fullname:"",street:"",card_number:"",expiry_date:"",cvv:"",email:"",phone:"",city:"",postal_code:""};function ce(){const[a,o]=g.useState(1),[n,v]=g.useState(Y),[i,h]=g.useState({}),[I,D]=g.useState(!1),C=l=>{const r={1:["fullname","email","phone"],2:["street","city","postal_code"],3:["card_number","expiry_date","cvv"]}[l],p={};let w=!0;return r.forEach(A=>{const E=Q(A,n[A]);p[A]=E,E&&(w=!1)}),h(A=>({...A,...p})),w},j=()=>{C(a)&&o(l=>Math.min(l+1,3))},F=()=>{o(l=>Math.max(l-1,1))},k=l=>{const{name:r,value:p}=l.target;v(w=>({...w,[r]:p})),i[r]&&h(w=>({...w,[r]:null}))},f=l=>{const{name:r,value:p}=l.target,w=Q(r,p);h(A=>({...A,[r]:w}))},b=()=>{C(3)&&D(!0)},m=a/3*100;return e.jsxs("div",{className:"multistep-form",children:[e.jsx("div",{className:"multistep-form__container",children:e.jsxs(S,{className:"multistep-form__card",children:[e.jsxs("div",{className:"multistep-form__header",children:[e.jsx("h1",{className:"multistep-form__title",children:"Multi-Step Form"}),e.jsx("p",{className:"multistep-form__subtitle",children:"Điền thông tin từng bước một cách dễ dàng"})]}),e.jsx("div",{className:"multistep-form__progress",children:e.jsx("div",{className:"multistep-form__progress-fill",style:{width:`${m}%`}})}),e.jsxs(S.Content,{className:"multistep-form__content",children:[e.jsxs("div",{className:`multistep-form__step ${a===1?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Personal Information"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx("div",{children:e.jsx(N,{label:"Full Name",name:"fullname",value:n.fullname,onChange:k,onBlur:f,placeholder:"John Doe",error:i.fullname})}),e.jsx("div",{children:e.jsx(N,{label:"Email",name:"email",type:"email",value:n.email,onChange:k,onBlur:f,placeholder:"example@email.com",error:i.email})}),e.jsx("div",{children:e.jsx(N,{label:"Phone",name:"phone",type:"tel",value:n.phone,onChange:k,onBlur:f,placeholder:"+84 123 456 789",error:i.phone})})]})]}),e.jsxs("div",{className:`multistep-form__step ${a===2?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Address Information"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx(N,{label:"Street",name:"street",value:n.street,onChange:k,onBlur:f,placeholder:"123 Main St",error:i.street}),e.jsx(N,{label:"City",name:"city",value:n.city,onChange:k,onBlur:f,placeholder:"Hà Nội",error:i.city}),e.jsx(N,{label:"Postal Code",name:"postal_code",value:n.postal_code,onChange:k,onBlur:f,placeholder:"100000",error:i.postal_code})]})]}),e.jsxs("div",{className:`multistep-form__step ${a===3?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Payment Details"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx(N,{label:"Card Number",name:"card_number",value:n.card_number,onChange:k,onBlur:f,placeholder:"1234 5678 9012 3456",error:i.card_number}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsx(N,{label:"Expiry Date",name:"expiry_date",value:n.expiry_date,onChange:k,onBlur:f,placeholder:"MM/YY",error:i.expiry_date}),e.jsx(N,{label:"CVV",name:"cvv",type:"password",value:n.cvv,onChange:k,onBlur:f,placeholder:"123",error:i.cvv})]})]}),e.jsxs("div",{className:"multistep-form__review",style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{color:"#00D9FF",marginBottom:"1rem"},children:"Review Your Information"}),Object.entries(n).map(([l,r])=>e.jsxs("div",{className:"multistep-form__review-item",children:[e.jsx("span",{className:"multistep-form__review-label",children:l.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase())}),e.jsx("span",{className:"multistep-form__review-value",children:r||"-"})]},l))]})]}),e.jsxs("div",{className:"multistep-form__actions",children:[e.jsx(T,{variant:"secondary",size:"md",onClick:F,disabled:a===1,children:"Previous"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a<3&&e.jsx(T,{variant:"primary",size:"md",onClick:j,children:"Next"}),a===3&&e.jsx(T,{variant:"primary",size:"lg",onClick:b,icon:"Check",children:"Submit Payment"})]})]})]})]})}),e.jsxs(H,{isOpen:I,onClose:()=>D(!1),children:[e.jsx(H.Header,{onClose:()=>D(!1),children:"Payment Successful!"}),e.jsxs(H.Body,{children:[e.jsx("p",{children:"Cảm ơn bạn đã hoàn thành form!"}),e.jsx("div",{className:"multistep-form__review",style:{marginTop:"1rem"},children:Object.entries(n).map(([l,r])=>e.jsxs("div",{className:"multistep-form__review-item",children:[e.jsx("span",{className:"multistep-form__review-label",children:l.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase())}),e.jsx("span",{className:"multistep-form__review-value",children:r})]},l))})]}),e.jsx(H.Footer,{children:e.jsx(T,{variant:"primary",onClick:()=>{D(!1),v(Y),h({}),o(1)},children:"Done"})})]})]})}function me(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:3,title:"Multi-Step Form"}),e.jsx(d.Description,{children:`
function MultiStepForm() {
  // TODO:
  // 1. Current step state (1, 2, 3)
  // 2. Form data state cho mỗi step:
  //    Step 1: Personal info (name, email, phone)
  //    Step 2: Address (street, city, postal code)
  //    Step 3: Payment (card number, expiry, cvv)
  // 3. Errors state cho mỗi step
  // 4. Validation cho mỗi step
  // 5. Nút: Next, Previous, Submit
  // 6. Progress bar
  // 7. Review tất cả data ở step cuối
  // 8. Không cho next nếu step hiện tại invalid

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),e.jsx(d.Demo,{children:e.jsx(ce,{})}),e.jsx(d.Code,{children:`
import { Button, Card, Input, Modal } from "@ui";
import { useState } from "react";

const validateField = (fieldName, value) => {
  if (!value.trim()) return "Trường này là bắt buộc";
  if (fieldName === "fullname" && value.trim().length < 6)
    return "Tên quá ngắn";
  if (fieldName === "email" && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value))
    return "Email không hợp lệ";
  if (fieldName === "phone" && value.trim().length < 10)
    return "Số điện thoại không hợp lệ";
  if (fieldName === "card_number" && value.trim().length < 12)
    return "Số thẻ không hợp lệ";
  if (fieldName === "cvv" && value.trim().length < 3) return "CVV không hợp lệ";
  return null;
};

const initialFormData = {
  fullname: "",
  street: "",
  card_number: "",
  expiry_date: "",
  cvv: "",
  email: "",
  phone: "",
  city: "",
  postal_code: "",
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateStep = (step) => {
    const fields = {
      1: ["fullname", "email", "phone"],
      2: ["street", "city", "postal_code"],
      3: ["card_number", "expiry_date", "cvv"],
    }[step];

    const stepErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      stepErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((s) => Math.min(s + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      setShowModal(true);
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="multistep-form">
      <div className="multistep-form__container">
        <Card className="multistep-form__card">
          <div className="multistep-form__header">
            <h1 className="multistep-form__title">Multi-Step Form</h1>
            <p className="multistep-form__subtitle">
              Điền thông tin từng bước một cách dễ dàng
            </p>
          </div>

          <div className="multistep-form__progress">
            <div
              className="multistep-form__progress-fill"
              style={{ width: \`\${progress}%\` }}
            />
          </div>

          <Card.Content className="multistep-form__content">
            {/* Step 1 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 1 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Personal Information
              </h2>
              <div className="multistep-form__grid">
                <div>
                  <Input
                    label="Full Name"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    error={errors.fullname}
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="example@email.com"
                    error={errors.email}
                  />
                </div>
                <div>
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+84 123 456 789"
                    error={errors.phone}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 2 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">
                Address Information
              </h2>
              <div className="multistep-form__grid">
                <Input
                  label="Street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123 Main St"
                  error={errors.street}
                />
                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hà Nội"
                  error={errors.city}
                />
                <Input
                  label="Postal Code"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="100000"
                  error={errors.postal_code}
                />
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={\`multistep-form__step \${
                currentStep === 3 ? "multistep-form__step--active" : ""
              }\`}
            >
              <h2 className="multistep-form__step-title">Payment Details</h2>
              <div className="multistep-form__grid">
                <Input
                  label="Card Number"
                  name="card_number"
                  value={formData.card_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="1234 5678 9012 3456"
                  error={errors.card_number}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <Input
                    label="Expiry Date"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="MM/YY"
                    error={errors.expiry_date}
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    type="password"
                    value={formData.cvv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="123"
                    error={errors.cvv}
                  />
                </div>
              </div>

              <div
                className="multistep-form__review"
                style={{ marginTop: "2rem" }}
              >
                <h3 style={{ color: "#00D9FF", marginBottom: "1rem" }}>
                  Review Your Information
                </h3>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="multistep-form__review-item">
                    <span className="multistep-form__review-label">
                      {key
                        .replace(/_/g, " ")
                        .replace(/\b\\w/g, (c) => c.toUpperCase())}
                    </span>
                    <span className="multistep-form__review-value">
                      {value || "-"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="multistep-form__actions">
              <Button
                variant="secondary"
                size="md"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              <div style={{ display: "flex", gap: "1rem" }}>
                {currentStep < 3 && (
                  <Button variant="primary" size="md" onClick={handleNext}>
                    Next
                  </Button>
                )}
                {currentStep === 3 && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    icon="Check"
                  >
                    Submit Payment
                  </Button>
                )}
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header onClose={() => setShowModal(false)}>
          Payment Successful!
        </Modal.Header>
        <Modal.Body>
          <p>Cảm ơn bạn đã hoàn thành form!</p>
          <div className="multistep-form__review" style={{ marginTop: "1rem" }}>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="multistep-form__review-item">
                <span className="multistep-form__review-label">
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\\w/g, (c) => c.toUpperCase())}
                </span>
                <span className="multistep-form__review-value">{value}</span>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              setFormData(initialFormData);
              setErrors({});
              setCurrentStep(1);
            }}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

`})]})}const K=30;function pe(){const[a,o]=g.useState(0),[n,v]=g.useState(!1),[i,h]=g.useState(K),[I,D]=g.useState([]),C=O.length,j=(a+1)/C*100,F=I[a];g.useEffect(()=>{if(i<=0||n){v(!0);return}const r=setInterval(()=>h(p=>p-1),1e3);return()=>clearInterval(r)},[i,n]);const k=r=>{if(n)return;const p=[...I];p[a]=r,D(p)},f=()=>{a<C-1?o(r=>r+1):v(!0)},b=()=>{a>0&&o(r=>r-1)},m=()=>{o(0),v(!1),D([]),h(K)},l=I.filter((r,p)=>r===O[p].correctAnswer).length;return e.jsxs("div",{className:"quiz-container",children:[e.jsx("h1",{className:"quiz-title",children:"Quiz App"}),e.jsxs(S,{className:"quiz-progress-wrapper",children:[e.jsxs("div",{className:"quiz-progress-header",children:[e.jsxs("span",{children:["Câu ",a+1," / ",C]}),e.jsxs("span",{children:[Math.round(j),"%"]})]}),e.jsx("div",{className:"quiz-progress-bar",children:e.jsx("div",{className:"quiz-progress-fill",style:{width:`${j}%`}})})]}),!n&&e.jsxs("div",{className:"quiz-timer",children:["⏱: ",i,"s"]}),e.jsxs(S,{className:"quiz-question-card",children:[e.jsxs("div",{className:"quiz-question-header",children:[e.jsxs("div",{className:"quiz-question-number",children:["Câu hỏi ",a+1]}),e.jsx("h2",{className:"quiz-question-text",children:O[a].question})]}),e.jsx("ul",{className:"quiz-options",children:O[a].options.map((r,p)=>{const w=F===p,A=p===O[a].correctAnswer;return e.jsx("li",{onClick:()=>k(p),className:`
                  quiz-option
                  ${w?"selected":""}
                  ${n&&A?"correct":""}
                  ${n&&w&&!A?"incorrect":""}
                `.trim().replace(/\s+/g," "),children:r},p)})})]}),e.jsxs("div",{className:"quiz-controls",children:[e.jsx(T,{variant:"secondary",size:"lg",onClick:b,disabled:a===0,children:"Trước"}),e.jsx(T,{variant:"primary",size:"lg",onClick:f,disabled:!n&&F===void 0,children:a===C-1?"Nộp":"Tiếp"})]}),n&&e.jsxs(S,{className:"quiz-result",children:[e.jsx("h3",{children:"Kết quả của bạn"}),e.jsxs("div",{className:"quiz-result-score",children:[l," / ",C]}),e.jsx("p",{style:{color:"#94a3b8",margin:"16px 0"},children:l===C?"Hoàn hảo!":l>=C*.7?"Rất tốt!":"Cố lên nhé!"}),e.jsx(T,{variant:"primary",size:"lg",onClick:m,children:"Làm lại"})]})]})}const O=[{id:1,question:"React được tạo bởi?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"React sử dụng ngôn ngữ lập trình nào?",options:["Python","C++","JavaScript","Dart"],correctAnswer:2},{id:3,question:"Hook nào dùng để quản lý state trong React?",options:["useState","useEffect","useContext","useReducer"],correctAnswer:0},{id:4,question:"JSX là gì?",options:["Một framework CSS","Một cú pháp mở rộng cho JavaScript","Một ngôn ngữ mới","Một API của Node.js"],correctAnswer:1}];function ue(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:4,title:"Quiz App"}),e.jsx(d.Description,{children:`
const quizData = [
  {
    id: 1,
    question: 'React được tạo bởi?',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 1
  },
  // More questions...
];

function QuizApp() {
  // TODO:
  // 1. Current question index state
  // 2. Selected answers state (array)
  // 3. Show result state (boolean)
  // 4. Time remaining state (optional - countdown timer)
  // 5. Chức năng:
  //    - Select answer
  //    - Next question
  //    - Previous question
  //    - Submit quiz
  //    - Show score
  //    - Restart quiz
  // 6. Highlight correct/incorrect answers khi submit
  // 7. Progress indicator
  // 8. Prevent changing answer after submit

  return (
    <div>
      {/* Your code */}
    </div>
  );
}

`}),e.jsx(d.Demo,{children:e.jsx(pe,{})}),e.jsx(d.Code,{children:`
import { Button, Card } from "@ui";
import { useEffect, useState } from "react";

const initialTime = 30;

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [answerSelected, setAnswerSelected] = useState([]);

  const totalQuest = quizData.length;
  const progress = ((currentIndex + 1) / totalQuest) * 100;
  const currentAnswer = answerSelected[currentIndex];

  // Timer
  useEffect(() => {
    if (timeRemaining <= 0 || isShowResult) {
      setIsShowResult(true);
      return;
    }
    const timer = setInterval(() => setTimeRemaining((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, isShowResult]);

  const handleSelectAnswer = (idx) => {
    if (isShowResult) return;
    const newAnswers = [...answerSelected];
    newAnswers[currentIndex] = idx;
    setAnswerSelected(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < totalQuest - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsShowResult(false);
    setAnswerSelected([]);
    setTimeRemaining(initialTime);
  };

  const totalCorrect = answerSelected.filter(
    (ans, i) => ans === quizData[i].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz App</h1>

      {/* Thanh progress tự tạo */}
      <Card className="quiz-progress-wrapper">
        <div className="quiz-progress-header">
          <span>
            Câu {currentIndex + 1} / {totalQuest}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: \`\${progress}%\` }}
          />
        </div>
      </Card>

      {/* Timer */}
      {!isShowResult && <div className="quiz-timer">⏱: {timeRemaining}s</div>}

      {/* Câu hỏi */}
      <Card className="quiz-question-card">
        <div className="quiz-question-header">
          <div className="quiz-question-number">Câu hỏi {currentIndex + 1}</div>
          <h2 className="quiz-question-text">
            {quizData[currentIndex].question}
          </h2>
        </div>

        <ul className="quiz-options">
          {quizData[currentIndex].options.map((option, idx) => {
            const isSelected = currentAnswer === idx;
            const isCorrect = idx === quizData[currentIndex].correctAnswer;

            return (
              <li
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={\`
                  quiz-option
                  \${isSelected ? "selected" : ""}
                  \${isShowResult && isCorrect ? "correct" : ""}
                  \${isShowResult && isSelected && !isCorrect ? "incorrect" : ""}
                \`
                  .trim()
                  .replace(/\\s+/g, " ")}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </Card>

      {/* Nút điều hướng */}
      <div className="quiz-controls">
        <Button
          variant="secondary"
          size="lg"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Trước
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={handleNext}
          disabled={!isShowResult && currentAnswer === undefined}
        >
          {currentIndex === totalQuest - 1 ? "Nộp" : "Tiếp"}
        </Button>
      </div>

      {/* Kết quả */}
      {isShowResult && (
        <Card className="quiz-result">
          <h3>Kết quả của bạn</h3>
          <div className="quiz-result-score">
            {totalCorrect} / {totalQuest}
          </div>
          <p style={{ color: "#94a3b8", margin: "16px 0" }}>
            {totalCorrect === totalQuest
              ? "Hoàn hảo!"
              : totalCorrect >= totalQuest * 0.7
              ? "Rất tốt!"
              : "Cố lên nhé!"}
          </p>
          <Button variant="primary" size="lg" onClick={handleRestart}>
            Làm lại
          </Button>
        </Card>
      )}
    </div>
  );
}

`})]})}const M=["Ăn uống","Di chuyển","Giải trí","Mua sắm","Khác"],W={description:"",amount:"",category:"Ăn uống",date:new Date().toISOString().split("T")[0]},he=[{id:1,description:"Cà phê sáng",amount:45e3,category:"Ăn uống",date:"2025-11-01"},{id:2,description:"Grab đi làm",amount:6e4,category:"Di chuyển",date:"2025-11-02"},{id:3,description:"Xem phim cuối tuần",amount:12e4,category:"Giải trí",date:"2025-10-30"},{id:4,description:"Mua áo sơ mi",amount:35e4,category:"Mua sắm",date:"2025-11-03"},{id:5,description:"Ăn tối với bạn",amount:2e5,category:"Ăn uống",date:"2025-11-04"}],ge=a=>{const o=new Date(a);return`${String(o.getMonth()+1).padStart(2,"0")}/${String(o.getDate()).padStart(2,"0")}/${o.getFullYear()}`},X=a=>Number(a).toLocaleString("vi-VN",{style:"currency",currency:"VND"}),ve=a=>a>=1e9?`${(a/1e9).toFixed(1)} Tỷ`:a>=1e6?`${(a/1e6).toFixed(1)} Triệu`:a>=1e3?`${(a/1e3).toFixed(1)}K`:a;function fe(){const a=g.useRef(null),[o,n]=g.useState(()=>{const t=localStorage.getItem("expenses");return t?JSON.parse(t):he}),[v,i]=g.useState(W),[h,I]=g.useState({category:"all",searchTerm:"",dateFrom:"",dateTo:"",minAmount:"",maxAmount:""}),[D,C]=g.useState({field:"date",order:"desc"}),[j,F]=g.useState(null),k=t=>localStorage.setItem("expenses",JSON.stringify(t)),f=t=>i({...v,[t.target.name]:t.target.value}),b=t=>I({...h,[t.target.name]:t.target.value}),m=(t,u)=>[...t,{...u,id:Date.now()}],l=(t,u)=>t.map(x=>x.id===u.id?{...x,...u}:x),r=t=>{n(u=>{const x=t.id?l(u,t):m(u,t);return k(x),x}),p()},p=()=>{F(null),i(W)},w=t=>{F(t.id),i(t),a.current?.scrollIntoView({behavior:"smooth"})},A=t=>{window.confirm("Bạn có chắc muốn xóa chi tiêu này?")&&n(u=>{const x=u.filter(_=>_.id!==t);return k(x),x})},E=t=>{const{category:u,dateFrom:x,dateTo:_,minAmount:B,maxAmount:U,searchTerm:ee}=h,V=new Date(t.date),$=ee.toLowerCase();return!(u!=="all"&&t.category!==u||x&&new Date(x)>V||_&&new Date(_)<V||B&&t.amount<B||U&&t.amount>U||$&&!t.description.toLowerCase().includes($))},R=t=>{let u="asc";t===D.field&&D.order==="asc"&&(u="desc"),C({field:t,order:u})},z=(t,u)=>{const{field:x,order:_}=D;let B=0;return x==="date"&&(B=new Date(t.date)-new Date(u.date)),x==="amount"&&(B=t.amount-u.amount),x==="category"&&(B=M.indexOf(t.category)-M.indexOf(u.category)),x==="description"&&(B=t.description.localeCompare(u.description)),_==="asc"?B:-B},P=o.filter(E).sort(z),s=P.reduce((t,u)=>t+Number(u.amount),0),c=M.map(t=>{const u=P.filter(x=>x.category===t).reduce((x,_)=>x+Number(_.amount),0);return{category:t,amount:u}}),y=v.description&&v.amount;return e.jsxs("div",{ref:a,className:"expense-tracker",children:[e.jsx("h1",{children:"Quản Lý Chi Tiêu"}),e.jsxs(S,{className:"expense-form",children:[e.jsx(S.Header,{children:e.jsx(S.Title,{children:j?"Chỉnh sửa chi tiêu":"Thêm chi tiêu mới"})}),e.jsx(S.Content,{children:e.jsxs("form",{children:[e.jsx(N,{label:"Mô tả",name:"description",value:v.description,onChange:f,placeholder:"Nhập mô tả"}),e.jsx(N,{label:"Số tiền",type:"number",name:"amount",value:v.amount,onChange:f}),e.jsx(L,{label:"Danh mục",name:"category",value:v.category,onChange:f,options:M.map(t=>({value:t,label:t}))}),e.jsx(N,{label:"Ngày",type:"date",name:"date",value:v.date,onChange:f}),e.jsxs("div",{className:"expense-input",children:[j&&e.jsx(T,{variant:"ghost",onClick:p,children:"Hủy"}),e.jsx(T,{variant:"primary",disabled:!y,onClick:()=>r({...v,id:j}),children:j?"Cập nhật":"Thêm"})]})]})})]}),!j&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"filters",children:[e.jsx(N,{placeholder:"Tìm kiếm theo mô tả",name:"searchTerm",value:h.searchTerm,onChange:b}),e.jsx(L,{value:h.category,name:"category",onChange:b,options:[{value:"all",label:"Tất cả"},...M.map(t=>({value:t,label:t}))]})]}),e.jsxs("div",{className:"filters",children:[e.jsx(N,{type:"date",name:"dateFrom",value:h.dateFrom,onChange:b,label:"Từ ngày"}),e.jsx(N,{type:"date",name:"dateTo",value:h.dateTo,onChange:b,label:"Đến ngày"})]}),e.jsxs("div",{className:"filters",children:[e.jsx(N,{type:"number",name:"minAmount",placeholder:"Tối thiểu",value:h.minAmount,onChange:b}),e.jsx(N,{type:"number",name:"maxAmount",placeholder:"Tối đa",value:h.maxAmount,onChange:b})]}),e.jsxs(S,{className:"statistics",children:[e.jsx(S.Header,{children:e.jsx(S.Title,{children:"Thống kê"})}),e.jsxs(S.Content,{children:[e.jsxs("p",{children:["Tổng chi tiêu: ",X(s)]}),e.jsx("div",{className:"category-bars",children:c.map(t=>t.amount>0?e.jsxs("div",{className:"bar",children:[e.jsx("span",{className:"bar-label",children:t.category}),e.jsx("div",{className:"bar-fill",style:{"--width":`${t.amount/s*100}%`},children:ve(t.amount)})]},t.category):null)})]})]})]}),e.jsxs("div",{className:"expense-list",children:[e.jsx("h2",{children:"Danh sách chi tiêu"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>R("description"),children:"Mô tả"}),e.jsx("th",{onClick:()=>R("amount"),children:"Số tiền"}),e.jsx("th",{onClick:()=>R("category"),children:"Danh mục"}),e.jsx("th",{onClick:()=>R("date"),children:"Ngày (mm/dd/yyyy)"}),e.jsx("th",{children:"Hành động"})]})}),e.jsx("tbody",{children:P.length>0?P.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.description}),e.jsx("td",{children:X(t.amount)}),e.jsx("td",{children:t.category}),e.jsx("td",{children:ge(t.date)}),e.jsxs("td",{children:[e.jsx(T,{variant:"secondary",size:"sm",onClick:()=>w(t),children:"Sửa"}),e.jsx(T,{variant:"danger",size:"sm",onClick:()=>A(t.id),children:"Xóa"})]})]},t.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:5,children:"Không có chi tiêu nào"})})})]})]})]})}function Se(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:5,title:"Expense Tracker (Challenge)"}),e.jsx(d.Description,{children:`

`}),e.jsx(d.Demo,{children:e.jsx(fe,{})}),e.jsx(d.Code,{children:`
import { useRef, useState } from "react";
import { Button, Input, Select, Card } from "@ui";

const categories = ["Ăn uống", "Di chuyển", "Giải trí", "Mua sắm", "Khác"];
const initialForm = {
  description: "",
  amount: "",
  category: "Ăn uống",
  date: new Date().toISOString().split("T")[0],
};
const initialData = [
  {
    id: 1,
    description: "Cà phê sáng",
    amount: 45000,
    category: "Ăn uống",
    date: "2025-11-01",
  },
  {
    id: 2,
    description: "Grab đi làm",
    amount: 60000,
    category: "Di chuyển",
    date: "2025-11-02",
  },
  {
    id: 3,
    description: "Xem phim cuối tuần",
    amount: 120000,
    category: "Giải trí",
    date: "2025-10-30",
  },
  {
    id: 4,
    description: "Mua áo sơ mi",
    amount: 350000,
    category: "Mua sắm",
    date: "2025-11-03",
  },
  {
    id: 5,
    description: "Ăn tối với bạn",
    amount: 200000,
    category: "Ăn uống",
    date: "2025-11-04",
  },
];

const formatDate = (d) => {
  const date = new Date(d);
  return \`\${String(date.getMonth() + 1).padStart(2, "0")}/\${String(
    date.getDate()
  ).padStart(2, "0")}/\${date.getFullYear()}\`;
};
const formatCurrency = (n) =>
  Number(n).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
const formatMoneyVN = (amount) => {
  if (amount >= 1_000_000_000)
    return \`\${(amount / 1_000_000_000).toFixed(1)} Tỷ\`;
  if (amount >= 1_000_000) return \`\${(amount / 1_000_000).toFixed(1)} Triệu\`;
  if (amount >= 1_000) return \`\${(amount / 1_000).toFixed(1)}K\`;
  return amount;
};

export default function ExpenseTracker() {
  const rootRef = useRef(null);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [formData, setFormData] = useState(initialForm);
  const [filters, setFilters] = useState({
    category: "all",
    searchTerm: "",
    dateFrom: "",
    dateTo: "",
    minAmount: "",
    maxAmount: "",
  });
  const [sortOption, setSortOption] = useState({
    field: "date",
    order: "desc",
  });
  const [editingId, setEditingId] = useState(null);

  const syncLocalStorage = (data) =>
    localStorage.setItem("expenses", JSON.stringify(data));
  const handleChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleChangeFilters = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  const addExpense = (prev, expense) => [
    ...prev,
    { ...expense, id: Date.now() },
  ];
  const updateExpense = (prev, expense) =>
    prev.map((e) => (e.id === expense.id ? { ...e, ...expense } : e));

  const handleSaveExpense = (expense) => {
    setExpenses((prev) => {
      const newState = expense.id
        ? updateExpense(prev, expense)
        : addExpense(prev, expense);
      syncLocalStorage(newState);
      return newState;
    });
    handleCancel();
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialForm);
  };

  const startEditing = (exp) => {
    setEditingId(exp.id);
    setFormData(exp);
    rootRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const deleteExpense = (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa chi tiêu này?")) return;
    setExpenses((prev) => {
      const newState = prev.filter((e) => e.id !== id);
      syncLocalStorage(newState);
      return newState;
    });
  };

  const handleFilter = (e) => {
    const { category, dateFrom, dateTo, minAmount, maxAmount, searchTerm } =
      filters;
    const d = new Date(e.date);
    const term = searchTerm.toLowerCase();
    if (category !== "all" && e.category !== category) return false;
    if (dateFrom && new Date(dateFrom) > d) return false;
    if (dateTo && new Date(dateTo) < d) return false;
    if (minAmount && e.amount < minAmount) return false;
    if (maxAmount && e.amount > maxAmount) return false;
    if (term && !e.description.toLowerCase().includes(term)) return false;
    return true;
  };

  const handleChangeSort = (key) => {
    let order = "asc";
    if (key === sortOption.field && sortOption.order === "asc") order = "desc";
    setSortOption({ field: key, order });
  };

  const handleSort = (a, b) => {
    const { field, order } = sortOption;
    let res = 0;
    if (field === "date") res = new Date(a.date) - new Date(b.date);
    if (field === "amount") res = a.amount - b.amount;
    if (field === "category")
      res = categories.indexOf(a.category) - categories.indexOf(b.category);
    if (field === "description")
      res = a.description.localeCompare(b.description);
    return order === "asc" ? res : -res;
  };

  const expensesFiltered = expenses.filter(handleFilter).sort(handleSort);
  const total = expensesFiltered.reduce((a, b) => a + Number(b.amount), 0);

  const stats = categories.map((cat) => {
    const amt = expensesFiltered
      .filter((e) => e.category === cat)
      .reduce((a, b) => a + Number(b.amount), 0);
    return { category: cat, amount: amt };
  });

  const canSubmit = formData.description && formData.amount;

  return (
    <div ref={rootRef} className="expense-tracker">
      <h1>Quản Lý Chi Tiêu</h1>

      {/* Form */}
      <Card className="expense-form">
        <Card.Header>
          <Card.Title>
            {editingId ? "Chỉnh sửa chi tiêu" : "Thêm chi tiêu mới"}
          </Card.Title>
        </Card.Header>
        <Card.Content>
          <form>
            <Input
              label="Mô tả"
              name="description"
              value={formData.description}
              onChange={handleChangeForm}
              placeholder="Nhập mô tả"
            />
            <Input
              label="Số tiền"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChangeForm}
            />
            <Select
              label="Danh mục"
              name="category"
              value={formData.category}
              onChange={handleChangeForm}
              options={categories.map((c) => ({ value: c, label: c }))}
            />
            <Input
              label="Ngày"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChangeForm}
            />
            <div className="expense-input">
              {editingId && (
                <Button variant="ghost" onClick={handleCancel}>
                  Hủy
                </Button>
              )}
              <Button
                variant="primary"
                disabled={!canSubmit}
                onClick={() =>
                  handleSaveExpense({ ...formData, id: editingId })
                }
              >
                {editingId ? "Cập nhật" : "Thêm"}
              </Button>
            </div>
          </form>
        </Card.Content>
      </Card>

      {/* Filters + Statistics */}
      {!editingId && (
        <>
          <div className="filters">
            <Input
              placeholder="Tìm kiếm theo mô tả"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChangeFilters}
            />
            <Select
              value={filters.category}
              name="category"
              onChange={handleChangeFilters}
              options={[
                { value: "all", label: "Tất cả" },
                ...categories.map((c) => ({ value: c, label: c })),
              ]}
            />
          </div>
          <div className="filters">
            <Input
              type="date"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleChangeFilters}
              label="Từ ngày"
            />
            <Input
              type="date"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleChangeFilters}
              label="Đến ngày"
            />
          </div>
          <div className="filters">
            <Input
              type="number"
              name="minAmount"
              placeholder="Tối thiểu"
              value={filters.minAmount}
              onChange={handleChangeFilters}
            />
            <Input
              type="number"
              name="maxAmount"
              placeholder="Tối đa"
              value={filters.maxAmount}
              onChange={handleChangeFilters}
            />
          </div>

          <Card className="statistics">
            <Card.Header>
              <Card.Title>Thống kê</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>Tổng chi tiêu: {formatCurrency(total)}</p>
              <div className="category-bars">
                {stats.map((s) =>
                  s.amount > 0 ? (
                    <div key={s.category} className="bar">
                      <span className="bar-label">{s.category}</span>
                      <div
                        className="bar-fill"
                        style={{ "--width": \`\${(s.amount / total) * 100}%\` }}
                      >
                        {formatMoneyVN(s.amount)}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </Card.Content>
          </Card>
        </>
      )}

      {/* Table */}
      <div className="expense-list">
        <h2>Danh sách chi tiêu</h2>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleChangeSort("description")}>Mô tả</th>
              <th onClick={() => handleChangeSort("amount")}>Số tiền</th>
              <th onClick={() => handleChangeSort("category")}>Danh mục</th>
              <th onClick={() => handleChangeSort("date")}>
                Ngày (mm/dd/yyyy)
              </th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {expensesFiltered.length > 0 ? (
              expensesFiltered.map((e) => (
                <tr key={e.id}>
                  <td>{e.description}</td>
                  <td>{formatCurrency(e.amount)}</td>
                  <td>{e.category}</td>
                  <td>{formatDate(e.date)}</td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => startEditing(e)}
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteExpense(e.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={5}>
                  Không có chi tiêu nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

`})]})}function ye(){return e.jsxs(d,{children:[e.jsx(d.Header,{order:"#",title:"Home Work"}),e.jsx(d.Description,{children:`
1. Notes App
Tạo ứng dụng ghi chú:

CRUD operations (Create, Read, Update, Delete)
Categories/Tags
Search functionality
Rich text formatting (optional)
Pin/Favorite notes
Sort by: date, title, modified
LocalStorage persistence
Export/Import notes
2. Budget Planner
Quản lý ngân sách cá nhân:

// State structure
{
  income: { amount, source, date },
  expenses: [{ amount, category, date, recurring }],
  budget: { category: limit },
  savings: { goal, current, deadline }
}

// Features:
// - Set income
// - Add/edit/delete expenses
// - Set budget limits per category
// - Alerts khi vượt budget
// - Savings goal tracker
// - Monthly/yearly reports
// - Recurring expenses

3. Habit Tracker
Theo dõi thói quen hàng ngày:

// State structure
{
  habits: [
    {
      id,
      name,
      goal, // 'daily', 'weekly', số lần
      streak,
      history: { date: completed }
    }
  ]
}

// Features:
// - Add/edit/delete habits
// - Mark as completed
// - Current streak
// - Best streak
// - Calendar view
// - Statistics
// - Reminders (optional)

4. Recipe Book
Sổ công thức nấu ăn:

// State structure
{
  recipes: [
    {
      id,
      title,
      ingredients: [{ name, amount, unit }],
      steps: [],
      prepTime,
      cookTime,
      servings,
      difficulty,
      category,
      tags,
      image,
      rating,
      notes
    }
  ],
  shoppingList: []
}

// Features:
// - Add/edit/delete recipes
// - Search and filter
// - Scale servings
// - Add to shopping list
// - Rate recipes
// - Categories and tags
// - Favorite recipes

5. Pomodoro Timer với Stats (Challenge)
Timer làm việc với thống kê:

// State structure
{
  timer: {
    minutes,
    seconds,
    isRunning,
    mode // 'work', 'shortBreak', 'longBreak'
  },
  settings: {
    workDuration,
    shortBreakDuration,
    longBreakDuration,
    sessionsUntilLongBreak
  },
  sessions: [
    {
      date,
      completedPomodoros,
      totalFocusTime,
      tasks: [{ name, pomodoros }]
    }
  ],
  currentTask: { name, estimatedPomodoros, completed }
}

// Features:
// - Customizable durations
// - Auto-switch between work/break
// - Task list với pomodoro estimates
// - Daily/weekly statistics
// - Focus time trends
// - Browser notifications
// - Sound alerts
// - Background work tracking
`}),e.jsx(d.Code,{children:`
// ==========================================
// GIẢI BÀI TẬP VỀ NHÀ - NGÀY 6: useState Mastery
// ==========================================

// 1️⃣ NOTES APP
// Cốt lõi: CRUD operations, categories/tags, search, localStorage persistence

function NotesApp() {
  // Lazy init từ localStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'personal',
    tags: []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date'); // date | title | modified
  const [editingId, setEditingId] = useState(null);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = () => {
    if (!formData.title.trim()) return;

    const newNote = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      isPinned: false
    };

    setNotes(prev => [newNote, ...prev]);
    resetForm();
  };

  // Update note
  const updateNote = () => {
    setNotes(prev =>
      prev.map(note =>
        note.id === editingId
          ? { ...note, ...formData, modifiedAt: new Date().toISOString() }
          : note
      )
    );
    resetForm();
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  // Toggle pin
  const togglePin = (id) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  // Edit note - load vào form
  const startEdit = (note) => {
    setFormData({
      title: note.title,
      content: note.content,
      category: note.category,
      tags: note.tags
    });
    setEditingId(note.id);
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', category: 'personal', tags: [] });
    setEditingId(null);
  };

  // DERIVED STATE - Filtered & sorted notes
  const processedNotes = notes
    .filter(note => {
      const matchSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = filterCategory === 'all' || note.category === filterCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      // Pinned notes luôn lên đầu
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
      
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'modified':
          return new Date(b.modifiedAt) - new Date(a.modifiedAt);
        default: // date
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Export data
  const exportNotes = () => {
    const dataStr = JSON.stringify(notes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = \`notes-\${Date.now()}.json\`;
    link.click();
  };

  // Import data
  const importNotes = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        setNotes(prev => [...imported, ...prev]);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="notes-app">
      <h1>📝 Notes App</h1>

      {/* Form */}
      <div className="note-form">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Title..."
        />
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Content..."
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="ideas">Ideas</option>
        </select>
        
        <button onClick={editingId ? updateNote : addNote}>
          {editingId ? 'Update' : 'Add'} Note
        </button>
        {editingId && <button onClick={resetForm}>Cancel</button>}
      </div>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search notes..."
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="ideas">Ideas</option>
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="modified">Sort by Modified</option>
        </select>
        <button onClick={exportNotes}>Export</button>
        <label>
          Import <input type="file" accept=".json" onChange={importNotes} />
        </label>
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {processedNotes.map(note => (
          <div key={note.id} className="note-card">
            <div className="note-header">
              <h3>{note.title}</h3>
              <button onClick={() => togglePin(note.id)}>
                {note.isPinned ? '📌' : '📍'}
              </button>
            </div>
            <p>{note.content}</p>
            <div className="note-meta">
              <span className="category">{note.category}</span>
              <span className="date">{new Date(note.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="note-actions">
              <button onClick={() => startEdit(note)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 2️⃣ BUDGET PLANNER
// Cốt lõi: Income/expenses tracking, budget limits, alerts, savings goal

function BudgetPlanner() {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem('budget');
    return saved ? JSON.parse(saved) : {
      income: { amount: 0, source: '', date: '' },
      expenses: [],
      budgetLimits: {
        'Ăn uống': 5000000,
        'Di chuyển': 2000000,
        'Giải trí': 3000000,
        'Mua sắm': 4000000
      },
      savingsGoal: { target: 10000000, current: 0, deadline: '' }
    };
  });

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Ăn uống',
    date: new Date().toISOString().split('T')[0],
    recurring: false
  });

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state));
  }, [state]);

  // Add expense
  const addExpense = () => {
    if (!formData.amount) return;

    const newExpense = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount)
    };

    setState(prev => ({
      ...prev,
      expenses: [...prev.expenses, newExpense]
    }));

    setFormData({
      description: '',
      amount: '',
      category: 'Ăn uống',
      date: new Date().toISOString().split('T')[0],
      recurring: false
    });
  };

  // Delete expense
  const deleteExpense = (id) => {
    setState(prev => ({
      ...prev,
      expenses: prev.expenses.filter(e => e.id !== id)
    }));
  };

  // Set income
  const setIncome = (amount, source) => {
    setState(prev => ({
      ...prev,
      income: { amount, source, date: new Date().toISOString() }
    }));
  };

  // Update budget limit
  const updateBudgetLimit = (category, limit) => {
    setState(prev => ({
      ...prev,
      budgetLimits: { ...prev.budgetLimits, [category]: parseFloat(limit) }
    }));
  };

  // DERIVED STATE - Spending by category
  const spendingByCategory = state.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // DERIVED STATE - Budget status
  const budgetStatus = Object.keys(state.budgetLimits).map(category => {
    const spent = spendingByCategory[category] || 0;
    const limit = state.budgetLimits[category];
    const percentage = (spent / limit) * 100;
    return {
      category,
      spent,
      limit,
      remaining: limit - spent,
      percentage,
      isOverBudget: spent > limit
    };
  });

  // DERIVED STATE - Monthly totals
  const totalExpenses = state.expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = state.income.amount - totalExpenses;

  // DERIVED STATE - Savings progress
  const savingsProgress = (state.savingsGoal.current / state.savingsGoal.target) * 100;

  return (
    <div className="budget-planner">
      <h1>💰 Budget Planner</h1>

      {/* Income Section */}
      <div className="income-section">
        <h2>Income: {state.income.amount.toLocaleString()}đ</h2>
        <input
          type="number"
          placeholder="Amount"
          onBlur={(e) => setIncome(parseFloat(e.target.value) || 0, 'Salary')}
        />
      </div>

      {/* Balance Overview */}
      <div className="balance">
        <h3>Balance: {balance.toLocaleString()}đ</h3>
        <p>Income: {state.income.amount.toLocaleString()}đ</p>
        <p>Expenses: {totalExpenses.toLocaleString()}đ</p>
      </div>

      {/* Add Expense Form */}
      <div className="expense-form">
        <input
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="Amount"
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option>Ăn uống</option>
          <option>Di chuyển</option>
          <option>Giải trí</option>
          <option>Mua sắm</option>
        </select>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={formData.recurring}
            onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
          />
          Recurring
        </label>
        <button onClick={addExpense}>Add Expense</button>
      </div>

      {/* Budget Status per Category */}
      <div className="budget-status">
        <h3>Budget Status</h3>
        {budgetStatus.map(item => (
          <div key={item.category} className={item.isOverBudget ? 'over-budget' : ''}>
            <h4>{item.category}</h4>
            <progress value={item.percentage} max="100" />
            <p>
              {item.spent.toLocaleString()} / {item.limit.toLocaleString()}đ
              ({item.percentage.toFixed(1)}%)
            </p>
            {item.isOverBudget && <span style={{color: 'red'}}>⚠️ OVER BUDGET!</span>}
            <input
              type="number"
              placeholder="New limit"
              onBlur={(e) => updateBudgetLimit(item.category, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Savings Goal */}
      <div className="savings-goal">
        <h3>Savings Goal</h3>
        <progress value={savingsProgress} max="100" />
        <p>
          {state.savingsGoal.current.toLocaleString()} / 
          {state.savingsGoal.target.toLocaleString()}đ 
          ({savingsProgress.toFixed(1)}%)
        </p>
      </div>

      {/* Expenses List */}
      <div className="expenses-list">
        <h3>Recent Expenses</h3>
        {state.expenses.slice(-10).reverse().map(expense => (
          <div key={expense.id} className="expense-item">
            <span>{expense.description}</span>
            <span>{expense.category}</span>
            <span>{expense.amount.toLocaleString()}đ</span>
            <span>{expense.date}</span>
            {expense.recurring && <span>🔄</span>}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3️⃣ HABIT TRACKER
// Cốt lõi: Daily habits tracking, streak counting, calendar view

function HabitTracker() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits');
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    goal: 'daily', // daily | weekly | custom
    targetCount: 1
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Add habit
  const addHabit = () => {
    if (!formData.name.trim()) return;

    const newHabit = {
      id: Date.now(),
      ...formData,
      history: {}, // { 'YYYY-MM-DD': count }
      currentStreak: 0,
      bestStreak: 0,
      createdAt: new Date().toISOString()
    };

    setHabits(prev => [...prev, newHabit]);
    setFormData({ name: '', goal: 'daily', targetCount: 1 });
  };

  // Toggle habit completion for today
  const toggleHabit = (habitId) => {
    const today = new Date().toISOString().split('T')[0];

    setHabits(prev =>
      prev.map(habit => {
        if (habit.id !== habitId) return habit;

        const newHistory = { ...habit.history };
        const currentCount = newHistory[today] || 0;

        if (currentCount >= habit.targetCount) {
          delete newHistory[today]; // Mark as incomplete
        } else {
          newHistory[today] = currentCount + 1;
        }

        // Calculate streak
        const { currentStreak, bestStreak } = calculateStreak(newHistory, habit.goal);

        return {
          ...habit,
          history: newHistory,
          currentStreak,
          bestStreak: Math.max(bestStreak, habit.bestStreak)
        };
      })
    );
  };

  // Calculate current streak
  const calculateStreak = (history, goal) => {
    const dates = Object.keys(history).sort().reverse();
    let currentStreak = 0;
    let bestStreak = 0;
    let streak = 0;

    const today = new Date();
    let checkDate = new Date(today);

    for (let i = 0; i < 365; i++) {
      const dateStr = checkDate.toISOString().split('T')[0];
      
      if (history[dateStr]) {
        streak++;
        if (i === 0) currentStreak = streak;
      } else {
        if (streak > bestStreak) bestStreak = streak;
        if (i === 0) break; // Streak broken today
        streak = 0;
      }

      checkDate.setDate(checkDate.getDate() - 1);
    }

    return { currentStreak, bestStreak: Math.max(streak, bestStreak) };
  };

  // Delete habit
  const deleteHabit = (id) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  // DERIVED STATE - Today's completion
  const today = new Date().toISOString().split('T')[0];
  const todayStats = {
    total: habits.length,
    completed: habits.filter(h => (h.history[today] || 0) >= h.targetCount).length
  };

  return (
    <div className="habit-tracker">
      <h1>✅ Habit Tracker</h1>

      {/* Add Habit Form */}
      <div className="habit-form">
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Habit name..."
        />
        <select
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <input
          type="number"
          value={formData.targetCount}
          onChange={(e) => setFormData({ ...formData, targetCount: parseInt(e.target.value) })}
          min="1"
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>

      {/* Today's Progress */}
      <div className="today-progress">
        <h3>Today: {todayStats.completed}/{todayStats.total} completed</h3>
        <progress value={todayStats.completed} max={todayStats.total} />
      </div>

      {/* Habits List */}
      <div className="habits-list">
        {habits.map(habit => {
          const todayCount = habit.history[today] || 0;
          const isCompleted = todayCount >= habit.targetCount;

          return (
            <div key={habit.id} className="habit-card">
              <div className="habit-header">
                <h3>{habit.name}</h3>
                <button onClick={() => deleteHabit(habit.id)}>Delete</button>
              </div>

              <div className="habit-info">
                <p>Goal: {habit.goal} ({habit.targetCount}x)</p>
                <p>🔥 Current Streak: {habit.currentStreak} days</p>
                <p>🏆 Best Streak: {habit.bestStreak} days</p>
              </div>

              <div className="habit-action">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={isCompleted ? 'completed' : ''}
                >
                  {isCompleted ? '✅' : '⭕'} Today: {todayCount}/{habit.targetCount}
                </button>
              </div>

              {/* Last 7 days */}
              <div className="habit-history">
                {[...Array(7)].map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - i);
                  const dateStr = date.toISOString().split('T')[0];
                  const count = habit.history[dateStr] || 0;
                  const completed = count >= habit.targetCount;

                  return (
                    <div key={i} className="day">
                      <span>{date.getDate()}</span>
                      <span>{completed ? '✅' : '⭕'}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 4️⃣ RECIPE BOOK
// Cốt lõi: Recipe CRUD, ingredients, steps, shopping list

function RecipeBook() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    return saved ? JSON.parse(saved) : [];
  });

  const [shoppingList, setShoppingList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    ingredients: [{ name: '', amount: '', unit: '' }],
    steps: [''],
    prepTime: 0,
    cookTime: 0,
    servings: 4,
    difficulty: 'medium',
    category: 'main',
    tags: [],
    rating: 0,
    notes: ''
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  // Add/Update recipe
  const saveRecipe = () => {
    if (!formData.title.trim()) return;

    if (editingId) {
      setRecipes(prev =>
        prev.map(recipe =>
          recipe.id === editingId ? { ...recipe, ...formData } : recipe
        )
      );
      setEditingId(null);
    } else {
      const newRecipe = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      setRecipes(prev => [...prev, newRecipe]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      ingredients: [{ name: '', amount: '', unit: '' }],
      steps: [''],
      prepTime: 0,
      cookTime: 0,
      servings: 4,
      difficulty: 'medium',
      category: 'main',
      tags: [],
      rating: 0,
      notes: ''
    });
  };

  // Update ingredient
  const updateIngredient = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? { ...ing, [field]: value } : ing
      )
    }));
  };

  // Add ingredient
  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: '', amount: '', unit: '' }]
    }));
  };

  // Update step
  const updateStep = (index, value) => {
    setFormData(prev => ({
      ...prev,
      steps: prev.steps.map((step, i) => (i === index ? value : step))
    }));
  };

  // Add step
  const addStep = () => {
    setFormData(prev => ({
      ...prev,
      steps: [...prev.steps, '']
    }));
  };

  // Scale servings
  const scaleServings = (recipe, newServings) => {
    const scale = newServings / recipe.servings;
    return {
      ...recipe,
      servings: newServings,
      ingredients: recipe.ingredients.map(ing => ({
        ...ing,
        amount: (parseFloat(ing.amount) * scale).toFixed(2)
      }))
    };
  };

  // Add to shopping list
  const addToShoppingList = (recipe) => {
    setShoppingList(prev => [
      ...prev,
      ...recipe.ingredients.map(ing => ({
        ...ing,
        recipeTitle: recipe.title,
        checked: false
      }))
    ]);
  };

  // Toggle shopping list item
  const toggleShoppingItem = (index) => {
    setShoppingList(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // DERIVED STATE - Filtered recipes
  const filteredRecipes = recipes.filter(recipe => {
    const matchSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === 'all' || recipe.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="recipe-book">
      <h1>👨‍🍳 Recipe Book</h1>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
        />
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="breakfast">Breakfast</option>
          <option value="main">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      {/* Add/Edit Recipe Form */}
      <div className="recipe-form">
        <h3>{editingId ? 'Edit' : 'Add'} Recipe</h3>
        
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Recipe title..."
        />

        <div className="time-inputs">
          <input
            type="number"
            value={formData.prepTime}
            onChange={(e) => setFormData({ ...formData, prepTime: parseInt(e.target.value) })}
            placeholder="Prep time (min)"
          />
          <input
            type="number"
            value={formData.cookTime}
            onChange={(e) => setFormData({ ...formData, cookTime: parseInt(e.target.value) })}
            placeholder="Cook time (min)"
          />
          <input
            type="number"
            value={formData.servings}
            onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) })}
            placeholder="Servings"
          />
        </div>

        {/* Ingredients */}
        <div className="ingredients">
          <h4>Ingredients</h4>
          {formData.ingredients.map((ing, index) => (
            <div key={index}>
              <input
                value={ing.name}
                onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                placeholder="Ingredient"
              />
              <input
                value={ing.amount}
                onChange={(e) => updateIngredient(index, 'amount', e.target.value)}
                placeholder="Amount"
              />
              <input
                value={ing.unit}
                onChange={(e) => updateIngredient(index, 'unit', e.target.value)}
                placeholder="Unit"
              />
            </div>
          ))}
          <button onClick={addIngredient}>+ Add Ingredient</button>
        </div>

        {/* Steps */}
        <div className="steps">
          <h4>Steps</h4>
          {formData.steps.map((step, index) => (
            <textarea
              key={index}
              value={step}
              onChange={(e) => updateStep(index, e.target.value)}
              placeholder={\`Step \${index + 1}...\`}
            />
          ))}
          <button onClick={addStep}>+ Add Step</button>
        </div>

        <button onClick={saveRecipe}>{editingId ? 'Update' : 'Add'} Recipe</button>
        {editingId && <button onClick={resetForm}>Cancel</button>}
      </div>

      {/* Recipes List */}
      <div className="recipes-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>⏱️ {recipe.prepTime + recipe.cookTime} min | 🍽️ {recipe.servings} servings</p>
            <p>Difficulty: {recipe.difficulty}</p>
            
            <div className="recipe-actions">
              <button onClick={() => { setFormData(recipe); setEditingId(recipe.id); }}>
                Edit
              </button>
              <button onClick={() => addToShoppingList(recipe)}>
                Add to Shopping List
              </button>
              <button onClick={() => setRecipes(prev => prev.filter(r => r.id !== recipe.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping List */}
      <div className="shopping-list">
        <h3>🛒 Shopping List ({shoppingList.filter(i => !i.checked).length} items)</h3>
        {shoppingList.map((item, index) => (
          <div key={index} className={item.checked ? 'checked' : ''}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleShoppingItem(index)}
            />
            <span>{item.amount} {item.unit} {item.name}</span>
            <small>({item.recipeTitle})</small>
          </div>
        ))}
        <button onClick={() => setShoppingList([])}>Clear List</button>
      </div>
    </div>
  );


// ==========================================
// 5️⃣ POMODORO TIMER WITH STATS (CHALLENGE)
// Cốt lõi: Timer state machine, work/break modes, task tracking, statistics

function PomodoroTimer() {
  // Settings
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('pomodoro-settings');
    return saved ? JSON.parse(saved) : {
      workDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      sessionsUntilLongBreak: 4
    };
  });

  // Timer state
  const [timer, setTimer] = useState({
    minutes: settings.workDuration,
    seconds: 0,
    isRunning: false,
    mode: 'work' // 'work' | 'shortBreak' | 'longBreak'
  });

  // Session tracking
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem('pomodoro-sessions');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentTask, setCurrentTask] = useState({
    name: '',
    estimatedPomodoros: 1,
    completedPomodoros: 0
  });

  const [tasks, setTasks] = useState([]);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-settings', JSON.stringify(settings));
  }, [settings]);

  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-sessions', JSON.stringify(sessions));
  }, [sessions]);

  // Timer countdown
  useEffect(() => {
    if (!timer.isRunning) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Timer finished
          handleTimerComplete();
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.isRunning]);

  // Handle timer completion
  const handleTimerComplete = () => {
    // Play sound notification
    playNotificationSound();

    if (timer.mode === 'work') {
      // Work session completed
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);

      // Update current task
      if (currentTask.name) {
        setCurrentTask(prev => ({
          ...prev,
          completedPomodoros: prev.completedPomodoros + 1
        }));
      }

      // Save session
      const today = new Date().toISOString().split('T')[0];
      const todaySession = sessions.find(s => s.date === today);

      if (todaySession) {
        setSessions(prev =>
          prev.map(s =>
            s.date === today
              ? {
                  ...s,
                  completedPomodoros: s.completedPomodoros + 1,
                  totalFocusTime: s.totalFocusTime + settings.workDuration
                }
              : s
          )
        );
      } else {
        setSessions(prev => [
          ...prev,
          {
            date: today,
            completedPomodoros: 1,
            totalFocusTime: settings.workDuration,
            tasks: currentTask.name ? [{ name: currentTask.name, pomodoros: 1 }] : []
          }
        ]);
      }

      // Switch to break
      const isLongBreak = newCompletedPomodoros % settings.sessionsUntilLongBreak === 0;
      startBreak(isLongBreak ? 'longBreak' : 'shortBreak');
    } else {
      // Break finished, back to work
      startWork();
    }

    // Browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Pomodoro Timer', {
        body: timer.mode === 'work' ? 'Time for a break!' : 'Back to work!',
        icon: '🍅'
      });
    }
  };

  // Notification sound
  const playNotificationSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZQQ0PVqzt7qVYGAg+ltv0xnElBSl+zPLaizsIGGS57OihUBELTKXi8bllHAU2jdXy0HwpBSp6yvDdkj8JE1y05+mnVRQLRp/g8r1sIAUqfs/y2Ik3CBhku+znoVARC0yl4vG5ZRwFNo3V8tB8KQUqeMrw3ZI/CRNctOfpp1UVAAAAAAAAAAAAAAAAAAAAAAAAAAA'); // Simplified beep
    audio.play().catch(() => {}); // Ignore errors if audio can't play
  };

  // Start/pause timer
  const toggleTimer = () => {
    setTimer(prev => ({ ...prev, isRunning: !prev.isRunning }));

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  // Start work session
  const startWork = () => {
    setTimer({
      minutes: settings.workDuration,
      seconds: 0,
      isRunning: false,
      mode: 'work'
    });
  };

  // Start break
  const startBreak = (type) => {
    const duration = type === 'longBreak' 
      ? settings.longBreakDuration 
      : settings.shortBreakDuration;

    setTimer({
      minutes: duration,
      seconds: 0,
      isRunning: true,
      mode: type
    });
  };

  // Reset timer
  const resetTimer = () => {
    const duration = timer.mode === 'work' 
      ? settings.workDuration
      : timer.mode === 'shortBreak'
        ? settings.shortBreakDuration
        : settings.longBreakDuration;

    setTimer({
      minutes: duration,
      seconds: 0,
      isRunning: false,
      mode: timer.mode
    });
  };

  // Skip to next mode
  const skipToNext = () => {
    if (timer.mode === 'work') {
      const isLongBreak = (completedPomodoros + 1) % settings.sessionsUntilLongBreak === 0;
      startBreak(isLongBreak ? 'longBreak' : 'shortBreak');
    } else {
      startWork();
    }
  };

  // Add task
  const addTask = () => {
    if (!currentTask.name.trim()) return;

    setTasks(prev => [...prev, {
      id: Date.now(),
      name: currentTask.name,
      estimatedPomodoros: currentTask.estimatedPomodoros,
      completedPomodoros: 0,
      createdAt: new Date().toISOString()
    }]);

    setCurrentTask({ name: '', estimatedPomodoros: 1, completedPomodoros: 0 });
  };

  // Complete task
  const completeTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  // Update settings
  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: parseInt(value) }));
  };

  // DERIVED STATE - Today's stats
  const today = new Date().toISOString().split('T')[0];
  const todaySession = sessions.find(s => s.date === today);
  const todayStats = todaySession || {
    completedPomodoros: 0,
    totalFocusTime: 0
  };

  // DERIVED STATE - Weekly stats
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  });

  const weeklyStats = last7Days.map(date => {
    const session = sessions.find(s => s.date === date);
    return {
      date,
      pomodoros: session?.completedPomodoros || 0,
      focusTime: session?.totalFocusTime || 0
    };
  }).reverse();

  const weeklyTotal = weeklyStats.reduce((sum, day) => sum + day.pomodoros, 0);

  // DERIVED STATE - Progress display
  const progress = timer.mode === 'work'
    ? ((settings.workDuration * 60 - (timer.minutes * 60 + timer.seconds)) / (settings.workDuration * 60)) * 100
    : ((settings.shortBreakDuration * 60 - (timer.minutes * 60 + timer.seconds)) / (settings.shortBreakDuration * 60)) * 100;

  // Format time display
  const timeDisplay = \`\${String(timer.minutes).padStart(2, '0')}:\${String(timer.seconds).padStart(2, '0')}\`;

  return (
    <div className="pomodoro-timer">
      <h1>🍅 Pomodoro Timer</h1>

      {/* Mode indicator */}
      <div className="mode-indicator">
        <h2>
          {timer.mode === 'work' ? '💼 Work Time' : 
           timer.mode === 'shortBreak' ? '☕ Short Break' : 
           '🌴 Long Break'}
        </h2>
      </div>

      {/* Timer display */}
      <div className="timer-display">
        <div className="timer-circle" style={{ background: \`conic-gradient(#4caf50 \${progress}%, #ddd \${progress}%)\` }}>
          <div className="timer-inner">
            <h1>{timeDisplay}</h1>
          </div>
        </div>
      </div>

      {/* Timer controls */}
      <div className="timer-controls">
        <button onClick={toggleTimer}>
          {timer.isRunning ? '⏸️ Pause' : '▶️ Start'}
        </button>
        <button onClick={resetTimer}>🔄 Reset</button>
        <button onClick={skipToNext}>⏭️ Skip</button>
      </div>

      {/* Session counter */}
      <div className="session-counter">
        <h3>
          Sessions today: {completedPomodoros}
          {completedPomodoros > 0 && \` (\${Math.floor(completedPomodoros / settings.sessionsUntilLongBreak)} long breaks earned)\`}
        </h3>
      </div>

      {/* Current task */}
      <div className="current-task-section">
        <h3>Current Task</h3>
        {currentTask.name ? (
          <div className="active-task">
            <h4>{currentTask.name}</h4>
            <p>
              {currentTask.completedPomodoros}/{currentTask.estimatedPomodoros} pomodoros
            </p>
            <progress 
              value={currentTask.completedPomodoros} 
              max={currentTask.estimatedPomodoros} 
            />
          </div>
        ) : (
          <p>No active task</p>
        )}
      </div>

      {/* Add task form */}
      <div className="add-task-form">
        <input
          value={currentTask.name}
          onChange={(e) => setCurrentTask({ ...currentTask, name: e.target.value })}
          placeholder="Task name..."
        />
        <input
          type="number"
          value={currentTask.estimatedPomodoros}
          onChange={(e) => setCurrentTask({ 
            ...currentTask, 
            estimatedPomodoros: parseInt(e.target.value) || 1 
          })}
          min="1"
          style={{ width: '80px' }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task list */}
      <div className="task-list">
        <h3>Task Queue ({tasks.length})</h3>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <div>
              <strong>{task.name}</strong>
              <p>{task.estimatedPomodoros} pomodoros estimated</p>
            </div>
            <div>
              <button onClick={() => {
                setCurrentTask({
                  name: task.name,
                  estimatedPomodoros: task.estimatedPomodoros,
                  completedPomodoros: 0
                });
                completeTask(task.id);
              }}>
                Start
              </button>
              <button onClick={() => completeTask(task.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Statistics */}
      <div className="today-stats">
        <h3>📊 Today's Stats</h3>
        <div className="stat-card">
          <h4>{todayStats.completedPomodoros}</h4>
          <p>Pomodoros Completed</p>
        </div>
        <div className="stat-card">
          <h4>{todayStats.totalFocusTime} min</h4>
          <p>Total Focus Time</p>
        </div>
        <div className="stat-card">
          <h4>{Math.floor(todayStats.totalFocusTime / 60)}h {todayStats.totalFocusTime % 60}m</h4>
          <p>Formatted Time</p>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="weekly-stats">
        <h3>📈 Last 7 Days</h3>
        <div className="chart">
          {weeklyStats.map(day => (
            <div key={day.date} className="chart-bar">
              <div 
                className="bar" 
                style={{ height: \`\${(day.pomodoros / Math.max(...weeklyStats.map(d => d.pomodoros), 1)) * 100}%\` }}
              />
              <span className="label">{new Date(day.date).getDate()}</span>
              <span className="value">{day.pomodoros}</span>
            </div>
          ))}
        </div>
        <p>Total this week: {weeklyTotal} pomodoros</p>
      </div>

      {/* Settings */}
      <div className="settings">
        <h3>⚙️ Settings</h3>
        <div className="setting-item">
          <label>Work Duration (minutes):</label>
          <input
            type="number"
            value={settings.workDuration}
            onChange={(e) => updateSetting('workDuration', e.target.value)}
            min="1"
            max="60"
          />
        </div>
        <div className="setting-item">
          <label>Short Break (minutes):</label>
          <input
            type="number"
            value={settings.shortBreakDuration}
            onChange={(e) => updateSetting('shortBreakDuration', e.target.value)}
            min="1"
            max="30"
          />
        </div>
        <div className="setting-item">
          <label>Long Break (minutes):</label>
          <input
            type="number"
            value={settings.longBreakDuration}
            onChange={(e) => updateSetting('longBreakDuration', e.target.value)}
            min="1"
            max="60"
          />
        </div>
        <div className="setting-item">
          <label>Sessions until long break:</label>
          <input
            type="number"
            value={settings.sessionsUntilLongBreak}
            onChange={(e) => updateSetting('sessionsUntilLongBreak', e.target.value)}
            min="2"
            max="10"
          />
        </div>
      </div>

      {/* All-time statistics */}
      <div className="all-time-stats">
        <h3>🏆 All-Time Statistics</h3>
        <div className="stat-card">
          <h4>{sessions.reduce((sum, s) => sum + s.completedPomodoros, 0)}</h4>
          <p>Total Pomodoros</p>
        </div>
        <div className="stat-card">
          <h4>{Math.floor(sessions.reduce((sum, s) => sum + s.totalFocusTime, 0) / 60)}h</h4>
          <p>Total Focus Time</p>
        </div>
        <div className="stat-card">
          <h4>{sessions.length}</h4>
          <p>Days Tracked</p>
        </div>
        <div className="stat-card">
          <h4>{(sessions.reduce((sum, s) => sum + s.completedPomodoros, 0) / sessions.length || 0).toFixed(1)}</h4>
          <p>Average per Day</p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 📝 KEY PATTERNS SUMMARY - NGÀY 6
// ==========================================

/*
=== USESTATE MASTERY PATTERNS ===

1. LAZY INITIALIZATION:
   ✅ useState(() => expensiveCalculation())
   ✅ localStorage: useState(() => JSON.parse(localStorage.getItem('key')))
   - Chỉ chạy 1 lần khi mount

2. FUNCTIONAL UPDATES:
   ✅ setState(prev => newValue)
   - Khi state mới phụ thuộc state cũ
   - Tránh stale closure trong useEffect/timers
   - Multiple updates: setCount(p => p+1); setCount(p => p+1); = +2 ✅

3. IMMUTABLE UPDATES:
   ✅ Objects: { ...obj, key: value }
   ✅ Arrays: [...arr, item] | arr.map() | arr.filter()
   ✅ Nested: { ...obj, nested: { ...obj.nested, key: value } }
   ❌ NEVER: obj.key = value; arr.push(); arr.sort()

4. STATE STRUCTURE:
   ✅ Nhóm related state vào object
   ✅ Tránh redundant/derived state
   ✅ Normalize khi cần (byId + allIds)

5. DERIVED STATE:
   ✅ const filtered = data.filter(...) - KHÔNG LƯU vào state
   ✅ const total = items.reduce(...) - Tính toán trực tiếp
   - Giảm complexity, tránh sync issues

6. LOCALSTORAGE PERSISTENCE:
   ✅ Init: useState(() => JSON.parse(localStorage.getItem('key')) || default)
   ✅ Save: useEffect(() => localStorage.setItem('key', JSON.stringify(state)), [state])

7. FORM HANDLING:
   ✅ Single object cho form data
   ✅ Generic updateField function
   ✅ Separate errors state
   ✅ Clear errors khi user edits

8. TIMER/INTERVAL PATTERN:
   ✅ useEffect với cleanup
   ✅ Functional updates trong interval
   ✅ Return cleanup: () => clearInterval(id)

9. STATISTICS/ANALYTICS:
   ✅ Derived từ raw data
   ✅ useMemo cho expensive calculations
   ✅ Aggregate functions (reduce, filter, map)

10. SETTINGS MANAGEMENT:
    ✅ Separate settings object
    ✅ Generic update function
    ✅ Persist to localStorage

=== COMMON MISTAKES TO AVOID ===

❌ Mutating state directly
❌ Not using functional updates in closures
❌ Storing derived/computed values in state
❌ Not initializing from localStorage lazily
❌ Using mutating array methods (push, splice, sort)
❌ Forgetting to spread nested objects
❌ Not cleaning up intervals/timers
❌ Duplicating props in state

=== KEY TAKEAWAYS ===

1. useState = Foundation của React state management
2. Immutability = React's change detection mechanism
3. Functional updates = Safe updates với latest state
4. Lazy init = Performance optimization
5. Derived state = Single source of truth
6. Structure matters = Nhóm related, normalize complex
7. localStorage = Persistent user experience
8. Cleanup = No memory leaks

=== PERFORMANCE TIPS ===

- Lazy init cho expensive calculations
- Derived state thay vì duplicate
- Split components = Isolated state updates
- useMemo cho expensive derived values
- Batch updates tự động trong event handlers
- Avoid unnecessary state = Derive when possible
*/

`})]})}const Z={1:oe,2:de,3:me,4:ue,5:Se},Te=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(te,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 6"}),e.jsx("p",{className:"day-subtitle",children:"useState Mastery"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu sâu về useState hook"}),e.jsx("li",{children:"Lazy initialization"}),e.jsx("li",{children:"State immutability"}),e.jsx("li",{children:"Best practices và patterns"}),e.jsx("li",{children:"Tránh những lỗi phổ biến"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(Z).map(a=>{const o=Z[a];return o?e.jsx(o,{},a):null})}),e.jsx("div",{className:"exercises-list mt-1",children:e.jsx(ye,{})})]});export{Te as default};
