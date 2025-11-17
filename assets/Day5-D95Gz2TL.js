import{r as reactExports,j as jsxRuntimeExports,C as CodeXml}from"./index-Ci6_VdJn.js";/* empty css               */import{E as ExerciseCard}from"./ExerciseCard-DhUkAPVk.js";import{C as Card,I as Input,B as Button,a as Checkbox,S as Select}from"./tooltip-DPHFM_0R.js";const DATA_KEY="todos";function loadTodos(){try{const s=localStorage.getItem(DATA_KEY);if(!s)return[];const e=JSON.parse(s);return Array.isArray(e)?e:[]}catch(s){return console.error("Invalid todos data:",s),localStorage.removeItem(DATA_KEY),[]}}function TodoList(){const[s,e]=reactExports.useState(()=>loadTodos()),[t,r]=reactExports.useState(""),[n,a]=reactExports.useState("all");reactExports.useEffect(()=>{localStorage.setItem(DATA_KEY,JSON.stringify(s))},[s]);const c=()=>{t.trim()&&(e(o=>[...o,{id:Date.now(),text:t.trim(),completed:!1}]),r(""))},u=o=>{e(x=>x.map(g=>g.id===o?{...g,completed:!g.completed}:g))},l=o=>{e(x=>x.filter(g=>g.id!==o))},p=s.filter(o=>n==="active"?!o.completed:n==="completed"?o.completed:!0);return jsxRuntimeExports.jsx("div",{className:"todo-app",children:jsxRuntimeExports.jsxs(Card,{className:"todo-card",children:[jsxRuntimeExports.jsx("h2",{className:"todo-title",children:"Todo List"}),jsxRuntimeExports.jsxs("div",{className:"todo-input-group",children:[jsxRuntimeExports.jsx(Input,{placeholder:"What needs to be done?",value:t,onChange:o=>r(o.target.value),onKeyPress:o=>o.key==="Enter"&&c(),className:"todo-input"}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:c,children:"Add"})]}),jsxRuntimeExports.jsx("div",{className:"filter-group",children:["all","active","completed"].map(o=>jsxRuntimeExports.jsx(Button,{variant:n===o?"primary":"ghost",size:"sm",onClick:()=>a(o),className:"filter-btn",children:o.charAt(0).toUpperCase()+o.slice(1)},o))}),jsxRuntimeExports.jsx("ul",{className:"todo-list",children:p.length===0?jsxRuntimeExports.jsx("p",{className:"empty-state",children:n==="all"?"No todos yet. Add one!":`No ${n} todos.`}):p.map(o=>jsxRuntimeExports.jsxs("li",{className:"todo-item",children:[jsxRuntimeExports.jsx(Checkbox,{checked:o.completed,onChange:()=>u(o.id)}),jsxRuntimeExports.jsx("span",{className:`todo-text ${o.completed?"completed":""}`,children:o.text}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"sm",onClick:()=>l(o.id),className:"delete-btn",children:"Delete"})]},o.id))}),jsxRuntimeExports.jsx("div",{className:"todo-stats",children:jsxRuntimeExports.jsxs("span",{children:[s.filter(o=>!o.completed).length," active •"," ",s.filter(o=>o.completed).length," completed"]})})]})})}function Exercise1(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:1,title:"Convert Class to Function"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
// Refactor các class components sau thành function components:
// TODO: Convert to function component
import { Component } from "react";

// TODO: Convert to function component
class TodoList extends Component {
  state = {
    todos: [],
    inputValue: '',
    filter: 'all' // 'all', 'active', 'completed'
  };

  componentDidMount() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.setState({ todos: JSON.parse(saved) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = () => {
    if (this.state.inputValue.trim()) {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            text: prevState.inputValue,
            completed: false
          }
        ],
        inputValue: ''
      }));
    }
  };

  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    switch (filter) {
      case 'active':
        return todos.filter(t => !t.completed);
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  };

  render() {
    const filteredTodos = this.getFilteredTodos();

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && this.addTodo()}
        />
        <button onClick={this.addTodo}>Add</button>

        <div>
          {['all', 'active', 'completed'].map(filter => (
            <button
              key={filter}
              onClick={() => this.setState({ filter })}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoList;
`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(TodoList,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Checkbox, Input } from "@ui";
import { useEffect, useState } from "react";

const DATA_KEY = "todos";

/**
 * ✅ Hàm tiện ích load todos từ localStorage
 * - Trả về mảng todos hợp lệ
 * - Nếu lỗi JSON hoặc dữ liệu không phải mảng, trả về []
 */
function loadTodos() {
  try {
    const saved = localStorage.getItem(DATA_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Invalid todos data:", e);
    localStorage.removeItem(DATA_KEY);
    return [];
  }
}

/* ----------------------------- BONUS -----------------------------
Nếu không dùng lazy initializer, có thể dùng ref để tránh overwrite
lần đầu khi component mount:

const isFirstRender = useRef(true);

useEffect(() => {
  const saved = localStorage.getItem(DATA_KEY);
  if (saved) setTodos(JSON.parse(saved));
}, []);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
}, [todos]);
------------------------------------------------------------------*/

export default function TodoList() {
  // ✅ Lazy initializer: gọi hàm loadTodos ngay khi tạo state
  const [todos, setTodos] = useState(() => loadTodos());

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  // Lưu todos xuống localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem(DATA_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue.trim(), completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <Card className="todo-card">
        <h2 className="todo-title">Todo List</h2>

        {/* Add Todo */}
        <div className="todo-input-group">
          <Input
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
            className="todo-input"
          />
          <Button variant="primary" size="md" onClick={addTodo}>
            Add
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="filter-group">
          {["all", "active", "completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "ghost"}
              size="sm"
              onClick={() => setFilter(f)}
              className="filter-btn"
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">
              {filter === "all"
                ? "No todos yet. Add one!"
                : \`No \${filter} todos.\`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <Checkbox
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={\`todo-text \${todo.completed ? "completed" : ""}\`}
                >
                  {todo.text}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>

        {/* Stats */}
        <div className="todo-stats">
          <span>
            {todos.filter((t) => !t.completed).length} active •{" "}
            {todos.filter((t) => t.completed).length} completed
          </span>
        </div>
      </Card>
    </div>
  );
}

        `})]})}class RegistrationForm extends reactExports.Component{state={formData:{username:"",email:"",password:"",confirmPassword:""},errors:{},touched:{},isSubmitting:!1};validateField=(e,t)=>{switch(e){case"username":return t.trim().length<3?"Username must be at least 3 characters":null;case"email":return/^\S+@\S+\.\S+$/.test(t)?null:"Please enter a valid email";case"password":return t.length<6?"Password must be at least 6 characters":null;case"confirmPassword":return t!==this.state.formData.password?"Passwords do not match":null;default:return null}};validateAll=()=>{const{formData:e}=this.state,t={};return Object.keys(e).forEach(r=>{const n=this.validateField(r,e[r]);n&&(t[r]=n)}),t};handleChange=e=>{const{name:t,value:r}=e.target;this.setState(n=>({formData:{...n.formData,[t]:r},errors:{...n.errors,[t]:null}}))};handleBlur=e=>{const{name:t,value:r}=e.target,n=this.validateField(t,r);this.setState(a=>({touched:{...a.touched,[t]:!0},errors:{...a.errors,[t]:n}}))};handleSubmit=async e=>{e.preventDefault();const t=this.validateAll(),r=Object.values(t).some(n=>n!==null);this.setState({touched:{username:!0,email:!0,password:!0,confirmPassword:!0},errors:t}),!r&&(this.setState({isSubmitting:!0}),await new Promise(n=>setTimeout(n,2e3)),console.log("Form submitted:",this.state.formData),alert("Registration successful!"),this.setState({isSubmitting:!1}))};isFormValid=()=>{const{errors:e}=this.state;return!Object.values(e).some(t=>t!==null)};render(){const{formData:e,errors:t,touched:r,isSubmitting:n}=this.state;return jsxRuntimeExports.jsx("div",{className:"registration-container",children:jsxRuntimeExports.jsxs(Card,{className:"registration-card",children:[jsxRuntimeExports.jsx("h2",{className:"form-title",children:"Create Account"}),jsxRuntimeExports.jsxs("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input,{type:"text",name:"username",placeholder:"Username",value:e.username,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),r.username&&t.username&&jsxRuntimeExports.jsx("p",{className:"error-text",children:t.username})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),r.email&&t.email&&jsxRuntimeExports.jsx("p",{className:"error-text",children:t.email})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input,{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),r.password&&t.password&&jsxRuntimeExports.jsx("p",{className:"error-text",children:t.password})]}),jsxRuntimeExports.jsxs("div",{className:"form-group",children:[jsxRuntimeExports.jsx(Input,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:e.confirmPassword,onChange:this.handleChange,onBlur:this.handleBlur,className:"form-input"}),r.confirmPassword&&t.confirmPassword&&jsxRuntimeExports.jsx("p",{className:"error-text",children:t.confirmPassword})]}),jsxRuntimeExports.jsx(Button,{variant:"primary",size:"lg",type:"submit",disabled:n||!this.isFormValid(),className:"submit-btn",children:n?"Creating Account...":"Register"})]}),jsxRuntimeExports.jsx("div",{className:"form-footer",children:jsxRuntimeExports.jsxs("p",{children:["Already have an account? ",jsxRuntimeExports.jsx("span",{className:"login-link",children:"Login"})]})})]})})}}function Exercise2(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:2,title:" Form with Validation (Class Component)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
Tạo form với validation using class component (để practice):
// TODO: Implement class component
class RegistrationForm extends Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    errors: {},
    touched: {},
    isSubmitting: false
  };

  // TODO:
  // 1. Validate field on blur
  // 2. Validate entire form on submit
  // 3. Show errors only for touched fields
  // 4. Disable submit if form invalid
  // 5. Handle async submission

  validateField = (name, value) => {
    // TODO: Return error message or null
    // - username: min 3 chars
    // - email: valid email
    // - password: min 6 chars
    // - confirmPassword: must match password
  };

  handleChange = (e) => {
    // TODO: Update formData
  };

  handleBlur = (e) => {
    // TODO: Mark field as touched, validate
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate all, submit if valid
  };

  render() {
    // TODO: Render form with error messages
  }
}

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(RegistrationForm,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Component } from "react";
import { Card, Input, Button } from "@ui";

class RegistrationForm extends Component {
  state = {
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
    touched: {},
    isSubmitting: false,
  };

  validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim().length < 3
          ? "Username must be at least 3 characters"
          : null;
      case "email":
        return !/^\\S+@\\S+\\.\\S+$/.test(value)
          ? "Please enter a valid email"
          : null;
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : null;
      case "confirmPassword":
        return value !== this.state.formData.password
          ? "Passwords do not match"
          : null;
      default:
        return null;
    }
  };

  validateAll = () => {
    const { formData } = this.state;
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = this.validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    return errors;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      // Clear error on change
      errors: {
        ...prevState.errors,
        [name]: null,
      },
    }));
  };

  handleBlur = (e) => {
    const { name, value } = e.target;
    const error = this.validateField(name, value);
    this.setState((prevState) => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateAll();
    const hasErrors = Object.values(errors).some((err) => err !== null);

    // Mark all fields as touched
    this.setState({
      touched: {
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
      },
      errors,
    });

    if (hasErrors) return;

    this.setState({ isSubmitting: true });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", this.state.formData);
    alert("Registration successful!");
    this.setState({ isSubmitting: false });
  };

  isFormValid = () => {
    const { errors } = this.state;
    return !Object.values(errors).some((err) => err !== null);
  };

  render() {
    const { formData, errors, touched, isSubmitting } = this.state;

    return (
      <div className="registration-container">
        <Card className="registration-card">
          <h2 className="form-title">Create Account</h2>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.username && errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.email && errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.password && errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="form-input"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting || !this.isFormValid()}
              className="submit-btn"
            >
              {isSubmitting ? "Creating Account..." : "Register"}
            </Button>
          </form>

          <div className="form-footer">
            <p>
              Already have an account? <span className="login-link">Login</span>
            </p>
          </div>
        </Card>
      </div>
    );
  }
}

export default RegistrationForm;
`})]})}const sampleData=[{id:1,name:"Alice",email:"alice@example.com",role:"Admin",status:"Active"},{id:2,name:"Bob",email:"bob@example.com",role:"User",status:"Inactive"},{id:3,name:"Charlie",email:"charlie@example.com",role:"User",status:"Active"},{id:4,name:"David",email:"david@example.com",role:"User",status:"Inactive"},{id:5,name:"Eve",email:"eve@example.com",role:"Admin",status:"Active"},{id:6,name:"Frank",email:"frank@example.com",role:"User",status:"Active"}];class DataTableClass extends reactExports.Component{state={data:this.props.initialData||sampleData,sortKey:null,sortDirection:"asc",currentPage:1,itemsPerPage:10,searchTerm:"",selectedRows:new Set};tableRef=null;handleSort=e=>{const{sortKey:t,sortDirection:r,data:n}=this.state,a=t===e&&r==="asc"?"desc":"asc",c=[...n].sort((u,l)=>u[e]<l[e]?a==="asc"?-1:1:u[e]>l[e]?a==="asc"?1:-1:0);this.setState({data:c,sortKey:e,sortDirection:a,currentPage:1})};handleSearch=e=>{this.setState({searchTerm:e.target.value,currentPage:1})};handleSelectRow=e=>{this.setState(t=>{const r=new Set(t.selectedRows);return r.has(e)?r.delete(e):r.add(e),{selectedRows:r}})};handleSelectAll=()=>{const e=this.getPageData(),t=e.every(r=>this.state.selectedRows.has(r.id));this.setState(r=>{const n=new Set(r.selectedRows);return e.forEach(a=>{t?n.delete(a.id):n.add(a.id)}),{selectedRows:n}})};handleBulkDelete=()=>{window.confirm(`Delete ${this.state.selectedRows.size} items?`)&&this.setState(e=>({data:e.data.filter(t=>!e.selectedRows.has(t.id)),selectedRows:new Set}))};getFilteredData=()=>{const{data:e,searchTerm:t}=this.state;if(!Array.isArray(e))return[];if(!t)return e;const r=t.toLowerCase();return e.filter(n=>Object.values(n).some(a=>String(a).toLowerCase().includes(r)))};getPageData=()=>{const{currentPage:e,itemsPerPage:t}=this.state,r=this.getFilteredData(),n=(e-1)*t;return r.slice(n,n+t)};render(){const{selectedRows:e,sortKey:t,sortDirection:r,currentPage:n,itemsPerPage:a}=this.state,c=this.getPageData(),l=this.getFilteredData().length,p=Math.max(1,Math.ceil(l/a));return jsxRuntimeExports.jsx("div",{className:"datatable-class",children:jsxRuntimeExports.jsx(DataTableUI,{data:c,sortKey:t,sortDirection:r,onSort:this.handleSort,searchTerm:this.state.searchTerm,onSearch:this.handleSearch,selectedRows:e,onSelectRow:this.handleSelectRow,onSelectAll:this.handleSelectAll,onBulkDelete:this.handleBulkDelete,currentPage:n,totalPages:p,onPageChange:o=>this.setState({currentPage:o}),itemsPerPage:a,onItemsPerPageChange:o=>this.setState({itemsPerPage:o,currentPage:1}),totalItems:l})})}}function DataTable({initialData:s}){const[e,t]=reactExports.useState(s||sampleData),[r,n]=reactExports.useState(null),[a,c]=reactExports.useState("asc"),[u,l]=reactExports.useState(1),[p,o]=reactExports.useState(10),[x,g]=reactExports.useState(""),[f,E]=reactExports.useState(new Set),y=reactExports.useRef(null),C=reactExports.useMemo(()=>{let m=[...Array.isArray(e)?e:[]];if(x){const h=x.toLowerCase();m=m.filter(j=>Object.values(j).some(T=>String(T).toLowerCase().includes(h)))}return r&&m.sort((h,j)=>h[r]<j[r]?a==="asc"?-1:1:h[r]>j[r]?a==="asc"?1:-1:0),m},[e,x,r,a]),i=C.length,v=Math.max(1,Math.ceil(i/p)),R=reactExports.useMemo(()=>{const d=(u-1)*p;return C.slice(d,d+p)},[C,u,p]),b=reactExports.useCallback(d=>{c(m=>r===d&&m==="asc"?"desc":"asc"),n(d),l(1)},[r]),S=d=>{g(d.target.value),l(1)},k=reactExports.useCallback(d=>{E(m=>{const h=new Set(m);return h.has(d)?h.delete(d):h.add(d),h})},[]),D=reactExports.useCallback(()=>{const d=R.every(m=>f.has(m.id));E(m=>{const h=new Set(m);return R.forEach(j=>{d?h.delete(j.id):h.add(j.id)}),h})},[R,f]),w=reactExports.useCallback(()=>{window.confirm(`Delete ${f.size} items?`)&&(t(d=>d.filter(m=>!f.has(m.id))),E(new Set))},[f]),P=reactExports.useCallback(d=>{o(d),l(1)},[]);return jsxRuntimeExports.jsx("div",{className:"datatable-function",children:jsxRuntimeExports.jsx(DataTableUI,{data:R,sortKey:r,sortDirection:a,onSort:b,searchTerm:x,onSearch:S,selectedRows:f,onSelectRow:k,onSelectAll:D,onBulkDelete:w,currentPage:u,totalPages:v,totalItems:i,onPageChange:l,itemsPerPage:p,onItemsPerPageChange:P,ref:y})})}const DataTableUI=({data:s,sortKey:e,sortDirection:t,onSort:r,searchTerm:n,onSearch:a,selectedRows:c,onSelectRow:u,onSelectAll:l,onBulkDelete:p,currentPage:o,totalPages:x,onPageChange:g,itemsPerPage:f,onItemsPerPageChange:E,totalItems:y})=>{const C=s.length>0&&s.every(i=>c.has(i.id));return jsxRuntimeExports.jsxs(Card,{className:"datatable-card",children:[jsxRuntimeExports.jsxs("div",{className:"datatable-header",children:[jsxRuntimeExports.jsx(Input,{placeholder:"Search...",value:n,onChange:a,icon:"🔍",className:"datatable-search"}),c.size>0&&jsxRuntimeExports.jsxs(Button,{variant:"danger",size:"sm",onClick:p,children:["Delete Selected (",c.size,")"]})]}),jsxRuntimeExports.jsx("div",{className:"table-wrapper",children:jsxRuntimeExports.jsxs("table",{className:"datatable",children:[jsxRuntimeExports.jsx("thead",{children:jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("th",{children:jsxRuntimeExports.jsx(Checkbox,{checked:C,onChange:l})}),["id","name","email","role","status"].map(i=>jsxRuntimeExports.jsxs("th",{onClick:()=>r(i),className:"sortable",children:[i.charAt(0).toUpperCase()+i.slice(1),e===i&&(t==="asc"?" Up":" Down")]},i))]})}),jsxRuntimeExports.jsx("tbody",{children:s.map(i=>jsxRuntimeExports.jsxs("tr",{className:c.has(i.id)?"selected":"",children:[jsxRuntimeExports.jsx("td",{children:jsxRuntimeExports.jsx(Checkbox,{checked:c.has(i.id),onChange:()=>u(i.id)})}),jsxRuntimeExports.jsx("td",{children:i.id}),jsxRuntimeExports.jsx("td",{children:i.name}),jsxRuntimeExports.jsx("td",{children:i.email}),jsxRuntimeExports.jsx("td",{children:i.role}),jsxRuntimeExports.jsx("td",{children:jsxRuntimeExports.jsx("span",{className:`status ${i.status.toLowerCase()}`,children:i.status})})]},i.id))})]})}),jsxRuntimeExports.jsxs("div",{className:"datatable-footer",children:[jsxRuntimeExports.jsxs("div",{className:"items-per-page flex items-center gap-1",children:[jsxRuntimeExports.jsx("span",{children:"Shows "}),jsxRuntimeExports.jsx(Select,{value:f,onChange:i=>E(Number(i.target.value)),options:[5,10,25,50].map(i=>({value:i,label:`${i}`}))})]}),jsxRuntimeExports.jsxs("div",{className:"pagination",children:[jsxRuntimeExports.jsx(Button,{size:"sm",disabled:o===1,onClick:()=>g(o-1),children:"Previous"}),jsxRuntimeExports.jsxs("span",{className:"page-info",children:["Page ",o," of ",x," (",y," items)"]}),jsxRuntimeExports.jsx(Button,{size:"sm",disabled:o===x,onClick:()=>g(o+1),children:"Next"})]})]})]})};function Exercise3(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:3,title:"Data Table with Sorting (Both versions)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
        
/* ==================== SAMPLE DATA ==================== */
const initialData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User", status: "Active" },
  { id: 4, name: "David", email: "david@example.com", role: "User", status: "Inactive" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "User", status: "Active" },
];

/* ======================================== */
//Implement cả Class và Function version:
// Version 1: Class Component
class DataTable extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: 'asc',
    currentPage: 1,
    itemsPerPage: 10
  };

  // TODO:
  // 1. Sort functionality
  // 2. Pagination
  // 3. Search filter
  // 4. Select rows
  // 5. Bulk actions
}

// Version 2: Function Component
function DataTable({ initialData }) {
  // TODO: Convert above to hooks
}

`}),jsxRuntimeExports.jsxs(ExerciseCard.Demo,{children:[jsxRuntimeExports.jsx("h3",{children:"// Version 1: Class Component"}),jsxRuntimeExports.jsx(DataTableClass,{}),jsxRuntimeExports.jsx("h3",{children:"// Version 2: Function Component"}),jsxRuntimeExports.jsx(DataTable,{})]}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card, Checkbox, Input, Select } from "@ui";
import { Component, useCallback, useMemo, useRef, useState } from "react";

/* ==================== CLASS COMPONENT ==================== */
class DataTableClass extends Component {
  state = {
    data: this.props.initialData,
    sortKey: null,
    sortDirection: "asc",
    currentPage: 1,
    itemsPerPage: 10,
    searchTerm: "",
    selectedRows: new Set(),
  };

  // ===== Lazy initializer example for ref =====
  // Bonus: dùng ref để giữ tham chiếu DOM hoặc dữ liệu không gây render lại
  tableRef = null; // ref có thể gán cho table DOM
  /* ví dụ:
     this.tableRef = React.createRef();
     <table ref={this.tableRef}>...</table>
  */

  handleSort = (key) => {
    const { sortKey, sortDirection, data } = this.state;
    const direction =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    this.setState({
      data: sortedData,
      sortKey: key,
      sortDirection: direction,
      currentPage: 1,
    });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value, currentPage: 1 });
  };

  handleSelectRow = (id) => {
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      selected.has(id) ? selected.delete(id) : selected.add(id);
      return { selectedRows: selected };
    });
  };

  handleSelectAll = () => {
    const pageData = this.getPageData();
    const allSelected = pageData.every((item) =>
      this.state.selectedRows.has(item.id)
    );
    this.setState((prev) => {
      const selected = new Set(prev.selectedRows);
      pageData.forEach((item) => {
        allSelected ? selected.delete(item.id) : selected.add(item.id);
      });
      return { selectedRows: selected };
    });
  };

  handleBulkDelete = () => {
    if (!window.confirm(\`Delete \${this.state.selectedRows.size} items?\`))
      return;
    this.setState((prev) => ({
      data: prev.data.filter((item) => !prev.selectedRows.has(item.id)),
      selectedRows: new Set(),
    }));
  };

  // ===== Lazy initializer function tách ngoài =====
  getFilteredData = () => {
    const { data, searchTerm } = this.state;
    if (!Array.isArray(data)) return []; // bảo vệ tránh undefined
    if (!searchTerm) return data;
    const term = searchTerm.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(term)
      )
    );
  };

  getPageData = () => {
    const { currentPage, itemsPerPage } = this.state;
    const filtered = this.getFilteredData();
    const start = (currentPage - 1) * itemsPerPage;
    const sliced = filtered.slice(start, start + itemsPerPage);
    return sliced;
  };

  render() {
    const { selectedRows, sortKey, sortDirection, currentPage, itemsPerPage } =
      this.state;
    const pageData = this.getPageData();
    const filtered = this.getFilteredData();
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    return (
      <div className="datatable-class">
        <DataTableUI
          data={pageData}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={this.handleSort}
          searchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
          selectedRows={selectedRows}
          onSelectRow={this.handleSelectRow}
          onSelectAll={this.handleSelectAll}
          onBulkDelete={this.handleBulkDelete}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => this.setState({ currentPage: page })}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) =>
            this.setState({ itemsPerPage: val, currentPage: 1 })
          }
          totalItems={totalItems}
        />
      </div>
    );
  }
}

/* ==================== FUNCTION COMPONENT ==================== */
function DataTable({ initialData }) {
  const [data, setData] = useState(initialData);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Bonus: useRef lazy initializer
  const tableRef = useRef(null);

  // ===== Filter + sort + pagination =====
  const filteredData = useMemo(() => {
    const arr = Array.isArray(data) ? data : [];
    let result = [...arr];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(term)
        )
      );
    }

    if (sortKey) {
      result.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, sortKey, sortDirection]);

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // ===== Handlers =====
  const handleSort = useCallback(
    (key) => {
      setSortDirection((prev) =>
        sortKey === key && prev === "asc" ? "desc" : "asc"
      );
      setSortKey(key);
      setCurrentPage(1);
    },
    [sortKey]
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const toggleRow = useCallback((id) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    const allSelected = pageData.every((item) => selectedRows.has(item.id));
    setSelectedRows((prev) => {
      const next = new Set(prev);
      pageData.forEach((item) => {
        allSelected ? next.delete(item.id) : next.add(item.id);
      });
      return next;
    });
  }, [pageData, selectedRows]);

  const handleBulkDelete = useCallback(() => {
    if (!window.confirm(\`Delete \${selectedRows.size} items?\`)) return;
    setData((prev) => prev.filter((item) => !selectedRows.has(item.id)));
    setSelectedRows(new Set());
  }, [selectedRows]);

  const handleItemsPerPageChange = useCallback((val) => {
    setItemsPerPage(val);
    setCurrentPage(1);
  }, []);

  return (
    <div className="datatable-function">
      <DataTableUI
        data={pageData}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={handleSort}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        selectedRows={selectedRows}
        onSelectRow={toggleRow}
        onSelectAll={toggleAll}
        onBulkDelete={handleBulkDelete}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        ref={tableRef} // Bonus: ref
      />
    </div>
  );
}

/* ==================== SHARED UI COMPONENT ==================== */
const DataTableUI = ({
  data,
  sortKey,
  sortDirection,
  onSort,
  searchTerm,
  onSearch,
  selectedRows,
  onSelectRow,
  onSelectAll,
  onBulkDelete,
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
}) => {
  const allSelectedOnPage =
    data.length > 0 && data.every((item) => selectedRows.has(item.id));

  return (
    <Card className="datatable-card">
      <div className="datatable-header">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearch}
          icon="🔍"
          className="datatable-search"
        />
        {selectedRows.size > 0 && (
          <Button variant="danger" size="sm" onClick={onBulkDelete}>
            Delete Selected ({selectedRows.size})
          </Button>
        )}
      </div>

      <div className="table-wrapper">
        <table className="datatable">
          <thead>
            <tr>
              <th>
                <Checkbox checked={allSelectedOnPage} onChange={onSelectAll} />
              </th>
              {["id", "name", "email", "role", "status"].map((key) => (
                <th key={key} onClick={() => onSort(key)} className="sortable">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortKey === key &&
                    (sortDirection === "asc" ? " Up" : " Down")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className={selectedRows.has(item.id) ? "selected" : ""}
              >
                <td>
                  <Checkbox
                    checked={selectedRows.has(item.id)}
                    onChange={() => onSelectRow(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <span className={\`status \${item.status.toLowerCase()}\`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="datatable-footer">
        <div className="items-per-page flex items-center gap-1">
          <span>Shows </span>
          <Select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            options={[5, 10, 25, 50].map((n) => ({
              value: n,
              label: \`\${n}\`,
            }))}
          />
        </div>
        <div className="pagination">
          <Button
            size="sm"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span className="page-info">
            Page {currentPage} of {totalPages} ({totalItems} items)
          </span>
          <Button
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { DataTable, DataTableClass };

`})]})}const logErrorToService=(s,e)=>{console.error("ErrorBoundary caught an error:",s,e)};let ErrorBoundary$1=class extends reactExports.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t}),logErrorToService(e,t)}handleRetry=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};componentDidUpdate(e){this.props.resetKey&&this.props.resetKey!==e.resetKey&&this.setState({hasError:!1,error:null,errorInfo:null})}render(){const{hasError:e,error:t,errorInfo:r}=this.state,{children:n,fallback:a}=this.props;return e?a||jsxRuntimeExports.jsx("div",{className:"error-boundary",children:jsxRuntimeExports.jsxs(Card,{className:"error-card",children:[jsxRuntimeExports.jsx("div",{className:"error-icon",children:"Warning"}),jsxRuntimeExports.jsx("h2",{className:"error-title",children:"Something went wrong"}),jsxRuntimeExports.jsx("p",{className:"error-message",children:t?.message||"An unexpected error occurred"}),jsxRuntimeExports.jsxs("details",{className:"error-details",children:[jsxRuntimeExports.jsx("summary",{children:"View error details"}),jsxRuntimeExports.jsx("pre",{children:r?.componentStack})]}),jsxRuntimeExports.jsxs("div",{className:"error-actions",children:[jsxRuntimeExports.jsx(Button,{variant:"primary",size:"md",onClick:this.handleRetry,children:"Try Again"}),jsxRuntimeExports.jsx(Button,{variant:"ghost",size:"md",onClick:()=>window.location.reload(),children:"Reload Page"})]})]})}):n}};class BuggyComponent extends reactExports.Component{state={shouldThrow:!1};componentDidUpdate(){if(this.state.shouldThrow)throw new Error("Intentional error for testing")}render(){return jsxRuntimeExports.jsxs(Card,{className:"buggy-card",children:[jsxRuntimeExports.jsx("h3",{children:"Buggy Component (For Testing)"}),jsxRuntimeExports.jsx("p",{children:"Click button to trigger an error"}),jsxRuntimeExports.jsx(Button,{variant:"danger",onClick:()=>this.setState({shouldThrow:!0}),children:"Trigger Error"})]})}}function Exercise4(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:4,title:"Error Boundary Usage"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
// TODO: Create custom ErrorBoundary
class ErrorBoundary extends Component {
  // TODO:
  // 1. Catch errors
  // 2. Log to service
  // 3. Show fallback UI
  // 4. Retry mechanism
  // 5. Reset on navigation
}

// TODO: Component that throws error
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      throw new Error('Intentional error for testing');
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ shouldThrow: true })}>
          Trigger Error
        </button>
      </div>
    );
  }
}

// Usage
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ErrorBoundary$1,{children:jsxRuntimeExports.jsx(BuggyComponent,{})})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
import { Button, Card } from "@ui";
import { Component } from "react";

// Fake error logging service
const logErrorToService = (error, errorInfo) => {
  console.error("ErrorBoundary caught an error:", error, errorInfo);
  // Gửi đến Sentry, LogRocket, v.v.
  // fetch('/api/errors', { method: 'POST', body: JSON.stringify({ error, errorInfo }) });
};

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    // Cập nhật state để render fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log lỗi ra service
    this.setState({ errorInfo });
    logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    // Reset state → thử render lại children
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  // Reset khi props thay đổi (ví dụ: route thay đổi)
  componentDidUpdate(prevProps) {
    if (this.props.resetKey && this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: null, errorInfo: null });
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) return fallback;

      return (
        <div className="error-boundary">
          <Card className="error-card">
            <div className="error-icon">Warning</div>
            <h2 className="error-title">Something went wrong</h2>
            <p className="error-message">
              {error?.message || "An unexpected error occurred"}
            </p>

            <details className="error-details">
              <summary>View error details</summary>
              <pre>{errorInfo?.componentStack}</pre>
            </details>

            <div className="error-actions">
              <Button variant="primary" size="md" onClick={this.handleRetry}>
                Try Again
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    return children;
  }
}

//======= BuggyComponent ==============
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      // Ném lỗi để ErrorBoundary bắt
      throw new Error("Intentional error for testing");
    }
  }

  render() {
    return (
      <Card className="buggy-card">
        <h3>Buggy Component (For Testing)</h3>
        <p>Click button to trigger an error</p>
        <Button
          variant="danger"
          onClick={() => this.setState({ shouldThrow: true })}
        >
          Trigger Error
        </Button>
      </Card>
    );
  }
}
export { BuggyComponent, ErrorBoundary };

`})]})}class LifecycleDemo extends reactExports.Component{state={count:0,showChild:!0};logsRef={current:[]};parentRenderCount=0;log=e=>this.logsRef.current.push(`${new Date().toLocaleTimeString()}: ${e}`);componentDidMount(){this.log("Parent Class: componentDidMount")}componentDidUpdate(e,t){t.count!==this.state.count&&this.log(`Parent Class: count → ${this.state.count}`),t.showChild!==this.state.showChild&&this.log(`Parent Class: showChild → ${this.state.showChild}`)}componentWillUnmount(){this.log("Parent Class: cleanup (unmount)")}render(){this.parentRenderCount++,this.log(`Parent Class: render (${this.parentRenderCount})`);const{count:e,showChild:t}=this.state;return jsxRuntimeExports.jsxs(Card,{className:"lifecycle-card",children:[jsxRuntimeExports.jsx("h2",{children:"Class Component"}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"Parent Renders:"})," ",this.parentRenderCount]}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsxs(Button,{onClick:()=>this.setState({count:e+1}),variant:"primary",children:["Count (",e,")"]}),jsxRuntimeExports.jsxs(Button,{onClick:()=>this.setState({showChild:!t}),variant:"secondary",children:[t?"Hide":"Show"," Child"]}),jsxRuntimeExports.jsx(Button,{onClick:()=>{this.logsRef.current=[],this.forceUpdate()},variant:"danger",children:"Clear Logs"})]}),t&&jsxRuntimeExports.jsx(ChildClass,{log:this.log,count:e}),jsxRuntimeExports.jsx(LogsList,{logs:this.logsRef.current,title:"Class Logs"})]})}}class ChildClass extends reactExports.Component{childRenderCount=0;componentDidMount(){this.props.log("Child Class: Did Mount (~ useEffect[])")}componentDidUpdate(e){e.count!==this.props.count&&this.props.log(`Child Class: count → ${this.props.count}`)}componentWillUnmount(){this.props.log("Child Class: cleanup (unmount)")}render(){return this.childRenderCount++,this.props.log(`Child Class: render (${this.childRenderCount})`),jsxRuntimeExports.jsxs("div",{className:"child-box",children:["Child Class (count: ",this.props.count,") – Render #",this.childRenderCount]})}}function LifecycleFunction(){const[s,e]=reactExports.useState(0),[t,r]=reactExports.useState(!0),n=reactExports.useRef([]),a=reactExports.useRef(0),c=l=>n.current.push(`${new Date().toLocaleTimeString()}: ${l}`),u=()=>{n.current=[],e(l=>l+1)};return reactExports.useEffect(()=>(c("Function: useEffect (mount)"),()=>c("Function: useEffect cleanup (unmount)")),[]),reactExports.useEffect(()=>{s>0&&c(`Function: count → ${s}`)},[s]),a.current+=1,c(`Function: render (${a.current})`),jsxRuntimeExports.jsxs(Card,{className:"lifecycle-card",children:[jsxRuntimeExports.jsx("h2",{children:"Function Component"}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"Parent Renders:"})," ",a.current]}),jsxRuntimeExports.jsxs("div",{className:"controls",children:[jsxRuntimeExports.jsxs(Button,{onClick:()=>e(l=>l+1),variant:"primary",children:["Count (",s,")"]}),jsxRuntimeExports.jsxs(Button,{onClick:()=>r(l=>!l),variant:"secondary",children:[t?"Hide":"Show"," Child"]}),jsxRuntimeExports.jsx(Button,{onClick:u,variant:"danger",children:"Clear Logs"})]}),t&&jsxRuntimeExports.jsx(ChildFunction,{log:c,count:s}),jsxRuntimeExports.jsx(LogsList,{logs:n.current,title:"Function Logs"})]})}function ChildFunction({log:s,count:e}){const t=reactExports.useRef(0);return t.current+=1,reactExports.useEffect(()=>(s("Child Function: useEffect (mount)"),()=>s("Child Function: cleanup (unmount)")),[s]),reactExports.useEffect(()=>{s(`Child Function: count → ${e}`)},[e,s]),s(`Child Function: render (${t.current})`),jsxRuntimeExports.jsxs("div",{className:"child-box function",children:["Child Function (count: ",e,") – Render #",t.current]})}function LogsList({logs:s,title:e}){return jsxRuntimeExports.jsxs("div",{className:"logs",children:[jsxRuntimeExports.jsxs("h3",{children:[e," (",s.length,")"]}),s.length===0?jsxRuntimeExports.jsx("p",{children:"No logs yet..."}):jsxRuntimeExports.jsx("ul",{children:s.map((t,r)=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("code",{children:t})},r))})]})}function LifecyclePlayground(){return jsxRuntimeExports.jsxs("div",{className:"playground",children:[jsxRuntimeExports.jsx("h1",{children:"Lifecycle Playground"}),jsxRuntimeExports.jsxs("div",{className:"grid",children:[jsxRuntimeExports.jsx(LifecycleDemo,{}),jsxRuntimeExports.jsx(LifecycleFunction,{})]}),jsxRuntimeExports.jsxs("div",{className:"success",style:{marginTop:"2rem",padding:"1.5rem",background:"#16213e",borderRadius:"12px",border:"2px solid #00ff88",lineHeight:"2em"},children:[jsxRuntimeExports.jsx("h3",{style:{color:"#00ff88"},children:"SO SÁNH LIFECYCLE – CLASS VS FUNCTION COMPONENT"}),jsxRuntimeExports.jsxs("p",{style:{color:"#a0d8ff",lineHeight:"1.8"},children:["Playground này giúp bạn ",jsxRuntimeExports.jsx("strong",{children:"nhìn thấy trực tiếp"})," từng giai đoạn lifecycle chạy như thế nào:"]}),jsxRuntimeExports.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",color:"#e0e0e0",fontSize:"0.95rem"},children:[jsxRuntimeExports.jsx("thead",{children:jsxRuntimeExports.jsxs("tr",{style:{background:"#1e2a44"},children:[jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Giai đoạn"}),jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Class Component"}),jsxRuntimeExports.jsx("th",{style:{padding:"0.75rem",border:"1px solid #444",textAlign:"left"},children:"Function Component + Hooks"})]})}),jsxRuntimeExports.jsxs("tbody",{children:[jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Render (mỗi lần)"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"render()"}),jsxRuntimeExports.jsx("br",{}),"→ Phải tự log + đếm bằng biến instance"]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"Function body chạy lại"}),jsxRuntimeExports.jsx("br",{}),"→ Tự động log + đếm bằng ",jsxRuntimeExports.jsx("code",{children:"useRef"})]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Mount (sau render đầu)"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:jsxRuntimeExports.jsx("code",{children:"componentDidMount()"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:jsxRuntimeExports.jsx("code",{children:"useEffect(() => { ... }, [])"})})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Update (khi state/props đổi)"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"componentDidUpdate(prevProps, prevState)"}),jsxRuntimeExports.jsx("br",{}),"→ Phải tự so sánh ",jsxRuntimeExports.jsx("code",{children:"prevState"})]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"useEffect(() => { ... }, [deps])"}),jsxRuntimeExports.jsx("br",{}),"→ Tự động chạy khi ",jsxRuntimeExports.jsx("code",{children:"deps"})," thay đổi"]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Unmount (trước khi mất)"})}),jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:jsxRuntimeExports.jsx("code",{children:"componentWillUnmount()"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:[jsxRuntimeExports.jsx("code",{children:"return () => cleanup"})," trong"," ",jsxRuntimeExports.jsx("code",{children:"useEffect"})]})]}),jsxRuntimeExports.jsxs("tr",{children:[jsxRuntimeExports.jsx("td",{style:{padding:"0.75rem",border:"1px solid #444",background:"#1a2333"},children:jsxRuntimeExports.jsx("strong",{children:"Các method khác"})}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444"},children:[jsxRuntimeExports.jsx("code",{children:"shouldComponentUpdate"}),","," ",jsxRuntimeExports.jsx("code",{children:"getSnapshotBeforeUpdate"}),", v.v."]}),jsxRuntimeExports.jsxs("td",{style:{padding:"0.75rem",border:"1px solid #444",color:"#00ff88"},children:["Thay bằng ",jsxRuntimeExports.jsx("code",{children:"React.memo"}),", ",jsxRuntimeExports.jsx("code",{children:"useMemo"}),","," ",jsxRuntimeExports.jsx("code",{children:"useCallback"})]})]})]})]}),jsxRuntimeExports.jsx("h4",{style:{color:"#00ff88",marginTop:"1.5rem"},children:"Tóm tắt so sánh lifecycle:"}),jsxRuntimeExports.jsxs("ul",{style:{color:"#ffdd99",lineHeight:"1.9"},children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Thứ tự chạy:"})," Giống hệt nhau → bạn thấy rõ trong logs"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Function Component:"})," 1 hàm ",jsxRuntimeExports.jsx("code",{children:"useEffect"})," ","thay thế 3 lifecycle methods"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Class Component:"})," Nhiều method riêng lẻ → dễ nhầm, dễ quên"]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Log giống hệt nhau:"})," Dễ nhìn ra sự tương đương 1-1"]})]}),jsxRuntimeExports.jsxs("p",{style:{marginTop:"1.5rem",color:"#00ff88",fontWeight:"bold",fontSize:"1.1rem"},children:["Kết luận:"," ",jsxRuntimeExports.jsx("strong",{children:"Hooks không phải là “khác biệt” – mà là “cách viết tốt hơn” của cùng một lifecycle!"})]})]})]})}function Exercise5(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:5,title:"Lifecycle Playground (Challenge)"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
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

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(LifecyclePlayground,{})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
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

`})]})}const DefaultFallback=({error:s,resetError:e})=>jsxRuntimeExports.jsxs("div",{className:"error-fallback",children:[jsxRuntimeExports.jsx("div",{className:"error-icon",children:"Warning"}),jsxRuntimeExports.jsx("h2",{children:"Oops! Có lỗi xảy ra"}),jsxRuntimeExports.jsx("p",{children:"Chúng tôi đã ghi nhận lỗi này. Bạn có thể thử lại."}),jsxRuntimeExports.jsx("pre",{className:"error-message",children:s.message}),jsxRuntimeExports.jsx("button",{onClick:e,className:"retry-btn",children:"Thử lại"})]});class ErrorBoundary extends reactExports.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t}),this.props.onError?.(e,t),this.logToService(e,t)}logToService=(e,t)=>{console.error("ErrorBoundary caught:",e,t)};resetError=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null,errorInfo:null})};componentDidUpdate(e){this.state.hasError&&e.resetKeys!==this.props.resetKeys&&this.resetError()}render(){const{hasError:e,error:t,errorInfo:r}=this.state,{fallback:n,fallbackRender:a,FallbackComponent:c=DefaultFallback,children:u}=this.props;if(e&&t){const l={error:t,errorInfo:r,resetError:this.resetError};return n&&reactExports.isValidElement(n)?n:a?a(l):c?jsxRuntimeExports.jsx(c,{...l}):jsxRuntimeExports.jsx(DefaultFallback,{error:t,resetError:this.resetError})}return u}}function ErrorFallback({error:s,resetError:e,errorInfo:t,showStack:r=!0}){return jsxRuntimeExports.jsx("div",{className:"fallback-container",children:jsxRuntimeExports.jsxs("div",{className:"fallback-card",children:[jsxRuntimeExports.jsxs("div",{className:"fallback-header",children:[jsxRuntimeExports.jsx("span",{className:"icon-bug",children:"⚠️"}),jsxRuntimeExports.jsx("h2",{children:"Ứng dụng gặp sự cố"})]}),jsxRuntimeExports.jsxs("div",{className:"fallback-body",children:[jsxRuntimeExports.jsx("p",{children:"Chúng tôi xin lỗi vì sự bất tiện này."}),jsxRuntimeExports.jsxs("div",{className:"error-box",children:[jsxRuntimeExports.jsxs("strong",{children:[s.name,":"]})," ",s.message]}),r&&t&&jsxRuntimeExports.jsxs("details",{className:"stack-trace",children:[jsxRuntimeExports.jsx("summary",{children:"Xem chi tiết lỗi"}),jsxRuntimeExports.jsx("pre",{children:t.componentStack})]})]}),jsxRuntimeExports.jsxs("div",{className:"fallback-actions",children:[jsxRuntimeExports.jsx("button",{onClick:e,className:"btn-primary",children:"Thử lại ngay"}),jsxRuntimeExports.jsx("button",{onClick:()=>window.location.reload(),className:"btn-secondary",children:"Tải lại trang"})]}),jsxRuntimeExports.jsxs("footer",{className:"fallback-footer",children:["Mã lỗi: ",s.name,"-",Date.now().toString(36)]})]})})}function BuggyChildren(){const[errorType,setErrorType]=reactExports.useState(null),[count,setCount]=reactExports.useState(0);if(errorType==="sync")throw new Error("Lỗi đồng bộ – render crash ngay lập tức!");if(errorType==="async")throw new Error("Lỗi bất đồng bộ – xảy ra sau khi nhấn nút!");if(errorType==="null")return null.crash();if(errorType==="undefined"&&(void 0).method(),errorType==="promise"&&Promise.reject(new Error("Lỗi Promise – KHÔNG bắt được bằng ErrorBoundary!")),errorType==="network")throw new Error("Mất kết nối mạng – 500 Internal Server Error");return errorType==="syntax"&&eval("(((((("),jsxRuntimeExports.jsxs("div",{style:{padding:"2rem",background:"#1e293b",borderRadius:"16px",color:"#e2e8f0"},children:[jsxRuntimeExports.jsx("h2",{children:"Giả lập lỗi để test ErrorBoundary"}),jsxRuntimeExports.jsx("p",{children:"Click các nút để ném lỗi – ErrorBoundary sẽ bắt và hiển thị fallback!"}),jsxRuntimeExports.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",marginTop:"1.5rem"},children:[jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("sync"),variant:"danger",children:"Lỗi đồng bộ (render crash)"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("async"),variant:"warning",children:"Lỗi bất đồng bộ (ngay khi nhấn)"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("null"),variant:"secondary",children:"TypeError: null.crash()"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("undefined"),variant:"secondary",children:"TypeError: undefined.method()"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("promise"),variant:"info",children:"Promise.reject() – KHÔNG bắt được"}),jsxRuntimeExports.jsx(Button,{onClick:()=>setErrorType("network"),variant:"danger",children:"Lỗi mạng (500)"}),jsxRuntimeExports.jsxs(Button,{onClick:()=>setCount(s=>s+1),variant:"primary",children:["Tăng count: ",count," (bình thường)"]})]}),jsxRuntimeExports.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",background:"#334155",borderRadius:"8px",fontSize:"0.9rem"},children:[jsxRuntimeExports.jsx("strong",{children:"Hướng dẫn test:"}),jsxRuntimeExports.jsxs("ul",{style:{margin:"0.5rem 0"},children:[jsxRuntimeExports.jsx("li",{children:"Click nút → ErrorBoundary bắt lỗi → hiển thị fallback"}),jsxRuntimeExports.jsx("li",{children:'Click "Thử lại" → reset lỗi → component render lại'}),jsxRuntimeExports.jsx("li",{children:"Lỗi Promise → KHÔNG bắt được → app crash (đúng chuẩn)"}),jsxRuntimeExports.jsx("li",{children:"Dev mode: hiện stack trace | Production: ẩn chi tiết"})]})]})]})}function Exercise6(){return jsxRuntimeExports.jsxs(ExerciseCard,{children:[jsxRuntimeExports.jsx(ExerciseCard.Header,{order:6,title:"HOMEWORK: Error Boundary Library"}),jsxRuntimeExports.jsx(ExerciseCard.Description,{children:`
Tạo reusable Error Boundary library:
// ErrorBoundary.jsx
class ErrorBoundary extends Component {
  // TODO:
  // - Multiple fallback options
  // - Error logging integration
  // - Retry mechanism
  // - Reset on route change
  // - Development vs Production mode
}

// FallbackComponent.jsx
function ErrorFallback({ error, resetError, errorInfo }) {
  // TODO: Customizable error UI
}

// Usage
<ErrorBoundary
  fallback={<ErrorFallback />}
  onError={(error, errorInfo) => logToService(error, errorInfo)}
  onReset={() => console.log('Reset')}
>
  <BuggyChildren />
</ErrorBoundary>

`}),jsxRuntimeExports.jsx(ExerciseCard.Demo,{children:jsxRuntimeExports.jsx(ErrorBoundary,{FallbackComponent:ErrorFallback,onError:(s,e)=>{console.error("Lỗi:",s),console.error("Info:",e)},onReset:()=>console.log("Đã reset lỗi"),resetKeys:[location.pathname],showDetails:!0,children:jsxRuntimeExports.jsx(BuggyChildren,{})})}),jsxRuntimeExports.jsx(ExerciseCard.Code,{children:`
// src/components/ErrorBoundary.jsx
import { Component, isValidElement } from "react";

export const DefaultFallback = ({ error, resetError }) => (
  <div className="error-fallback">
    <div className="error-icon">Warning</div>
    <h2>Oops! Có lỗi xảy ra</h2>
    <p>Chúng tôi đã ghi nhận lỗi này. Bạn có thể thử lại.</p>
    <pre className="error-message">{error.message}</pre>
    <button onClick={resetError} className="retry-btn">
      Thử lại
    </button>
  </div>
);

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });

    // Gọi callback onError
    this.props.onError?.(error, errorInfo);
    // Gửi log
    this.logToService(error, errorInfo);
  }

  logToService = (error, errorInfo) => {
    console.error("ErrorBoundary caught:", error, errorInfo);
    // Hoặc gửi log lên server
    // fetch("/api/errors", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     message: error.message,
    //     stack: error.stack,
    //     componentStack: errorInfo.componentStack,
    //     url: window.location.href,
    //     timestamp: new Date().toISOString(),
    //   }),
    // }).catch(() => {});
  };

  resetError = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKeys !== this.props.resetKeys) {
      this.resetError();
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const {
      fallback,
      fallbackRender,
      FallbackComponent = DefaultFallback,
      children,
    } = this.props;

    if (hasError && error) {
      const fallbackProps = { error, errorInfo, resetError: this.resetError };

      if (fallback && isValidElement(fallback)) return fallback;
      if (fallbackRender) return fallbackRender(fallbackProps);
      if (FallbackComponent) return <FallbackComponent {...fallbackProps} />;

      return <DefaultFallback error={error} resetError={this.resetError} />;
    }

    return children;
  }
}

// ErrorFallback.jsx

export function ErrorFallback({
  error,
  resetError,
  errorInfo,
  showStack = true,
}) {
  return (
    <div className="fallback-container">
      <div className="fallback-card">
        <div className="fallback-header">
          <span className="icon-bug">⚠️</span>
          <h2>Ứng dụng gặp sự cố</h2>
        </div>

        <div className="fallback-body">
          <p>Chúng tôi xin lỗi vì sự bất tiện này.</p>
          <div className="error-box">
            <strong>{error.name}:</strong> {error.message}
          </div>

          {showStack && errorInfo && (
            <details className="stack-trace">
              <summary>Xem chi tiết lỗi</summary>
              <pre>{errorInfo.componentStack}</pre>
            </details>
          )}
        </div>

        <div className="fallback-actions">
          <button onClick={resetError} className="btn-primary">
            Thử lại ngay
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary"
          >
            Tải lại trang
          </button>
        </div>

        <footer className="fallback-footer">
          Mã lỗi: {error.name}-{Date.now().toString(36)}
        </footer>
      </div>
    </div>
  );
}

// BuggyChildren.jsx
import { Button } from "@ui";
import { useState } from "react";

export function BuggyChildren() {
  const [errorType, setErrorType] = useState(null);
  const [count, setCount] = useState(0);

  // GIẢ LẬP CÁC LOẠI LỖI
  if (errorType === "sync") {
    throw new Error("Lỗi đồng bộ – render crash ngay lập tức!");
  }

  if (errorType === "async") {
    throw new Error("Lỗi bất đồng bộ – xảy ra sau khi nhấn nút!");
  }

  if (errorType === "null") {
    return null.crash(); // TypeError: Cannot read properties of null
  }

  if (errorType === "undefined") {
    undefined.method(); // TypeError: Cannot read properties of undefined
  }

  if (errorType === "promise") {
    // Giả lập lỗi trong Promise (không bắt được bằng ErrorBoundary)
    // → Dùng để test sự khác biệt
    Promise.reject(
      new Error("Lỗi Promise – KHÔNG bắt được bằng ErrorBoundary!")
    );
  }

  if (errorType === "network") {
    throw new Error("Mất kết nối mạng – 500 Internal Server Error");
  }

  if (errorType === "syntax") {
    // Giả lập lỗi syntax (thực tế không chạy được)
    // Dùng để minh họa dev mode
    eval("(((((("); // SyntaxError
  }

  return (
    <div
      style={{
        padding: "2rem",
        background: "#1e293b",
        borderRadius: "16px",
        color: "#e2e8f0",
      }}
    >
      <h2>Giả lập lỗi để test ErrorBoundary</h2>
      <p>
        Click các nút để ném lỗi – ErrorBoundary sẽ bắt và hiển thị fallback!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <Button onClick={() => setErrorType("sync")} variant="danger">
          Lỗi đồng bộ (render crash)
        </Button>

        <Button onClick={() => setErrorType("async")} variant="warning">
          Lỗi bất đồng bộ (ngay khi nhấn)
        </Button>

        <Button onClick={() => setErrorType("null")} variant="secondary">
          TypeError: null.crash()
        </Button>

        <Button onClick={() => setErrorType("undefined")} variant="secondary">
          TypeError: undefined.method()
        </Button>

        <Button onClick={() => setErrorType("promise")} variant="info">
          Promise.reject() – KHÔNG bắt được
        </Button>

        <Button onClick={() => setErrorType("network")} variant="danger">
          Lỗi mạng (500)
        </Button>

        <Button onClick={() => setCount((c) => c + 1)} variant="primary">
          Tăng count: {count} (bình thường)
        </Button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          background: "#334155",
          borderRadius: "8px",
          fontSize: "0.9rem",
        }}
      >
        <strong>Hướng dẫn test:</strong>
        <ul style={{ margin: "0.5rem 0" }}>
          <li>Click nút → ErrorBoundary bắt lỗi → hiển thị fallback</li>
          <li>Click "Thử lại" → reset lỗi → component render lại</li>
          <li>Lỗi Promise → KHÔNG bắt được → app crash (đúng chuẩn)</li>
          <li>Dev mode: hiện stack trace | Production: ẩn chi tiết</li>
        </ul>
      </div>
    </div>
  );
}

`})]})}const exercises={1:Exercise1,2:Exercise2,3:Exercise3,4:Exercise4,5:Exercise5,6:Exercise6},Day5=()=>jsxRuntimeExports.jsxs("div",{className:"day-content",children:[jsxRuntimeExports.jsxs("div",{className:"day-header",children:[jsxRuntimeExports.jsxs("div",{className:"day-header-content",children:[jsxRuntimeExports.jsx(CodeXml,{size:32,color:"#00D9FF"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h1",{className:"day-title",children:"Ngày 5"}),jsxRuntimeExports.jsx("p",{className:"day-subtitle",children:"Class Components (Legacy)"})]})]}),jsxRuntimeExports.jsxs("section",{className:"lesson-goal",children:[jsxRuntimeExports.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Hiểu Class Components syntax (để đọc code cũ)"}),jsxRuntimeExports.jsx("li",{children:"Master Lifecycle Methods"}),jsxRuntimeExports.jsx("li",{children:"So sánh Class vs Function Components"}),jsxRuntimeExports.jsx("li",{children:"Biết cách refactor Class → Function"}),jsxRuntimeExports.jsx("li",{children:"Migration strategies"})]})]})]}),jsxRuntimeExports.jsx("div",{className:"exercises-list",children:Object.keys(exercises).map(s=>{const e=exercises[s];return e?jsxRuntimeExports.jsx(e,{},s):null})})]});export{Day5 as default};
