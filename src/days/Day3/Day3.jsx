import Dashboard from "./components/Dashboard/Dashboard";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import UserProfile from "./components/UserProfile/UserProfile";
import { sampleProducts, sampleUser } from "./sample";

import "./styles.css";

const Day3 = () => {
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart !`);
  };
  return (
    <>
      <h2>Components Fundamentals</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: User Profile Components</p>
        <UserProfile user={sampleUser} />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 2: E-commerce Product Components</p>
        <ProductGrid products={sampleProducts} onAddToCart={handleAddToCart} />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: Dashboard Layout</p>
        <Dashboard />
      </div>

      <div className="exercise-wrapper">
        <p>Exercise 4: Form Components (Challenge)</p>
        <RegistrationForm />
      </div>
    </>
  );
};

export default Day3;
