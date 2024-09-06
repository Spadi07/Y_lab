import { useState } from "react";
import { IUser } from "./utils/db";
import { myFetch } from "./utils/myFetch";
import "../src/css/style.scss";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState<string>("");

  const login = async () => {
    setError("");

    if (!email || !password) {
      setError("Введите имя пользователя и пароль");
      return;
    }

    //Фейковый запрос на сервер
    const result = await myFetch(email, password);

    if (!result) {
      setError("Кажется вы где-то ошиблись");
      return;
    }

    setUser(result);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth">
      <div className="auth-info">
        {error && <div className="error">{error}</div>}
        {user && !error && (
          <div className="user-info">
            <span className="username">{`Вы зашли как: ${user.name}`}</span>
            <button
              className="logout-button"
              onClick={() => setUser(undefined)}
            >
              Выйти
            </button>
          </div>
        )}
      </div>

      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-block">
          <input
            type="text"
            value={email}
            name="email"
            placeholder="&nbsp;"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-block">
          <input
            type="password"
            value={password}
            name="password"
            placeholder="&nbsp;"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="login-button" onClick={() => login()}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default App;