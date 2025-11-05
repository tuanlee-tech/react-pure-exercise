import { useEffect, useState } from "react";
const initialTime = 30;
export default function QuizApp() {
  // TODO:
  // 1. Current question index state
  // 2. Selected answers state (array)
  // 3. Show result state (boolean)
  // 4. Time remaining state (optional - countdown timer)
  // 5. Chức năng:
  //    - Select answer
  //    - Next question
  //    - Previous question
  //    - Submit quiz
  //    - Show score
  //    - Restart quiz
  // 6. Highlight correct/incorrect answers khi submit
  // 7. Progress indicator
  // 8. Prevent changing answer after submit
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [answerSelected, setAnswerSelected] = useState(() => []);

  useEffect(() => {
    if (timeRemaining <= 0 || isShowResult) {
      setTimeRemaining((prev) => Math.max(prev, 0)); // đảm bảo không âm
      setIsShowResult(true); // show kết quả
      return; // dừng, không tạo interval
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerId); // ngưng interval khi về 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // cleanup khi unmount
  }, [timeRemaining, isShowResult]);

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) setCurrentIndex((prev) => prev + 1);
    else setIsShowResult(true);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };
  const handleSelectAnswer = (answerIdx) => {
    if (isShowResult) return;
    const newAnswerSelected = [...answerSelected];
    const isCorrect = quizData[currentIndex].correctAnswer === answerIdx;
    newAnswerSelected[currentIndex] = { answerIdx, isCorrect };
    setAnswerSelected(newAnswerSelected);
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setIsShowResult(false);
    setAnswerSelected([]);
    setTimeRemaining(initialTime);
  };
  const totalQuest = quizData.length;
  const currentAnswer = answerSelected[currentIndex]?.answerIdx;
  const isLastQuest = currentIndex === totalQuest - 1;
  const progress = ((currentIndex + 1) / totalQuest) * 100;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">🧠 Quiz App</h1>

      {/* Thanh tiến độ */}
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {!isShowResult && <div className="timer">⏱ {timeRemaining}s</div>}

      <div className={`quiz-questions`}>
        {/* Câu hỏi */}
        {quizData.map((quest, idx) => (
          <div
            key={quest.id}
            className={`question-box ${currentIndex === idx ? `active` : ``} `}
          >
            <h2 className="question-text">{quest.question}</h2>

            <ul className="options">
              {quest.options.map((answer, answerIdx) => {
                let optionClass = "option";

                if (isShowResult) {
                  if (answerIdx === currentAnswer) {
                    optionClass +=
                      currentAnswer === quest.correctAnswer
                        ? " selected correct"
                        : " selected incorrect";
                  } else if (answerIdx === quest.correctAnswer) {
                    optionClass += " correct";
                  }
                } else if (answerIdx === currentAnswer) {
                  optionClass += " selected";
                }

                return (
                  <li
                    key={answer}
                    onClick={() => handleSelectAnswer(answerIdx)}
                    className={`${optionClass}`}
                  >
                    {answer}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {/* Kết quả (hiện sau khi nộp) */}
        <ResultBox
          answerSelected={answerSelected}
          totalQuest={totalQuest}
          isOpen={isShowResult}
          onRestart={handleRestart}
        />
      </div>
      {/* Nút điều hướng */}
      <div className="controls">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn prev"
        >
          ← Trước
        </button>
        <button
          onClick={handleNext}
          disabled={currentAnswer === undefined}
          className="btn next"
        >
          {isLastQuest ? "Nộp bài" : "Tiếp"} →
        </button>
      </div>
    </div>
  );
}
function ResultBox({ isOpen, answerSelected, totalQuest, onRestart }) {
  if (!isOpen) return null;
  const totalCorrect = answerSelected.reduce(
    (acc, answer) => (acc += answer.isCorrect),
    0
  );
  console.log("Total Correct: ", totalCorrect);
  return (
    <div className="result-box">
      <h3>Kết quả của bạn: {`${totalCorrect} / ${totalQuest}`} </h3>
      <button onClick={onRestart} className="btn restart">
        Làm lại
      </button>
    </div>
  );
}
const quizData = [
  {
    id: 1,
    question: "React được tạo bởi?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1, // Facebook
  },
  {
    id: 2,
    question: "React sử dụng ngôn ngữ lập trình nào?",
    options: ["Python", "C++", "JavaScript", "Dart"],
    correctAnswer: 2, // JavaScript
  },
  {
    id: 3,
    question: "Hook nào dùng để quản lý state trong React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 0, // useState
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
    correctAnswer: 1, // Một cú pháp mở rộng cho JavaScript
  },
];
