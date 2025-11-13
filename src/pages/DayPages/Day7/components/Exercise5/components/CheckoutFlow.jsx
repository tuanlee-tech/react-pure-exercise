// CheckoutFlow.jsx
import { useReducer } from "react";
import { Button, Input, Select, Card } from "@ui";

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
};

const STEPS = {
  CART: 0,
  SHIPPING: 1,
  PAYMENT: 2,
  REVIEW: 3,
  CONFIRMATION: 4,
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case CHECKOUT_ACTIONS.NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    case CHECKOUT_ACTIONS.PREV_STEP:
      return { ...state, currentStep: state.currentStep - 1 };
    case CHECKOUT_ACTIONS.SET_STEP:
      return { ...state, currentStep: action.step };
    case CHECKOUT_ACTIONS.UPDATE_CART:
      return { ...state, cart: { ...state.cart, ...action.payload } };
    case CHECKOUT_ACTIONS.UPDATE_SHIPPING:
      return { ...state, shipping: { ...state.shipping, ...action.payload } };
    case CHECKOUT_ACTIONS.UPDATE_PAYMENT:
      return { ...state, payment: { ...state.payment, ...action.payload } };
    case CHECKOUT_ACTIONS.APPLY_PROMO:
      return { ...state, promoCode: action.payload };
    case CHECKOUT_ACTIONS.SET_ERRORS:
      return { ...state, errors: action.payload };
    case CHECKOUT_ACTIONS.PLACE_ORDER:
      return { ...state, isProcessing: true };
    default:
      return state;
  }
}

export default function CheckoutFlow() {
  const [state, dispatch] = useReducer(checkoutReducer, {
    currentStep: STEPS.CART,
    cart: {
      items: [
        { id: 1, name: "Sản phẩm 1", price: 100000, quantity: 2 },
        { id: 2, name: "Sản phẩm 2", price: 200000, quantity: 1 },
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

  const stepTitles = [
    "Giỏ hàng",
    "Thông tin giao hàng",
    "Thanh toán",
    "Xác nhận",
    "Hoàn tất",
  ];

  const handleNext = () => dispatch({ type: CHECKOUT_ACTIONS.NEXT_STEP });
  const handlePrev = () => dispatch({ type: CHECKOUT_ACTIONS.PREV_STEP });

  return (
    <div className="checkout-flow">
      <h1>Thanh Toán</h1>

      {/* Progress Steps */}
      <div className="steps">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            className={`step ${index === state.currentStep ? "active" : ""} ${
              index < state.currentStep ? "completed" : ""
            }`}
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
            {state.cart.items.map((item) => (
              <Card key={item.id} className="card-hover">
                <Card.Header>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle>
                    {item.price.toLocaleString()} VND
                  </Card.Subtitle>
                </Card.Header>
                <Card.Content>Số lượng: {item.quantity}</Card.Content>
              </Card>
            ))}
          </div>
        )}

        {state.currentStep === STEPS.SHIPPING && (
          <div className="shipping-step">
            <Input
              label="Họ và tên"
              value={state.shipping.fullName}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                  payload: { fullName: e.target.value },
                })
              }
            />
            <Input
              label="Địa chỉ"
              value={state.shipping.address}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                  payload: { address: e.target.value },
                })
              }
            />
            <Input
              label="Thành phố"
              value={state.shipping.city}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                  payload: { city: e.target.value },
                })
              }
            />
            <Input
              label="Mã bưu điện"
              value={state.shipping.zipCode}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                  payload: { zipCode: e.target.value },
                })
              }
            />
            <Input
              label="Số điện thoại"
              value={state.shipping.phone}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_SHIPPING,
                  payload: { phone: e.target.value },
                })
              }
            />
          </div>
        )}

        {state.currentStep === STEPS.PAYMENT && (
          <div className="payment-step">
            <Select
              label="Phương thức thanh toán"
              value={state.payment.method}
              onChange={(e) =>
                dispatch({
                  type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                  payload: { method: e.target.value },
                })
              }
              options={[
                { value: "card", label: "Thẻ tín dụng" },
                { value: "momo", label: "MoMo" },
                { value: "cod", label: "Thanh toán khi nhận hàng" },
              ]}
            />
            {state.payment.method === "card" && (
              <>
                <Input
                  label="Số thẻ"
                  value={state.payment.cardNumber}
                  onChange={(e) =>
                    dispatch({
                      type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                      payload: { cardNumber: e.target.value },
                    })
                  }
                />
                <Input
                  label="Tên chủ thẻ"
                  value={state.payment.cardName}
                  onChange={(e) =>
                    dispatch({
                      type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                      payload: { cardName: e.target.value },
                    })
                  }
                />
                <Input
                  label="Ngày hết hạn"
                  value={state.payment.expiryDate}
                  onChange={(e) =>
                    dispatch({
                      type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                      payload: { expiryDate: e.target.value },
                    })
                  }
                />
                <Input
                  label="CVV"
                  value={state.payment.cvv}
                  onChange={(e) =>
                    dispatch({
                      type: CHECKOUT_ACTIONS.UPDATE_PAYMENT,
                      payload: { cvv: e.target.value },
                    })
                  }
                />
              </>
            )}
          </div>
        )}

        {state.currentStep === STEPS.REVIEW && (
          <div className="review-step">
            <Card>
              <Card.Header>
                <Card.Title>Đơn hàng</Card.Title>
              </Card.Header>
              <Card.Content>
                {state.cart.items.map((item) => (
                  <div key={item.id}>
                    {item.name} x {item.quantity} -{" "}
                    {(item.price * item.quantity).toLocaleString()} VND
                  </div>
                ))}
              </Card.Content>
            </Card>
          </div>
        )}

        {state.currentStep === STEPS.CONFIRMATION && (
          <div className="confirmation-step">
            <h2>Đặt hàng thành công!</h2>
            <p>Mã đơn hàng: #{state.orderNumber || "123456"}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation">
        {state.currentStep > STEPS.CART &&
          state.currentStep < STEPS.CONFIRMATION && (
            <Button variant="secondary" size="lg" onClick={handlePrev}>
              Quay lại
            </Button>
          )}
        {state.currentStep < STEPS.REVIEW && (
          <Button variant="primary" size="lg" onClick={handleNext}>
            Tiếp tục
          </Button>
        )}
        {state.currentStep === STEPS.REVIEW && (
          <Button variant="primary" size="lg" disabled={state.isProcessing}>
            {state.isProcessing ? "Đang xử lý..." : "Đặt hàng"}
          </Button>
        )}
      </div>

      {/* Order Summary Sidebar */}
      <div className="order-summary">
        <Card>
          <Card.Header>
            <Card.Title>Tổng đơn hàng</Card.Title>
          </Card.Header>
          <Card.Content>
            {state.cart.items.map((item) => (
              <div key={item.id}>
                {item.name} x {item.quantity} -{" "}
                {(item.price * item.quantity).toLocaleString()} VND
              </div>
            ))}
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
