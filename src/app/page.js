import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TeckStack from "./sections/TeckStack";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      <NavBar />
      <SideBar />
      <Hero/>
      <About />
      <TeckStack />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
