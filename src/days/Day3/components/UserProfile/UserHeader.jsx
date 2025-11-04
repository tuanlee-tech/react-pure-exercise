export default function UserHeader({
  avatar,
  name,
  username,
  bio,
  isVerified,
}) {
  return (
    <div className="user-header">
      {avatar && (
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt={name} />
        </div>
      )}
      <div className="user-info">
        <div className="name-row">
          <h2 className="user-name">{name}</h2>
          {isVerified && <span className="verified-badge">Verified</span>}
        </div>
        <p className="user-name">@{username}</p>
        {bio && <p className="bio">{bio}</p>}
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
}
