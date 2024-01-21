import { useState } from "react";
import "./SignupFormStyles.css";
import Snackbar from "../Snackbar/Snackbar";
import { Link } from "react-router-dom";

export const Signup = () =>{
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
    <div className="form-container">
      <h1>Register to use our services</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button type="button" onClick={() => handleShowSnackbar('Zarejestrowano pomyślnie')}>Register</button>
        <Link className="link" to={'/login'}><button type="button">Log in</button></Link>
      </form>
      {showSnackbar && <Snackbar message={snackbarMessage} />}
    </div>
  );
}

export default Signup;