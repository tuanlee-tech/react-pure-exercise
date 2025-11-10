import { Code2 } from "lucide-react";
import ExerciseCard from "../../components/ExerciseCard";
import "../../assets/styles.css";

const exercises = [
  {
    id: 1,
    title: "Đề bài 1",
    description: `Product Card Component
    Tạo component hiển thị thông tin sản phẩm:
    function ProductCard() {
    const product = {
      name: "Wireless Headphones",
      price: 99.99,
      currency: "USD",
      inStock: true,
      rating: 4.5,
      reviews: 128,
      discount: 20, // percent
      image: "https://via.placeholder.com/200"
    };

    // TODO: 
    // 1. Hiển thị ảnh sản phẩm
    // 2. Hiển thị tên và giá (tính giá sau discount)
    // 3. Hiển thị rating và số reviews
    // 4. Hiển thị badge "In Stock" hoặc "Out of Stock" với màu khác nhau
    // 5. Hiển thị % discount nếu có
    
    return (
      <div className="product-card">
        {/* Your code here */}
      </div>
    );
  }

    `,
    solution: `import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;`,
  },
  // Thêm các bài tập khác của Day 1
];

const Day3 = () => {
  return (
    <div className="day-content">
      <div className="day-header">
        <div className="day-header-content">
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 className="day-title">Day 1</h1>
            <p className="day-subtitle">React Basics</p>
          </div>
        </div>
      </div>

      <div className="exercises-list">
        {exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>
    </div>
  );
};

export default Day3;
