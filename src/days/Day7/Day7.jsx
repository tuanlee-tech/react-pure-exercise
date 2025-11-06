import ShoppingCart from "./components/ShoppingCart";
import "./styles.css";
const Day7 = () => {
  return (
    <>
      <h2>useReducer - Complex State Logic</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: Shopping Cart với useReducer</p>
        <ShoppingCart />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 2: User Authentication Flow</p>
        <div></div>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: Quiz App với Timer</p>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 4: Kanban Board</p>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 5: Multi-Step Checkout (Challenge)</p>
      </div>
    </>
  );
};

export default Day7;
