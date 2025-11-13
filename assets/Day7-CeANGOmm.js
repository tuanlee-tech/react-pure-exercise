import{r as N,j as e,C as M}from"./index-BL23cSqg.js";/* empty css               */import{E as l}from"./ExerciseCard-Bn4ywqQz.js";import{C as a,B as d,I as E,M as k,S as L}from"./tooltip-Dy-nvUwJ.js";const w=[{id:1,name:"Áo thun",price:15e4,image:"👕"},{id:2,name:"Quần jean",price:35e4,image:"👖"},{id:3,name:"Giày thể thao",price:5e5,image:"👟"},{id:4,name:"Túi xách",price:25e4,image:"👜"}],f={GIAM10:10,GIAM50K:5e4,FREESHIP:0},P=t=>new Intl.NumberFormat("vi-VN").format(t),x={ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",UPDATE_QUANTITY:"UPDATE_QUANTITY",APPLY_COUPON:"APPLY_COUPON",REMOVE_COUPON:"REMOVE_COUPON"},A={add:t=>({type:x.ADD_ITEM,payload:t}),updateQuantity:(t,n)=>({type:x.UPDATE_QUANTITY,payload:{id:t,quantity:n}}),remove:t=>({type:x.REMOVE_ITEM,payload:t}),applyCoupon:t=>({type:x.APPLY_COUPON,payload:t}),removeCoupon:()=>({type:x.REMOVE_COUPON})};function q(t,n){switch(n.type){case x.ADD_ITEM:{const{id:r}=n.payload,o=t.items.some(c=>c.id===r);return{...t,shipping:3e4,items:o?t.items.map(c=>c.id===r?{...c,quantity:c.quantity+1}:c):[...t.items,{...n.payload,quantity:1}]}}case x.UPDATE_QUANTITY:{const{id:r,quantity:o}=n.payload;return o<=0?{...t,items:t.items.filter(c=>c.id!==r),shipping:t.items.length===1?0:t.shipping,coupon:t.items.length===1?null:t.coupon}:{...t,items:t.items.map(c=>c.id===r?{...c,quantity:o}:c)}}case x.REMOVE_ITEM:{const r=t.items.filter(o=>o.id!==n.payload);return{...t,items:r,shipping:r.length===0?0:3e4,coupon:r.length===0?null:t.coupon}}case x.APPLY_COUPON:return{...t,coupon:n.payload};case x.REMOVE_COUPON:return{...t,coupon:null};default:return t}}function Q(){const[t,n]=N.useReducer(q,{items:[],coupon:null,shipping:0}),[r,o]=N.useState(""),[c,s]=N.useState(!1),u=t.items.reduce((i,m)=>i+=m.price*m.quantity,0),h=(i=>{const{coupon:m}=t;if(m==="FREESHIP"||!m)return 0;const U=f[m],b=m==="GIAM10"?i*(U/100):U;return Math.min(b,i)})(u),v=t.shipping,y=t.coupon==="FREESHIP",_=u+(y?0:v)-h,C=()=>{const i=r.trim().toUpperCase();if(!i){s(!1),n(A.removeCoupon());return}i in f?(s(!1),n(A.applyCoupon(i))):(s(!0),n(A.applyCoupon(null)))},I=i=>{const m=i.target.value.trim().toUpperCase();o(m),m===""&&(s(!1),n(A.removeCoupon()))};return e.jsxs("div",{className:"shopping-cart",children:[e.jsx("h1",{children:"🛒 Giỏ Hàng"}),e.jsxs("div",{className:"products",children:[e.jsx("h2",{children:"Sản phẩm"}),e.jsx("div",{className:"product-grid",children:w.map(i=>e.jsxs(a,{className:"product-card",children:[e.jsxs(a.Content,{children:[e.jsx("span",{className:"product-icon",children:i.image}),e.jsx("h3",{children:i.name}),e.jsxs("p",{children:[P(i.price),"đ"]})]}),e.jsx(a.Footer,{children:e.jsx(d,{variant:"primary",size:"md",onClick:()=>n(A.add(i)),children:"Thêm vào giỏ"})})]},i.id))})]}),e.jsxs("div",{className:"cart-items",children:[e.jsxs("h2",{children:["Giỏ hàng (",t.items.length," sản phẩm)"]}),t.items.map(i=>e.jsxs("div",{className:"cart-item",children:[e.jsx("span",{className:"product-icon",children:i.image}),e.jsxs("div",{children:[e.jsx("h3",{children:i.name}),e.jsxs("p",{children:[P(i.price),"đ"]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Số lượng"}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx(d,{variant:"ghost",size:"sm",onClick:()=>n(i.quantity>1?A.updateQuantity(i.id,i.quantity-1):A.remove(i.id)),children:"-"}),e.jsx("span",{children:i.quantity}),e.jsx(d,{variant:"ghost",size:"sm",onClick:()=>n(A.updateQuantity(i.id,i.quantity+1)),children:"+"})]})]}),e.jsxs("div",{className:"sub-total",children:[e.jsx("h3",{children:"Tạm tính"}),e.jsxs("p",{children:[P(i.quantity*i.price),"đ"]})]}),e.jsx(d,{variant:"danger",size:"sm",onClick:()=>n(A.remove(i.id)),children:"❌"})]},i.id))]}),e.jsxs("div",{className:"coupon-section",children:[e.jsxs("div",{className:"coupon-input",children:[e.jsx(E,{placeholder:"Nhập mã giảm giá",value:r,onChange:I}),e.jsx(d,{variant:"secondary",onClick:C,children:"Áp dụng"})]}),t.coupon&&e.jsxs("div",{className:"applied-coupon",children:["Đã áp dụng: ",e.jsx("strong",{children:t.coupon})," ",e.jsx(d,{variant:"ghost",size:"sm",onClick:()=>{o(""),n(A.removeCoupon())},children:"Xóa"})]}),c&&e.jsx("span",{className:"error",children:"Mã khuyến mãi không tồn tại"})]}),e.jsxs(a,{className:"cart-summary",children:[e.jsxs(a.Content,{children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính:"}),e.jsxs("span",{children:[P(u),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Giảm giá:"}),e.jsxs("span",{children:[h>0&&"- ",P(h),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Vận chuyển:"}),e.jsx("span",{children:y?"Miễn phí":P(v)+"đ"})]}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{children:"Tổng cộng:"}),e.jsxs("span",{children:[P(Math.max(_,0)),"đ"]})]})]}),e.jsx(a.Footer,{children:e.jsx(d,{className:"checkout-btn",variant:"primary",size:"lg",children:"Thanh toán"})})]})]})}function G(){return e.jsxs(l,{children:[e.jsx(l.Header,{order:1,title:"Shopping Cart với useReducer"}),e.jsx(l.Description,{children:`
// TODO: Implement shopping cart với useReducer

const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  APPLY_COUPON: 'APPLY_COUPON',
  REMOVE_COUPON: 'REMOVE_COUPON'
};

function cartReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   items: [{ id, name, price, quantity, image }],
  //   coupon: { code, discount }, // null nếu không có
  //   shipping: 30000
  // }
  
  // Features:
  // - Thêm sản phẩm (nếu đã có thì tăng quantity)
  // - Xóa sản phẩm
  // - Update quantity (xóa nếu quantity = 0)
  // - Clear cart
  // - Apply coupon (validate code)
  // - Remove coupon
  // - Calculate: subtotal, discount, shipping, total
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    coupon: null,
    shipping: 30000
  });

  // TODO: Implement 
  const [couponInput, setCouponInput] = useState('');

  // Danh sách sản phẩm mẫu
  const products = [
    { id: 1, name: 'Áo thun', price: 150000, image: '👕' },
    { id: 2, name: 'Quần jean', price: 350000, image: '👖' },
    { id: 3, name: 'Giày thể thao', price: 500000, image: '👟' },
    { id: 4, name: 'Túi xách', price: 250000, image: '👜' }
  ];

  // Mã giảm giá hợp lệ
  const validCoupons = {
    'GIAM10': 10, // 10%
    'GIAM50K': 50000, // 50k
    'FREESHIP': 0 // Miễn phí ship
  };

  // TODO: Tính toán
  // const subtotal = ...
  // const discount = ...
  // const shippingCost = ...
  // const total = ...

  const handleAddToCart = (product) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: product
    });
  };

  const handleApplyCoupon = () => {
    // TODO: Validate và apply coupon
  };

  return (
    <div className="shopping-cart">
      <h1>Giỏ Hàng</h1>

      {/* Product List */}
      <div className="products">
        <h2>Sản phẩm</h2>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <span className="product-icon">{product.image}</span>
            <div>
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString('vi-VN')}đ</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        <h2>Giỏ hàng ({state.items.length} sản phẩm)</h2>
        {/* TODO: Render cart items với quantity controls */}
      </div>

      {/* Coupon */}
      <div className="coupon-section">
        {/* TODO: Coupon input và apply button */}
      </div>

      {/* Summary */}
      <div className="cart-summary">
        {/* TODO: Hiển thị subtotal, discount, shipping, total */}
      </div>
    </div>
  );
}

`}),e.jsx(l.Demo,{children:e.jsx(Q,{})}),e.jsx(l.Code,{children:`
import { Button, Card, Input } from "@ui";
import { useReducer, useState } from "react";

const products = [
  { id: 1, name: "Áo thun", price: 150000, image: "👕" },
  { id: 2, name: "Quần jean", price: 350000, image: "👖" },
  { id: 3, name: "Giày thể thao", price: 500000, image: "👟" },
  { id: 4, name: "Túi xách", price: 250000, image: "👜" },
];

const validCoupons = {
  GIAM10: 10,
  GIAM50K: 50000,
  FREESHIP: 0,
};

const formattedPrice = (num) => new Intl.NumberFormat("vi-VN").format(num);

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  APPLY_COUPON: "APPLY_COUPON",
  REMOVE_COUPON: "REMOVE_COUPON",
};

const cartActions = {
  add: (product) => ({ type: CART_ACTIONS.ADD_ITEM, payload: product }),
  updateQuantity: (id, quantity) => ({
    type: CART_ACTIONS.UPDATE_QUANTITY,
    payload: { id, quantity },
  }),
  remove: (id) => ({ type: CART_ACTIONS.REMOVE_ITEM, payload: id }),
  applyCoupon: (coupon) => ({
    type: CART_ACTIONS.APPLY_COUPON,
    payload: coupon,
  }),
  removeCoupon: () => ({ type: CART_ACTIONS.REMOVE_COUPON }),
};

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { id } = action.payload;
      const exists = state.items.some((item) => item.id === id);
      return {
        ...state,
        shipping: 30000,
        items: exists
          ? state.items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== id),
          shipping: state.items.length === 1 ? 0 : state.shipping,
          coupon: state.items.length === 1 ? null : state.coupon,
        };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      };
    }
    case CART_ACTIONS.REMOVE_ITEM: {
      const newItems = state.items.filter((i) => i.id !== action.payload);
      return {
        ...state,
        items: newItems,
        shipping: newItems.length === 0 ? 0 : 30000,
        coupon: newItems.length === 0 ? null : state.coupon,
      };
    }
    case CART_ACTIONS.APPLY_COUPON:
      return { ...state, coupon: action.payload };
    case CART_ACTIONS.REMOVE_COUPON:
      return { ...state, coupon: null };
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    coupon: null,
    shipping: 0,
  });
  const [couponInput, setCouponInput] = useState("");
  const [inValidCoupon, setInvalidCoupon] = useState(false);

  const subtotal = state.items.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0
  );

  const calculateDiscount = (subtotal) => {
    const { coupon } = state;
    if (coupon === "FREESHIP" || !coupon) return 0;
    const couponValue = validCoupons[coupon];
    const discount =
      coupon === "GIAM10" ? subtotal * (couponValue / 100) : couponValue;
    return Math.min(discount, subtotal);
  };

  const discount = calculateDiscount(subtotal);
  const shippingCost = state.shipping;
  const isFreeShip = state.coupon === "FREESHIP";
  const total = subtotal + (isFreeShip ? 0 : shippingCost) - discount;

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      setInvalidCoupon(false);
      dispatch(cartActions.removeCoupon());
      return;
    }
    if (code in validCoupons) {
      setInvalidCoupon(false);
      dispatch(cartActions.applyCoupon(code));
    } else {
      setInvalidCoupon(true);
      dispatch(cartActions.applyCoupon(null));
    }
  };

  const handleCouponChange = (e) => {
    const value = e.target.value.trim().toUpperCase();
    setCouponInput(value);
    if (value === "") {
      setInvalidCoupon(false);
      dispatch(cartActions.removeCoupon());
    }
  };

  return (
    <div className="shopping-cart">
      <h1>🛒 Giỏ Hàng</h1>

      {/* Danh sách sản phẩm */}
      <div className="products">
        <h2>Sản phẩm</h2>
        <div className="product-grid">
          {products.map((product) => (
            <Card key={product.id} className="product-card">
              <Card.Content>
                <span className="product-icon">{product.image}</span>
                <h3>{product.name}</h3>
                <p>{formattedPrice(product.price)}đ</p>
              </Card.Content>
              <Card.Footer>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => dispatch(cartActions.add(product))}
                >
                  Thêm vào giỏ
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>

      {/* Giỏ hàng */}
      <div className="cart-items">
        <h2>Giỏ hàng ({state.items.length} sản phẩm)</h2>
        {state.items.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="product-icon">{item.image}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{formattedPrice(item.price)}đ</p>
            </div>
            <div>
              <h3>Số lượng</h3>
              <div className="quantity-controls">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    dispatch(
                      item.quantity > 1
                        ? cartActions.updateQuantity(item.id, item.quantity - 1)
                        : cartActions.remove(item.id)
                    )
                  }
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    dispatch(
                      cartActions.updateQuantity(item.id, item.quantity + 1)
                    )
                  }
                >
                  +
                </Button>
              </div>
            </div>
            <div className="sub-total">
              <h3>Tạm tính</h3>
              <p>{formattedPrice(item.quantity * item.price)}đ</p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => dispatch(cartActions.remove(item.id))}
            >
              ❌
            </Button>
          </div>
        ))}
      </div>

      {/* Mã giảm giá */}
      <div className="coupon-section">
        <div className="coupon-input">
          <Input
            placeholder="Nhập mã giảm giá"
            value={couponInput}
            onChange={handleCouponChange}
          />
          <Button variant="secondary" onClick={handleApplyCoupon}>
            Áp dụng
          </Button>
        </div>
        {state.coupon && (
          <div className="applied-coupon">
            Đã áp dụng: <strong>{state.coupon}</strong>{" "}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setCouponInput("");
                dispatch(cartActions.removeCoupon());
              }}
            >
              Xóa
            </Button>
          </div>
        )}
        {inValidCoupon && (
          <span className="error">Mã khuyến mãi không tồn tại</span>
        )}
      </div>

      {/* Tóm tắt đơn hàng */}
      <Card className="cart-summary">
        <Card.Content>
          <div className="summary-row">
            <span>Tạm tính:</span>
            <span>{formattedPrice(subtotal)}đ</span>
          </div>
          <div className="summary-row">
            <span>Giảm giá:</span>
            <span>
              {discount > 0 && "- "}
              {formattedPrice(discount)}đ
            </span>
          </div>
          <div className="summary-row">
            <span>Vận chuyển:</span>
            <span>
              {isFreeShip ? "Miễn phí" : formattedPrice(shippingCost) + "đ"}
            </span>
          </div>
          <div className="summary-row total">
            <span>Tổng cộng:</span>
            <span>{formattedPrice(Math.max(total, 0))}đ</span>
          </div>
        </Card.Content>
        <Card.Footer>
          <Button className="checkout-btn" variant="primary" size="lg">
            Thanh toán
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

`})]})}const S={LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGOUT:"LOGOUT",REFRESH_TOKEN:"REFRESH_TOKEN",UPDATE_PROFILE:"UPDATE_PROFILE"},z=async({email:t,password:n})=>{try{if(t==="tuan@example.com"&&n==="123456")return await new Promise((o,c)=>setTimeout(()=>{Math.random()<.7?o({user:{id:"id1",name:"Tuan Le",email:t,avatar:"https://i.pravatar.cc/100?u=demo"},token:"SUPER_SECRET_TOKEN"}):c(new Error("Email hoặc mật khẩu không đúng"))},3e3));throw new Error("Email hoặc mật khẩu không đúng")}catch(r){throw console.error(r.message),r}};function F(t,n){switch(n.type){case S.LOGIN_START:return{...t,isLoading:!0,error:null};case S.LOGIN_SUCCESS:{const{token:r,user:o}=n.payload;return{...t,user:o,isAuthenticated:!0,isLoading:!1,token:r}}case S.LOGIN_FAILURE:return{...t,user:null,isAuthenticated:!1,isLoading:!1,error:n.payload,token:null};case S.LOGOUT:return{...t,user:null,isAuthenticated:!1,token:null};case S.REFRESH_TOKEN:return{...t,token:n.payload};case S.UPDATE_PROFILE:return{...t,user:{...t.user,...n.payload}};default:return t}}const H={user:null,isAuthenticated:!1,isLoading:!1,error:null,token:null};function V(t){try{const n=localStorage.getItem("auth");if(n){const{user:r,token:o}=JSON.parse(n);return{...t,user:r,token:o,isAuthenticated:!0}}return t}catch(n){return console.error(n.message),t}}function K(){const[t,n]=N.useReducer(F,H,V),[r,o]=N.useState({email:"",password:""}),c=async()=>{n({type:S.LOGIN_START});try{const C={email:r.email.trim(),password:r.password.trim()},I=await z(C);n({type:S.LOGIN_SUCCESS,payload:I}),localStorage.setItem("auth",JSON.stringify(I))}catch(C){n({type:S.LOGIN_FAILURE,payload:C.message})}},s=()=>{n({type:S.LOGOUT}),localStorage.removeItem("auth")},u=()=>{n({type:S.UPDATE_PROFILE,payload:{name:"John Doe",email:"johndoe@example.com"}})},{user:T,isAuthenticated:h,isLoading:v,error:y,token:_}=t;return e.jsxs("div",{className:"auth-app",children:[!h&&e.jsxs(a,{className:"auth-card",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Đăng nhập"}),e.jsx(a.Subtitle,{children:"Account : "}),e.jsx(a.Subtitle,{children:"tuan@example.com | 123456"})]}),e.jsx(a.Content,{children:e.jsxs("div",{className:"form-fields",children:[e.jsx(E,{label:"Email",placeholder:"you@example.com",name:"email",value:r.email,onChange:C=>o(I=>({...I,email:C.target.value}))}),e.jsx(E,{label:"Mật khẩu",type:"password",placeholder:"••••••••",name:"password",value:r.password,onChange:C=>o(I=>({...I,password:C.target.value}))}),v&&e.jsx("div",{className:"auth-progress-bar"}),y&&e.jsx("div",{className:"error-message",children:y||"Email hoặc mật khẩu không đúng"})]})}),e.jsx(a.Footer,{children:e.jsx(d,{disabled:v,onClick:c,variant:"primary",size:"lg",children:"Đăng nhập"})})]}),h&&T&&e.jsxs(a,{className:"auth-card",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Bảng điều khiển"}),e.jsxs(a.Subtitle,{children:["Xin chào, ",T.name]})]}),e.jsx(a.Content,{children:e.jsxs("div",{className:"user-section",children:[e.jsx("img",{src:T.avatar,alt:T.name,className:"user-avatar"}),e.jsx("p",{children:T.email})]})}),e.jsxs(a.Footer,{className:"text-center",children:[e.jsx(d,{onClick:u,variant:"secondary",className:"me-1",children:"Cập nhật hồ sơ"}),e.jsx(d,{onClick:s,variant:"danger",children:"Đăng xuất"})]})]})]})}function B(){return e.jsxs(l,{children:[e.jsx(l.Header,{order:2,title:"User Authentication Flow"}),e.jsx(l.Description,{children:`
// TODO: Implement authentication state machine

const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  UPDATE_PROFILE: 'UPDATE_PROFILE'
};

function authReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   user: { id, name, email, avatar } | null,
  //   isAuthenticated: boolean,
  //   isLoading: boolean,
  //   error: string | null,
  //   token: string | null
  // }

  // States: idle, loading, authenticated, error
  // Transitions:
  // - idle -> loading (LOGIN_START)
  // - loading -> authenticated (LOGIN_SUCCESS)
  // - loading -> error (LOGIN_FAILURE)
  // - authenticated -> idle (LOGOUT)
}

function AuthApp() {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    token: null
  });

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // TODO: Implement
  // - handleLogin (async)
  // - handleLogout
  // - handleUpdateProfile
  // - Load user from localStorage on mount
  // - Save to localStorage on login
  // - Clear localStorage on logout

  return (
    <div className="auth-app">
      {!state.isAuthenticated ? (
        <div className="login-form">
          {/* TODO: Login form */}
        </div>
      ) : (
        <div className="user-dashboard">
          {/* TODO: User profile và logout button */}
        </div>
      )}
    </div>
  );
}

`}),e.jsx(l.Demo,{children:e.jsx(K,{})}),e.jsx(l.Code,{children:`
// AuthApp.jsx — UI only
import { Card, Button, Input } from "@ui";
import { useReducer, useState } from "react";
const AUTH_ACTIONS = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  UPDATE_PROFILE: "UPDATE_PROFILE",
};
const mockLogin = async ({ email, password }) => {
  try {
    if (email === "tuan@example.com" && password === "123456") {
      const res = await new Promise((resolve, reject) =>
        setTimeout(() => {
          const success = Math.random() < 0.7; // 70% thanh cong
          if (success) {
            const user = {
              id: "id1",
              name: "Tuan Le",
              email,
              avatar: "https://i.pravatar.cc/100?u=demo",
            };
            const token = "SUPER_SECRET_TOKEN";
            resolve({ user, token });
          } else {
            reject(new Error("Email hoặc mật khẩu không đúng"));
          }
        }, 3000)
      );
      return res;
    } else {
      throw new Error("Email hoặc mật khẩu không đúng");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
function authReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   user: { id, name, email, avatar } | null,
  //   isAuthenticated: boolean,
  //   isLoading: boolean,
  //   error: string | null,
  //   token: string | null
  // }
  // States: idle, loading, authenticated, error
  // Transitions:
  // - idle -> loading (LOGIN_START)
  // - loading -> authenticated (LOGIN_SUCCESS)
  // - loading -> error (LOGIN_FAILURE)
  // - authenticated -> idle (LOGOUT)

  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, isLoading: true, error: null };
    case AUTH_ACTIONS.LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: true,
        isLoading: false,
        token,
      };
    }
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
        token: null,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };
    case AUTH_ACTIONS.REFRESH_TOKEN:
      return { ...state, token: action.payload };
    case AUTH_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,
};

// lazy initializer function
function init(initialState) {
  try {
    const saved = localStorage.getItem("auth");

    if (saved) {
      const { user, token } = JSON.parse(saved);
      return {
        ...initialState,
        user,
        token,
        isAuthenticated: true,
      };
    }

    return initialState;
  } catch (e) {
    console.error(e.message);
    return initialState;
  }
}

// ### ✅ Giải thích:
// 1. useReducer(reducer, initialArg, init)
//  initialArg =initialState
//  init = hàm lazy initializer
// 2. init(initialArg) chỉ chạy 1 lần khi component mount.
// 3. Tiết kiệm việc gọi localStorage.getItem trong useEffect.
// 4. Code cleaner, reducer state luôn khởi tạo đúng.

export default function AuthApp() {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // TODO: Implement
  // - handleLogin (async)
  // - handleLogout
  // - handleUpdateProfile
  // - Load user from localStorage on mount
  // - Save to localStorage on login
  // - Clear localStorage on logout
  const handleLogin = async () => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START });
    try {
      const userCredentials = {
        email: credentials.email.trim(),
        password: credentials.password.trim(),
      };
      const res = await mockLogin(userCredentials);
      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: res });
      localStorage.setItem("auth", JSON.stringify(res));
    } catch (e) {
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: e.message });
    }
  };
  const handleLogout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    localStorage.removeItem("auth");
  };
  const handleUpdateProfile = () => {
    dispatch({
      type: AUTH_ACTIONS.UPDATE_PROFILE,
      payload: { name: "John Doe", email: "johndoe@example.com" },
    });
  };
  const { user, isAuthenticated, isLoading, error, token } = state;
  return (
    <div className="auth-app">
      {/* Khi chưa đăng nhập */}
      {!isAuthenticated && (
        <Card className="auth-card">
          <Card.Header>
            <Card.Title>Đăng nhập</Card.Title>
            <Card.Subtitle>Account : </Card.Subtitle>
            <Card.Subtitle>tuan@example.com | 123456</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            <div className="form-fields">
              <Input
                label="Email"
                placeholder="you@example.com"
                name="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <Input
                label="Mật khẩu"
                type="password"
                placeholder="••••••••"
                name="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              {isLoading && <div className="auth-progress-bar"></div>}
              {error && (
                <div className="error-message">
                  {error || \`Email hoặc mật khẩu không đúng\`}
                </div>
              )}
            </div>
          </Card.Content>

          <Card.Footer>
            <Button
              disabled={isLoading}
              onClick={handleLogin}
              variant="primary"
              size="lg"
            >
              Đăng nhập
            </Button>
          </Card.Footer>
        </Card>
      )}

      {/* Khi đã đăng nhập */}
      {isAuthenticated && user && (
        <Card className="auth-card">
          <Card.Header>
            <Card.Title>Bảng điều khiển</Card.Title>
            <Card.Subtitle>Xin chào, {user.name}</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            <div className="user-section">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <p>{user.email}</p>
            </div>
          </Card.Content>

          <Card.Footer className="text-center">
            <Button
              onClick={handleUpdateProfile}
              variant="secondary"
              className="me-1"
            >
              Cập nhật hồ sơ
            </Button>
            <Button onClick={handleLogout} variant="danger">
              Đăng xuất
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

`})]})}const g={START_QUIZ:"START_QUIZ",ANSWER_QUESTION:"ANSWER_QUESTION",NEXT_QUESTION:"NEXT_QUESTION",PREV_QUESTION:"PREV_QUESTION",SUBMIT_QUIZ:"SUBMIT_QUIZ",RESTART_QUIZ:"RESTART_QUIZ",TICK:"TICK"},R=[{id:1,question:"React được phát triển bởi công ty nào?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"Hook nào dùng để quản lý state?",options:["useEffect","useState","useContext","useMemo"],correctAnswer:1},{id:3,question:"JSX là viết tắt của gì?",options:["JavaScript XML","Java Syntax Extension","JavaScript Extension","JSON XML"],correctAnswer:0}];function Y(t,n){switch(n.type){case g.START_QUIZ:return{...t,status:"active",startTime:Date.now(),timeRemaining:300,currentQuestionIndex:0,answers:{},score:null};case g.ANSWER_QUESTION:return{...t,answers:{...t.answers,[n.questionId]:n.answerIndex}};case g.NEXT_QUESTION:return{...t,currentQuestionIndex:Math.min(t.currentQuestionIndex+1,R.length-1)};case g.PREV_QUESTION:return{...t,currentQuestionIndex:Math.max(t.currentQuestionIndex-1,0)};case g.SUBMIT_QUIZ:const r=R.reduce((o,c)=>o+(t.answers[c.id]===c.correctAnswer?1:0),0);return{...t,status:"finished",score:r,endTime:Date.now()};case g.RESTART_QUIZ:return{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null};case g.TICK:if(t.timeRemaining<=1){const o=R.reduce((c,s)=>c+(t.answers[s.id]===s.correctAnswer?1:0),0);return{...t,status:"finished",score:o,timeRemaining:0,endTime:Date.now()}}return{...t,timeRemaining:t.timeRemaining-1};default:return t}}function X(){const[t,n]=N.useReducer(Y,{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null});N.useEffect(()=>{if(t.status==="active"&&t.timeRemaining>0){const s=setInterval(()=>n({type:g.TICK}),1e3);return()=>clearInterval(s)}},[t.status,t.timeRemaining]);const r=R[t.currentQuestionIndex],o=(t.currentQuestionIndex+1)/R.length*100,c=s=>`${Math.floor(s/60)}:${(s%60).toString().padStart(2,"0")}`;return e.jsxs("div",{className:"quizapp-app",children:[t.status==="idle"&&e.jsxs(a,{className:"quizapp-card",children:[e.jsxs(a.Header,{className:"quizapp-card-header",children:[e.jsx(a.Title,{className:"quizapp-card-title",children:"Quiz React"}),e.jsxs(a.Subtitle,{className:"quizapp-card-subtitle",children:["Tổng ",R.length," câu hỏi, 5 phút"]})]}),e.jsx(a.Content,{children:e.jsx(d,{variant:"primary",size:"lg",onClick:()=>n({type:g.START_QUIZ}),children:"Bắt đầu"})})]}),t.status==="active"&&e.jsxs(a,{className:"quizapp-card",children:[e.jsx(a.Header,{className:"quizapp-card-header",children:e.jsxs("div",{className:"quizapp-timer",children:["Thời gian còn lại: ",c(t.timeRemaining)]})}),e.jsxs(a.Content,{children:[e.jsx("div",{className:"quizapp-progress-container",children:e.jsx("div",{className:"quizapp-progress-bar",style:{width:`${o}%`}})}),e.jsx("div",{className:"quizapp-question",children:r.question}),e.jsx("div",{className:"quizapp-options",children:r.options.map((s,u)=>e.jsx(d,{variant:t.answers[r.id]===u?"secondary":"ghost",size:"md",className:"quizapp-option-button",onClick:()=>n({type:g.ANSWER_QUESTION,questionId:r.id,answerIndex:u}),children:s},u))})]}),e.jsxs(a.Footer,{className:"quizapp-navigation",children:[e.jsx(d,{variant:"ghost",size:"md",onClick:()=>n({type:g.PREV_QUESTION}),disabled:t.currentQuestionIndex===0,children:"Previous"}),t.currentQuestionIndex<R.length-1?e.jsx(d,{variant:"primary",size:"md",onClick:()=>n({type:g.NEXT_QUESTION}),children:"Next"}):e.jsx(d,{variant:"primary",size:"md",onClick:()=>n({type:g.SUBMIT_QUIZ}),children:"Submit"})]})]}),t.status==="finished"&&e.jsxs(a,{className:"quizapp-card",children:[e.jsxs(a.Header,{className:"quizapp-card-header",children:[e.jsx(a.Title,{className:"quizapp-card-title",children:"Kết quả"}),e.jsxs(a.Subtitle,{className:"quizapp-card-subtitle",children:["Bạn đạt ",t.score,"/",R.length," điểm"]})]}),e.jsx(a.Content,{children:R.map(s=>e.jsxs("div",{className:"quizapp-question",children:[e.jsx("div",{children:s.question}),e.jsx("div",{className:"quizapp-options",children:s.options.map((u,T)=>e.jsx(d,{variant:s.correctAnswer===T?"primary":t.answers[s.id]===T?"secondary":"ghost",size:"md",className:"quizapp-option-button",disabled:!0,children:u},T))})]},s.id))}),e.jsx(a.Footer,{className:"quizapp-navigation",children:e.jsx(d,{variant:"primary",size:"md",onClick:()=>n({type:g.RESTART_QUIZ}),children:"Restart"})})]})]})}function Z(){return e.jsxs(l,{children:[e.jsx(l.Header,{order:3,title:"Quiz App với Timer"}),e.jsx(l.Description,{children:`
// TODO: Implement quiz app với useReducer

const QUIZ_ACTIONS = {
  START_QUIZ: 'START_QUIZ',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREV_QUESTION: 'PREV_QUESTION',
  SUBMIT_QUIZ: 'SUBMIT_QUIZ',
  RESTART_QUIZ: 'RESTART_QUIZ',
  TICK: 'TICK' // Countdown timer
};

const quizQuestions = [
  {
    id: 1,
    question: 'React được phát triển bởi công ty nào?',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Hook nào dùng để quản lý state?',
    options: ['useEffect', 'useState', 'useContext', 'useMemo'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'JSX là viết tắt của gì?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'JSON XML'],
    correctAnswer: 0
  },
  // Thêm câu hỏi khác...
];

function quizReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   status: 'idle' | 'active' | 'finished',
  //   currentQuestionIndex: number,
  //   answers: { questionId: selectedOption },
  //   timeRemaining: number (seconds),
  //   score: number | null,
  //   startTime: timestamp,
  //   endTime: timestamp
  // }

  // Features:
  // - Start quiz (set timeRemaining = 300 = 5 phút)
  // - Answer question (lưu vào answers object)
  // - Next/Previous question
  // - Submit quiz (tính score)
  // - Timer countdown (TICK action mỗi giây)
  // - Auto submit khi hết giờ
  // - Restart quiz
}

function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, {
    status: 'idle',
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 300, // 5 phút
    score: null,
    startTime: null,
    endTime: null
  });

  // TODO: Setup timer với useEffect
  // useEffect(() => {
  //   if (state.status === 'active' && state.timeRemaining > 0) {
  //     const timer = setInterval(() => {
  //       dispatch({ type: QUIZ_ACTIONS.TICK });
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   } else if (state.timeRemaining === 0) {
  //     // Auto submit
  //   }
  // }, [state.status, state.timeRemaining]);

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  // Format thời gian: mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="quiz-app">
      {state.status === 'idle' && (
        <div className="quiz-start">
          <h1>Quiz React</h1>
          <p>Tổng số câu hỏi: {quizQuestions.length}</p>
          <p>Thời gian: 5 phút</p>
          <button onClick={() => dispatch({ type: QUIZ_ACTIONS.START_QUIZ })}>
            Bắt đầu
          </button>
        </div>
      )}

      {state.status === 'active' && (
        <div className="quiz-active">
          {/* Timer */}
          <div className="timer">
            Thời gian còn lại: {formatTime(state.timeRemaining)}
          </div>

          {/* Progress */}
          <div className="progress">
            Câu {state.currentQuestionIndex + 1} / {quizQuestions.length}
            <div className="progress-bar" style={{ width: \`\${progress}%\` }} />
          </div>

          {/* Question */}
          <div className="question">
            {/* TODO: Render question và options */}
          </div>

          {/* Navigation */}
          <div className="navigation">
            {/* TODO: Previous, Next, Submit buttons */}
          </div>
        </div>
      )}

      {state.status === 'finished' && (
        <div className="quiz-results">
          {/* TODO: Hiển thị kết quả, review answers */}
        </div>
      )}
    </div>
  );
}


`}),e.jsx(l.Demo,{children:e.jsx(X,{})}),e.jsx(l.Code,{children:`

`})]})}const j={ADD_TASK:"ADD_TASK",MOVE_TASK:"MOVE_TASK",UPDATE_TASK:"UPDATE_TASK",DELETE_TASK:"DELETE_TASK",ADD_COLUMN:"ADD_COLUMN",DELETE_COLUMN:"DELETE_COLUMN"};function J(t,n){switch(n.type){case j.ADD_TASK:{const i=`task-${Date.now()}`,m={id:i,content:n.payload.content,priority:n.payload.priority||"normal",assignee:n.payload.assignee||""};return{...t,tasks:{...t.tasks,[i]:m},columns:{...t.columns,[n.payload.columnId]:{...t.columns[n.payload.columnId],taskIds:[...t.columns[n.payload.columnId].taskIds,i]}}}}case j.MOVE_TASK:const{sourceColumnId:r,destColumnId:o,taskId:c,destIndex:s}=n,u=t.columns[r].taskIds.filter(i=>i!==c),T=[...t.columns[o].taskIds];return T.splice(s,0,c),{...t,columns:{...t.columns,[r]:{...t.columns[r],taskIds:u},[o]:{...t.columns[o],taskIds:T}}};case j.UPDATE_TASK:return{...t,tasks:{...t.tasks,[n.taskId]:{...t.tasks[n.taskId],...n.updates}}};case j.DELETE_TASK:const{[n.taskId]:h,...v}=t.tasks,y=Object.fromEntries(Object.entries(t.columns).map(([i,m])=>[i,{...m,taskIds:m.taskIds.filter(U=>U!==n.taskId)}]));return{...t,tasks:v,columns:y};case j.ADD_COLUMN:return{...t,columns:{...t.columns,[n.columnId]:{id:n.columnId,title:n.title,taskIds:[]}},columnOrder:[...t.columnOrder,n.columnId]};case j.DELETE_COLUMN:const{[n.columnId]:_,...C}=t.columns,I=_.taskIds.reduce((i,m)=>({...i,[m]:t.tasks[m]}),{});return{...t,columns:C,tasks:{...t.tasks,...I},columnOrder:t.columnOrder.filter(i=>i!==n.columnId)};default:return t}}function W(){const[t,n]=N.useReducer(J,{columns:{todo:{id:"todo",title:"Cần làm",taskIds:[]},inProgress:{id:"inProgress",title:"Đang làm",taskIds:[]},done:{id:"done",title:"Hoàn thành",taskIds:[]}},tasks:{},columnOrder:["todo","inProgress","done"]}),[r,o]=N.useState(!1),[c,s]=N.useState(""),[u,T]=N.useState("todo");return e.jsxs("div",{className:"cs-kanban-board",children:[e.jsx("h1",{children:"Kanban Board"}),e.jsx("div",{className:"cs-kanban-columns",children:t.columnOrder.map(h=>{const v=t.columns[h],y=v.taskIds.map(_=>t.tasks[_]);return e.jsxs("div",{className:"cs-kanban-column",children:[e.jsx("h2",{children:v.title}),e.jsx("div",{className:"cs-kanban-tasks",children:y.map(_=>e.jsxs(a,{className:"cs-kanban-task-card",children:[e.jsx(a.Content,{children:_.content}),e.jsxs(a.Footer,{children:[e.jsx(d,{size:"sm",variant:"ghost",children:"Edit"}),e.jsx(d,{size:"sm",variant:"danger",children:"Delete"})]})]},_.id))}),e.jsx("div",{className:"cs-kanban-add-task",children:e.jsx(d,{size:"sm",variant:"primary",onClick:()=>o(!0),children:"+ Thêm task"})})]},h)})}),e.jsxs(k,{isOpen:r,onClose:()=>o(!1),children:[e.jsx(k.Header,{onClose:()=>o(!1),children:"Thêm Task Mới"}),e.jsxs(k.Body,{children:[e.jsx(E,{label:"Nội dung task",value:c,onChange:h=>s(h.target.value)}),e.jsx(L,{label:"Chọn cột",value:u,onChange:h=>T(h.target.value),options:t.columnOrder.map(h=>({value:h,label:t.columns[h].title}))})]}),e.jsxs(k.Footer,{children:[e.jsx(d,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(d,{variant:"primary",onClick:()=>{n({type:j.ADD_TASK,payload:{content:c,columnId:u}}),s(""),o(!1)},children:"Add"})]})]})]})}function $(){return e.jsxs(l,{children:[e.jsx(l.Header,{order:4,title:"Kanban Board"}),e.jsx(l.Description,{children:`
// TODO: Implement Kanban board với drag & drop

const KANBAN_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  MOVE_TASK: 'MOVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  ADD_COLUMN: 'ADD_COLUMN',
  DELETE_COLUMN: 'DELETE_COLUMN'
};

function kanbanReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   columns: {
  //     'todo': {
  //       id: 'todo',
  //       title: 'Cần làm',
  //       taskIds: ['task-1', 'task-2']
  //     },
  //     'inProgress': { ... },
  //     'done': { ... }
  //   },
  //   tasks: {
  //     'task-1': {
  //       id: 'task-1',
  //       content: 'Học React',
  //       priority: 'high',
  //       assignee: 'John'
  //     }
  //   },
  //   columnOrder: ['todo', 'inProgress', 'done']
  // }

  // Features:
  // - Add task to column
  // - Move task between columns
  // - Update task details
  // - Delete task
  // - Add new column
  // - Delete column (move tasks to another column)
}

function KanbanBoard() {
  const [state, dispatch] = useReducer(kanbanReducer, {
    columns: {
      todo: { id: 'todo', title: 'Cần làm', taskIds: [] },
      inProgress: { id: 'inProgress', title: 'Đang làm', taskIds: [] },
      done: { id: 'done', title: 'Hoàn thành', taskIds: [] }
    },
    tasks: {},
    columnOrder: ['todo', 'inProgress', 'done']
  });

  // TODO: Implement
  // - Drag & drop functionality
  // - Add task modal/form
  // - Task card với edit/delete
  // - Column management
  // - Task filtering (by priority, assignee)
  // - Search tasks

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      
      <div className="columns">
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

          return (
            <div key={columnId} className="column">
              <h2>{column.title}</h2>
              <div className="tasks">
                {tasks.map(task => (
                  <div key={task.id} className="task-card">
                    {/* TODO: Task card */}
                  </div>
                ))}
              </div>
              <button>+ Thêm task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

`}),e.jsx(l.Demo,{children:e.jsx(W,{})}),e.jsx(l.Code,{children:`

`})]})}const p={SET_STEP:"SET_STEP",NEXT_STEP:"NEXT_STEP",PREV_STEP:"PREV_STEP",UPDATE_CART:"UPDATE_CART",UPDATE_SHIPPING:"UPDATE_SHIPPING",UPDATE_PAYMENT:"UPDATE_PAYMENT",APPLY_PROMO:"APPLY_PROMO",PLACE_ORDER:"PLACE_ORDER",SET_ERRORS:"SET_ERRORS"},O={CART:0,SHIPPING:1,PAYMENT:2,REVIEW:3,CONFIRMATION:4};function ee(t,n){switch(n.type){case p.NEXT_STEP:return{...t,currentStep:t.currentStep+1};case p.PREV_STEP:return{...t,currentStep:t.currentStep-1};case p.SET_STEP:return{...t,currentStep:n.step};case p.UPDATE_CART:return{...t,cart:{...t.cart,...n.payload}};case p.UPDATE_SHIPPING:return{...t,shipping:{...t.shipping,...n.payload}};case p.UPDATE_PAYMENT:return{...t,payment:{...t.payment,...n.payload}};case p.APPLY_PROMO:return{...t,promoCode:n.payload};case p.SET_ERRORS:return{...t,errors:n.payload};case p.PLACE_ORDER:return{...t,isProcessing:!0};default:return t}}function te(){const[t,n]=N.useReducer(ee,{currentStep:O.CART,cart:{items:[{id:1,name:"Sản phẩm 1",price:1e5,quantity:2},{id:2,name:"Sản phẩm 2",price:2e5,quantity:1}],subtotal:0,shipping:0,tax:0,discount:0,total:0},shipping:{fullName:"",address:"",city:"",zipCode:"",phone:"",method:"standard"},payment:{method:"card",cardNumber:"",cardName:"",expiryDate:"",cvv:""},promoCode:{code:"",discount:0},errors:{},isProcessing:!1,orderNumber:null}),r=["Giỏ hàng","Thông tin giao hàng","Thanh toán","Xác nhận","Hoàn tất"],o=()=>n({type:p.NEXT_STEP}),c=()=>n({type:p.PREV_STEP});return e.jsxs("div",{className:"checkout-flow",children:[e.jsx("h1",{children:"Thanh Toán"}),e.jsx("div",{className:"steps",children:r.map((s,u)=>e.jsxs("div",{className:`step ${u===t.currentStep?"active":""} ${u<t.currentStep?"completed":""}`,children:[e.jsx("div",{className:"step-number",children:u+1}),e.jsx("div",{className:"step-title",children:s})]},u))}),e.jsxs("div",{className:"step-content",children:[t.currentStep===O.CART&&e.jsx("div",{className:"cart-step",children:t.cart.items.map(s=>e.jsxs(a,{className:"card-hover",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:s.name}),e.jsxs(a.Subtitle,{children:[s.price.toLocaleString()," VND"]})]}),e.jsxs(a.Content,{children:["Số lượng: ",s.quantity]})]},s.id))}),t.currentStep===O.SHIPPING&&e.jsxs("div",{className:"shipping-step",children:[e.jsx(E,{label:"Họ và tên",value:t.shipping.fullName,onChange:s=>n({type:p.UPDATE_SHIPPING,payload:{fullName:s.target.value}})}),e.jsx(E,{label:"Địa chỉ",value:t.shipping.address,onChange:s=>n({type:p.UPDATE_SHIPPING,payload:{address:s.target.value}})}),e.jsx(E,{label:"Thành phố",value:t.shipping.city,onChange:s=>n({type:p.UPDATE_SHIPPING,payload:{city:s.target.value}})}),e.jsx(E,{label:"Mã bưu điện",value:t.shipping.zipCode,onChange:s=>n({type:p.UPDATE_SHIPPING,payload:{zipCode:s.target.value}})}),e.jsx(E,{label:"Số điện thoại",value:t.shipping.phone,onChange:s=>n({type:p.UPDATE_SHIPPING,payload:{phone:s.target.value}})})]}),t.currentStep===O.PAYMENT&&e.jsxs("div",{className:"payment-step",children:[e.jsx(L,{label:"Phương thức thanh toán",value:t.payment.method,onChange:s=>n({type:p.UPDATE_PAYMENT,payload:{method:s.target.value}}),options:[{value:"card",label:"Thẻ tín dụng"},{value:"momo",label:"MoMo"},{value:"cod",label:"Thanh toán khi nhận hàng"}]}),t.payment.method==="card"&&e.jsxs(e.Fragment,{children:[e.jsx(E,{label:"Số thẻ",value:t.payment.cardNumber,onChange:s=>n({type:p.UPDATE_PAYMENT,payload:{cardNumber:s.target.value}})}),e.jsx(E,{label:"Tên chủ thẻ",value:t.payment.cardName,onChange:s=>n({type:p.UPDATE_PAYMENT,payload:{cardName:s.target.value}})}),e.jsx(E,{label:"Ngày hết hạn",value:t.payment.expiryDate,onChange:s=>n({type:p.UPDATE_PAYMENT,payload:{expiryDate:s.target.value}})}),e.jsx(E,{label:"CVV",value:t.payment.cvv,onChange:s=>n({type:p.UPDATE_PAYMENT,payload:{cvv:s.target.value}})})]})]}),t.currentStep===O.REVIEW&&e.jsx("div",{className:"review-step",children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Đơn hàng"})}),e.jsx(a.Content,{children:t.cart.items.map(s=>e.jsxs("div",{children:[s.name," x ",s.quantity," -"," ",(s.price*s.quantity).toLocaleString()," VND"]},s.id))})]})}),t.currentStep===O.CONFIRMATION&&e.jsxs("div",{className:"confirmation-step",children:[e.jsx("h2",{children:"Đặt hàng thành công!"}),e.jsxs("p",{children:["Mã đơn hàng: #",t.orderNumber||"123456"]})]})]}),e.jsxs("div",{className:"navigation",children:[t.currentStep>O.CART&&t.currentStep<O.CONFIRMATION&&e.jsx(d,{variant:"secondary",size:"lg",onClick:c,children:"Quay lại"}),t.currentStep<O.REVIEW&&e.jsx(d,{variant:"primary",size:"lg",onClick:o,children:"Tiếp tục"}),t.currentStep===O.REVIEW&&e.jsx(d,{variant:"primary",size:"lg",disabled:t.isProcessing,children:t.isProcessing?"Đang xử lý...":"Đặt hàng"})]}),e.jsx("div",{className:"order-summary",children:e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(a.Title,{children:"Tổng đơn hàng"})}),e.jsx(a.Content,{children:t.cart.items.map(s=>e.jsxs("div",{children:[s.name," x ",s.quantity," -"," ",(s.price*s.quantity).toLocaleString()," VND"]},s.id))})]})})]})}function ne(){return e.jsxs(l,{children:[e.jsx(l.Header,{order:5,title:"Multi-Step Checkout (Challenge)"}),e.jsx(l.Description,{children:`
// TODO: Implement checkout flow với validation

const CHECKOUT_ACTIONS = {
  SET_STEP: 'SET_STEP',
  NEXT_STEP: 'NEXT_STEP',
  PREV_STEP: 'PREV_STEP',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_SHIPPING: 'UPDATE_SHIPPING',
  UPDATE_PAYMENT: 'UPDATE_PAYMENT',
  APPLY_PROMO: 'APPLY_PROMO',
  PLACE_ORDER: 'PLACE_ORDER',
  SET_ERRORS: 'SET_ERRORS'
};

const STEPS = {
  CART: 0,
  SHIPPING: 1,
  PAYMENT: 2,
  REVIEW: 3,
  CONFIRMATION: 4
};

function checkoutReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   currentStep: number,
  //   cart: {
  //     items: [...],
  //     subtotal: number,
  //     shipping: number,
  //     tax: number,
  //     discount: number,
  //     total: number
  //   },
  //   shipping: {
  //     fullName: '',
  //     address: '',
  //     city: '',
  //     zipCode: '',
  //     phone: '',
  //     method: 'standard' | 'express'
  //   },
  //   payment: {
  //     method: 'card' | 'momo' | 'cod',
  //     cardNumber: '',
  //     cardName: '',
  //     expiryDate: '',
  //     cvv: ''
  //   },
  //   promoCode: { code: '', discount: 0 },
  //   errors: {},
  //   isProcessing: false,
  //   orderNumber: null
  // }

  // Features:
  // - Navigate between steps
  // - Validate each step before proceed
  // - Update cart (quantity, remove items)
  // - Calculate totals automatically
  // - Apply promo code
  // - Different payment methods
  // - Shipping methods (standard/express)
  // - Order confirmation
}

function CheckoutFlow() {
  const [state, dispatch] = useReducer(checkoutReducer, {
    currentStep: STEPS.CART,
    cart: {
      items: [
        { id: 1, name: 'Sản phẩm 1', price: 100000, quantity: 2 },
        { id: 2, name: 'Sản phẩm 2', price: 200000, quantity: 1 }
      ],
      subtotal: 0,
      shipping: 0,
      tax: 0,
      discount: 0,
      total: 0
    },
    shipping: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      phone: '',
      method: 'standard'
    },
    payment: {
      method: 'card',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    },
    promoCode: { code: '', discount: 0 },
    errors: {},
    isProcessing: false,
    orderNumber: null
  });

  const stepTitles = [
    'Giỏ hàng',
    'Thông tin giao hàng',
    'Thanh toán',
    'Xác nhận',
    'Hoàn tất'
  ];

  // TODO: Validation functions
  const validateCart = () => {
    // Cart có items
  };

  const validateShipping = () => {
    // Tất cả fields required
    // Phone format
    // Zip code format
  };

  const validatePayment = () => {
    // Card number format
    // Expiry date valid
    // CVV format
  };

  const handleNext = () => {
    // TODO: Validate current step trước khi next
  };

  const handlePlaceOrder = async () => {
    // TODO: Submit order
  };

  return (
    <div className="checkout-flow">
      <h1>Thanh Toán</h1>

      {/* Progress Steps */}
      <div className="steps">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            className={\`step \${index === state.currentStep ? 'active' : ''} \${
              index < state.currentStep ? 'completed' : ''
            }\`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{title}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">
        {state.currentStep === STEPS.CART && (
          <div className="cart-step">
            {/* TODO: Cart items với quantity controls */}
          </div>
        )}

        {state.currentStep === STEPS.SHIPPING && (
          <div className="shipping-step">
            {/* TODO: Shipping form */}
          </div>
        )}

        {state.currentStep === STEPS.PAYMENT && (
          <div className="payment-step">
            {/* TODO: Payment methods và form */}
          </div>
        )}

        {state.currentStep === STEPS.REVIEW && (
          <div className="review-step">
            {/* TODO: Review tất cả thông tin */}
          </div>
        )}

        {state.currentStep === STEPS.CONFIRMATION && (
          <div className="confirmation-step">
            {/* TODO: Order confirmation */}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation">
        {state.currentStep > STEPS.CART && state.currentStep < STEPS.CONFIRMATION && (
          <button onClick={() => dispatch({ type: CHECKOUT_ACTIONS.PREV_STEP })}>
            Quay lại
          </button>
        )}

        {state.currentStep < STEPS.REVIEW && (
          <button onClick={handleNext}>
            Tiếp tục
          </button>
        )}

        {state.currentStep === STEPS.REVIEW && (
          <button onClick={handlePlaceOrder} disabled={state.isProcessing}>
            {state.isProcessing ? 'Đang xử lý...' : 'Đặt hàng'}
          </button>
        )}
      </div>

      {/* Order Summary Sidebar */}
      <div className="order-summary">
        {/* TODO: Summary hiển thị ở tất cả steps */}
      </div>
    </div>
  );
}

`}),e.jsx(l.Demo,{children:e.jsx(te,{})}),e.jsx(l.Code,{children:`

`})]})}const D={1:G,2:B,3:Z,4:$,5:ne},oe=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(M,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 7"}),e.jsx("p",{className:"day-subtitle",children:"useReducer - Complex State Logic"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu useReducer và khi nào dùng"}),e.jsx("li",{children:"Reducer pattern và Redux-like state management"}),e.jsx("li",{children:"Action types và action creators"}),e.jsx("li",{children:"So sánh useReducer vs useState"}),e.jsx("li",{children:"Complex state logic patterns"}),e.jsx("li",{children:"Best practices và optimization"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(D).map(t=>{const n=D[t];return n?e.jsx(n,{},t):null})})]});export{oe as default};
