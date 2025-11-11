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
