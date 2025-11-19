import{j as e,r as d,C}from"./index-DWyDx9Oi.js";/* empty css               */import{E as n}from"./ExerciseCard-B6SIPsBu.js";import{C as x,S as b,a as k,B as y,I as S}from"./tooltip-CJ0FpFPo.js";function w(){const r=[{id:1,name:"John Doe",role:"admin",status:"online",lastActive:"2 phút trước",points:1250},{id:2,name:"Jane Smith",role:"user",status:"offline",lastActive:"1 giờ trước",points:890},{id:3,name:"Bob Johnson",role:"moderator",status:"away",lastActive:"15 phút trước",points:2100}],c=[...r].sort((s,o)=>o.points-s.points),l=r.reduce((s,o)=>(s[o.role]=(s[o.role]||0)+1,s),{}),u={online:"🟢",offline:"⚫",away:"🟡"},h={admin:"role-admin",moderator:"role-moderator",user:"role-user"},p={admin:"Admin",moderator:"Moderator",user:"User"};return e.jsxs("div",{className:"user-dashboard-vn",children:[e.jsxs(x,{className:"role-summary-card",children:[e.jsx("h3",{className:"role-summary-title",children:"Tổng quan vai trò"}),e.jsx("ul",{className:"role-summary-list",children:Object.entries(l).map(([s,o])=>e.jsxs("li",{className:"role-summary-item",children:[e.jsx("span",{children:p[s]||s}),e.jsxs("span",{children:[o," người"]})]},s))})]}),c.length===0?e.jsx("div",{className:"empty-state-vn",children:"Không tìm thấy người dùng nào"}):e.jsx("div",{className:"user-list-vn",children:c.map(s=>e.jsxs(x,{className:"user-item-card",children:[e.jsxs("div",{className:"user-info",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx("span",{className:"user-name-vn",children:s.name}),e.jsx("span",{className:`role-badge-vn ${h[s.role]}`,children:p[s.role]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("span",{className:"user-status-vn",children:[e.jsx("span",{className:"status-dot",children:u[s.status]}),s.status==="online"?"Đang hoạt động":s.status==="away"?"Vắng mặt":"Ngoại tuyến"]}),s.status!=="online"&&e.jsx("span",{className:"last-active-vn",children:s.lastActive}),e.jsxs("span",{className:"user-points-vn",children:[s.points," điểm"]})]})]}),s.points>1e3&&e.jsx("span",{className:"top-user-badge-vn",children:"Top User"})]},s.id))})]})}function T(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:1,title:"User Dashboard"}),e.jsx(n.Description,{children:`
function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 mins ago",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 hour ago",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 mins ago",
      points: 2100,
    },
  ];

  // TODO:
  // 1. Render danh sách users với key đúng
  // 2. Hiển thị badge role khác màu (admin=red, moderator=blue, user=green)
  // 3. Hiển thị status với icon (online=🟢, offline=⚫, away=🟡)
  // 4. Chỉ hiển thị lastActive nếu status !== 'online'
  // 5. Hiển thị "Top User" badge nếu points > 1000
  // 6. Sort users theo points (highest first)
  // 7. Thêm empty state nếu users.length === 0
  // 8. Hiển thị tổng số users mỗi role

  return <div className="user-dashboard">{/* Your code here */}</div>;
}

`}),e.jsx(n.Demo,{children:e.jsx(w,{})}),e.jsx(n.Code,{children:`
import { Card } from "@ui";
export default function UserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "admin",
      status: "online",
      lastActive: "2 phút trước",
      points: 1250,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "user",
      status: "offline",
      lastActive: "1 giờ trước",
      points: 890,
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "moderator",
      status: "away",
      lastActive: "15 phút trước",
      points: 2100,
    },
  ];

  // 6. Sort theo points (cao → thấp)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // 8. Tổng số users mỗi role
  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const statusIcons = {
    online: "🟢",
    offline: "⚫",
    away: "🟡",
  };

  const roleClasses = {
    admin: "role-admin",
    moderator: "role-moderator",
    user: "role-user",
  };

  const roleLabels = {
    admin: "Admin",
    moderator: "Moderator",
    user: "User",
  };

  return (
    <div className="user-dashboard-vn">
      {/* Role Summary */}
      <Card className="role-summary-card">
        <h3 className="role-summary-title">Tổng quan vai trò</h3>
        <ul className="role-summary-list">
          {Object.entries(roleCounts).map(([role, count]) => (
            <li key={role} className="role-summary-item">
              <span>{roleLabels[role] || role}</span>
              <span>{count} người</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* User List */}
      {sortedUsers.length === 0 ? (
        <div className="empty-state-vn">Không tìm thấy người dùng nào</div>
      ) : (
        <div className="user-list-vn">
          {sortedUsers.map((user) => (
            <Card key={user.id} className="user-item-card">
              <div className="user-info">
                <div className="flex items-center gap-1 mb-1">
                  <span className="user-name-vn">{user.name}</span>
                  <span className={\`role-badge-vn \${roleClasses[user.role]}\`}>
                    {roleLabels[user.role]}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="user-status-vn">
                    <span className="status-dot">
                      {statusIcons[user.status]}
                    </span>
                    {user.status === "online"
                      ? "Đang hoạt động"
                      : user.status === "away"
                      ? "Vắng mặt"
                      : "Ngoại tuyến"}
                  </span>
                  {user.status !== "online" && (
                    <span className="last-active-vn">{user.lastActive}</span>
                  )}
                  <span className="user-points-vn">{user.points} điểm</span>
                </div>
              </div>

              {user.points > 1000 && (
                <span className="top-user-badge-vn">Top User</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}


`})]})}function B(){const r=[{id:1,name:"Laptop Pro",category:"electronics",price:1299,inStock:!0,rating:4.5,icon:"💻"},{id:2,name:"Ghế văn phòng",category:"furniture",price:299,inStock:!1,rating:4,icon:"🪑"},{id:3,name:"Đèn bàn học",category:"furniture",price:49,inStock:!0,rating:4.8,icon:"💡"},{id:4,name:"Chuột không dây",category:"electronics",price:29,inStock:!0,rating:4.2,icon:"🖱️"},{id:5,name:"Sổ tay",category:"stationery",price:5,inStock:!0,rating:3.9,icon:"📒"}],[c,l]=d.useState("all"),[u,h]=d.useState("all"),[p,s]=d.useState("all"),[o,m]=d.useState("none"),g=r.filter(t=>!(c!=="all"&&t.category!==c||u==="in"&&!t.inStock||u==="out"&&t.inStock||p==="low"&&t.price>=50||p==="mid"&&(t.price<50||t.price>500)||p==="high"&&t.price<=500)).sort((t,v)=>o==="price-low"?t.price-v.price:o==="price-high"?v.price-t.price:o==="rating"?v.rating-t.rating:0);return e.jsxs("div",{className:"product-filter",children:[e.jsxs(x,{className:"filter-bar",children:[e.jsxs("select",{className:"custom-select",value:c,onChange:t=>l(t.target.value),children:[e.jsx("option",{value:"all",children:"Tất cả danh mục"}),e.jsx("option",{value:"electronics",children:"Điện tử"}),e.jsx("option",{value:"furniture",children:"Nội thất"}),e.jsx("option",{value:"stationery",children:"Văn phòng phẩm"})]}),e.jsxs("select",{className:"custom-select",value:u,onChange:t=>h(t.target.value),children:[e.jsx("option",{value:"all",children:"Tất cả kho"}),e.jsx("option",{value:"in",children:"Còn hàng"}),e.jsx("option",{value:"out",children:"Hết hàng"})]}),e.jsxs("select",{className:"custom-select",value:p,onChange:t=>s(t.target.value),children:[e.jsx("option",{value:"all",children:"Tất cả giá"}),e.jsx("option",{value:"low",children:"Dưới 50$"}),e.jsx("option",{value:"mid",children:"50$ - 500$"}),e.jsx("option",{value:"high",children:"Trên 500$"})]}),e.jsxs("select",{className:"custom-select",value:o,onChange:t=>m(t.target.value),children:[e.jsx("option",{value:"none",children:"Không sắp xếp"}),e.jsx("option",{value:"price-low",children:"Giá tăng dần"}),e.jsx("option",{value:"price-high",children:"Giá giảm dần"}),e.jsx("option",{value:"rating",children:"Đánh giá cao nhất"})]})]}),e.jsxs("div",{className:"product-count-display",children:["Hiển thị ",g.length," / ",r.length," sản phẩm"]}),g.length===0?e.jsx("div",{className:"no-products",children:"Không tìm thấy sản phẩm nào"}):e.jsx("div",{className:"product-list",children:g.map(t=>e.jsxs(x,{className:"product-item-card",children:[e.jsx("h3",{className:"product-name",children:t.name}),e.jsx("p",{className:"product-img",children:t.icon}),e.jsxs("div",{className:"product-price",children:["$",t.price]}),e.jsxs("div",{className:"product-rating-stars",children:["★".repeat(Math.floor(t.rating)),t.rating%1>=.5&&"⯪"]}),!t.inStock&&e.jsx("span",{className:"out-of-stock-badge",children:"Hết hàng"})]},t.id))})]})}function P(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:2,title:"Product Filter"}),e.jsx(n.Description,{children:`
function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Office Chair",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Desk Lamp",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Notebook",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
    },
  ];

  // TODO:
  // 1. Thêm filter by category (All, Electronics, Furniture, Stationery)
  // 2. Thêm filter by stock (All, In Stock, Out of Stock)
  // 3. Thêm filter by price range (<$50, $50-$500, >$500)
  // 4. Hiển thị "Out of Stock" badge cho sản phẩm hết hàng
  // 5. Hiển thị rating với stars (⭐)
  // 6. Nếu không có sản phẩm nào match filters, hiển thị "No products found"
  // 7. Hiển thị số lượng products hiện tại / tổng số
  // 8. Sort options: Price (Low to High), Price (High to Low), Rating

  return <div className="product-filter">{/* Your code here */}</div>;
}


`}),e.jsx(n.Demo,{children:e.jsx(B,{})}),e.jsx(n.Code,{children:`
import { Card } from "@ui";
import { useState } from "react";

function ProductFilter() {
  const products = [
    {
      id: 1,
      name: "Laptop Pro",
      category: "electronics",
      price: 1299,
      inStock: true,
      rating: 4.5,
      icon: "💻",
    },
    {
      id: 2,
      name: "Ghế văn phòng",
      category: "furniture",
      price: 299,
      inStock: false,
      rating: 4.0,
      icon: "🪑",
    },
    {
      id: 3,
      name: "Đèn bàn học",
      category: "furniture",
      price: 49,
      inStock: true,
      rating: 4.8,
      icon: "💡",
    },
    {
      id: 4,
      name: "Chuột không dây",
      category: "electronics",
      price: 29,
      inStock: true,
      rating: 4.2,
      icon: "🖱️",
    },
    {
      id: 5,
      name: "Sổ tay",
      category: "stationery",
      price: 5,
      inStock: true,
      rating: 3.9,
      icon: "📒",
    },
  ];

  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("none");

  const filteredProducts = products
    .filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (stock === "in" && !p.inStock) return false;
      if (stock === "out" && p.inStock) return false;
      if (priceRange === "low" && p.price >= 50) return false;
      if (priceRange === "mid" && (p.price < 50 || p.price > 500)) return false;
      if (priceRange === "high" && p.price <= 500) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-filter">
      {/* Filter Bar */}
      <Card className="filter-bar">
        <select
          className="custom-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Tất cả danh mục</option>
          <option value="electronics">Điện tử</option>
          <option value="furniture">Nội thất</option>
          <option value="stationery">Văn phòng phẩm</option>
        </select>

        <select
          className="custom-select"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        >
          <option value="all">Tất cả kho</option>
          <option value="in">Còn hàng</option>
          <option value="out">Hết hàng</option>
        </select>

        <select
          className="custom-select"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="all">Tất cả giá</option>
          <option value="low">Dưới 50$</option>
          <option value="mid">50$ - 500$</option>
          <option value="high">Trên 500$</option>
        </select>

        <select
          className="custom-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Không sắp xếp</option>
          <option value="price-low">Giá tăng dần</option>
          <option value="price-high">Giá giảm dần</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </Card>

      {/* Product Count */}
      <div className="product-count-display">
        Hiển thị {filteredProducts.length} / {products.length} sản phẩm
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">Không tìm thấy sản phẩm nào</div>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-item-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-img">{product.icon}</p>
              <div className="product-price">\${product.price}</div>
              <div className="product-rating-stars">
                {"★".repeat(Math.floor(product.rating))}
                {product.rating % 1 >= 0.5 && "⯪"}
              </div>

              {!product.inStock && (
                <span className="out-of-stock-badge">Hết hàng</span>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductFilter;


`})]})}function D(){const[r,c]=d.useState([{id:1,type:"info",message:"Cập nhật hệ thống đã sẵn sàng",read:!1,timestamp:"5 phút trước"},{id:2,type:"success",message:"Thanh toán thành công",read:!0,timestamp:"1 giờ trước"},{id:3,type:"warning",message:"Gói đăng ký của bạn hết hạn sau 3 ngày",read:!1,timestamp:"2 giờ trước"},{id:4,type:"error",message:"Đồng bộ dữ liệu thất bại",read:!1,timestamp:"3 giờ trước"}]),[l,u]=d.useState("all"),[h,p]=d.useState(!1),s={info:{icon:"ℹ️",color:"notification-icon-info"},success:{icon:"✅",color:"notification-icon-success"},warning:{icon:"⚠️",color:"notification-icon-warning"},error:{icon:"❌",color:"notification-icon-error"}},o=r.filter(a=>!a.read).length,m=r.filter(a=>l==="unread"?!a.read:l==="read"?a.read:!0),g=m.reduce((a,f)=>(a[f.type]||(a[f.type]=[]),a[f.type].push(f),a),{}),t=()=>{c(r.map(a=>({...a,read:!0})))},v=()=>{window.confirm("Bạn có chắc chắn muốn xóa tất cả thông báo?")&&c([])};return e.jsxs(x,{className:"notification-center",children:[e.jsxs("div",{className:"notification-header",children:[e.jsxs("h2",{className:"notification-title",children:["Trung tâm thông báo",o>0&&e.jsx("span",{className:"unread-badge",children:o})]}),e.jsxs("div",{className:"notification-controls",children:[e.jsx(b,{value:l,onChange:a=>u(a.target.value),options:[{value:"all",label:"Tất cả"},{value:"unread",label:"Chưa đọc"},{value:"read",label:"Đã đọc"}]}),e.jsx(k,{label:"Nhóm theo loại",checked:h,onChange:a=>p(a.target.checked)}),o>0&&e.jsx(y,{variant:"primary",size:"sm",onClick:t,children:"Đánh dấu tất cả đã đọc"}),e.jsx(y,{variant:"danger",size:"sm",onClick:v,children:"Xóa tất cả"})]})]}),m.length===0?e.jsx("div",{className:"no-notifications",children:"Không có thông báo nào"}):h?Object.entries(g).map(([a,f])=>e.jsxs("div",{className:"group-section",children:[e.jsx("h3",{className:"group-title",children:a==="info"?"Thông tin":a==="success"?"Thành công":a==="warning"?"Cảnh báo":"Lỗi"}),e.jsx("ul",{className:"notification-list",children:f.map(i=>e.jsxs("li",{className:`notification-item ${i.read?"":"unread"}`,children:[e.jsx("span",{className:`notification-icon ${s[i.type].color}`,children:s[i.type].icon}),e.jsx("span",{className:"notification-message",children:i.message}),e.jsx("span",{className:"notification-timestamp",children:i.timestamp})]},i.id))})]},a)):e.jsx("ul",{className:"notification-list",children:m.map(a=>e.jsxs("li",{className:`notification-item ${a.read?"":"unread"}`,children:[e.jsx("span",{className:`notification-icon ${s[a.type].color}`,children:s[a.type].icon}),e.jsx("span",{className:"notification-message",children:a.message}),e.jsx("span",{className:"notification-timestamp",children:a.timestamp})]},a.id))})]})}function L(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:3,title:"Notification Center"}),e.jsx(n.Description,{children:`
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

`}),e.jsx(n.Demo,{children:e.jsx(D,{})}),e.jsx(n.Code,{children:`
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

`})]})}function A(){const r=[{id:1,title:"Bắt đầu với React",author:"John Doe",date:"2024-01-15",tags:["react","javascript","tutorial"],views:1250,likes:89,featured:!0},{id:2,title:"Kỹ thuật CSS nâng cao",author:"Jane Smith",date:"2024-01-20",tags:["css","design","frontend"],views:890,likes:45,featured:!1},{id:3,title:"Thực hành tốt nhất với Node.js",author:"Bob Johnson",date:"2024-01-25",tags:["nodejs","javascript","backend"],views:2100,likes:156,featured:!0}],[c]=d.useState(r),[l,u]=d.useState(null),[h,p]=d.useState("latest"),[s,o]=d.useState(""),[m,g]=d.useState(2),t=c.filter(i=>!(l&&!i.tags.includes(l)||s&&!i.title.toLowerCase().includes(s.toLowerCase()))).sort((i,N)=>h==="views"?N.views-i.views:h==="likes"?N.likes-i.likes:h==="latest"?new Date(N.date)-new Date(i.date):0),v=t.slice(0,m),a=()=>{u(null),o(""),g(2)},f=()=>{g(i=>Math.min(i+2,t.length))};return e.jsxs("div",{className:"blog-posts",children:[e.jsxs(x,{className:"blog-controls",children:[e.jsx(S,{placeholder:"Tìm kiếm theo tiêu đề....",icon:"🔍",value:s,onChange:i=>o(i.target.value)}),e.jsx(b,{value:h,onChange:i=>p(i.target.value),options:[{value:"latest",label:"Mới nhất"},{value:"views",label:"Xem nhiều nhất"},{value:"likes",label:"Thích nhiều nhất"}]}),l&&e.jsxs("div",{className:"current-tag",children:["Lọc theo: ",l,e.jsx(y,{variant:"ghost",size:"sm",onClick:()=>u(null),children:"Clear"})]})]}),e.jsxs("div",{className:"results-count",children:["Tìm thấy ",t.length," bài viết"]}),t.length===0?e.jsxs("div",{className:"no-posts",children:[e.jsx("p",{children:"Không tìm thấy bài viết nào"}),e.jsx(y,{variant:"primary",size:"sm",onClick:a,style:{marginTop:"16px"},children:"Đặt lại bộ lọc"})]}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"post-list",children:v.map(i=>e.jsxs(x,{className:`post-item ${i.featured?"featured":""}`,children:[i.featured&&e.jsx("span",{className:"featured-icon",children:"⭐"}),e.jsx("h3",{className:"post-title",children:i.title}),e.jsxs("div",{className:"post-meta",children:["Bởi ",i.author," •"," ",new Date(i.date).toLocaleDateString("vi-VN")]}),e.jsx("div",{className:"post-tags",children:i.tags.map(N=>e.jsxs("span",{className:"tag-badge",onClick:()=>u(N),children:["#",N]},N))}),e.jsxs("div",{className:"post-stats",children:[e.jsxs("span",{children:["👁️ ",i.views.toLocaleString()]}),e.jsxs("span",{children:["❤️ ",i.likes]})]})]},i.id))}),m<t.length&&e.jsxs(y,{variant:"primary",size:"lg",onClick:f,className:"load-more-btn",children:["Xem thêm (",t.length-m," bài còn lại)"]})]})]})}function R(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:4,title:"Blog Posts with Tags (Challenge)"}),e.jsx(n.Description,{children:`
function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Node.js Best Practices",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  // TODO:
  // 1. Render posts với key đúng
  // 2. Featured posts có border vàng và icon ⭐
  // 3. Render tags dưới dạng badges (clickable)
  // 4. Click vào tag để filter posts có tag đó
  // 5. Hiển thị views và likes với icons (👁️ và ❤️)
  // 6. Sort options: Latest, Most Viewed, Most Liked
  // 7. Search by title
  // 8. Nếu filter/search không có kết quả: "No posts found" với button reset
  // 9. Hiển thị total results count
  // 10. "Load more" button (giả lập pagination)

  return <div className="blog-posts">{/* Your code here */}</div>;
}
`}),e.jsx(n.Demo,{children:e.jsx(A,{})}),e.jsx(n.Code,{children:`
import { Button, Card, Input, Select } from "@ui";
import { useState } from "react";

function BlogPosts() {
  const initialPosts = [
    {
      id: 1,
      title: "Bắt đầu với React",
      author: "John Doe",
      date: "2024-01-15",
      tags: ["react", "javascript", "tutorial"],
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Kỹ thuật CSS nâng cao",
      author: "Jane Smith",
      date: "2024-01-20",
      tags: ["css", "design", "frontend"],
      views: 890,
      likes: 45,
      featured: false,
    },
    {
      id: 3,
      title: "Thực hành tốt nhất với Node.js",
      author: "Bob Johnson",
      date: "2024-01-25",
      tags: ["nodejs", "javascript", "backend"],
      views: 2100,
      likes: 156,
      featured: true,
    },
  ];

  const [posts] = useState(initialPosts);
  const [selectedTag, setSelectedTag] = useState(null);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredPosts = posts
    .filter((p) => {
      if (selectedTag && !p.tags.includes(selectedTag)) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "views") return b.views - a.views;
      if (sort === "likes") return b.likes - a.likes;
      if (sort === "latest") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const resetFilters = () => {
    setSelectedTag(null);
    setSearch("");
    setVisibleCount(2);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, filteredPosts.length));
  };

  return (
    <div className="blog-posts">
      {/* Controls */}
      <Card className="blog-controls">
        <Input
          placeholder="Tìm kiếm theo tiêu đề...."
          icon="🔍"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          options={[
            { value: "latest", label: "Mới nhất" },
            { value: "views", label: "Xem nhiều nhất" },
            { value: "likes", label: "Thích nhiều nhất" },
          ]}
        />

        {selectedTag && (
          <div className="current-tag">
            Lọc theo: {selectedTag}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              Clear
            </Button>
          </div>
        )}
      </Card>

      {/* Results Count */}
      <div className="results-count">
        Tìm thấy {filteredPosts.length} bài viết
      </div>

      {/* Posts */}
      {filteredPosts.length === 0 ? (
        <div className="no-posts">
          <p>Không tìm thấy bài viết nào</p>
          <Button
            variant="primary"
            size="sm"
            onClick={resetFilters}
            style={{ marginTop: "16px" }}
          >
            Đặt lại bộ lọc
          </Button>
        </div>
      ) : (
        <>
          <ul className="post-list">
            {visiblePosts.map((post) => (
              <Card
                key={post.id}
                className={\`post-item \${post.featured ? "featured" : ""}\`}
              >
                {post.featured && <span className="featured-icon">⭐</span>}
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  Bởi {post.author} •{" "}
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </div>
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-badge"
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="post-stats">
                  <span>👁️ {post.views.toLocaleString()}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </Card>
            ))}
          </ul>

          {visibleCount < filteredPosts.length && (
            <Button
              variant="primary"
              size="lg"
              onClick={loadMore}
              className="load-more-btn"
            >
              Xem thêm ({filteredPosts.length - visibleCount} bài còn lại)
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default BlogPosts;


`})]})}const j={1:T,2:P,3:L,4:R},M=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(C,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 2"}),e.jsx("p",{className:"day-subtitle",children:"Conditional & List Rendering"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Render có điều kiện với nhiều cách khác nhau"}),e.jsxs("li",{children:["Render danh sách với ",e.jsx("span",{className:"code-badge",children:"map()"})]}),e.jsxs("li",{children:["Hiểu và sử dụng ",e.jsx("span",{className:"code-badge",children:"key"})," prop đúng cách"]}),e.jsx("li",{children:"Tránh anti-pattern: index as key"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(j).map(r=>{const c=j[r];return c?e.jsx(c,{},r):null})})]});export{M as default};
