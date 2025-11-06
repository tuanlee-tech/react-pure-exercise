import { Code2 } from "lucide-react";
import { styles } from "../assets/styles";
import ExerciseCard from "./ExerciseCard";

const DayContent = ({ day }) => {
  const exercises = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Exercise ${i + 1}`,
    description: `Đề bài ${
      i + 1
    }: Viết component để xử lý state management, props drilling và event handling trong React...`,
    solution: `// Solution for exercise ${
      i + 1
    }\nimport { useState } from 'react';\n\nconst Component${
      i + 1
    } = () => {\n  const [state, setState] = useState(null);\n  \n  const handleClick = () => {\n    setState('Updated!');\n  };\n  \n  return (\n    <div>\n      <h2>Exercise ${
      i + 1
    }</h2>\n      <p>State: {state}</p>\n      <button onClick={handleClick}>\n        Click me\n      </button>\n    </div>\n  );\n};\n\nexport default Component${
      i + 1
    };`,
  }));

  return (
    <div style={styles.dayContent}>
      <div style={styles.dayHeader}>
        <div style={styles.dayHeaderContent}>
          <Code2 size={32} color="#00D9FF" />
          <div>
            <h1 style={styles.dayTitle}>Day {day}</h1>
            <p style={styles.daySubtitle}>5 React exercises to master</p>
          </div>
        </div>
      </div>

      <div style={styles.exercisesList}>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};
export default DayContent;
