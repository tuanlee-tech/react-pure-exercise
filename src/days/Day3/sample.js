export const sampleUser = {
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
};
export const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'https://placehold.co/600x400?text=Wireless%20Headphones',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    discount: 20
  },
  {
    id: 2,
    name: 'Office Chair',
    price: 299,
    image: 'https://placehold.co/600x400?text=Office%20Chair',
    rating: 4.0,
    reviews: 45,
    inStock: false
  },
  {
    id: 3,
    name: 'Desk Lamp',
    price: 49,
    image: 'https://placehold.co/600x400?text=Desk%20Lamp',
    rating: 4.8,
    reviews: 89,
    inStock: true
  }
];
export const dashboardData = {
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
  ],
  notifications: 5
};
export const countries = [
  { value: 'vn', label: 'Vietnam' },
  { value: 'us', label: 'United States' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
];