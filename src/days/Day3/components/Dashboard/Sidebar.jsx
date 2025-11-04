// Sidebar.jsx
function Sidebar({ items = [], activeItem, onItemClick }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>Dashboard</h1>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          {items.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => onItemClick(item.id)}
              role="button"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
