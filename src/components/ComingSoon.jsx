import { Button, Card } from "@ui";

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <Card className="coming-soon-card">
        <div className="coming-soon-content">
          <h1 className="coming-title">🚧 Coming Soon 🚧</h1>
          <p className="coming-subtitle">
            Bài học này đang được xây dựng. Hãy quay lại sau nhé! 💻
          </p>

          <div className="coming-illustration">⏳</div>

          <Button
            variant="primary"
            size="lg"
            className="coming-home-button"
            onClick={() => (window.location.href = "/")}
          >
            ← Quay về trang chính
          </Button>
        </div>
      </Card>
    </div>
  );
}
