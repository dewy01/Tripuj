import ContactForm from "../../component/ContactForm/ContactForm";
import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import AboutImg from "../../assets/2.jpg";


export const Contact=() =>{
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="Kontakt"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;