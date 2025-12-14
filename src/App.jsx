import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCTA from "./components/HeroCTA";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Trustworthiness from "./components/Trustworthiness";

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <Hero />
      <AboutUs />
      <Features />
      <Trustworthiness />
      <Services />
      <Testimonials />
      <HeroCTA />
      <Footer />
    </div>
  );
}

export default App;
