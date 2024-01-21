import { useState } from "react";
import "./LoginFormStyles.css";
import Snackbar from "../Snackbar/Snackbar";
import { Link } from "react-router-dom";
import Mountain2 from "../../assets/2.jpg";

export const Login = () =>{
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
  
  
    const handleShowSnackbar = (message:string) => {
      setSnackbarMessage(message);
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    };
  
  return (
    <div className="flex-login">
    <div className="form-container">
      <h1>Login to use our services</h1>
      <form>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button type="button" onClick={() => handleShowSnackbar('Zalogowano pomyślnie')}>Login</button>
        <Link className="link" to={'/signup'}><button type="button">Register</button></Link>
      </form>
      {showSnackbar && <Snackbar message={snackbarMessage} />}
    </div>
    <div className="photo">
      <img src={Mountain2}/>
    </div>
    </div>
  );
}

export default Login;