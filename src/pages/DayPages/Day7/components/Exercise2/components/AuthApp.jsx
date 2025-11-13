// AuthApp.jsx — UI only
import { Card, Button, Input } from "@ui";
import { useReducer, useState } from "react";
const AUTH_ACTIONS = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  UPDATE_PROFILE: "UPDATE_PROFILE",
};
const mockLogin = async ({ email, password }) => {
  try {
    if (email === "tuan@example.com" && password === "123456") {
      const res = await new Promise((resolve, reject) =>
        setTimeout(() => {
          const success = Math.random() < 0.7; // 70% thanh cong
          if (success) {
            const user = {
              id: "id1",
              name: "Tuan Le",
              email,
              avatar: "https://i.pravatar.cc/100?u=demo",
            };
            const token = "SUPER_SECRET_TOKEN";
            resolve({ user, token });
          } else {
            reject(new Error("Email hoặc mật khẩu không đúng"));
          }
        }, 3000)
      );
      return res;
    } else {
      throw new Error("Email hoặc mật khẩu không đúng");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
function authReducer(state, action) {
  // TODO: Implement reducer
  // State structure:
  // {
  //   user: { id, name, email, avatar } | null,
  //   isAuthenticated: boolean,
  //   isLoading: boolean,
  //   error: string | null,
  //   token: string | null
  // }
  // States: idle, loading, authenticated, error
  // Transitions:
  // - idle -> loading (LOGIN_START)
  // - loading -> authenticated (LOGIN_SUCCESS)
  // - loading -> error (LOGIN_FAILURE)
  // - authenticated -> idle (LOGOUT)

  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, isLoading: true, error: null };
    case AUTH_ACTIONS.LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: true,
        isLoading: false,
        token,
      };
    }
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
        token: null,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        token: null,
      };
    case AUTH_ACTIONS.REFRESH_TOKEN:
      return { ...state, token: action.payload };
    case AUTH_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
}

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,
};

// lazy initializer function
function init(initialState) {
  try {
    const saved = localStorage.getItem("auth");

    if (saved) {
      const { user, token } = JSON.parse(saved);
      return {
        ...initialState,
        user,
        token,
        isAuthenticated: true,
      };
    }

    return initialState;
  } catch (e) {
    console.error(e.message);
    return initialState;
  }
}

// ### ✅ Giải thích:
// 1. `useReducer(reducer, initialArg, init)`
//  initialArg =initialState
//  init = hàm lazy initializer
// 2. init(initialArg) chỉ chạy 1 lần khi component mount.
// 3. Tiết kiệm việc gọi `localStorage.getItem` trong `useEffect`.
// 4. Code cleaner, reducer state luôn khởi tạo đúng.

export default function AuthApp() {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // TODO: Implement
  // - handleLogin (async)
  // - handleLogout
  // - handleUpdateProfile
  // - Load user from localStorage on mount
  // - Save to localStorage on login
  // - Clear localStorage on logout
  const handleLogin = async () => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START });
    try {
      const userCredentials = {
        email: credentials.email.trim(),
        password: credentials.password.trim(),
      };
      const res = await mockLogin(userCredentials);
      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: res });
      localStorage.setItem("auth", JSON.stringify(res));
    } catch (e) {
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: e.message });
    }
  };
  const handleLogout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
    localStorage.removeItem("auth");
  };
  const handleUpdateProfile = () => {
    dispatch({
      type: AUTH_ACTIONS.UPDATE_PROFILE,
      payload: { name: "John Doe", email: "johndoe@example.com" },
    });
  };
  const { user, isAuthenticated, isLoading, error, token } = state;
  return (
    <div className="auth-app">
      {/* Khi chưa đăng nhập */}
      {!isAuthenticated && (
        <Card className="auth-card">
          <Card.Header>
            <Card.Title>Đăng nhập</Card.Title>
            <Card.Subtitle>Account : </Card.Subtitle>
            <Card.Subtitle>tuan@example.com | 123456</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            <div className="form-fields">
              <Input
                label="Email"
                placeholder="you@example.com"
                name="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <Input
                label="Mật khẩu"
                type="password"
                placeholder="••••••••"
                name="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              {isLoading && <div className="auth-progress-bar"></div>}
              {error && (
                <div className="error-message">
                  {error || `Email hoặc mật khẩu không đúng`}
                </div>
              )}
            </div>
          </Card.Content>

          <Card.Footer>
            <Button
              disabled={isLoading}
              onClick={handleLogin}
              variant="primary"
              size="lg"
            >
              Đăng nhập
            </Button>
          </Card.Footer>
        </Card>
      )}

      {/* Khi đã đăng nhập */}
      {isAuthenticated && user && (
        <Card className="auth-card">
          <Card.Header>
            <Card.Title>Bảng điều khiển</Card.Title>
            <Card.Subtitle>Xin chào, {user.name}</Card.Subtitle>
          </Card.Header>

          <Card.Content>
            <div className="user-section">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <p>{user.email}</p>
            </div>
          </Card.Content>

          <Card.Footer className="text-center">
            <Button
              onClick={handleUpdateProfile}
              variant="secondary"
              className="me-1"
            >
              Cập nhật hồ sơ
            </Button>
            <Button onClick={handleLogout} variant="danger">
              Đăng xuất
            </Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}
