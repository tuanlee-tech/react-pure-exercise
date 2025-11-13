import ExerciseCard from "../../../../../components/ExerciseCard";
import QuizApp from "./components/QuizApp";
import "./styles.css";
export default function Exercise3() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={3} title="Quiz App với Timer" />

      <ExerciseCard.Description>
        {`
// TODO: Implement quiz app với useReducer

const QUIZ_ACTIONS = {
  START_QUIZ: 'START_QUIZ',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREV_QUESTION: 'PREV_QUESTION',
  SUBMIT_QUIZ: 'SUBMIT_QUIZ',
  RESTART_QUIZ: 'RESTART_QUIZ',
  TICK: 'TICK' // Countdown timer
};

const quizQuestions = [
  {
    id: 1,
    question: 'React được phát triển bởi công ty nào?',
    options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
    correctAnswer: 1
  },
  {
    id: 2,
    question: 'Hook nào dùng để quản lý state?',
    options: ['useEffect', 'useState', 'useContext', 'useMemo'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'JSX là viết tắt của gì?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'JSON XML'],
    correctAnswer: 0
  },
  // Thêm câu hỏi khác...
];

function quizReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   status: 'idle' | 'active' | 'finished',
  //   currentQuestionIndex: number,
  //   answers: { questionId: selectedOption },
  //   timeRemaining: number (seconds),
  //   score: number | null,
  //   startTime: timestamp,
  //   endTime: timestamp
  // }

  // Features:
  // - Start quiz (set timeRemaining = 300 = 5 phút)
  // - Answer question (lưu vào answers object)
  // - Next/Previous question
  // - Submit quiz (tính score)
  // - Timer countdown (TICK action mỗi giây)
  // - Auto submit khi hết giờ
  // - Restart quiz
}

function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, {
    status: 'idle',
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 300, // 5 phút
    score: null,
    startTime: null,
    endTime: null
  });

  // TODO: Setup timer với useEffect
  // useEffect(() => {
  //   if (state.status === 'active' && state.timeRemaining > 0) {
  //     const timer = setInterval(() => {
  //       dispatch({ type: QUIZ_ACTIONS.TICK });
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   } else if (state.timeRemaining === 0) {
  //     // Auto submit
  //   }
  // }, [state.status, state.timeRemaining]);

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  // Format thời gian: mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="quiz-app">
      {state.status === 'idle' && (
        <div className="quiz-start">
          <h1>Quiz React</h1>
          <p>Tổng số câu hỏi: {quizQuestions.length}</p>
          <p>Thời gian: 5 phút</p>
          <button onClick={() => dispatch({ type: QUIZ_ACTIONS.START_QUIZ })}>
            Bắt đầu
          </button>
        </div>
      )}

      {state.status === 'active' && (
        <div className="quiz-active">
          {/* Timer */}
          <div className="timer">
            Thời gian còn lại: {formatTime(state.timeRemaining)}
          </div>

          {/* Progress */}
          <div className="progress">
            Câu {state.currentQuestionIndex + 1} / {quizQuestions.length}
            <div className="progress-bar" style={{ width: \`\${progress}%\` }} />
          </div>

          {/* Question */}
          <div className="question">
            {/* TODO: Render question và options */}
          </div>

          {/* Navigation */}
          <div className="navigation">
            {/* TODO: Previous, Next, Submit buttons */}
          </div>
        </div>
      )}

      {state.status === 'finished' && (
        <div className="quiz-results">
          {/* TODO: Hiển thị kết quả, review answers */}
        </div>
      )}
    </div>
  );
}


`}
      </ExerciseCard.Description>

      <ExerciseCard.Demo>
        <QuizApp />
      </ExerciseCard.Demo>

      <ExerciseCard.Code>
        {`

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
