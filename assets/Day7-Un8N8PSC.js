import{r as S,j as e,C as re}from"./index-DH_8c6X9.js";/* empty css               */import{E as T}from"./ExerciseCard-xnVI-L7g.js";import{C as u,B as N,I as M,S as G,M as D}from"./tooltip-DAdSEiMM.js";import{T as oe}from"./Tooltip-B6bv3Um_.js";const ce=[{id:1,name:"Áo thun",price:15e4,image:"👕"},{id:2,name:"Quần jean",price:35e4,image:"👖"},{id:3,name:"Giày thể thao",price:5e5,image:"👟"},{id:4,name:"Túi xách",price:25e4,image:"👜"}],F={GIAM10:10,GIAM50K:5e4,FREESHIP:0},L=t=>new Intl.NumberFormat("vi-VN").format(t),R={ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",UPDATE_QUANTITY:"UPDATE_QUANTITY",APPLY_COUPON:"APPLY_COUPON",REMOVE_COUPON:"REMOVE_COUPON"},k={add:t=>({type:R.ADD_ITEM,payload:t}),updateQuantity:(t,a)=>({type:R.UPDATE_QUANTITY,payload:{id:t,quantity:a}}),remove:t=>({type:R.REMOVE_ITEM,payload:t}),applyCoupon:t=>({type:R.APPLY_COUPON,payload:t}),removeCoupon:()=>({type:R.REMOVE_COUPON})};function le(t,a){switch(a.type){case R.ADD_ITEM:{const{id:n}=a.payload,i=t.items.some(r=>r.id===n);return{...t,shipping:3e4,items:i?t.items.map(r=>r.id===n?{...r,quantity:r.quantity+1}:r):[...t.items,{...a.payload,quantity:1}]}}case R.UPDATE_QUANTITY:{const{id:n,quantity:i}=a.payload;return i<=0?{...t,items:t.items.filter(r=>r.id!==n),shipping:t.items.length===1?0:t.shipping,coupon:t.items.length===1?null:t.coupon}:{...t,items:t.items.map(r=>r.id===n?{...r,quantity:i}:r)}}case R.REMOVE_ITEM:{const n=t.items.filter(i=>i.id!==a.payload);return{...t,items:n,shipping:n.length===0?0:3e4,coupon:n.length===0?null:t.coupon}}case R.APPLY_COUPON:return{...t,coupon:a.payload};case R.REMOVE_COUPON:return{...t,coupon:null};default:return t}}function de(){const[t,a]=S.useReducer(le,{items:[],coupon:null,shipping:0}),[n,i]=S.useState(""),[r,c]=S.useState(!1),m=t.items.reduce((d,E)=>d+=E.price*E.quantity,0),g=(d=>{const{coupon:E}=t;if(E==="FREESHIP"||!E)return 0;const I=F[E],q=E==="GIAM10"?d*(I/100):I;return Math.min(q,d)})(m),O=t.shipping,b=t.coupon==="FREESHIP",s=m+(b?0:O)-g,l=()=>{const d=n.trim().toUpperCase();if(!d){c(!1),a(k.removeCoupon());return}d in F?(c(!1),a(k.applyCoupon(d))):(c(!0),a(k.applyCoupon(null)))},C=d=>{const E=d.target.value.trim().toUpperCase();i(E),E===""&&(c(!1),a(k.removeCoupon()))};return e.jsxs("div",{className:"shopping-cart",children:[e.jsx("h1",{children:"🛒 Giỏ Hàng"}),e.jsxs("div",{className:"products",children:[e.jsx("h2",{children:"Sản phẩm"}),e.jsx("div",{className:"product-grid",children:ce.map(d=>e.jsxs(u,{className:"product-card",children:[e.jsxs(u.Content,{children:[e.jsx("span",{className:"product-icon",children:d.image}),e.jsx("h3",{children:d.name}),e.jsxs("p",{children:[L(d.price),"đ"]})]}),e.jsx(u.Footer,{children:e.jsx(N,{variant:"primary",size:"md",onClick:()=>a(k.add(d)),children:"Thêm vào giỏ"})})]},d.id))})]}),e.jsxs("div",{className:"cart-items",children:[e.jsxs("h2",{children:["Giỏ hàng (",t.items.length," sản phẩm)"]}),t.items.map(d=>e.jsxs("div",{className:"cart-item",children:[e.jsx("span",{className:"product-icon",children:d.image}),e.jsxs("div",{children:[e.jsx("h3",{children:d.name}),e.jsxs("p",{children:[L(d.price),"đ"]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Số lượng"}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>a(d.quantity>1?k.updateQuantity(d.id,d.quantity-1):k.remove(d.id)),children:"-"}),e.jsx("span",{children:d.quantity}),e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>a(k.updateQuantity(d.id,d.quantity+1)),children:"+"})]})]}),e.jsxs("div",{className:"sub-total",children:[e.jsx("h3",{children:"Tạm tính"}),e.jsxs("p",{children:[L(d.quantity*d.price),"đ"]})]}),e.jsx(N,{variant:"danger",size:"sm",onClick:()=>a(k.remove(d.id)),children:"❌"})]},d.id))]}),e.jsxs("div",{className:"coupon-section",children:[e.jsxs("div",{className:"coupon-input",children:[e.jsx(M,{placeholder:"Nhập mã giảm giá",value:n,onChange:C}),e.jsx(N,{variant:"secondary",onClick:l,children:"Áp dụng"})]}),t.coupon&&e.jsxs("div",{className:"applied-coupon",children:["Đã áp dụng: ",e.jsx("strong",{children:t.coupon})," ",e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>{i(""),a(k.removeCoupon())},children:"Xóa"})]}),r&&e.jsx("span",{className:"error",children:"Mã khuyến mãi không tồn tại"})]}),e.jsxs(u,{className:"cart-summary",children:[e.jsxs(u.Content,{children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính:"}),e.jsxs("span",{children:[L(m),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Giảm giá:"}),e.jsxs("span",{children:[g>0&&"- ",L(g),"đ"]})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Vận chuyển:"}),e.jsx("span",{children:b?"Miễn phí":L(O)+"đ"})]}),e.jsxs("div",{className:"summary-row total",children:[e.jsx("span",{children:"Tổng cộng:"}),e.jsxs("span",{children:[L(Math.max(s,0)),"đ"]})]})]}),e.jsx(u.Footer,{children:e.jsx(N,{className:"checkout-btn",variant:"primary",size:"lg",children:"Thanh toán"})})]})]})}function ue(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:1,title:"Shopping Cart với useReducer"}),e.jsx(T.Description,{children:`
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

`}),e.jsx(T.Demo,{children:e.jsx(de,{})}),e.jsx(T.Code,{children:`
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

`})]})}const _={LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGOUT:"LOGOUT",REFRESH_TOKEN:"REFRESH_TOKEN",UPDATE_PROFILE:"UPDATE_PROFILE"},pe=async({email:t,password:a})=>{try{if(t==="tuan@example.com"&&a==="123456")return await new Promise((i,r)=>setTimeout(()=>{Math.random()<.7?i({user:{id:"id1",name:"Tuan Le",email:t,avatar:"https://i.pravatar.cc/100?u=demo"},token:"SUPER_SECRET_TOKEN"}):r(new Error("Email hoặc mật khẩu không đúng"))},3e3));throw new Error("Email hoặc mật khẩu không đúng")}catch(n){throw console.error(n.message),n}};function me(t,a){switch(a.type){case _.LOGIN_START:return{...t,isLoading:!0,error:null};case _.LOGIN_SUCCESS:{const{token:n,user:i}=a.payload;return{...t,user:i,isAuthenticated:!0,isLoading:!1,token:n}}case _.LOGIN_FAILURE:return{...t,user:null,isAuthenticated:!1,isLoading:!1,error:a.payload,token:null};case _.LOGOUT:return{...t,user:null,isAuthenticated:!1,token:null};case _.REFRESH_TOKEN:return{...t,token:a.payload};case _.UPDATE_PROFILE:return{...t,user:{...t.user,...a.payload}};default:return t}}const he={user:null,isAuthenticated:!1,isLoading:!1,error:null,token:null};function Te(t){try{const a=localStorage.getItem("auth");if(a){const{user:n,token:i}=JSON.parse(a);return{...t,user:n,token:i,isAuthenticated:!0}}return t}catch(a){return console.error(a.message),t}}function ge(){const[t,a]=S.useReducer(me,he,Te),[n,i]=S.useState({email:"",password:""}),r=async()=>{a({type:_.LOGIN_START});try{const l={email:n.email.trim(),password:n.password.trim()},C=await pe(l);a({type:_.LOGIN_SUCCESS,payload:C}),localStorage.setItem("auth",JSON.stringify(C))}catch(l){a({type:_.LOGIN_FAILURE,payload:l.message})}},c=()=>{a({type:_.LOGOUT}),localStorage.removeItem("auth")},m=()=>{a({type:_.UPDATE_PROFILE,payload:{name:"John Doe",email:"johndoe@example.com"}})},{user:h,isAuthenticated:g,isLoading:O,error:b,token:s}=t;return e.jsxs("div",{className:"auth-app",children:[!g&&e.jsxs(u,{className:"auth-card",children:[e.jsxs(u.Header,{children:[e.jsx(u.Title,{children:"Đăng nhập"}),e.jsx(u.Subtitle,{children:"Account : "}),e.jsx(u.Subtitle,{children:"tuan@example.com | 123456"})]}),e.jsx(u.Content,{children:e.jsxs("div",{className:"form-fields",children:[e.jsx(M,{label:"Email",placeholder:"you@example.com",name:"email",value:n.email,onChange:l=>i(C=>({...C,email:l.target.value}))}),e.jsx(M,{label:"Mật khẩu",type:"password",placeholder:"••••••••",name:"password",value:n.password,onChange:l=>i(C=>({...C,password:l.target.value}))}),O&&e.jsx("div",{className:"auth-progress-bar"}),b&&e.jsx("div",{className:"error-message",children:b||"Email hoặc mật khẩu không đúng"})]})}),e.jsx(u.Footer,{children:e.jsx(N,{disabled:O,onClick:r,variant:"primary",size:"lg",children:"Đăng nhập"})})]}),g&&h&&e.jsxs(u,{className:"auth-card",children:[e.jsxs(u.Header,{children:[e.jsx(u.Title,{children:"Bảng điều khiển"}),e.jsxs(u.Subtitle,{children:["Xin chào, ",h.name]})]}),e.jsx(u.Content,{children:e.jsxs("div",{className:"user-section",children:[e.jsx("img",{src:h.avatar,alt:h.name,className:"user-avatar"}),e.jsx("p",{children:h.email})]})}),e.jsxs(u.Footer,{className:"text-center",children:[e.jsx(N,{onClick:m,variant:"secondary",className:"me-1",children:"Cập nhật hồ sơ"}),e.jsx(N,{onClick:c,variant:"danger",children:"Đăng xuất"})]})]})]})}function Ne(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:2,title:"User Authentication Flow"}),e.jsx(T.Description,{children:`
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

`}),e.jsx(T.Demo,{children:e.jsx(ge,{})}),e.jsx(T.Code,{children:`
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

`})]})}const x={START_QUIZ:"START_QUIZ",ANSWER_QUESTION:"ANSWER_QUESTION",NEXT_QUESTION:"NEXT_QUESTION",PREV_QUESTION:"PREV_QUESTION",SUBMIT_QUIZ:"SUBMIT_QUIZ",RESTART_QUIZ:"RESTART_QUIZ",TICK:"TICK"},j=[{id:1,question:"React được phát triển bởi công ty nào?",options:["Google","Facebook","Microsoft","Apple"],correctAnswer:1},{id:2,question:"Hook nào dùng để quản lý state?",options:["useEffect","useState","useContext","useMemo"],correctAnswer:1},{id:3,question:"JSX là viết tắt của gì?",options:["JavaScript XML","Java Syntax Extension","JavaScript Extension","JSON XML"],correctAnswer:0}];function ve(t,a){switch(a.type){case x.START_QUIZ:return{...t,status:"active",startTime:Date.now(),timeRemaining:300,currentQuestionIndex:0,answers:{},score:null};case x.ANSWER_QUESTION:return{...t,answers:{...t.answers,[a.questionId]:a.answerIndex}};case x.NEXT_QUESTION:return{...t,currentQuestionIndex:Math.min(t.currentQuestionIndex+1,j.length-1)};case x.PREV_QUESTION:return{...t,currentQuestionIndex:Math.max(t.currentQuestionIndex-1,0)};case x.SUBMIT_QUIZ:{const n=j.reduce((i,r)=>i+(t.answers[r.id]===r.correctAnswer?1:0),0);return{...t,status:"finished",score:n,endTime:Date.now()}}case x.RESTART_QUIZ:return{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null};case x.TICK:if(t.timeRemaining<=1){const n=j.reduce((i,r)=>i+(t.answers[r.id]===r.correctAnswer?1:0),0);return{...t,status:"finished",score:n,timeRemaining:0,endTime:Date.now()}}return{...t,timeRemaining:t.timeRemaining-1};default:return t}}function Ee(){const[t,a]=S.useReducer(ve,{status:"idle",currentQuestionIndex:0,answers:{},timeRemaining:300,score:null,startTime:null,endTime:null});S.useEffect(()=>{if(t.status==="active"&&t.timeRemaining>0){const c=setInterval(()=>a({type:x.TICK}),1e3);return()=>clearInterval(c)}},[t.status,t.timeRemaining]);const n=j[t.currentQuestionIndex],i=(t.currentQuestionIndex+1)/j.length*100,r=c=>`${Math.floor(c/60)}:${(c%60).toString().padStart(2,"0")}`;return e.jsxs("div",{className:"quizapp-app",children:[t.status==="idle"&&e.jsxs(u,{className:"quizapp-card",children:[e.jsxs(u.Header,{className:"quizapp-card-header",children:[e.jsx(u.Title,{className:"quizapp-card-title",children:"Quiz React"}),e.jsxs(u.Subtitle,{className:"quizapp-card-subtitle",children:["Tổng ",j.length," câu hỏi, 5 phút"]})]}),e.jsx(u.Content,{children:e.jsx(N,{variant:"primary",size:"lg",onClick:()=>a({type:x.START_QUIZ}),children:"Bắt đầu"})})]}),t.status==="active"&&e.jsxs(u,{className:"quizapp-card",children:[e.jsx(u.Header,{className:"quizapp-card-header",children:e.jsxs("div",{className:"quizapp-timer",children:["Thời gian còn lại: ",r(t.timeRemaining)]})}),e.jsxs(u.Content,{children:[e.jsx("div",{className:"quizapp-progress-container",children:e.jsx("div",{className:"quizapp-progress-bar",style:{width:`${i}%`}})}),e.jsx("div",{className:"quizapp-question",children:n.question}),e.jsx("div",{className:"quizapp-options",children:n.options.map((c,m)=>e.jsx(N,{variant:t.answers[n.id]===m?"secondary":"ghost",size:"md",className:"quizapp-option-button",onClick:()=>a({type:x.ANSWER_QUESTION,questionId:n.id,answerIndex:m}),children:c},m))})]}),e.jsxs(u.Footer,{className:"quizapp-navigation",children:[e.jsx(N,{variant:"ghost",size:"md",onClick:()=>a({type:x.PREV_QUESTION}),disabled:t.currentQuestionIndex===0,children:"Previous"}),t.currentQuestionIndex<j.length-1?e.jsx(N,{variant:"primary",size:"md",onClick:()=>a({type:x.NEXT_QUESTION}),children:"Next"}):e.jsx(N,{variant:"primary",size:"md",onClick:()=>a({type:x.SUBMIT_QUIZ}),children:"Submit"})]})]}),t.status==="finished"&&e.jsxs(u,{className:"quizapp-card",children:[e.jsxs(u.Header,{className:"quizapp-card-header",children:[e.jsx(u.Title,{className:"quizapp-card-title",children:"Kết quả"}),e.jsxs(u.Subtitle,{className:"quizapp-card-subtitle",children:["Bạn đạt ",t.score,"/",j.length," điểm"]})]}),e.jsx(u.Content,{children:j.map(c=>e.jsxs("div",{className:"quizapp-question",children:[e.jsx("div",{children:c.question}),e.jsx("div",{className:"quizapp-options",children:c.options.map((m,h)=>e.jsx(N,{variant:c.correctAnswer===h?"primary":t.answers[c.id]===h?"secondary":"ghost",size:"md",className:"quizapp-option-button",disabled:!0,children:m},h))})]},c.id))}),e.jsx(u.Footer,{className:"quizapp-navigation",children:e.jsx(N,{variant:"primary",size:"md",onClick:()=>a({type:x.RESTART_QUIZ}),children:"Restart"})})]})]})}function Se(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:3,title:"Quiz App với Timer"}),e.jsx(T.Description,{children:`
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


`}),e.jsx(T.Demo,{children:e.jsx(Ee,{})}),e.jsx(T.Code,{children:`
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

`})]})}const P={ADD_TASK:"ADD_TASK",MOVE_TASK:"MOVE_TASK",UPDATE_TASK:"UPDATE_TASK",DELETE_TASK:"DELETE_TASK",ADD_COLUMN:"ADD_COLUMN",DELETE_COLUMN:"DELETE_COLUMN"},Ce={columns:{todo:{id:"todo",title:"Cần làm",taskIds:[]},inProgress:{id:"inProgress",title:"Đang làm",taskIds:[]},done:{id:"done",title:"Hoàn thành",taskIds:[]}},tasks:{},columnOrder:["todo","inProgress","done"]};function ye(t,a){switch(a.type){case P.ADD_TASK:{const{columnId:n,task:i}=a.payload,r=`task-${Date.now()}`;return{...t,tasks:{...t.tasks,[r]:{id:r,columnId:n,...i}},columns:{...t.columns,[n]:{...t.columns[n],taskIds:[...t.columns[n].taskIds,r]}}}}case P.MOVE_TASK:{const{source:n,destination:i}=a.payload;if(!i||n.columnId===i.columnId&&n.index===i.index)return t;const r=t.columns[n.columnId],c=t.columns[i.columnId],m=Array.from(r.taskIds),h=n.columnId===i.columnId?m:Array.from(c.taskIds),[g]=m.splice(n.index,1);return h.splice(i.index,0,g),{...t,tasks:{...t.tasks,[g]:{...t.tasks[g],columnId:i.columnId}},columns:{...t.columns,[n.columnId]:{...r,taskIds:m},[i.columnId]:{...c,taskIds:h}}}}case P.UPDATE_TASK:{const{taskId:n,updates:i}=a.payload,r=t.tasks[n],c=r.columnId,m=i.columnId||c;let h={...t};return m!==c&&(h={...h,columns:{...h.columns,[c]:{...h.columns[c],taskIds:h.columns[c].taskIds.filter(g=>g!==n)},[m]:{...h.columns[m],taskIds:[...h.columns[m].taskIds,n]}}}),{...h,tasks:{...h.tasks,[n]:{...r,...i}}}}case P.DELETE_TASK:{const{taskId:n,columnId:i}=a.payload;return{...t,tasks:Object.fromEntries(Object.entries(t.tasks).filter(([r])=>r!==n)),columns:{...t.columns,[i]:{...t.columns[i],taskIds:t.columns[i].taskIds.filter(r=>r!==n)}}}}case P.ADD_COLUMN:{const{id:n,title:i}=a.payload;return{...t,columns:{...t.columns,[n]:{id:n,title:i,taskIds:[]}},columnOrder:[...t.columnOrder,n]}}case P.DELETE_COLUMN:{const{columnId:n,targetColumnId:i}=a.payload,r=t.columns[n],c=t.columnOrder.filter(m=>m!==n);return{...t,columns:{...t.columns,[i]:{...t.columns[i],taskIds:[...t.columns[i].taskIds,...r.taskIds]}},columnOrder:c}}default:return t}}function Ae(){const[t,a]=S.useReducer(ye,Ce),[n,i]=S.useState(""),[r,c]=S.useState(""),[m,h]=S.useState(""),[g,O]=S.useState(!1),[b,s]=S.useState(!1),[l,C]=S.useState(!1),[d,E]=S.useState(""),[I,q]=S.useState(null),[w,V]=S.useState({columnId:null,index:null}),H=S.useRef(null),X=Object.values(t.tasks).filter(o=>{const v=o.content.toLowerCase().includes(n.toLowerCase()),f=!r||o.priority===r,y=!m||o.assignee===m;return v&&f&&y}),Z=(o,v,f)=>{H.current={columnId:v,index:f},o.dataTransfer.effectAllowed="move"},$=(o,v)=>{V({columnId:o,index:v})},W=()=>{V({columnId:null,index:null})},K=o=>{o.preventDefault()},B=(o,v,f)=>{o.preventDefault();const y=H.current;if(!y)return;const U={columnId:v,index:f??t.columns[v].taskIds.length};a({type:P.MOVE_TASK,payload:{source:y,destination:U}}),H.current=null,V({columnId:null,index:null})},J=o=>{E(o),O(!0)},ee=o=>{q(o),s(!0)},te=()=>C(!0),ae=o=>{o.preventDefault();const v=o.target;a({type:P.ADD_TASK,payload:{columnId:d,task:{content:v.content.value,priority:v.priority.value,assignee:v.assignee.value||"Chưa giao"}}}),O(!1),v.reset()},se=o=>{o.preventDefault();const v=o.target;a({type:P.UPDATE_TASK,payload:{taskId:I.id,updates:{content:v.content.value,priority:v.priority.value,assignee:v.assignee.value||"Chưa giao",columnId:v.columnId.value}}}),s(!1)},ne=o=>{o.preventDefault();const v=`column-${Date.now()}`;a({type:P.ADD_COLUMN,payload:{id:v,title:o.target.title.value}}),C(!1),o.target.reset()},ie=o=>{if(t.columnOrder.length<=1)return;const v=t.columnOrder.find(f=>f!==o)||t.columnOrder[0];a({type:P.DELETE_COLUMN,payload:{columnId:o,targetColumnId:v}})};return e.jsxs("div",{className:"kanban-board",children:[e.jsx("h1",{className:"kanban-title",children:"Kanban Board"}),e.jsxs("div",{className:"kanban-header",children:[e.jsxs("div",{className:"kanban-controls",children:[e.jsx("input",{type:"text",placeholder:"Tìm kiếm task...",className:"kanban-search",value:n,onChange:o=>i(o.target.value)}),e.jsx(G,{value:r,onChange:o=>c(o.target.value),options:[{value:"",label:"Tất cả ưu tiên"},{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}]}),e.jsx(G,{value:m,onChange:o=>h(o.target.value),options:[{value:"",label:"Tất cả người"},...Array.from(new Set(Object.values(t.tasks).map(o=>o.assignee))).filter(Boolean).map(o=>({value:o,label:o}))]})]}),e.jsx(N,{variant:"primary",size:"lg",onClick:te,children:"+ Thêm cột"})]}),e.jsx("div",{className:"kanban-columns",children:t.columnOrder.map(o=>{const v=t.columns[o],f=v.taskIds.map(y=>t.tasks[y]).filter(y=>y&&X.some(U=>U.id===y.id));return e.jsxs("div",{className:"kanban-column",onDragOver:K,onDrop:y=>B(y,o),children:[e.jsxs("div",{className:"kanban-column-header",children:[e.jsx("h2",{className:"kanban-column-title",children:v.title}),e.jsx(oe,{content:"Xóa cột",children:e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>ie(o),disabled:t.columnOrder.length<=1,children:"Delete"})})]}),e.jsxs("div",{className:"kanban-tasks",children:[f.map((y,U)=>{const z=w.columnId===o&&w.index===U;return e.jsxs("div",{children:[z&&e.jsx("div",{className:"drop-preview"}),e.jsxs("div",{draggable:!0,onDragStart:Q=>Z(Q,o,U),onDragEnter:()=>$(o,U),onDragLeave:W,onDragOver:K,onDrop:Q=>B(Q,o,U),className:`kanban-task-card ${z?"drag-over":""}`,children:[e.jsx("div",{className:"kanban-task-content",children:y.content}),e.jsxs("div",{className:"kanban-task-meta",children:[e.jsx("span",{className:`kanban-task-priority priority-${y.priority}`,children:y.priority}),e.jsx("span",{className:"kanban-task-assignee",children:y.assignee})]}),e.jsxs("div",{className:"kanban-task-actions",children:[e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>ee(y),children:"Edit"}),e.jsx(N,{variant:"danger",size:"sm",onClick:()=>a({type:P.DELETE_TASK,payload:{taskId:y.id,columnId:o}}),children:"Delete"})]})]})]},y.id)}),w.columnId===o&&w.index===f.length&&e.jsx("div",{className:"drop-preview"})]}),e.jsx("div",{className:"kanban-add-task",onClick:()=>J(o),children:"+ Thêm task mới"})]},o)})}),e.jsxs(D,{isOpen:g,onClose:()=>O(!1),children:[e.jsx(D.Header,{onClose:()=>O(!1),children:"Thêm Task"}),e.jsx(D.Body,{children:e.jsxs("form",{onSubmit:ae,className:"modal-form",children:[e.jsx(M,{label:"Nội dung",name:"content",placeholder:"Nhập nội dung...",required:!0}),e.jsx(G,{label:"Độ ưu tiên",name:"priority",options:[{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}],defaultValue:"medium"}),e.jsx(M,{label:"Người thực hiện",name:"assignee",placeholder:"Tên..."}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(N,{variant:"ghost",onClick:()=>O(!1),children:"Hủy"}),e.jsx(N,{variant:"primary",type:"submit",children:"Thêm"})]})]})})]}),e.jsxs(D,{isOpen:b,onClose:()=>s(!1),children:[e.jsx(D.Header,{onClose:()=>s(!1),children:"Sửa Task"}),e.jsx(D.Body,{children:I&&e.jsxs("form",{onSubmit:se,className:"modal-form",children:[e.jsx(M,{label:"Nội dung",name:"content",defaultValue:I.content,required:!0}),e.jsx(G,{label:"Độ ưu tiên",name:"priority",options:[{value:"high",label:"Cao"},{value:"medium",label:"Trung bình"},{value:"low",label:"Thấp"}],defaultValue:I.priority}),e.jsx(M,{label:"Người thực hiện",name:"assignee",defaultValue:I.assignee}),e.jsx(G,{label:"Chuyển đến cột",name:"columnId",options:t.columnOrder.map(o=>({value:o,label:t.columns[o].title})),defaultValue:I.columnId}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(N,{variant:"ghost",onClick:()=>s(!1),children:"Hủy"}),e.jsx(N,{variant:"primary",type:"submit",children:"Cập nhật"})]})]})})]}),e.jsxs(D,{isOpen:l,onClose:()=>C(!1),children:[e.jsx(D.Header,{onClose:()=>C(!1),children:"Thêm Cột"}),e.jsx(D.Body,{children:e.jsxs("form",{onSubmit:ne,className:"modal-form",children:[e.jsx(M,{label:"Tên cột",name:"title",placeholder:"VD: Review...",required:!0}),e.jsxs("div",{className:"modal-actions",children:[e.jsx(N,{variant:"ghost",onClick:()=>C(!1),children:"Hủy"}),e.jsx(N,{variant:"primary",type:"submit",children:"Thêm"})]})]})})]})]})}function Ie(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:4,title:"Kanban Board"}),e.jsx(T.Description,{children:`
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

`}),e.jsx(T.Demo,{children:e.jsx(Ae,{})}),e.jsx(T.Code,{children:`
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

`})]})}const p={SET_STEP:"SET_STEP",NEXT_STEP:"NEXT_STEP",PREV_STEP:"PREV_STEP",UPDATE_CART:"UPDATE_CART",UPDATE_SHIPPING:"UPDATE_SHIPPING",UPDATE_PAYMENT:"UPDATE_PAYMENT",APPLY_PROMO:"APPLY_PROMO",PLACE_ORDER:"PLACE_ORDER",SET_ERRORS:"SET_ERRORS",CALCULATE_TOTALS:"CALCULATE_TOTALS",SET_PROCESSING:"SET_PROCESSING"},A={CART:0,SHIPPING:1,PAYMENT:2,REVIEW:3,CONFIRMATION:4},Oe={SAVE10:.1,SAVE20:.2,FREESHIP:0};function xe(t,a){switch(a.type){case p.SET_STEP:return{...t,currentStep:a.payload};case p.NEXT_STEP:return{...t,currentStep:Math.min(t.currentStep+1,A.CONFIRMATION),errors:{}};case p.PREV_STEP:return{...t,currentStep:Math.max(t.currentStep-1,A.CART),errors:{}};case p.UPDATE_CART:{const{itemId:n,quantity:i}=a.payload;let r=[...t.cart.items];return i===0?r=r.filter(c=>c.id!==n):r=r.map(c=>c.id===n?{...c,quantity:i}:c),{...t,cart:{...t.cart,items:r}}}case p.UPDATE_SHIPPING:return{...t,shipping:{...t.shipping,...a.payload}};case p.UPDATE_PAYMENT:return{...t,payment:{...t.payment,...a.payload}};case p.APPLY_PROMO:{const n=a.payload.toUpperCase(),i=Oe[n];return i!==void 0?{...t,promoCode:{code:n,discount:i},errors:{...t.errors,promo:null}}:{...t,errors:{...t.errors,promo:"Mã giảm giá không hợp lệ"}}}case p.CALCULATE_TOTALS:{const n=t.cart.items.reduce((h,g)=>h+g.price*g.quantity,0);let i=0;t.shipping.method==="standard"?i=3e4:t.shipping.method==="express"&&(i=5e4),t.promoCode.code==="FREESHIP"&&(i=0);const r=Math.round(n*.1),c=Math.round(n*t.promoCode.discount),m=n+i+r-c;return{...t,cart:{...t.cart,subtotal:n,shipping:i,tax:r,discount:c,total:m}}}case p.SET_ERRORS:return{...t,errors:a.payload};case p.SET_PROCESSING:return{...t,isProcessing:a.payload};case p.PLACE_ORDER:{const n="ORD"+Date.now();return{...t,orderNumber:n,isProcessing:!1,currentStep:A.CONFIRMATION}}default:return t}}function Pe(){const[t,a]=S.useReducer(xe,{currentStep:A.CART,cart:{items:[{id:1,name:"iPhone 15 Pro Max",price:2999e4,quantity:1},{id:2,name:"AirPods Pro 2",price:649e4,quantity:2},{id:3,name:"Apple Watch Series 9",price:1099e4,quantity:1}],subtotal:0,shipping:0,tax:0,discount:0,total:0},shipping:{fullName:"",address:"",city:"",zipCode:"",phone:"",method:"standard"},payment:{method:"card",cardNumber:"",cardName:"",expiryDate:"",cvv:""},promoCode:{code:"",discount:0},errors:{},isProcessing:!1,orderNumber:null});S.useEffect(()=>{a({type:p.CALCULATE_TOTALS})},[t.cart.items,t.shipping.method,t.promoCode]);const n=["Giỏ hàng","Thông tin giao hàng","Thanh toán","Xác nhận","Hoàn tất"],i=()=>{const s={};return t.cart.items.length===0&&(s.cart="Giỏ hàng trống. Vui lòng thêm sản phẩm."),s},r=()=>{const s={},{fullName:l,address:C,city:d,zipCode:E,phone:I}=t.shipping;return l.trim()||(s.fullName="Vui lòng nhập họ tên"),C.trim()||(s.address="Vui lòng nhập địa chỉ"),d.trim()||(s.city="Vui lòng nhập thành phố"),E.trim()||(s.zipCode="Vui lòng nhập mã bưu điện"),I.trim()||(s.phone="Vui lòng nhập số điện thoại"),I&&!/^0\d{9,10}$/.test(I)&&(s.phone="Số điện thoại không hợp lệ (VD: 0901234567)"),E&&!/^\d{5,6}$/.test(E)&&(s.zipCode="Mã bưu điện không hợp lệ (5-6 chữ số)"),s},c=()=>{const s={},{method:l,cardNumber:C,cardName:d,expiryDate:E,cvv:I}=t.payment;if(l==="card"){if(C.trim()?/^\d{16}$/.test(C.replace(/\s/g,""))||(s.cardNumber="Số thẻ phải có 16 chữ số"):s.cardNumber="Vui lòng nhập số thẻ",d.trim()||(s.cardName="Vui lòng nhập tên trên thẻ"),!E.trim())s.expiryDate="Vui lòng nhập ngày hết hạn";else if(!/^\d{2}\/\d{2}$/.test(E))s.expiryDate="Định dạng: MM/YY";else{const[q,w]=E.split("/");new Date(2e3+parseInt(w),parseInt(q)-1)<new Date&&(s.expiryDate="Thẻ đã hết hạn")}I.trim()?/^\d{3,4}$/.test(I)||(s.cvv="CVV phải có 3-4 chữ số"):s.cvv="Vui lòng nhập CVV"}return s},m=()=>{let s={};t.currentStep===A.CART?s=i():t.currentStep===A.SHIPPING?s=r():t.currentStep===A.PAYMENT&&(s=c()),Object.keys(s).length>0?a({type:p.SET_ERRORS,payload:s}):a({type:p.NEXT_STEP})},h=async()=>{a({type:p.SET_PROCESSING,payload:!0}),await new Promise(s=>setTimeout(s,2e3)),a({type:p.PLACE_ORDER})},g=s=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(s),O=(s,l)=>{l>=0&&a({type:p.UPDATE_CART,payload:{itemId:s,quantity:l}})},b=s=>{s.preventDefault();const l=s.target.promoInput.value;a({type:p.APPLY_PROMO,payload:l})};return e.jsxs("div",{className:"checkout-container",children:[e.jsx("h1",{className:"checkout-title",children:"Thanh Toán"}),e.jsxs("div",{className:"steps-progress",children:[e.jsx("div",{className:"steps-line"}),n.map((s,l)=>e.jsxs("div",{className:"step-item",children:[e.jsx("div",{className:`step-circle ${l<=t.currentStep?"active":""} ${l<t.currentStep?"completed":""}`,children:l<t.currentStep?"✓":l+1}),e.jsx("div",{className:`step-label ${l===t.currentStep?"active":""}`,children:s})]},l))]}),e.jsxs("div",{className:"checkout-body",children:[e.jsxs("div",{className:"main-content",children:[t.currentStep===A.CART&&e.jsxs("div",{className:"step-card",children:[e.jsx("h2",{children:"Giỏ hàng của bạn"}),t.errors.cart&&e.jsx("p",{className:"error-text",children:t.errors.cart}),t.cart.items.map(s=>e.jsxs("div",{className:"cart-item",children:[e.jsxs("div",{className:"item-wrapper",children:[e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:s.name}),e.jsx("p",{className:"price",children:g(s.price)})]}),e.jsxs("div",{className:"quantity-controls",children:[e.jsx("button",{onClick:()=>O(s.id,s.quantity-1),className:"qty-btn",children:"-"}),e.jsx("span",{className:"qty-display",children:s.quantity}),e.jsx("button",{onClick:()=>O(s.id,s.quantity+1),className:"qty-btn",children:"+"}),e.jsx("button",{onClick:()=>O(s.id,0),className:"remove-btn",children:"Xóa"})]})]}),e.jsx("div",{className:"item-total",children:g(s.price*s.quantity)})]},s.id)),e.jsxs("form",{onSubmit:b,className:"promo-form",children:[e.jsxs("div",{className:"promo-input-group",children:[e.jsx("input",{name:"promoInput",type:"text",placeholder:"Nhập mã giảm giá",className:"promo-input"}),e.jsx("button",{type:"submit",className:"promo-btn",children:"Áp dụng"})]}),t.errors.promo&&e.jsx("p",{className:"error-text",children:t.errors.promo}),t.promoCode.code&&e.jsxs("p",{className:"success-text",children:["✓ Đã áp dụng mã: ",t.promoCode.code]})]}),e.jsx("p",{className:"promo-hint",children:"Mã khuyến mãi: SAVE10 (10%), SAVE20 (20%), FREESHIP (miễn phí ship)"})]}),t.currentStep===A.SHIPPING&&e.jsxs("div",{className:"step-card",children:[e.jsx("h2",{children:"Thông tin giao hàng"}),e.jsxs("div",{className:"form-group",children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Họ và tên ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.shipping.fullName,onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{fullName:s.target.value}}),className:t.errors.fullName?"input-error":"input"}),t.errors.fullName&&e.jsx("p",{className:"error-text",children:t.errors.fullName})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Địa chỉ ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.shipping.address,onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{address:s.target.value}}),className:t.errors.address?"input-error":"input"}),t.errors.address&&e.jsx("p",{className:"error-text",children:t.errors.address})]}),e.jsxs("div",{className:"input-row",children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Thành phố ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.shipping.city,onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{city:s.target.value}}),className:t.errors.city?"input-error":"input"}),t.errors.city&&e.jsx("p",{className:"error-text",children:t.errors.city})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Mã bưu điện ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.shipping.zipCode,onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{zipCode:s.target.value}}),className:t.errors.zipCode?"input-error":"input"}),t.errors.zipCode&&e.jsx("p",{className:"error-text",children:t.errors.zipCode})]})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Số điện thoại ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"tel",value:t.shipping.phone,onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{phone:s.target.value}}),className:t.errors.phone?"input-error":"input"}),t.errors.phone&&e.jsx("p",{className:"error-text",children:t.errors.phone})]}),e.jsxs("div",{className:"shipping-options",children:[e.jsx("label",{className:"option-label",children:"Phương thức vận chuyển"}),e.jsxs("label",{className:`shipping-option ${t.shipping.method==="standard"?"selected":""}`,children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"shippingMethod",value:"standard",checked:t.shipping.method==="standard",onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{method:s.target.value}})}),e.jsx("strong",{children:"Giao hàng tiêu chuẩn"}),e.jsx("div",{className:"option-desc",children:"3-5 ngày làm việc"})]}),e.jsx("span",{className:"option-price",children:"30.000₫"})]}),e.jsxs("label",{className:`shipping-option ${t.shipping.method==="express"?"selected":""}`,children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"shippingMethod",value:"express",checked:t.shipping.method==="express",onChange:s=>a({type:p.UPDATE_SHIPPING,payload:{method:s.target.value}})}),e.jsx("strong",{children:"Giao hàng nhanh"}),e.jsx("div",{className:"option-desc",children:"1-2 ngày làm việc"})]}),e.jsx("span",{className:"option-price",children:"50.000₫"})]})]})]})]}),t.currentStep===A.PAYMENT&&e.jsxs("div",{className:"step-card",children:[e.jsx("h2",{children:"Phương thức thanh toán"}),e.jsxs("div",{className:"payment-methods",children:[e.jsxs("label",{className:`payment-option ${t.payment.method==="card"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"card",checked:t.payment.method==="card",onChange:s=>a({type:p.UPDATE_PAYMENT,payload:{method:s.target.value}})}),e.jsx("strong",{children:"Thẻ tín dụng/ghi nợ"})]}),e.jsxs("label",{className:`payment-option ${t.payment.method==="momo"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"momo",checked:t.payment.method==="momo",onChange:s=>a({type:p.UPDATE_PAYMENT,payload:{method:s.target.value}})}),e.jsx("strong",{children:"Ví MoMo"})]}),e.jsxs("label",{className:`payment-option ${t.payment.method==="cod"?"selected":""}`,children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"cod",checked:t.payment.method==="cod",onChange:s=>a({type:p.UPDATE_PAYMENT,payload:{method:s.target.value}})}),e.jsx("strong",{children:"Thanh toán khi nhận hàng (COD)"})]})]}),t.payment.method==="card"&&e.jsxs("div",{className:"card-form",children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Số thẻ ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.payment.cardNumber,onChange:s=>{const l=s.target.value.replace(/\s/g,"").replace(/\D/g,"");a({type:p.UPDATE_PAYMENT,payload:{cardNumber:l}})},placeholder:"1234 5678 9012 3456",maxLength:"16",className:t.errors.cardNumber?"input-error":"input"}),t.errors.cardNumber&&e.jsx("p",{className:"error-text",children:t.errors.cardNumber})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Tên trên thẻ ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.payment.cardName,onChange:s=>a({type:p.UPDATE_PAYMENT,payload:{cardName:s.target.value.toUpperCase()}}),placeholder:"NGUYEN VAN A",className:t.errors.cardName?"input-error":"input"}),t.errors.cardName&&e.jsx("p",{className:"error-text",children:t.errors.cardName})]}),e.jsxs("div",{className:"input-row",children:[e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["Ngày hết hạn ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.payment.expiryDate,onChange:s=>{let l=s.target.value.replace(/\D/g,"");l.length>=2&&(l=l.slice(0,2)+"/"+l.slice(2,4)),a({type:p.UPDATE_PAYMENT,payload:{expiryDate:l}})},placeholder:"MM/YY",maxLength:"5",className:t.errors.expiryDate?"input-error":"input"}),t.errors.expiryDate&&e.jsx("p",{className:"error-text",children:t.errors.expiryDate})]}),e.jsxs("div",{className:"input-wrapper",children:[e.jsxs("label",{children:["CVV ",e.jsx("span",{className:"required",children:"*"})]}),e.jsx("input",{type:"text",value:t.payment.cvv,onChange:s=>{const l=s.target.value.replace(/\D/g,"");a({type:p.UPDATE_PAYMENT,payload:{cvv:l}})},placeholder:"123",maxLength:"4",className:t.errors.cvv?"input-error":"input"}),t.errors.cvv&&e.jsx("p",{className:"error-text",children:t.errors.cvv})]})]})]}),t.payment.method==="momo"&&e.jsx("div",{className:"payment-info momo-info",children:e.jsx("p",{children:"Bạn sẽ được chuyển đến ứng dụng MoMo để hoàn tất thanh toán."})}),t.payment.method==="cod"&&e.jsxs("div",{className:"payment-info cod-info",children:[e.jsx("p",{children:"Bạn sẽ thanh toán bằng tiền mặt khi nhận hàng."}),e.jsx("p",{className:"note",children:"Lưu ý: Vui lòng kiểm tra kỹ sản phẩm trước khi thanh toán."})]})]}),t.currentStep===A.REVIEW&&e.jsxs("div",{className:"step-card",children:[e.jsx("h2",{children:"Xác nhận đơn hàng"}),e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{children:"Thông tin giao hàng"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Người nhận:"})," ",t.shipping.fullName]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Địa chỉ:"})," ",t.shipping.address]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Thành phố:"})," ",t.shipping.city,","," ",t.shipping.zipCode]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Điện thoại:"})," ",t.shipping.phone]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phương thức vận chuyển:"})," ",t.shipping.method==="standard"?"Giao hàng tiêu chuẩn (3-5 ngày)":"Giao hàng nhanh (1-2 ngày)"]})]}),e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{children:"Phương thức thanh toán"}),e.jsxs("p",{children:[t.payment.method==="card"&&"Thẻ tín dụng/ghi nợ",t.payment.method==="momo"&&"Ví MoMo",t.payment.method==="cod"&&"Thanh toán khi nhận hàng (COD)"]}),t.payment.method==="card"&&e.jsxs("p",{children:[e.jsx("strong",{children:"Số thẻ:"})," **** **** ****"," ",t.payment.cardNumber.slice(-4)]})]}),e.jsxs("div",{className:"review-section",children:[e.jsx("h3",{children:"Sản phẩm"}),t.cart.items.map(s=>e.jsxs("div",{className:"review-item",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s.name}),e.jsxs("div",{className:"item-desc",children:[g(s.price)," × ",s.quantity]})]}),e.jsx("div",{className:"item-total",children:g(s.price*s.quantity)})]},s.id))]}),e.jsx("div",{className:"agreement-box",children:e.jsx("p",{children:"✓ Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi."})})]}),t.currentStep===A.CONFIRMATION&&e.jsxs("div",{className:"confirmation-card",children:[e.jsx("div",{className:"success-icon",children:"✓"}),e.jsx("h2",{className:"success-title",children:"Đặt hàng thành công!"}),e.jsxs("p",{className:"order-number",children:["Mã đơn hàng: ",e.jsx("strong",{children:t.orderNumber})]}),e.jsx("p",{className:"thank-you",children:"Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ gửi email xác nhận đến bạn sớm nhất."}),e.jsxs("p",{className:"delivery-info",children:["Đơn hàng của bạn sẽ được giao trong"," ",t.shipping.method==="standard"?"3-5":"1-2"," ngày làm việc."]}),e.jsxs("div",{className:"order-details",children:[e.jsx("h3",{children:"Chi tiết đơn hàng"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tổng tiền:"})," ",g(t.cart.total)]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Địa chỉ giao hàng:"})," ",t.shipping.address,","," ",t.shipping.city]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Số điện thoại:"})," ",t.shipping.phone]})]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"continue-shopping-btn",children:"Tiếp tục mua sắm"})]}),t.currentStep<A.CONFIRMATION&&e.jsxs("div",{className:"navigation-buttons",children:[t.currentStep>A.CART&&e.jsx("button",{onClick:()=>a({type:p.PREV_STEP}),className:"back-btn",children:"← Quay lại"}),e.jsx("button",{onClick:t.currentStep===A.REVIEW?h:m,disabled:t.isProcessing,className:`next-btn ${t.isProcessing?"disabled":""}`,children:t.isProcessing?"Đang xử lý...":t.currentStep===A.REVIEW?"✓ Đặt hàng":"Tiếp tục →"})]})]}),t.currentStep<A.CONFIRMATION&&e.jsxs("div",{className:"order-summary",children:[e.jsx("h3",{children:"Tóm tắt đơn hàng"}),e.jsx("div",{className:"summary-header",children:e.jsxs("p",{children:[t.cart.items.length," sản phẩm"]})}),e.jsxs("div",{className:"summary-details",children:[e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Tạm tính:"}),e.jsx("span",{children:g(t.cart.subtotal)})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Phí vận chuyển:"}),e.jsx("span",{children:g(t.cart.shipping)})]}),e.jsxs("div",{className:"summary-row",children:[e.jsx("span",{children:"Thuế VAT (10%):"}),e.jsx("span",{children:g(t.cart.tax)})]}),t.cart.discount>0&&e.jsxs("div",{className:"summary-row discount",children:[e.jsxs("span",{children:["Giảm giá (",t.promoCode.code,"):"]}),e.jsxs("span",{children:["-",g(t.cart.discount)]})]})]}),e.jsxs("div",{className:"summary-total",children:[e.jsx("span",{children:"Tổng cộng:"}),e.jsx("span",{className:"total-price",children:g(t.cart.total)})]}),e.jsx("div",{className:"security-note",children:"Giao dịch được bảo mật và mã hóa"})]})]})]})}function _e(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:5,title:"Multi-Step Checkout (Challenge)"}),e.jsx(T.Description,{children:`
// TODO: Implement checkout flow với validation

const CHECKOUT_ACTIONS = {
  SET_STEP: "SET_STEP",
  NEXT_STEP: "NEXT_STEP",
  PREV_STEP: "PREV_STEP",
  UPDATE_CART: "UPDATE_CART",
  UPDATE_SHIPPING: "UPDATE_SHIPPING",
  UPDATE_PAYMENT: "UPDATE_PAYMENT",
  APPLY_PROMO: "APPLY_PROMO",
  PLACE_ORDER: "PLACE_ORDER",
  SET_ERRORS: "SET_ERRORS",
  CALCULATE_TOTALS: "CALCULATE_TOTALS",
  SET_PROCESSING: "SET_PROCESSING",
};

const STEPS = {
  CART: 0,
  SHIPPING: 1,
  PAYMENT: 2,
  REVIEW: 3,
  CONFIRMATION: 4
};

// Danh sách promo code mẫu
const PROMO_CODES = {
  'SAVE10': 0.10, // Giảm 10%
  'SAVE20': 0.20, // Giảm 20%
  'FREESHIP': 0, // Miễn phí ship
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
        { id: 1, name: "iPhone 15 Pro Max", price: 29990000, quantity: 1 },
        { id: 2, name: "AirPods Pro 2", price: 6490000, quantity: 2 },
        { id: 3, name: "Apple Watch Series 9", price: 10990000, quantity: 1 },
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

`}),e.jsx(T.Demo,{children:e.jsx(Pe,{})}),e.jsx(T.Code,{children:`
// CheckoutFlow.jsx
import { useEffect, useReducer } from "react";

const CHECKOUT_ACTIONS = {
  SET_STEP: "SET_STEP",
  NEXT_STEP: "NEXT_STEP",
  PREV_STEP: "PREV_STEP",
  UPDATE_CART: "UPDATE_CART",
  UPDATE_SHIPPING: "UPDATE_SHIPPING",
  UPDATE_PAYMENT: "UPDATE_PAYMENT",
  APPLY_PROMO: "APPLY_PROMO",
  PLACE_ORDER: "PLACE_ORDER",
  SET_ERRORS: "SET_ERRORS",
  CALCULATE_TOTALS: "CALCULATE_TOTALS",
  SET_PROCESSING: "SET_PROCESSING",
};

const STEPS = {
  CART: 0,
  SHIPPING: 1,
  PAYMENT: 2,
  REVIEW: 3,
  CONFIRMATION: 4,
};

const PROMO_CODES = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  FREESHIP: 0,
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case CHECKOUT_ACTIONS.SET_STEP:
      return { ...state, currentStep: action.payload };

    case CHECKOUT_ACTIONS.NEXT_STEP:
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, STEPS.CONFIRMATION),
        errors: {},
      };

    case CHECKOUT_ACTIONS.PREV_STEP:
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, STEPS.CART),
        errors: {},
      };

    case CHECKOUT_ACTIONS.UPDATE_CART: {
      const { itemId, quantity } = action.payload;
      let updatedItems = [...state.cart.items];

      if (quantity === 0) {
        updatedItems = updatedItems.filter((item) => item.id !== itemId);
      } else {
        updatedItems = updatedItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        );
      }

      return {
        ...state,
        cart: { ...state.cart, items: updatedItems },
      };
    }

    case CHECKOUT_ACTIONS.UPDATE_SHIPPING:
      return {
        ...state,
        shipping: { ...state.shipping, ...action.payload },
      };

    case CHECKOUT_ACTIONS.UPDATE_PAYMENT:
      return {
        ...state,
        payment: { ...state.payment, ...action.payload },
      };

    case CHECKOUT_ACTIONS.APPLY_PROMO: {
      const code = action.payload.toUpperCase();
      const discount = PROMO_CODES[code];

      if (discount !== undefined) {
        return {
          ...state,
          promoCode: { code, discount },
          errors: { ...state.errors, promo: null },
        };
      } else {
        return {
          ...state,
          errors: { ...state.errors, promo: "Mã giảm giá không hợp lệ" },
        };
      }
    }

    case CHECKOUT_ACTIONS.CALCULATE_TOTALS: {
      const subtotal = state.cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      let shipping = 0;
      if (state.shipping.method === "standard") {
        shipping = 30000;
      } else if (state.shipping.method === "express") {
        shipping = 50000;
      }

      if (state.promoCode.code === "FREESHIP") {
        shipping = 0;
      }

      const tax = Math.round(subtotal * 0.1);
      const discount = Math.round(subtotal * state.promoCode.discount);
      const total = subtotal + shipping + tax - discount;

      return {
        ...state,
        cart: { ...state.cart, subtotal, shipping, tax, discount, total },
      };
    }

    case CHECKOUT_ACTIONS.SET_ERRORS:
      return { ...state, errors: action.payload };

    case CHECKOUT_ACTIONS.SET_PROCESSING:
      return { ...state, isProcessing: action.payload };

    case CHECKOUT_ACTIONS.PLACE_ORDER: {
      const orderNumber = "ORD" + Date.now();
      return {
        ...state,
        orderNumber,
        isProcessing: false,
        currentStep: STEPS.CONFIRMATION,
      };
    }

    default:
      return state;
  }
}

function CheckoutFlow() {
  const [state, dispatch] = useReducer(checkoutReducer, {
    currentStep: STEPS.CART,
    cart: {
      items: [
        { id: 1, name: "iPhone 15 Pro Max", price: 29990000, quantity: 1 },
        { id: 2, name: "AirPods Pro 2", price: 6490000, quantity: 2 },
        { id: 3, name: "Apple Watch Series 9", price: 10990000, quantity: 1 },
      ],
      subtotal: 0,
      shipping: 0,
      tax: 0,
      discount: 0,
      total: 0,
    },
    shipping: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      method: "standard",
    },
    payment: {
      method: "card",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    },
    promoCode: { code: "", discount: 0 },
    errors: {},
    isProcessing: false,
    orderNumber: null,
  });

  useEffect(() => {
    dispatch({ type: CHECKOUT_ACTIONS.CALCULATE_TOTALS });
  }, [state.cart.items, state.shipping.method, state.promoCode]);

  const stepTitles = [
    "Giỏ hàng",
    "Thông tin giao hàng",
    "Thanh toán",
    "Xác nhận",
    "Hoàn tất",
  ];

  const validateCart = () => {
    const errors = {};
    if (state.cart.items.length === 0) {
      errors.cart = "Giỏ hàng trống. Vui lòng thêm sản phẩm.";
    }
    return errors;
  };

  const validateShipping = () => {
    const errors = {};
    const { fullName, address, city, zipCode, phone } = state.shipping;

    if (!fullName.trim()) errors.fullName = "Vui lòng nhập họ tên";
    if (!address.trim()) errors.address = "Vui lòng nhập địa chỉ";
    if (!city.trim()) errors.city = "Vui lòng nhập thành phố";
    if (!zipCode.trim()) errors.zipCode = "Vui lòng nhập mã bưu điện";
    if (!phone.trim()) errors.phone = "Vui lòng nhập số điện thoại";

    if (phone && !/^0\\d{9,10}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ (VD: 0901234567)";
    }

    if (zipCode && !/^\\d{5,6}$/.test(zipCode)) {
      errors.zipCode = "Mã bưu điện không hợp lệ (5-6 chữ số)";
    }

    return errors;
  };

  const validatePayment = () => {
    const errors = {};
    const { method, cardNumber, cardName, expiryDate, cvv } = state.payment;

    if (method === "card") {
      if (!cardNumber.trim()) {
        errors.cardNumber = "Vui lòng nhập số thẻ";
      } else if (!/^\\d{16}$/.test(cardNumber.replace(/\\s/g, ""))) {
        errors.cardNumber = "Số thẻ phải có 16 chữ số";
      }

      if (!cardName.trim()) {
        errors.cardName = "Vui lòng nhập tên trên thẻ";
      }

      if (!expiryDate.trim()) {
        errors.expiryDate = "Vui lòng nhập ngày hết hạn";
      } else if (!/^\\d{2}\\/\\d{2}$/.test(expiryDate)) {
        errors.expiryDate = "Định dạng: MM/YY";
      } else {
        const [month, year] = expiryDate.split("/");
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        if (expiry < new Date()) {
          errors.expiryDate = "Thẻ đã hết hạn";
        }
      }

      if (!cvv.trim()) {
        errors.cvv = "Vui lòng nhập CVV";
      } else if (!/^\\d{3,4}$/.test(cvv)) {
        errors.cvv = "CVV phải có 3-4 chữ số";
      }
    }

    return errors;
  };

  const handleNext = () => {
    let errors = {};

    if (state.currentStep === STEPS.CART) {
      errors = validateCart();
    } else if (state.currentStep === STEPS.SHIPPING) {
      errors = validateShipping();
    } else if (state.currentStep === STEPS.PAYMENT) {
      errors = validatePayment();
    }

    if (Object.keys(errors).length > 0) {
      dispatch({ type: CHECKOUT_ACTIONS.SET_ERRORS, payload: errors });
    } else {
      dispatch({ type: CHECKOUT_ACTIONS.NEXT_STEP });
    }
  };

  const handlePlaceOrder = async () => {
    dispatch({ type: CHECKOUT_ACTIONS.SET_PROCESSING, payload: true });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch({ type: CHECKOUT_ACTIONS.PLACE_ORDER });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 0) {
      dispatch({
        type: CHECKOUT_ACTIONS.UPDATE_CART,
        payload: { itemId, quantity: newQuantity },
      });
    }
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const input = e.target.promoInput.value;
    dispatch({ type: CHECKOUT_ACTIONS.APPLY_PROMO, payload: input });
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Thanh Toán</h1>

      {/* Progress Steps */}
      <div className="steps-progress">
        <div className="steps-line" />
        {stepTitles.map((title, index) => (
          <div key={index} className="step-item">
            <div
              className={\`step-circle \${
                index <= state.currentStep ? "active" : ""
              } \${index < state.currentStep ? "completed" : ""}\`}
            >
              {index < state.currentStep ? "✓" : index + 1}
            </div>
            <div
              className={\`step-label \${
                index === state.currentStep ? "active" : ""
              }\`}
            >
              {title}
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-body">
        {/* Main Content */}
        <div className="main-content">
          {/* CART */}
          {state.currentStep === STEPS.CART && (
            <div className="step-card">
              <h2>Giỏ hàng của bạn</h2>
              {state.errors.cart && (
                <p className="error-text">{state.errors.cart}</p>
              )}
              {state.cart.items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-wrapper">
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p className="price">{formatPrice(item.price)}</p>
                    </div>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="qty-btn"
                      >
                        -
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="qty-btn"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleQuantityChange(item.id, 0)}
                        className="remove-btn"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                  <div className="item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}

              <form onSubmit={handleApplyPromo} className="promo-form">
                <div className="promo-input-group">
                  <input
                    name="promoInput"
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    className="promo-input"
                  />
                  <button type="submit" className="promo-btn">
                    Áp dụng
                  </button>
                </div>
                {state.errors.promo && (
                  <p className="error-text">{state.errors.promo}</p>
                )}
                {state.promoCode.code && (
                  <p className="success-text">
                    ✓ Đã áp dụng mã: {state.promoCode.code}
                  </p>
                )}
              </form>
              <p className="promo-hint">
                Mã khuyến mãi: SAVE10 (10%), SAVE20 (20%), FREESHIP (miễn phí
                ship)
              </p>
            </div>
          )}

          {/* SHIPPING */}
          {state.currentStep === STEPS.SHIPPING && (
            <div className="step-card">
              <h2>Thông tin giao hàng</h2>
              <div className="form-group">
                <div className="input-wrapper">
                  <label>
                    Họ và tên <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={state.shipping.fullName}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                        payload: { fullName: e.target.value },
                      })
                    }
                    className={state.errors.fullName ? "input-error" : "input"}
                  />
                  {state.errors.fullName && (
                    <p className="error-text">{state.errors.fullName}</p>
                  )}
                </div>

                <div className="input-wrapper">
                  <label>
                    Địa chỉ <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value={state.shipping.address}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                        payload: { address: e.target.value },
                      })
                    }
                    className={state.errors.address ? "input-error" : "input"}
                  />
                  {state.errors.address && (
                    <p className="error-text">{state.errors.address}</p>
                  )}
                </div>

                <div className="input-row">
                  <div className="input-wrapper">
                    <label>
                      Thành phố <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={state.shipping.city}
                      onChange={(e) =>
                        dispatch({
                          type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                          payload: { city: e.target.value },
                        })
                      }
                      className={state.errors.city ? "input-error" : "input"}
                    />
                    {state.errors.city && (
                      <p className="error-text">{state.errors.city}</p>
                    )}
                  </div>
                  <div className="input-wrapper">
                    <label>
                      Mã bưu điện <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={state.shipping.zipCode}
                      onChange={(e) =>
                        dispatch({
                          type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                          payload: { zipCode: e.target.value },
                        })
                      }
                      className={state.errors.zipCode ? "input-error" : "input"}
                    />
                    {state.errors.zipCode && (
                      <p className="error-text">{state.errors.zipCode}</p>
                    )}
                  </div>
                </div>

                <div className="input-wrapper">
                  <label>
                    Số điện thoại <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    value={state.shipping.phone}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                        payload: { phone: e.target.value },
                      })
                    }
                    className={state.errors.phone ? "input-error" : "input"}
                  />
                  {state.errors.phone && (
                    <p className="error-text">{state.errors.phone}</p>
                  )}
                </div>

                <div className="shipping-options">
                  <label className="option-label">Phương thức vận chuyển</label>
                  <label
                    className={\`shipping-option \${
                      state.shipping.method === "standard" ? "selected" : ""
                    }\`}
                  >
                    <div>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={state.shipping.method === "standard"}
                        onChange={(e) =>
                          dispatch({
                            type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                            payload: { method: e.target.value },
                          })
                        }
                      />
                      <strong>Giao hàng tiêu chuẩn</strong>
                      <div className="option-desc">3-5 ngày làm việc</div>
                    </div>
                    <span className="option-price">30.000₫</span>
                  </label>

                  <label
                    className={\`shipping-option \${
                      state.shipping.method === "express" ? "selected" : ""
                    }\`}
                  >
                    <div>
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={state.shipping.method === "express"}
                        onChange={(e) =>
                          dispatch({
                            type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                            payload: { method: e.target.value },
                          })
                        }
                      />
                      <strong>Giao hàng nhanh</strong>
                      <div className="option-desc">1-2 ngày làm việc</div>
                    </div>
                    <span className="option-price">50.000₫</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* PAYMENT */}
          {state.currentStep === STEPS.PAYMENT && (
            <div className="step-card">
              <h2>Phương thức thanh toán</h2>
              <div className="payment-methods">
                <label
                  className={\`payment-option \${
                    state.payment.method === "card" ? "selected" : ""
                  }\`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={state.payment.method === "card"}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                        payload: { method: e.target.value },
                      })
                    }
                  />
                  <strong>Thẻ tín dụng/ghi nợ</strong>
                </label>

                <label
                  className={\`payment-option \${
                    state.payment.method === "momo" ? "selected" : ""
                  }\`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="momo"
                    checked={state.payment.method === "momo"}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                        payload: { method: e.target.value },
                      })
                    }
                  />
                  <strong>Ví MoMo</strong>
                </label>

                <label
                  className={\`payment-option \${
                    state.payment.method === "cod" ? "selected" : ""
                  }\`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={state.payment.method === "cod"}
                    onChange={(e) =>
                      dispatch({
                        type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                        payload: { method: e.target.value },
                      })
                    }
                  />
                  <strong>Thanh toán khi nhận hàng (COD)</strong>
                </label>
              </div>

              {state.payment.method === "card" && (
                <div className="card-form">
                  <div className="input-wrapper">
                    <label>
                      Số thẻ <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={state.payment.cardNumber}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\\s/g, "")
                          .replace(/\\D/g, "");
                        dispatch({
                          type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                          payload: { cardNumber: value },
                        });
                      }}
                      placeholder="1234 5678 9012 3456"
                      maxLength="16"
                      className={
                        state.errors.cardNumber ? "input-error" : "input"
                      }
                    />
                    {state.errors.cardNumber && (
                      <p className="error-text">{state.errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="input-wrapper">
                    <label>
                      Tên trên thẻ <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={state.payment.cardName}
                      onChange={(e) =>
                        dispatch({
                          type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                          payload: { cardName: e.target.value.toUpperCase() },
                        })
                      }
                      placeholder="NGUYEN VAN A"
                      className={
                        state.errors.cardName ? "input-error" : "input"
                      }
                    />
                    {state.errors.cardName && (
                      <p className="error-text">{state.errors.cardName}</p>
                    )}
                  </div>

                  <div className="input-row">
                    <div className="input-wrapper">
                      <label>
                        Ngày hết hạn <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={state.payment.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\\D/g, "");
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + "/" + value.slice(2, 4);
                          }
                          dispatch({
                            type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                            payload: { expiryDate: value },
                          });
                        }}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={
                          state.errors.expiryDate ? "input-error" : "input"
                        }
                      />
                      {state.errors.expiryDate && (
                        <p className="error-text">{state.errors.expiryDate}</p>
                      )}
                    </div>

                    <div className="input-wrapper">
                      <label>
                        CVV <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        value={state.payment.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\\D/g, "");
                          dispatch({
                            type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                            payload: { cvv: value },
                          });
                        }}
                        placeholder="123"
                        maxLength="4"
                        className={state.errors.cvv ? "input-error" : "input"}
                      />
                      {state.errors.cvv && (
                        <p className="error-text">{state.errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {state.payment.method === "momo" && (
                <div className="payment-info momo-info">
                  <p>
                    Bạn sẽ được chuyển đến ứng dụng MoMo để hoàn tất thanh toán.
                  </p>
                </div>
              )}

              {state.payment.method === "cod" && (
                <div className="payment-info cod-info">
                  <p>Bạn sẽ thanh toán bằng tiền mặt khi nhận hàng.</p>
                  <p className="note">
                    Lưu ý: Vui lòng kiểm tra kỹ sản phẩm trước khi thanh toán.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* REVIEW */}
          {state.currentStep === STEPS.REVIEW && (
            <div className="step-card">
              <h2>Xác nhận đơn hàng</h2>

              <div className="review-section">
                <h3>Thông tin giao hàng</h3>
                <p>
                  <strong>Người nhận:</strong> {state.shipping.fullName}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {state.shipping.address}
                </p>
                <p>
                  <strong>Thành phố:</strong> {state.shipping.city},{" "}
                  {state.shipping.zipCode}
                </p>
                <p>
                  <strong>Điện thoại:</strong> {state.shipping.phone}
                </p>
                <p>
                  <strong>Phương thức vận chuyển:</strong>{" "}
                  {state.shipping.method === "standard"
                    ? "Giao hàng tiêu chuẩn (3-5 ngày)"
                    : "Giao hàng nhanh (1-2 ngày)"}
                </p>
              </div>

              <div className="review-section">
                <h3>Phương thức thanh toán</h3>
                <p>
                  {state.payment.method === "card" && "Thẻ tín dụng/ghi nợ"}
                  {state.payment.method === "momo" && "Ví MoMo"}
                  {state.payment.method === "cod" &&
                    "Thanh toán khi nhận hàng (COD)"}
                </p>
                {state.payment.method === "card" && (
                  <p>
                    <strong>Số thẻ:</strong> **** **** ****{" "}
                    {state.payment.cardNumber.slice(-4)}
                  </p>
                )}
              </div>

              <div className="review-section">
                <h3>Sản phẩm</h3>
                {state.cart.items.map((item) => (
                  <div key={item.id} className="review-item">
                    <div>
                      <strong>{item.name}</strong>
                      <div className="item-desc">
                        {formatPrice(item.price)} × {item.quantity}
                      </div>
                    </div>
                    <div className="item-total">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="agreement-box">
                <p>
                  ✓ Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng và
                  Chính sách bảo mật của chúng tôi.
                </p>
              </div>
            </div>
          )}

          {/* CONFIRMATION */}
          {state.currentStep === STEPS.CONFIRMATION && (
            <div className="confirmation-card">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Đặt hàng thành công!</h2>
              <p className="order-number">
                Mã đơn hàng: <strong>{state.orderNumber}</strong>
              </p>
              <p className="thank-you">
                Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ gửi email xác nhận đến bạn
                sớm nhất.
              </p>
              <p className="delivery-info">
                Đơn hàng của bạn sẽ được giao trong{" "}
                {state.shipping.method === "standard" ? "3-5" : "1-2"} ngày làm
                việc.
              </p>

              <div className="order-details">
                <h3>Chi tiết đơn hàng</h3>
                <p>
                  <strong>Tổng tiền:</strong> {formatPrice(state.cart.total)}
                </p>
                <p>
                  <strong>Địa chỉ giao hàng:</strong> {state.shipping.address},{" "}
                  {state.shipping.city}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {state.shipping.phone}
                </p>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="continue-shopping-btn"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          )}

          {/* Navigation */}
          {state.currentStep < STEPS.CONFIRMATION && (
            <div className="navigation-buttons">
              {state.currentStep > STEPS.CART && (
                <button
                  onClick={() => dispatch({ type: CHECKOUT_ACTIONS.PREV_STEP })}
                  className="back-btn"
                >
                  ← Quay lại
                </button>
              )}
              <button
                onClick={
                  state.currentStep === STEPS.REVIEW
                    ? handlePlaceOrder
                    : handleNext
                }
                disabled={state.isProcessing}
                className={\`next-btn \${state.isProcessing ? "disabled" : ""}\`}
              >
                {state.isProcessing
                  ? "Đang xử lý..."
                  : state.currentStep === STEPS.REVIEW
                  ? "✓ Đặt hàng"
                  : "Tiếp tục →"}
              </button>
            </div>
          )}
        </div>

        {/* Order Summary */}
        {state.currentStep < STEPS.CONFIRMATION && (
          <div className="order-summary">
            <h3>Tóm tắt đơn hàng</h3>
            <div className="summary-header">
              <p>{state.cart.items.length} sản phẩm</p>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span>Tạm tính:</span>
                <span>{formatPrice(state.cart.subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Phí vận chuyển:</span>
                <span>{formatPrice(state.cart.shipping)}</span>
              </div>
              <div className="summary-row">
                <span>Thuế VAT (10%):</span>
                <span>{formatPrice(state.cart.tax)}</span>
              </div>
              {state.cart.discount > 0 && (
                <div className="summary-row discount">
                  <span>Giảm giá ({state.promoCode.code}):</span>
                  <span>-{formatPrice(state.cart.discount)}</span>
                </div>
              )}
            </div>

            <div className="summary-total">
              <span>Tổng cộng:</span>
              <span className="total-price">
                {formatPrice(state.cart.total)}
              </span>
            </div>

            <div className="security-note">
              Giao dịch được bảo mật và mã hóa
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutFlow;

`})]})}function fe(){return e.jsxs(T,{children:[e.jsx(T.Header,{order:"#",title:"Home Work"}),e.jsx(T.Description,{children:`
1. Task Manager App
Quản lý tasks với categories, priorities, và deadlines:

// Features:
// - Multiple task lists (Personal, Work, Shopping)
// - Priority levels (Low, Medium, High, Urgent)
// - Due dates với reminders
// - Subtasks
// - Tags
// - Search và filters
// - Sort options
// - Archive completed tasks
// - Statistics dashboard

2. Expense Tracker với Categories
Tracking chi tiêu chi tiết:

// Features:
// - Multiple categories và subcategories
// - Recurring expenses
// - Budget limits per category
// - Monthly/yearly views
// - Charts và statistics
// - Export reports
// - Multi-currency support
// - Receipt attachments (optional)

3. Blog Post Editor
Rich text editor với preview:

// Features:
// - Draft/Published status
// - Auto-save drafts
// - Version history
// - Tags và categories
// - Featured image
// - SEO metadata
// - Preview mode
// - Publish scheduling
// - Comment management

4. Music Player
Audio player với playlist:

// Features:
// - Play/Pause/Stop/Next/Previous
// - Playlist management
// - Shuffle và repeat modes
// - Volume control
// - Progress bar với seeking
// - Now playing info
// - Favorites
// - Search songs
// - Create custom playlists

5. Game: Tic Tac Toe với AI (Challenge)
// Features:
// - 2 player mode
// - vs Computer (AI)
// - Move history với time travel
// - Highlight winning line
// - Game statistics
// - Difficulty levels (Easy, Medium, Hard)
// - Undo move
// - Board size options (3x3, 4x4, 5x5)


`}),e.jsx(T.Code,{children:`

// ==========================================
// GIẢI BÀI TẬP VỀ NHÀ - NGÀY 7: useReducer
// ==========================================

// 1️⃣ TASK MANAGER APP
// Cốt lõi: Complex state với nested updates, multiple filters

const TASK_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_PRIORITY: 'SET_PRIORITY',
  ADD_SUBTASK: 'ADD_SUBTASK',
  SET_FILTER: 'SET_FILTER'
};

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: Date.now(),
          text: action.payload.text,
          category: action.payload.category,
          priority: action.payload.priority || 'medium',
          completed: false,
          subtasks: [],
          tags: action.payload.tags || [],
          dueDate: action.payload.dueDate
        }]
      };
    
    case TASK_ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    
    case TASK_ACTIONS.SET_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        )
      };
    
    case TASK_ACTIONS.ADD_SUBTASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId
            ? {
                ...task,
                subtasks: [...task.subtasks, {
                  id: Date.now(),
                  text: action.payload.text,
                  completed: false
                }]
              }
            : task
        )
      };
    
    case TASK_ACTIONS.SET_FILTER:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    
    default:
      return state;
  }
}

function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filters: { category: 'all', priority: 'all', status: 'all' }
  });

  // DERIVED STATE - Filtered tasks
  const filteredTasks = state.tasks.filter(task => {
    if (state.filters.category !== 'all' && task.category !== state.filters.category) return false;
    if (state.filters.priority !== 'all' && task.priority !== state.filters.priority) return false;
    if (state.filters.status === 'completed' && !task.completed) return false;
    if (state.filters.status === 'active' && task.completed) return false;
    return true;
  });

  // DERIVED STATE - Statistics
  const stats = {
    total: state.tasks.length,
    completed: state.tasks.filter(t => t.completed).length,
    byPriority: state.tasks.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {}),
    overdue: state.tasks.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < new Date()).length
  };

  return (
    <div>
      <h1>Task Manager - {stats.completed}/{stats.total} completed</h1>
      {/* Filters, task list, add form */}
    </div>
  );
}

// ==========================================
// 2️⃣ EXPENSE TRACKER
// Cốt lõi: Computed totals, category budgets, complex calculations

const EXPENSE_ACTIONS = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  UPDATE_EXPENSE: 'UPDATE_EXPENSE',
  SET_BUDGET: 'SET_BUDGET'
};

function expenseReducer(state, action) {
  switch (action.type) {
    case EXPENSE_ACTIONS.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, {
          id: Date.now(),
          amount: action.payload.amount,
          category: action.payload.category,
          description: action.payload.description,
          date: action.payload.date || new Date().toISOString(),
          recurring: action.payload.recurring || false
        }]
      };
    
    case EXPENSE_ACTIONS.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(e => e.id !== action.payload)
      };
    
    case EXPENSE_ACTIONS.SET_BUDGET:
      return {
        ...state,
        budgets: {
          ...state.budgets,
          [action.payload.category]: action.payload.amount
        }
      };
    
    default:
      return state;
  }
}

function ExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, {
    expenses: [],
    budgets: { food: 5000000, transport: 2000000, entertainment: 3000000 }
  });

  // DERIVED STATE - Total by category (KHÔNG LƯU trong state!)
  const totalByCategory = state.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // DERIVED STATE - Budget status
  const budgetStatus = Object.keys(state.budgets).map(category => {
    const spent = totalByCategory[category] || 0;
    const budget = state.budgets[category];
    return {
      category,
      budget,
      spent,
      remaining: budget - spent,
      percentage: (spent / budget) * 100,
      isOverBudget: spent > budget
    };
  });

  // DERIVED STATE - Monthly totals
  const monthlyTotal = state.expenses
    .filter(e => new Date(e.date).getMonth() === new Date().getMonth())
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h1>Expense Tracker - {monthlyTotal.toLocaleString()}đ this month</h1>
      {budgetStatus.map(item => (
        <div key={item.category}>
          <h3>{item.category}</h3>
          <progress value={item.percentage} max="100" />
          <p>{item.spent.toLocaleString()} / {item.budget.toLocaleString()}đ</p>
          {item.isOverBudget && <span style={{color: 'red'}}>⚠️ Over budget!</span>}
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 3️⃣ BLOG POST EDITOR
// Cốt lõi: Multi-step state machine, auto-save, version history

const POST_ACTIONS = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  SAVE_DRAFT: 'SAVE_DRAFT',
  PUBLISH: 'PUBLISH',
  UNPUBLISH: 'UNPUBLISH',
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
  SET_STATUS: 'SET_STATUS'
};

function postReducer(state, action) {
  switch (action.type) {
    case POST_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        post: {
          ...state.post,
          [action.payload.field]: action.payload.value
        },
        isDirty: true, // Có thay đổi chưa save
        lastModified: Date.now()
      };
    
    case POST_ACTIONS.SAVE_DRAFT:
      return {
        ...state,
        savedPost: { ...state.post },
        isDirty: false,
        lastSaved: Date.now(),
        versions: [...state.versions, { 
          ...state.post, 
          savedAt: Date.now() 
        }]
      };
    
    case POST_ACTIONS.PUBLISH:
      return {
        ...state,
        post: { ...state.post, status: 'published', publishedAt: Date.now() },
        isDirty: false
      };
    
    case POST_ACTIONS.ADD_TAG:
      return {
        ...state,
        post: {
          ...state.post,
          tags: [...state.post.tags, action.payload]
        }
      };
    
    case POST_ACTIONS.REMOVE_TAG:
      return {
        ...state,
        post: {
          ...state.post,
          tags: state.post.tags.filter(t => t !== action.payload)
        }
      };
    
    default:
      return state;
  }
}

function BlogEditor() {
  const [state, dispatch] = useReducer(postReducer, {
    post: {
      title: '',
      content: '',
      excerpt: '',
      featuredImage: null,
      tags: [],
      category: '',
      status: 'draft', // draft | published
      publishedAt: null,
      seo: { metaTitle: '', metaDescription: '' }
    },
    savedPost: null,
    isDirty: false,
    lastSaved: null,
    lastModified: null,
    versions: []
  });

  // Auto-save every 30s if dirty
  useEffect(() => {
    if (state.isDirty) {
      const timer = setTimeout(() => {
        dispatch({ type: POST_ACTIONS.SAVE_DRAFT });
        console.log('Auto-saved!');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [state.isDirty, state.lastModified]);

  // DERIVED STATE - Word count
  const wordCount = state.post.content.split(/\\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200); // 200 words/min

  return (
    <div>
      <h1>Blog Editor</h1>
      <span>{state.post.status === 'published' ? '✅ Published' : '📝 Draft'}</span>
      <span>{state.isDirty ? '• Unsaved changes' : '✓ Saved'}</span>
      
      <input 
        value={state.post.title}
        onChange={(e) => dispatch({
          type: POST_ACTIONS.UPDATE_FIELD,
          payload: { field: 'title', value: e.target.value }
        })}
        placeholder="Post title..."
      />
      
      <textarea 
        value={state.post.content}
        onChange={(e) => dispatch({
          type: POST_ACTIONS.UPDATE_FIELD,
          payload: { field: 'content', value: e.target.value }
        })}
        placeholder="Write your post..."
      />
      
      <div>
        <p>Words: {wordCount} | Reading time: ~{readingTime} min</p>
        <p>Versions: {state.versions.length}</p>
      </div>

      <button onClick={() => dispatch({ type: POST_ACTIONS.SAVE_DRAFT })}>
        Save Draft
      </button>
      <button onClick={() => dispatch({ type: POST_ACTIONS.PUBLISH })}>
        Publish
      </button>
    </div>
  );
}

// ==========================================
// 4️⃣ MUSIC PLAYER
// Cốt lõi: State machine (idle/playing/paused), playlist management

const PLAYER_ACTIONS = {
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
  SET_VOLUME: 'SET_VOLUME',
  SEEK: 'SEEK',
  TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
  TOGGLE_REPEAT: 'TOGGLE_REPEAT',
  ADD_TO_PLAYLIST: 'ADD_TO_PLAYLIST',
  REMOVE_FROM_PLAYLIST: 'REMOVE_FROM_PLAYLIST',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
};

function playerReducer(state, action) {
  switch (action.type) {
    case PLAYER_ACTIONS.PLAY:
      return {
        ...state,
        isPlaying: true,
        currentTrackId: action.payload || state.currentTrackId
      };
    
    case PLAYER_ACTIONS.PAUSE:
      return { ...state, isPlaying: false };
    
    case PLAYER_ACTIONS.NEXT:
      const currentIndex = state.playlist.indexOf(state.currentTrackId);
      const nextIndex = state.shuffle 
        ? Math.floor(Math.random() * state.playlist.length)
        : (currentIndex + 1) % state.playlist.length;
      return {
        ...state,
        currentTrackId: state.playlist[nextIndex],
        isPlaying: true
      };
    
    case PLAYER_ACTIONS.PREVIOUS:
      const prevIndex = state.playlist.indexOf(state.currentTrackId);
      const newIndex = prevIndex === 0 ? state.playlist.length - 1 : prevIndex - 1;
      return {
        ...state,
        currentTrackId: state.playlist[newIndex],
        isPlaying: true
      };
    
    case PLAYER_ACTIONS.SET_VOLUME:
      return { ...state, volume: action.payload };
    
    case PLAYER_ACTIONS.TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle };
    
    case PLAYER_ACTIONS.TOGGLE_REPEAT:
      return { ...state, repeat: !state.repeat };
    
    case PLAYER_ACTIONS.TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
    
    default:
      return state;
  }
}

function MusicPlayer() {
  const [state, dispatch] = useReducer(playerReducer, {
    tracks: {
      1: { id: 1, title: 'Song 1', artist: 'Artist A', duration: 180 },
      2: { id: 2, title: 'Song 2', artist: 'Artist B', duration: 240 },
      3: { id: 3, title: 'Song 3', artist: 'Artist C', duration: 200 }
    },
    playlist: [1, 2, 3],
    currentTrackId: 1,
    isPlaying: false,
    volume: 50,
    shuffle: false,
    repeat: false,
    favorites: []
  });

  const currentTrack = state.tracks[state.currentTrackId];
  const isFavorite = state.favorites.includes(state.currentTrackId);

  return (
    <div className="music-player">
      <h1>🎵 Music Player</h1>
      
      {/* Now Playing */}
      <div className="now-playing">
        <h2>{currentTrack.title}</h2>
        <p>{currentTrack.artist}</p>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_FAVORITE, payload: currentTrack.id })}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.PREVIOUS })}>⏮️</button>
        <button onClick={() => dispatch({ 
          type: state.isPlaying ? PLAYER_ACTIONS.PAUSE : PLAYER_ACTIONS.PLAY 
        })}>
          {state.isPlaying ? '⏸️' : '▶️'}
        </button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.NEXT })}>⏭️</button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_SHUFFLE })}>
          🔀 {state.shuffle ? 'ON' : 'OFF'}
        </button>
        <button onClick={() => dispatch({ type: PLAYER_ACTIONS.TOGGLE_REPEAT })}>
          🔁 {state.repeat ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Volume */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={state.volume}
        onChange={(e) => dispatch({ 
          type: PLAYER_ACTIONS.SET_VOLUME, 
          payload: parseInt(e.target.value) 
        })}
      />
      <span>🔊 {state.volume}%</span>

      {/* Playlist */}
      <div className="playlist">
        <h3>Playlist ({state.playlist.length} songs)</h3>
        {state.playlist.map(trackId => {
          const track = state.tracks[trackId];
          return (
            <div 
              key={trackId} 
              className={trackId === state.currentTrackId ? 'active' : ''}
              onClick={() => dispatch({ type: PLAYER_ACTIONS.PLAY, payload: trackId })}
            >
              {track.title} - {track.artist}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// 5️⃣ TIC TAC TOE WITH AI (CHALLENGE)
// Cốt lõi: Game state machine, move history, minimax algorithm

const GAME_ACTIONS = {
  MAKE_MOVE: 'MAKE_MOVE',
  JUMP_TO_MOVE: 'JUMP_TO_MOVE',
  RESET_GAME: 'RESET_GAME',
  SET_MODE: 'SET_MODE' // vs Player | vs Computer
};

function gameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.MAKE_MOVE:
      const { index, player } = action.payload;
      const newBoard = [...state.currentBoard];
      
      if (newBoard[index] || state.winner) return state;
      
      newBoard[index] = player;
      const winner = calculateWinner(newBoard);
      
      return {
        ...state,
        history: [...state.history, { board: newBoard, move: index }],
        currentBoard: newBoard,
        currentPlayer: player === 'X' ? 'O' : 'X',
        winner,
        moveCount: state.moveCount + 1
      };
    
    case GAME_ACTIONS.JUMP_TO_MOVE:
      const move = state.history[action.payload];
      return {
        ...state,
        currentBoard: move.board,
        currentPlayer: action.payload % 2 === 0 ? 'X' : 'O',
        winner: calculateWinner(move.board),
        moveCount: action.payload
      };
    
    case GAME_ACTIONS.RESET_GAME:
      return {
        ...state,
        history: [{ board: Array(9).fill(null), move: null }],
        currentBoard: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        moveCount: 0
      };
    
    default:
      return state;
  }
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  
  return board.every(cell => cell) ? { winner: 'Draw' } : null;
}

function TicTacToe() {
  const [state, dispatch] = useReducer(gameReducer, {
    history: [{ board: Array(9).fill(null), move: null }],
    currentBoard: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    moveCount: 0,
    mode: 'pvp' // pvp | vsAI
  });

  const handleClick = (index) => {
    dispatch({ 
      type: GAME_ACTIONS.MAKE_MOVE, 
      payload: { index, player: state.currentPlayer } 
    });
  };

  // AI move (simple random)
  useEffect(() => {
    if (state.mode === 'vsAI' && state.currentPlayer === 'O' && !state.winner) {
      setTimeout(() => {
        const availableMoves = state.currentBoard
          .map((cell, i) => cell === null ? i : null)
          .filter(i => i !== null);
        
        if (availableMoves.length > 0) {
          const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
          dispatch({ 
            type: GAME_ACTIONS.MAKE_MOVE, 
            payload: { index: randomMove, player: 'O' } 
          });
        }
      }, 500);
    }
  }, [state.currentPlayer, state.mode, state.winner]);

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      
      <div className="status">
        {state.winner 
          ? state.winner.winner === 'Draw' 
            ? 'Draw!' 
            : \`Winner: \${state.winner.winner}\` 
          : \`Next player: \${state.currentPlayer}\`}
      </div>

      {/* Board */}
      <div className="board">
        {state.currentBoard.map((cell, index) => (
          <button 
            key={index}
            onClick={() => handleClick(index)}
            disabled={cell || state.winner}
            className={state.winner?.line?.includes(index) ? 'winning-cell' : ''}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* History */}
      <div className="history">
        <h3>Move History</h3>
        <button onClick={() => dispatch({ type: GAME_ACTIONS.RESET_GAME })}>
          New Game
        </button>
        {state.history.map((_, index) => (
          <button 
            key={index}
            onClick={() => dispatch({ type: GAME_ACTIONS.JUMP_TO_MOVE, payload: index })}
          >
            {index === 0 ? 'Game start' : \`Move #\${index}\`}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="stats">
        <p>Total moves: {state.moveCount}</p>
      </div>
    </div>
  );
}

// ==========================================
// 📝 KEY PATTERNS SUMMARY
// ==========================================

/*
1. REDUCER PATTERN:
   - Pure function (state, action) => newState
   - Immutable updates với spread operator
   - Switch case cho action types
   - Default case return state

2. ACTION TYPES:
   - Constants để tránh typo
   - Descriptive names (VERB_NOUN)
   - Payload cho data

3. COMPLEX STATE:
   - Nested objects/arrays
   - Multiple related sub-values
   - State machine patterns (idle/playing/paused)

4. DERIVED STATE:
   - Calculate từ state, KHÔNG lưu
   - Use useMemo nếu expensive
   - Examples: totals, filters, statistics

5. STATE TRANSITIONS:
   - Next state depends on previous
   - Multiple fields update together
   - History/undo functionality

6. IMMUTABLE UPDATES:
   - Arrays: map, filter, concat, slice
   - Objects: spread operator
   - Nested: spread multiple levels

KEY TAKEAWAY:
- useReducer = Centralized state logic
- Reducer = Pure + Predictable
- Actions = What happened
- Derived = Don't duplicate state
- Immutability = Always new references

`})]})}const Y={1:ue,2:Ne,3:Se,4:Ie,5:_e},Ue=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(re,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 7"}),e.jsx("p",{className:"day-subtitle",children:"useReducer - Complex State Logic"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu useReducer và khi nào dùng"}),e.jsx("li",{children:"Reducer pattern và Redux-like state management"}),e.jsx("li",{children:"Action types và action creators"}),e.jsx("li",{children:"So sánh useReducer vs useState"}),e.jsx("li",{children:"Complex state logic patterns"}),e.jsx("li",{children:"Best practices và optimization"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(Y).map(t=>{const a=Y[t];return a?e.jsx(a,{},t):null})}),e.jsx("div",{className:"exercises-list mt-1",children:e.jsx(fe,{})})]});export{Ue as default};
