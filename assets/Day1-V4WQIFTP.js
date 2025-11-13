import{j as e,C as h}from"./index-BL23cSqg.js";/* empty css               */import{E as s}from"./ExerciseCard-Bn4ywqQz.js";import{C as d,B as g}from"./tooltip-Dy-nvUwJ.js";const p={name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"};function x({product:i=p}){const a={true:"in",false:"out"},r=i.price*(1-i.discount/100),c=Math.round(i.rating);return e.jsxs(d,{className:"product-card-modern",children:[e.jsxs("div",{className:"product-image-wrapper",children:[e.jsx("img",{src:i.image,alt:i.name,className:"product-image"}),e.jsx("div",{className:"product-image-overlay"}),i.discount>0&&e.jsxs("div",{className:"discount-badge-premium",children:["−",i.discount,"%"]}),e.jsx("div",{className:`stock-dot ${i.inStock?"":"out"}`})]}),e.jsxs(d.Content,{style:{padding:"24px"},children:[e.jsx("h3",{className:"product-name-gradient",children:i.name}),e.jsxs("div",{className:"product-price-wrapper",children:[e.jsxs("span",{className:"price-discounted",children:[i.currency," ",r.toFixed(2)]}),i.discount>0&&e.jsxs("span",{className:"price-original",children:[i.currency," ",i.price.toFixed(2)]})]}),e.jsxs("div",{className:"product-rating-modern",children:[e.jsx("div",{className:"rating-stars",children:[...Array(5)].map((n,t)=>e.jsx("span",{className:t<c?"filled":"empty",children:"★"},t))}),e.jsx("span",{className:"rating-value",children:i.rating}),e.jsxs("span",{className:"reviews-count",children:["• ",i.reviews," đánh giá"]})]}),e.jsxs("div",{className:`stock-pill ${a[i.inStock]}`,children:[e.jsx("span",{className:"stock-pill-dot"}),i.inStock?"In Stock":"Out of Stock"]}),e.jsx(g,{variant:"primary",size:"lg",className:"product-cta-button",disabled:!i.inStock,children:i.inStock?"Thêm vào giỏ hàng":"Hết hàng"})]})]})}const v=[{name:"Wireless Headphones",price:99.99,currency:"USD",inStock:!0,rating:4.5,reviews:128,discount:20,image:"https://placehold.co/600x400?text=Headphones"},{name:"Bluetooth Speaker",price:59.99,currency:"USD",inStock:!0,rating:4,reviews:50,discount:0,image:"https://placehold.co/600x400?text=Speaker"},{name:"Noise Cancelling Earbuds",price:129.99,currency:"USD",inStock:!1,rating:5,reviews:200,discount:15,image:"https://placehold.co/600x400?text=Earbuds"},{name:"Smart Watch",price:199.99,currency:"USD",inStock:!1,rating:3.5,reviews:80,discount:0,image:"https://placehold.co/600x400?text=SmartWatch"},{name:"Budget Headphones",price:29.99,currency:"USD",inStock:!0,rating:2,reviews:5,discount:10,image:"https://placehold.co/600x400?text=Budget+Headphones"},{name:"New Release Earphones",price:49.99,currency:"USD",inStock:!0,rating:0,reviews:0,discount:0,image:"https://placehold.co/600x400?text=Earphones"}];function N(){return e.jsxs(s,{children:[e.jsx(s.Header,{order:1,title:"Product Card Component"}),e.jsx(s.Description,{children:`
Tạo component hiển thị thông tin sản phẩm:
---
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20, // percent
    image: "https://via.placeholder.com/200"
  };

  // TODO: 
  // 1. Hiển thị ảnh sản phẩm
  // 2. Hiển thị tên và giá (tính giá sau discount)
  // 3. Hiển thị rating và số reviews
  // 4. Hiển thị badge "In Stock" hoặc "Out of Stock"
  // 5. Hiển thị % discount nếu có
  
  return (
    <div className="product-card">
      {/* Your code here */}
    </div>
  );
}
---
Gợi ý:
- Giá sau giảm = price * (1 - discount/100)
- Format giá: toFixed(2)
- Dùng emoji cho rating: ⭐
`}),e.jsx(s.Demo,{children:e.jsx("div",{className:"grid grid-cols-3",children:v.map(i=>e.jsx("div",{className:"grid-item",children:e.jsx(x,{product:i})},i.name))})}),e.jsx(s.Code,{children:`
import { Button, Card } from "@ui";
function ProductCard() {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 20,
    image: "https://placehold.co/600x400?text=Headphones",
  };

  const stockStatus = {
    true: "in",
    false: "out",
  };

  const discountedPrice = product.price * (1 - product.discount / 100);
  const roundedRating = Math.round(product.rating);

  return (
    <Card className="product-card-modern">
      {/* Image + Badges */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-image-overlay" />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="discount-badge-premium">−{product.discount}%</div>
        )}

        {/* Stock Dot */}
        <div className={\`stock-dot \${product.inStock ? "" : "out"}\`} />
      </div>

      <Card.Content style={{ padding: "24px" }}>
        {/* Name */}
        <h3 className="product-name-gradient">{product.name}</h3>

        {/* Price */}
        <div className="product-price-wrapper">
          <span className="price-discounted">
            {product.currency} {discountedPrice.toFixed(2)}
          </span>
          {product.discount > 0 && (
            <span className="price-original">
              {product.currency} {product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="product-rating-modern">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < roundedRating ? "filled" : "empty"}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews-count">• {product.reviews} đánh giá</span>
        </div>

        {/* Stock Status */}
        <div className={\`stock-pill \${stockStatus[product.inStock]}\`}>
          <span className="stock-pill-dot" />
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="lg"
          className="product-cta-button"
          disabled={!product.inStock}
        >
          {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
        </Button>
      </Card.Content>
    </Card>
  );
}
`})]})}const j={city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12};function y({weather:i=j}){const r={Sunny:{icon:"☀️",bgClass:"bg-sunny"},Rainy:{icon:"🌧️",bgClass:"bg-rainy"},Cloudy:{icon:"☁️",bgClass:"bg-cloudy"}}[i.condition];return e.jsxs(d,{className:`weather-widget-modern ${r.bgClass}`,children:[e.jsx("h2",{className:"weather-city",children:i.city}),e.jsx("div",{className:"weather-icon-big",children:r.icon}),e.jsxs("div",{className:"weather-temperature",children:[i.temperature,"°C"]}),e.jsxs("div",{className:"weather-details",children:[e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-label",children:"Humidity"}),e.jsxs("span",{className:"detail-value",children:[i.humidity,"%"]})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-label",children:"Wind"}),e.jsxs("span",{className:"detail-value",children:[i.wind," km/h"]})]})]})]})}const b=[{city:"Hanoi",temperature:28,condition:"Sunny",humidity:65,wind:12},{city:"Ho Chi Minh City",temperature:32,condition:"Cloudy",humidity:70,wind:8},{city:"Da Nang",temperature:30,condition:"Rainy",humidity:80,wind:15}];function C(){return e.jsxs(s,{children:[e.jsx(s.Header,{order:2,title:"Weather Widget"}),e.jsx(s.Description,{children:`
function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12 // km/h
  };

  // TODO:
  // 1. Hiển thị icon dựa vào condition (☀️ Sunny, 🌧️ Rainy, ☁️ Cloudy)
  // 2. Hiển thị nhiệt độ với unit °C
  // 3. Hiển thị thành phố
  // 4. Hiển thị humidity và wind speed
  // 5. Background color khác nhau cho mỗi condition
  
  return (
    <div className="weather-widget">
      {/* Your code here */}
    </div>
  );
}

`}),e.jsx(s.Demo,{children:e.jsx("div",{className:"grid grid-cols-3",children:b.map(i=>e.jsx("div",{className:"grid-item",children:e.jsx(y,{weather:i})},i.city))})}),e.jsx(s.Code,{children:`
import { Card } from "@ui";
export default function WeatherWidget() {
  const weather = {
    city: "Hanoi",
    temperature: 28,
    condition: "Sunny", // "Sunny", "Rainy", "Cloudy"
    humidity: 65,
    wind: 12, // km/h
  };

  const conditionMap = {
    Sunny: {
      icon: "☀️",
      bgClass: "bg-sunny",
    },
    Rainy: {
      icon: "🌧️",
      bgClass: "bg-rainy",
    },
    Cloudy: {
      icon: "☁️",
      bgClass: "bg-cloudy",
    },
  };

  const current = conditionMap[weather.condition];

  return (
    <Card className={\`weather-widget-modern \${current.bgClass}\`}>
      {/* Thành phố */}
      <h2 className="weather-city">{weather.city}</h2>

      {/* Icon thời tiết + hiệu ứng */}
      <div className="weather-icon-big">{current.icon}</div>

      {/* Nhiệt độ */}
      <div className="weather-temperature">{weather.temperature}°C</div>

      {/* Chi tiết */}
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.wind} km/h</span>
        </div>
      </div>
    </Card>
  );
}

`})]})}function S(){const i={posts:145,followers:2340,following:890,likes:5678},a=["Posted a new photo","Liked John's post","Followed Jane Smith","Commented on Sarah's story","Shared a reel"],r={posts:{label:"Posts",icon:"📰"},followers:{label:"Followers",icon:"🧑‍🤝‍🧑"},following:{label:"Following",icon:"🔔"},likes:{label:"Likes",icon:"💖"}},c=n=>n.toLocaleString("en-US");return e.jsxs("div",{className:"user-dashboard-modern",children:[e.jsx("div",{className:"stats-grid-modern",children:Object.entries(i).map(([n,t])=>{const{label:m,icon:u}=r[n];return e.jsxs(d,{className:"stat-item-modern","data-type":n,children:[e.jsx("div",{className:"stat-icon-modern",children:u}),e.jsx("div",{className:"stat-value-modern",children:c(t)}),e.jsx("div",{className:"stat-label-modern",children:m})]},n)})}),e.jsxs("div",{className:"activities-section",children:[e.jsx("h3",{className:"activities-title",children:"Recent Activities"}),e.jsx("ul",{className:"activity-list",children:a.map((n,t)=>e.jsx("li",{className:"activity-item",children:n},t))})]})]})}function w(){return e.jsxs(s,{children:[e.jsx(s.Header,{order:3,title:"User Stats Dashboard"}),e.jsx(s.Description,{children:`
function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith"
  ];

  // TODO:
  // 1. Hiển thị 4 stats trong grid layout
  // 2. Format numbers với commas (2,340)
  // 3. Hiển thị danh sách activities
  // 4. Thêm icons cho mỗi stat
  // 5. Dùng Fragment hợp lý
  
  return (
    // Your code here
  );
}


`}),e.jsx(s.Demo,{children:e.jsx(S,{})}),e.jsx(s.Code,{children:`
import { Card } from "@ui";
export default function UserDashboard() {
  const stats = {
    posts: 145,
    followers: 2340,
    following: 890,
    likes: 5678,
  };

  const recentActivities = [
    "Posted a new photo",
    "Liked John's post",
    "Followed Jane Smith",
    "Commented on Sarah's story",
    "Shared a reel",
  ];

  const statConfig = {
    posts: { label: "Posts", icon: "📰" },
    followers: { label: "Followers", icon: "🧑‍🤝‍🧑" },
    following: { label: "Following", icon: "🔔" },
    likes: { label: "Likes", icon: "💖" },
  };


  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="user-dashboard-modern">
      {/* Stats Grid */}
      <div className="stats-grid-modern">
        {Object.entries(stats).map(([key, value]) => {
          const { label, icon } = statConfig[key];
          return (
            <Card key={key} className="stat-item-modern" data-type={key}>
              <div className="stat-icon-modern">{icon}</div>
              <div className="stat-value-modern">{formatNumber(value)}</div>
              <div className="stat-label-modern">{label}</div>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="activities-section">
        <h3 className="activities-title">Recent Activities</h3>
        <ul className="activity-list">
          {recentActivities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


`})]})}const k=new Date().getHours();function o({currentHour:i=k}){const a="Alex",c=Object.values({morning:{hours:t=>t>=5&&t<=11,text:"Chào buổi sáng",icon:"🌅",bgClass:"bg-morning",quote:"Mỗi buổi sáng là một khởi đầu mới. Hãy làm nó đáng nhớ!"},afternoon:{hours:t=>t>=12&&t<=17,text:"Chào buổi chiều",icon:"☀️",bgClass:"bg-afternoon",quote:"Cố lên! Bạn đã đi được nửa chặng đường rồi!"},evening:{hours:t=>t>=18&&t<=21,text:"Chào buổi tối",icon:"🌆",bgClass:"bg-evening",quote:"Buổi tối là lúc để nhìn lại và nạp lại năng lượng."},night:{hours:t=>t>=22||t<=4,text:"Chúc ngủ ngon",icon:"🌙",bgClass:"bg-night",quote:"Ngủ ngon nhé. Ngày mai lại là một cuộc phiêu lưu mới!"}}).find(t=>t.hours(i)),n=new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",hour12:!1});return e.jsxs(d,{className:`dynamic-greeting-modern ${c.bgClass}`,children:[e.jsxs("div",{className:"greeting-header",children:[e.jsx("span",{className:"greeting-icon-big",children:c.icon}),e.jsxs("h1",{className:"greeting-text-big",children:[c.text,","," ",e.jsx("span",{className:"user-name-highlight",children:a}),"!"]})]}),e.jsxs("div",{className:"current-time-display",children:[n," • Hà Nội, Việt Nam",e.jsx("div",{className:"flag-vn",children:"🇻🇳"})]}),e.jsx("blockquote",{className:"motivational-quote-premium",children:c.quote})]})}function f(){return e.jsxs(s,{children:[e.jsx(s.Header,{order:4,title:"Dynamic Greeting (Challenge)"}),e.jsx(s.Description,{children:`
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


`}),e.jsxs(s.Demo,{children:[e.jsxs("div",{className:"now-time",children:[e.jsxs("p",{className:"time text-center",children:["Giờ hiện tại : ",new Date().toLocaleString()]}),e.jsx(o,{})]}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"grid-item",children:[e.jsx("p",{className:"time text-center",children:"Giờ giả lập: 8:00 AM"}),e.jsx(o,{currentHour:8})]}),e.jsxs("div",{className:"grid-item",children:[e.jsx("p",{className:"time text-center",children:"Giờ giả lập: 2:00 PM"}),e.jsx(o,{currentHour:14})]}),e.jsxs("div",{className:"grid-item",children:[e.jsx("p",{className:"time text-center",children:"Giờ giả lập: 7:00 PM"}),e.jsx(o,{currentHour:19})]}),e.jsxs("div",{className:"grid-item",children:[e.jsx("p",{className:"time text-center",children:"Giờ giả lập: 11:00 PM"}),e.jsx(o,{currentHour:23})]})]})]}),e.jsx(s.Code,{children:`
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


`})]})}const l={1:N,2:C,3:w,4:f},M=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(h,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 1"}),e.jsx("p",{className:"day-subtitle",children:"JSX & Rendering Basics"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu JSX là gì và cách hoạt động"}),e.jsx("li",{children:"Sử dụng JavaScript expressions trong JSX"}),e.jsx("li",{children:"Làm việc với Fragments"}),e.jsx("li",{children:"Tạo được UI components đơn giản"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(l).map(i=>{const a=l[i];return a?e.jsx(a,{},i):null})})]});export{M as default};
