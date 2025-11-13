import { Card } from "@ui";
const init = new Date().getHours();
function DynamicGreeting({ currentHour = init }) {
  const userName = "Alex";

  const greetingMap = {
    morning: {
      hours: (h) => h >= 5 && h <= 11,
      text: "Chào buổi sáng",
      icon: "🌅",
      bgClass: "bg-morning",
      quote: "Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!",
    },
    afternoon: {
      hours: (h) => h >= 12 && h <= 17,
      text: "Chào buổi chiều",
      icon: "☀️",
      bgClass: "bg-afternoon",
      quote: "Cố lên! Bạn đã đi được nửa chặng đường rồi!",
    },
    evening: {
      hours: (h) => h >= 18 && h <= 21,
      text: "Chào buổi tối",
      icon: "🌆",
      bgClass: "bg-evening",
      quote: "Buổi tối là lúc để nhìn lại và nạp lại năng lượng.",
    },
    night: {
      hours: (h) => h >= 22 || h <= 4,
      text: "Chúc ngủ ngon",
      icon: "🌙",
      bgClass: "bg-night",
      quote: "Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!",
    },
  };

  const currentGreeting = Object.values(greetingMap).find((g) =>
    g.hours(currentHour)
  );

  // Giờ Việt Nam thực tế
  const currentTime = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Card className={`dynamic-greeting-modern ${currentGreeting.bgClass}`}>
      <div className="greeting-header">
        <span className="greeting-icon-big">{currentGreeting.icon}</span>
        <h1 className="greeting-text-big">
          {currentGreeting.text},{" "}
          <span className="user-name-highlight">{userName}</span>!
        </h1>
      </div>

      <div className="current-time-display">
        {currentTime} • Hà Nội, Việt Nam
        <div className="flag-vn">🇻🇳</div>
      </div>

      <blockquote className="motivational-quote-premium">
        {currentGreeting.quote}
      </blockquote>
    </Card>
  );
}

export default DynamicGreeting;
