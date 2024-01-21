import Footer from "../../component/Footer/Footer";
import Login from "../../component/LogIn/LogIn";
import Navbar from "../../component/Navbar/Navbar";


export const LoginView=() =>{
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

export default LoginView;