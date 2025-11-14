import{r as g,j as e,C as oe}from"./index-CFIyM3YC.js";/* empty css               */import{E as h}from"./ExerciseCard-CsYl27D1.js";import{C as c,B as u,I as v,S as w,M as P}from"./tooltip-D3RVTba6.js";import{T as re}from"./Tooltip-BXoJ4k9x.js";const ce=[{id:1,name:"Áo thun",price:15e4,image:"👕"},{id:2,name:"Quần jean",price:35e4,image:"👖"},{id:3,name:"Giày thể thao",price:5e5,image:"👟"},{id:4,name:"Túi xách",price:25e4,image:"👜"}],F={GIAM10:10,GIAM50K:5e4,FREESHIP:0},M=t=>new Intl.NumberFormat("vi-VN").format(t),R={ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",UPDATE_QUANTITY:"UPDATE_QUANTITY",APPLY_COUPON:"APPLY_COUPON",REMOVE_COUPON:"REMOVE_COUPON"},_={add:t=>({type:R.ADD_ITEM,payload:t}),updateQuantity:(t,a)=>({type:R.UPDATE_QUANTITY,payload:{id:t,quantity:a}}),remove:t=>({type:R.REMOVE_ITEM,payload:t}),applyCoupon:t=>({type:R.APPLY_COUPON,payload:t}),removeCoupon:()=>({type:R.REMOVE_COUPON})};function le(t,a){switch(a.type){case R.ADD_ITEM:{const{id:s}=a.payload,o=t.items.some(r=>r.id===s);return{...t,shipping:3e4,items:o?t.items.map(r=>r.id===s?{...r,quantity:r.quantity+1}:r):[...t.items,{...a.payload,quantity:1}]}}case R.UPDATE_QUANTITY:{const{id:s,quantity:o}=a.payload;return o<=0?{...t,items:t.items.filter(r=>r.id!==s),shipping:t.items.length===1?0:t.shipping,coupon:t.items.length===1?null:t.coupon}:{...t,items:t.items.map(r=>r.id===s?{...r,quantity:o}:r)}}case R.REMOVE_ITEM:{const s=t.items.filter(o=>o.id!==a.payload);return{...t,items:s,shipping:s.length===0?0:3e4,coupon:s.length===0?null:t.coupon}}case R.APPLY_COUPON:return{...t,coupon:a.payload};case R.REMOVE_COUPON:return{...t,coupon:null};default:return t}}function de(){const[t,a]=g.useReducer(le,{items:[],coupon:null,shipping:0}),[s,o]=g.useState(""),[r,n]=g.useState(!1),d=t.items.reduce((l,A)=>l+=A.price*A.quantity,0),C=(l=>{const{coupon:A}=t;if(A==="FREESHIP"||!A)return 0;const D=F[A],Q=A==="GIAM10"?l*(D/100):D;return Math.min(Q,l)})(d),O=t.shipping,L=t.coupon==="FREESHIP",U=d+(L?0:O)-C,y=()=>{const l=s.trim().toUpperCase();if(!l){n(!1),a(_.removeCoupon());return}l in F?(n(!1),a(_.applyCoupon(l))):(n(!0),a(_.applyCoupon(null)))},N=l=>{const A=l.target.value.trim().toUpperCase();o(A),A===""&&(n(!1),a(_.removeCoupon()))};return e.jsxs("div",{className:"shopping-cart",children:[e.jsx("h1",{children:"🛒 Giỏ Hàng"}),e.jsxs("div",{className:"products",children:[e.jsx("h2",{children:"Sản phẩm"}),e.jsx("div",{className:"product-grid",children:ce.map(l=>e.jsxs(c,{className:"product-card",children:[e.jsxs(c.Content,{children:[e.jsx("span",{className:"product-icon",children:l.image}),e.jsx("h3",{children:l.name}),e.jsxs("p",{children:[M(l.price),"đ"]})]}),e.jsx(c.Footer,{children:e.jsx(u,{variant:"primary",size:"md",onClick:()=>a(_.add(l)),children:"Thêm vào giỏ"})})]},l.id))})]}),e.jsxs("div",{className:"cart-items",children:[e.jsxs("h2",{children:["Giỏ hàng (",t.items.length," sản phẩm)"]}),t.items.map(l=>e.jsxs("div",{className:"cart-item",children:[e.jsx("span",{className:"product-icon",children:l.image}),e.jsxs("div",{children:[e.jsx("h3",{children:l.name}),e.jsxs("p",{children:[M(l.price),"đ"]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Số lượng"}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>a(l.quantity>1?_.updateQuantity(l.id,l.quantity-1):_.remove(l.id)),children:"-"}),e.jsx("span",{children:l.quantity}),e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>a(_.updateQuantity(l.id,l.quantity+1)),children:"+"})]})]}),e.jsxs("div",{className:"sub-total",children:[e.jsx("h3",{children:"Tạm tính"}),e.jsxs("p",{children:[M(l.quantity*l.price),"đ"]})]}),e.jsx(u,{variant:"danger",size:"sm",onClick:()=>a(_.remove(l.id)),children:"❌"})]},l.id))]}),e.jsxs("div",{className:"coupon-section",children:[e.jsxs("div",{className:"coupon-input",children:[e.jsx(v,{placeholder:"Nhập mã giảm giá",value:s,onChange:N}),e.jsx(u,{variant:"secondary",onClick:y,children:"Áp dụng"})]}),t.coupon&&e.jsxs("div",{className:"applied-coupon",children:["Đã áp dụng: ",e.jsx("strong",{children:t.coupon})," ",e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>{o(""),a(_.removeCoupon())},children:"Xóa"})]}),r&&e.jsx("span",{className:"error",children:"Mã khuyến mãi không tồn tại"})]}),e.jsxs(c,{className:"cart-summary",children:[e.jsxs(c.Content,{children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính:"}),e.jsxs("span",{children:[M(d),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Giảm giá:"}),e.jsxs("span",{children:[C>0&&"- ",M(C),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Vận chuyển:"}),e.jsx("span",{children:L?"Miễn phí":M(O)+"đ"})]}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{children:"Tổng cộng:"}),e.jsxs("span",{children:[M(Math.max(U,0)),"đ"]})]})]}),e.jsx(c.Footer,{children:e.jsx(u,{className:"checkout-btn",variant:"primary",size:"lg",children:"Thanh toán"})})]})]})}function ue(){return e.jsxs(h,{children:[e.jsx(h.Header,{order:1,title:"Shopping Cart với useReducer"}),e.jsx(h.Description,{children:`
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

`}),e.jsx(h.Demo,{children:e.jsx(de,{})}),e.jsx(h.Code,{children:`
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

`})]})}const k={LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGOUT:"LOGOUT",REFRESH_TOKEN:"REFRESH_TOKEN",UPDATE_PROFILE:"UPDATE_PROFILE"},me=async({email:t,password:a})=>{try{if(t==="tuan@example.com"&&a==="123456")return await new Promise((o,r)=>setTimeout(()=>{Math.random()<.7?o({user:{id:"id1",name:"Tuan Le",email:t,avatar:"https://i.pravatar.cc/100?u=demo"},token:"SUPER_SECRET_TOKEN"}):r(new Error("Email hoặc mật khẩu không đúng"))},3e3));throw new Error("Email hoặc mật khẩu không đúng")}catch(s){throw console.error(s.message),s}};function pe(t,a){switch(a.type){case k.LOGIN_START:return{...t,isLoading:!0,error:null};case k.LOGIN_SUCCESS:{const{token:s,user:o}=a.payload;return{...t,user:o,isAuthenticated:!0,isLoading:!1,token:s}}case k.LOGIN_FAILURE:return{...t,user:null,isAuthenticated:!1,isLoading:!1,error:a.payload,token:null};case k.LOGOUT:return{...t,user:null,isAuthenticated:!1,token:null};case k.REFRESH_TOKEN:return{...t,token:a.payload};case k.UPDATE_PROFILE:return{...t,user:{...t.user,...a.payload}};default:return t}}const he={user:null,isAuthenticated:!1,isLoading:!1,error:null,token:null};function Te(t){try{const a=localStorage.getItem("auth");if(a){const{user:s,token:o}=JSON.parse(a);return{...t,user:s,token:o,isAuthenticated:!0}}return t}catch(a){return console.error(a.message),t}}function Ie(){const[t,a]=g.useReducer(pe,he,Te),[s,o]=g.useState({email:"",password:""}),r=async()=>{a({type:k.LOGIN_START});try{const y={email:s.email.trim(),password:s.password.trim()},N=await me(y);a({type:k.LOGIN_SUCCESS,payload:N}),localStorage.setItem("auth",JSON.stringify(N))}catch(y){a({type:k.LOGIN_FAILURE,payload:y.message})}},n=()=>{a({type:k.LOGOUT}),localStorage.removeItem("auth")},d=()=>{a({type:k.UPDATE_PROFILE,payload:{name:"John Doe",email:"johndoe@example.com"}})},{user:m,isAuthenticated:C,isLoading:O,error:L,token:U}=t;return e.jsxs("div",{className:"auth-app",children:[!C&&e.jsxs(c,{className:"auth-card",children:[e.jsxs(c.Header,{children:[e.jsx(c.Title,{children:"Đăng nhập"}),e.jsx(c.Subtitle,{children:"Account : "}),e.jsx(c.Subtitle,{children:"tuan@example.com | 123456"})]}),e.jsx(c.Content,{children:e.jsxs("div",{className:"form-fields",children:[e.jsx(v,{label:"Email",placeholder:"you@example.com",name:"email",value:s.email,onChange:y=>o(N=>({...N,email:y.target.value}))}),e.jsx(v,{label:"Mật khẩu",type:"password",placeholder:"••••••••",name:"password",value:s.password,onChange:y=>o(N=>({...N,password:y.target.value}))}),O&&e.jsx("div",{className:"auth-progress-bar"}),L&&e.jsx("div",{className:"error-message",children:L||"Email hoặc mật khẩu không đúng"})]})}),e.jsx(c.Footer,{children:e.jsx(u,{disabled:O,onClick:r,variant:"primary",size:"lg",children:"Đăng nhập"})})]}),C&&m&&e.jsxs(c,{className:"auth-card",children:[e.jsxs(c.Header,{children:[e.jsx(c.Title,{children:"Bảng điều khiển"}),e.jsxs(c.Subtitle,{children:["Xin chào, ",m.name]})]}),e.jsx(c.Content,{children:e.jsxs("div",{className:"user-section",children:[e.jsx("img",{src:m.avatar,alt:m.name,className:"user-avatar"}),e.jsx("p",{children:m.email})]})}),e.jsxs(c.Footer,{className:"text-center",children:[e.jsx(u,{onClick:d,variant:"secondary",className:"me-1",children:"Cập nhật hồ sơ"}),e.jsx(u,{onClick:n,variant:"danger",children:"Đăng xuất"})]})]})]})}function ge(){return e.jsxs(h,{children:[e.jsx(h.Header,{order:2,title:"User Authentication Flow"}),e.jsx(h.Description,{children:`
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

`}),e.jsx(h.Demo,{children:e.jsx(Ie,{})}),e.jsx(h.Code,{children:`
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

`})]})}const S={START_QUIZ:"START_QUIZ",ANSWER_QUESTION:"ANSWER_QUESTION",NEXT_QUESTION:"NEXT_QUESTION",PREV_QUESTION:"PREV_QUESTION",SUBMIT_QUIZ:"SUBMIT_QUIZ",RESTART_QUIZ:"RESTART_QUIZ",TICK:"TICK"},j=[{id:1,question:"React được phát triển bởi công ty nào?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"Hook nào dùng để quản lý state?",options:["useEffect","useState","useContext","useMemo"],correctAnswer:1},{id:3,question:"JSX là viết tắt của gì?",options:["JavaScript XML","Java Syntax Extension","JavaScript Extension","JSON XML"],correctAnswer:0}];function ve(t,a){switch(a.type){case S.START_QUIZ:return{...t,status:"active",startTime:Date.now(),timeRemaining:300,currentQuestionIndex:0,answers:{},score:null};case S.ANSWER_QUESTION:return{...t,answers:{...t.answers,[a.questionId]:a.answerIndex}};case S.NEXT_QUESTION:return{...t,currentQuestionIndex:Math.min(t.currentQuestionIndex+1,j.length-1)};case S.PREV_QUESTION:return{...t,currentQuestionIndex:Math.max(t.currentQuestionIndex-1,0)};case S.SUBMIT_QUIZ:{const s=j.reduce((o,r)=>o+(t.answers[r.id]===r.correctAnswer?1:0),0);return{...t,status:"finished",score:s,endTime:Date.now()}}case S.RESTART_QUIZ:return{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null};case S.TICK:if(t.timeRemaining<=1){const s=j.reduce((o,r)=>o+(t.answers[r.id]===r.correctAnswer?1:0),0);return{...t,status:"finished",score:s,timeRemaining:0,endTime:Date.now()}}return{...t,timeRemaining:t.timeRemaining-1};default:return t}}function Ce(){const[t,a]=g.useReducer(ve,{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null});g.useEffect(()=>{if(t.status==="active"&&t.timeRemaining>0){const n=setInterval(()=>a({type:S.TICK}),1e3);return()=>clearInterval(n)}},[t.status,t.timeRemaining]);const s=j[t.currentQuestionIndex],o=(t.currentQuestionIndex+1)/j.length*100,r=n=>`${Math.floor(n/60)}:${(n%60).toString().padStart(2,"0")}`;return e.jsxs("div",{className:"quizapp-app",children:[t.status==="idle"&&e.jsxs(c,{className:"quizapp-card",children:[e.jsxs(c.Header,{className:"quizapp-card-header",children:[e.jsx(c.Title,{className:"quizapp-card-title",children:"Quiz React"}),e.jsxs(c.Subtitle,{className:"quizapp-card-subtitle",children:["Tổng ",j.length," câu hỏi, 5 phút"]})]}),e.jsx(c.Content,{children:e.jsx(u,{variant:"primary",size:"lg",onClick:()=>a({type:S.START_QUIZ}),children:"Bắt đầu"})})]}),t.status==="active"&&e.jsxs(c,{className:"quizapp-card",children:[e.jsx(c.Header,{className:"quizapp-card-header",children:e.jsxs("div",{className:"quizapp-timer",children:["Thời gian còn lại: ",r(t.timeRemaining)]})}),e.jsxs(c.Content,{children:[e.jsx("div",{className:"quizapp-progress-container",children:e.jsx("div",{className:"quizapp-progress-bar",style:{width:`${o}%`}})}),e.jsx("div",{className:"quizapp-question",children:s.question}),e.jsx("div",{className:"quizapp-options",children:s.options.map((n,d)=>e.jsx(u,{variant:t.answers[s.id]===d?"secondary":"ghost",size:"md",className:"quizapp-option-button",onClick:()=>a({type:S.ANSWER_QUESTION,questionId:s.id,answerIndex:d}),children:n},d))})]}),e.jsxs(c.Footer,{className:"quizapp-navigation",children:[e.jsx(u,{variant:"ghost",size:"md",onClick:()=>a({type:S.PREV_QUESTION}),disabled:t.currentQuestionIndex===0,children:"Previous"}),t.currentQuestionIndex<j.length-1?e.jsx(u,{variant:"primary",size:"md",onClick:()=>a({type:S.NEXT_QUESTION}),children:"Next"}):e.jsx(u,{variant:"primary",size:"md",onClick:()=>a({type:S.SUBMIT_QUIZ}),children:"Submit"})]})]}),t.status==="finished"&&e.jsxs(c,{className:"quizapp-card",children:[e.jsxs(c.Header,{className:"quizapp-card-header",children:[e.jsx(c.Title,{className:"quizapp-card-title",children:"Kết quả"}),e.jsxs(c.Subtitle,{className:"quizapp-card-subtitle",children:["Bạn đạt ",t.score,"/",j.length," điểm"]})]}),e.jsx(c.Content,{children:j.map(n=>e.jsxs("div",{className:"quizapp-question",children:[e.jsx("div",{children:n.question}),e.jsx("div",{className:"quizapp-options",children:n.options.map((d,m)=>e.jsx(u,{variant:n.correctAnswer===m?"primary":t.answers[n.id]===m?"secondary":"ghost",size:"md",className:"quizapp-option-button",disabled:!0,children:d},m))})]},n.id))}),e.jsx(c.Footer,{className:"quizapp-navigation",children:e.jsx(u,{variant:"primary",size:"md",onClick:()=>a({type:S.RESTART_QUIZ}),children:"Restart"})})]})]})}function Ne(){return e.jsxs(h,{children:[e.jsx(h.Header,{order:3,title:"Quiz App với Timer"}),e.jsx(h.Description,{children:`
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


`}),e.jsx(h.Demo,{children:e.jsx(Ce,{})}),e.jsx(h.Code,{children:`
// QuizApp.jsx
import { Button, Card } from "@ui";
import { useEffect, useReducer } from "react";

const QUIZ_ACTIONS = {
  START_QUIZ: "START_QUIZ",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  NEXT_QUESTION: "NEXT_QUESTION",
  PREV_QUESTION: "PREV_QUESTION",
  SUBMIT_QUIZ: "SUBMIT_QUIZ",
  RESTART_QUIZ: "RESTART_QUIZ",
  TICK: "TICK",
};

const quizQuestions = [
  {
    id: 1,
    question: "React được phát triển bởi công ty nào?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Hook nào dùng để quản lý state?",
    options: ["useEffect", "useState", "useContext", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "JSX là viết tắt của gì?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "JSON XML",
    ],
    correctAnswer: 0,
  },
];

function quizReducer(state, action) {
  switch (action.type) {
    case QUIZ_ACTIONS.START_QUIZ:
      return {
        ...state,
        status: "active",
        startTime: Date.now(),
        timeRemaining: 300,
        currentQuestionIndex: 0,
        answers: {},
        score: null,
      };
    case QUIZ_ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answerIndex },
      };
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          quizQuestions.length - 1
        ),
      };
    case QUIZ_ACTIONS.PREV_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };
    case QUIZ_ACTIONS.SUBMIT_QUIZ: {
      const score = quizQuestions.reduce(
        (acc, q) => acc + (state.answers[q.id] === q.correctAnswer ? 1 : 0),
        0
      );
      return { ...state, status: "finished", score, endTime: Date.now() };
    }
    case QUIZ_ACTIONS.RESTART_QUIZ:
      return {
        status: "idle",
        currentQuestionIndex: 0,
        answers: {},
        timeRemaining: 300,
        score: null,
        startTime: null,
        endTime: null,
      };
    case QUIZ_ACTIONS.TICK:
      if (state.timeRemaining <= 1) {
        const score = quizQuestions.reduce(
          (acc, q) => acc + (state.answers[q.id] === q.correctAnswer ? 1 : 0),
          0
        );
        return {
          ...state,
          status: "finished",
          score,
          timeRemaining: 0,
          endTime: Date.now(),
        };
      }
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    default:
      return state;
  }
}

export default function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, {
    status: "idle",
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 300,
    score: null,
    startTime: null,
    endTime: null,
  });

  useEffect(() => {
    if (state.status === "active" && state.timeRemaining > 0) {
      const timer = setInterval(
        () => dispatch({ type: QUIZ_ACTIONS.TICK }),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [state.status, state.timeRemaining]);

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const progress =
    ((state.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const formatTime = (seconds) =>
    \`\${Math.floor(seconds / 60)}:\${(seconds % 60).toString().padStart(2, "0")}\`;

  return (
    <div className="quizapp-app">
      {state.status === "idle" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <Card.Title className="quizapp-card-title">Quiz React</Card.Title>
            <Card.Subtitle className="quizapp-card-subtitle">
              Tổng {quizQuestions.length} câu hỏi, 5 phút
            </Card.Subtitle>
          </Card.Header>
          <Card.Content>
            <Button
              variant="primary"
              size="lg"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.START_QUIZ })}
            >
              Bắt đầu
            </Button>
          </Card.Content>
        </Card>
      )}

      {state.status === "active" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <div className="quizapp-timer">
              Thời gian còn lại: {formatTime(state.timeRemaining)}
            </div>
          </Card.Header>
          <Card.Content>
            <div className="quizapp-progress-container">
              <div
                className="quizapp-progress-bar"
                style={{ width: \`\${progress}%\` }}
              ></div>
            </div>

            <div className="quizapp-question">{currentQuestion.question}</div>
            <div className="quizapp-options">
              {currentQuestion.options.map((opt, i) => (
                <Button
                  key={i}
                  variant={
                    state.answers[currentQuestion.id] === i
                      ? "secondary"
                      : "ghost"
                  }
                  size="md"
                  className="quizapp-option-button"
                  onClick={() =>
                    dispatch({
                      type: QUIZ_ACTIONS.ANSWER_QUESTION,
                      questionId: currentQuestion.id,
                      answerIndex: i,
                    })
                  }
                >
                  {opt}
                </Button>
              ))}
            </div>
          </Card.Content>
          <Card.Footer className="quizapp-navigation">
            <Button
              variant="ghost"
              size="md"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.PREV_QUESTION })}
              disabled={state.currentQuestionIndex === 0}
            >
              Previous
            </Button>
            {state.currentQuestionIndex < quizQuestions.length - 1 ? (
              <Button
                variant="primary"
                size="md"
                onClick={() => dispatch({ type: QUIZ_ACTIONS.NEXT_QUESTION })}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => dispatch({ type: QUIZ_ACTIONS.SUBMIT_QUIZ })}
              >
                Submit
              </Button>
            )}
          </Card.Footer>
        </Card>
      )}

      {state.status === "finished" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <Card.Title className="quizapp-card-title">Kết quả</Card.Title>
            <Card.Subtitle className="quizapp-card-subtitle">
              Bạn đạt {state.score}/{quizQuestions.length} điểm
            </Card.Subtitle>
          </Card.Header>
          <Card.Content>
            {quizQuestions.map((q) => (
              <div key={q.id} className="quizapp-question">
                <div>{q.question}</div>
                <div className="quizapp-options">
                  {q.options.map((opt, i) => (
                    <Button
                      key={i}
                      variant={
                        q.correctAnswer === i
                          ? "primary"
                          : state.answers[q.id] === i
                          ? "secondary"
                          : "ghost"
                      }
                      size="md"
                      className="quizapp-option-button"
                      disabled
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </Card.Content>
          <Card.Footer className="quizapp-navigation">
            <Button
              variant="primary"
              size="md"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.RESTART_QUIZ })}
            >
              Restart
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

`})]})}const E={ADD_TASK:"ADD_TASK",MOVE_TASK:"MOVE_TASK",UPDATE_TASK:"UPDATE_TASK",DELETE_TASK:"DELETE_TASK",ADD_COLUMN:"ADD_COLUMN",DELETE_COLUMN:"DELETE_COLUMN"},Se={columns:{todo:{id:"todo",title:"Cần làm",taskIds:[]},inProgress:{id:"inProgress",title:"Đang làm",taskIds:[]},done:{id:"done",title:"Hoàn thành",taskIds:[]}},tasks:{},columnOrder:["todo","inProgress","done"]};function Ae(t,a){switch(a.type){case E.ADD_TASK:{const{columnId:s,task:o}=a.payload,r=`task-${Date.now()}`;return{...t,tasks:{...t.tasks,[r]:{id:r,columnId:s,...o}},columns:{...t.columns,[s]:{...t.columns[s],taskIds:[...t.columns[s].taskIds,r]}}}}case E.MOVE_TASK:{const{source:s,destination:o}=a.payload;if(!o||s.columnId===o.columnId&&s.index===o.index)return t;const r=t.columns[s.columnId],n=t.columns[o.columnId],d=Array.from(r.taskIds),m=s.columnId===o.columnId?d:Array.from(n.taskIds),[C]=d.splice(s.index,1);return m.splice(o.index,0,C),{...t,tasks:{...t.tasks,[C]:{...t.tasks[C],columnId:o.columnId}},columns:{...t.columns,[s.columnId]:{...r,taskIds:d},[o.columnId]:{...n,taskIds:m}}}}case E.UPDATE_TASK:{const{taskId:s,updates:o}=a.payload,r=t.tasks[s],n=r.columnId,d=o.columnId||n;let m={...t};return d!==n&&(m={...m,columns:{...m.columns,[n]:{...m.columns[n],taskIds:m.columns[n].taskIds.filter(C=>C!==s)},[d]:{...m.columns[d],taskIds:[...m.columns[d].taskIds,s]}}}),{...m,tasks:{...m.tasks,[s]:{...r,...o}}}}case E.DELETE_TASK:{const{taskId:s,columnId:o}=a.payload;return{...t,tasks:Object.fromEntries(Object.entries(t.tasks).filter(([r])=>r!==s)),columns:{...t.columns,[o]:{...t.columns[o],taskIds:t.columns[o].taskIds.filter(r=>r!==s)}}}}case E.ADD_COLUMN:{const{id:s,title:o}=a.payload;return{...t,columns:{...t.columns,[s]:{id:s,title:o,taskIds:[]}},columnOrder:[...t.columnOrder,s]}}case E.DELETE_COLUMN:{const{columnId:s,targetColumnId:o}=a.payload,r=t.columns[s],n=t.columnOrder.filter(d=>d!==s);return{...t,columns:{...t.columns,[o]:{...t.columns[o],taskIds:[...t.columns[o].taskIds,...r.taskIds]}},columnOrder:n}}default:return t}}function Ee(){const[t,a]=g.useReducer(Ae,Se),[s,o]=g.useState(""),[r,n]=g.useState(""),[d,m]=g.useState(""),[C,O]=g.useState(!1),[L,U]=g.useState(!1),[y,N]=g.useState(!1),[l,A]=g.useState(""),[D,Q]=g.useState(null),[q,z]=g.useState({columnId:null,index:null}),B=g.useRef(null),Y=Object.values(t.tasks).filter(i=>{const p=i.content.toLowerCase().includes(s.toLowerCase()),x=!r||i.priority===r,I=!d||i.assignee===d;return p&&x&&I}),X=(i,p,x)=>{B.current={columnId:p,index:x},i.dataTransfer.effectAllowed="move"},J=(i,p)=>{z({columnId:i,index:p})},$=()=>{z({columnId:null,index:null})},K=i=>{i.preventDefault()},V=(i,p,x)=>{i.preventDefault();const I=B.current;if(!I)return;const b={columnId:p,index:x??t.columns[p].taskIds.length};a({type:E.MOVE_TASK,payload:{source:I,destination:b}}),B.current=null,z({columnId:null,index:null})},W=i=>{A(i),O(!0)},ee=i=>{Q(i),U(!0)},te=()=>N(!0),ae=i=>{i.preventDefault();const p=i.target;a({type:E.ADD_TASK,payload:{columnId:l,task:{content:p.content.value,priority:p.priority.value,assignee:p.assignee.value||"Chưa giao"}}}),O(!1),p.reset()},ne=i=>{i.preventDefault();const p=i.target;a({type:E.UPDATE_TASK,payload:{taskId:D.id,updates:{content:p.content.value,priority:p.priority.value,assignee:p.assignee.value||"Chưa giao",columnId:p.columnId.value}}}),U(!1)},se=i=>{i.preventDefault();const p=`column-${Date.now()}`;a({type:E.ADD_COLUMN,payload:{id:p,title:i.target.title.value}}),N(!1),i.target.reset()},ie=i=>{if(t.columnOrder.length<=1)return;const p=t.columnOrder.find(x=>x!==i)||t.columnOrder[0];a({type:E.DELETE_COLUMN,payload:{columnId:i,targetColumnId:p}})};return e.jsxs("div",{className:"kanban-board",children:[e.jsx("h1",{className:"kanban-title",children:"Kanban Board"}),e.jsxs("div",{className:"kanban-header",children:[e.jsxs("div",{className:"kanban-controls",children:[e.jsx("input",{type:"text",placeholder:"Tìm kiếm task...",className:"kanban-search",value:s,onChange:i=>o(i.target.value)}),e.jsx(w,{value:r,onChange:i=>n(i.target.value),options:[{value:"",label:"Tất cả ưu tiên"},{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}]}),e.jsx(w,{value:d,onChange:i=>m(i.target.value),options:[{value:"",label:"Tất cả người"},...Array.from(new Set(Object.values(t.tasks).map(i=>i.assignee))).filter(Boolean).map(i=>({value:i,label:i}))]})]}),e.jsx(u,{variant:"primary",size:"lg",onClick:te,children:"+ Thêm cột"})]}),e.jsx("div",{className:"kanban-columns",children:t.columnOrder.map(i=>{const p=t.columns[i],x=p.taskIds.map(I=>t.tasks[I]).filter(I=>I&&Y.some(b=>b.id===I.id));return e.jsxs("div",{className:"kanban-column",onDragOver:K,onDrop:I=>V(I,i),children:[e.jsxs("div",{className:"kanban-column-header",children:[e.jsx("h2",{className:"kanban-column-title",children:p.title}),e.jsx(re,{content:"Xóa cột",children:e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>ie(i),disabled:t.columnOrder.length<=1,children:"Delete"})})]}),e.jsxs("div",{className:"kanban-tasks",children:[x.map((I,b)=>{const G=q.columnId===i&&q.index===b;return e.jsxs("div",{children:[G&&e.jsx("div",{className:"drop-preview"}),e.jsxs("div",{draggable:!0,onDragStart:H=>X(H,i,b),onDragEnter:()=>J(i,b),onDragLeave:$,onDragOver:K,onDrop:H=>V(H,i,b),className:`kanban-task-card ${G?"drag-over":""}`,children:[e.jsx("div",{className:"kanban-task-content",children:I.content}),e.jsxs("div",{className:"kanban-task-meta",children:[e.jsx("span",{className:`kanban-task-priority priority-${I.priority}`,children:I.priority}),e.jsx("span",{className:"kanban-task-assignee",children:I.assignee})]}),e.jsxs("div",{className:"kanban-task-actions",children:[e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>ee(I),children:"Edit"}),e.jsx(u,{variant:"danger",size:"sm",onClick:()=>a({type:E.DELETE_TASK,payload:{taskId:I.id,columnId:i}}),children:"Delete"})]})]})]},I.id)}),q.columnId===i&&q.index===x.length&&e.jsx("div",{className:"drop-preview"})]}),e.jsx("div",{className:"kanban-add-task",onClick:()=>W(i),children:"+ Thêm task mới"})]},i)})}),e.jsxs(P,{isOpen:C,onClose:()=>O(!1),children:[e.jsx(P.Header,{onClose:()=>O(!1),children:"Thêm Task"}),e.jsx(P.Body,{children:e.jsxs("form",{onSubmit:ae,className:"modal-form",children:[e.jsx(v,{label:"Nội dung",name:"content",placeholder:"Nhập nội dung...",required:!0}),e.jsx(w,{label:"Độ ưu tiên",name:"priority",options:[{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}],defaultValue:"medium"}),e.jsx(v,{label:"Người thực hiện",name:"assignee",placeholder:"Tên..."}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(u,{variant:"ghost",onClick:()=>O(!1),children:"Hủy"}),e.jsx(u,{variant:"primary",type:"submit",children:"Thêm"})]})]})})]}),e.jsxs(P,{isOpen:L,onClose:()=>U(!1),children:[e.jsx(P.Header,{onClose:()=>U(!1),children:"Sửa Task"}),e.jsx(P.Body,{children:D&&e.jsxs("form",{onSubmit:ne,className:"modal-form",children:[e.jsx(v,{label:"Nội dung",name:"content",defaultValue:D.content,required:!0}),e.jsx(w,{label:"Độ ưu tiên",name:"priority",options:[{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}],defaultValue:D.priority}),e.jsx(v,{label:"Người thực hiện",name:"assignee",defaultValue:D.assignee}),e.jsx(w,{label:"Chuyển đến cột",name:"columnId",options:t.columnOrder.map(i=>({value:i,label:t.columns[i].title})),defaultValue:D.columnId}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(u,{variant:"ghost",onClick:()=>U(!1),children:"Hủy"}),e.jsx(u,{variant:"primary",type:"submit",children:"Cập nhật"})]})]})})]}),e.jsxs(P,{isOpen:y,onClose:()=>N(!1),children:[e.jsx(P.Header,{onClose:()=>N(!1),children:"Thêm Cột"}),e.jsx(P.Body,{children:e.jsxs("form",{onSubmit:se,className:"modal-form",children:[e.jsx(v,{label:"Tên cột",name:"title",placeholder:"VD: Review...",required:!0}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(u,{variant:"ghost",onClick:()=>N(!1),children:"Hủy"}),e.jsx(u,{variant:"primary",type:"submit",children:"Thêm"})]})]})})]})]})}function Oe(){return e.jsxs(h,{children:[e.jsx(h.Header,{order:4,title:"Kanban Board"}),e.jsx(h.Description,{children:`
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

`}),e.jsx(h.Demo,{children:e.jsx(Ee,{})}),e.jsx(h.Code,{children:`
// KanbanBoard.jsx
import { Button, Input, Modal, Select, Tooltip } from "@ui";
import { useReducer, useRef, useState } from "react";

const KANBAN_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  MOVE_TASK: "MOVE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  ADD_COLUMN: "ADD_COLUMN",
  DELETE_COLUMN: "DELETE_COLUMN",
};

const initialState = {
  columns: {
    todo: { id: "todo", title: "Cần làm", taskIds: [] },
    inProgress: { id: "inProgress", title: "Đang làm", taskIds: [] },
    done: { id: "done", title: "Hoàn thành", taskIds: [] },
  },
  tasks: {},
  columnOrder: ["todo", "inProgress", "done"],
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case KANBAN_ACTIONS.ADD_TASK: {
      const { columnId, task } = action.payload;
      const newTaskId = \`task-\${Date.now()}\`;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [newTaskId]: { id: newTaskId, columnId, ...task },
        },
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: [...state.columns[columnId].taskIds, newTaskId],
          },
        },
      };
    }

    case KANBAN_ACTIONS.MOVE_TASK: {
      const { source, destination } = action.payload;
      if (
        !destination ||
        (source.columnId === destination.columnId &&
          source.index === destination.index)
      ) {
        return state;
      }

      const sourceColumn = state.columns[source.columnId];
      const destColumn = state.columns[destination.columnId];
      const sourceTasks = Array.from(sourceColumn.taskIds);
      const destTasks =
        source.columnId === destination.columnId
          ? sourceTasks
          : Array.from(destColumn.taskIds);

      const [movedTaskId] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, movedTaskId);

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [movedTaskId]: {
            ...state.tasks[movedTaskId],
            columnId: destination.columnId,
          },
        },
        columns: {
          ...state.columns,
          [source.columnId]: { ...sourceColumn, taskIds: sourceTasks },
          [destination.columnId]: { ...destColumn, taskIds: destTasks },
        },
      };
    }

    case KANBAN_ACTIONS.UPDATE_TASK: {
      const { taskId, updates } = action.payload;
      const task = state.tasks[taskId];
      const oldColumnId = task.columnId;
      const newColumnId = updates.columnId || oldColumnId;

      let newState = { ...state };

      if (newColumnId !== oldColumnId) {
        newState = {
          ...newState,
          columns: {
            ...newState.columns,
            [oldColumnId]: {
              ...newState.columns[oldColumnId],
              taskIds: newState.columns[oldColumnId].taskIds.filter(
                (id) => id !== taskId
              ),
            },
            [newColumnId]: {
              ...newState.columns[newColumnId],
              taskIds: [...newState.columns[newColumnId].taskIds, taskId],
            },
          },
        };
      }

      return {
        ...newState,
        tasks: {
          ...newState.tasks,
          [taskId]: { ...task, ...updates },
        },
      };
    }

    case KANBAN_ACTIONS.DELETE_TASK: {
      const { taskId, columnId } = action.payload;
      return {
        ...state,
        tasks: Object.fromEntries(
          Object.entries(state.tasks).filter(([id]) => id !== taskId)
        ),
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: state.columns[columnId].taskIds.filter(
              (id) => id !== taskId
            ),
          },
        },
      };
    }

    case KANBAN_ACTIONS.ADD_COLUMN: {
      const { id, title } = action.payload;
      return {
        ...state,
        columns: { ...state.columns, [id]: { id, title, taskIds: [] } },
        columnOrder: [...state.columnOrder, id],
      };
    }

    case KANBAN_ACTIONS.DELETE_COLUMN: {
      const { columnId, targetColumnId } = action.payload;
      const column = state.columns[columnId];
      const newColumnOrder = state.columnOrder.filter((id) => id !== columnId);

      return {
        ...state,
        columns: {
          ...state.columns,
          [targetColumnId]: {
            ...state.columns[targetColumnId],
            taskIds: [
              ...state.columns[targetColumnId].taskIds,
              ...column.taskIds,
            ],
          },
        },
        columnOrder: newColumnOrder,
      };
    }

    default:
      return state;
  }
}

export default function KanbanBoard() {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterAssignee, setFilterAssignee] = useState("");

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);

  const [selectedColumn, setSelectedColumn] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // Drag state cho preview
  const [dragOverInfo, setDragOverInfo] = useState({
    columnId: null,
    index: null,
  });
  const dragItem = useRef(null);

  // Lọc task
  const filteredTasks = Object.values(state.tasks).filter((task) => {
    const matchesSearch = task.content
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPriority = !filterPriority || task.priority === filterPriority;
    const matchesAssignee = !filterAssignee || task.assignee === filterAssignee;
    return matchesSearch && matchesPriority && matchesAssignee;
  });

  // Drag & Drop
  const handleDragStart = (e, columnId, index) => {
    dragItem.current = { columnId, index };
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (columnId, index) => {
    setDragOverInfo({ columnId, index });
  };

  const handleDragLeave = () => {
    setDragOverInfo({ columnId: null, index: null });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumnId, targetIndex) => {
    e.preventDefault();
    const source = dragItem.current;
    if (!source) return;

    const destination = {
      columnId: targetColumnId,
      index: targetIndex ?? state.columns[targetColumnId].taskIds.length,
    };

    dispatch({
      type: KANBAN_ACTIONS.MOVE_TASK,
      payload: { source, destination },
    });

    dragItem.current = null;
    setDragOverInfo({ columnId: null, index: null });
  };

  // Modal
  const openAddTask = (columnId) => {
    setSelectedColumn(columnId);
    setIsAddTaskOpen(true);
  };

  const openEditTask = (task) => {
    setEditingTask(task);
    setIsEditTaskOpen(true);
  };

  const openAddColumn = () => setIsAddColumnOpen(true);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      type: KANBAN_ACTIONS.ADD_TASK,
      payload: {
        columnId: selectedColumn,
        task: {
          content: form.content.value,
          priority: form.priority.value,
          assignee: form.assignee.value || "Chưa giao",
        },
      },
    });
    setIsAddTaskOpen(false);
    form.reset();
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch({
      type: KANBAN_ACTIONS.UPDATE_TASK,
      payload: {
        taskId: editingTask.id,
        updates: {
          content: form.content.value,
          priority: form.priority.value,
          assignee: form.assignee.value || "Chưa giao",
          columnId: form.columnId.value,
        },
      },
    });
    setIsEditTaskOpen(false);
  };

  const handleAddColumn = (e) => {
    e.preventDefault();
    const id = \`column-\${Date.now()}\`;
    dispatch({
      type: KANBAN_ACTIONS.ADD_COLUMN,
      payload: { id, title: e.target.title.value },
    });
    setIsAddColumnOpen(false);
    e.target.reset();
  };

  const handleDeleteColumn = (columnId) => {
    if (state.columnOrder.length <= 1) return;
    const target =
      state.columnOrder.find((id) => id !== columnId) || state.columnOrder[0];
    dispatch({
      type: KANBAN_ACTIONS.DELETE_COLUMN,
      payload: { columnId, targetColumnId: target },
    });
  };

  return (
    <div className="kanban-board">
      <h1 className="kanban-title">Kanban Board</h1>

      <div className="kanban-header">
        <div className="kanban-controls">
          <input
            type="text"
            placeholder="Tìm kiếm task..."
            className="kanban-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            options={[
              { value: "", label: "Tất cả ưu tiên" },
              { value: "high", label: "Cao" },
              { value: "medium", label: "Trung bình" },
              { value: "low", label: "Thấp" },
            ]}
          />
          <Select
            value={filterAssignee}
            onChange={(e) => setFilterAssignee(e.target.value)}
            options={[
              { value: "", label: "Tất cả người" },
              ...Array.from(
                new Set(Object.values(state.tasks).map((t) => t.assignee))
              )
                .filter(Boolean)
                .map((name) => ({ value: name, label: name })),
            ]}
          />
        </div>
        <Button variant="primary" size="lg" onClick={openAddColumn}>
          + Thêm cột
        </Button>
      </div>

      <div className="kanban-columns">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds
            .map((id) => state.tasks[id])
            .filter(
              (task) => task && filteredTasks.some((t) => t.id === task.id)
            );

          return (
            <div
              key={columnId}
              className="kanban-column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, columnId)}
            >
              <div className="kanban-column-header">
                <h2 className="kanban-column-title">{column.title}</h2>
                <Tooltip content="Xóa cột">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteColumn(columnId)}
                    disabled={state.columnOrder.length <= 1}
                  >
                    Delete
                  </Button>
                </Tooltip>
              </div>

              <div className="kanban-tasks">
                {tasks.map((task, index) => {
                  const isDragOver =
                    dragOverInfo.columnId === columnId &&
                    dragOverInfo.index === index;

                  return (
                    <div key={task.id}>
                      {/* PREVIEW TRƯỚC TASK */}
                      {isDragOver && <div className="drop-preview" />}

                      <div
                        draggable
                        onDragStart={(e) => handleDragStart(e, columnId, index)}
                        onDragEnter={() => handleDragEnter(columnId, index)}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, columnId, index)}
                        className={\`kanban-task-card \${
                          isDragOver ? "drag-over" : ""
                        }\`}
                      >
                        <div className="kanban-task-content">
                          {task.content}
                        </div>
                        <div className="kanban-task-meta">
                          <span
                            className={\`kanban-task-priority priority-\${task.priority}\`}
                          >
                            {task.priority}
                          </span>
                          <span className="kanban-task-assignee">
                            {task.assignee}
                          </span>
                        </div>
                        <div className="kanban-task-actions">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditTask(task)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() =>
                              dispatch({
                                type: KANBAN_ACTIONS.DELETE_TASK,
                                payload: { taskId: task.id, columnId },
                              })
                            }
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* PREVIEW CUỐI CỘT */}
                {dragOverInfo.columnId === columnId &&
                  dragOverInfo.index === tasks.length && (
                    <div className="drop-preview" />
                  )}
              </div>

              <div
                className="kanban-add-task"
                onClick={() => openAddTask(columnId)}
              >
                + Thêm task mới
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL ADD TASK */}
      <Modal isOpen={isAddTaskOpen} onClose={() => setIsAddTaskOpen(false)}>
        <Modal.Header onClose={() => setIsAddTaskOpen(false)}>
          Thêm Task
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddTask} className="modal-form">
            <Input
              label="Nội dung"
              name="content"
              placeholder="Nhập nội dung..."
              required
            />
            <Select
              label="Độ ưu tiên"
              name="priority"
              options={[
                { value: "high", label: "Cao" },
                { value: "medium", label: "Trung bình" },
                { value: "low", label: "Thấp" },
              ]}
              defaultValue="medium"
            />
            <Input
              label="Người thực hiện"
              name="assignee"
              placeholder="Tên..."
            />
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setIsAddTaskOpen(false)}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Thêm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* MODAL EDIT TASK */}
      <Modal isOpen={isEditTaskOpen} onClose={() => setIsEditTaskOpen(false)}>
        <Modal.Header onClose={() => setIsEditTaskOpen(false)}>
          Sửa Task
        </Modal.Header>
        <Modal.Body>
          {editingTask && (
            <form onSubmit={handleUpdateTask} className="modal-form">
              <Input
                label="Nội dung"
                name="content"
                defaultValue={editingTask.content}
                required
              />
              <Select
                label="Độ ưu tiên"
                name="priority"
                options={[
                  { value: "high", label: "Cao" },
                  { value: "medium", label: "Trung bình" },
                  { value: "low", label: "Thấp" },
                ]}
                defaultValue={editingTask.priority}
              />
              <Input
                label="Người thực hiện"
                name="assignee"
                defaultValue={editingTask.assignee}
              />
              <Select
                label="Chuyển đến cột"
                name="columnId"
                options={state.columnOrder.map((id) => ({
                  value: id,
                  label: state.columns[id].title,
                }))}
                defaultValue={editingTask.columnId}
              />
              <div className="modal-actions">
                <Button
                  variant="ghost"
                  onClick={() => setIsEditTaskOpen(false)}
                >
                  Hủy
                </Button>
                <Button variant="primary" type="submit">
                  Cập nhật
                </Button>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>

      {/* MODAL ADD COLUMN */}
      <Modal isOpen={isAddColumnOpen} onClose={() => setIsAddColumnOpen(false)}>
        <Modal.Header onClose={() => setIsAddColumnOpen(false)}>
          Thêm Cột
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddColumn} className="modal-form">
            <Input
              label="Tên cột"
              name="title"
              placeholder="VD: Review..."
              required
            />
            <div className="modal-actions">
              <Button variant="ghost" onClick={() => setIsAddColumnOpen(false)}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Thêm
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

`})]})}const T={SET_STEP:"SET_STEP",NEXT_STEP:"NEXT_STEP",PREV_STEP:"PREV_STEP",UPDATE_CART:"UPDATE_CART",UPDATE_SHIPPING:"UPDATE_SHIPPING",UPDATE_PAYMENT:"UPDATE_PAYMENT",APPLY_PROMO:"APPLY_PROMO",PLACE_ORDER:"PLACE_ORDER",SET_ERRORS:"SET_ERRORS"},f={CART:0,SHIPPING:1,PAYMENT:2,REVIEW:3,CONFIRMATION:4};function ye(t,a){switch(a.type){case T.NEXT_STEP:return{...t,currentStep:t.currentStep+1};case T.PREV_STEP:return{...t,currentStep:t.currentStep-1};case T.SET_STEP:return{...t,currentStep:a.step};case T.UPDATE_CART:return{...t,cart:{...t.cart,...a.payload}};case T.UPDATE_SHIPPING:return{...t,shipping:{...t.shipping,...a.payload}};case T.UPDATE_PAYMENT:return{...t,payment:{...t.payment,...a.payload}};case T.APPLY_PROMO:return{...t,promoCode:a.payload};case T.SET_ERRORS:return{...t,errors:a.payload};case T.PLACE_ORDER:return{...t,isProcessing:!0};default:return t}}function ke(){const[t,a]=g.useReducer(ye,{currentStep:f.CART,cart:{items:[{id:1,name:"Sản phẩm 1",price:1e5,quantity:2},{id:2,name:"Sản phẩm 2",price:2e5,quantity:1}],subtotal:0,shipping:0,tax:0,discount:0,total:0},shipping:{fullName:"",address:"",city:"",zipCode:"",phone:"",method:"standard"},payment:{method:"card",cardNumber:"",cardName:"",expiryDate:"",cvv:""},promoCode:{code:"",discount:0},errors:{},isProcessing:!1,orderNumber:null}),s=["Giỏ hàng","Thông tin giao hàng","Thanh toán","Xác nhận","Hoàn tất"],o=()=>a({type:T.NEXT_STEP}),r=()=>a({type:T.PREV_STEP});return e.jsxs("div",{className:"checkout-flow",children:[e.jsx("h1",{children:"Thanh Toán"}),e.jsx("div",{className:"steps",children:s.map((n,d)=>e.jsxs("div",{className:`step ${d===t.currentStep?"active":""} ${d<t.currentStep?"completed":""}`,children:[e.jsx("div",{className:"step-number",children:d+1}),e.jsx("div",{className:"step-title",children:n})]},d))}),e.jsxs("div",{className:"step-content",children:[t.currentStep===f.CART&&e.jsx("div",{className:"cart-step",children:t.cart.items.map(n=>e.jsxs(c,{className:"card-hover",children:[e.jsxs(c.Header,{children:[e.jsx(c.Title,{children:n.name}),e.jsxs(c.Subtitle,{children:[n.price.toLocaleString()," VND"]})]}),e.jsxs(c.Content,{children:["Số lượng: ",n.quantity]})]},n.id))}),t.currentStep===f.SHIPPING&&e.jsxs("div",{className:"shipping-step",children:[e.jsx(v,{label:"Họ và tên",value:t.shipping.fullName,onChange:n=>a({type:T.UPDATE_SHIPPING,payload:{fullName:n.target.value}})}),e.jsx(v,{label:"Địa chỉ",value:t.shipping.address,onChange:n=>a({type:T.UPDATE_SHIPPING,payload:{address:n.target.value}})}),e.jsx(v,{label:"Thành phố",value:t.shipping.city,onChange:n=>a({type:T.UPDATE_SHIPPING,payload:{city:n.target.value}})}),e.jsx(v,{label:"Mã bưu điện",value:t.shipping.zipCode,onChange:n=>a({type:T.UPDATE_SHIPPING,payload:{zipCode:n.target.value}})}),e.jsx(v,{label:"Số điện thoại",value:t.shipping.phone,onChange:n=>a({type:T.UPDATE_SHIPPING,payload:{phone:n.target.value}})})]}),t.currentStep===f.PAYMENT&&e.jsxs("div",{className:"payment-step",children:[e.jsx(w,{label:"Phương thức thanh toán",value:t.payment.method,onChange:n=>a({type:T.UPDATE_PAYMENT,payload:{method:n.target.value}}),options:[{value:"card",label:"Thẻ tín dụng"},{value:"momo",label:"MoMo"},{value:"cod",label:"Thanh toán khi nhận hàng"}]}),t.payment.method==="card"&&e.jsxs(e.Fragment,{children:[e.jsx(v,{label:"Số thẻ",value:t.payment.cardNumber,onChange:n=>a({type:T.UPDATE_PAYMENT,payload:{cardNumber:n.target.value}})}),e.jsx(v,{label:"Tên chủ thẻ",value:t.payment.cardName,onChange:n=>a({type:T.UPDATE_PAYMENT,payload:{cardName:n.target.value}})}),e.jsx(v,{label:"Ngày hết hạn",value:t.payment.expiryDate,onChange:n=>a({type:T.UPDATE_PAYMENT,payload:{expiryDate:n.target.value}})}),e.jsx(v,{label:"CVV",value:t.payment.cvv,onChange:n=>a({type:T.UPDATE_PAYMENT,payload:{cvv:n.target.value}})})]})]}),t.currentStep===f.REVIEW&&e.jsx("div",{className:"review-step",children:e.jsxs(c,{children:[e.jsx(c.Header,{children:e.jsx(c.Title,{children:"Đơn hàng"})}),e.jsx(c.Content,{children:t.cart.items.map(n=>e.jsxs("div",{children:[n.name," x ",n.quantity," -"," ",(n.price*n.quantity).toLocaleString()," VND"]},n.id))})]})}),t.currentStep===f.CONFIRMATION&&e.jsxs("div",{className:"confirmation-step",children:[e.jsx("h2",{children:"Đặt hàng thành công!"}),e.jsxs("p",{children:["Mã đơn hàng: #",t.orderNumber||"123456"]})]})]}),e.jsxs("div",{className:"navigation",children:[t.currentStep>f.CART&&t.currentStep<f.CONFIRMATION&&e.jsx(u,{variant:"secondary",size:"lg",onClick:r,children:"Quay lại"}),t.currentStep<f.REVIEW&&e.jsx(u,{variant:"primary",size:"lg",onClick:o,children:"Tiếp tục"}),t.currentStep===f.REVIEW&&e.jsx(u,{variant:"primary",size:"lg",disabled:t.isProcessing,children:t.isProcessing?"Đang xử lý...":"Đặt hàng"})]}),e.jsx("div",{className:"order-summary",children:e.jsxs(c,{children:[e.jsx(c.Header,{children:e.jsx(c.Title,{children:"Tổng đơn hàng"})}),e.jsx(c.Content,{children:t.cart.items.map(n=>e.jsxs("div",{children:[n.name," x ",n.quantity," -"," ",(n.price*n.quantity).toLocaleString()," VND"]},n.id))})]})})]})}function xe(){return e.jsxs(h,{children:[e.jsx(h.Header,{order:5,title:"Multi-Step Checkout (Challenge)"}),e.jsx(h.Description,{children:`
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

`}),e.jsx(h.Demo,{children:e.jsx(ke,{})}),e.jsx(h.Code,{children:`

`})]})}const Z={1:ue,2:ge,3:Ne,4:Oe,5:xe},je=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(oe,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 7"}),e.jsx("p",{className:"day-subtitle",children:"useReducer - Complex State Logic"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu useReducer và khi nào dùng"}),e.jsx("li",{children:"Reducer pattern và Redux-like state management"}),e.jsx("li",{children:"Action types và action creators"}),e.jsx("li",{children:"So sánh useReducer vs useState"}),e.jsx("li",{children:"Complex state logic patterns"}),e.jsx("li",{children:"Best practices và optimization"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(Z).map(t=>{const a=Z[t];return a?e.jsx(a,{},t):null})})]});export{je as default};
