import{j as e,r as p,C as S}from"./index-CFIyM3YC.js";/* empty css               */import{E as n}from"./ExerciseCard-CsYl27D1.js";import{C as v,B as u,M as f,I as k}from"./tooltip-D3RVTba6.js";function y({user:a}){return e.jsxs("div",{className:"user-profile",children:[e.jsx(P,{avatar:a.avatar,name:a.name,username:a.username,bio:a.bio,isVerified:a.isVerified}),e.jsx(O,{posts:a.stats.posts,followers:a.stats.followers,following:a.stats.following}),e.jsx(D,{posts:a.posts})]})}function P({avatar:a,name:s,username:t,bio:r,isVerified:o}){return e.jsxs(v,{className:"user-header",children:[a&&e.jsx("div",{className:"avatar",children:e.jsx("img",{className:"avatar-img",src:a,alt:s})}),e.jsxs("div",{className:"user-info",children:[e.jsxs("div",{className:"name-row",children:[e.jsx("h2",{className:"user-name",children:s}),o&&e.jsx("span",{className:"verified-badge",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 512 512",children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z",fill:"#4285f4"}),e.jsx("path",{d:"M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z",fill:"#fff"})]})})})]}),e.jsxs("p",{className:"user-username",children:["@",t]}),r&&e.jsx("p",{className:"bio",children:r}),e.jsx(u,{variant:"primary",size:"md",className:"follow-btn",children:"Follow"})]})]})}function D({posts:a=[]}){return a.length===0?e.jsx(v,{className:"user-posts",children:e.jsx("p",{className:"empty-state",children:"Chưa có bài viết nào."})}):e.jsx("div",{className:"user-posts",children:a.map(s=>e.jsx(F,{post:s},s.id))})}function F({post:a}){const{content:s,image:t,likes:r,comments:o,timestamp:i}=a;return e.jsxs(v,{className:"post-card",children:[t&&e.jsx("img",{src:t,alt:"Bài viết",className:"post-image"}),e.jsxs("div",{className:"post-content",children:[e.jsx("p",{children:s}),e.jsxs("div",{className:"post-actions",children:[e.jsxs(u,{variant:"ghost",size:"sm",className:"action-btn",children:["❤️ ",r]}),e.jsxs(u,{variant:"ghost",size:"sm",className:"action-btn",children:["💬 ",o]}),e.jsx(u,{variant:"ghost",size:"sm",className:"action-btn",children:"🔁"})]}),e.jsx("div",{className:"post-timestamp",children:i})]})]})}function O({posts:a,followers:s,following:t}){const r=o=>o.toLocaleString("en-US");return e.jsxs("div",{className:"user-stats",children:[e.jsxs(u,{variant:"ghost",className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:r(a)}),e.jsx("div",{className:"stat-label",children:"Bài viết"})]}),e.jsxs(u,{variant:"ghost",className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:r(s)}),e.jsx("div",{className:"stat-label",children:"Người theo dõi"})]}),e.jsxs(u,{variant:"ghost",className:"stat-item",children:[e.jsx("div",{className:"stat-value",children:r(t)}),e.jsx("div",{className:"stat-label",children:"Đang theo dõi"})]})]})}const T={id:1,name:"John Doe",username:"johndoe",avatar:"https://i.pravatar.cc/150?img=1",bio:"Software Developer | React Enthusiast",isVerified:!0,stats:{posts:145,followers:2340,following:890},posts:[{id:1,content:"Just launched my new project!",image:"https://placehold.co/600x400?text=Post%20Image",likes:89,comments:12,timestamp:"2 hours ago"},{id:2,content:"Learning React is fun!",likes:45,comments:5,timestamp:"1 day ago"}]};function U(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:1,title:"UserProfile"}),e.jsx(n.Description,{children:`
// UserProfile.jsx
function UserProfile({ user }) {
  // TODO:
  // Render user profile với:
  // - UserHeader (avatar, name, bio)
  // - UserStats (posts, followers, following)
  // - UserPosts (list of posts)
  
  return (
    <div className="user-profile">
      {/* Your code */}
    </div>
  );
}

// UserHeader.jsx
function UserHeader({ avatar, name, username, bio, isVerified }) {
  // TODO:
  // - Avatar component
  // - Name với verified badge nếu isVerified
  // - Username (@username)
  // - Bio text
  // - Follow/Unfollow button
  
  return (
    <div className="user-header">
      {/* Your code */}
    </div>
  );
}

// UserStats.jsx
function UserStats({ posts, followers, following }) {
  // TODO:
  // Hiển thị 3 stats trong grid
  // Format numbers với commas (1,234)
  // Clickable stats
  
  return (
    <div className="user-stats">
      {/* Your code */}
    </div>
  );
}

// UserPosts.jsx
function UserPosts({ posts }) {
  // TODO:
  // Render list of PostCard components
  // Empty state nếu không có posts
  
  return (
    <div className="user-posts">
      {/* Your code */}
    </div>
  );
}

// PostCard.jsx
function PostCard({ post }) {
  // TODO:
  // - Post image/content
  // - Like, comment, share buttons
  // - Timestamp
  
  return (
    <div className="post-card">
      {/* Your code */}
    </div>
  );
}

// Demo data
const sampleUser = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Software Developer | React Enthusiast',
  isVerified: true,
  stats: {
    posts: 145,
    followers: 2340,
    following: 890
  },
  posts: [
    {
      id: 1,
      content: 'Just launched my new project!',
      image: 'https://via.placeholder.com/400',
      likes: 89,
      comments: 12,
      timestamp: '2 hours ago'
    },
    // More posts...
  ]
};

`}),e.jsx(n.Demo,{children:e.jsx(y,{user:T})}),e.jsx(n.Code,{children:`
import { Button, Card } from "@ui";
export default function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <UserHeader
        avatar={user.avatar}
        name={user.name}
        username={user.username}
        bio={user.bio}
        isVerified={user.isVerified}
      />
      <UserStats
        posts={user.stats.posts}
        followers={user.stats.followers}
        following={user.stats.following}
      />
      <UserPosts posts={user.posts} />
    </div>
  );
}

// UserHeader
function UserHeader({ avatar, name, username, bio, isVerified }) {
  return (
    <Card className="user-header">
      {avatar && (
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt={name} />
        </div>
      )}
      <div className="user-info">
        <div className="name-row">
          <h2 className="user-name">{name}</h2>
          {isVerified && (
            <span className="verified-badge">
              {/* ICON verified */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
                viewBox="0 0 512 512"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z"
                    fill="#4285f4"
                  />
                  <path
                    d="M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
          )}
        </div>
        <p className="user-username">@{username}</p>
        {bio && <p className="bio">{bio}</p>}
        <Button variant="primary" size="md" className="follow-btn">
          Follow
        </Button>
      </div>
    </Card>
  );
}
// UserPosts
function UserPosts({ posts = [] }) {
  if (posts.length === 0) {
    return (
      <Card className="user-posts">
        <p className="empty-state">Chưa có bài viết nào.</p>
      </Card>
    );
  }
  return (
    <div className="user-posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
// PostCard
function PostCard({ post }) {
  const { content, image, likes, comments, timestamp } = post;

  return (
    <Card className="post-card">
      {image && <img src={image} alt="Bài viết" className="post-image" />}

      <div className="post-content">
        <p>{content}</p>

        <div className="post-actions">
          <Button variant="ghost" size="sm" className="action-btn">
            ❤️ {likes}
          </Button>
          <Button variant="ghost" size="sm" className="action-btn">
            💬 {comments}
          </Button>
          <Button variant="ghost" size="sm" className="action-btn">
            🔁
          </Button>
        </div>

        <div className="post-timestamp">{timestamp}</div>
      </div>
    </Card>
  );
}
// UserStats
function UserStats({ posts, followers, following }) {
  const formatNumber = (num) => num.toLocaleString("en-US");

  return (
    <div className="user-stats">
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(posts)}</div>
        <div className="stat-label">Bài viết</div>
      </Button>
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(followers)}</div>
        <div className="stat-label">Người theo dõi</div>
      </Button>
      <Button variant="ghost" className="stat-item">
        <div className="stat-value">{formatNumber(following)}</div>
        <div className="stat-label">Đang theo dõi</div>
      </Button>
    </div>
  );
}

        `})]})}function I({products:a,onAddToCart:s}){return e.jsx("div",{className:"product-grid",children:a.map(t=>e.jsx(E,{product:t,onAddToCart:s},t.id))})}function E({product:a,onAddToCart:s}){const{name:t,price:r,image:o,rating:i,reviews:l,inStock:m=!0,discount:c=0}=a,h=c>0?r/(1-c/100):null;return e.jsxs(v,{className:`product-card ${m?"":"out-of-stock"}`,children:[e.jsx(A,{src:o,alt:t,discount:c,inStock:m}),e.jsxs("div",{className:"product-info",children:[e.jsx("h3",{className:"product-name",children:t}),e.jsx(R,{rating:i,reviews:l}),e.jsx(B,{price:r,originalPrice:h,currency:"USD"}),e.jsx(u,{variant:"primary",size:"md",className:"add-to-cart-btn",onClick:()=>s?.(a),disabled:!m,children:m?"Add to Cart":"Out of Stock"})]}),!m&&e.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function A({src:a,alt:s,discount:t=0,inStock:r=!0}){return e.jsxs("div",{className:"product-image-wrapper",children:[e.jsx("img",{src:a||"https://via.placeholder.com/300",alt:s,className:"product-img"}),t>0&&e.jsxs("span",{className:"discount-badge",children:["-",t,"%"]}),!r&&e.jsx("div",{className:"stock-overlay",children:"Out of Stock"})]})}function B({price:a,originalPrice:s,currency:t="USD"}){const r=s?s-a:0;return e.jsxs("div",{className:"product-price",children:[e.jsxs("span",{className:"current-price",children:[t," ",a.toFixed(2)]}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"original-price",children:[t," ",s.toFixed(2)]}),e.jsxs("span",{className:"savings",children:["Save ",t," ",r.toFixed(2)]})]})]})}function R({rating:a=0,reviews:s=0,size:t="medium"}){const r=Math.floor(a),o=a%1>=.5,i=5-r-(o?1:0);return e.jsxs("div",{className:`rating rating-${t}`,children:[e.jsxs("div",{className:"stars",children:["★".repeat(r),o&&"⯪","☆".repeat(i)]}),e.jsx("span",{className:"rating-value",children:a.toFixed(1)}),s>0&&e.jsxs("span",{className:"reviews-count",children:["(",s," reviews)"]})]})}const L=[{id:1,name:"Wireless Headphones",price:79.99,image:"https://placehold.co/600x400?text=Wireless%20Headphones",rating:4.5,reviews:128,inStock:!0,discount:20},{id:2,name:"Office Chair",price:299,image:"https://placehold.co/600x400?text=Office%20Chair",rating:4,reviews:45,inStock:!1},{id:3,name:"Desk Lamp",price:49,image:"https://placehold.co/600x400?text=Desk%20Lamp",rating:4.8,reviews:89,inStock:!0}];function M(){const a=s=>{alert(`Added ${s.name} to cart !`)};return e.jsxs(n,{children:[e.jsx(n.Header,{order:2,title:"ProductGrid"}),e.jsx(n.Description,{children:`
// ProductGrid.jsx
function ProductGrid({ products, onAddToCart }) {
  // TODO:
  // Render grid of ProductCard components
  // Pass onAddToCart down
  
  return (
    <div className="product-grid">
      {/* Your code */}
    </div>
  );
}

// ProductCard.jsx
function ProductCard({ product, onAddToCart }) {
  // Props: id, name, price, image, rating, inStock, discount
  
  // TODO:
  // - Product image
  // - Product name
  // - Price (hiển thị giá cũ nếu có discount)
  // - Rating stars
  // - Add to Cart button (disabled nếu out of stock)
  // - Discount badge nếu có
  // - Out of Stock overlay nếu !inStock
  
  return (
    <div className="product-card">
      {/* Your code */}
    </div>
  );
}

// ProductImage.jsx
function ProductImage({ src, alt, discount, inStock }) {
  // TODO:
  // - Image với fallback
  // - Discount badge overlay
  // - Out of stock overlay
  
  return (
    <div className="product-image">
      {/* Your code */}
    </div>
  );
}

// ProductPrice.jsx
function ProductPrice({ price, originalPrice, currency = 'USD' }) {
  // TODO:
  // - Current price (large, bold)
  // - Original price (strikethrough) nếu có discount
  // - Savings amount
  
  return (
    <div className="product-price">
      {/* Your code */}
    </div>
  );
}

// Rating.jsx
function Rating({ rating, reviews, size = 'medium' }) {
  // TODO:
  // - Star icons (filled/half/empty)
  // - Rating number (4.5)
  // - Reviews count (128 reviews)
  
  return (
    <div className="rating">
      {/* Your code */}
    </div>
  );
}



`}),e.jsx(n.Demo,{children:e.jsx(I,{products:L,onAddToCart:a})}),e.jsx(n.Code,{children:`
import { Card, Button } from "@ui";
// ProductGrid
export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// ProductCard
function ProductCard({ product, onAddToCart }) {
  const {
    name,
    price,
    image,
    rating,
    reviews,
    inStock = true,
    discount = 0,
  } = product;

  const originalPrice = discount > 0 ? price / (1 - discount / 100) : null;

  return (
    <Card className={\`product-card \${!inStock ? "out-of-stock" : ""}\`}>
      <ProductImage
        src={image}
        alt={name}
        discount={discount}
        inStock={inStock}
      />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        <Rating rating={rating} reviews={reviews} />

        <ProductPrice
          price={price}
          originalPrice={originalPrice}
          currency="USD"
        />

        <Button
          variant="primary"
          size="md"
          className="add-to-cart-btn"
          onClick={() => onAddToCart?.(product)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </Card>
  );
}
// ProductImage
function ProductImage({ src, alt, discount = 0, inStock = true }) {
  return (
    <div className="product-image-wrapper">
      <img
        src={src || "https://via.placeholder.com/300"}
        alt={alt}
        className="product-img"
      />

      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      {!inStock && <div className="stock-overlay">Out of Stock</div>}
    </div>
  );
}
//ProductPrice
function ProductPrice({ price, originalPrice, currency = "USD" }) {
  const savings = originalPrice ? originalPrice - price : 0;

  return (
    <div className="product-price">
      <span className="current-price">
        {currency} {price.toFixed(2)}
      </span>

      {originalPrice && (
        <>
          <span className="original-price">
            {currency} {originalPrice.toFixed(2)}
          </span>
          <span className="savings">
            Save {currency} {savings.toFixed(2)}
          </span>
        </>
      )}
    </div>
  );
}
//Rating
function Rating({ rating = 0, reviews = 0, size = "medium" }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={\`rating rating-\${size}\`}>
      <div className="stars">
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯪"}
        {"☆".repeat(emptyStars)}
      </div>

      <span className="rating-value">{rating.toFixed(1)}</span>
      {reviews > 0 && (
        <span className="reviews-count">({reviews} reviews)</span>
      )}
    </div>
  );
}

`})]})}const b={user:{name:"Admin User",avatar:"https://i.pravatar.cc/150?img=5"},sidebarItems:[{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"products",label:"Products",icon:"📦"},{id:"orders",label:"Orders",icon:"🛒"},{id:"customers",label:"Customers",icon:"👥"},{id:"analytics",label:"Analytics",icon:"📈"}],stats:[{title:"Total Revenue",value:"$45,231",icon:"💰",trend:"up",trendValue:"12%"},{title:"Orders",value:"1,234",icon:"🛒",trend:"up",trendValue:"8%"},{title:"Customers",value:"5,678",icon:"👥",trend:"down",trendValue:"3%"},{title:"Products",value:"890",icon:"📦",trend:"up",trendValue:"5%"}],notifications:5};function H(){const[a,s]=p.useState("dashboard"),[t,r]=p.useState(!1),[o,i]=p.useState(!1),l=d=>{s(d)},m=()=>{r(d=>!d)},c=()=>{i(d=>!d)},h=()=>{alert("Logged out!"),r(!1)},x=()=>{alert("All notifications marked as read!"),i(!1)};return e.jsxs("div",{className:"dashboard",children:[e.jsx(Y,{items:b.sidebarItems,activeItem:a,onItemClick:l}),e.jsxs("div",{className:"dashboard-main-content",children:[e.jsx(V,{user:b.user,notifications:b.notifications,onProfileClick:m,onNotificationClick:c}),t&&e.jsx("div",{className:"dashboard-dropdown-menu",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Profile"}),e.jsx("li",{children:"Settings"}),e.jsx("li",{onClick:h,children:"Logout"})]})}),e.jsxs(f,{isOpen:o,onClose:()=>i(!1),children:[e.jsx(f.Header,{onClose:()=>i(!1),children:"Notifications"}),e.jsx(f.Body,{children:e.jsxs("div",{className:"dashboard-modal-body",children:[e.jsxs("div",{className:"dashboard-notification-item",children:[e.jsx("span",{className:"dashboard-notification-icon",children:"🛒"}),e.jsxs("span",{className:"dashboard-notification-text",children:["New order received — ",e.jsx("strong",{children:"#1024"})]})]}),e.jsxs("div",{className:"dashboard-notification-item",children:[e.jsx("span",{className:"dashboard-notification-icon",children:"👤"}),e.jsxs("span",{className:"dashboard-notification-text",children:["User ",e.jsx("strong",{children:"John Doe"})," just registered"]})]}),e.jsxs("div",{className:"dashboard-notification-item",children:[e.jsx("span",{className:"dashboard-notification-icon",children:"💾"}),e.jsx("span",{className:"dashboard-notification-text",children:"Server backup completed successfully"})]})]})}),e.jsxs(f.Footer,{children:[e.jsx(u,{variant:"ghost",onClick:()=>i(!1),children:"Cancel"}),e.jsx(u,{variant:"primary",onClick:x,children:"Mark all as read"})]})]}),e.jsxs("main",{className:"dashboard-content",children:[a==="dashboard"&&e.jsx("section",{className:"dashboard-stats-grid",children:b.stats.map((d,g)=>e.jsx(z,{title:d.title,value:d.value,icon:d.icon,trend:d.trend,trendValue:d.trendValue},g))}),e.jsxs("section",{className:"dashboard-recent-activity",children:[e.jsx("h2",{children:"Recent Activity"}),e.jsxs("p",{children:["Showing data for:"," ",e.jsxs("strong",{children:[a.charAt(0).toUpperCase(),a.slice(1)]})]})]})]}),e.jsx("footer",{className:"dashboard-footer",children:e.jsx("p",{children:"© 2025 Your Company. All rights reserved."})})]})]})}function V({user:a,notifications:s=0,onProfileClick:t,onNotificationClick:r}){return e.jsxs("header",{className:"dashboard-header",children:[e.jsx(k,{placeholder:"Search...",icon:"🔍"}),e.jsxs("div",{className:"dashboard-user-menu",children:[e.jsxs("div",{className:"dashboard-notification-bell",onClick:r,children:["🔔",s>0&&e.jsx("span",{className:"dashboard-notification-badge",children:s})]}),e.jsxs("div",{className:"dashboard-user-avatar",onClick:t,role:"button",children:[e.jsx("img",{src:a.avatar,alt:a.name}),e.jsx("span",{className:"dashboard-user-name",children:a.name})]})]})]})}function Y({items:a=[],activeItem:s,onItemClick:t}){return e.jsxs("aside",{className:"dashboard-sidebar",children:[e.jsx("div",{className:"logo",children:e.jsx("h1",{children:"Dashboard"})}),e.jsx("nav",{className:"dashboard-nav",children:e.jsx("ul",{className:"dashboard-nav-list",children:a.map(r=>e.jsxs("li",{className:`dashboard-nav-item ${s===r.id?"active":""}`,onClick:()=>t(r.id),role:"button",children:[e.jsx("span",{className:"dashboard-nav-icon",children:r.icon}),e.jsx("span",{className:"dashboard-nav-label",children:r.label})]},r.id))})})]})}function z({title:a,value:s,icon:t,trend:r,trendValue:o}){const i=r==="up",l=i?"dashboard-trend-up":"dashboard-trend-down",m=i?"↗️":"↘️";return e.jsxs(v,{className:"dashboard-stat-card",children:[e.jsx("div",{className:"dashboard-stat-icon",children:t}),e.jsxs("div",{className:"dashboard-stat-info",children:[e.jsx("h3",{className:"dashboard-stat-title",children:a}),e.jsx("div",{className:"dashboard-stat-value",children:s})]}),e.jsxs("div",{className:`dashboard-trend ${l}`,children:[e.jsx("span",{className:"dashboard-trend-icon",children:m}),e.jsx("span",{className:"dashboard-trend-value",children:o})]})]})}function $(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:3,title:"Dashboard Layout"}),e.jsx(n.Description,{children:`
// Dashboard.jsx
function Dashboard() {
  // TODO:
  // Layout với:
  // - Sidebar (navigation)
  // - Header (user menu, notifications)
  // - Main content area
  // - Footer
  
  return (
    <div className="dashboard">
      {/* Your code */}
    </div>
  );
}

// Sidebar.jsx
function Sidebar({ items, activeItem, onItemClick }) {
  // TODO:
  // - Logo
  // - Navigation items
  // - Active state
  // - Icons cho mỗi item
  
  return (
    <aside className="sidebar">
      {/* Your code */}
    </aside>
  );
}

// Header.jsx
function Header({ user, notifications, onProfileClick, onNotificationClick }) {
  // TODO:
  // - Search bar
  // - Notification bell với badge count
  // - User menu dropdown
  
  return (
    <header className="header">
      {/* Your code */}
    </header>
  );
}

// StatCard.jsx
function StatCard({ title, value, icon, trend, trendValue }) {
  // TODO:
  // - Icon
  // - Title
  // - Large value number
  // - Trend indicator (up/down arrow với color)
  // - Trend percentage
  
  return (
    <div className="stat-card">
      {/* Your code */}
    </div>
  );
}

// Demo usage
const dashboardData = {
  user: {
    name: 'Admin User',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  sidebarItems: [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ],
  stats: [
    { title: 'Total Revenue', value: '$45,231', icon: '💰', trend: 'up', trendValue: '12%' },
    { title: 'Orders', value: '1,234', icon: '🛒', trend: 'up', trendValue: '8%' },
    { title: 'Customers', value: '5,678', icon: '👥', trend: 'down', trendValue: '3%' },
    { title: 'Products', value: '890', icon: '📦', trend: 'up', trendValue: '5%' }
  ]
};

`}),e.jsx(n.Demo,{children:e.jsx(H,{})}),e.jsx(n.Code,{children:`
import { Card, Input, Button, Modal } from "@ui";
import { useState } from "react";
import { dashboardData } from "../data/dashboardData";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNavClick = (id) => {
    setActiveItem(id);
  };

  const handleProfileClick = () => {
    setShowUserMenu((prev) => !prev);
  };

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleLogout = () => {
    alert("Logged out!");
    setShowUserMenu(false);
  };

  const markAllAsRead = () => {
    alert("All notifications marked as read!");
    setShowNotifications(false);
  };

  return (
    <div className="dashboard">
      <Sidebar
        items={dashboardData.sidebarItems}
        activeItem={activeItem}
        onItemClick={handleNavClick}
      />

      <div className="dashboard-main-content">
        <Header
          user={dashboardData.user}
          notifications={dashboardData.notifications}
          onProfileClick={handleProfileClick}
          onNotificationClick={handleNotificationClick}
        />

        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="dashboard-dropdown-menu">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}

        {/* Notifications Modal */}
        <Modal
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
        >
          <Modal.Header onClose={() => setShowNotifications(false)}>
            Notifications
          </Modal.Header>
          <Modal.Body>
            <div className="dashboard-modal-body">
              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">🛒</span>
                <span className="dashboard-notification-text">
                  New order received — <strong>#1024</strong>
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">👤</span>
                <span className="dashboard-notification-text">
                  User <strong>John Doe</strong> just registered
                </span>
              </div>

              <div className="dashboard-notification-item">
                <span className="dashboard-notification-icon">💾</span>
                <span className="dashboard-notification-text">
                  Server backup completed successfully
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={() => setShowNotifications(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          </Modal.Footer>
        </Modal>
        <main className="dashboard-content">
          {activeItem === "dashboard" && (
            <section className="dashboard-stats-grid">
              {dashboardData.stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  trendValue={stat.trendValue}
                />
              ))}
            </section>
          )}

          <section className="dashboard-recent-activity">
            <h2>Recent Activity</h2>
            <p>
              Showing data for:{" "}
              <strong>
                {activeItem.charAt(0).toUpperCase()}
                {activeItem.slice(1)}
              </strong>
            </p>
          </section>
        </main>

        <footer className="dashboard-footer">
          <p>© 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

/* Header Component */
function Header({
  user,
  notifications = 0,
  onProfileClick,
  onNotificationClick,
}) {
  return (
    <header className="dashboard-header">
      <Input placeholder="Search..." icon="🔍" />

      <div className="dashboard-user-menu">
        <div
          className="dashboard-notification-bell"
          onClick={onNotificationClick}
        >
          🔔
          {notifications > 0 && (
            <span className="dashboard-notification-badge">
              {notifications}
            </span>
          )}
        </div>

        <div
          className="dashboard-user-avatar"
          onClick={onProfileClick}
          role="button"
        >
          <img src={user.avatar} alt={user.name} />
          <span className="dashboard-user-name">{user.name}</span>
        </div>
      </div>
    </header>
  );
}

/* Sidebar Component */
function Sidebar({ items = [], activeItem, onItemClick }) {
  return (
    <aside className="dashboard-sidebar">
      <div className="logo">
        <h1>Dashboard</h1>
      </div>

      <nav className="dashboard-nav">
        <ul className="dashboard-nav-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={\`dashboard-nav-item \${
                activeItem === item.id ? "active" : ""
              }\`}
              onClick={() => onItemClick(item.id)}
              role="button"
            >
              <span className="dashboard-nav-icon">{item.icon}</span>
              <span className="dashboard-nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

/* StatCard Component */
function StatCard({ title, value, icon, trend, trendValue }) {
  const isUp = trend === "up";
  const trendColor = isUp ? "dashboard-trend-up" : "dashboard-trend-down";
  const trendIcon = isUp ? "↗️" : "↘️";

  return (
    <Card className="dashboard-stat-card">
      <div className="dashboard-stat-icon">{icon}</div>

      <div className="dashboard-stat-info">
        <h3 className="dashboard-stat-title">{title}</h3>
        <div className="dashboard-stat-value">{value}</div>
      </div>

      <div className={\`dashboard-trend \${trendColor}\`}>
        <span className="dashboard-trend-icon">{trendIcon}</span>
        <span className="dashboard-trend-value">{trendValue}</span>
      </div>
    </Card>
  );
}

`})]})}const q=[{value:"vn",label:"Vietnam"},{value:"us",label:"United States"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}];function J(){const[a,s]=p.useState({email:"",password:"",country:"",agreedToTerms:!1}),[t,r]=p.useState({}),o=c=>{const{name:h,value:x,type:d,checked:g}=c.target;s(w=>({...w,[h]:d==="checkbox"?g:x}))},i=()=>{s({email:"",password:"",country:"",agreedToTerms:!1}),r({})},l=()=>{const c={};return a.email.includes("@")||(c.email="Invalid email"),a.password.length<6&&(c.password="Password too short"),a.country||(c.country="Please select a country"),a.agreedToTerms||(c.terms="You must agree to terms"),c},m=c=>{const h=l();if(Object.keys(h).length>0){r(h);return}i(),alert("🎉 Registration successful!")};return e.jsxs("div",{className:"form-page",children:[e.jsx("h2",{className:"form-title",children:"Register Account"}),e.jsxs(G,{onSubmit:m,children:[e.jsx(N,{label:"Email",required:!0,error:t.email,children:e.jsx(j,{type:"email",name:"email",placeholder:"Enter your email",icon:"📧",value:a.email,onChange:o})}),e.jsx(N,{label:"Password",required:!0,error:t.password,children:e.jsx(j,{type:"password",name:"password",placeholder:"Enter password",icon:"🔒",value:a.password,onChange:o})}),e.jsx(N,{label:"Country",error:t.country,children:e.jsx(W,{name:"country",options:q,value:a.country,onChange:o,placeholder:"Select country"})}),e.jsx(K,{label:"I agree to terms and conditions",name:"agreedToTerms",checked:a.agreedToTerms,onChange:o}),t.terms&&e.jsx("div",{className:"form-error",children:t.terms}),e.jsx("button",{className:"submit-btn",type:"submit",children:"Register"})]})]})}function G({onSubmit:a,children:s}){const t=r=>{r.preventDefault();const o=new FormData(r.target);a(o)};return e.jsx("form",{className:"form",onSubmit:t,children:s})}function N({label:a,error:s,required:t,children:r}){return e.jsxs("div",{className:`form-field ${s?"has-error":""}`,children:[a&&e.jsxs("label",{className:"form-label",children:[a," ",t&&e.jsx("span",{className:"required-indicator",children:"*"})]}),e.jsx("div",{className:"form-input",children:r}),s&&e.jsx("div",{className:"form-error",children:s})]})}function j({type:a="text",placeholder:s,value:t,onChange:r,error:o,icon:i,...l}){return e.jsxs("div",{className:`input-wrapper ${o?"error":""}`,children:[i&&e.jsx("span",{className:"input-icon",children:i}),e.jsx("input",{className:"input-element",type:a,placeholder:s,value:t,onChange:r,...l})]})}function W({options:a=[],value:s,onChange:t,placeholder:r,...o}){return e.jsxs("select",{className:"select-element",value:s,onChange:t,...o,children:[e.jsx("option",{value:"",children:r||"Select an option"}),a.map((i,l)=>e.jsx("option",{value:i.value||i.code,children:i.label||i.name},l))]})}function K({label:a,checked:s,onChange:t,...r}){return e.jsxs("label",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:t,...r}),e.jsx("span",{className:"checkbox-custom"}),e.jsx("span",{className:"checkbox-label",children:a})]})}function X(){return e.jsxs(n,{children:[e.jsx(n.Header,{order:4,title:"Form Components (Challenge)"}),e.jsx(n.Description,{children:`
// Form.jsx
function Form({ onSubmit, children }) {
  // TODO:
  // - Handle form submission
  // - Prevent default
  // - Pass handleSubmit down via children composition
  
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

// FormField.jsx
function FormField({ label, error, required, children }) {
  // TODO:
  // - Label với required indicator
  // - Children (input component)
  // - Error message
  
  return (
    <div className="form-field">
      {/* Your code */}
    </div>
  );
}

// Input.jsx
function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props 
}) {
  // TODO:
  // - Input với all native props
  // - Icon (left/right)
  // - Error state styling
  
  return (
    <div className="input-wrapper">
      {/* Your code */}
    </div>
  );
}

// Select.jsx
function Select({ options, value, onChange, placeholder, ...props }) {
  // TODO:
  // - Select với options
  // - Placeholder option
  // - Custom styling
  
  return (
    <select value={value} onChange={onChange} {...props}>
      {/* Your code */}
    </select>
  );
}

// Checkbox.jsx
function Checkbox({ label, checked, onChange, ...props }) {
  // TODO:
  // - Custom styled checkbox
  // - Label
  
  return (
    <label className="checkbox">
      {/* Your code */}
    </label>
  );
}

// Usage Example
function RegistrationForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Email" required error={errors.email}>
        <Input
          type="email"
          placeholder="Enter your email"
          icon="📧"
          value={email}
          onChange={handleEmailChange}
        />
      </FormField>
      
      <FormField label="Password" required>
        <Input
          type="password"
          placeholder="Enter password"
          icon="🔒"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormField>
      
      <FormField label="Country">
        <Select
          options={countries}
          value={country}
          onChange={handleCountryChange}
          placeholder="Select country"
        />
      </FormField>
      
      <Checkbox
        label="I agree to terms and conditions"
        checked={agreedToTerms}
        onChange={handleTermsChange}
      />
      
      <Button type="submit" variant="primary">
        Register
      </Button>
    </Form>
  );
}

`}),e.jsx(n.Demo,{children:e.jsx(J,{})}),e.jsx(n.Code,{children:`
import { useState } from "react";
import { countries } from "../data/countries";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      country: "",
      agreedToTerms: false,
    });
    setErrors({});
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password too short";
    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.agreedToTerms) newErrors.terms = "You must agree to terms";
    return newErrors;
  };

  const handleSubmit = (formDataObj) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    resetForm();
    alert("🎉 Registration successful!");
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Register Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            icon="📧"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Password" required error={errors.password}>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            icon="🔒"
            value={formData.password}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Country" error={errors.country}>
          <Select
            name="country"
            options={countries}
            value={formData.country}
            onChange={handleChange}
            placeholder="Select country"
          />
        </FormField>

        <Checkbox
          label="I agree to terms and conditions"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
        />
        {errors.terms && <div className="form-error">{errors.terms}</div>}

        <button className="submit-btn" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}

export default RegistrationForm;

//Form
function Form({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

//FormField
function FormField({ label, error, required, children }) {
  return (
    <div className={\`form-field \${error ? "has-error" : ""}\`}>
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-indicator">*</span>}
        </label>
      )}
      <div className="form-input">{children}</div>
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}
//Input
function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  ...props
}) {
  return (
    <div className={\`input-wrapper \${error ? "error" : ""}\`}>
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className="input-element"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
//Select
function Select({ options = [], value, onChange, placeholder, ...props }) {
  return (
    <select
      className="select-element"
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="">{placeholder || "Select an option"}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt.code}>
          {opt.label || opt.name}
        </option>
      ))}
    </select>
  );
}

//Checkbox
function Checkbox({ label, checked, onChange, ...props }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      <span className="checkbox-custom" />
      <span className="checkbox-label">{label}</span>
    </label>
  );
}

`})]})}const C={1:U,2:M,3:$,4:X},ae=()=>e.jsxs("div",{className:"day-content",children:[e.jsxs("div",{className:"day-header",children:[e.jsxs("div",{className:"day-header-content",children:[e.jsx(S,{size:32,color:"#00D9FF"}),e.jsxs("div",{children:[e.jsx("h1",{className:"day-title",children:"Ngày 3"}),e.jsx("p",{className:"day-subtitle",children:"Components Fundamentals"})]})]}),e.jsxs("section",{className:"lesson-goal",children:[e.jsx("h2",{children:"🎯 Mục tiêu hôm nay"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Hiểu sâu về Function Components"}),e.jsx("li",{children:"Mastering Props: passing data, prop types, default props"}),e.jsx("li",{children:"Props Destructuring cho code sạch hơn"}),e.jsx("li",{children:"Children prop và component composition"}),e.jsx("li",{children:"Prop Drilling: vấn đề và giải pháp cơ bản"})]})]})]}),e.jsx("div",{className:"exercises-list",children:Object.keys(C).map(a=>{const s=C[a];return s?e.jsx(s,{},a):null})})]});export{ae as default};
