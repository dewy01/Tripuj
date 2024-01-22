import Destination from "../../component/Destination/Destination";
import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import heroimage from "../../assets/1.jpg";
import Trip from "../../component/Trip/Trip";
import Middle from "../../component/Middle/Middle";
import SearchDestination from "../../component/SearchDestination/SearchDestination";


export const Home =() =>{
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={heroimage}
        title="Realizujemy Twoje plany"
        text="Wydaj mniej, zwiedź więcej"
        buttonText="Podróżuj z nami"
        url="/"
        btnClass="show"
      />
      <Middle/>
      <SearchDestination/>
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;