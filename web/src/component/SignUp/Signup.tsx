import { useState } from "react";
import "./SignupFormStyles.css";
import Snackbar from "../Snackbar/Snackbar";
import { Link } from "react-router-dom";
import Mountain1 from "../../assets/1.jpg";

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateName = () => {
      if (name.trim() === "") {
        setNameError("Name is required");
        return false;
      }
      setNameError("");
      return true;
    };
    
    const validateEmail = () => {
      if (email.trim() === "") {
        setEmailError("Email is required");
        return false;
      }
      setEmailError("");
      return true;
    };
    
    const validatePassword = () => {
      if (password.trim() === "") {
        setPasswordError("Password is required");
        return false;
      }
      setPasswordError("");
      return true;
    };
    
  
  return (
    <div className="flex-signup">
    <div className="photo">
    <img src={Mountain1}/>
  </div>
    <div className="form-container">
      <h1>Register to use our services</h1>
      <form>
        
        <div className="signup-validate">
        <span className="error">{nameError}</span>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={validateName}
      />
      
      </div>

    <div className="signup-validate">
    <span className="error">{emailError}</span>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
      />
      
      </div>

      <div className="signup-validate">
      <span className="error">{passwordError}</span>
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validatePassword}
      />
      
      </div>

      <button
        type="button"
        onClick={() => {
          if (validateName() && validateEmail() && validatePassword()) {
            handleShowSnackbar('Zarejestrowano pomyślnie');
          }
        }}
      >
        Register
      </button>
        <Link className="link" to={'/login'}><button type="button">Log in</button></Link>
      </form>
      {showSnackbar && <Snackbar message={snackbarMessage} />}
    </div>
    </div>
  );
}

export default Signup;