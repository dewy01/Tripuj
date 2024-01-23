import { useState } from "react";
import "./LoginFormStyles.css";
import Snackbar from "../Snackbar/Snackbar";
import { Link } from "react-router-dom";
import Mountain2 from "../../assets/2.jpg";

export const Login = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 5000);
  };

  const handleLogin = () => {
    if (email === "admin@admin.com" && password === "admin") {
      handleShowSnackbar("Zalogowano pomyślnie");
    } else {
      handleShowSnackbar("Błąd logowania. Sprawdź dane i spróbuj ponownie.");
    }
  };

  return (
    <div className="flex-login">
      <div className="form-container">
        <h1>Login to use our services</h1>
        <form>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <Link className="link" to={"/signup"}>
            <button type="button">Register</button>
          </Link>
        </form>
        {showSnackbar && <Snackbar message={snackbarMessage} />}
      </div>
      <div className="photo">
        <img src={Mountain2} />
      </div>
    </div>
  );
};

export default Login;
