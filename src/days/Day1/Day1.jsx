import DynamicGreeting from "./components/DynamicGreeting";
import ProductCard from "./components/ProductCard";
import UserDashboard from "./components/UserDashboard";
import WeatherWidget from "./components/WeatherWidget";
import "./styles.css";
const Day1 = () => {
  return (
    <>
      <h2>JSX & Rendering Basics</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: Product Card Component</p>
        <ProductCard />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 2: Weather Widget</p>
        <div>
          <WeatherWidget />
        </div>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: User Stats Dashboard</p>
        <UserDashboard />
      </div>

      <div className="exercise-wrapper">
        <p>Exercise 4: Dynamic Greeting (Challenge)</p>
        <DynamicGreeting />
      </div>
    </>
  );
};

export default Day1;
