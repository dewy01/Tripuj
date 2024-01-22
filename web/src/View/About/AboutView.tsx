import Footer from "../../component/Footer/Footer";
import Hero from "../../component/Hero/Hero";
import Navbar from "../../component/Navbar/Navbar";
import AboutImg from "../../assets/night.jpg";
import About from "../../component/About/About";
import WhyUs from "../../component/WhyUs/WhyUs";


export const AboutView =()=> {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="O nas"
        btnClass="hide"
      />
      <About />
      <WhyUs/>
      <Footer />
    </>
  );
}

export default AboutView;