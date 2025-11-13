import ExerciseCard from "../../../../../components/ExerciseCard";
import DynamicGreeting from "./components/DynamicGreeting";
import "./styles.css";
export default function Exercise5() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={5} title="Dynamic Greeting (Challenge)" />

      <ExerciseCard.Description>
        {`
function DynamicGreeting() {
  const currentHour = new Date().getHours();
  const userName = "Alex";
  
  // TODO:
  // 1. Hiển thị greeting dựa vào thời gian:
  //    - 5-11: Good Morning 🌅
  //    - 12-17: Good Afternoon ☀️
  //    - 18-21: Good Evening 🌆
  //    - 22-4: Good Night 🌙
  // 2. Hiển thị tên user
  // 3. Hiển thị giờ hiện tại
  // 4. Background color khác nhau cho mỗi thời điểm
  // 5. Bonus: Thêm motivational quote
  
  return (
    <div className="greeting">
      {/* Your code here */}
    </div>
  );
}


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <div className="now-time">
          <p className="time text-center">
            Giờ hiện tại : {new Date().toLocaleString()}
          </p>
          <DynamicGreeting />
        </div>

        <div className="grid grid-cols-2">
          {/* Sáng 8h */}
          <div className="grid-item">
            <p className="time text-center">Giờ giả lập: 8:00 AM</p>
            <DynamicGreeting currentHour={8} />
          </div>

          {/* Trưa 14h */}
          <div className="grid-item">
            <p className="time text-center">Giờ giả lập: 2:00 PM</p>
            <DynamicGreeting currentHour={14} />
          </div>

          {/* Tối 19h */}
          <div className="grid-item">
            <p className="time text-center">Giờ giả lập: 7:00 PM</p>
            <DynamicGreeting currentHour={19} />
          </div>

          {/* Khuya 23h */}
          <div className="grid-item">
            <p className="time text-center">Giờ giả lập: 11:00 PM</p>
            <DynamicGreeting currentHour={23} />
          </div>
        </div>
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Card } from "@ui";

function DynamicGreeting() {
  const currentHour = new Date().getHours();
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
    <Card className={\`dynamic-greeting-modern \${currentGreeting.bgClass}\`}>
      <div className="greeting-header">
        <span className="greeting-icon-big">{currentGreeting.icon}</span>
        <h1 className="greeting-text-big">
          {currentGreeting.text},{" "}
          <span className="user-name-highlight">{userName}</span>!
        </h1>
      </div>

      <div className="time-display">
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


`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
