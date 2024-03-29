import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from './View/Service/Service';
import Contact from './View/Contact/Contact';
import Home from './View/Home/Home';
import AboutView from './View/About/AboutView';
import SignupView from './View/Signup/SignupView';
import LoginView from './View/Login/LoginView';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
