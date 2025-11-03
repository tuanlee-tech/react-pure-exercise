import BlogPosts from "./components/BlogPosts";
import NotificationCenter from "./components/NotificationCenter";
import ProductFilter from "./components/ProductFilter";
import UserDashboard from "./components/UserDashboard";
import "./styles.css";
const Day2 = () => {
  return (
    <>
      <h2>JSX & Rendering Basics</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: Exercise 1: User Dashboard</p>
        <UserDashboard />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 2: Product Filter</p>
        <ProductFilter />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: Notification Center</p>
        <NotificationCenter />
      </div>

      <div className="exercise-wrapper">
        <p>Exercise 4: Blog Posts with Tags (Challenge)</p>
        <BlogPosts />
      </div>
    </>
  );
};

export default Day2;
