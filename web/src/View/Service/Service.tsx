
import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import AboutImg from "../../assets/night.jpg";
import Trip from "../../component/Trip/Trip";


function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="Usługi"
        text="Nasze ostatnie wycieczki"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;