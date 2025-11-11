import ExerciseCard from "../../../../../components/ExerciseCard";
import NotificationCenter from "./components/NotificationCenter";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Notification Center" />

      <ExerciseCard.Description>
        {`
function NotificationCenter() {
  const notifications = [
    {
      id: 1,
      type: "info",
      message: "System update available",
      read: false,
      timestamp: "5 mins ago",
    },
    {
      id: 2,
      type: "success",
      message: "Payment processed successfully",
      read: true,
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Your subscription expires in 3 days",
      read: false,
      timestamp: "2 hours ago",
    },
    {
      id: 4,
      type: "error",
      message: "Failed to sync data",
      read: false,
      timestamp: "3 hours ago",
    },
  ];

  // TODO:
  // 1. Render notifications với icon dựa vào type:
  //    - info: ℹ️ (blue)
  //    - success: ✅ (green)
  //    - warning: ⚠️ (yellow)
  //    - error: ❌ (red)
  // 2. Unread notifications có background khác
  // 3. Filter: All, Unread, Read
  // 4. Hiển thị unread count badge
  // 5. Button "Mark all as read" (chỉ hiển thị nếu có unread)
  // 6. Button "Clear all" với confirmation
  // 7. Nếu không có notifications: "No notifications"
  // 8. Group by type option

  return <div className="notification-center">{/* Your code here */}</div>;
}

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <NotificationCenter />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
import { Button, Card, Checkbox, Select } from "@ui";
import { useState } from "react";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "Cập nhật hệ thống đã sẵn sàng",
      read: false,
      timestamp: "5 phút trước",
    },
    {
      id: 2,
      type: "success",
      message: "Thanh toán thành công",
      read: true,
      timestamp: "1 giờ trước",
    },
    {
      id: 3,
      type: "warning",
      message: "Gói đăng ký của bạn hết hạn sau 3 ngày",
      read: false,
      timestamp: "2 giờ trước",
    },
    {
      id: 4,
      type: "error",
      message: "Đồng bộ dữ liệu thất bại",
      read: false,
      timestamp: "3 giờ trước",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [groupByType, setGroupByType] = useState(false);

  const typeConfig = {
    info: { icon: "ℹ️", color: "notification-icon-info" },
    success: { icon: "✅", color: "notification-icon-success" },
    warning: { icon: "⚠️", color: "notification-icon-warning" },
    error: { icon: "❌", color: "notification-icon-error" },
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const groups = filteredNotifications.reduce((acc, n) => {
    if (!acc[n.type]) acc[n.type] = [];
    acc[n.type].push(n);
    return acc;
  }, {});

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")) {
      setNotifications([]);
    }
  };

  return (
    <Card className="notification-center">
      {/* Header */}
      <div className="notification-header">
        <h2 className="notification-title">
          Trung tâm thông báo
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </h2>

        <div className="notification-controls">
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { value: "all", label: "Tất cả" },
              { value: "unread", label: "Chưa đọc" },
              { value: "read", label: "Đã đọc" },
            ]}
          />

          <Checkbox
            label="Nhóm theo loại"
            checked={groupByType}
            onChange={(e) => setGroupByType(e.target.checked)}
          />

          {unreadCount > 0 && (
            <Button variant="primary" size="sm" onClick={markAllAsRead}>
              Đánh dấu tất cả đã đọc
            </Button>
          )}

          <Button variant="danger" size="sm" onClick={clearAll}>
            Xóa tất cả
          </Button>
        </div>
      </div>

      {/* Content */}
      {filteredNotifications.length === 0 ? (
        <div className="no-notifications">Không có thông báo nào</div>
      ) : groupByType ? (
        Object.entries(groups).map(([type, notifs]) => (
          <div key={type} className="group-section">
            <h3 className="group-title">
              {type === "info"
                ? "Thông tin"
                : type === "success"
                ? "Thành công"
                : type === "warning"
                ? "Cảnh báo"
                : "Lỗi"}
            </h3>
            <ul className="notification-list">
              {notifs.map((n) => (
                <li
                  key={n.id}
                  className={\`notification-item \${!n.read ? "unread" : ""}\`}
                >
                  <span
                    className={\`notification-icon \${typeConfig[n.type].color}\`}
                  >
                    {typeConfig[n.type].icon}
                  </span>
                  <span className="notification-message">{n.message}</span>
                  <span className="notification-timestamp">{n.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="notification-list">
          {filteredNotifications.map((n) => (
            <li
              key={n.id}
              className={\`notification-item \${!n.read ? "unread" : ""}\`}
            >
              <span className={\`notification-icon \${typeConfig[n.type].color}\`}>
                {typeConfig[n.type].icon}
              </span>
              <span className="notification-message">{n.message}</span>
              <span className="notification-timestamp">{n.timestamp}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default NotificationCenter;

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
