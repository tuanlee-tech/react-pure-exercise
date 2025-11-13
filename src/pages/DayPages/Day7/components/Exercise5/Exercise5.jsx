import ExerciseCard from "../../../../../components/ExerciseCard";
import CheckoutFlow from "./components/CheckoutFlow";
import "./styles.css";
export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={5} title="Multi-Step Checkout (Challenge)" />

      <ExerciseCard.Description>
        {`
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

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <CheckoutFlow />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
