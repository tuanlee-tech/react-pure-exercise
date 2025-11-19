import ExerciseCard from "../../../../components/ExerciseCard";

export default function HomeWork() {
  return (
    <ExerciseCard>
      <ExerciseCard.Header order={"#"} title="Home Work" />

      <ExerciseCard.Description>
        {`
1. Social Media Feed
// TODO: Implement feed với proper state management
// Features:
// - Posts với likes, comments, shares
// - Normalized state (users, posts, comments)
// - Like/unlike (optimistic update)
// - Add comment
// - Filter posts (following, recommended, trending)
// - Infinite scroll
// - Derived state: stats per post

2. Kanban Board v2
// TODO: Trello-like board
// Features:
// - Multiple boards
// - Normalized state (boards, lists, cards)
// - Drag & drop cards between lists
// - Card details (description, checklist, due date)
// - Search cards across all boards
// - Filter by labels, assignee
// - Statistics dashboard (derived state)

3. E-learning Platform
// TODO: Course management
// Features:
// - Courses, modules, lessons (normalized)
// - Progress tracking per user
// - Quizzes với scores
// - Certificate generation (derived state)
// - Leaderboard (derived state)
// - Course completion % (derived state)

4. Expense Splitter
// TODO: Split expenses among friends
// Features:
// - Users, expenses, payments (normalized)
// - Add expense với multiple payers
// - Calculate who owes whom (derived state)
// - Settle debts
// - Export settlement summary
// - Statistics per user

5. Project Management Tool (Challenge)
// TODO: Asana/Jira-like tool
// Features:
// - Projects, tasks, subtasks, comments
// - Normalized state structure
// - Task dependencies
// - Timeline view (Gantt chart)
// - Team members và assignments
// - Workload per member (derived state)
// - Project completion (derived state)
// - Time tracking
// - Export reports
`}
      </ExerciseCard.Description>

      <ExerciseCard.Code>
        {`


### **1. Social Media Feed**
// Social Media Feed với Normalized State
import React, { useState, useMemo, useCallback } from 'react';

function SocialFeed() {
  // ✅ Normalized state structure
  const [state, setState] = useState({
    users: {
      1: { id: 1, name: 'John Doe', avatar: '👨' },
      2: { id: 2, name: 'Jane Smith', avatar: '👩' },
      3: { id: 3, name: 'Bob Wilson', avatar: '👴' }
    },
    posts: {
      1: { 
        id: 1, 
        content: 'Learning React!', 
        authorId: 1, 
        likes: [2, 3], 
        commentIds: [1, 2],
        shares: 5,
        timestamp: Date.now() - 3600000
      },
      2: { 
        id: 2, 
        content: 'State management patterns', 
        authorId: 2, 
        likes: [1], 
        commentIds: [3],
        shares: 2,
        timestamp: Date.now() - 7200000
      }
    },
    comments: {
      1: { id: 1, postId: 1, authorId: 2, text: 'Great post!' },
      2: { id: 2, postId: 1, authorId: 3, text: 'Thanks for sharing!' },
      3: { id: 3, postId: 2, authorId: 1, text: 'Very helpful' }
    },
    postIds: [1, 2]
  });

  const [filter, setFilter] = useState('all'); // 'all' | 'following' | 'trending'
  const [currentUserId] = useState(1);

  // ✅ Derived state - Denormalize posts with details
  const postsWithDetails = useMemo(() => {
    return state.postIds.map(postId => {
      const post = state.posts[postId];
      const author = state.users[post.authorId];
      const comments = post.commentIds.map(cId => ({
        ...state.comments[cId],
        author: state.users[state.comments[cId].authorId]
      }));

      return {
        ...post,
        author,
        comments,
        likeCount: post.likes.length,
        isLiked: post.likes.includes(currentUserId)
      };
    });
  }, [state, currentUserId]);

  // ✅ Filtered posts
  const filteredPosts = useMemo(() => {
    switch (filter) {
      case 'trending':
        return postsWithDetails
          .filter(p => p.likeCount > 1 || p.shares > 3)
          .sort((a, b) => b.likeCount - a.likeCount);
      case 'following':
        return postsWithDetails.filter(p => p.authorId !== currentUserId);
      default:
        return postsWithDetails;
    }
  }, [postsWithDetails, filter, currentUserId]);

  // Like/Unlike (Optimistic update)
  const toggleLike = useCallback((postId) => {
    setState(prev => {
      const post = prev.posts[postId];
      const isLiked = post.likes.includes(currentUserId);
      
      return {
        ...prev,
        posts: {
          ...prev.posts,
          [postId]: {
            ...post,
            likes: isLiked
              ? post.likes.filter(id => id !== currentUserId)
              : [...post.likes, currentUserId]
          }
        }
      };
    });
  }, [currentUserId]);

  // Add comment
  const addComment = useCallback((postId, text) => {
    const commentId = Date.now();
    
    setState(prev => ({
      ...prev,
      comments: {
        ...prev.comments,
        [commentId]: {
          id: commentId,
          postId,
          authorId: currentUserId,
          text
        }
      },
      posts: {
        ...prev.posts,
        [postId]: {
          ...prev.posts[postId],
          commentIds: [...prev.posts[postId].commentIds, commentId]
        }
      }
    }));
  }, [currentUserId]);

  return (
    <div className="social-feed">
      <h1>Social Feed</h1>

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('following')}>Following</button>
        <button onClick={() => setFilter('trending')}>Trending</button>
      </div>

      {/* Posts */}
      {filteredPosts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <span>{post.author.avatar} {post.author.name}</span>
            <small>{new Date(post.timestamp).toLocaleString()}</small>
          </div>
          
          <p className="post-content">{post.content}</p>
          
          <div className="post-actions">
            <button onClick={() => toggleLike(post.id)}>
              {post.isLiked ? '❤️' : '🤍'} {post.likeCount}
            </button>
            <span>💬 {post.comments.length}</span>
            <span>🔄 {post.shares}</span>
          </div>

          {/* Comments */}
          <div className="comments">
            {post.comments.map(comment => (
              <div key={comment.id} className="comment">
                <strong>{comment.author.avatar} {comment.author.name}:</strong>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>

          {/* Add comment */}
          <input
            placeholder="Add a comment..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addComment(post.id, e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

// KEY PATTERNS USED:
// ✅ Normalized state (users, posts, comments)
// ✅ Derived state với useMemo (denormalize, filter)
// ✅ Optimistic updates (toggleLike)
// ✅ State colocation pattern

---

### **2. Kanban Board v2**
// Kanban Board với Normalized State
import React, { useState, useMemo, useCallback } from 'react';

function KanbanBoard() {
  const [state, setState] = useState({
    boards: {
      1: { id: 1, name: 'Project Alpha', listIds: [1, 2, 3] }
    },
    lists: {
      1: { id: 1, boardId: 1, name: 'To Do', cardIds: [1, 2] },
      2: { id: 2, boardId: 1, name: 'In Progress', cardIds: [3] },
      3: { id: 3, boardId: 1, name: 'Done', cardIds: [] }
    },
    cards: {
      1: { 
        id: 1, 
        listId: 1, 
        title: 'Design homepage', 
        description: 'Create mockups',
        labels: ['design', 'urgent'],
        assignee: 'John',
        dueDate: '2024-01-15'
      },
      2: { 
        id: 2, 
        listId: 1, 
        title: 'API integration',
        labels: ['backend'],
        assignee: 'Jane'
      },
      3: { 
        id: 3, 
        listId: 2, 
        title: 'Setup database',
        labels: ['backend'],
        assignee: 'John'
      }
    },
    currentBoardId: 1
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filterLabel, setFilterLabel] = useState('all');

  // ✅ Derived state - All cards with search & filter
  const filteredCards = useMemo(() => {
    const allCards = Object.values(state.cards);
    
    return allCards.filter(card => {
      const matchSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLabel = filterLabel === 'all' || card.labels?.includes(filterLabel);
      return matchSearch && matchLabel;
    });
  }, [state.cards, searchQuery, filterLabel]);

  // ✅ Derived state - Statistics
  const stats = useMemo(() => {
    const cards = Object.values(state.cards);
    return {
      total: cards.length,
      todo: cards.filter(c => c.listId === 1).length,
      inProgress: cards.filter(c => c.listId === 2).length,
      done: cards.filter(c => c.listId === 3).length,
      byLabel: cards.reduce((acc, card) => {
        card.labels?.forEach(label => {
          acc[label] = (acc[label] || 0) + 1;
        });
        return acc;
      }, {})
    };
  }, [state.cards]);

  // Move card between lists
  const moveCard = useCallback((cardId, fromListId, toListId) => {
    setState(prev => ({
      ...prev,
      cards: {
        ...prev.cards,
        [cardId]: {
          ...prev.cards[cardId],
          listId: toListId
        }
      },
      lists: {
        ...prev.lists,
        [fromListId]: {
          ...prev.lists[fromListId],
          cardIds: prev.lists[fromListId].cardIds.filter(id => id !== cardId)
        },
        [toListId]: {
          ...prev.lists[toListId],
          cardIds: [...prev.lists[toListId].cardIds, cardId]
        }
      }
    }));
  }, []);

  // Add card
  const addCard = useCallback((listId, title) => {
    const cardId = Date.now();
    
    setState(prev => ({
      ...prev,
      cards: {
        ...prev.cards,
        [cardId]: {
          id: cardId,
          listId,
          title,
          labels: [],
          assignee: null
        }
      },
      lists: {
        ...prev.lists,
        [listId]: {
          ...prev.lists[listId],
          cardIds: [...prev.lists[listId].cardIds, cardId]
        }
      }
    }));
  }, []);

  const currentBoard = state.boards[state.currentBoardId];

  return (
    <div className="kanban-board">
      <h1>{currentBoard.name}</h1>

      {/* Search & Filter */}
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search cards..."
        />
        <select value={filterLabel} onChange={(e) => setFilterLabel(e.target.value)}>
          <option value="all">All Labels</option>
          <option value="design">Design</option>
          <option value="backend">Backend</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      {/* Statistics */}
      <div className="stats">
        <p>Total: {stats.total}</p>
        <p>To Do: {stats.todo}</p>
        <p>In Progress: {stats.inProgress}</p>
        <p>Done: {stats.done}</p>
      </div>

      {/* Lists */}
      <div className="board-lists">
        {currentBoard.listIds.map(listId => {
          const list = state.lists[listId];
          const cards = list.cardIds
            .map(cId => state.cards[cId])
            .filter(card => filteredCards.find(fc => fc.id === card.id));

          return (
            <div key={listId} className="list">
              <h3>{list.name} ({cards.length})</h3>
              
              {cards.map(card => (
                <div key={card.id} className="card" draggable>
                  <h4>{card.title}</h4>
                  {card.description && <p>{card.description}</p>}
                  {card.labels && (
                    <div className="labels">
                      {card.labels.map(label => (
                        <span key={label} className="label">{label}</span>
                      ))}
                    </div>
                  )}
                  {card.assignee && <span>👤 {card.assignee}</span>}
                  {card.dueDate && <span>📅 {card.dueDate}</span>}
                  
                  {/* Move buttons */}
                  {listId !== 2 && (
                    <button onClick={() => moveCard(card.id, listId, 2)}>
                      → In Progress
                    </button>
                  )}
                  {listId !== 3 && (
                    <button onClick={() => moveCard(card.id, listId, 3)}>
                      → Done
                    </button>
                  )}
                </div>
              ))}

              <button onClick={() => {
                const title = prompt('Card title:');
                if (title) addCard(listId, title);
              }}>
                + Add Card
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// KEY PATTERNS:
// ✅ Normalized: boards → lists → cards
// ✅ Derived state: filtered cards, statistics
// ✅ Search & filter across all cards
// ✅ Move cards between lists

---

### **3. E-learning Platform**
// E-learning Platform với Progress Tracking
import React, { useState, useMemo, useCallback } from 'react';

function ELearningPlatform() {
  const [state, setState] = useState({
    courses: {
      1: { 
        id: 1, 
        name: 'React Fundamentals', 
        moduleIds: [1, 2],
        quizId: 1
      },
      2: { 
        id: 2, 
        name: 'Advanced React', 
        moduleIds: [3],
        quizId: 2
      }
    },
    modules: {
      1: { id: 1, courseId: 1, name: 'Getting Started', lessonIds: [1, 2] },
      2: { id: 2, courseId: 1, name: 'State Management', lessonIds: [3] },
      3: { id: 3, courseId: 2, name: 'Performance', lessonIds: [4] }
    },
    lessons: {
      1: { id: 1, moduleId: 1, name: 'What is React?', duration: 10 },
      2: { id: 2, moduleId: 1, name: 'JSX Basics', duration: 15 },
      3: { id: 3, moduleId: 2, name: 'useState Hook', duration: 20 },
      4: { id: 4, moduleId: 3, name: 'React.memo', duration: 25 }
    },
    quizzes: {
      1: { id: 1, courseId: 1, questions: 10, passingScore: 70 },
      2: { id: 2, courseId: 2, questions: 15, passingScore: 80 }
    },
    // User progress
    progress: {
      completedLessons: [1, 2], // lesson IDs
      quizScores: {
        1: 85 // quiz 1: 85%
      }
    },
    leaderboard: [
      { userId: 1, name: 'John', points: 850 },
      { userId: 2, name: 'Jane', points: 920 },
      { userId: 3, name: 'Bob', points: 780 }
    ]
  });

  const [currentCourseId, setCurrentCourseId] = useState(1);

  // ✅ Derived: Course completion %
  const courseProgress = useMemo(() => {
    return Object.values(state.courses).map(course => {
      const modules = course.moduleIds.map(mid => state.modules[mid]);
      const allLessonIds = modules.flatMap(m => m.lessonIds);
      const completedInCourse = allLessonIds.filter(lid => 
        state.progress.completedLessons.includes(lid)
      );
      
      const percentage = (completedInCourse.length / allLessonIds.length) * 100;
      const quizPassed = state.progress.quizScores[course.quizId] >= 
                         state.quizzes[course.quizId].passingScore;

      return {
        courseId: course.id,
        courseName: course.name,
        percentage: Math.round(percentage),
        lessonsCompleted: completedInCourse.length,
        totalLessons: allLessonIds.length,
        quizScore: state.progress.quizScores[course.quizId],
        quizPassed,
        canGetCertificate: percentage === 100 && quizPassed
      };
    });
  }, [state.courses, state.modules, state.progress, state.quizzes]);

  // ✅ Derived: Leaderboard sorted
  const sortedLeaderboard = useMemo(() => {
    return [...state.leaderboard].sort((a, b) => b.points - a.points);
  }, [state.leaderboard]);

  // Complete lesson
  const completeLesson = useCallback((lessonId) => {
    setState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        completedLessons: [...prev.progress.completedLessons, lessonId]
      }
    }));
  }, []);

  // Submit quiz score
  const submitQuiz = useCallback((quizId, score) => {
    setState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        quizScores: {
          ...prev.progress.quizScores,
          [quizId]: score
        }
      }
    }));
  }, []);

  const currentCourse = state.courses[currentCourseId];
  const currentProgress = courseProgress.find(p => p.courseId === currentCourseId);

  return (
    <div className="elearning-platform">
      <h1>📚 E-Learning Platform</h1>

      {/* Course List */}
      <div className="courses">
        {Object.values(state.courses).map(course => {
          const progress = courseProgress.find(p => p.courseId === course.id);
          return (
            <div 
              key={course.id} 
              className="course-card"
              onClick={() => setCurrentCourseId(course.id)}
            >
              <h3>{course.name}</h3>
              <div className="progress-bar">
                <div style={{ width: \`\${progress.percentage}%\` }}>
                  {progress.percentage}%
                </div>
              </div>
              <p>{progress.lessonsCompleted}/{progress.totalLessons} lessons</p>
              {progress.canGetCertificate && <span>🏆 Certificate Ready!</span>}
            </div>
          );
        })}
      </div>

      {/* Current Course Detail */}
      <div className="course-detail">
        <h2>{currentCourse.name}</h2>
        <p>Progress: {currentProgress.percentage}%</p>

        {/* Modules & Lessons */}
        {currentCourse.moduleIds.map(moduleId => {
          const module = state.modules[moduleId];
          return (
            <div key={moduleId} className="module">
              <h3>{module.name}</h3>
              {module.lessonIds.map(lessonId => {
                const lesson = state.lessons[lessonId];
                const isCompleted = state.progress.completedLessons.includes(lessonId);
                return (
                  <div key={lessonId} className="lesson">
                    <span>{isCompleted ? '✅' : '⭕'} {lesson.name}</span>
                    <span>{lesson.duration} min</span>
                    {!isCompleted && (
                      <button onClick={() => completeLesson(lessonId)}>
                        Complete
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Quiz */}
        <div className="quiz">
          <h3>Final Quiz</h3>
          {currentProgress.quizScore ? (
            <p>
              Score: {currentProgress.quizScore}% 
              {currentProgress.quizPassed ? ' ✅ Passed' : ' ❌ Failed'}
            </p>
          ) : (
            <button onClick={() => {
              const score = Math.floor(Math.random() * 40) + 60;
              submitQuiz(currentCourse.quizId, score);
            }}>
              Take Quiz
            </button>
          )}
        </div>

        {/* Certificate */}
        {currentProgress.canGetCertificate && (
          <div className="certificate">
            <h3>🎓 Certificate Available!</h3>
            <button>Download Certificate</button>
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="leaderboard">
        <h3>🏆 Leaderboard</h3>
        {sortedLeaderboard.map((user, index) => (
          <div key={user.userId} className="leaderboard-item">
            <span>#{index + 1}</span>
            <span>{user.name}</span>
            <span>{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// KEY PATTERNS:
// ✅ Normalized: courses → modules → lessons
// ✅ Derived: completion %, certificate eligibility
// ✅ Progress tracking per user
// ✅ Leaderboard sorting

---

### **4. Expense Splitter** + **5. Project Management (Tóm gọn)**

// 4. Expense Splitter
function ExpenseSplitter() {
  const [state, setState] = useState({
    users: {
      1: { id: 1, name: 'John' },
      2: { id: 2, name: 'Jane' },
      3: { id: 3, name: 'Bob' }
    },
    expenses: {
      1: { 
        id: 1, 
        description: 'Dinner', 
        amount: 150000, 
        paidBy: 1, 
        splitBetween: [1, 2, 3] 
      },
      2: { 
        id: 2, 
        description: 'Taxi', 
        amount: 50000, 
        paidBy: 2, 
        splitBetween: [1, 2] 
      }
    }
  });

  // ✅ DERIVED: Who owes whom (key calculation!)
  const settlements = useMemo(() => {
    const balances = {}; // { userId: balance }
    
    // Initialize
    Object.keys(state.users).forEach(id => {
      balances[id] = 0;
    });

    // Calculate balances
    Object.values(state.expenses).forEach(expense => {
      const perPerson = expense.amount / expense.splitBetween.length;
      
      // Payer gets credit
      balances[expense.paidBy] += expense.amount;
      
      // Each person owes their share
      expense.splitBetween.forEach(userId => {
        balances[userId] -= perPerson;
      });
    });

    // Generate settlements
    const settlements = [];
    const creditors = Object.entries(balances).filter(([_, bal]) => bal > 0);
    const debtors = Object.entries(balances).filter(([_, bal]) => bal < 0);

    debtors.forEach(([debtorId, debtAmount]) => {
      creditors.forEach(([creditorId, creditAmount]) => {
        if (creditAmount > 0 && debtAmount < 0) {
          const amount = Math.min(creditAmount, -debtAmount);
          settlements.push({
            from: state.users[debtorId].name,
            to: state.users[creditorId].name,
            amount: Math.round(amount)
          });
          balances[creditorId] -= amount;
          balances[debtorId] += amount;
        }
      });
    });

    return settlements;
  }, [state.expenses, state.users]);

  const addExpense = (description, amount, paidBy, splitBetween) => {
    const id = Date.now();
    setState(prev => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        [id]: { id, description, amount, paidBy, splitBetween }
      }
    }));
  };

  return (
    <div>
      <h1>💰 Expense Splitter</h1>
      
      {/* Expenses */}
      {Object.values(state.expenses).map(exp => (
        <div key={exp.id}>
          {exp.description}: {exp.amount.toLocaleString()}đ
          (paid by {state.users[exp.paidBy].name})
        </div>
      ))}

      {/* Settlements */}
      <h3>Who Owes Whom:</h3>
      {settlements.map((s, i) => (
        <div key={i}>
          {s.from} owes {s.to}: {s.amount.toLocaleString()}đ
        </div>
      ))}
    </div>
  );
}

// 5. Project Management (Simplified)
function ProjectManagement() {
  const [state, setState] = useState({
    projects: { 1: { id: 1, name: 'Website Redesign', taskIds: [1, 2, 3] } },
    tasks: {
      1: { id: 1, title: 'Design', assignee: 'John', hours: 20, completed: true },
      2: { id: 2, title: 'Frontend', assignee: 'Jane', hours: 40, completed: false },
      3: { id: 3, title: 'Backend', assignee: 'John', hours: 30, completed: false }
    },
    members: ['John', 'Jane', 'Bob']
  });

  // ✅ DERIVED: Workload per member
  const workload = useMemo(() => {
    const load = {};
    
    Object.values(state.tasks).forEach(task => {
      if (!task.completed) {
        load[task.assignee] = (load[task.assignee] || 0) + task.hours;
      }
    });

    return load;
  }, [state.tasks]);

  // ✅ DERIVED: Project completion
  const projectCompletion = useMemo(() => {
    return Object.values(state.projects).map(project => {
      const tasks = project.taskIds.map(id => state.tasks[id]);
      const completed = tasks.filter(t => t.completed).length;
      return {
        projectId: project.id,
        name: project.name,
        percentage: Math.round((completed / tasks.length) * 100),
        totalHours: tasks.reduce((sum, t) => sum + t.hours, 0)
      };
    });
  }, [state.projects, state.tasks]);

  return (
    <div>
      <h1>📊 Project Management</h1>
      
      {/* Project Progress */}
      {projectCompletion.map(p => (
        <div key={p.projectId}>
          <h3>{p.name}</h3>
          <progress value={p.percentage} max="100" />
          <span>{p.percentage}%</span>
          <p>Total: {p.totalHours}h</p>
        </div>
      ))}

      {/* Workload */}
      <h3>Team Workload:</h3>
      {Object.entries(workload).map(([member, hours]) => (
        <div key={member}>
          {member}: {hours} hours remaining
        </div>
      ))}
    </div>
  );
}

/* 
=== TÓM TẮT PATTERNS ĐÃ DÙNG ===

1. NORMALIZED STATE:
   - Flat structure: users, expenses, tasks
   - Reference bằng IDs
   - Dễ update, tránh nested hell

2. DERIVED STATE với useMemo:
   - ExpenseSplitter: settlements (who owes whom)
   - ELearning: completion %, certificate eligibility
   - Kanban: filtered cards, statistics
   - Project: workload, completion %

3. STATE COLOCATION:
   - Filter/search state ở component dùng nó
   - Modal state ở component modal
   - Form state ở form component

4. LIFTING STATE UP:
   - Shared state lên parent
   - Pass callbacks xuống children
   - Single source of truth

5. OPTIMIZATION:
   - useMemo cho expensive calculations
   - useCallback cho event handlers
   - Tránh unnecessary re-renders

KEY TAKEAWAY:
- Normalize khi có relationships
- Derive khi có thể calculate
- Memoize khi expensive
- Colocate khi có thể
*/

## 📝 Tổng kết Patterns đã dùng:

### **1. Social Media Feed**
- ✅ Normalized: users, posts, comments
- ✅ Derived: denormalize, filter trending
- ✅ Optimistic updates: like/unlike
- ✅ Add comments với ID references

### **2. Kanban Board**
- ✅ Normalized: boards → lists → cards
- ✅ Derived: filtered cards, statistics
- ✅ Search & filter across all cards
- ✅ Move cards: update both card.listId và list.cardIds

### **3. E-Learning Platform**
- ✅ Normalized: courses → modules → lessons
- ✅ Derived: **completion %** (key calculation)
- ✅ Certificate eligibility: 100% + quiz passed
- ✅ Leaderboard sorting

### **4. Expense Splitter**
- ✅ Normalized: users, expenses
- ✅ **Derived: settlements** (who owes whom) - complex calculation
- ✅ Balance algorithm: credit - debit
- ✅ Minimize transactions

### **5. Project Management**
- ✅ Normalized: projects, tasks
- ✅ Derived: **workload per member**
- ✅ Derived: **project completion %**
- ✅ Filter incomplete tasks

## 🎯 Key State Management Patterns:


// 1. NORMALIZED STATE STRUCTURE
{
  entities: { 1: {...}, 2: {...} },  // byId
  ids: [1, 2, 3]                      // allIds
}

// 2. DERIVED STATE (useMemo)
const filtered = useMemo(() => {
  return data.filter(...)
}, [data, filters]);

// 3. COMPLEX CALCULATIONS
const settlements = useMemo(() => {
  // Calculate balances
  // Generate settlements
  return results;
}, [expenses, users]);

// 4. UPDATE NORMALIZED STATE
setState(prev => ({
  ...prev,
  entities: {
    ...prev.entities,
    [id]: { ...prev.entities[id], field: value }
  }
}));

// 5. DENORMALIZE FOR RENDER
const itemsWithDetails = ids.map(id => ({
  ...entities[id],
  relatedData: otherEntities[entities[id].relatedId]
}));


Tất cả đều follow principles:
- **Normalize** khi có relationships
- **Derive** thay vì duplicate
- **useMemo** cho expensive calculations
- **Single source of truth**

`}
      </ExerciseCard.Code>
    </ExerciseCard>
  );
}
