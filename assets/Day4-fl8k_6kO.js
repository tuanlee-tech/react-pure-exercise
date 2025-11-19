import{r as s,j as e,R,C as E}from"./index-DWyDx9Oi.js";/* empty css               */import{E as u}from"./ExerciseCard-B6SIPsBu.js";const T=s.createContext(),z={info:"ℹ️",success:"✅",warning:"⚠️",error:"❌"},W={info:"alert-info",success:"alert-success",warning:"alert-warning",error:"alert-error"};function f({children:n,variant:t="info",dismissible:r=!1,autoDismiss:o=0}){const[i,a]=s.useState(!0);return s.useEffect(()=>{if(o>0&&i){const l=setTimeout(()=>{a(!1)},o);return()=>clearTimeout(l)}},[o,i]),i?e.jsx(T.Provider,{value:{variant:t,dismissible:r,setIsOpen:a},children:e.jsx("div",{className:`alert ${W[t]}`,children:n})}):null}f.Icon=function(){const{variant:t}=s.useContext(T);return e.jsx("span",{className:"alert-icon",children:z[t]})};f.Title=function({children:t}){return e.jsx("h3",{className:"alert-title",children:t})};f.Description=function({children:t}){return e.jsx("p",{className:"alert-description",children:t})};f.CloseButton=function(){const{dismissible:t,setIsOpen:r}=s.useContext(T);return t?e.jsx("button",{className:"alert-close",onClick:()=>r(!1),"aria-label":"Close alert",children:"X"}):null};function L(){return e.jsxs(u,{children:[e.jsx(u.Header,{order:1,title:"Alert/Toast System (Compound Components)"}),e.jsx(u.Description,{children:`
// TODO: Implement compound components Alert system

// Alert.jsx
function Alert({ children, variant = 'info', dismissible = false }) {
  // TODO:
  // - Context để share state
  // - Auto dismiss sau X seconds (optional)
  // - Variants: info, success, warning, error
}

Alert.Icon = function AlertIcon({ children }) {
  // TODO: Render icon based on variant from context
}

Alert.Title = function AlertTitle({ children }) {
  // TODO: Render title
}

Alert.Description = function AlertDescription({ children }) {
  // TODO: Render description
}

Alert.CloseButton = function AlertCloseButton() {
  // TODO: Dismiss button
}

// Usage
<Alert variant="success" dismissible>
  <Alert.Icon />
  <div>
    <Alert.Title>Success!</Alert.Title>
    <Alert.Description>
      Your changes have been saved.
    </Alert.Description>
  </div>
  <Alert.CloseButton />
</Alert>


`}),e.jsx(u.Demo,{children:e.jsxs("div",{className:"grid grid-cols-1",children:[e.jsxs(f,{variant:"info",dismissible:!0,autoDismiss:5e3,children:[e.jsx(f.Icon,{}),e.jsxs("div",{children:[e.jsx(f.Title,{children:"Information"}),e.jsxs(f.Description,{children:["This is an informational message for the user."," ",e.jsx("strong",{children:"Auto Dismiss after 5s"})]})]}),e.jsx(f.CloseButton,{})]}),e.jsxs(f,{variant:"success",dismissible:!0,children:[e.jsx(f.Icon,{}),e.jsxs("div",{children:[e.jsx(f.Title,{children:"Success!"}),e.jsx(f.Description,{children:"Your changes have been saved successfully."})]}),e.jsx(f.CloseButton,{})]}),e.jsxs(f,{variant:"error",children:[e.jsx(f.Icon,{}),e.jsxs("div",{children:[e.jsx(f.Title,{children:"Error!"}),e.jsx(f.Description,{children:"Something went wrong, please try again later."})]})]})]})}),e.jsx(u.Code,{children:`
// Alert.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

// Icon map
const ICONS = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

const VARIANT_CLASSES = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

function Alert({
  children,
  variant = "info",
  dismissible = false,
  autoDismiss = 0, // ms, 0 = không tự đóng
}) {
  const [isOpen, setIsOpen] = useState(true);

  // Auto dismiss
  useEffect(() => {
    if (autoDismiss > 0 && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, isOpen]);

  if (!isOpen) return null;

  return (
    <AlertContext.Provider value={{ variant, dismissible, setIsOpen }}>
      <div className={\`alert \${VARIANT_CLASSES[variant]}\`}>{children}</div>
    </AlertContext.Provider>
  );
}

// Sub-components
Alert.Icon = function AlertIcon() {
  const { variant } = useContext(AlertContext);
  return <span className="alert-icon">{ICONS[variant]}</span>;
};

Alert.Title = function AlertTitle({ children }) {
  return <h3 className="alert-title">{children}</h3>;
};

Alert.Description = function AlertDescription({ children }) {
  return <p className="alert-description">{children}</p>;
};

Alert.CloseButton = function AlertCloseButton() {
  const { dismissible, setIsOpen } = useContext(AlertContext);

  if (!dismissible) return null;

  return (
    <button
      className="alert-close"
      onClick={() => setIsOpen(false)}
      aria-label="Close alert"
    >
      X
    </button>
  );
};

export default Alert;

        `})]})}const k=s.createContext();function g({children:n,onComplete:t}){const[r,o]=s.useState([]),[i,a]=s.useState(0),[l,p]=s.useState({}),m=r.length,S=r[i],y={steps:r,currentStep:S,currentIndex:i,totalSteps:m,registerStep:(h,c)=>{o(d=>d.some(j=>j.id===h)?d:[...d,{id:h,title:c}])},next:()=>{i<m-1?a(h=>h+1):t&&t(l)},prev:()=>{i>0&&a(h=>h-1)},jumpTo:h=>{const c=r.findIndex(d=>d.id===h);c!==-1&&a(c)},formData:l,updateFormData:(h,c)=>{p(d=>({...d,[h]:c}))}};return e.jsx(k.Provider,{value:y,children:e.jsx("div",{className:"wizard",children:n})})}g.Steps=function({children:t}){const{steps:r,currentIndex:o}=s.useContext(k);return e.jsx("div",{className:"wizard-steps",children:s.Children.map(t,i=>{const a=r.findIndex(m=>m.id===i.props.stepId),l=a===o,p=a<o;return s.cloneElement(i,{isActive:l,isCompleted:p})})})};g.Step=function({stepId:t,title:r,isActive:o,isCompleted:i}){const{registerStep:a,jumpTo:l,steps:p}=s.useContext(k);s.useEffect(()=>{a(t,r)},[t,r,a]);const m=["step",o?"active":"",i?"completed":""].filter(Boolean).join(" "),S=p.findIndex(v=>v.id===t)+1;return e.jsxs("div",{className:m,onClick:()=>i&&l(t),children:[e.jsx("div",{className:"step-number",children:S}),e.jsx("div",{className:"step-label",children:r})]})};g.Panels=function({children:t}){const{currentStep:r}=s.useContext(k);return e.jsx("div",{className:"wizard-panels",children:s.Children.map(t,o=>o.props.stepId===r?.id?o:null)})};g.Panel=function({children:t}){const{formData:r,updateFormData:o}=s.useContext(k),i=s.Children.map(t,a=>typeof a=="object"?s.cloneElement(a,{formData:r,updateFormData:o}):a);return e.jsx("div",{className:"wizard-panel",children:i})};g.Navigation=function(){const{currentIndex:t,totalSteps:r,prev:o,next:i}=s.useContext(k);return e.jsxs("div",{className:"wizard-navigation",children:[e.jsx("button",{className:"btn btn-secondary",onClick:o,disabled:t===0,children:"← Previous"}),t<r-1?e.jsx("button",{className:"btn btn-primary",onClick:i,children:"Next →"}):e.jsx("button",{className:"btn btn-primary",onClick:i,children:"Submit ✅"})]})};function V({formData:n,updateFormData:t}){return e.jsxs("div",{className:"form-group",children:[e.jsx("h2",{children:"Account Information"}),e.jsx("input",{name:"username",placeholder:"Username",value:n.username||"",onChange:r=>t("username",r.target.value)}),e.jsx("input",{type:"password",name:"password",placeholder:"Password",value:n.password||"",onChange:r=>t("password",r.target.value)})]})}function M({formData:n,updateFormData:t}){return e.jsxs("div",{className:"form-group",children:[e.jsx("h2",{children:"Profile Details"}),e.jsx("input",{name:"fullName",placeholder:"Full Name",value:n.fullName||"",onChange:r=>t("fullName",r.target.value)}),e.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:n.email||"",onChange:r=>t("email",r.target.value)})]})}function H({formData:n}){return e.jsxs("div",{className:"form-group review",children:[e.jsx("h2",{children:"Review & Submit"}),e.jsxs("div",{className:"summary",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Username:"})," ",n.username]}),e.jsxs("p",{children:[e.jsx("b",{children:"Full Name:"})," ",n.fullName]}),e.jsxs("p",{children:[e.jsx("b",{children:"Email:"})," ",n.email]})]})]})}function _(){return e.jsxs(u,{children:[e.jsx(u.Header,{order:2,title:"Wizard/Stepper (Compound Components)"}),e.jsx(u.Description,{children:`
// TODO: Multi-step form wizard

function Wizard({ children, onComplete }) {
  // TODO:
  // - Track current step
  // - Navigation (next, prev, jump to step)
  // - Validation before next
  // - Progress indicator
}

Wizard.Steps = function WizardSteps({ children }) {
  // TODO: Render step indicators
}

Wizard.Step = function WizardStep({ children, stepId, title }) {
  // TODO: Individual step indicator
}

Wizard.Panels = function WizardPanels({ children }) {
  // TODO: Container for panels
}

Wizard.Panel = function WizardPanel({ children, stepId }) {
  // TODO: Content for each step
}

Wizard.Navigation = function WizardNavigation() {
  // TODO: Previous, Next, Submit buttons
}

// Usage
<Wizard onComplete={handleComplete}>
  <Wizard.Steps>
    <Wizard.Step stepId={1} title="Account" />
    <Wizard.Step stepId={2} title="Profile" />
    <Wizard.Step stepId={3} title="Review" />
  </Wizard.Steps>

  <Wizard.Panels>
    <Wizard.Panel stepId={1}>
      <h2>Account Information</h2>
      {/* Form fields */}
    </Wizard.Panel>

    <Wizard.Panel stepId={2}>
      <h2>Profile Details</h2>
      {/* Form fields */}
    </Wizard.Panel>

    <Wizard.Panel stepId={3}>
      <h2>Review & Submit</h2>
      {/* Summary */}
    </Wizard.Panel>
  </Wizard.Panels>

  <Wizard.Navigation />
</Wizard>

`}),e.jsx(u.Demo,{children:e.jsxs(g,{onComplete:n=>{console.log(n)},children:[e.jsxs(g.Steps,{children:[e.jsx(g.Step,{stepId:1,title:"Account"}),e.jsx(g.Step,{stepId:2,title:"Profile"}),e.jsx(g.Step,{stepId:3,title:"Review"})]}),e.jsxs(g.Panels,{children:[e.jsx(g.Panel,{stepId:1,children:e.jsx(V,{})}),e.jsx(g.Panel,{stepId:2,children:e.jsx(M,{})}),e.jsx(g.Panel,{stepId:3,children:e.jsx(H,{})})]}),e.jsx(g.Navigation,{})]})}),e.jsx(u.Code,{children:`
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WizardContext = createContext();

export function Wizard({ children, onComplete }) {
  const [steps, setSteps] = useState([]); // [{id, title}]
  const [currentIndex, setCurrentIndex] = useState(0); // index thay vì id
  const [formData, setFormData] = useState({});

  const totalSteps = steps.length;
  const currentStep = steps[currentIndex]; // object {id, title}

  const registerStep = (id, title) => {
    setSteps((prev) => {
      if (prev.some((s) => s.id === id)) return prev;
      return [...prev, { id, title }];
    });
  };

  const next = () => {
    if (currentIndex < totalSteps - 1) setCurrentIndex((i) => i + 1);
    else if (onComplete) onComplete(formData);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const jumpTo = (id) => {
    const targetIndex = steps.findIndex((s) => s.id === id);
    if (targetIndex !== -1) setCurrentIndex(targetIndex);
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const value = {
    steps,
    currentStep,
    currentIndex,
    totalSteps,
    registerStep,
    next,
    prev,
    jumpTo,
    formData,
    updateFormData,
  };

  return (
    <WizardContext.Provider value={value}>
      <div className="wizard">{children}</div>
    </WizardContext.Provider>
  );
}

// --- Steps Header ---
Wizard.Steps = function WizardSteps({ children }) {
  const { steps, currentIndex } = useContext(WizardContext);

  return (
    <div className="wizard-steps">
      {Children.map(children, (child) => {
        const stepIndex = steps.findIndex((s) => s.id === child.props.stepId);
        const isActive = stepIndex === currentIndex;
        const isCompleted = stepIndex < currentIndex;
        return cloneElement(child, { isActive, isCompleted });
      })}
    </div>
  );
};

// --- Step Item ---
Wizard.Step = function WizardStep({ stepId, title, isActive, isCompleted }) {
  const { registerStep, jumpTo, steps } = useContext(WizardContext);

  useEffect(() => {
    registerStep(stepId, title);
  }, [stepId, title, registerStep]);

  const classes = [
    "step",
    isActive ? "active" : "",
    isCompleted ? "completed" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const stepIndex = steps.findIndex((s) => s.id === stepId) + 1;
  return (
    <div className={classes} onClick={() => isCompleted && jumpTo(stepId)}>
      <div className="step-number">{stepIndex}</div>
      <div className="step-label">{title}</div>
    </div>
  );
};

// --- Panels Container ---
Wizard.Panels = function WizardPanels({ children }) {
  const { currentStep } = useContext(WizardContext);

  return (
    <div className="wizard-panels">
      {Children.map(children, (child) =>
        child.props.stepId === currentStep?.id ? child : null
      )}
    </div>
  );
};

// --- Panel (with form data support) ---
Wizard.Panel = function WizardPanel({ children }) {
  const { formData, updateFormData } = useContext(WizardContext);

  const enhancedChildren = Children.map(children, (child) =>
    typeof child === "object"
      ? cloneElement(child, { formData, updateFormData })
      : child
  );

  return <div className="wizard-panel">{enhancedChildren}</div>;
};

// --- Navigation ---
Wizard.Navigation = function WizardNavigation() {
  const { currentIndex, totalSteps, prev, next } = useContext(WizardContext);

  return (
    <div className="wizard-navigation">
      <button
        className="btn btn-secondary"
        onClick={prev}
        disabled={currentIndex === 0}
      >
        ← Previous
      </button>

      {currentIndex < totalSteps - 1 ? (
        <button className="btn btn-primary" onClick={next}>
          Next →
        </button>
      ) : (
        <button className="btn btn-primary" onClick={next}>
          Submit ✅
        </button>
      )}
    </div>
  );
};

export function AccountStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Account Information</h2>
      <input
        name="username"
        placeholder="Username"
        value={formData.username || ""}
        onChange={(e) => updateFormData("username", e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password || ""}
        onChange={(e) => updateFormData("password", e.target.value)}
      />
    </div>
  );
}

export function ProfileStep({ formData, updateFormData }) {
  return (
    <div className="form-group">
      <h2>Profile Details</h2>
      <input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName || ""}
        onChange={(e) => updateFormData("fullName", e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email || ""}
        onChange={(e) => updateFormData("email", e.target.value)}
      />
    </div>
  );
}

export function ReviewStep({ formData }) {
  return (
    <div className="form-group review">
      <h2>Review & Submit</h2>
      <div className="summary">
        <p>
          <b>Username:</b> {formData.username}
        </p>
        <p>
          <b>Full Name:</b> {formData.fullName}
        </p>
        <p>
          <b>Email:</b> {formData.email}
        </p>
      </div>
    </div>
  );
}

`})]})}const P=new Map;function $({url:n,children:t}){const[r,o]=s.useState(null),[i,a]=s.useState(!0),[l,p]=s.useState(null),m=s.useCallback(async()=>{const v=new AbortController,N=setTimeout(()=>v.abort(),5e3);try{if(a(!0),p(null),P.has(n)){o(P.get(n)),a(!1);return}const F=await fetch(n);if(!F.ok)throw new Error(`HTTP ${F.status}`);const C=await F.json();await new Promise(x=>setTimeout(x,3e3)),o(C),P.set(n,C)}catch(F){p(F)}finally{clearTimeout(N),a(!1)}},[n]),S=()=>{P.delete(n),m()};return s.useEffect(()=>{m()},[n,m]),t({data:r,loading:i,error:l,retry:S})}function B({product:n}){return n?e.jsxs("div",{className:"product-card",children:[e.jsx("img",{src:"https://placehold.co/600x400?text=Product%20Image",alt:n.name,className:"product-image"}),e.jsx("h3",{children:n.title}),e.jsxs("p",{children:["Price: ",e.jsxs("strong",{children:["$",n.price]})]}),e.jsx("p",{children:n.description})]}):null}function U({width:n="100%",height:t="20px",style:r={}}){return e.jsx("div",{className:"skeleton",style:{width:n,height:t,...r},children:e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%)"},children:"Loading....."})})}function q(){return e.jsxs(u,{children:[e.jsx(u.Header,{order:3,title:"Data Fetcher (Render Props)"}),e.jsx(u.Description,{children:`
// TODO: Reusable data fetching component

function DataFetcher({ url, children, method = 'GET', body }) {
  // TODO:
  // - Fetch data from URL
  // - Handle loading, error, success states
  // - Retry functionality
  // - Cache (optional)
  // Pass { data, loading, error, retry } to children
}

// Usage 1: User List
<DataFetcher url="/api/users">
  {({ data, loading, error, retry }) => {
    if (loading) return <Spinner />;
    if (error) return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
    return <UserList users={data} />;
  }}
</DataFetcher>

// Usage 2: Product Details
<DataFetcher url="/api/products/123">
  {({ data: product, loading }) => {
    if (loading) return <Skeleton />;
    return <ProductCard product={product} />;
  }}
</DataFetcher>

`}),e.jsxs(u.Demo,{children:[e.jsx("h3",{children:"Simulate : 5s loading"}),e.jsx("br",{}),e.jsx($,{url:"https://fakestoreapi.com/products/1",children:({data:n,loading:t})=>t?e.jsx(U,{width:"300px",height:"400px"}):e.jsx(B,{product:n})})]}),e.jsx(u.Code,{children:`
import { useCallback, useEffect, useState } from "react";

// simple in-memory cache (optional)
const cache = new Map();

export function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    try {
      setLoading(true);
      setError(null);

      // 🧠 Check cache first
      if (cache.has(url)) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      // 🧩 Fetch from API
      const res = await fetch(url);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const json = await res.json();

      await new Promise((res) => setTimeout(res, 3000));

      // ✅ Save to state + cache
      setData(json);
      cache.set(url, json);
    } catch (err) {
      setError(err);
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [url]);

  // 🔁 Retry handler
  const retry = () => {
    cache.delete(url); // clear cache before retry
    fetchData();
  };

  // 🎬 Fetch once on mount / URL change
  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  // 📦 Render Props pattern
  return children({ data, loading, error, retry });
}

`})]})}const D=s.createContext(null),A=(n,t)=>t?t.required&&(!n||n==="")?typeof t.required=="string"?t.required:"Trường này là bắt buộc":t.pattern&&n&&!(t.pattern instanceof RegExp?t.pattern:t.pattern.value).test(n)?t.pattern.message||"Định dạng không hợp lệ":t.minLength&&n&&n.length<t.minLength?`Tối thiểu ${t.minLength} ký tự`:t.maxLength&&n&&n.length>t.maxLength?`Tối đa ${t.maxLength} ký tự`:t.validate&&typeof t.validate=="function"?t.validate(n):null:null;function b({onSubmit:n,children:t}){const[r,o]=s.useState({}),[i,a]=s.useState({}),[l,p]=s.useState({}),[m,S]=s.useState(!1),v=s.useRef({}),N=s.useCallback((c,d={})=>{if(v.current[c]=d,!(c in r)){const j=d.initialValue??(d.type==="checkbox"?!1:"");o(I=>({...I,[c]:j})),a(I=>({...I,[c]:null})),p(I=>({...I,[c]:!1}))}},[r]),F=s.useCallback((c,d)=>{o(I=>({...I,[c]:d})),p(I=>({...I,[c]:!0}));const j=A(d,v.current[c]);a(I=>({...I,[c]:j}))},[]),C=()=>{const c={};let d=!0;return Object.keys(v.current).forEach(j=>{const I=r[j],O=A(I,v.current[j]);c[j]=O,O&&(d=!1)}),a(c),d},x=async c=>{if(c.preventDefault(),p(Object.keys(r).reduce((d,j)=>({...d,[j]:!0}),{})),!!C()){S(!0);try{await n(r)}finally{S(!1)}}},h={values:r,errors:i,touched:l,isSubmitting:m,registerField:N,setFieldValue:F,resetForm:()=>{const c={};Object.keys(v.current).forEach(d=>{const j=v.current[d];c[d]=j.initialValue??(j.type==="checkbox"?!1:"")}),o(c),a({}),p({}),S(!1)}};return e.jsx(D.Provider,{value:h,children:e.jsx("form",{onSubmit:x,noValidate:!0,className:"form-wrapper",children:t})})}b.Field=function({name:t,label:r,rules:o,children:i}){const{values:a,errors:l,touched:p,registerField:m,setFieldValue:S}=s.useContext(D);R.useEffect(()=>{m(t,o)},[t,m,o]);const v=a[t]??"",N=p[t]&&l[t],F={value:v,error:N,onChange:C=>{const x=C.target.type==="checkbox"?C.target.checked:C.target.value;S(t,x)}};return e.jsxs("div",{className:"form-group",children:[r&&e.jsx("label",{className:"form-label",children:r}),i(F)]})};b.Input=function({name:t,...r}){const{values:o,setFieldValue:i}=s.useContext(D);return e.jsx("input",{...r,name:t,value:o[t]??"",onChange:a=>i(t,a.target.value),className:"form-input"})};b.Select=function({name:t,options:r,...o}){const{values:i,setFieldValue:a}=s.useContext(D);return e.jsxs("select",{...o,name:t,value:i[t]??"",onChange:l=>a(t,l.target.value),className:"form-select",children:[e.jsx("option",{value:"",children:"Chọn..."}),r.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))]})};b.Checkbox=function({name:t,label:r,...o}){const{values:i,setFieldValue:a}=s.useContext(D);return e.jsxs("label",{className:"form-checkbox-wrapper",children:[e.jsx("input",{...o,type:"checkbox",name:t,checked:!!i[t],onChange:l=>a(t,l.target.checked),className:"form-checkbox"}),e.jsx("span",{className:"form-checkbox-label",children:r})]})};b.Submit=function({children:t,loading:r}){const{isSubmitting:o}=s.useContext(D),i=r!==void 0?r:o;return e.jsx("button",{type:"submit",disabled:i,className:`form-submit ${i?"form-submit-loading":""}`,children:i?"Đang gửi...":t})};b.Reset=function({children:t}){const{resetForm:r}=s.useContext(D);return e.jsx("button",{type:"button",onClick:r,className:"form-reset",children:t})};const X=[{value:"vn",label:"Việt Nam"},{value:"us",label:"Hoa Kỳ"},{value:"jp",label:"Nhật Bản"}];function G(){return e.jsxs(u,{children:[e.jsx(u.Header,{order:4,title:"Form Builder (Mixed Patterns - Challenge)"}),e.jsx(u.Description,{children:`
// TODO: Flexible form builder với compound components + render props

// Hàm validate một field
// Cấu trúc các rules
// {
//   required: <true | string>,               // Bắt buộc nhập hay không (có thể là chuỗi thông báo lỗi)
//   minLength: <số>,                         // Độ dài tối thiểu
//   maxLength: <số>,                         // Độ dài tối đa
//   pattern: <RegExp | { value: <RegExp>, message: <string> }> // Kiểm tra định dạng (pattern là một RegExp hoặc object với value và message),
//   validate: <hàm tùy chỉnh(value, formData) => string | null>  // Hàm kiểm tra tuỳ chỉnh
// }

function Form({ onSubmit, children }) {
  // TODO:
  // - Form state management
  // - Validation
  // - Error handling
  // - Submit handling
}

Form.Field = function FormField({ name, label, rules, children }) {
  // TODO:
  // - Register field
  // - Validation
  // - Error display
  // Use render props pattern
}

Form.Input = function FormInput({ name, ...props }) {
  // TODO: Controlled input
}

Form.Select = function FormSelect({ name, options, ...props }) {
  // TODO: Controlled select
}

Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  // TODO: Controlled checkbox
}

Form.Submit = function FormSubmit({ children, loading }) {
  // TODO: Submit button với loading state
}

Form.Reset = function FormReset({ children }) {
  // TODO: Reset form
}

// Usage
<Form onSubmit={handleSubmit}>
  <Form.Field 
    name="email" 
    label="Email"
    rules={{ required: true, pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ }}
  >
    {({ value, onChange, error }) => (
      <>
        <Form.Input
          name="email"
          type="email"
          value={value}
          onChange={onChange}
        />
        {error && <span className="error">{error}</span>}
      </>
    )}
  </Form.Field>

  <Form.Field name="country" label="Country">
    {({ value, onChange }) => (
      <Form.Select
        name="country"
        value={value}
        onChange={onChange}
        options={countries}
      />
    )}
  </Form.Field>

  <Form.Field name="terms">
    {({ value, onChange }) => (
      <Form.Checkbox
        name="terms"
        checked={value}
        onChange={onChange}
        label="I agree to terms"
      />
    )}
  </Form.Field>

  <Form.Submit>Submit</Form.Submit>
  <Form.Reset>Reset</Form.Reset>
</Form>


`}),e.jsx(u.Demo,{children:e.jsxs(b,{onSubmit:n=>{console.log("Form submitted:",n),alert("Gửi thành công! Xem console để xem dữ liệu.")},children:[e.jsx(b.Field,{name:"email",label:"Email",rules:{required:"Email là bắt buộc",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email không hợp lệ"}},children:({value:n,onChange:t,error:r})=>e.jsxs(e.Fragment,{children:[e.jsx(b.Input,{name:"email",type:"email",value:n,onChange:t}),r&&e.jsx("span",{style:{color:"red",fontSize:"0.875rem"},children:r})]})}),e.jsx(b.Field,{name:"country",label:"Quốc gia",rules:{required:!0},children:({value:n,onChange:t})=>e.jsx(b.Select,{name:"country",value:n,onChange:t,options:X})}),e.jsx(b.Field,{name:"terms",rules:{required:"Bạn phải đồng ý điều khoản"},children:({value:n,onChange:t})=>e.jsx(b.Checkbox,{name:"terms",checked:n,onChange:t,label:"Tôi đồng ý với điều khoản sử dụng"})}),e.jsxs("div",{style:{marginTop:"1rem"},children:[e.jsx(b.Submit,{children:"Gửi"}),e.jsx(b.Reset,{children:"Xóa"})]})]})}),e.jsx(u.Code,{children:`
import React, {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

// Context để chia sẻ state form
const FormContext = createContext(null);

// Hàm validate một field
const validateField = (value, rules) => {
  if (!rules) return null;

  if (rules.required && (!value || value === "")) {
    return typeof rules.required === "string"
      ? rules.required
      : "Trường này là bắt buộc";
  }

  if (rules.pattern && value) {
    const regex =
      rules.pattern instanceof RegExp ? rules.pattern : rules.pattern.value;
    if (!regex.test(value)) {
      return rules.pattern.message || "Định dạng không hợp lệ";
    }
  }

  if (rules.minLength && value && value.length < rules.minLength) {
    return \`Tối thiểu \${rules.minLength} ký tự\`;
  }

  if (rules.maxLength && value && value.length > rules.maxLength) {
    return \`Tối đa \${rules.maxLength} ký tự\`;
  }

  if (rules.validate && typeof rules.validate === "function") {
    return rules.validate(value);
  }

  return null;
};

// === Form chính ===
export default function Form({ onSubmit, children }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rulesRef = useRef({});

  // Đăng ký field
  const registerField = useCallback(
    (name, rules = {}) => {
      rulesRef.current[name] = rules;

      if (!(name in values)) {
        const initialValue =
          rules.initialValue ?? (rules.type === "checkbox" ? false : "");
        setValues((prev) => ({ ...prev, [name]: initialValue }));
        setErrors((prev) => ({ ...prev, [name]: null }));
        setTouched((prev) => ({ ...prev, [name]: false }));
      }
    },
    [values]
  );

  // Cập nhật giá trị
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(value, rulesRef.current[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // Validate toàn bộ form
  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(rulesRef.current).forEach((name) => {
      const value = values[name];
      const error = validateField(value, rulesRef.current[name]);
      newErrors[name] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  // Xử lý submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (!validateAll()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    const initial = {};
    Object.keys(rulesRef.current).forEach((name) => {
      const rules = rulesRef.current[name];
      initial[name] =
        rules.initialValue ?? (rules.type === "checkbox" ? false : "");
    });
    setValues(initial);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const contextValue = {
    values,
    errors,
    touched,
    isSubmitting,
    registerField,
    setFieldValue,
    resetForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} noValidate className="form-wrapper">
        {children}
      </form>
    </FormContext.Provider>
  );
}

// === Form.Field (Render Props)  ===
Form.Field = function FormField({ name, label, rules, children }) {
  const { values, errors, touched, registerField, setFieldValue } =
    useContext(FormContext);

  React.useEffect(() => {
    registerField(name, rules);
  }, [name, registerField, rules]);

  const value = values[name] ?? "";
  const error = touched[name] && errors[name];
  const fieldProps = {
    value,
    error,
    onChange: (e) => {
      const val =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFieldValue(name, val);
    },
  };

  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      {children(fieldProps)}
    </div>
  );
};

// === Form.Input  ===
Form.Input = function FormInput({ name, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <input
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-input"
    />
  );
};

// === Form.Select  ===
Form.Select = function FormSelect({ name, options, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <select
      {...props}
      name={name}
      value={values[name] ?? ""}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className="form-select"
    >
      <option value="">Chọn...</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

// === Form.Checkbox  ===
Form.Checkbox = function FormCheckbox({ name, label, ...props }) {
  const { values, setFieldValue } = useContext(FormContext);
  return (
    <label className="form-checkbox-wrapper">
      <input
        {...props}
        type="checkbox"
        name={name}
        checked={!!values[name]}
        onChange={(e) => setFieldValue(name, e.target.checked)}
        className="form-checkbox"
      />
      <span className="form-checkbox-label">{label}</span>
    </label>
  );
};

// === Form.Submit  ===
Form.Submit = function FormSubmit({ children, loading: loadingProp }) {
  const { isSubmitting } = useContext(FormContext);
  const loading = loadingProp !== undefined ? loadingProp : isSubmitting;

  return (
    <button
      type="submit"
      disabled={loading}
      className={\`form-submit \${loading ? "form-submit-loading" : ""}\`}
    >
      {loading ? "Đang gửi..." : children}
    </button>
  );
};

// === Form.Reset  ===
Form.Reset = function FormReset({ children }) {
  const { resetForm } = useContext(FormContext);

  return (
    <button type="button" onClick={resetForm} className="form-reset">
      {children}
    </button>
  );
};
`})]})}function K({items:n,loading:t,hasMore:r,observerRef:o}){return e.jsxs("div",{className:"infinite-list-container",children:[n.map((i,a)=>e.jsxs("div",{className:"infinite-list-item",children:[e.jsxs("h3",{className:"infinite-list-item-title",children:[a+1,". ",i.title||`Item ${i.id}`]}),e.jsx("p",{className:"infinite-list-item-body",children:i.body||"Nội dung mẫu..."})]},a)),t&&n.length===0&&e.jsx(e.Fragment,{children:[...Array(2)].map((i,a)=>e.jsxs("div",{className:"infinite-skeleton",children:[e.jsx("div",{className:"infinite-skeleton-title"}),e.jsx("div",{className:"infinite-skeleton-body"}),e.jsx("div",{className:"infinite-skeleton-body"})]},`skeleton-${a}`))}),t&&n.length>0&&e.jsx("div",{className:"infinite-loading",children:"Đang tải thêm..."}),r&&!t&&e.jsx("div",{ref:o,className:"infinite-observer"}),!r&&n.length>0&&e.jsx("div",{className:"infinite-end",children:"Đã hết dữ liệu (tối đa 10 bài)"})]})}function Y({fetchItems:n,initialItems:t=[]}){const[r,o]=s.useState(t),[i,a]=s.useState(!1),[l,p]=s.useState(!0),[m,S]=s.useState(1),v=s.useRef(null),N=10,F=2,C=s.useCallback(async()=>{if(!(i||!l||r.length>=N)){a(!0);try{const x=await n(m+1,F);if(x&&x.length>0){o(h=>[...h,...x]),S(h=>h+1);const y=r.length+x.length;p(y<N&&x.length===F)}else p(!1)}catch(x){console.error("Lỗi khi tải dữ liệu:",x),p(!1)}finally{a(!1)}}},[m,i,l,r.length,n]);return s.useEffect(()=>{const x=new IntersectionObserver(h=>{h[0].isIntersecting&&l&&!i&&C()},{threshold:.1}),y=v.current;return y&&x.observe(y),()=>{y&&x.unobserve(y)}},[l,i,C]),s.useEffect(()=>{t.length===0&&m===1&&r.length===0&&C()},[t.length,m,r.length,C]),e.jsx(K,{items:r,loading:i,hasMore:l,observerRef:v})}function Q(){return e.jsxs(u,{children:[e.jsx(u.Header,{order:5,title:"Infinite Scroll List (Container/Presentational)"}),e.jsx(u.Description,{children:`
// TODO: Presentational Component
function List({ items, loading, hasMore, observerRef }) {
  // TODO:
  // - Render items
  // - Loading indicator
  // - Observer element for intersection
}

// TODO: Container Component
function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  // TODO:
  // - Manage items state
  // - Intersection Observer setup
  // - Load more when reaching bottom
  // - Handle loading state
  
  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}

// Usage
<InfiniteScrollList
  fetchItems={async (page, limit = 2) => {
    const res = await fetch(
      \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${limit}\`
    );
    return await res.json();
  }}
/>

`}),e.jsx(u.Demo,{children:e.jsx(Y,{fetchItems:async(n,t=2)=>await(await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${n}&_limit=${t}`)).json()})}),e.jsx(u.Code,{children:`
import { useCallback, useEffect, useRef, useState } from "react";

// === Presentational Component ===
function List({ items, loading, hasMore, observerRef }) {
  return (
    <div className="infinite-list-container">
      {items.map((item, index) => (
        <div key={index} className="infinite-list-item">
          <h3 className="infinite-list-item-title">
             {index + 1}. {item.title || \`Item \${item.id}\`}
          </h3>
          <p className="infinite-list-item-body">
            {item.body || "Nội dung mẫu..."}
          </p>
        </div>
      ))}

      {loading && items.length === 0 && (
        <>
          {[...Array(2)].map((_, i) => (
            <div key={\`skeleton-\${i}\`} className="infinite-skeleton">
              <div className="infinite-skeleton-title"></div>
              <div className="infinite-skeleton-body"></div>
              <div className="infinite-skeleton-body"></div>
            </div>
          ))}
        </>
      )}

      {loading && items.length > 0 && (
        <div className="infinite-loading">Đang tải thêm...</div>
      )}

      {hasMore && !loading && (
        <div ref={observerRef} className="infinite-observer" />
      )}

      {!hasMore && items.length > 0 && (
        <div className="infinite-end">Đã hết dữ liệu (tối đa 10 bài)</div>
      )}
    </div>
  );
}

// === Container Component ===
export default function InfiniteScrollList({ fetchItems, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);

  // Giới hạn: tối đa 10 post → 5 lần fetch (2 post/lần)
  const MAX_POSTS = 10;
  const POSTS_PER_PAGE = 2;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || items.length >= MAX_POSTS) return;

    setLoading(true);
    try {
      const newItems = await fetchItems(page + 1, POSTS_PER_PAGE);
      if (newItems && newItems.length > 0) {
        setItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);

        // Dừng khi đạt 10 bài hoặc không còn dữ liệu
        const totalLoaded = items.length + newItems.length;
        setHasMore(
          totalLoaded < MAX_POSTS && newItems.length === POSTS_PER_PAGE
        );
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, items.length, fetchItems]);

  // Setup IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loading, loadMore]);

  // Tải lần đầu nếu chưa có data
  useEffect(() => {
    if (initialItems.length === 0 && page === 1 && items.length === 0) {
      loadMore();
    }
  }, [initialItems.length, page, items.length, loadMore]);

  return (
    <List
      items={items}
      loading={loading}
      hasMore={hasMore}
      observerRef={observerRef}
    />
  );
}
`})]})}const w={1:L,2:_,3:q,4:G,5:Q},te=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(E,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 4"}),e.jsx("p",{className:"day-subtitle",children:"Component Composition Patterns"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Master Compound Components pattern"}),e.jsx("li",{children:"Hiểu và implement Render Props pattern"}),e.jsx("li",{children:"Container/Presentational pattern"}),e.jsx("li",{children:"Học cách build flexible và reusable components"}),e.jsx("li",{children:"Tránh prop drilling với composition"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(w).map(n=>{const t=w[n];return t?e.jsx(t,{},n):null})})]});export{te as default};
