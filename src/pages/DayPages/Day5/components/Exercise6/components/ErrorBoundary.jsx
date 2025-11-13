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
