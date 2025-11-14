import ExerciseCard from "../../../../../components/ExerciseCard";
import QuizApp from "./components/QuizApp.jsx";
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
// QuizApp.jsx
import { Button, Card } from "@ui";
import { useEffect, useReducer } from "react";

const QUIZ_ACTIONS = {
  START_QUIZ: "START_QUIZ",
  ANSWER_QUESTION: "ANSWER_QUESTION",
  NEXT_QUESTION: "NEXT_QUESTION",
  PREV_QUESTION: "PREV_QUESTION",
  SUBMIT_QUIZ: "SUBMIT_QUIZ",
  RESTART_QUIZ: "RESTART_QUIZ",
  TICK: "TICK",
};

const quizQuestions = [
  {
    id: 1,
    question: "React được phát triển bởi công ty nào?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Hook nào dùng để quản lý state?",
    options: ["useEffect", "useState", "useContext", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "JSX là viết tắt của gì?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "JSON XML",
    ],
    correctAnswer: 0,
  },
];

function quizReducer(state, action) {
  switch (action.type) {
    case QUIZ_ACTIONS.START_QUIZ:
      return {
        ...state,
        status: "active",
        startTime: Date.now(),
        timeRemaining: 300,
        currentQuestionIndex: 0,
        answers: {},
        score: null,
      };
    case QUIZ_ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answerIndex },
      };
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          quizQuestions.length - 1
        ),
      };
    case QUIZ_ACTIONS.PREV_QUESTION:
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };
    case QUIZ_ACTIONS.SUBMIT_QUIZ: {
      const score = quizQuestions.reduce(
        (acc, q) => acc + (state.answers[q.id] === q.correctAnswer ? 1 : 0),
        0
      );
      return { ...state, status: "finished", score, endTime: Date.now() };
    }
    case QUIZ_ACTIONS.RESTART_QUIZ:
      return {
        status: "idle",
        currentQuestionIndex: 0,
        answers: {},
        timeRemaining: 300,
        score: null,
        startTime: null,
        endTime: null,
      };
    case QUIZ_ACTIONS.TICK:
      if (state.timeRemaining <= 1) {
        const score = quizQuestions.reduce(
          (acc, q) => acc + (state.answers[q.id] === q.correctAnswer ? 1 : 0),
          0
        );
        return {
          ...state,
          status: "finished",
          score,
          timeRemaining: 0,
          endTime: Date.now(),
        };
      }
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    default:
      return state;
  }
}

export default function QuizApp() {
  const [state, dispatch] = useReducer(quizReducer, {
    status: "idle",
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 300,
    score: null,
    startTime: null,
    endTime: null,
  });

  useEffect(() => {
    if (state.status === "active" && state.timeRemaining > 0) {
      const timer = setInterval(
        () => dispatch({ type: QUIZ_ACTIONS.TICK }),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [state.status, state.timeRemaining]);

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const progress =
    ((state.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const formatTime = (seconds) =>
    \`\${Math.floor(seconds / 60)}:\${(seconds % 60).toString().padStart(2, "0")}\`;

  return (
    <div className="quizapp-app">
      {state.status === "idle" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <Card.Title className="quizapp-card-title">Quiz React</Card.Title>
            <Card.Subtitle className="quizapp-card-subtitle">
              Tổng {quizQuestions.length} câu hỏi, 5 phút
            </Card.Subtitle>
          </Card.Header>
          <Card.Content>
            <Button
              variant="primary"
              size="lg"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.START_QUIZ })}
            >
              Bắt đầu
            </Button>
          </Card.Content>
        </Card>
      )}

      {state.status === "active" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <div className="quizapp-timer">
              Thời gian còn lại: {formatTime(state.timeRemaining)}
            </div>
          </Card.Header>
          <Card.Content>
            <div className="quizapp-progress-container">
              <div
                className="quizapp-progress-bar"
                style={{ width: \`\${progress}%\` }}
              ></div>
            </div>

            <div className="quizapp-question">{currentQuestion.question}</div>
            <div className="quizapp-options">
              {currentQuestion.options.map((opt, i) => (
                <Button
                  key={i}
                  variant={
                    state.answers[currentQuestion.id] === i
                      ? "secondary"
                      : "ghost"
                  }
                  size="md"
                  className="quizapp-option-button"
                  onClick={() =>
                    dispatch({
                      type: QUIZ_ACTIONS.ANSWER_QUESTION,
                      questionId: currentQuestion.id,
                      answerIndex: i,
                    })
                  }
                >
                  {opt}
                </Button>
              ))}
            </div>
          </Card.Content>
          <Card.Footer className="quizapp-navigation">
            <Button
              variant="ghost"
              size="md"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.PREV_QUESTION })}
              disabled={state.currentQuestionIndex === 0}
            >
              Previous
            </Button>
            {state.currentQuestionIndex < quizQuestions.length - 1 ? (
              <Button
                variant="primary"
                size="md"
                onClick={() => dispatch({ type: QUIZ_ACTIONS.NEXT_QUESTION })}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => dispatch({ type: QUIZ_ACTIONS.SUBMIT_QUIZ })}
              >
                Submit
              </Button>
            )}
          </Card.Footer>
        </Card>
      )}

      {state.status === "finished" && (
        <Card className="quizapp-card">
          <Card.Header className="quizapp-card-header">
            <Card.Title className="quizapp-card-title">Kết quả</Card.Title>
            <Card.Subtitle className="quizapp-card-subtitle">
              Bạn đạt {state.score}/{quizQuestions.length} điểm
            </Card.Subtitle>
          </Card.Header>
          <Card.Content>
            {quizQuestions.map((q) => (
              <div key={q.id} className="quizapp-question">
                <div>{q.question}</div>
                <div className="quizapp-options">
                  {q.options.map((opt, i) => (
                    <Button
                      key={i}
                      variant={
                        q.correctAnswer === i
                          ? "primary"
                          : state.answers[q.id] === i
                          ? "secondary"
                          : "ghost"
                      }
                      size="md"
                      className="quizapp-option-button"
                      disabled
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </Card.Content>
          <Card.Footer className="quizapp-navigation">
            <Button
              variant="primary"
              size="md"
              onClick={() => dispatch({ type: QUIZ_ACTIONS.RESTART_QUIZ })}
            >
              Restart
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
