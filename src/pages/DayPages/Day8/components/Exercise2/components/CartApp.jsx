import { useCallback, useMemo, useState } from "react";

/**
 * E-COMMERCE CART với NORMALIZED STATE
 * Demonstrates:
 * - State Normalization (byId pattern)
 * - Derived State với useMemo
 * - Complex state calculations
 * Design: CyberSlate/Neon Ocean
 */

/**
 * CartApp Component - Main Container
 * Quản lý normalized state structure
 */
function CartApp() {
  // ✅ NORMALIZED STATE STRUCTURE
  // Tách thành các entities độc lập, dễ update
  const [state, setState] = useState({
    // Catalog products - byId pattern
    products: {
      1: {
        id: 1,
        name: "Áo thun Premium",
        price: 150000,
        image: "👕",
        stock: 10,
        category: "clothing",
      },
      2: {
        id: 2,
        name: "Quần jean Slim",
        price: 350000,
        image: "👖",
        stock: 5,
        category: "clothing",
      },
      3: {
        id: 3,
        name: "Giày sneaker",
        price: 500000,
        image: "👟",
        stock: 3,
        category: "shoes",
      },
      4: {
        id: 4,
        name: "Túi xách nữ",
        price: 250000,
        image: "👜",
        stock: 8,
        category: "accessories",
      },
      5: {
        id: 5,
        name: "Mũ lưỡi trai",
        price: 80000,
        image: "🧢",
        stock: 15,
        category: "accessories",
      },
      6: {
        id: 6,
        name: "Đồng hồ nam",
        price: 450000,
        image: "⌚",
        stock: 6,
        category: "accessories",
      },
      7: {
        id: 7,
        name: "Áo khoác dạ",
        price: 600000,
        image: "🧥",
        stock: 4,
        category: "clothing",
      },
      8: {
        id: 8,
        name: "Giày boot",
        price: 550000,
        image: "🥾",
        stock: 7,
        category: "shoes",
      },
    },

    // Cart items - normalized: { productId: quantity }
    cart: {
      // Ví dụ: { 1: 2, 3: 1 } = 2 áo thun + 1 giày
    },

    // Coupon codes available
    coupons: {
      GIAM10: {
        code: "GIAM10",
        discount: 10,
        type: "percent",
        description: "Giảm 10%",
      },
      GIAM20: {
        code: "GIAM20",
        discount: 20,
        type: "percent",
        description: "Giảm 20%",
      },
      GIAM50K: {
        code: "GIAM50K",
        discount: 50000,
        type: "fixed",
        description: "Giảm 50.000đ",
      },
      GIAM100K: {
        code: "GIAM100K",
        discount: 100000,
        type: "fixed",
        description: "Giảm 100.000đ",
      },
      FREESHIP: {
        code: "FREESHIP",
        discount: 0,
        type: "freeship",
        description: "Miễn phí ship",
      },
    },

    // Applied coupon (null nếu chưa áp dụng)
    appliedCoupon: null,

    // Shipping method: 'standard' | 'express'
    shippingMethod: "standard",
  });

  // ============================================
  // CART MANAGEMENT FUNCTIONS
  // ============================================

  /**
   * Thêm sản phẩm vào giỏ hàng
   * Kiểm tra stock trước khi thêm
   */
  const addToCart = useCallback((productId) => {
    setState((prev) => {
      const product = prev.products[productId];
      const currentQty = prev.cart[productId] || 0;

      // Check stock availability
      if (currentQty >= product.stock) {
        alert(`❌ Không đủ hàng! Chỉ còn ${product.stock} sản phẩm.`);
        return prev;
      }

      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: currentQty + 1,
        },
      };
    });
  }, []);

  /**
   * Xóa sản phẩm khỏi giỏ hàng
   */
  const removeFromCart = useCallback((productId) => {
    setState((prev) => {
      const newCart = { ...prev.cart };
      delete newCart[productId];

      return {
        ...prev,
        cart: newCart,
      };
    });
  }, []);

  /**
   * Cập nhật số lượng sản phẩm trong giỏ
   * Validate: quantity >= 0 và <= stock
   */
  const updateQuantity = useCallback((productId, quantity) => {
    setState((prev) => {
      const product = prev.products[productId];

      // Validate quantity
      if (quantity < 0) return prev;
      if (quantity === 0) {
        // Remove item if quantity is 0
        const newCart = { ...prev.cart };
        delete newCart[productId];
        return { ...prev, cart: newCart };
      }
      if (quantity > product.stock) {
        alert(`❌ Không đủ hàng! Chỉ còn ${product.stock} sản phẩm.`);
        return prev;
      }

      return {
        ...prev,
        cart: {
          ...prev.cart,
          [productId]: quantity,
        },
      };
    });
  }, []);

  /**
   * Áp dụng mã giảm giá
   * Validate coupon code
   */
  const applyCoupon = useCallback((code) => {
    const couponCode = code.toUpperCase().trim();

    if (!couponCode) {
      alert("❌ Vui lòng nhập mã giảm giá");
      return;
    }

    setState((prev) => {
      const coupon = prev.coupons[couponCode];

      if (!coupon) {
        alert(`❌ Mã "${couponCode}" không hợp lệ!`);
        return prev;
      }

      return {
        ...prev,
        appliedCoupon: couponCode,
      };
    });
  }, []);

  /**
   * Xóa mã giảm giá đã áp dụng
   */
  const removeCoupon = useCallback(() => {
    setState((prev) => ({
      ...prev,
      appliedCoupon: null,
    }));
  }, []);

  /**
   * Thay đổi phương thức vận chuyển
   */
  const changeShippingMethod = useCallback((method) => {
    setState((prev) => ({
      ...prev,
      shippingMethod: method,
    }));
  }, []);

  /**
   * Clear toàn bộ giỏ hàng
   */
  const clearCart = useCallback(() => {
    if (window.confirm("🗑️ Xóa toàn bộ giỏ hàng?")) {
      setState((prev) => ({
        ...prev,
        cart: {},
        appliedCoupon: null,
      }));
    }
  }, []);

  // ============================================
  // DERIVED STATE - DENORMALIZE CART
  // ============================================

  /**
   * Chuyển cart từ normalized { productId: qty }
   * sang array với full product details
   */
  const cartItems = useMemo(() => {
    console.log("🔄 Denormalizing cart...");

    return Object.entries(state.cart).map(([productId, quantity]) => {
      const product = state.products[productId];
      return {
        ...product,
        quantity,
        itemTotal: product.price * quantity,
      };
    });
  }, [state.cart, state.products]);

  // ============================================
  // DERIVED STATE - CALCULATIONS
  // ============================================

  /**
   * Tính subtotal (tổng tiền hàng)
   */
  const subtotal = useMemo(() => {
    console.log("💰 Calculating subtotal...");
    return cartItems.reduce((sum, item) => sum + item.itemTotal, 0);
  }, [cartItems]);

  /**
   * Tính discount từ coupon
   */
  const discount = useMemo(() => {
    console.log("🎟️ Calculating discount...");

    if (!state.appliedCoupon) return 0;

    const coupon = state.coupons[state.appliedCoupon];

    if (coupon.type === "percent") {
      return Math.round(subtotal * (coupon.discount / 100));
    } else if (coupon.type === "fixed") {
      return Math.min(coupon.discount, subtotal); // Không giảm quá subtotal
    }

    return 0;
  }, [subtotal, state.appliedCoupon, state.coupons]);

  /**
   * Tính phí ship
   * - Standard: 30k
   * - Express: 50k
   * - Free nếu subtotal > 500k hoặc có mã FREESHIP
   */
  const shippingCost = useMemo(() => {
    console.log("🚚 Calculating shipping...");

    // Free ship nếu có mã FREESHIP
    if (state.appliedCoupon === "FREESHIP") {
      return 0;
    }

    // Free ship nếu subtotal > 500k
    if (subtotal >= 500000) {
      return 0;
    }

    // Phí ship theo phương thức
    return state.shippingMethod === "standard" ? 30000 : 50000;
  }, [subtotal, state.shippingMethod, state.appliedCoupon]);

  /**
   * Tính thuế VAT 10%
   */
  const tax = useMemo(() => {
    console.log("📊 Calculating tax...");
    return Math.round(subtotal * 0.1);
  }, [subtotal]);

  /**
   * Tính tổng tiền cuối cùng
   */
  const total = useMemo(() => {
    console.log("💵 Calculating total...");
    return subtotal + shippingCost + tax - discount;
  }, [subtotal, shippingCost, tax, discount]);

  /**
   * Đếm tổng số items trong giỏ
   */
  const itemCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  /**
   * Số tiền tiết kiệm được
   */
  const savedAmount = useMemo(() => {
    let saved = discount;

    // Cộng thêm tiền ship nếu free
    if (shippingCost === 0 && subtotal > 0) {
      const normalShipping =
        state.shippingMethod === "standard" ? 30000 : 50000;
      saved += normalShipping;
    }

    return saved;
  }, [discount, shippingCost, subtotal, state.shippingMethod]);

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="cart-app">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-gradient">🛒 CyberCart</span>
        </h1>
        <p className="app-subtitle">
          E-commerce Shopping Cart với Normalized State
        </p>
      </header>

      <div className="app-layout">
        {/* Left: Product Catalog */}
        <div className="catalog-section">
          <div className="section-header">
            <h2 className="section-title">📦 Sản phẩm</h2>
            <div className="product-count">
              {Object.keys(state.products).length} sản phẩm
            </div>
          </div>

          <ProductCatalog
            products={state.products}
            cart={state.cart}
            onAddToCart={addToCart}
          />
        </div>

        {/* Right: Cart */}
        <div className="cart-section">
          <ShoppingCart
            cartItems={cartItems}
            state={state}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
            onApplyCoupon={applyCoupon}
            onRemoveCoupon={removeCoupon}
            onChangeShipping={changeShippingMethod}
            onClearCart={clearCart}
            subtotal={subtotal}
            discount={discount}
            shippingCost={shippingCost}
            tax={tax}
            total={total}
            itemCount={itemCount}
            savedAmount={savedAmount}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ProductCatalog Component
 * Hiển thị danh sách sản phẩm có thể mua
 */
function ProductCatalog({ products, cart, onAddToCart }) {
  return (
    <div className="product-catalog">
      {Object.values(products).map((product) => {
        const inCart = cart[product.id] || 0;
        const canAdd = inCart < product.stock;

        return (
          <div key={product.id} className="catalog-card">
            <div className="catalog-image">{product.image}</div>

            <div className="catalog-info">
              <h3 className="catalog-name">{product.name}</h3>
              <div className="catalog-price">
                {product.price.toLocaleString("vi-VN")}đ
              </div>
              <div className="catalog-stock">
                📦 Còn {product.stock} sản phẩm
              </div>

              {inCart > 0 && (
                <div className="in-cart-badge">🛒 Đã có {inCart} trong giỏ</div>
              )}
            </div>

            <button
              className="btn-add"
              onClick={() => onAddToCart(product.id)}
              disabled={!canAdd}
            >
              {canAdd ? "➕ Thêm" : "❌ Hết"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

/**
 * ShoppingCart Component
 * Hiển thị giỏ hàng và tính toán
 */
function ShoppingCart({
  cartItems,
  state,
  onUpdateQuantity,
  onRemoveFromCart,
  onApplyCoupon,
  onRemoveCoupon,
  onChangeShipping,
  onClearCart,
  subtotal,
  discount,
  shippingCost,
  tax,
  total,
  itemCount,
  savedAmount,
}) {
  const [couponInput, setCouponInput] = useState("");

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    onApplyCoupon(couponInput);
    setCouponInput("");
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="section-header">
          <h2 className="section-title">🛒 Giỏ hàng</h2>
        </div>

        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Giỏ hàng trống</h3>
          <p>Thêm sản phẩm từ danh mục bên trái</p>
        </div>

        {/* Available Coupons */}
        <CouponList coupons={state.coupons} />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="section-header">
        <h2 className="section-title">🛒 Giỏ hàng ({itemCount})</h2>
        <button className="btn-clear" onClick={onClearCart}>
          🗑️ Xóa tất cả
        </button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>

            <div className="item-info">
              <h4 className="item-name">{item.name}</h4>
              <div className="item-price">
                {item.price.toLocaleString("vi-VN")}đ
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="quantity-controls">
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                className="qty-input"
                value={item.quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  onUpdateQuantity(item.id, val);
                }}
                min="0"
                max={item.stock}
              />
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                disabled={item.quantity >= item.stock}
              >
                +
              </button>
            </div>

            <div className="item-total">
              {item.itemTotal.toLocaleString("vi-VN")}đ
            </div>

            <button
              className="btn-remove"
              onClick={() => onRemoveFromCart(item.id)}
              title="Xóa"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="coupon-section">
        <h3 className="coupon-title">🎟️ Mã giảm giá</h3>

        {state.appliedCoupon ? (
          <div className="applied-coupon">
            <div className="coupon-info">
              <span className="coupon-code">{state.appliedCoupon}</span>
              <span className="coupon-desc">
                {state.coupons[state.appliedCoupon].description}
              </span>
            </div>
            <button className="btn-remove-coupon" onClick={onRemoveCoupon}>
              ❌
            </button>
          </div>
        ) : (
          <form className="coupon-form" onSubmit={handleApplyCoupon}>
            <input
              type="text"
              className="coupon-input"
              placeholder="Nhập mã giảm giá..."
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
            />
            <button type="submit" className="btn-apply">
              Áp dụng
            </button>
          </form>
        )}
      </div>

      {/* Shipping Method */}
      <div className="shipping-section">
        <h3 className="shipping-title">🚚 Phương thức vận chuyển</h3>

        <div className="shipping-options">
          <label
            className={`shipping-option ${
              state.shippingMethod === "standard" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="shipping"
              value="standard"
              checked={state.shippingMethod === "standard"}
              onChange={(e) => onChangeShipping(e.target.value)}
            />
            <div className="option-content">
              <div className="option-name">🚚 Giao hàng tiêu chuẩn</div>
              <div className="option-desc">3-5 ngày</div>
            </div>
            <div className="option-price">30.000đ</div>
          </label>

          <label
            className={`shipping-option ${
              state.shippingMethod === "express" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="shipping"
              value="express"
              checked={state.shippingMethod === "express"}
              onChange={(e) => onChangeShipping(e.target.value)}
            />
            <div className="option-content">
              <div className="option-name">⚡ Giao hàng nhanh</div>
              <div className="option-desc">1-2 ngày</div>
            </div>
            <div className="option-price">50.000đ</div>
          </label>
        </div>

        {subtotal >= 500000 && (
          <div className="free-ship-notice">
            ✨ Miễn phí ship cho đơn ≥ 500.000đ
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3 className="summary-title">💰 Tổng đơn hàng</h3>

        <div className="summary-row">
          <span>Tạm tính</span>
          <span>{subtotal.toLocaleString("vi-VN")}đ</span>
        </div>

        <div className="summary-row">
          <span>Phí vận chuyển</span>
          <span className={shippingCost === 0 ? "free" : ""}>
            {shippingCost === 0
              ? "Miễn phí"
              : `${shippingCost.toLocaleString("vi-VN")}đ`}
          </span>
        </div>

        <div className="summary-row">
          <span>Thuế VAT (10%)</span>
          <span>{tax.toLocaleString("vi-VN")}đ</span>
        </div>

        {discount > 0 && (
          <div className="summary-row discount">
            <span>Giảm giá</span>
            <span>-{discount.toLocaleString("vi-VN")}đ</span>
          </div>
        )}

        <div className="summary-divider"></div>

        <div className="summary-row total">
          <span>Tổng cộng</span>
          <span className="total-amount">{total.toLocaleString("vi-VN")}đ</span>
        </div>

        {savedAmount > 0 && (
          <div className="saved-amount">
            🎉 Bạn tiết kiệm được {savedAmount.toLocaleString("vi-VN")}đ
          </div>
        )}

        <button className="btn-checkout">🛍️ Thanh toán</button>
      </div>

      {/* Available Coupons */}
      {!state.appliedCoupon && <CouponList coupons={state.coupons} />}
    </div>
  );
}

/**
 * CouponList Component
 * Hiển thị danh sách mã giảm giá có sẵn
 */
function CouponList({ coupons }) {
  return (
    <div className="coupon-list">
      <h3 className="coupon-list-title">💎 Mã giảm giá khả dụng</h3>
      <div className="coupon-grid">
        {Object.values(coupons).map((coupon) => (
          <div key={coupon.code} className="coupon-badge">
            <div className="coupon-code-badge">{coupon.code}</div>
            <div className="coupon-desc-badge">{coupon.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartApp;
