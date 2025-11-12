import ExerciseCard from "../../../../../components/ExerciseCard";
import UserProfile from "./components/UserProfile";
import { users } from "./data/users";
import "./styles.css";
export default function Exercise1() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={1} title="UserProfile" />

      <ExerciseCard.Description>
        {`
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

`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <UserProfile user={users} />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`
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

        `}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
