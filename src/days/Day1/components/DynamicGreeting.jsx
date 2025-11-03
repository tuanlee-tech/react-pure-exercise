function DynamicGreeting() {
  const currentHour = new Date().getHours();
  const userName = "Alex";

  // Object mapping: giờ → { text, icon, bgClass, quote }
  const greetingMap = {
    morning: {
      hours: (h) => h >= 5 && h <= 11,
      text: "Good Morning",
      icon: "🌄",
      bgClass: "bg-morning",
      quote: "Every morning is a new beginning. Make it count!",
    },
    afternoon: {
      hours: (h) => h >= 12 && h <= 17,
      text: "Good Afternoon",
      icon: "☀️",
      bgClass: "bg-afternoon",
      quote: "Keep going. You're halfway there!",
    },
    evening: {
      hours: (h) => h >= 18 && h <= 21,
      text: "Good Evening",
      icon: "🏙️",
      bgClass: "bg-evening",
      quote: "The evening is a time to reflect and recharge.",
    },
    night: {
      hours: (h) => h >= 22 || h <= 4,
      text: "Good Night",
      icon: "🌙",
      bgClass: "bg-night",
      quote: "Sleep well. Tomorrow is a new adventure.",
    },
  };

  // Tìm greeting phù hợp
  const currentGreeting = Object.values(greetingMap).find((g) =>
    g.hours(currentHour)
  );

  // Format giờ hiện tại
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`greeting ${currentGreeting.bgClass}`}>
      <div className="greeting-content">
        {/* 1. Icon + Greeting */}
        <div className="greeting-header">
          <span className="greeting-icon">{currentGreeting.icon}</span>
          <h1 className="greeting-text">
            {currentGreeting.text},{" "}
            <span className="user-name">{userName}</span>!
          </h1>
        </div>

        {/* 3. Giờ hiện tại */}
        <div className="current-time">{currentTime}</div>

        {/* 5. Bonus: Quote */}
        <blockquote className="motivational-quote">
          "{currentGreeting.quote}"
        </blockquote>
      </div>
    </div>
  );
}

export default DynamicGreeting;
