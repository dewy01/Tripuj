
import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import Trip from "../../component/Trip/Trip";
import Mountain3 from "../../assets/3.jpg";


function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Mountain3}
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