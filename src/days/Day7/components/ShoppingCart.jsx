const products = [
  { id: 1, name: "Áo thun", price: 150000, image: "👕" },
  { id: 2, name: "Quần jean", price: 350000, image: "👖" },
  { id: 3, name: "Giày thể thao", price: 500000, image: "👟" },
  { id: 4, name: "Túi xách", price: 250000, image: "👜" },
];
// Mã giảm giá hợp lệ
const validCoupons = {
  GIAM10: 10, // 10%
  GIAM50K: 50000, // 50k
  FREESHIP: 0, // Miễn phí ship
};
const formattedPrice = (num) => new Intl.NumberFormat("vi-VN").format(num);

// Action creators
const cartActions = {
  add: (product) => ({
    type: CART_ACTIONS.ADD_ITEM,
    payload: product,
  }),

  updateQuantity: (id, quantity) => ({
    type: CART_ACTIONS.UPDATE_QUANTITY,
    payload: { id, quantity },
  }),

  remove: (id) => ({
    type: CART_ACTIONS.REMOVE_ITEM,
    payload: id,
  }),

  applyCoupon: (coupon) => ({
    type: CART_ACTIONS.APPLY_COUPON,
    payload: coupon,
  }),
  removeCoupon: () => ({
    type: CART_ACTIONS.REMOVE_COUPON,
  }),
};

import { useReducer, useState } from "react";

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    coupon: null,
    shipping: 0,
  });
  console.log(state);
  const [couponInput, setCouponInput] = useState("");
  const [inValidCoupon, setInvalidCoupon] = useState(false);
  // TODO: Tính toán
  const calculateDiscount = (subtotal) => {
    const { coupon } = state;
    if (coupon === "FREESHIP" || !coupon) return 0;

    const couponValue = validCoupons[coupon];

    const discount =
      coupon === "GIAM10" ? subtotal * (couponValue / 100) : couponValue;

    return Math.min(discount, subtotal);
  };
  const subtotal = state.items.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0
  );

  const discount = calculateDiscount(subtotal);
  const shippingCost = state.shipping;
  const isFreeShip = state.coupon === "FREESHIP";
  const total = subtotal + (isFreeShip ? 0 : shippingCost) - discount;

  const handleApplyCoupon = () => {
    // TODO: Validate và apply coupon
    const code = couponInput.trim().toUpperCase();
    if (!code) {
      // Không nhập gì → không báo lỗi
      setInvalidCoupon(false);
      dispatch(cartActions.removeCoupon());
      return;
    }
    if (code in validCoupons) {
      setInvalidCoupon(false);
      dispatch(cartActions.applyCoupon(code));
    } else {
      //other wise
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
      <h1>Giỏ Hàng</h1>

      {/* Product List */}
      <div className="products">
        <h2>Sản phẩm</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-icon">{product.image}</span>
              <h3>{product.name}</h3>
              <p>{formattedPrice(product.price)}đ</p>
              <button onClick={() => dispatch(cartActions.add(product))}>
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Items */}
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
                <button
                  onClick={() => {
                    dispatch(
                      item.quantity > 1
                        ? cartActions.updateQuantity(item.id, item.quantity - 1)
                        : cartActions.remove(item.id)
                    );
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      cartActions.updateQuantity(item.id, item.quantity + 1)
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="sub-total">
              <h3>Tạm tính</h3>
              <p>{formattedPrice(item.quantity * item.price)}đ</p>
            </div>
            <button
              onClick={() => dispatch(cartActions.remove(item.id))}
              className=""
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Coupon */}

      <div className="coupon-section">
        <div className="coupon-input">
          <input
            type="text"
            value={couponInput}
            onChange={handleCouponChange}
            placeholder="Nhập mã giảm giá"
          />
          <button onClick={handleApplyCoupon}>Áp dụng</button>
        </div>
        {state.coupon && (
          <div className="applied-coupon">
            Đã áp dụng: <strong>{state.coupon}</strong>
            <button
              onClick={() => {
                setCouponInput("");
                dispatch(cartActions.removeCoupon());
              }}
            >
              Xóa
            </button>
          </div>
        )}
        {inValidCoupon && (
          <span className="error">Mã khuyến mãi không tồn tại</span>
        )}
      </div>

      {/* Summary */}
      <div className="cart-summary">
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
        <button className="checkout-btn">Thanh toán</button>
      </div>
    </div>
  );
}

const CART_ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  APPLY_COUPON: "APPLY_COUPON",
  REMOVE_COUPON: "REMOVE_COUPON",
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
    case CART_ACTIONS.APPLY_COUPON: {
      return {
        ...state,
        coupon: action.payload,
      };
    }
    case CART_ACTIONS.REMOVE_COUPON:
      return {
        ...state,
        coupon: null,
      };
    default:
      return state;
  }
}
