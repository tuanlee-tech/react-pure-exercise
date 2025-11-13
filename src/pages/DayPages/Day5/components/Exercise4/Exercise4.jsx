import ExerciseCard from "../../../../../components/ExerciseCard";
import { BuggyComponent, ErrorBoundary } from "./components/ErrorBoundary";
import "./styles.css";
export default function Exercise4() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={4} title="Error Boundary Usage" />

      <ExerciseCard.Description>
        {`
// TODO: Create custom ErrorBoundary
class ErrorBoundary extends Component {
  // TODO:
  // 1. Catch errors
  // 2. Log to service
  // 3. Show fallback UI
  // 4. Retry mechanism
  // 5. Reset on navigation
}

// TODO: Component that throws error
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      throw new Error('Intentional error for testing');
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ shouldThrow: true })}>
          Trigger Error
        </button>
      </div>
    );
  }
}

// Usage
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card } from "@ui";
import { Component } from "react";

// Fake error logging service
const logErrorToService = (error, errorInfo) => {
  console.error("ErrorBoundary caught an error:", error, errorInfo);
  // Gửi đến Sentry, LogRocket, v.v.
  // fetch('/api/errors', { method: 'POST', body: JSON.stringify({ error, errorInfo }) });
};

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    // Cập nhật state để render fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log lỗi ra service
    this.setState({ errorInfo });
    logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    // Reset state → thử render lại children
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  // Reset khi props thay đổi (ví dụ: route thay đổi)
  componentDidUpdate(prevProps) {
    if (this.props.resetKey && this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: null, errorInfo: null });
    }
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) return fallback;

      return (
        <div className="error-boundary">
          <Card className="error-card">
            <div className="error-icon">Warning</div>
            <h2 className="error-title">Something went wrong</h2>
            <p className="error-message">
              {error?.message || "An unexpected error occurred"}
            </p>

            <details className="error-details">
              <summary>View error details</summary>
              <pre>{errorInfo?.componentStack}</pre>
            </details>

            <div className="error-actions">
              <Button variant="primary" size="md" onClick={this.handleRetry}>
                Try Again
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    return children;
  }
}

//======= BuggyComponent ==============
class BuggyComponent extends Component {
  state = { shouldThrow: false };

  componentDidUpdate() {
    if (this.state.shouldThrow) {
      // Ném lỗi để ErrorBoundary bắt
      throw new Error("Intentional error for testing");
    }
  }

  render() {
    return (
      <Card className="buggy-card">
        <h3>Buggy Component (For Testing)</h3>
        <p>Click button to trigger an error</p>
        <Button
          variant="danger"
          onClick={() => this.setState({ shouldThrow: true })}
        >
          Trigger Error
        </Button>
      </Card>
    );
  }
}
export { BuggyComponent, ErrorBoundary };

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
