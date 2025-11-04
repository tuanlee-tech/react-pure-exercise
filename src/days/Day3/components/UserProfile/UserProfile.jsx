import UserHeader from "./UserHeader";
import UserPosts from "./UserPosts";
import UserStats from "./UserStats";

export default function UserProfile({ user }) {
  // TODO:
  // Render user profile với:
  // - UserHeader (avatar, name, bio)
  // - UserStats (posts, followers, following)
  // - UserPosts (list of posts)

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
        following={user.stats.followers}
      />
      <UserPosts posts={user.posts} />
    </div>
  );
}
