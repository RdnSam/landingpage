import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";

import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Services } from "./components/Services";
import { AboutIntro } from "./components/AboutIntro";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <AboutIntro />
       <Features />
      <HowItWorks />
     
      <Services />
      <Cta />
      <Testimonials />
      {/* <Team /> */}
      <Pricing />
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
