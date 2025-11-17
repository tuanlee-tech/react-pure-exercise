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

    if (phone && !/^0\d{9,10}$/.test(phone)) {
      errors.phone = "Số điện thoại không hợp lệ (VD: 0901234567)";
    }

    if (zipCode && !/^\d{5,6}$/.test(zipCode)) {
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
      } else if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
        errors.cardNumber = "Số thẻ phải có 16 chữ số";
      }

      if (!cardName.trim()) {
        errors.cardName = "Vui lòng nhập tên trên thẻ";
      }

      if (!expiryDate.trim()) {
        errors.expiryDate = "Vui lòng nhập ngày hết hạn";
      } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
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
      } else if (!/^\d{3,4}$/.test(cvv)) {
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
              className={`step-circle ${
                index <= state.currentStep ? "active" : ""
              } ${index < state.currentStep ? "completed" : ""}`}
            >
              {index < state.currentStep ? "✓" : index + 1}
            </div>
            <div
              className={`step-label ${
                index === state.currentStep ? "active" : ""
              }`}
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
                    className={`shipping-option ${
                      state.shipping.method === "standard" ? "selected" : ""
                    }`}
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
                    className={`shipping-option ${
                      state.shipping.method === "express" ? "selected" : ""
                    }`}
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
                  className={`payment-option ${
                    state.payment.method === "card" ? "selected" : ""
                  }`}
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
                  className={`payment-option ${
                    state.payment.method === "momo" ? "selected" : ""
                  }`}
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
                  className={`payment-option ${
                    state.payment.method === "cod" ? "selected" : ""
                  }`}
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
                          .replace(/\s/g, "")
                          .replace(/\D/g, "");
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
                          let value = e.target.value.replace(/\D/g, "");
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
                          const value = e.target.value.replace(/\D/g, "");
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
                className={`next-btn ${state.isProcessing ? "disabled" : ""}`}
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
