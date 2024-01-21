import { useState } from "react";
import "./ContactFormStyles.css";
import Snackbar from "../Snackbar/Snackbar";

export const ContactForm = () =>{
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
      <h1>Send a message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows={4}></textarea>
        <button type="button" onClick={() => handleShowSnackbar('Wiadomość wysłana')}>Send Message</button>
      </form>
      {showSnackbar && <Snackbar message={snackbarMessage} />}
    </div>
  );
}

export default ContactForm;