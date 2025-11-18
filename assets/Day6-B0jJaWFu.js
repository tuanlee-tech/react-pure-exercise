import{r as v,j as e,C as te}from"./index-DpTKp3y9.js";/* empty css               */import{E as p}from"./ExerciseCard-C7OLhylv.js";import{C as f,I as N,B as w,S as O,a as ae,M as H}from"./tooltip-36DA9At9.js";import{T as U}from"./Tooltip-34L7SEgt.js";const P={state:{count:0,history:[]},redoStack:[]};function se(){const[a,r]=v.useState(()=>P.state),[n,g]=v.useState(P.redoStack),[i,h]=v.useState(1),F=()=>{r(c=>({...c,count:c.count+i,history:[c.count+i,...c.history]}))},_=()=>{a.count<1||r(c=>({...c,count:c.count-i,history:[c.count-i,...c.history]}))},S=()=>{if(a.history<2)return;const[c,...l]=j;r(o=>({...o,count:l[0],history:l})),g([c,...n])},k=()=>{if(n.length===0)return;const[c,...l]=n;r(o=>({...o,count:c,history:[c,...o.history]})),g(l)},I=()=>{r(P.state),g(P.redoStack)},b=c=>h(+c.target.value),{count:x,history:j}=a;return e.jsxs("div",{className:"advanced-counter",children:[e.jsx("div",{className:"counter-value",children:x}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{disabled:x<1,onClick:_,children:"-"}),e.jsx("button",{onClick:F,children:"+"})]}),e.jsxs("div",{className:"controls",children:[e.jsx("button",{disabled:j<2,onClick:S,children:"Undo"}),e.jsx("button",{disabled:n.length===0,onClick:k,children:"Redo"}),e.jsx("button",{disabled:j.length===0,onClick:I,children:"Reset"})]}),e.jsxs("div",{className:"step-control",children:[e.jsx("label",{children:"Step: "}),e.jsx("input",{min:1,type:"number",value:i,onChange:b})]}),j.length>0&&e.jsxs("div",{className:"history",children:[e.jsx("h3",{children:"History"}),e.jsx("ul",{className:"history-list",children:j.map((c,l)=>e.jsx("li",{className:`${l===0?"current":""}`,children:c},l+1))})]})]})}function re(){return e.jsxs(p,{children:[e.jsx(p.Header,{order:1,title:"Counter Nâng Cao"}),e.jsx(p.Description,{children:`
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

`}),e.jsx(p.Demo,{children:e.jsx(se,{})}),e.jsx(p.Code,{children:`
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

`})]})}const J={high:3,medium:2,low:1},ne=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],oe=[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"completed",label:"Completed"}],ie=[{value:"date",label:"Date"},{value:"priority",label:"Priority"},{value:"alphabetical",label:"Alphabetical"}];function le(){const[a,r]=v.useState(()=>{const s=localStorage.getItem("todos");return s?JSON.parse(s):[]}),[n,g]=v.useState(null),[i,h]=v.useState(""),[F,_]=v.useState("all"),[S,k]=v.useState("date");v.useEffect(()=>{localStorage.setItem("todos",JSON.stringify(a))},[a]);const I=s=>h(s.target.value),b=s=>{const d=a.find(C=>C.id===s);d&&(g(s),h(d.text))},x=()=>{g(null),h("")},j=()=>{i.trim()&&(r(s=>s.map(d=>d.id===n?{...d,text:i.trim()}:d)),g(null),h(""))},c=()=>{if(!i.trim())return;const s=new Date,d={id:s.getTime(),text:i.trim(),completed:!1,priority:"low",createdAt:s.toISOString()};r(C=>[d,...C]),h("")},l=s=>{r(d=>d.filter(C=>C.id!==s))},o=s=>{r(d=>d.map(C=>C.id===s?{...C,completed:!C.completed}:C))},m=(s,d)=>{r(C=>C.map(t=>t.id===d?{...t,priority:s}:t))},T=()=>{const s=a.every(d=>d.completed);r(d=>d.map(C=>({...C,completed:!s})))},D=()=>{r(s=>s.filter(d=>!d.completed))},A=a.filter(s=>F==="active"?!s.completed:F==="completed"?s.completed:!0).sort((s,d)=>S==="date"?new Date(d.createdAt)-new Date(s.createdAt):S==="priority"?J[d.priority]-J[s.priority]:S==="alphabetical"?s.text.localeCompare(d.text):0),E=A.length,$=A.filter(s=>s.completed).length,M=E-$;return e.jsx("div",{className:"todo-app-wrapper",children:e.jsx("div",{className:"todo-app-container",children:e.jsxs(f,{className:"todo-app-card",children:[e.jsxs(f.Header,{children:[e.jsx(f.Title,{children:"Todo App"}),e.jsx(f.Subtitle,{children:"Manage your tasks with style"})]}),e.jsxs(f.Content,{children:[e.jsxs("div",{className:"todo-app-input-area",children:[e.jsx(N,{placeholder:"What needs to be done?",value:i,onChange:I,onKeyDown:s=>{s.key==="Enter"&&(n?j():c()),s.key==="Escape"&&x()},autoFocus:!0}),e.jsx("div",{className:"todo-app-input-actions",children:n?e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"secondary",size:"sm",onClick:x,children:"Cancel"}),e.jsx(w,{variant:"primary",size:"sm",onClick:j,children:"Update Task"})]}):e.jsx(w,{variant:"primary",size:"md",onClick:c,disabled:!i.trim(),icon:"+ ",children:"Add Task"})})]}),e.jsxs("div",{className:"todo-app-filters",children:[e.jsx(O,{label:"Filter",value:F,onChange:s=>_(s.target.value),options:oe,className:"todo-app-filter-select"}),e.jsx(O,{label:"Sort by",value:S,onChange:s=>k(s.target.value),options:ie,className:"todo-app-filter-select"})]}),e.jsx("div",{className:"todo-app-list",children:A.length>0?e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:A.map(({id:s,text:d,completed:C,priority:t})=>e.jsx(f,{className:`todo-app-item todo-app-item--${t}`,children:e.jsx(f.Content,{children:e.jsxs("div",{className:"todo-app-item-content",children:[e.jsx(ae,{checked:C,onChange:()=>o(s)}),e.jsx("span",{className:`todo-app-item-text ${C?"todo-app-item-text--completed":""}`,children:d}),e.jsx(O,{value:t,onChange:u=>m(u.target.value,s),options:ne,disabled:C,style:{width:"120px"}}),e.jsxs("div",{className:"todo-app-item-actions",children:[e.jsx(U,{content:"Edit task",children:e.jsx(w,{variant:"ghost",size:"sm",icon:"🖉",onClick:()=>b(s),disabled:C||n===s})}),e.jsx(U,{content:"Delete task",children:e.jsx(w,{variant:"danger",size:"sm",icon:"❌",onClick:()=>l(s)})})]})]})})},s))}):e.jsx("p",{className:"todo-app-list-empty",children:"No tasks to do"})}),e.jsxs("div",{className:"todo-app-actions",children:[e.jsx(w,{variant:"secondary",size:"sm",onClick:T,children:"Toggle All"}),e.jsx(w,{variant:"danger",size:"sm",onClick:D,children:"Clear Completed"})]}),e.jsx(f,{className:"todo-app-stats",children:e.jsx(f.Content,{children:e.jsxs("div",{className:"todo-app-stats-grid",children:[e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#00D9FF"},children:E}),e.jsx("p",{className:"todo-app-stat-label",children:"Total"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#22c55e"},children:M}),e.jsx("p",{className:"todo-app-stat-label",children:"Active"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"todo-app-stat-number",style:{color:"#f59e0b"},children:$}),e.jsx("p",{className:"todo-app-stat-label",children:"Completed"})]})]})})})]})]})})})}function de(){return e.jsxs(p,{children:[e.jsx(p.Header,{order:2,title:"Todo App Hoàn Chỉnh"}),e.jsx(p.Description,{children:`
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

`}),e.jsx(p.Demo,{children:e.jsx(le,{})}),e.jsx(p.Code,{children:`
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


`})]})}const K=(a,r)=>r.trim()?a==="fullname"&&r.trim().length<6?"Tên quá ngắn":a==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)?"Email không hợp lệ":a==="phone"&&r.trim().length<10?"Số điện thoại không hợp lệ":a==="card_number"&&r.trim().length<12?"Số thẻ không hợp lệ":a==="cvv"&&r.trim().length<3?"CVV không hợp lệ":null:"Trường này là bắt buộc",Y={fullname:"",street:"",card_number:"",expiry_date:"",cvv:"",email:"",phone:"",city:"",postal_code:""};function ce(){const[a,r]=v.useState(1),[n,g]=v.useState(Y),[i,h]=v.useState({}),[F,_]=v.useState(!1),S=l=>{const o={1:["fullname","email","phone"],2:["street","city","postal_code"],3:["card_number","expiry_date","cvv"]}[l],m={};let T=!0;return o.forEach(D=>{const A=K(D,n[D]);m[D]=A,A&&(T=!1)}),h(D=>({...D,...m})),T},k=()=>{S(a)&&r(l=>Math.min(l+1,3))},I=()=>{r(l=>Math.max(l-1,1))},b=l=>{const{name:o,value:m}=l.target;g(T=>({...T,[o]:m})),i[o]&&h(T=>({...T,[o]:null}))},x=l=>{const{name:o,value:m}=l.target,T=K(o,m);h(D=>({...D,[o]:T}))},j=()=>{S(3)&&_(!0)},c=a/3*100;return e.jsxs("div",{className:"multistep-form",children:[e.jsx("div",{className:"multistep-form__container",children:e.jsxs(f,{className:"multistep-form__card",children:[e.jsxs("div",{className:"multistep-form__header",children:[e.jsx("h1",{className:"multistep-form__title",children:"Multi-Step Form"}),e.jsx("p",{className:"multistep-form__subtitle",children:"Điền thông tin từng bước một cách dễ dàng"})]}),e.jsx("div",{className:"multistep-form__progress",children:e.jsx("div",{className:"multistep-form__progress-fill",style:{width:`${c}%`}})}),e.jsxs(f.Content,{className:"multistep-form__content",children:[e.jsxs("div",{className:`multistep-form__step ${a===1?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Personal Information"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx("div",{children:e.jsx(N,{label:"Full Name",name:"fullname",value:n.fullname,onChange:b,onBlur:x,placeholder:"John Doe",error:i.fullname})}),e.jsx("div",{children:e.jsx(N,{label:"Email",name:"email",type:"email",value:n.email,onChange:b,onBlur:x,placeholder:"example@email.com",error:i.email})}),e.jsx("div",{children:e.jsx(N,{label:"Phone",name:"phone",type:"tel",value:n.phone,onChange:b,onBlur:x,placeholder:"+84 123 456 789",error:i.phone})})]})]}),e.jsxs("div",{className:`multistep-form__step ${a===2?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Address Information"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx(N,{label:"Street",name:"street",value:n.street,onChange:b,onBlur:x,placeholder:"123 Main St",error:i.street}),e.jsx(N,{label:"City",name:"city",value:n.city,onChange:b,onBlur:x,placeholder:"Hà Nội",error:i.city}),e.jsx(N,{label:"Postal Code",name:"postal_code",value:n.postal_code,onChange:b,onBlur:x,placeholder:"100000",error:i.postal_code})]})]}),e.jsxs("div",{className:`multistep-form__step ${a===3?"multistep-form__step--active":""}`,children:[e.jsx("h2",{className:"multistep-form__step-title",children:"Payment Details"}),e.jsxs("div",{className:"multistep-form__grid",children:[e.jsx(N,{label:"Card Number",name:"card_number",value:n.card_number,onChange:b,onBlur:x,placeholder:"1234 5678 9012 3456",error:i.card_number}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsx(N,{label:"Expiry Date",name:"expiry_date",value:n.expiry_date,onChange:b,onBlur:x,placeholder:"MM/YY",error:i.expiry_date}),e.jsx(N,{label:"CVV",name:"cvv",type:"password",value:n.cvv,onChange:b,onBlur:x,placeholder:"123",error:i.cvv})]})]}),e.jsxs("div",{className:"multistep-form__review",style:{marginTop:"2rem"},children:[e.jsx("h3",{style:{color:"#00D9FF",marginBottom:"1rem"},children:"Review Your Information"}),Object.entries(n).map(([l,o])=>e.jsxs("div",{className:"multistep-form__review-item",children:[e.jsx("span",{className:"multistep-form__review-label",children:l.replace(/_/g," ").replace(/\b\w/g,m=>m.toUpperCase())}),e.jsx("span",{className:"multistep-form__review-value",children:o||"-"})]},l))]})]}),e.jsxs("div",{className:"multistep-form__actions",children:[e.jsx(w,{variant:"secondary",size:"md",onClick:I,disabled:a===1,children:"Previous"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[a<3&&e.jsx(w,{variant:"primary",size:"md",onClick:k,children:"Next"}),a===3&&e.jsx(w,{variant:"primary",size:"lg",onClick:j,icon:"Check",children:"Submit Payment"})]})]})]})]})}),e.jsxs(H,{isOpen:F,onClose:()=>_(!1),children:[e.jsx(H.Header,{onClose:()=>_(!1),children:"Payment Successful!"}),e.jsxs(H.Body,{children:[e.jsx("p",{children:"Cảm ơn bạn đã hoàn thành form!"}),e.jsx("div",{className:"multistep-form__review",style:{marginTop:"1rem"},children:Object.entries(n).map(([l,o])=>e.jsxs("div",{className:"multistep-form__review-item",children:[e.jsx("span",{className:"multistep-form__review-label",children:l.replace(/_/g," ").replace(/\b\w/g,m=>m.toUpperCase())}),e.jsx("span",{className:"multistep-form__review-value",children:o})]},l))})]}),e.jsx(H.Footer,{children:e.jsx(w,{variant:"primary",onClick:()=>{_(!1),g(Y),h({}),r(1)},children:"Done"})})]})]})}function me(){return e.jsxs(p,{children:[e.jsx(p.Header,{order:3,title:"Multi-Step Form"}),e.jsx(p.Description,{children:`
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

`}),e.jsx(p.Demo,{children:e.jsx(ce,{})}),e.jsx(p.Code,{children:`
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

`})]})}const G=30;function ue(){const[a,r]=v.useState(0),[n,g]=v.useState(!1),[i,h]=v.useState(G),[F,_]=v.useState([]),S=q.length,k=(a+1)/S*100,I=F[a];v.useEffect(()=>{if(i<=0||n){g(!0);return}const o=setInterval(()=>h(m=>m-1),1e3);return()=>clearInterval(o)},[i,n]);const b=o=>{if(n)return;const m=[...F];m[a]=o,_(m)},x=()=>{a<S-1?r(o=>o+1):g(!0)},j=()=>{a>0&&r(o=>o-1)},c=()=>{r(0),g(!1),_([]),h(G)},l=F.filter((o,m)=>o===q[m].correctAnswer).length;return e.jsxs("div",{className:"quiz-container",children:[e.jsx("h1",{className:"quiz-title",children:"Quiz App"}),e.jsxs(f,{className:"quiz-progress-wrapper",children:[e.jsxs("div",{className:"quiz-progress-header",children:[e.jsxs("span",{children:["Câu ",a+1," / ",S]}),e.jsxs("span",{children:[Math.round(k),"%"]})]}),e.jsx("div",{className:"quiz-progress-bar",children:e.jsx("div",{className:"quiz-progress-fill",style:{width:`${k}%`}})})]}),!n&&e.jsxs("div",{className:"quiz-timer",children:["⏱: ",i,"s"]}),e.jsxs(f,{className:"quiz-question-card",children:[e.jsxs("div",{className:"quiz-question-header",children:[e.jsxs("div",{className:"quiz-question-number",children:["Câu hỏi ",a+1]}),e.jsx("h2",{className:"quiz-question-text",children:q[a].question})]}),e.jsx("ul",{className:"quiz-options",children:q[a].options.map((o,m)=>{const T=I===m,D=m===q[a].correctAnswer;return e.jsx("li",{onClick:()=>b(m),className:`
                  quiz-option
                  ${T?"selected":""}
                  ${n&&D?"correct":""}
                  ${n&&T&&!D?"incorrect":""}
                `.trim().replace(/\s+/g," "),children:o},m)})})]}),e.jsxs("div",{className:"quiz-controls",children:[e.jsx(w,{variant:"secondary",size:"lg",onClick:j,disabled:a===0,children:"Trước"}),e.jsx(w,{variant:"primary",size:"lg",onClick:x,disabled:!n&&I===void 0,children:a===S-1?"Nộp":"Tiếp"})]}),n&&e.jsxs(f,{className:"quiz-result",children:[e.jsx("h3",{children:"Kết quả của bạn"}),e.jsxs("div",{className:"quiz-result-score",children:[l," / ",S]}),e.jsx("p",{style:{color:"#94a3b8",margin:"16px 0"},children:l===S?"Hoàn hảo!":l>=S*.7?"Rất tốt!":"Cố lên nhé!"}),e.jsx(w,{variant:"primary",size:"lg",onClick:c,children:"Làm lại"})]})]})}const q=[{id:1,question:"React được tạo bởi?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"React sử dụng ngôn ngữ lập trình nào?",options:["Python","C++","JavaScript","Dart"],correctAnswer:2},{id:3,question:"Hook nào dùng để quản lý state trong React?",options:["useState","useEffect","useContext","useReducer"],correctAnswer:0},{id:4,question:"JSX là gì?",options:["Một framework CSS","Một cú pháp mở rộng cho JavaScript","Một ngôn ngữ mới","Một API của Node.js"],correctAnswer:1}];function pe(){return e.jsxs(p,{children:[e.jsx(p.Header,{order:4,title:"Quiz App"}),e.jsx(p.Description,{children:`
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

`}),e.jsx(p.Demo,{children:e.jsx(ue,{})}),e.jsx(p.Code,{children:`
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

`})]})}const R=["Ăn uống","Di chuyển","Giải trí","Mua sắm","Khác"],X={description:"",amount:"",category:"Ăn uống",date:new Date().toISOString().split("T")[0]},he=[{id:1,description:"Cà phê sáng",amount:45e3,category:"Ăn uống",date:"2025-11-01"},{id:2,description:"Grab đi làm",amount:6e4,category:"Di chuyển",date:"2025-11-02"},{id:3,description:"Xem phim cuối tuần",amount:12e4,category:"Giải trí",date:"2025-10-30"},{id:4,description:"Mua áo sơ mi",amount:35e4,category:"Mua sắm",date:"2025-11-03"},{id:5,description:"Ăn tối với bạn",amount:2e5,category:"Ăn uống",date:"2025-11-04"}],ve=a=>{const r=new Date(a);return`${String(r.getMonth()+1).padStart(2,"0")}/${String(r.getDate()).padStart(2,"0")}/${r.getFullYear()}`},W=a=>Number(a).toLocaleString("vi-VN",{style:"currency",currency:"VND"}),ge=a=>a>=1e9?`${(a/1e9).toFixed(1)} Tỷ`:a>=1e6?`${(a/1e6).toFixed(1)} Triệu`:a>=1e3?`${(a/1e3).toFixed(1)}K`:a;function xe(){const a=v.useRef(null),[r,n]=v.useState(()=>{const t=localStorage.getItem("expenses");return t?JSON.parse(t):he}),[g,i]=v.useState(X),[h,F]=v.useState({category:"all",searchTerm:"",dateFrom:"",dateTo:"",minAmount:"",maxAmount:""}),[_,S]=v.useState({field:"date",order:"desc"}),[k,I]=v.useState(null),b=t=>localStorage.setItem("expenses",JSON.stringify(t)),x=t=>i({...g,[t.target.name]:t.target.value}),j=t=>F({...h,[t.target.name]:t.target.value}),c=(t,u)=>[...t,{...u,id:Date.now()}],l=(t,u)=>t.map(y=>y.id===u.id?{...y,...u}:y),o=t=>{n(u=>{const y=t.id?l(u,t):c(u,t);return b(y),y}),m()},m=()=>{I(null),i(X)},T=t=>{I(t.id),i(t),a.current?.scrollIntoView({behavior:"smooth"})},D=t=>{window.confirm("Bạn có chắc muốn xóa chi tiêu này?")&&n(u=>{const y=u.filter(B=>B.id!==t);return b(y),y})},A=t=>{const{category:u,dateFrom:y,dateTo:B,minAmount:z,maxAmount:V,searchTerm:ee}=h,L=new Date(t.date),Q=ee.toLowerCase();return!(u!=="all"&&t.category!==u||y&&new Date(y)>L||B&&new Date(B)<L||z&&t.amount<z||V&&t.amount>V||Q&&!t.description.toLowerCase().includes(Q))},E=t=>{let u="asc";t===_.field&&_.order==="asc"&&(u="desc"),S({field:t,order:u})},$=(t,u)=>{const{field:y,order:B}=_;let z=0;return y==="date"&&(z=new Date(t.date)-new Date(u.date)),y==="amount"&&(z=t.amount-u.amount),y==="category"&&(z=R.indexOf(t.category)-R.indexOf(u.category)),y==="description"&&(z=t.description.localeCompare(u.description)),B==="asc"?z:-z},M=r.filter(A).sort($),s=M.reduce((t,u)=>t+Number(u.amount),0),d=R.map(t=>{const u=M.filter(y=>y.category===t).reduce((y,B)=>y+Number(B.amount),0);return{category:t,amount:u}}),C=g.description&&g.amount;return e.jsxs("div",{ref:a,className:"expense-tracker",children:[e.jsx("h1",{children:"Quản Lý Chi Tiêu"}),e.jsxs(f,{className:"expense-form",children:[e.jsx(f.Header,{children:e.jsx(f.Title,{children:k?"Chỉnh sửa chi tiêu":"Thêm chi tiêu mới"})}),e.jsx(f.Content,{children:e.jsxs("form",{children:[e.jsx(N,{label:"Mô tả",name:"description",value:g.description,onChange:x,placeholder:"Nhập mô tả"}),e.jsx(N,{label:"Số tiền",type:"number",name:"amount",value:g.amount,onChange:x}),e.jsx(O,{label:"Danh mục",name:"category",value:g.category,onChange:x,options:R.map(t=>({value:t,label:t}))}),e.jsx(N,{label:"Ngày",type:"date",name:"date",value:g.date,onChange:x}),e.jsxs("div",{className:"expense-input",children:[k&&e.jsx(w,{variant:"ghost",onClick:m,children:"Hủy"}),e.jsx(w,{variant:"primary",disabled:!C,onClick:()=>o({...g,id:k}),children:k?"Cập nhật":"Thêm"})]})]})})]}),!k&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"filters",children:[e.jsx(N,{placeholder:"Tìm kiếm theo mô tả",name:"searchTerm",value:h.searchTerm,onChange:j}),e.jsx(O,{value:h.category,name:"category",onChange:j,options:[{value:"all",label:"Tất cả"},...R.map(t=>({value:t,label:t}))]})]}),e.jsxs("div",{className:"filters",children:[e.jsx(N,{type:"date",name:"dateFrom",value:h.dateFrom,onChange:j,label:"Từ ngày"}),e.jsx(N,{type:"date",name:"dateTo",value:h.dateTo,onChange:j,label:"Đến ngày"})]}),e.jsxs("div",{className:"filters",children:[e.jsx(N,{type:"number",name:"minAmount",placeholder:"Tối thiểu",value:h.minAmount,onChange:j}),e.jsx(N,{type:"number",name:"maxAmount",placeholder:"Tối đa",value:h.maxAmount,onChange:j})]}),e.jsxs(f,{className:"statistics",children:[e.jsx(f.Header,{children:e.jsx(f.Title,{children:"Thống kê"})}),e.jsxs(f.Content,{children:[e.jsxs("p",{children:["Tổng chi tiêu: ",W(s)]}),e.jsx("div",{className:"category-bars",children:d.map(t=>t.amount>0?e.jsxs("div",{className:"bar",children:[e.jsx("span",{className:"bar-label",children:t.category}),e.jsx("div",{className:"bar-fill",style:{"--width":`${t.amount/s*100}%`},children:ge(t.amount)})]},t.category):null)})]})]})]}),e.jsxs("div",{className:"expense-list",children:[e.jsx("h2",{children:"Danh sách chi tiêu"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{onClick:()=>E("description"),children:"Mô tả"}),e.jsx("th",{onClick:()=>E("amount"),children:"Số tiền"}),e.jsx("th",{onClick:()=>E("category"),children:"Danh mục"}),e.jsx("th",{onClick:()=>E("date"),children:"Ngày (mm/dd/yyyy)"}),e.jsx("th",{children:"Hành động"})]})}),e.jsx("tbody",{children:M.length>0?M.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.description}),e.jsx("td",{children:W(t.amount)}),e.jsx("td",{children:t.category}),e.jsx("td",{children:ve(t.date)}),e.jsxs("td",{children:[e.jsx(w,{variant:"secondary",size:"sm",onClick:()=>T(t),children:"Sửa"}),e.jsx(w,{variant:"danger",size:"sm",onClick:()=>D(t.id),children:"Xóa"})]})]},t.id)):e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:5,children:"Không có chi tiêu nào"})})})]})]})]})}function fe(){return e.jsxs(p,{children:[e.jsx(p.Header,{order:5,title:"Expense Tracker (Challenge)"}),e.jsx(p.Description,{children:`

`}),e.jsx(p.Demo,{children:e.jsx(xe,{})}),e.jsx(p.Code,{children:`
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

`})]})}const Z={1:re,2:de,3:me,4:pe,5:fe},Ne=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(te,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 6"}),e.jsx("p",{className:"day-subtitle",children:"useState Mastery"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu sâu về useState hook"}),e.jsx("li",{children:"Lazy initialization"}),e.jsx("li",{children:"State immutability"}),e.jsx("li",{children:"Best practices và patterns"}),e.jsx("li",{children:"Tránh những lỗi phổ biến"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(Z).map(a=>{const r=Z[a];return r?e.jsx(r,{},a):null})})]});export{Ne as default};
