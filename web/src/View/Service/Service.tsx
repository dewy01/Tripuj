
import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import Mountain3 from "../../assets/3.jpg";
import Clients from "../../component/Clients/Clients";
import TripsService from "../../component/TripsService/Trip";


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
      <Clients/>
      <TripsService />
      <Footer />
    </>
  );
}

export default Service;