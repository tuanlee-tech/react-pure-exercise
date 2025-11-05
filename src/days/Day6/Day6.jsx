import AdvancedCounter from "./components/AdvancedCounter";
import ExpenseTracker from "./components/ExpenseTracker";
import MultiStepForm from "./components/MultiStepForm";
import QuizApp from "./components/QuizApp";
import TodoApp from "./components/TodoApp";
import "./styles.css";
const Day6 = () => {
  return (
    <>
      <h2>useState Mastery</h2>
      <hr />
      <div className="exercise-wrapper">
        <p>Exercise 1: Counter Nâng Cao</p>
        <AdvancedCounter />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 2: Todo App Hoàn Chỉnh</p>
        <div>
          <TodoApp />
        </div>
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 3: Multi-Step Form</p>
        <MultiStepForm />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 4: Quiz App</p>
        <QuizApp />
      </div>
      <hr />

      <div className="exercise-wrapper">
        <p>Exercise 5: Expense Tracker (Challenge)</p>
        <ExpenseTracker />
      </div>
    </>
  );
};

export default Day6;
