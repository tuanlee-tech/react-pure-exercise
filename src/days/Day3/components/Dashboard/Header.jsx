// Header.jsx
function Header({
  user,
  notifications = 0,
  onProfileClick,
  onNotificationClick,
}) {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="user-menu">
        <button className="notification-bell" onClick={onNotificationClick}>
          🔔
          {notifications > 0 && (
            <span className="notification-badge">{notifications}</span>
          )}
        </button>

        <div className="user-avatar" onClick={onProfileClick} role="button">
          <img src={user.avatar} alt={user.name} />
          <span className="user-name">{user.name}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
