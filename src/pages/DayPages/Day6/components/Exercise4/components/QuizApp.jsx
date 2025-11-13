import { Button, Card } from "@ui";
import { useEffect, useState } from "react";

const initialTime = 30;

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [answerSelected, setAnswerSelected] = useState([]);

  const totalQuest = quizData.length;
  const progress = ((currentIndex + 1) / totalQuest) * 100;
  const currentAnswer = answerSelected[currentIndex];

  // Timer
  useEffect(() => {
    if (timeRemaining <= 0 || isShowResult) {
      setIsShowResult(true);
      return;
    }
    const timer = setInterval(() => setTimeRemaining((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, isShowResult]);

  const handleSelectAnswer = (idx) => {
    if (isShowResult) return;
    const newAnswers = [...answerSelected];
    newAnswers[currentIndex] = idx;
    setAnswerSelected(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < totalQuest - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsShowResult(false);
    setAnswerSelected([]);
    setTimeRemaining(initialTime);
  };

  const totalCorrect = answerSelected.filter(
    (ans, i) => ans === quizData[i].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz App</h1>

      {/* Thanh progress tự tạo */}
      <Card className="quiz-progress-wrapper">
        <div className="quiz-progress-header">
          <span>
            Câu {currentIndex + 1} / {totalQuest}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Card>

      {/* Timer */}
      {!isShowResult && <div className="quiz-timer">⏱: {timeRemaining}s</div>}

      {/* Câu hỏi */}
      <Card className="quiz-question-card">
        <div className="quiz-question-header">
          <div className="quiz-question-number">Câu hỏi {currentIndex + 1}</div>
          <h2 className="quiz-question-text">
            {quizData[currentIndex].question}
          </h2>
        </div>

        <ul className="quiz-options">
          {quizData[currentIndex].options.map((option, idx) => {
            const isSelected = currentAnswer === idx;
            const isCorrect = idx === quizData[currentIndex].correctAnswer;

            return (
              <li
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={`
                  quiz-option
                  ${isSelected ? "selected" : ""}
                  ${isShowResult && isCorrect ? "correct" : ""}
                  ${isShowResult && isSelected && !isCorrect ? "incorrect" : ""}
                `
                  .trim()
                  .replace(/\s+/g, " ")}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </Card>

      {/* Nút điều hướng */}
      <div className="quiz-controls">
        <Button
          variant="secondary"
          size="lg"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Trước
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={handleNext}
          disabled={!isShowResult && currentAnswer === undefined}
        >
          {currentIndex === totalQuest - 1 ? "Nộp" : "Tiếp"}
        </Button>
      </div>

      {/* Kết quả */}
      {isShowResult && (
        <Card className="quiz-result">
          <h3>Kết quả của bạn</h3>
          <div className="quiz-result-score">
            {totalCorrect} / {totalQuest}
          </div>
          <p style={{ color: "#94a3b8", margin: "16px 0" }}>
            {totalCorrect === totalQuest
              ? "Hoàn hảo!"
              : totalCorrect >= totalQuest * 0.7
              ? "Rất tốt!"
              : "Cố lên nhé!"}
          </p>
          <Button variant="primary" size="lg" onClick={handleRestart}>
            Làm lại
          </Button>
        </Card>
      )}
    </div>
  );
}

/* Dữ liệu quiz */
const quizData = [
  {
    id: 1,
    question: "React được tạo bởi?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "React sử dụng ngôn ngữ lập trình nào?",
    options: ["Python", "C++", "JavaScript", "Dart"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Hook nào dùng để quản lý state trong React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "JSX là gì?",
    options: [
      "Một framework CSS",
      "Một cú pháp mở rộng cho JavaScript",
      "Một ngôn ngữ mới",
      "Một API của Node.js",
    ],
    correctAnswer: 1,
  },
];
