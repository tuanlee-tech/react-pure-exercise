export const users = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  avatar: "https://i.pravatar.cc/150?img=1",
  bio: "Software Developer | React Enthusiast",
  isVerified: true,
  stats: {
    posts: 145,
    followers: 2340,
    following: 890,
  },
  posts: [
    {
      id: 1,
      content: "Just launched my new project!",
      image: "https://placehold.co/600x400?text=Post%20Image",
      likes: 89,
      comments: 12,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      content: "Learning React is fun!",
      likes: 45,
      comments: 5,
      timestamp: "1 day ago",
    },
  ],
}